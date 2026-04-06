import { FileText, Calendar, Users, Tag, ChevronRight } from "lucide-react";
import type { ResearchDocument } from "@/data/documents";

interface DocumentCardProps {
  document: ResearchDocument;
  onClick: () => void;
}

const DocumentCard = ({ document, onClick }: DocumentCardProps) => {
  const classificationColors: Record<string, string> = {
    RESTRICTED: "bg-intel-red/10 text-intel-red border-intel-red/30",
    CONFIDENTIAL: "bg-intel-amber/10 text-intel-amber border-intel-amber/30",
    PUBLIC: "bg-intel-green/10 text-intel-green border-intel-green/30",
  };

  return (
    <button
      onClick={onClick}
      className="w-full text-left group bg-card border border-border rounded p-6 hover:border-muted-foreground/30 transition-all duration-300"
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-secondary rounded">
            <FileText className="h-4 w-4 text-muted-foreground" />
          </div>
          <div>
            <span className="font-mono text-[10px] text-muted-foreground tracking-wider block">
              {document.id}
            </span>
            <span className={`inline-flex items-center px-2 py-0.5 rounded text-[9px] font-mono tracking-wider border mt-1 ${classificationColors[document.classification]}`}>
              {document.classification}
            </span>
          </div>
        </div>
        <ChevronRight className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>

      <h3 className="font-mono text-sm font-semibold text-foreground mb-2 leading-snug">
        {document.title}
      </h3>
      <p className="text-xs text-muted-foreground leading-relaxed mb-4 line-clamp-3">
        {document.subtitle}
      </p>

      <div className="flex flex-wrap items-center gap-4 text-[10px] font-mono text-muted-foreground">
        <span className="flex items-center gap-1">
          <Calendar className="h-3 w-3" />
          {document.date}
        </span>
        <span className="flex items-center gap-1">
          <Users className="h-3 w-3" />
          {document.authors.join(", ")}
        </span>
        <span className="flex items-center gap-1">
          <Tag className="h-3 w-3" />
          {document.volume}
        </span>
        <span>{document.pages} pages</span>
      </div>
    </button>
  );
};

export default DocumentCard;
