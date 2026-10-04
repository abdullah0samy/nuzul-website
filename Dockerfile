# Multi-stage build optimized for Production & Coolify Deployment
# Stage 1: Build Frontend Assets
FROM node:20-alpine AS builder

WORKDIR /app

# Copy dependency manifests
COPY package*.json ./

# Install exact dependencies
RUN npm ci || npm install --legacy-peer-deps

# Copy source code
COPY . .

# Build production bundle with Vite
RUN npm run build

# Stage 2: Production Nginx Server
FROM nginx:alpine

WORKDIR /usr/share/nginx/html

# Clean default assets
RUN rm -rf ./*

# Copy built static files from builder
COPY --from=builder /app/dist ./

# Copy optimized Nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose HTTP port
EXPOSE 80

# Health check
HEALTHCHECK --interval=15s --timeout=5s --start-period=5s --retries=3 \
  CMD wget --no-verbose --tries=1 --spider http://127.0.0.1:80/ || exit 1

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
