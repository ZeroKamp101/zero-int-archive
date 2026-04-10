import Header from "@/components/Header";
import { Download, FileText, Shield, Lock } from "lucide-react";

interface DownloadItem {
  id: string;
  title: string;
  subtitle: string;
  classification: string;
  date: string;
  pages: number;
  files: { label: string; url: string; format: string; size: string }[];
}

const downloads: DownloadItem[] = [
  {
    id: "ZERO-2025-001",
    title: "Jurnal Keamanan Siber & Etika Teknologi Indonesia",
    subtitle: "Analisis Kritis: AI Slop, Pseudo-Pakar, dan Kursus Online Predatif",
    classification: "PUBLIC",
    date: "April 2025",
    pages: 25,
    files: [],
  },
  {
    id: "ZERO-2025-002",
    title: "Ilusi Otomatisasi vs Realitas Eksploitasi",
    subtitle: "Mengapa AI Tidak Dapat Menggantikan Peneliti Keamanan",
    classification: "PUBLIC",
    date: "April 2025",
    pages: 28,
    files: [],
  },
  {
    id: "ZERO-2025-003",
    title: "CVE-2025-49112: Integer Underflow pada Valkey",
    subtitle: "Integer Underflow pada Fungsi setDeferredReply() dalam Subsistem Jaringan Valkey",
    classification: "CONFIDENTIAL",
    date: "April 2025",
    pages: 23,
    files: [
      {
        label: "DOCX",
        url: "/downloads/CVE-2025-49112_Valkey_Integer_Underflow.docx",
        format: "DOCX",
        size: "~2 MB",
      },
    ],
  },
  {
    id: "ZERO-2025-004",
    title: "CVE-2021-42013: Apache HTTP Server Path Traversal & RCE",
    subtitle: "Analisis Mendalam Kerentanan Double URL-Encoding pada Infrastruktur POLRI",
    classification: "CONFIDENTIAL",
    date: "January 2024",
    pages: 27,
    files: [
      {
        label: "DOCX",
        url: "/downloads/CVE-2021-42013_Full_Journal.docx",
        format: "DOCX",
        size: "~3 MB",
      },
    ],
  },
  {
    id: "ZERO-2025-005",
    title: "CVE-2020-11798: Unauthenticated Path Traversal on Ferrari MiCollab",
    subtitle: "Path Traversal Bypassing CGI Endpoint to Remote Code Execution - Ferrari Bug Bounty Program",
    classification: "CONFIDENTIAL",
    date: "2020",
    pages: 24,
    files: [
      {
        label: "DOCX",
        url: "/downloads/CVE-2020-11798_Ferrari_Journal.docx",
        format: "DOCX",
        size: "~3 MB",
      },
    ],
  },
];

const Archive = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <div className="relative border-b border-border">
        <div className="absolute inset-0 grid-overlay opacity-50" />
        <div className="relative max-w-7xl mx-auto px-6 py-16">
          <div className="flex items-center gap-2 mb-6">
            <div className="h-px w-8 bg-muted-foreground/30" />
            <span className="font-mono text-[10px] text-muted-foreground tracking-[0.3em]">
              DOCUMENT ARCHIVE
            </span>
          </div>
          <h1 className="font-mono text-3xl md:text-4xl font-bold text-foreground mb-3 leading-tight tracking-tight">
            ARCHIVE<br />
            <span className="text-muted-foreground">Download Center</span>
          </h1>
          <p className="text-sm text-muted-foreground leading-relaxed max-w-lg">
            Repository dokumen jurnal penelitian keamanan siber yang tersedia untuk diunduh.
            Format DOCX dan PDF tersedia untuk dokumen yang telah dirilis.
          </p>
        </div>
      </div>

      {/* Download list */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex items-center gap-3 mb-8">
          <span className="font-mono text-[10px] text-muted-foreground tracking-[0.3em]">
            AVAILABLE DOWNLOADS
          </span>
          <div className="h-px flex-1 bg-border" />
          <span className="font-mono text-[10px] text-muted-foreground">
            {downloads.length} DOCUMENTS
          </span>
        </div>

        <div className="space-y-4">
          {downloads.map((doc) => (
            <div
              key={doc.id}
              className="group border border-border rounded bg-card/50 hover:bg-card/80 transition-colors"
            >
              <div className="p-6">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="font-mono text-[10px] text-muted-foreground">{doc.id}</span>
                      <span
                        className={`inline-flex items-center px-2 py-0.5 rounded text-[9px] font-mono tracking-wider border ${
                          doc.classification === "CONFIDENTIAL"
                            ? "bg-yellow-500/10 text-yellow-500 border-yellow-500/30"
                            : "bg-intel-green/10 text-intel-green border-intel-green/30"
                        }`}
                      >
                        {doc.classification}
                      </span>
                    </div>
                    <h3 className="font-mono text-sm font-bold text-foreground mb-1 leading-snug">
                      {doc.title}
                    </h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">{doc.subtitle}</p>
                    <div className="flex items-center gap-4 mt-3 text-[10px] font-mono text-muted-foreground">
                      <span>{doc.date}</span>
                      <span className="text-border">|</span>
                      <span>{doc.pages} pages</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 flex-shrink-0">
                    {doc.files.length > 0 ? (
                      doc.files.map((file) => (
                        <a
                          key={file.label}
                          href={file.url}
                          download
                          className="flex items-center gap-2 px-4 py-2 bg-secondary hover:bg-secondary/80 border border-border rounded font-mono text-[11px] text-foreground transition-colors"
                        >
                          <Download className="h-3.5 w-3.5" />
                          <span>{file.format}</span>
                          <span className="text-muted-foreground text-[9px]">{file.size}</span>
                        </a>
                      ))
                    ) : (
                      <div className="flex items-center gap-2 px-4 py-2 bg-secondary/30 border border-border/50 rounded font-mono text-[11px] text-muted-foreground/50">
                        <Lock className="h-3.5 w-3.5" />
                        <span>ONLINE ONLY</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <div className="mt-12 p-6 border border-border rounded bg-secondary/20">
          <div className="flex items-start gap-3">
            <Shield className="h-4 w-4 text-muted-foreground mt-0.5 flex-shrink-0" />
            <div>
              <h4 className="font-mono text-[10px] tracking-wider text-muted-foreground mb-2">DISCLAIMER</h4>
              <p className="text-xs text-muted-foreground/80 leading-relaxed">
                Dokumen-dokumen dalam arsip ini ditulis untuk tujuan penelitian keamanan siber dan edukasi.
                Seluruh pengujian dilakukan secara etis dengan prinsip responsible disclosure.
                Penggunaan teknik dalam dokumen ini terhadap sistem tanpa izin adalah tindakan ilegal.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-border bg-card/30">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Shield className="h-4 w-4 text-muted-foreground" />
              <span className="font-mono text-[10px] text-muted-foreground tracking-wider">
                ZEROINTL DOCS -- PT. PWNOSEC TECHNOLOGIES LTD
              </span>
            </div>
            <span className="font-mono text-[10px] text-muted-foreground">
              &copy; 2025 ALL RIGHTS RESERVED
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Archive;
