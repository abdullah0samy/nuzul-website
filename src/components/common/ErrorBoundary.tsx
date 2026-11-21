import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AlertTriangle, RotateCcw, Home, RefreshCw } from 'lucide-react';
import { useApp, type Language } from '../../context/AppContext';

export type ErrorBoundaryVariant = 'page' | 'section' | 'silent';

export interface ErrorFallbackRenderProps {
  error: Error;
  resetErrorBoundary: () => void;
}

export interface ErrorBoundaryProps {
  children: React.ReactNode;
  sectionName?: string;
  variant?: ErrorBoundaryVariant;
  lang?: Language;
  resetKeys?: ReadonlyArray<unknown>;
  onReset?: () => void;
  onError?: (error: Error, errorInfo: React.ErrorInfo) => void;
  onNavigateHome?: () => void;
  fallback?: React.ReactNode | ((props: ErrorFallbackRenderProps) => React.ReactNode);
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

function areResetKeysChanged(
  prevKeys?: ReadonlyArray<unknown>,
  nextKeys?: ReadonlyArray<unknown>
): boolean {
  if (prevKeys === nextKeys) return false;
  if (!prevKeys || !nextKeys || prevKeys.length !== nextKeys.length) return true;
  for (let i = 0; i < prevKeys.length; i += 1) {
    if (!Object.is(prevKeys[i], nextKeys[i])) {
      return true;
    }
  }
  return false;
}

function resolveFallbackLanguage(explicitLang?: Language): Language {
  if (explicitLang === 'ar' || explicitLang === 'en') {
    return explicitLang;
  }
  if (typeof document !== 'undefined') {
    const docLang = document.documentElement.lang?.toLowerCase();
    if (docLang?.startsWith('en')) return 'en';
    if (docLang?.startsWith('ar')) return 'ar';
  }
  return 'ar';
}

export class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  public state: ErrorBoundaryState = {
    hasError: false,
    error: null,
  };

  public static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return {
      hasError: true,
      error,
    };
  }

  public componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    const boundaryLabel = this.props.sectionName ?? 'Application';
    const currentPath =
      typeof window !== 'undefined' ? window.location.pathname + window.location.search : 'unknown';

    console.error(`[ErrorBoundary:${boundaryLabel}] Uncaught render error`, {
      section: boundaryLabel,
      path: currentPath,
      timestamp: new Date().toISOString(),
      message: error.message,
      error,
      componentStack: errorInfo.componentStack,
    });

    this.props.onError?.(error, errorInfo);
  }

  public componentDidUpdate(prevProps: ErrorBoundaryProps): void {
    if (
      this.state.hasError &&
      areResetKeysChanged(prevProps.resetKeys, this.props.resetKeys)
    ) {
      this.resetErrorBoundary();
    }
  }

  private resetErrorBoundary = (): void => {
    this.props.onReset?.();
    this.setState({ hasError: false, error: null });
  };

  private handleNavigateHome = (): void => {
    this.resetErrorBoundary();
    if (this.props.onNavigateHome) {
      this.props.onNavigateHome();
      return;
    }
    if (typeof window !== 'undefined') {
      window.location.assign('/');
    }
  };

  private handleReload = (): void => {
    if (typeof window !== 'undefined') {
      window.location.reload();
    }
  };

  public render(): React.ReactNode {
    const { hasError, error } = this.state;
    const { children, fallback, variant = 'page', lang: explicitLang, sectionName } = this.props;

    if (!hasError || !error) {
      return children;
    }

    if (typeof fallback === 'function') {
      return fallback({ error, resetErrorBoundary: this.resetErrorBoundary });
    }

    if (fallback !== undefined) {
      return fallback;
    }

    if (variant === 'silent') {
      return null;
    }

    const lang = resolveFallbackLanguage(explicitLang);
    const isAr = lang === 'ar';

    if (variant === 'section') {
      return (
        <section
          role="alert"
          data-testid={`error-boundary-section-${sectionName ?? 'default'}`}
          className="py-10 bg-page-band"
        >
          <div className="container-nuzul max-w-2xl">
            <div className="clean-card p-6 sm:p-8 border-danger/30 text-center space-y-4">
              <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-danger-soft border border-danger/30 text-danger mx-auto">
                <AlertTriangle className="w-5 h-5" aria-hidden="true" />
              </div>

              <div className="space-y-1.5">
                <h2 className="text-lg sm:text-xl font-bold text-main">
                  {isAr
                    ? 'تعذّر تحميل هذا القسم مؤقتاً'
                    : 'This section could not be loaded'}
                </h2>
                <p className="text-sm text-muted leading-relaxed max-w-lg mx-auto">
                  {isAr
                    ? 'حدث خطأ غير متوقع أثناء عرض هذا الجزء من الصفحة. بقية أقسام الموقع تعمل بشكل طبيعي.'
                    : 'An unexpected error occurred while rendering this section. The rest of the page remains available.'}
                </p>
              </div>

              <div className="pt-1 flex flex-wrap items-center justify-center gap-3">
                <button
                  type="button"
                  onClick={this.resetErrorBoundary}
                  className="btn-primary px-5 py-2.5 text-sm"
                >
                  <RotateCcw className="w-4 h-4 shrink-0" aria-hidden="true" />
                  <span>{isAr ? 'إعادة المحاولة' : 'Try Again'}</span>
                </button>
              </div>
            </div>
          </div>
        </section>
      );
    }

    return (
      <section
        role="alert"
        data-testid={`error-boundary-page-${sectionName ?? 'root'}`}
        className="min-h-[60vh] flex items-center justify-center py-16 px-4 bg-page text-main"
      >
        <div className="container-nuzul max-w-2xl">
          <div className="clean-card p-8 sm:p-10 text-center space-y-6">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-danger-soft border border-danger/30 text-danger mx-auto">
              <AlertTriangle className="w-7 h-7" aria-hidden="true" />
            </div>

            <div className="space-y-2.5">
              <h1 className="text-2xl sm:text-3xl font-bold text-main">
                {isAr
                  ? 'حدث خطأ غير متوقع أثناء عرض الصفحة'
                  : 'Something went wrong while displaying this page'}
              </h1>
              <p className="text-sm sm:text-base text-muted leading-relaxed max-w-xl mx-auto">
                {isAr
                  ? 'نعتذر عن هذا الخلل المؤقت. يمكنك إعادة المحاولة أو العودة إلى الصفحة الرئيسية لمتابعة التصفح.'
                  : 'We apologize for the interruption. You can retry loading this view or return to the home page.'}
              </p>
            </div>

            <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
              <button
                type="button"
                onClick={this.resetErrorBoundary}
                className="btn-primary px-5 py-3 text-sm"
              >
                <RotateCcw className="w-4 h-4 shrink-0" aria-hidden="true" />
                <span>{isAr ? 'إعادة المحاولة' : 'Try Again'}</span>
              </button>

              <button
                type="button"
                onClick={this.handleNavigateHome}
                className="btn-secondary px-5 py-3 text-sm"
              >
                <Home className="w-4 h-4 shrink-0" aria-hidden="true" />
                <span>{isAr ? 'الصفحة الرئيسية' : 'Home Page'}</span>
              </button>

              <button
                type="button"
                onClick={this.handleReload}
                className="btn-secondary px-5 py-3 text-sm"
              >
                <RefreshCw className="w-4 h-4 shrink-0" aria-hidden="true" />
                <span>{isAr ? 'تحديث الصفحة' : 'Reload Page'}</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

interface RouterAwareBoundaryProps {
  children: React.ReactNode;
  sectionName: string;
  variant?: ErrorBoundaryVariant;
}

export const RouteErrorBoundary: React.FC<RouterAwareBoundaryProps> = ({
  children,
  sectionName,
  variant = 'page',
}) => {
  const { pathname, search } = useLocation();
  const navigate = useNavigate();
  const { lang } = useApp();

  return (
    <ErrorBoundary
      sectionName={sectionName}
      variant={variant}
      lang={lang}
      resetKeys={[pathname, search]}
      onNavigateHome={() => navigate('/')}
    >
      {children}
    </ErrorBoundary>
  );
};
