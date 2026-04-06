export interface DocumentSection {
  id: string;
  title: string;
  level: number;
  content: string[];
}

export interface ResearchDocument {
  id: string;
  title: string;
  subtitle: string;
  classification: "RESTRICTED" | "CONFIDENTIAL" | "PUBLIC";
  date: string;
  authors: string[];
  organization: string;
  volume: string;
  pages: number;
  abstract: string;
  keywords: string[];
  sections: DocumentSection[];
  references: string[];
}

export const documents: ResearchDocument[] = [
  {
    id: "ZERO-2025-001",
    title: "Jurnal Keamanan Siber & Etika Teknologi Indonesia",
    subtitle: "Analisis Kritis: AI Slop, Pseudo-Pakar, dan Kursus Online Predatif dalam Ekosistem Keamanan Siber Indonesia",
    classification: "PUBLIC",
    date: "April 2025",
    authors: ["pwn0sec"],
    organization: "PT. PwnOsec Technologies Ltd",
    volume: "Vol. 1 | No. 1",
    pages: 25,
    abstract: "Makalah ini menganalisis secara kritis dua fenomena yang saling berkaitan dan sama-sama mengancam integritas komunitas keamanan siber Indonesia: pertama, meningkatnya ketergantungan peneliti pemula terhadap alat Kecerdasan Buatan (AI) untuk menghasilkan laporan kerentanan tanpa pemahaman teknis yang memadai; kedua, proliferasi pseudo-pakar teknologi yang mengeksploitasi kesenjangan literasi digital masyarakat melalui kursus online berbayar yang tidak bermutu. Berdasarkan observasi empiris terhadap laporan-laporan di platform bug bounty HackerOne -- khususnya program cURL -- serta analisis terhadap ekosistem edukasi keamanan siber daring di Indonesia, makalah ini memaparkan: (1) batasan fundamental AI sebagai alat pencarian kerentanan mandiri; (2) anatomi dan modus operandi pseudo-pakar teknologi yang menyamarkan ketidakmampuan di balik terminologi teknis; (3) mekanisme predasi melalui kursus online yang menjanjikan keahlian hacking instan; serta (4) dampak sistemik kedua fenomena tersebut terhadap kepercayaan publik, reputasi komunitas, dan keamanan nasional. Makalah diakhiri dengan kerangka metodologis untuk mengidentifikasi kursus dan mentor yang legitimate, serta panduan pengembangan kompetensi yang berbasis ilmu pengetahuan otentik.",
    keywords: ["keamanan siber", "kecerdasan buatan", "bug bounty", "HackerOne", "cURL", "pseudo-pakar", "kursus online predatif", "AI slop", "vulnerability research", "etika digital", "literasi teknologi", "komunitas Indonesia"],
    sections: [
      {
        id: "bab-1",
        title: "BAB I: PENDAHULUAN",
        level: 1,
        content: [
          "Seiring berkembangnya permukaan serangan digital, permintaan terhadap peneliti keamanan berkualitas tinggi pun melonjak secara eksponensial. Platform bug bounty seperti HackerOne, Bugcrowd, dan Intigriti telah menjadi ekosistem vital yang menghubungkan peneliti independen dengan organisasi yang membutuhkan perspektif keamanan eksternal.",
          "Di tengah dinamika ini, dua fenomena paralel muncul dan saling memperkuat satu sama lain. Pertama, kemunculan model bahasa besar (Large Language Models/LLMs) dan alat AI generatif memunculkan ekspektasi keliru bahwa AI dapat \"meretas sistem secara otomatis\" tanpa pemahaman teknis. Kedua, proliferasi pelaku yang mengklaim diri sebagai pakar keamanan siber atau \"hacker profesional\" namun sesungguhnya tidak memiliki kompetensi substansial -- dan memonetisasi klaim palsu tersebut melalui kursus online berbayar yang menargetkan masyarakat awam.",
          "Kedua fenomena ini tidak berdiri sendiri. Mereka adalah simptom dari permasalahan yang lebih mendasar: kesenjangan literasi teknologi yang lebar di masyarakat Indonesia, yang menciptakan ruang subur bagi ilusi dan eksploitasi."
        ]
      },
      {
        id: "bab-1-2",
        title: "1.2 Perumusan Masalah",
        level: 2,
        content: [
          "Makalah ini mengajukan empat pertanyaan penelitian utama:",
          "1. Apakah AI memiliki kapabilitas fundamental untuk secara mandiri menemukan dan memvalidasi kerentanan perangkat lunak yang kompleks?",
          "2. Siapakah pseudo-pakar teknologi itu, bagaimana ciri-cirinya, dan mengapa mereka berbahaya bagi komunitas?",
          "3. Bagaimana modus operandi kursus online predatif dalam eksploitasi kesenjangan literasi digital, dan apa dampaknya terhadap korban?",
          "4. Apa kerangka kerja yang dapat digunakan untuk membedakan kompetensi sejati dari ilusi kompetensi dalam konteks keamanan siber?"
        ]
      },
      {
        id: "bab-1-3",
        title: "1.3 Tujuan dan Manfaat",
        level: 2,
        content: [
          "Makalah ini bertujuan untuk:",
          "-- Memberikan analisis teknis mendalam mengenai batasan kapabilitas AI dalam riset keamanan siber.",
          "-- Mendefinisikan dan mendokumentasikan fenomena pseudo-pakar teknologi di Indonesia secara sistematis.",
          "-- Menganalisis mekanisme dan dampak kursus online predatif dalam ekosistem edukasi keamanan siber.",
          "-- Menyajikan studi kasus konkret sebagai ilustrasi empiris.",
          "-- Menawarkan panduan praktis bagi masyarakat untuk melindungi diri dari penipuan berkedok edukasi teknologi.",
          "-- Mendorong budaya riset keamanan yang berbasis ilmu pengetahuan, etika, dan integritas di komunitas Indonesia."
        ]
      },
      {
        id: "bab-1-4",
        title: "1.4 Metodologi",
        level: 2,
        content: [
          "Makalah ini menggunakan pendekatan analisis deskriptif-kualitatif berbasis observasi partisipatif. Data primer bersumber dari pengamatan langsung terhadap laporan yang diajukan ke platform HackerOne, khususnya pada program bug bounty cURL antara tahun 2023-2024. Data sekunder diperoleh dari dokumentasi yang dipublikasikan oleh Daniel Stenberg (pengembang cURL), diskusi di Hacker News, dan analisis konten kursus online keamanan siber yang beredar di Indonesia."
        ]
      },
      {
        id: "bab-2",
        title: "BAB II: TINJAUAN LITERATUR DAN KERANGKA TEORITIS",
        level: 1,
        content: []
      },
      {
        id: "bab-2-1",
        title: "2.1 Evolusi Riset Kerentanan Perangkat Lunak",
        level: 2,
        content: [
          "Riset kerentanan (vulnerability research) adalah disiplin ilmu yang bertujuan mengidentifikasi, menganalisis, dan mendokumentasikan kelemahan dalam sistem komputer yang dapat dieksploitasi pihak tidak berwenang. Sejarahnya dapat ditelusuri ke era 1980-an ketika komunitas hacker etis pertama kali mulai mendokumentasikan kelemahan sistem secara sistematik.",
          "[TABLE:Era 1980-1990an|Eksplorasi manual sistem UNIX; budaya hacker etis terbentuk],[Era 2000-2010an|Fuzzing otomatis; analisis biner; munculnya platform CVE publik],[Era 2010-2020an|Platform bug bounty; penelitian terdistribusi global; responsible disclosure],[Era 2020-Sekarang|Keterlibatan AI/ML; debat peran otomatisasi; proliferasi pseudo-expert]"
        ]
      },
      {
        id: "bab-2-2",
        title: "2.2 Kecerdasan Buatan dalam Keamanan Siber",
        level: 2,
        content: [
          "AI telah berhasil diaplikasikan pada sejumlah domain keamanan yang terbatas, antara lain: deteksi anomali berbasis perilaku jaringan (IDS/IPS berbasis ML), klasifikasi malware menggunakan supervised learning, analisis log dalam skala besar, dan generasi fuzzing input dasar. Namun, peneliti kelas dunia seperti yang tergabung dalam Project Zero Google dan Offensive Security secara konsisten menegaskan bahwa penemuan kerentanan tingkat tinggi masih sepenuhnya bergantung pada kapabilitas kognitif manusia."
        ]
      },
      {
        id: "bab-2-3",
        title: "2.3 Ekosistem Bug Bounty dan Standar Kualitas",
        level: 2,
        content: [
          "Platform HackerOne menetapkan standar ketat dalam penilaian laporan kerentanan. Sebuah laporan dinilai valid apabila memenuhi kriteria: dapat direproduksi secara konsisten, berada dalam scope program, berdampak nyata terhadap keamanan, disertai PoC yang berfungsi, dan mengikuti disclosure policy. Laporan yang gagal mendapatkan status Informative, Duplicate, atau Not Applicable (NA)."
        ]
      },
      {
        id: "bab-2-4",
        title: "2.4 Konsep Dunning-Kruger Effect dalam Konteks Teknologi",
        level: 2,
        content: [
          "Efek Dunning-Kruger, pertama kali dipaparkan oleh David Dunning dan Justin Kruger (1999), mendeskripsikan fenomena kognitif di mana individu dengan kompetensi rendah secara sistematis melebih-lebihkan kemampuan mereka sendiri. Sebaliknya, individu yang sangat kompeten cenderung meremehkan kemampuan mereka karena mereka menyadari betapa kompleksnya domain tersebut.",
          "Dalam konteks keamanan siber, efek ini menghasilkan paradoks yang berbahaya: seorang pemula yang baru belajar menggunakan tools otomatis selama seminggu dapat merasa lebih percaya diri daripada peneliti berpengalaman yang memahami betapa dalamnya ketidaktahuan yang masih perlu ia atasi. Pseudo-pakar teknologi adalah manifestasi ekstrem dari efek Dunning-Kruger -- dan mereka secara aktif mengeksploitasinya untuk keuntungan finansial."
        ]
      },
      {
        id: "bab-3",
        title: "BAB III: MENGAPA AI TIDAK DAPAT MENEMUKAN KERENTANAN SECARA MANDIRI",
        level: 1,
        content: []
      },
      {
        id: "bab-3-1",
        title: "3.1 Perbedaan Fundamental: Pola Statistik vs. Pemahaman Kausal",
        level: 2,
        content: [
          "Inti permasalahan terletak pada perbedaan mendasar antara cara kerja AI dan proses kognitif yang dibutuhkan dalam riset keamanan. AI generatif beroperasi berdasarkan pengenalan dan reproduksi pola statistik dari data pelatihan. Ini sangat berbeda dari proses berpikir yang diperlukan untuk menemukan kerentanan baru.",
          "Sebuah kerentanan yang belum pernah ada sebelumnya -- disebut zero-day -- tidak memiliki representasi statistik yang memadai dalam data pelatihan AI. Secara teoritikal, AI tidak dapat menemukan apa yang belum pernah diketahui. Ia hanya mampu memproyeksikan pola kerentanan yang sudah didokumentasikan ke dalam kode baru, menghasilkan tingkat false positive yang tinggi dan false negative yang berbahaya.",
          "[QUOTE:\"The fool doth think he is wise, but the wise man knows himself to be a fool.\" -- William Shakespeare, As You Like It. Dalam konteks keamanan siber modern: seorang pemula yang baru mengenal Kali Linux merasa dirinya hacker; seorang peneliti veteran yang telah menemukan puluhan CVE tahu betapa banyak yang belum ia ketahui.]"
        ]
      },
      {
        id: "bab-3-2",
        title: "3.2 Lima Dimensi Kapabilitas yang Tidak Dimiliki AI",
        level: 2,
        content: [
          "3.2.1 Pemahaman Semantik Kode yang Mendalam -- Membaca kode adalah satu hal; memahami implikasi keamanannya dalam konteks eksekusi nyata adalah hal yang berbeda sepenuhnya. AI melihat kode sebagai teks; peneliti keamanan melihat kode sebagai sistem dinamis yang berinteraksi dengan prosesor, memori, OS, dan jaringan secara simultan.",
          "3.2.2 Intuisi dan Naluri Analitis -- Setelah ribuan jam menganalisis kode dan binary, peneliti keamanan mengembangkan apa yang disebut sebagai security intuition -- kemampuan untuk merasakan di mana kerentanan kemungkinan besar bersembunyi bahkan sebelum analisis formal dilakukan.",
          "3.2.3 Eksplorasi Hipotesis Iteratif -- Riset keamanan sesungguhnya adalah siklus ilmiah: membangun hipotesis, merancang eksperimen, menginterpretasikan hasil yang ambigu, merevisi hipotesis, dan mengulanginya.",
          "3.2.4 Pemahaman Konteks Bisnis dan Logika Aplikasi -- Banyak kerentanan paling berharga -- terutama dalam kategori logika bisnis -- tidak terlihat melalui analisis kode saja.",
          "3.2.5 Reverse Engineering dan Analisis Biner -- Sebagian besar perangkat lunak komersial tidak menyediakan kode sumber. Menemukan kerentanan dalam software closed-source memerlukan kemampuan membaca bahasa assembly, memahami konvensi pemanggilan fungsi berbagai arsitektur prosesor."
        ]
      },
      {
        id: "bab-3-3",
        title: "3.3 Taksonomi Kerentanan yang Tidak Dapat Ditemukan AI",
        level: 2,
        content: [
          "[TABLE_HEADER:JENIS KERENTANAN|MENGAPA AI TIDAK BISA|KEMAMPUAN AI]",
          "[TABLE:Race Condition / TOCTOU|Timing & thread scheduling|Sangat Rendah],[Heap UAF & Overflow|Manajemen memori tingkat rendah|Sangat Rendah],[Type Confusion Biner|ABI & representasi tipe data|Sangat Rendah],[Logic Flaws Autentikasi|Model ancaman aplikasi menyeluruh|Rendah],[Chained Vulnerabilities|Kreativitas menghubungkan bug|Sangat Rendah],[Side-Channel Attacks|Eksperimen fisik & pengukuran|Tidak Ada],[Format String Zero-Day|Penggunaan variadic functions|Rendah],[Integer Overflow Kontekstual|Platform-specific compiler behavior|Sangat Rendah]"
        ]
      },
      {
        id: "bab-4",
        title: "BAB IV: STUDI KASUS -- AI SLOP PADA PROGRAM BUG BOUNTY cURL",
        level: 1,
        content: []
      },
      {
        id: "bab-4-1",
        title: "4.1 Mengapa cURL Adalah Target yang Sangat Tidak Tepat bagi Pemula",
        level: 2,
        content: [
          "cURL adalah perpustakaan transfer data dan alat command-line yang dikembangkan Daniel Stenberg sejak 1998. Digunakan oleh miliaran perangkat dan dipercaya sebagai komponen inti ribuan aplikasi produksi global, cURL adalah salah satu proyek open-source yang paling kritis sekaligus paling teliti diaudit di dunia.",
          "Menemukan kerentanan valid di cURL memerlukan pemahaman mendalam tentang puluhan protokol jaringan (HTTP/1.1, HTTP/2, HTTP/3, FTP, SMTP, IMAP, LDAP, dan lebih dari 25 lainnya), implementasi TLS/SSL dan manajemen sertifikat X.509, manajemen memori tingkat rendah dalam bahasa C termasuk aritmetika pointer, parsing kompleks URI sesuai RFC, dan perilaku berbeda antara puluhan platform.",
          "[QUOTE:cURL bukan website atau aplikasi web yang dapat dipindai dengan scanner otomatis. cURL adalah perangkat lunak sistem tingkat rendah dalam bahasa C -- wilayah di mana kesalahan satu byte dapat mengubah perilaku eksekusi secara fundamental. Menargetkannya menggunakan AI tanpa memahami bahasa C sama saja dengan mencoba mereparasi mesin jet tanpa pernah mempelajari aerodinamika.]"
        ]
      },
      {
        id: "bab-4-2",
        title: "4.2 Pola AI Slop yang Teridentifikasi",
        level: 2,
        content: [
          "Komunitas keamanan dan Daniel Stenberg sendiri telah mendokumentasikan membanjirnya laporan kerentanan yang dihasilkan AI ke program cURL. Laporan-laporan ini menunjukkan pola yang sangat konsisten:",
          "-- Bahasa laporan terstruktur sempurna namun tidak memiliki substansi teknis yang dapat diverifikasi.",
          "-- Klaim kerentanan yang bertentangan dengan arsitektur dan desain cURL yang sebenarnya.",
          "-- Proof-of-concept yang tidak dapat direproduksi atau tidak masuk akal secara teknis.",
          "-- Terminologi teknis digunakan secara tidak tepat atau dicampur secara inkoheren.",
          "-- Tidak adanya pemahaman bahwa cURL adalah library C, bukan aplikasi web atau layanan cloud.",
          "-- Penggunaan kategori kerentanan yang tidak diakui dalam standar CWE, CVE, atau OWASP."
        ]
      },
      {
        id: "bab-4-3",
        title: "4.3 Analisis Tiga Laporan Representatif",
        level: 2,
        content: [
          "4.3.1 Buffer Overflow Risk in Curl_inet_ntop -- Laporan ini mengklaim risiko buffer overflow dalam fungsi Curl_inet_ntop. Analisis teknis terhadap implementasi aktual menunjukkan: ukuran buffer yang dialokasikan sudah didefinisikan dengan tepat sesuai RFC 4291 (INET6_ADDRSTRLEN = 46 bytes), tidak ada vektor input yang dapat dikontrol penyerang secara langsung. Klaim muncul dari AI yang mencocokkan pola \"fungsi konversi string\" dengan pola kerentanan buffer overflow tanpa memvalidasi konteks. Status: Not Applicable.",
          "4.3.2 Silent TLS Trust Model Hijacking via Design -- Laporan ini mengklaim desain model kepercayaan TLS cURL memungkinkan serangan Man-in-the-Middle yang \"senyap\". Ini mencerminkan ketidakpahaman mendasar: model kepercayaan sertifikat TLS adalah by design, bukan kerentanan. Ini setara dengan mengklaim bahwa pintu rumah \"rentan\" karena dapat dibuka dengan kunci yang benar. Status: Ditolak.",
          "4.3.3 Arbitrary Configuration File Inclusion (ACFI) -- Laporan ini mengklaim kerentanan \"Arbitrary Configuration File Inclusion\" melalui fitur file konfigurasi. Istilah \"ACFI\" tidak diakui dalam standar CWE, CVE, atau OWASP. Ini adalah terminologi yang diciptakan AI. Status: Not Applicable."
        ]
      },
      {
        id: "bab-5",
        title: "BAB V: ANATOMI PSEUDO-PAKAR TEKNOLOGI",
        level: 1,
        content: []
      },
      {
        id: "bab-5-1",
        title: "5.1 Definisi dan Karakteristik",
        level: 2,
        content: [
          "Pseudo-pakar teknologi (selanjutnya disebut PPT) adalah individu yang secara aktif mengklaim keahlian teknis -- khususnya dalam bidang keamanan siber, hacking, atau pemrograman -- yang tidak dimilikinya secara substansial, dan menggunakan klaim tersebut untuk memperoleh kepercayaan publik, pengikut media sosial, atau keuntungan finansial.",
          "PPT berbeda dari pemula biasa dalam satu aspek kritis: pemula menyadari keterbatasannya dan berusaha belajar. PPT tidak menyadari (atau sengaja mengabaikan) keterbatasannya dan secara aktif memasarkan dirinya sebagai ahli."
        ]
      },
      {
        id: "bab-5-2",
        title: "5.2 Profil Psikologis dan Motivasi",
        level: 2,
        content: [
          "[TABLE_HEADER:FAKTOR PSIKOLOGIS|MANIFESTASI]",
          "[TABLE:Dunning-Kruger Effect Ekstrem|Kompetensi rendah menghasilkan kepercayaan diri yang tidak proporsional],[Confirmation Bias|Hanya menyerap informasi yang mengkonfirmasi klaim keahlian mereka],[Motivasi Finansial|Kursus, konsultasi, dan endorse produk menghasilkan pendapatan nyata],[Kebutuhan Pengakuan Sosial|Algoritma media sosial memberikan reward kepada konten yang mengklaim keahlian],[Echo Chamber Media Sosial|Audiens yang tidak kompeten tidak dapat memverifikasi klaim PPT],[Impostor Syndrome Terbalik|Alih-alih merasa tidak kompeten, PPT merasa lebih superior dari semua orang]"
        ]
      },
      {
        id: "bab-5-3",
        title: "5.3 Dua Puluh Tanda Peringatan Pseudo-Pakar Teknologi",
        level: 2,
        content: [
          "Kategori A: Tanda-tanda dalam Konten yang Dipublikasikan",
          "1. Menggunakan terminologi teknis yang tidak tepat atau mencampur jargon dari domain berbeda secara tidak koheren.",
          "2. Tidak dapat menjelaskan konsep teknis tanpa menggunakan analogi yang sangat disederhanakan hingga salah secara teknis.",
          "3. Klaim keberhasilan yang tidak dapat diverifikasi: \"saya berhasil meretas X\" tanpa CVE number, Hall of Fame entry, atau bukti apapun.",
          "4. Demonstrasi menggunakan tools yang sudah dikonfigurasi sebelumnya di lab terkontrol, dipresentasikan seolah-olah merupakan eksploitasi dunia nyata.",
          "5. Konten yang semata-mata mengulangi informasi yang sudah ada di internet tanpa menambahkan analisis atau wawasan baru.",
          "6. Menggunakan AI untuk menghasilkan penjelasan teknis dan menyajikannya sebagai pemahaman pribadi.",
          "",
          "Kategori B: Tanda-tanda dalam Interaksi dan Respons",
          "7. Tidak mampu menjawab pertanyaan teknis spesifik tanpa melarikan diri ke jawaban umum atau mengubah topik.",
          "8. Menjadi defensif atau agresif ketika kompetensinya dipertanyakan oleh seseorang yang lebih kompeten.",
          "9. Tidak memiliki profil yang dapat diverifikasi pada platform yang relevan (HackerOne, CVE database, GitHub dengan kontribusi nyata).",
          "10. Tidak dapat menulis kode fungsional di luar copy-paste dari Stack Overflow atau AI.",
          "11. Mengklaim pengalaman \"bertahun-tahun\" namun tidak dapat menyebutkan kerentanan spesifik yang pernah ditemukan.",
          "12. Tidak familiar dengan tools fundamental: GDB, Wireshark, Burp Suite, atau tools setara.",
          "",
          "Kategori C: Tanda-tanda dalam Konteks Komersial",
          "13. Menawarkan \"sertifikasi\" atau \"membership\" eksklusif yang tidak diakui oleh industri.",
          "14. Menggunakan FOMO secara agresif dalam pemasaran.",
          "15. Memberikan jaminan hasil yang tidak realistis: \"dalam 30 hari Anda akan bisa meretas apapun\".",
          "16. Menghindari diskusi teknis mendalam dalam sesi demo atau webinar.",
          "17. Tidak dapat menjawab pertanyaan teknis dari peserta kursus.",
          "18. Harga kursus yang tidak proporsional tanpa justifikasi.",
          "19. Testimonial yang tidak dapat diverifikasi.",
          "20. Menggunakan klaim asosiasi dengan perusahaan/institusi terkenal yang tidak dapat diverifikasi."
        ]
      },
      {
        id: "bab-5-4",
        title: "5.4 Mengapa PPT Berbahaya bagi Komunitas dan Publik",
        level: 2,
        content: [
          "5.4.1 Kerusakan pada Reputasi Komunitas -- Ketika PPT mengklaim menjadi representasi komunitas keamanan siber Indonesia, setiap kesalahan mereka mencoreng reputasi seluruh komunitas.",
          "5.4.2 Distorsi Ekspektasi Pasar -- Ketika PPT menentukan harga jasa berdasarkan klaim yang tidak berdasar, mereka mendistorsi persepsi pasar tentang nilai kompetensi keamanan siber yang sesungguhnya.",
          "5.4.3 Risiko Keamanan Nyata -- Organisasi yang mempercayakan keamanan sistem mereka kepada PPT mendapatkan rasa aman yang palsu. Dalam konteks infrastruktur kritis, ini dapat memiliki konsekuensi yang sangat serius."
        ]
      },
      {
        id: "bab-6",
        title: "BAB VI: ANATOMI KURSUS ONLINE PREDATIF",
        level: 1,
        content: []
      },
      {
        id: "bab-6-1",
        title: "6.1 Mengapa Keamanan Siber Menjadi Target Utama",
        level: 2,
        content: [
          "Tidak ada bidang teknologi lain yang lebih rentan terhadap komersialisasi predatif daripada keamanan siber. Beberapa faktor struktural:",
          "-- Kesenjangan pengetahuan yang lebar antara publik dan praktisi membuat evaluasi kualitas hampir mustahil bagi calon pembeli.",
          "-- Glamour dan misteri yang melekat pada kata \"hacker\" menciptakan daya tarik emosional yang kuat.",
          "-- Narasi penghasilan tinggi -- sebagian besar dilebih-lebihkan -- menciptakan motivasi finansial yang kuat.",
          "-- Tidak adanya regulasi atau standar industri yang mengikat di Indonesia.",
          "-- Algoritma media sosial yang memberikan reward kepada konten sensasional atas konten yang akurat."
        ]
      },
      {
        id: "bab-6-2",
        title: "6.2 Modus Operandi Kursus Predatif",
        level: 2,
        content: [
          "6.2.1 Fase Akuisisi: Menarik Korban -- Konten clickbait di media sosial, flexing palsu, demonstrasi alat-alat yang terkesan canggih, menciptakan urgensi artifisial, dan testimonial tidak autentik.",
          "6.2.2 Fase Konversi: Menjual Ilusi -- Memberikan akses ke tools tanpa mengajarkan fundamental, kurikulum yang superfisial, menggunakan bahasa teknis kosong, sertifikat yang tidak diakui, dan membungkus konten gratis dengan presentasi yang dipoles.",
          "6.2.3 Fase Retensi dan Upselling -- \"Komunitas eksklusif\" berbayar, mentoring one-on-one premium, kursus lanjutan, dan affiliate program."
        ]
      },
      {
        id: "bab-6-3",
        title: "6.3 Dampak terhadap Korban",
        level: 2,
        content: [
          "[TABLE_HEADER:JENIS KERUGIAN|MANIFESTASI|DAMPAK JANGKA PANJANG]",
          "[TABLE:Kerugian Finansial|Ratusan ribu hingga jutaan rupiah|Uang hilang, tidak ada kompetensi yang dapat dimonetisasi],[Kerugian Waktu|Puluhan jam belajar yang tidak produktif|Waktu yang bisa digunakan untuk belajar secara otentik],[Kerugian Psikologis|False confidence yang kontraproduktif|Frustasi saat menemui kenyataan di lapangan],[Risiko Hukum|Mencoba teknik yang dipelajari tanpa izin|Konsekuensi hukum yang serius di bawah UU ITE],[Kerugian Karir|Ekspektasi karir yang tidak realistis|Burnout dan meninggalkan bidang sepenuhnya]"
        ]
      },
      {
        id: "bab-7",
        title: "BAB VII: DAMPAK SISTEMIK DAN IMPLIKASI NASIONAL",
        level: 1,
        content: []
      },
      {
        id: "bab-7-1",
        title: "7.1 Dampak terhadap Ekosistem Bug Bounty",
        level: 2,
        content: [
          "7.1.1 Beban Triage yang Meningkat -- Tim triage di setiap program bug bounty memiliki kapasitas terbatas. Ketika laporan AI slop membanjiri antrian, laporan valid dari peneliti kompeten dapat tertunda penanganannya.",
          "7.1.2 Degradasi Kepercayaan Platform -- Vendor yang menerima terlalu banyak laporan tidak berkualitas dapat meragukan nilai program bug bounty.",
          "7.1.3 Distorsi Metrik dan Reputasi -- Ketika laporan AI slop merusak metrik secara sistematis, sistem reputasi menjadi kurang efektif."
        ]
      },
      {
        id: "bab-7-2",
        title: "7.2 Dampak terhadap Keamanan Nasional",
        level: 2,
        content: [
          "Dampak yang paling serius adalah implikasi terhadap keamanan siber nasional Indonesia:",
          "-- Infrastruktur kritis yang dianggap aman padahal belum pernah diaudit secara kompeten.",
          "-- Investasi dalam solusi keamanan yang tidak efektif berdasarkan rekomendasi PPT.",
          "-- Sumber daya manusia keamanan siber nasional yang secara statistik lemah.",
          "-- Ketergantungan pada vendor atau konsultan asing karena tidak adanya kepercayaan terhadap praktisi lokal."
        ]
      },
      {
        id: "bab-7-3",
        title: "7.3 Dampak terhadap Pengembangan Talenta Jangka Panjang",
        level: 2,
        content: [
          "Dampak yang paling insidius adalah efek jangka panjang terhadap pengembangan talenta. Ketika seseorang belajar bahwa ia dapat \"menghasilkan laporan bug bounty\" hanya dengan AI atau \"menjadi hacker\" hanya dengan kursus 30 hari, ia kehilangan motivasi untuk menempuh jalur belajar yang sesungguhnya.",
          "Hasilnya adalah generasi yang iliterasi secara teknis namun percaya diri secara palsu -- kombinasi yang berbahaya dalam domain keamanan siber."
        ]
      },
      {
        id: "bab-8",
        title: "BAB VIII: REKOMENDASI DAN PANDUAN PENGEMBANGAN KOMPETENSI OTENTIK",
        level: 1,
        content: []
      },
      {
        id: "bab-8-1",
        title: "8.1 Fondasi Teknis yang Wajib Dibangun",
        level: 2,
        content: [
          "Bagi siapa pun yang serius berkarir dalam riset keamanan:",
          "1. Pemrograman: minimal satu bahasa tingkat rendah (C/C++) dan satu bahasa scripting (Python).",
          "2. Sistem Operasi: arsitektur proses Linux dan Windows, manajemen memori virtual, kernel space vs. user space.",
          "3. Jaringan: model OSI secara mendalam, TCP/IP stack, HTTP/HTTPS, TLS/SSL, Wireshark dan tcpdump.",
          "4. Assembly dasar: mampu membaca disassembly x86/x64 menggunakan Ghidra atau IDA Free.",
          "5. Kategori kerentanan utama: CWE Top 25, OWASP Top 10.",
          "6. Debugging: GDB dengan pwndbg, atau x64dbg untuk Windows.",
          "7. Platform praktik: HackTheBox, TryHackMe, picoCTF, dan CTF competitions."
        ]
      },
      {
        id: "bab-8-2",
        title: "8.2 Metodologi Penelitian yang Benar",
        level: 2,
        content: [
          "Sebelum menargetkan program bug bounty apapun, seorang peneliti harus mampu menjawab:",
          "-- Apa yang sebenarnya dilakukan oleh perangkat lunak atau aplikasi target ini?",
          "-- Siapa yang menggunakannya, dalam konteks apa, dan apa model ancaman yang relevan?",
          "-- Apa yang terdefinisi sebagai in-scope dan out-of-scope?",
          "-- Kerentanan jenis apa yang paling relevan dengan arsitektur target?",
          "-- Apakah saya memiliki alat, pengetahuan, dan lingkungan yang diperlukan?",
          "-- Dapatkah saya mendemonstrasikan dampak kerentanan secara konkret dan terukur?"
        ]
      },
      {
        id: "bab-8-3",
        title: "8.3 Kapan Tidak Mengajukan Laporan",
        level: 2,
        content: [
          "Salah satu tanda kedewasaan seorang peneliti keamanan adalah kemampuan menahan diri. Jangan ajukan laporan apabila:",
          "-- Laporan dihasilkan sepenuhnya atau sebagian besar oleh AI tanpa verifikasi teknis mandiri.",
          "-- Anda tidak dapat menjelaskan mekanisme teknis kerentanan tanpa bantuan AI.",
          "-- Tidak ada proof-of-concept yang dapat didemonstrasikan.",
          "-- Anda tidak memiliki pemahaman dasar tentang teknologi target.",
          "-- Laporan didasarkan pada asumsi atau spekulasi tanpa bukti empiris.",
          "-- Anda tidak yakin apakah temuan berada dalam scope program."
        ]
      },
      {
        id: "bab-9",
        title: "BAB IX: KESIMPULAN",
        level: 1,
        content: [
          "Makalah ini telah memaparkan secara komprehensif dua ancaman yang saling terkait dalam ekosistem keamanan siber Indonesia: ilusi bahwa AI dapat menggantikan kompetensi teknis dalam riset kerentanan, dan ilusi bahwa pseudo-pakar dan kursus online predatif dapat memberikan kompetensi yang sesungguhnya dalam waktu singkat.",
          "Tujuh temuan utama:",
          "1. AI tidak memiliki pemahaman kausal, kontekstual, dan semantik yang diperlukan untuk riset keamanan tingkat lanjut.",
          "2. Laporan kerentanan yang dihasilkan AI tanpa verifikasi teknis mandiri hampir pasti berakhir sebagai Not Applicable.",
          "3. Pseudo-pakar teknologi adalah fenomena yang berbahaya bagi keamanan komunitas dan nasional.",
          "4. Kursus online predatif mengeksploitasi kesenjangan literasi digital dengan menjual ilusi kompetensi.",
          "5. Keamanan siber adalah sains terapan yang tidak memiliki jalan pintas yang sah.",
          "6. Komunitas keamanan siber Indonesia memiliki talenta nyata yang harus dilindungi reputasinya.",
          "7. Transformasi ekosistem yang sehat memerlukan edukasi publik, regulasi yang lebih ketat, dan penghargaan terhadap kompetensi otentik."
        ]
      }
    ],
    references: [
      "pwn0sec. (2025). Please Stop Waste Your Time for Reporting a False Security Vulnerabilities Used AI! Medium.",
      "Hacker News / Y Combinator. (2024). AI slop security reports submitted to curl. Hacker News.",
      "HackerOne. (2024). Disclosed Report: Buffer Overflow Risk in Curl_inet_ntop -- curl. https://hackerone.com/reports/2613898",
      "HackerOne. (2024). Disclosed Report: Silent TLS Trust Model Hijacking via Design -- curl. https://hackerone.com/reports/2495293",
      "HackerOne. (2024). Disclosed Report: Arbitrary Configuration File Inclusion -- curl. https://hackerone.com/reports/2597485",
      "Stenberg, D. (2024). The curl bug bounty program -- official documentation. https://curl.se/docs/bugbounty.html",
      "Stenberg, D. (2024). AI-generated security reports. https://daniel.haxx.se/blog/2024/01/02/the-i-in-llm-stands-for-intelligence/",
      "MITRE Corporation. (2024). CWE Top 25 Most Dangerous Software Weaknesses 2024. https://cwe.mitre.org/top25/",
      "OWASP Foundation. (2021). OWASP Top 10 Web Application Security Risks. https://owasp.org/Top10/",
      "HackerOne. (2024). The 2024 Hacker-Powered Security Report. https://www.hackerone.com/resources/hackerone/hacker-powered-security-report",
      "NVD / NIST. (2024). National Vulnerability Database. https://nvd.nist.gov/",
      "Dunning, D. & Kruger, J. (1999). Unskilled and Unaware of It. Journal of Personality and Social Psychology, 77(6), 1121-1134.",
      "Offensive Security. (2024). PWK -- Penetration Testing with Kali Linux: OSCP Course Overview. https://www.offensive-security.com/courses/pen-200/",
      "PortSwigger. (2024). Web Security Academy. https://portswigger.net/web-security",
      "BSSN. (2024). Laporan Tahunan Keamanan Siber Nasional 2023. https://bssn.go.id"
    ]
  }
];
