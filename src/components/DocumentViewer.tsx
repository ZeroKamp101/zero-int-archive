import { useState } from "react";
import { ArrowLeft, Calendar, Users, Tag, BookOpen, ChevronDown, ChevronRight } from "lucide-react";
import type { ResearchDocument, DocumentSection } from "@/data/documents";

interface DocumentViewerProps {
  document: ResearchDocument;
  onBack: () => void;
}

const DocumentViewer = ({ document, onBack }: DocumentViewerProps) => {
  const [tocOpen, setTocOpen] = useState(true);

  const mainSections = document.sections.filter(s => s.level === 1);

  return (
    <div className="min-h-screen">
      {/* Top bar */}
      <div className="border-b border-border bg-card/80 backdrop-blur-sm sticky top-[57px] z-40">
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
          <button
            onClick={onBack}
            className="flex items-center gap-2 font-mono text-xs text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            BACK TO INDEX
          </button>
          <span className="font-mono text-[10px] text-muted-foreground tracking-wider">
            {document.id}
          </span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-8">
          {/* Sidebar / TOC */}
          <aside className="hidden lg:block">
            <div className="sticky top-[120px]">
              <button
                onClick={() => setTocOpen(!tocOpen)}
                className="flex items-center gap-2 font-mono text-[10px] text-muted-foreground tracking-wider mb-4 hover:text-foreground transition-colors"
              >
                {tocOpen ? <ChevronDown className="h-3 w-3" /> : <ChevronRight className="h-3 w-3" />}
                TABLE OF CONTENTS
              </button>
              {tocOpen && (
                <nav className="space-y-1 border-l border-border pl-4">
                  {document.sections.map((section) => (
                    <a
                      key={section.id}
                      href={`#${section.id}`}
                      className={`block font-mono text-[11px] py-1 transition-colors hover:text-foreground ${
                        section.level === 1
                          ? "text-muted-foreground font-medium"
                          : "text-muted-foreground/60 pl-3"
                      }`}
                    >
                      {section.title}
                    </a>
                  ))}
                  <a
                    href="#references"
                    className="block font-mono text-[11px] py-1 text-muted-foreground font-medium hover:text-foreground transition-colors"
                  >
                    DAFTAR REFERENSI
                  </a>
                </nav>
              )}

              {/* Meta */}
              <div className="mt-8 space-y-3 border-t border-border pt-6">
                <MetaItem icon={<Calendar className="h-3 w-3" />} label="DATE" value={document.date} />
                <MetaItem icon={<Users className="h-3 w-3" />} label="AUTHORS" value={document.authors.join(", ")} />
                <MetaItem icon={<Tag className="h-3 w-3" />} label="VOLUME" value={document.volume} />
                <MetaItem icon={<BookOpen className="h-3 w-3" />} label="PAGES" value={`${document.pages}`} />
                <MetaItem icon={<Tag className="h-3 w-3" />} label="ORG" value={document.organization} />
              </div>
            </div>
          </aside>

          {/* Main content */}
          <main className="min-w-0">
            {/* Document header */}
            <div className="mb-10 pb-8 border-b border-border">
              <div className="flex items-center gap-3 mb-4">
                <span className="inline-flex items-center px-2 py-0.5 rounded text-[9px] font-mono tracking-wider border bg-intel-green/10 text-intel-green border-intel-green/30">
                  {document.classification}
                </span>
                <span className="font-mono text-[10px] text-muted-foreground">{document.id}</span>
              </div>
              <h1 className="font-mono text-2xl md:text-3xl font-bold text-foreground mb-3 leading-tight">
                {document.title}
              </h1>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-3xl">
                {document.subtitle}
              </p>
              <div className="flex flex-wrap items-center gap-4 mt-4 text-[10px] font-mono text-muted-foreground">
                <span>{document.date}</span>
                <span className="text-border">|</span>
                <span>{document.volume}</span>
                <span className="text-border">|</span>
                <span>{document.organization}</span>
              </div>
            </div>

            {/* Abstract */}
            <div className="mb-10 p-6 bg-secondary/50 border border-border rounded">
              <h2 className="font-mono text-[10px] tracking-wider text-muted-foreground mb-3">ABSTRAK</h2>
              <p className="text-sm text-foreground/80 leading-relaxed">
                {document.abstract}
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                {document.keywords.map((kw) => (
                  <span
                    key={kw}
                    className="px-2 py-0.5 bg-card border border-border rounded text-[10px] font-mono text-muted-foreground"
                  >
                    {kw}
                  </span>
                ))}
              </div>
            </div>

            {/* Sections */}
            {document.sections.map((section) => (
              <SectionRenderer key={section.id} section={section} />
            ))}

            {/* References */}
            <div id="references" className="mt-12 pt-8 border-t border-border">
              <h2 className="font-mono text-lg font-bold text-foreground mb-6">DAFTAR REFERENSI</h2>
              <ol className="space-y-3">
                {document.references.map((ref, i) => (
                  <li key={i} className="flex gap-3 text-sm text-muted-foreground leading-relaxed">
                    <span className="font-mono text-[10px] text-muted-foreground/50 min-w-[24px]">[{i + 1}]</span>
                    <span className="break-all">{ref}</span>
                  </li>
                ))}
              </ol>
            </div>

            {/* Footer */}
            <div className="mt-16 pt-6 border-t border-border text-center">
              <p className="font-mono text-[10px] text-muted-foreground tracking-wider">
                &copy; 2025 pwn0sec -- Hak Cipta Dilindungi Undang-Undang
              </p>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

const MetaItem = ({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) => (
  <div className="flex items-start gap-2">
    <span className="text-muted-foreground mt-0.5">{icon}</span>
    <div>
      <span className="font-mono text-[9px] text-muted-foreground/50 tracking-wider block">{label}</span>
      <span className="font-mono text-[11px] text-muted-foreground">{value}</span>
    </div>
  </div>
);

const SectionRenderer = ({ section }: { section: DocumentSection }) => {
  if (section.content.length === 0 && section.level === 1) {
    return (
      <div id={section.id} className="mt-12 mb-6">
        <div className="flex items-center gap-3">
          <div className="h-px flex-1 bg-border" />
          <h2 className="font-mono text-xs font-bold text-muted-foreground tracking-wider">
            {section.title}
          </h2>
          <div className="h-px flex-1 bg-border" />
        </div>
      </div>
    );
  }

  const HeadingTag = section.level === 1 ? "h2" : "h3";
  const headingClass = section.level === 1
    ? "font-mono text-lg font-bold text-foreground mt-12 mb-4"
    : "font-mono text-base font-semibold text-foreground mt-8 mb-3";

  return (
    <div id={section.id}>
      <HeadingTag className={headingClass}>{section.title}</HeadingTag>
      {section.content.map((block, i) => (
        <ContentBlock key={i} content={block} />
      ))}
    </div>
  );
};

const ContentBlock = ({ content }: { content: string }) => {
  if (!content) return <div className="h-4" />;

  // Table rendering
  if (content.startsWith("[TABLE:")) {
    const rows = content.replace("[TABLE:", "").replace("]", "").split("],[");
    return (
      <div className="my-6 overflow-x-auto">
        <table className="w-full border-collapse">
          <tbody>
            {rows.map((row, i) => {
              const cells = row.replace(/^\[?/, "").replace(/\]?$/, "").split("|");
              return (
                <tr key={i} className={i % 2 === 0 ? "bg-secondary/30" : "bg-card"}>
                  {cells.map((cell, j) => (
                    <td
                      key={j}
                      className="px-4 py-2.5 text-xs text-foreground/80 border border-border font-mono"
                    >
                      {cell.trim()}
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }

  if (content.startsWith("[TABLE_HEADER:")) {
    const headers = content.replace("[TABLE_HEADER:", "").replace("]", "").split("|");
    return (
      <div className="my-4 overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr>
              {headers.map((h, i) => (
                <th
                  key={i}
                  className="px-4 py-2.5 text-[10px] font-mono font-bold tracking-wider text-muted-foreground text-left border border-border bg-secondary/50"
                >
                  {h.trim()}
                </th>
              ))}
            </tr>
          </thead>
        </table>
      </div>
    );
  }

  // Quote rendering
  if (content.startsWith("[QUOTE:")) {
    const quoteText = content.replace("[QUOTE:", "").replace(/\]$/, "");
    return (
      <blockquote className="my-6 pl-4 border-l-2 border-muted-foreground/30 py-3 bg-secondary/20 pr-4 rounded-r">
        <p className="text-sm text-foreground/70 italic leading-relaxed">{quoteText}</p>
      </blockquote>
    );
  }

  // List items
  if (content.startsWith("-- ")) {
    return (
      <div className="flex gap-3 my-1.5 pl-4">
        <span className="text-muted-foreground/40 text-xs mt-0.5">--</span>
        <p className="text-sm text-foreground/80 leading-relaxed">{content.slice(3)}</p>
      </div>
    );
  }

  // Numbered items
  if (/^\d+\.\s/.test(content)) {
    const match = content.match(/^(\d+)\.\s(.+)/);
    if (match) {
      return (
        <div className="flex gap-3 my-1.5 pl-4">
          <span className="font-mono text-[10px] text-muted-foreground/50 min-w-[20px] mt-0.5">{match[1]}.</span>
          <p className="text-sm text-foreground/80 leading-relaxed">{match[2]}</p>
        </div>
      );
    }
  }

  // Sub-section headers within content
  if (/^\d+\.\d+\.\d+\s/.test(content)) {
    const parts = content.split(" -- ");
    return (
      <div className="mt-6 mb-2">
        <h4 className="font-mono text-sm font-semibold text-foreground/90">{parts[0]}</h4>
        {parts[1] && <p className="text-sm text-foreground/80 leading-relaxed mt-2">{parts[1]}</p>}
      </div>
    );
  }

  // Category headers
  if (content.startsWith("Kategori ")) {
    return (
      <h4 className="font-mono text-xs font-bold text-muted-foreground tracking-wider mt-6 mb-2 uppercase">
        {content}
      </h4>
    );
  }

  return <p className="text-sm text-foreground/80 leading-relaxed my-3">{content}</p>;
};

export default DocumentViewer;
