import React from 'react';
import { useApp } from '../../context/AppContext';

export interface ArchitectureDiagramProps {
  caseId: string;
  variant?: 'card' | 'detail';
  className?: string;
}

interface DiagramNode {
  id: string;
  label: string;
  sublabel: string;
  x: number;
  y: number;
  w: number;
  h: number;
  accent?: boolean;
}

interface DiagramEdge {
  fromX: number;
  fromY: number;
  toX: number;
  toY: number;
  protocol?: string;
}

interface DiagramSpec {
  id: string;
  hasSufficientTopologyFacts: boolean;
  diagramTitleAr: string;
  diagramTitleEn: string;
  topologySummaryAr: string;
  topologySummaryEn: string;
  nodes: DiagramNode[];
  edges: DiagramEdge[];
  missingFactsNoteAr?: string;
  missingFactsNoteEn?: string;
}

const CASE_DIAGRAMS: Record<string, DiagramSpec> = {
  'case-1': {
    id: 'case-1',
    hasSufficientTopologyFacts: true,
    diagramTitleAr: 'مخطط الشبكة والأمن السيبراني (VLAN + Fortinet NGFW + NVR RAID-6)',
    diagramTitleEn: 'Network & Security Topology (VLAN + Fortinet NGFW + NVR RAID-6)',
    topologySummaryAr: 'عزل شبكي لأقسام الرعاية وغرف العمليات وكاميرات 4K عبر فايبر Cat6A وجدار حماية Fortinet',
    topologySummaryEn: 'VLAN segmentation for ICU/OR and 180+ 4K cameras over Fiber/Cat6A and Fortinet NGFW',
    nodes: [
      { id: 'n1', label: 'Fortinet NGFW', sublabel: 'IPS + Encrypted VPN', x: 24, y: 28, w: 170, h: 60, accent: true },
      { id: 'n2', label: 'Fiber & Cat6A Core', sublabel: 'VLAN Segmentation', x: 235, y: 28, w: 170, h: 60, accent: true },
      { id: 'n3', label: '180+ 4K IP CCTV', sublabel: 'Emergency & Pharmacy', x: 446, y: 28, w: 170, h: 60 },
      { id: 'n4', label: 'Hardened Mail', sublabel: '200+ Boxes • DMARC', x: 24, y: 132, w: 170, h: 60 },
      { id: 'n5', label: 'ICU & OR Medical VLAN', sublabel: 'Isolated Clinical Net', x: 235, y: 132, w: 170, h: 60 },
      { id: 'n6', label: 'Central NVR Cluster', sublabel: 'RAID-6 • 90-Day Storage', x: 446, y: 132, w: 170, h: 60, accent: true },
    ],
    edges: [
      { fromX: 194, fromY: 58, toX: 235, toY: 58, protocol: 'Trunk' },
      { fromX: 405, fromY: 58, toX: 446, toY: 58, protocol: 'PoE+' },
      { fromX: 109, fromY: 88, toX: 109, toY: 132, protocol: 'SPF/DKIM' },
      { fromX: 320, fromY: 88, toX: 320, toY: 132, protocol: 'VLAN ACL' },
      { fromX: 531, fromY: 88, toX: 531, toY: 132, protocol: 'RTSP 4K' },
    ],
  },
  'case-2': {
    id: 'case-2',
    hasSufficientTopologyFacts: true,
    diagramTitleAr: 'مخطط السحابة المالية والنسخ الاحتياطي المعزول',
    diagramTitleEn: 'Financial Cloud VPS & Immutable Backup Topology',
    topologySummaryAr: 'وصول مشفر لـ 30 مراجعاً مالياً إلى خوادم NVMe مع نسخ احتياطي يومي معزول وبريد موثق',
    topologySummaryEn: 'Encrypted access for 30 concurrent auditors to NVMe SQL/ERP VPS with daily off-site backups',
    nodes: [
      { id: 'n1', label: '30 Financial Auditors', sublabel: 'Remote & Office Access', x: 24, y: 28, w: 170, h: 60 },
      { id: 'n2', label: 'Enterprise Cloud VPS', sublabel: 'NVMe SQL & ERP Core', x: 235, y: 28, w: 170, h: 60, accent: true },
      { id: 'n3', label: 'Immutable Cloud Backup', sublabel: 'Daily Encrypted Snapshots', x: 446, y: 28, w: 170, h: 60, accent: true },
      { id: 'n4', label: 'Corporate Mail Server', sublabel: '150+ Mailboxes', x: 130, y: 132, w: 175, h: 60 },
      { id: 'n5', label: 'SPF / DKIM / DMARC', sublabel: 'Anti-Spoofing Policy', x: 345, y: 132, w: 175, h: 60, accent: true },
    ],
    edges: [
      { fromX: 194, fromY: 58, toX: 235, toY: 58, protocol: 'TLS Tunnel' },
      { fromX: 405, fromY: 58, toX: 446, toY: 58, protocol: 'Daily Sync' },
      { fromX: 305, fromY: 162, toX: 345, toY: 162, protocol: 'DNS Auth' },
    ],
  },
  'case-3': {
    id: 'case-3',
    hasSufficientTopologyFacts: true,
    diagramTitleAr: 'مخطط فصل أرشيف الأشعة (DICOM PACS) عن البريد الطبي',
    diagramTitleEn: 'Decoupled DICOM PACS Archive & Private Mail Architecture',
    topologySummaryAr: 'فصل ملفات الأشعة الطبية الضخمة على تخزين NVMe محلي مع نسخ هجين مشفر AES-256',
    topologySummaryEn: 'Decoupled heavy DICOM PACS storage onto local NVMe with AES-256 hybrid cloud backup',
    nodes: [
      { id: 'n1', label: 'Clinic Workstations', sublabel: 'Oncology Physicians', x: 24, y: 80, w: 165, h: 64 },
      { id: 'n2', label: 'Local NVMe PACS', sublabel: 'DICOM Imaging Server', x: 232, y: 28, w: 175, h: 60, accent: true },
      { id: 'n3', label: 'Hybrid Cloud Backup', sublabel: 'AES-256 Immutable', x: 448, y: 28, w: 168, h: 60, accent: true },
      { id: 'n4', label: 'Private Mail Server', sublabel: '120 Mailboxes', x: 232, y: 132, w: 175, h: 60 },
      { id: 'n5', label: 'SPF / DKIM / DMARC', sublabel: 'Verified Medical Mail', x: 448, y: 132, w: 168, h: 60 },
    ],
    edges: [
      { fromX: 189, fromY: 98, toX: 232, toY: 58, protocol: 'LAN PACS' },
      { fromX: 189, fromY: 126, toX: 232, toY: 162, protocol: 'IMAP/TLS' },
      { fromX: 407, fromY: 58, toX: 448, toY: 58, protocol: 'AES-256' },
      { fromX: 407, fromY: 162, toX: 448, toY: 162, protocol: 'DMARC' },
    ],
  },
  'case-4': {
    id: 'case-4',
    hasSufficientTopologyFacts: true,
    diagramTitleAr: 'مخطط العنقود الافتراضي المزدوج (HA Cluster) والأنظمة الطبية',
    diagramTitleEn: 'HA Virtualization Cluster & Hospital Systems Topology',
    topologySummaryAr: 'دمج السيرفرات الطبية في عنقود افتراضي عالي التوافر خلف جدار حماية Fortinet وشبكة فايبر',
    topologySummaryEn: 'High-Availability Virtualization Cluster hosting portal, PR, approvals & ticketing behind Fortinet NGFW',
    nodes: [
      { id: 'n1', label: 'Fortinet NGFW', sublabel: 'Fiber & Cat6A Backbone', x: 24, y: 28, w: 170, h: 60, accent: true },
      { id: 'n2', label: 'HA Virtualization', sublabel: 'Failover Hypervisor Cluster', x: 235, y: 28, w: 170, h: 60, accent: true },
      { id: 'n3', label: 'Hospital Web Portal', sublabel: 'Scheduling & Access', x: 446, y: 28, w: 170, h: 60 },
      { id: 'n4', label: 'Patient Relations (PR)', sublabel: 'SLA & Feedback Engine', x: 24, y: 132, w: 170, h: 60 },
      { id: 'n5', label: 'Insurance Approvals', sublabel: 'Automated Verification', x: 235, y: 132, w: 170, h: 60 },
      { id: 'n6', label: 'IT & Clinical Ticketing', sublabel: 'Service Desk Dispatch', x: 446, y: 132, w: 170, h: 60 },
    ],
    edges: [
      { fromX: 194, fromY: 58, toX: 235, toY: 58, protocol: '10G Fiber' },
      { fromX: 405, fromY: 58, toX: 446, toY: 58, protocol: 'VM Host' },
      { fromX: 320, fromY: 88, toX: 109, toY: 132, protocol: 'VM' },
      { fromX: 320, fromY: 88, toX: 320, toY: 132, protocol: 'VM' },
      { fromX: 320, fromY: 88, toX: 531, toY: 132, protocol: 'VM' },
    ],
  },
  'case-5': {
    id: 'case-5',
    hasSufficientTopologyFacts: true,
    diagramTitleAr: 'مخطط منظومة إدارة المستشفيات (Hospital ERP & EMR Core)',
    diagramTitleEn: 'Hospital ERP, EMR & Pharmacy Core Architecture',
    topologySummaryAr: 'نواة PostgreSQL وRedis تشغل وحدات السجلات الطبية (EMR) والجدولة والتأمين والصيدلية',
    topologySummaryEn: 'Containerized Node.js, PostgreSQL & Redis core powering EMR, scheduling, billing & pharmacy',
    nodes: [
      { id: 'n1', label: 'Outpatient & OR Scheduling', sublabel: 'Clinic Booking Module', x: 24, y: 28, w: 170, h: 60 },
      { id: 'n2', label: 'Unified Hospital EMR', sublabel: 'Digital Patient Records', x: 235, y: 28, w: 170, h: 60, accent: true },
      { id: 'n3', label: 'Insurance & Billing', sublabel: 'Automated Clearing', x: 446, y: 28, w: 170, h: 60 },
      { id: 'n4', label: 'Central Pharmacy ERP', sublabel: 'Inventory & Dispensing', x: 115, y: 132, w: 185, h: 60 },
      { id: 'n5', label: 'Docker • PostgreSQL • Redis', sublabel: 'React + Node.js Core', x: 340, y: 132, w: 205, h: 60, accent: true },
    ],
    edges: [
      { fromX: 194, fromY: 58, toX: 235, toY: 58, protocol: 'REST' },
      { fromX: 405, fromY: 58, toX: 446, toY: 58, protocol: 'Billing' },
      { fromX: 320, fromY: 88, toX: 207, toY: 132, protocol: 'Rx Sync' },
      { fromX: 320, fromY: 88, toX: 442, toY: 132, protocol: 'DB Core' },
    ],
  },
  'case-6': {
    id: 'case-6',
    hasSufficientTopologyFacts: true,
    diagramTitleAr: 'مخطط استضافة الأنظمة الضريبية وتأمين 500+ صندوق بريد',
    diagramTitleEn: 'Tax Cloud VPS & 500+ Hardened Mailboxes Architecture',
    topologySummaryAr: 'خادم سحابي مخصص لـ 25 محاسباً ضريبياً مع هجرة وتوثيق 500+ حساب بريد ونسخ احتياطي يومي',
    topologySummaryEn: 'Dedicated Cloud VPS for 25 concurrent tax auditors with 500+ DMARC-hardened mailboxes',
    nodes: [
      { id: 'n1', label: '25 Tax Auditors', sublabel: 'Concurrent Remote Access', x: 24, y: 28, w: 170, h: 60 },
      { id: 'n2', label: 'Dedicated Cloud VPS', sublabel: 'Tax & Accounting Suite', x: 235, y: 28, w: 170, h: 60, accent: true },
      { id: 'n3', label: 'Off-Site Cloud Backup', sublabel: 'Daily Encrypted Snapshots', x: 446, y: 28, w: 170, h: 60, accent: true },
      { id: 'n4', label: 'Private Mail Server', sublabel: '500+ Corporate Mailboxes', x: 130, y: 132, w: 175, h: 60 },
      { id: 'n5', label: 'SPF / DKIM / DMARC', sublabel: 'Cryptographic Alignment', x: 345, y: 132, w: 175, h: 60, accent: true },
    ],
    edges: [
      { fromX: 194, fromY: 58, toX: 235, toY: 58, protocol: 'Encrypted' },
      { fromX: 405, fromY: 58, toX: 446, toY: 58, protocol: 'Daily Snapshot' },
      { fromX: 305, fromY: 162, toX: 345, toY: 162, protocol: 'DMARC' },
    ],
  },
  'case-7': {
    id: 'case-7',
    hasSufficientTopologyFacts: true,
    diagramTitleAr: 'مخطط هجرة البريد الطبي (IMAP Sync) والتوثيق المشفر',
    diagramTitleEn: 'Medical Email Migration & DKIM 2048-bit Governance Pipeline',
    topologySummaryAr: 'مزامنة تدريجية لـ 250 صندوق بريد طبي مع توثيق DKIM 2048-bit وسياسة DMARC وأرشفة مشفرة',
    topologySummaryEn: 'IMAP sync migration for 250+ medical mailboxes with 2048-bit DKIM, DMARC & encrypted archiving',
    nodes: [
      { id: 'n1', label: '250+ Medical Mailboxes', sublabel: 'IMAP Sync Cutover', x: 24, y: 28, w: 170, h: 60 },
      { id: 'n2', label: 'Private Cloud Mail', sublabel: 'Dedicated Mail Cluster', x: 235, y: 28, w: 170, h: 60, accent: true },
      { id: 'n3', label: 'Encrypted Mail Archive', sublabel: 'Central Cloud Repository', x: 446, y: 28, w: 170, h: 60, accent: true },
      { id: 'n4', label: 'DKIM 2048-bit & SPF', sublabel: 'Cryptographic Signing', x: 130, y: 132, w: 175, h: 60 },
      { id: 'n5', label: 'DMARC Reject Policy', sublabel: 'Anti-Spoofing Shield', x: 345, y: 132, w: 175, h: 60, accent: true },
    ],
    edges: [
      { fromX: 194, fromY: 58, toX: 235, toY: 58, protocol: 'IMAP Sync' },
      { fromX: 405, fromY: 58, toX: 446, toY: 58, protocol: 'Journal' },
      { fromX: 320, fromY: 88, toX: 217, toY: 132, protocol: '2048-bit' },
      { fromX: 320, fromY: 88, toX: 432, toY: 132, protocol: 'Reject' },
    ],
  },
  'case-8': {
    id: 'case-8',
    hasSufficientTopologyFacts: true,
    diagramTitleAr: 'مخطط حماية النطاق اللوجستي (DNSSEC + DMARC Reject + TLS 1.3)',
    diagramTitleEn: 'Logistics Domain Hardening (DNSSEC + DMARC Reject + TLS 1.3)',
    topologySummaryAr: 'تأمين 120 صندوق بريد تجاري عبر TLS 1.3 وتوقيع DNSSEC وسياسة DMARC Reject لمنع انتحال الفواتير',
    topologySummaryEn: '120 commercial mailboxes secured via TLS 1.3, DNSSEC, anti-phishing gateway & DMARC Reject',
    nodes: [
      { id: 'n1', label: 'DNSSEC & DMARC Reject', sublabel: 'Domain Spoofing Block', x: 24, y: 28, w: 170, h: 60, accent: true },
      { id: 'n2', label: 'Anti-Phishing Gateway', sublabel: 'Inbound Threat Filter', x: 235, y: 28, w: 170, h: 60, accent: true },
      { id: 'n3', label: 'TLS 1.3 Mail Server', sublabel: '120 Logistics Mailboxes', x: 446, y: 28, w: 170, h: 60 },
      { id: 'n4', label: 'Cloud Mail Archiving', sublabel: 'Audited Trade Records', x: 235, y: 132, w: 170, h: 60 },
      { id: 'n5', label: '24/7 Telemetry Monitor', sublabel: 'Anomaly Detection', x: 446, y: 132, w: 170, h: 60 },
    ],
    edges: [
      { fromX: 194, fromY: 58, toX: 235, toY: 58, protocol: 'SPF/DKIM' },
      { fromX: 405, fromY: 58, toX: 446, toY: 58, protocol: 'TLS 1.3' },
      { fromX: 531, fromY: 88, toX: 320, toY: 132, protocol: 'Archive' },
      { fromX: 531, fromY: 88, toX: 531, toY: 132, protocol: 'Logs' },
    ],
  },
  'case-9': {
    id: 'case-9',
    hasSufficientTopologyFacts: true,
    diagramTitleAr: 'مخطط منصة تتبع الأسطول وحساسات الوقود (MQTT IoT Telemetry)',
    diagramTitleEn: 'IoT Fleet Telemetry & Fuel Sensor Pipeline (MQTT + PostgreSQL)',
    topologySummaryAr: 'ربط وحدات GPS وحساسات الوقود عبر بروتوكول MQTT بلوحة العمليات المركزية وتطبيق السائقين',
    topologySummaryEn: 'Industrial GPS & fuel sensors streaming via MQTT broker to Node.js/PostgreSQL and dispatch console',
    nodes: [
      { id: 'n1', label: 'Truck GPS & Fuel Sensors', sublabel: 'Highway Telemetry Units', x: 24, y: 28, w: 170, h: 60 },
      { id: 'n2', label: 'MQTT IoT Broker', sublabel: 'Real-Time Stream Ingestion', x: 235, y: 28, w: 170, h: 60, accent: true },
      { id: 'n3', label: 'Node.js & PostgreSQL', sublabel: 'Route & Fuel Analytics Engine', x: 446, y: 28, w: 170, h: 60, accent: true },
      { id: 'n4', label: 'Mobile Driver App', sublabel: 'React Native Dispatch', x: 130, y: 132, w: 175, h: 60 },
      { id: 'n5', label: 'Operations Console', sublabel: 'Live Mapbox & Alerts', x: 345, y: 132, w: 175, h: 60 },
    ],
    edges: [
      { fromX: 194, fromY: 58, toX: 235, toY: 58, protocol: 'MQTT' },
      { fromX: 405, fromY: 58, toX: 446, toY: 58, protocol: 'Stream' },
      { fromX: 531, fromY: 88, toX: 217, toY: 132, protocol: 'REST API' },
      { fromX: 531, fromY: 88, toX: 432, toY: 132, protocol: 'WebSockets' },
    ],
  },
  'case-10': {
    id: 'case-10',
    hasSufficientTopologyFacts: true,
    diagramTitleAr: 'مخطط البنية الشبكية والدومين المركزي (Active Directory + VoIP + File Server)',
    diagramTitleEn: 'Enterprise Active Directory, File Server, VoIP & CCTV Topology',
    topologySummaryAr: 'تمديدات Cat6A وسويتشات جيجابت تربط خادم الدومين AD DS وخادم الملفات وسنترال VoIP والنسخ الاحتياطي',
    topologySummaryEn: 'Cat6A & Gigabit switches uniting Active Directory, RBAC File Server, VoIP PBX, CCTV & cloud backup',
    nodes: [
      { id: 'n1', label: 'Cat6A & Gigabit Core', sublabel: 'Enterprise Wi-Fi VLANs', x: 24, y: 28, w: 170, h: 60, accent: true },
      { id: 'n2', label: 'Active Directory & DHCP', sublabel: 'Central Domain Controller', x: 235, y: 28, w: 170, h: 60, accent: true },
      { id: 'n3', label: 'Central File Server', sublabel: 'Department RBAC ACLs', x: 446, y: 28, w: 170, h: 60 },
      { id: 'n4', label: 'VoIP PBX Telephony', sublabel: 'IVR & Desk Extensions', x: 24, y: 132, w: 170, h: 60 },
      { id: 'n5', label: 'HD IP CCTV & NVR', sublabel: 'HQ & Warehouses', x: 235, y: 132, w: 170, h: 60 },
      { id: 'n6', label: 'Immutable Cloud Backup', sublabel: 'Daily Encrypted Off-Site', x: 446, y: 132, w: 170, h: 60, accent: true },
    ],
    edges: [
      { fromX: 194, fromY: 58, toX: 235, toY: 58, protocol: 'AD DS' },
      { fromX: 405, fromY: 58, toX: 446, toY: 58, protocol: 'SMB ACL' },
      { fromX: 109, fromY: 88, toX: 109, toY: 132, protocol: 'SIP VLAN' },
      { fromX: 320, fromY: 88, toX: 320, toY: 132, protocol: 'CCTV VLAN' },
      { fromX: 531, fromY: 88, toX: 531, toY: 132, protocol: 'Daily Backup' },
    ],
  },
  'case-11': {
    id: 'case-11',
    hasSufficientTopologyFacts: false,
    diagramTitleAr: 'بطاقة مشروع هندسي: فحص واعتماد جودة البرمجيات (QA & UAT Sign-off)',
    diagramTitleEn: 'Engineering Audit Card: Software QA & Vendor Handover Sign-Off',
    topologySummaryAr: 'اختبارات الوظائف الشاملة (E2E)، تطبيقات iOS/Android، محاكاة ضغط مكالمات WebRTC، وفحص صلاحيات وأمان قواعد البيانات.',
    topologySummaryEn: 'End-to-End CRM functional validation, iOS/Android compatibility, WebRTC call stress testing, and security privilege audit.',
    nodes: [],
    edges: [],
    missingFactsNoteAr: 'ملاحظة منهجية: يركز النص الموثق لهذا المشروع على مصفوفة الفحص البرمجي (QA Test Matrix) واعتماد الاستلام دون تفاصيل معمارية الخوادم المستضيفة؛ لذا تم عرض بطاقة التوثيق الهندسي بدلاً من رسم طوبولوجيا افتراضية.',
    missingFactsNoteEn: 'Methodology Note: Documented project facts describe the QA test matrix and acceptance audit rather than host network topology; displaying a typographic engineering cover card instead of inventing nodes.',
  },
  'case-12': {
    id: 'case-12',
    hasSufficientTopologyFacts: true,
    diagramTitleAr: 'مخطط نظام إدارة العيادات والنداء الذكي (EMR & Q-System)',
    diagramTitleEn: 'Clinic EMR, Barcode E-Prescriptions & Smart Queue (Q-System) Topology',
    topologySummaryAr: 'ربط تذاكر الاستقبال وشاشات النداء الآلي بصالة الانتظار مع شاشة الطبيب والسجل الطبي الموحد',
    topologySummaryEn: 'Reception ticket dispenser and waiting lounge displays synced in real time with doctor EMR terminal',
    nodes: [
      { id: 'n1', label: 'Reception Ticket Kiosk', sublabel: 'Numbered Thermal Issue', x: 24, y: 28, w: 170, h: 60 },
      { id: 'n2', label: 'Q-System Queue Engine', sublabel: 'Real-Time Turn Sync', x: 235, y: 28, w: 170, h: 60, accent: true },
      { id: 'n3', label: 'Waiting Lounge Screens', sublabel: 'Audio-Visual Caller', x: 446, y: 28, w: 170, h: 60 },
      { id: 'n4', label: 'Doctor EMR Terminal', sublabel: '1-Click Call & E-Rx', x: 130, y: 132, w: 175, h: 60, accent: true },
      { id: 'n5', label: 'DICOM & Billing Sync', sublabel: 'Local & Cloud Backup', x: 345, y: 132, w: 175, h: 60 },
    ],
    edges: [
      { fromX: 194, fromY: 58, toX: 235, toY: 58, protocol: 'Queue ID' },
      { fromX: 405, fromY: 58, toX: 446, toY: 58, protocol: 'HDMI/LAN' },
      { fromX: 320, fromY: 88, toX: 217, toY: 132, protocol: '1-Click Call' },
      { fromX: 305, fromY: 162, toX: 345, toY: 162, protocol: 'EMR Sync' },
    ],
  },
};

export const ArchitectureDiagram: React.FC<ArchitectureDiagramProps> = ({
  caseId,
  variant = 'card',
  className = '',
}) => {
  const { lang } = useApp();
  const normalizedId = caseId.startsWith('case-') ? caseId : `case-${caseId}`;
  const spec = CASE_DIAGRAMS[normalizedId] || CASE_DIAGRAMS['case-1'];

  // When a case study does not have sufficient network/infrastructure topology facts in its text,
  // render a honest typographic cover card instead of inventing diagram components (Section 3.9).
  if (!spec.hasSufficientTopologyFacts) {
    return (
      <div
        data-testid={`typographic-cover-card-${normalizedId}`}
        className={`w-full h-full bg-surface-2 p-6 sm:p-8 flex flex-col justify-between gap-4 ${className}`}
      >
        <div className="flex flex-wrap items-center justify-between gap-2">
          <span
            dir="ltr"
            className="ltr-num text-xs font-semibold px-2.5 py-1 rounded bg-surface border border-token text-accent whitespace-nowrap"
          >
            QA & UAT ACCEPTANCE MATRIX
          </span>
          <span
            dir="ltr"
            className="ltr-num text-xs text-muted font-medium whitespace-nowrap"
          >
            {normalizedId.toUpperCase()}
          </span>
        </div>

        <div className="space-y-2 my-auto">
          <h4 className="text-base sm:text-lg font-bold text-main">
            {lang === 'ar' ? spec.diagramTitleAr : spec.diagramTitleEn}
          </h4>
          <p className="text-xs sm:text-sm text-muted leading-relaxed">
            {lang === 'ar' ? spec.topologySummaryAr : spec.topologySummaryEn}
          </p>
        </div>

        <div className="pt-3 border-t border-token text-xs text-muted leading-relaxed">
          {lang === 'ar' ? spec.missingFactsNoteAr : spec.missingFactsNoteEn}
        </div>
      </div>
    );
  }

  const title = lang === 'ar' ? spec.diagramTitleAr : spec.diagramTitleEn;
  const summary = lang === 'ar' ? spec.topologySummaryAr : spec.topologySummaryEn;

  return (
    <div
      data-testid={`architecture-diagram-${normalizedId}`}
      className={`w-full bg-surface-2 flex flex-col justify-between ${
        variant === 'detail' ? 'p-5 sm:p-7' : 'p-4 sm:p-5'
      } ${className}`}
    >
      {/* Diagram Header */}
      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
        <span className="text-xs font-bold text-main">
          {title}
        </span>
        <span
          dir="ltr"
          className="ltr-num text-[11px] font-semibold px-2 py-0.5 rounded bg-surface border border-token text-accent whitespace-nowrap"
        >
          ARCHITECTURE TOPOLOGY
        </span>
      </div>

      {/* Theme-Aware, Token-Driven, RTL-Safe SVG Diagram */}
      <div className="w-full overflow-hidden rounded-lg border border-token bg-surface p-2">
        <svg
          viewBox="0 0 640 220"
          role="img"
          aria-label={title}
          className="w-full h-auto block select-none"
          style={{ direction: 'ltr' }}
        >
          <title>{title}</title>
          <desc>{summary}</desc>

          <defs>
            <marker
              id={`arrow-${normalizedId}`}
              viewBox="0 0 10 10"
              refX="7"
              refY="5"
              markerWidth="6"
              markerHeight="6"
              orient="auto-start-reverse"
            >
              <path d="M 0 1 L 8 5 L 0 9 z" fill="var(--accent)" />
            </marker>
          </defs>

          {/* Subtle Technical Grid Lines */}
          <g stroke="var(--border)" strokeWidth="0.75" strokeDasharray="3 3" opacity="0.65">
            <line x1="0" y1="58" x2="640" y2="58" />
            <line x1="0" y1="110" x2="640" y2="110" />
            <line x1="0" y1="162" x2="640" y2="162" />
            <line x1="110" y1="0" x2="110" y2="220" />
            <line x1="320" y1="0" x2="320" y2="220" />
            <line x1="530" y1="0" x2="530" y2="220" />
          </g>

          {/* Topology Edges */}
          {spec.edges.map((edge, idx) => {
            const midX = (edge.fromX + edge.toX) / 2;
            const midY = (edge.fromY + edge.toY) / 2;
            return (
              <g key={`edge-${idx}`}>
                <line
                  x1={edge.fromX}
                  y1={edge.fromY}
                  x2={edge.toX}
                  y2={edge.toY}
                  stroke="var(--accent)"
                  strokeWidth="1.75"
                  markerEnd={`url(#arrow-${normalizedId})`}
                />
                {edge.protocol && (
                  <g transform={`translate(${midX}, ${midY})`}>
                    <rect
                      x="-32"
                      y="-9"
                      width="64"
                      height="16"
                      rx="4"
                      fill="var(--surface-2)"
                      stroke="var(--border)"
                      strokeWidth="1"
                    />
                    <text
                      x="0"
                      y="2"
                      textAnchor="middle"
                      fill="var(--text-muted)"
                      fontSize="9"
                      fontWeight="600"
                      fontFamily="IBM Plex Sans Arabic, sans-serif"
                      direction="ltr"
                      unicodeBidi="isolate"
                    >
                      {edge.protocol}
                    </text>
                  </g>
                )}
              </g>
            );
          })}

          {/* Topology Nodes */}
          {spec.nodes.map((node) => (
            <g key={node.id} transform={`translate(${node.x}, ${node.y})`}>
              <rect
                x="0"
                y="0"
                width={node.w}
                height={node.h}
                rx="8"
                fill={node.accent ? 'var(--surface-2)' : 'var(--surface)'}
                stroke={node.accent ? 'var(--accent)' : 'var(--border)'}
                strokeWidth={node.accent ? '1.75' : '1.25'}
              />
              {/* Top status bar indicator */}
              <rect
                x="12"
                y="10"
                width="22"
                height="3"
                rx="1.5"
                fill={node.accent ? 'var(--accent)' : 'var(--text-muted)'}
              />
              <text
                x="12"
                y="30"
                textAnchor="start"
                fill="var(--text)"
                fontSize="11.5"
                fontWeight="700"
                fontFamily="IBM Plex Sans Arabic, sans-serif"
                direction="ltr"
                unicodeBidi="isolate"
              >
                {node.label}
              </text>
              <text
                x="12"
                y="47"
                textAnchor="start"
                fill="var(--text-muted)"
                fontSize="10"
                fontWeight="500"
                fontFamily="IBM Plex Sans Arabic, sans-serif"
                direction="ltr"
                unicodeBidi="isolate"
              >
                {node.sublabel}
              </text>
            </g>
          ))}
        </svg>
      </div>

      {/* Caption */}
      <p className="text-xs text-muted mt-2.5 leading-relaxed">
        {summary}
      </p>
    </div>
  );
};
