import { FileText, Shield, Users, Clock } from "lucide-react";

const Header = () => {
  return (
    <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-foreground" />
              <span className="font-mono text-sm font-bold tracking-widest text-foreground">
                ZEROINTL
              </span>
            </div>
            <div className="h-4 w-px bg-border" />
            <span className="font-mono text-xs text-muted-foreground tracking-wider">
              DOCS
            </span>
          </div>

          <div className="flex items-center gap-6">
            <nav className="hidden md:flex items-center gap-6">
              <NavItem icon={<FileText className="h-3.5 w-3.5" />} label="RESEARCH" active />
              <NavItem icon={<Users className="h-3.5 w-3.5" />} label="TEAM" />
              <NavItem icon={<Clock className="h-3.5 w-3.5" />} label="ARCHIVE" />
            </nav>
            <div className="flex items-center gap-2 px-3 py-1.5 bg-secondary rounded border border-border">
              <div className="h-1.5 w-1.5 rounded-full bg-intel-green animate-pulse-slow" />
              <span className="font-mono text-[10px] text-muted-foreground tracking-wider">SYSTEM ACTIVE</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

const NavItem = ({ icon, label, active }: { icon: React.ReactNode; label: string; active?: boolean }) => (
  <button
    className={`flex items-center gap-1.5 font-mono text-[11px] tracking-wider transition-colors ${
      active ? "text-foreground" : "text-muted-foreground hover:text-foreground"
    }`}
  >
    {icon}
    {label}
  </button>
);

export default Header;
