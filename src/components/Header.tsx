import { FileText, Shield, Users, Clock, Menu, X } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { icon: <FileText className="h-3.5 w-3.5" />, label: "RESEARCH", path: "/" },
    { icon: <Users className="h-3.5 w-3.5" />, label: "TEAM", path: "/team" },
    { icon: <Clock className="h-3.5 w-3.5" />, label: "ARCHIVE", path: "/archive" },
  ];

  return (
    <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4 cursor-pointer" onClick={() => navigate("/")}>
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
              {navItems.map((item) => (
                <NavItem key={item.label} icon={item.icon} label={item.label} active={location.pathname === item.path} onClick={() => navigate(item.path)} />
              ))}
            </nav>
            <div className="flex items-center gap-2 px-3 py-1.5 bg-secondary rounded border border-border">
              <div className="h-1.5 w-1.5 rounded-full bg-intel-green animate-pulse-slow" />
              <span className="font-mono text-[10px] text-muted-foreground tracking-wider">SYSTEM ACTIVE</span>
            </div>
            <button className="md:hidden p-1.5 text-muted-foreground hover:text-foreground transition-colors" onClick={() => setMobileOpen(!mobileOpen)}>
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t border-border bg-card/95 backdrop-blur-sm">
          <nav className="flex flex-col px-6 py-3 gap-1">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => { navigate(item.path); setMobileOpen(false); }}
                className={`flex items-center gap-2 font-mono text-[11px] tracking-wider py-2.5 px-3 rounded transition-colors ${
                  location.pathname === item.path ? "text-foreground bg-secondary" : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                }`}
              >
                {item.icon}
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

const NavItem = ({ icon, label, active, onClick }: { icon: React.ReactNode; label: string; active?: boolean; onClick?: () => void }) => (
  <button
    onClick={onClick}
    className={`flex items-center gap-1.5 font-mono text-[11px] tracking-wider transition-colors ${
      active ? "text-foreground" : "text-muted-foreground hover:text-foreground"
    }`}
  >
    {icon}
    {label}
  </button>
);

export default Header;
