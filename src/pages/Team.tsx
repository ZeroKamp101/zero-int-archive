import Header from "@/components/Header";
import { Shield, ExternalLink } from "lucide-react";

interface TeamMember {
  codename: string;
  alias: string;
  photo: string;
  role: string;
  description: string;
  specializations: string[];
  socials: { type: "hackerone" | "github"; label: string; url: string }[];
}

const teamMembers: TeamMember[] = [
  {
    codename: "49626e75205275736469616e746f",
    alias: "Bjormg",
    photo: "https://i.ibb.co.com/Xx8QRFQG/610956333-122239053698133286-390574820313624389-n.png",
    role: "Security Engineer",
    description:
      "Participant utama yang berfokus pada zeroday international, aktif di balik layar dalam berdiskusi maupun berkontribusi di kalangan digitalisasi intern. Tidak berfokus pada satu negara, melainkan beroperasi secara global di platform hacker etis seperti VRP, BBP, maupun Internet Bug Bounty (IBB). Berpengalaman dalam riset kerentanan tingkat lanjut dengan pendekatan offensive security yang sistematis dan terstruktur.",
    specializations: [
      "Blockchain Security",
      "Web Application Penetration Testing",
      "IoT Penetration Testing",
      "Ex-Opzero.ru",
    ],
    socials: [
      {
        type: "hackerone",
        label: "HackerOne",
        url: "https://hackerone.com/bjorm",
      },
    ],
  },
  {
    codename: "54686f6d6173204875746f6d6f",
    alias: "Hackeronanywhere",
    photo: "https://i.ibb.co.com/Xx8QRFQG/610956333-122239053698133286-390574820313624389-n.png",
    role: "Blockchain Security Researcher",
    description:
      "Peneliti keamanan yang berfokus pada ekosistem blockchain dan jaringan Cosmos Network. Aktif dalam mengidentifikasi dan melaporkan kerentanan kritis pada infrastruktur desentralisasi. Berkontribusi secara konsisten pada Internet Bug Bounty (IBB) Secure dan telah menemukan berbagai celah keamanan pada smart contract serta protokol konsensus.",
    specializations: [
      "Blockchain Vulnerability Research",
      "Cosmos Network Security",
      "Smart Contract Auditing",
      "IBB Secure Contributor",
    ],
    socials: [
      {
        type: "hackerone",
        label: "HackerOne",
        url: "https://hackerone.com/hacktivity/overview?queryString=disclosed%3Afalse+AND+reporter%3Ahackeronanywhere&sortField=total_awarded_amount&sortDirection=DESC&pageIndex=0",
      },
    ],
  },
  {
    codename: "656b75626f313030",
    alias: "ekubo100 / Ikhsan Adi Prayogo",
    photo: "https://i.ibb.co.com/Xx8QRFQG/610956333-122239053698133286-390574820313624389-n.png",
    role: "Security Analyst & Bug Hunter",
    description:
      "Mahasiswa Teknik Informatika di Universitas Muhammadiyah Jakarta yang aktif sebagai bug bounty hunter paruh waktu. Memiliki sertifikasi BNSP sebagai Network Administrator dan Digital Forensic Analyst. Kontributor aktif di GitHub Security Research dengan fokus pada identifikasi kerentanan aplikasi web dan analisis forensik digital.",
    specializations: [
      "BNSP Certified Network Administrator",
      "Digital Forensic Analyst",
      "GitHub Security Researcher",
      "Web Application Security",
    ],
    socials: [
      {
        type: "hackerone",
        label: "HackerOne",
        url: "https://hackerone.com/hacktivity/",
      },
    ],
  },
  {
    codename: "54686f6d73",
    alias: "odaysec",
    photo: "https://i.ibb.co.com/Xx8QRFQG/610956333-122239053698133286-390574820313624389-n.png",
    role: "CEO & Founder -- 50776e4f7365632047726f7570",
    description:
      'Founder dan CEO di PwnOsec Group sebagai perusahaan privat yang bergerak di bidang keamanan siber. Menjalankan peran penuh waktu sebagai Cyber Security Intelligence di Deputi VI (Confidential). Memimpin operasi Zeroday Asian Group dan bertanggung jawab atas strategi riset kerentanan serta koordinasi tim secara keseluruhan.',
    specializations: [
      "Cyber Security Intelligence",
      "Zeroday Research & Coordination",
      "Deputi VI -- \u2588\u2588\u2588\u2588\u2588\u2588\u2588",
      "Private Sector Leadership",
    ],
    socials: [
      {
        type: "github",
        label: "GitHub",
        url: "https://github.com/odaysec",
      },
      {
        type: "hackerone",
        label: "HackerOne",
        url: "https://hackerone.com/hacktivity/overview?queryString=disclosed%3Afalse+AND+reporter%3Aodaysec&sortField=total_awarded_amount&sortDirection=DESC&pageIndex=0",
      },
    ],
  },
];

const GithubIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
  </svg>
);

const HackerOneIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M7.207 0c-.4836 0-.8774.3938-.8774.8774v22.245c0 .4836.3938.8774.8774.8774h1.9587c.4836 0 .8774-.3938.8774-.8774V14.209h5.9103c.4836 0 .8774-.3938.8774-.8774v-1.9587c0-.4836-.3938-.8774-.8774-.8774h-5.9103V3.7135h8.2216c.4836 0 .8774-.3938.8774-.8774V.8774C19.1577.3938 18.7639 0 18.2803 0z" />
  </svg>
);

const Team = () => {
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
              PERSONNEL DIRECTORY
            </span>
          </div>
          <h1 className="font-mono text-3xl md:text-4xl font-bold text-foreground mb-4 tracking-tight">
            TEAM<br />
            <span className="text-muted-foreground">Zeroday Asian Group</span>
          </h1>
          <p className="text-sm text-muted-foreground leading-relaxed max-w-lg">
            Daftar personel aktif dalam operasi riset keamanan siber.
            Seluruh profil telah diverifikasi dan terindeks dalam sistem internal.
          </p>
        </div>
      </div>

      {/* Members */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex items-center gap-3 mb-10">
          <span className="font-mono text-[10px] text-muted-foreground tracking-[0.3em]">
            ACTIVE PERSONNEL
          </span>
          <div className="h-px flex-1 bg-border" />
          <span className="font-mono text-[10px] text-muted-foreground">
            {teamMembers.length} REGISTERED
          </span>
        </div>

        <div className="grid gap-6">
          {teamMembers.map((member) => (
            <MemberCard key={member.alias} member={member} />
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
                ZEROINTL DOCS -- ZDG Asian Groups
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

const MemberCard = ({ member }: { member: TeamMember }) => (
  <div className="border border-border bg-card rounded overflow-hidden transition-colors hover:border-muted-foreground/30">
    <div className="flex flex-col md:flex-row">
      {/* Photo section */}
      <div className="md:w-48 flex-shrink-0 p-6 flex items-start justify-center border-b md:border-b-0 md:border-r border-border bg-secondary/30">
        <div className="relative">
          <img
            src={member.photo}
            alt={member.alias}
            className="w-28 h-28 rounded object-cover grayscale hover:grayscale-0 transition-all duration-500"
          />
          <div className="absolute -bottom-1 -right-1 h-3 w-3 rounded-full bg-intel-green border-2 border-card" />
        </div>
      </div>

      {/* Info section */}
      <div className="flex-1 p-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-4">
          <div>
            <div className="font-mono text-[10px] text-muted-foreground tracking-wider mb-1">
              {member.codename}
            </div>
            <h3 className="font-mono text-lg font-bold text-foreground tracking-tight">
              {member.alias}
            </h3>
            <span className="font-mono text-xs text-muted-foreground">
              {member.role}
            </span>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-2">
            {member.socials.map((social) => (
              <a
                key={social.url}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 bg-secondary rounded border border-border text-muted-foreground hover:text-foreground hover:border-muted-foreground/50 transition-colors"
              >
                {social.type === "github" ? (
                  <GithubIcon className="h-3.5 w-3.5" />
                ) : (
                  <HackerOneIcon className="h-3.5 w-3.5" />
                )}
                <span className="font-mono text-[10px] tracking-wider">
                  {social.label.toUpperCase()}
                </span>
                <ExternalLink className="h-2.5 w-2.5" />
              </a>
            ))}
          </div>
        </div>

        {/* Description */}
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          {member.description}
        </p>

        {/* Specializations */}
        <div className="flex flex-wrap gap-2">
          {member.specializations.map((spec) => (
            <span
              key={spec}
              className="font-mono text-[10px] tracking-wider px-2.5 py-1 bg-secondary rounded border border-border text-muted-foreground"
            >
              {spec}
            </span>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default Team;
