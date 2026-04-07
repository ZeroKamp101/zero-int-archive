import { useState } from "react";
import Header from "@/components/Header";
import DocumentCard from "@/components/DocumentCard";
import DocumentViewer from "@/components/DocumentViewer";
import { documents } from "@/data/documents";
import { Shield, Database, Lock } from "lucide-react";

const Index = () => {
  const [selectedDocId, setSelectedDocId] = useState<string | null>(null);

  const selectedDoc = documents.find((d) => d.id === selectedDocId);

  if (selectedDoc) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <DocumentViewer document={selectedDoc} onBack={() => setSelectedDocId(null)} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <div className="relative border-b border-border">
        <div className="absolute inset-0 grid-overlay opacity-50" />
        <div className="relative max-w-7xl mx-auto px-6 py-20">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-6">
              <div className="h-px w-8 bg-muted-foreground/30" />
              <span className="font-mono text-[10px] text-muted-foreground tracking-[0.3em]">
                ZERODAY ASIAN GROUPS
              </span>
            </div>
            <h1 className="font-mono text-3xl md:text-4xl font-bold text-foreground mb-4 leading-tight tracking-tight">
              ZEROINTL<br />
              <span className="text-muted-foreground">Research Documentation</span>
            </h1>
            <p className="text-sm text-muted-foreground leading-relaxed mb-8 max-w-lg">
              Classified research repository maintained by PT. PwnOsec Technologies Ltd.
              All documents are indexed, cataloged, and available for authorized review.
            </p>

            <div className="flex flex-wrap gap-6">
              <StatBlock icon={<Database className="h-3.5 w-3.5" />} value={documents.length.toString()} label="DOCUMENTS" />
              <StatBlock icon={<Shield className="h-3.5 w-3.5" />} value="ACTIVE" label="STATUS" />
              <StatBlock icon={<Lock className="h-3.5 w-3.5" />} value="PUBLIC" label="ACCESS LEVEL" />
            </div>
          </div>
        </div>
      </div>

      {/* Org info - auto-scrolling ticker */}
      <div className="border-b border-border bg-card/30 overflow-hidden">
        <div className="py-4">
          <div className="animate-marquee flex whitespace-nowrap font-mono text-[10px] text-muted-foreground tracking-wider">
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex items-center gap-6 mr-6">
                <span>Jend TNI (Purn.) D.A</span>
                <span className="text-border">|</span>
                <span>Satdenpomad TNI</span>
                <span className="text-border">|</span>
                <span>Kombes Pol 4d7568616d6d616420456e64726f</span>
                <span className="text-border">|</span>
                <span>Mr 414e445249</span>
                <span className="text-border">|</span>
                <span>54686f6d6173204875746f6d6f</span>
                <span className="text-border">|</span>
                <span>Ibnu Rusdianto</span>
                <span className="text-border">|</span>
                <span>Bjormg</span>
                <span className="text-border">|</span>
                <span>Sergey Pavsk</span>
                <span className="text-border">|</span>
                <span>All right reserved Zeroday International Groups (ZDG INTL)</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Document index */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex items-center gap-3 mb-8">
          <span className="font-mono text-[10px] text-muted-foreground tracking-[0.3em]">
            DOCUMENT INDEX
          </span>
          <div className="h-px flex-1 bg-border" />
          <span className="font-mono text-[10px] text-muted-foreground">
            {documents.length} ENTRIES
          </span>
        </div>

        <div className="space-y-4">
          {documents.map((doc) => (
            <DocumentCard
              key={doc.id}
              document={doc}
              onClick={() => setSelectedDocId(doc.id)}
            />
          ))}
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

const StatBlock = ({ icon, value, label }: { icon: React.ReactNode; value: string; label: string }) => (
  <div className="flex items-center gap-3">
    <div className="p-2 bg-secondary rounded border border-border text-muted-foreground">
      {icon}
    </div>
    <div>
      <span className="font-mono text-sm font-bold text-foreground block">{value}</span>
      <span className="font-mono text-[9px] text-muted-foreground tracking-wider">{label}</span>
    </div>
  </div>
);

export default Index;
