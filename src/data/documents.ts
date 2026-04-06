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
  },
  {
    id: "ZERO-2025-002",
    title: "Fenomena Developer Instan, Miskonsepsi tentang Cybersecurity, dan Bahaya Edukasi Teknologi yang Dibangun di Atas Ilusi",
    subtitle: "Analisis kritis dan sistematis terhadap instanisasi profesi teknologi dan miskonsepsi publik tentang definisi, kapabilitas, dan etika seorang hacker dalam ekosistem teknologi Indonesia",
    classification: "PUBLIC",
    date: "April 2025",
    authors: ["number01", "pwn0sec"],
    organization: "PT. PwnOsec Technologies Ltd",
    volume: "Vol. 1 | No. 2 | Seri II",
    pages: 30,
    abstract: "Makalah ini menganalisis secara kritis dan sistematis dua fenomena yang sedang merajalela dalam ekosistem teknologi Indonesia: pertama, instanisasi profesi teknologi, yaitu kecenderungan masyarakat dan konten kreator untuk menyederhanakan dan mempercepat secara artifisial proses menjadi developer atau praktisi keamanan siber; kedua, miskonsepsi publik yang meluas tentang definisi, kapabilitas, dan etika seorang hacker. Berdasarkan observasi terhadap tren konten digital di platform seperti TikTok, YouTube, dan Medium, makalah ini mendokumentasikan bagaimana narasi-narasi \"hacker instan\" dan \"coding tanpa belajar\" tidak hanya salah secara teknis, tetapi juga secara aktif merusak fondasi edukasi teknologi nasional. Makalah ini adalah kelanjutan tematik dari jurnal pertama yang membahas keterbatasan AI dalam riset kerentanan, dan bersama-sama membentuk satu argumen yang kohesif: bahwa kompetensi sejati dalam keamanan siber tidak pernah bisa diinstankan, baik oleh teknologi AI maupun oleh narasi viral yang menyesatkan.",
    keywords: ["instanisasi profesi", "hacker", "miskonsepsi teknologi", "script kiddie", "edukasi keamanan siber", "developer", "pemrograman", "etika digital", "konten viral", "literasi teknologi", "komunitas Indonesia"],
    sections: [
      {
        id: "s2-bab-1",
        title: "BAB I: PENDAHULUAN",
        level: 1,
        content: []
      },
      {
        id: "s2-bab-1-1",
        title: "1.1 Konteks: Era di Mana Popularitas Mengalahkan Proses",
        level: 2,
        content: [
          "Kita hidup di era yang paling paradoksal dalam sejarah teknologi: akses terhadap informasi tidak pernah semudah ini, namun kualitas pemahaman yang dibangun dari informasi tersebut justru semakin dipertanyakan. Media sosial telah mengubah cara manusia mengonsumsi pengetahuan dari proses mendalam menjadi fragmen-fragmen konten yang dirancang untuk memaksimalkan engagement, bukan pemahaman.",
          "Dalam konteks ini, dunia teknologi, khususnya pemrograman dan keamanan siber, menjadi salah satu domain yang paling rentan terhadap distorsi naratif. Profesi-profesi yang membutuhkan bertahun-tahun pembangunan fondasi kini dipresentasikan sebagai sesuatu yang dapat dikuasai dalam hitungan hari, bahkan jam. Konten-konten dengan judul seperti \"Belajar Hacking dalam 24 Jam\", \"Jadi Developer Tanpa Coding\", atau \"Cara Meretas Akun Instagram Teman\" bukan hanya salah secara teknis. Ia secara aktif merusak ekosistem edukasi yang seharusnya dibangun dengan serius.",
          "Makalah ini adalah respons akademis terhadap fenomena tersebut, yang dibangun di atas artikel observasional dari praktisi dan pengamat teknologi Indonesia yang telah aktif memantau tren ini. Tujuannya bukan sekadar kritik, melainkan rekonstruksi narasi yang lebih akurat, lebih bertanggung jawab, dan lebih bermanfaat bagi perkembangan komunitas teknologi Indonesia."
        ]
      },
      {
        id: "s2-bab-1-2",
        title: "1.2 Hubungan dengan Jurnal Pertama dalam Seri Ini",
        level: 2,
        content: [
          "Jurnal ini merupakan kelanjutan tematik dari jurnal pertama dalam seri ini, yang membahas keterbatasan fundamental kecerdasan buatan dalam penemuan kerentanan perangkat lunak. Jika jurnal pertama menjawab pertanyaan \"mengapa AI tidak bisa menggantikan peneliti keamanan\", maka jurnal ini menjawab pertanyaan yang lebih mendasar: mengapa proses belajar yang sesungguhnya tidak dapat diinstankan oleh apapun, baik oleh AI maupun oleh narasi viral.",
          "Kedua jurnal bersama-sama membentuk argumen yang kohesif: kompetensi sejati dalam keamanan siber adalah hasil dari proses yang panjang, keras, dan tidak ada jalan pintasnya. Baik teknologi maupun pemasaran tidak dapat mengubah fakta fundamental ini."
        ]
      },
      {
        id: "s2-bab-1-3",
        title: "1.3 Perumusan Masalah",
        level: 2,
        content: [
          "1. Apa definisi otentik seorang hacker, dan bagaimana gambaran populer mendistorsinya secara berbahaya?",
          "2. Mengapa pemahaman pemrograman adalah prasyarat yang tidak dapat dinegosiasikan dalam keamanan siber?",
          "3. Bagaimana mekanisme penyebaran dan bahaya konten edukasi teknologi yang dangkal dan viral?",
          "4. Siapakah script kiddie, bagaimana ia terbentuk, dan apa konsekuensi keberadaannya bagi ekosistem?",
          "5. Bagaimana seharusnya jalur pengembangan kompetensi yang otentik dan berkelanjutan dalam keamanan siber?"
        ]
      },
      {
        id: "s2-bab-1-4",
        title: "1.4 Metodologi Penulisan",
        level: 2,
        content: [
          "Makalah ini menggunakan metode analisis deskriptif-kualitatif dengan triangulasi data dari tiga sumber utama:",
          "-- Observasi konten digital di platform media sosial Indonesia dan internasional",
          "-- Analisis artikel opini dan refleksi dari praktisi teknologi Indonesia yang berpengalaman",
          "-- Referensi silang dengan literatur keamanan siber akademis dan profesional",
          "Pendekatan ini menghasilkan gambaran yang lebih kaya dan multidimensi dibanding analisis tunggal."
        ]
      },
      {
        id: "s2-bab-2",
        title: "BAB II: MENDEFINISIKAN ULANG \"HACKER\" -- ANTARA MITOS DAN REALITA",
        level: 1,
        content: []
      },
      {
        id: "s2-bab-2-1",
        title: "2.1 Asal-usul dan Makna Otentik",
        level: 2,
        content: [
          "Istilah \"hacker\" pertama kali muncul di MIT pada awal 1960-an, merujuk kepada individu-individu yang dengan rasa penasaran yang tinggi mengeksplorasi sistem komputer untuk memahami cara kerjanya secara mendalam, jauh melampaui penggunaan yang dimaksudkan oleh pembuatnya. Dalam konteks aslinya, hacker adalah gelar kehormatan yang diberikan kepada pemikir kreatif yang mampu menemukan solusi elegan untuk masalah-masalah yang kompleks.",
          "Definisi ini jauh berbeda dari gambaran populer yang kini mendominasi media massa dan konten digital: sosok misterius berpakaian hoodie hitam yang mengetik dengan cepat di depan layar penuh kode hijau, \"meretas\" sistem dalam hitungan menit untuk tujuan kriminal. Distorsi ini bukan hanya tidak akurat. Ia secara aktif merusak pemahaman publik tentang profesi yang sangat penting ini.",
          "[QUOTE:The hacker ethic is a moral principle that promotes free exchange of information and decentralized power. It is about curiosity, learning, and the passion to understand how things work, not about breaking things for the sake of it. -- Steven Levy, Hackers: Heroes of the Computer Revolution, 1984]"
        ]
      },
      {
        id: "s2-bab-2-2",
        title: "2.2 Definisi yang Paling Kritis: Hacker Sejati adalah Pemecah, Pembuat, dan Penemu",
        level: 2,
        content: [
          "Komunitas keamanan siber profesional global telah lama menetapkan bahwa seorang hacker sejati bukan sekadar seseorang yang dapat menjalankan tools. Ia adalah:",
          "-- Pemecah masalah (problem solver): mampu memahami sistem secara mendalam dan menemukan solusi yang tidak terpikirkan sebelumnya",
          "-- Pembuat (creator): mampu membangun tools, skrip, exploit, dan solusi dari nol berdasarkan pemahaman teknis yang mendalam",
          "-- Penemu zero-day: mampu menemukan kerentanan yang belum pernah didokumentasikan sebelumnya, bukan sekadar menggunakan exploit yang sudah ada",
          "Tiga kapabilitas ini memiliki satu prasyarat yang sama dan tidak dapat dinegosiasikan: pemahaman mendalam tentang pemrograman dan arsitektur sistem. Tanpa fondasi ini, seseorang hanya dapat menjadi pengguna tools, bukan hacker."
        ]
      },
      {
        id: "s2-bab-2-3",
        title: "2.3 Tipologi Hacker yang Diakui Profesional",
        level: 2,
        content: [
          "[TABLE_HEADER:TIPE HACKER|KARAKTERISTIK ETIKA|PERAN TIPIKAL]",
          "[TABLE:[White Hat Hacker|Etis penuh, bekerja dengan izin eksplisit, fokus pada perbaikan sistem|Penetration tester, bug bounty hunter, security researcher],[Grey Hat Hacker|Area abu-abu etis, mungkin menemukan kerentanan tanpa izin namun melaporkannya secara bertanggung jawab|Peneliti independen yang mengungkapkan kerentanan ke vendor],[Black Hat Hacker|Niat jahat, eksploitasi untuk keuntungan pribadi tanpa izin|Kriminal siber, ransomware operator],[Red Teamer|Tim ofensif, mensimulasikan serangan nyata untuk menguji pertahanan|Adversarial simulation, full-scope penetration testing],[Blue Teamer|Tim defensif, fokus pada deteksi, respons, dan mitigasi serangan|SOC analyst, incident responder, threat hunter],[Purple Teamer|Kolaborasi ofensif-defensif, membangun pertahanan berbasis perspektif penyerang|Security engineer, detection engineer]]"
        ]
      },
      {
        id: "s2-bab-2-4",
        title: "2.4 Bagaimana Media Mendistorsi Gambaran Hacker",
        level: 2,
        content: [
          "Distorsi gambaran hacker dalam media populer bukan sebuah kecelakaan. Ia adalah konsekuensi logis dari bagaimana industri hiburan dan media digital beroperasi. Film dan serial TV membutuhkan dramatisasi. Konten media sosial membutuhkan kesederhanaan dan daya tarik visual. Kedua kebutuhan ini bertentangan secara fundamental dengan realita keamanan siber yang sesungguhnya.",
          "[TABLE_HEADER:GAMBARAN POPULER (MITOS)|REALITA PROFESIONAL]",
          "[TABLE:[Menembus sistem dalam hitungan detik|Proses riset yang memakan hari, minggu, bahkan bulan],[Pakai hoodie hitam, buka terminal, langsung dapat akses|Dokumentasi ekstensif, perencanaan metodis, lingkungan lab terkontrol],[Bekerja sendiri tanpa dokumentasi apapun|Kolaborasi tim, peer review, komunikasi dengan vendor],[Hasilkan uang besar dalam semalam dari bug bounty|Pendapatan bergantung program, rejection rate tinggi, proses panjang],[Tidak perlu belajar coding, cukup pakai tools|Pemrograman adalah prasyarat fundamental yang tidak bisa dilewati],[Tidak ada konsekuensi hukum atau etika|Scope ketat, legal agreement, responsible disclosure wajib dipatuhi],[Glamour, instan, tidak perlu kerja keras|Proses panjang, banyak kegagalan, belajar terus tanpa henti]]"
        ]
      },
      {
        id: "s2-bab-3",
        title: "BAB III: PEMROGRAMAN SEBAGAI FONDASI YANG TIDAK DAPAT DINEGOSIASIKAN",
        level: 1,
        content: []
      },
      {
        id: "s2-bab-3-1",
        title: "3.1 Argumen Logis yang Tidak Terbantahkan",
        level: 2,
        content: [
          "[QUOTE:Bagaimana mungkin seseorang bisa menemukan kerentanan dalam sistem, jika ia bahkan tidak memahami cara sistem itu dibangun? Bagaimana seseorang bisa melakukan eksploitasi secara bertanggung jawab, jika ia bahkan tidak mengerti logika dasar pemrograman? Ini bukan pertanyaan retoris. Ini adalah pertanyaan logis yang hanya memiliki satu jawaban yang jujur.]",
          "Analogi yang tepat: seorang dokter bedah tidak dapat mengoperasi organ yang tidak ia pahami anatominya. Seorang arsitek tidak dapat menemukan kelemahan struktural bangunan yang tidak ia mengerti cara konstruksinya. Seorang peneliti keamanan pun tidak dapat menemukan kerentanan dalam sistem yang tidak ia pahami cara membangunnya. Narasi yang mengatakan sebaliknya adalah logika pembodohan."
        ]
      },
      {
        id: "s2-bab-3-2",
        title: "3.2 Lima Alasan Teknis Mengapa Pemrograman Adalah Kunci",
        level: 2,
        content: [
          "3.2.1 Memahami Logika Aplikasi dari Dalam -- Kerentanan keamanan bukan fenomena yang terjadi di permukaan. Ia adalah konsekuensi dari bagaimana logika aplikasi diimplementasikan di level kode. Untuk memahami mengapa sebuah kerentanan ada, seorang peneliti harus mampu: membaca dan menginterpretasikan kode sumber dengan akurat, memahami alur kontrol program dari input hingga output, dan melihat bagaimana data mengalir dari pengguna ke sistem backend.",
          "3.2.2 Menulis Proof-of-Concept yang Valid -- Sebuah laporan kerentanan yang tidak disertai proof-of-concept (PoC) yang berfungsi tidak akan diterima oleh program bug bounty manapun yang serius. Menulis PoC memerlukan kemampuan coding aktif dalam bahasa yang relevan, pemahaman protokol yang digunakan oleh target, kemampuan mereproduksi kerentanan secara konsisten, dan dokumentasi kondisi yang diperlukan untuk memicu kerentanan.",
          "3.2.3 Membaca dan Memodifikasi Exploit yang Ada -- Eksploit publik yang tersedia di platform seperti Exploit-DB atau GitHub sering kali perlu diadaptasi untuk target spesifik. Ini memerlukan kemampuan membaca dan memahami kode milik orang lain, kemampuan memodifikasi parameter dan logika eksploit, pemahaman mengapa setiap bagian dari eksploit berfungsi, dan kemampuan men-debug eksploit ketika tidak berjalan sesuai harapan.",
          "3.2.5 Reverse Engineering dan Analisis Biner -- Sebagian besar perangkat lunak komersial tidak menyediakan kode sumber. Menemukan kerentanan dalam software tersebut memerlukan kemampuan membaca output disassembler seperti Ghidra atau IDA Pro, pemahaman bahasa assembly x86/x64 dan konvensi pemanggilan fungsi, kemampuan merekonstruksi logika program dari representasi biner, dan pemahaman bagaimana compiler mentransformasi kode sumber menjadi binary."
        ]
      },
      {
        id: "s2-bab-3-3",
        title: "3.3 Bahasa Pemrograman yang Perlu Dikuasai",
        level: 2,
        content: [
          "[TABLE_HEADER:BAHASA|LEVEL PRIORITAS|RELEVANSI DALAM KEAMANAN SIBER]",
          "[TABLE:[C dan C++|Fundamental|Manajemen memori manual, pointer, aritmetika memori. Fondasi pemahaman kerentanan tingkat rendah seperti buffer overflow dan heap exploitation],[Python|Fundamental|Scripting, otomasi, prototyping exploit, analisis log. Bahasa paling versatile dan esensial dalam riset keamanan sehari-hari],[Assembly (x86/x64)|Menengah ke Lanjut|Membaca disassembly, reverse engineering biner, pengembangan exploit tingkat lanjut dan shellcode],[JavaScript|Penting untuk Web Security|Client-side vulnerabilities (XSS, CSRF, prototype pollution), analisis kode aplikasi web modern],[Bash dan Shell Script|Fundamental|Otomasi sistem, interaksi dengan tools dan OS, membangun pipeline pengujian yang efisien],[Go atau Rust|Berkembang Pesat|Pengembangan tools modern, analisis malware baru, aplikasi performa tinggi dalam riset keamanan]]"
        ]
      },
      {
        id: "s2-bab-4",
        title: "BAB IV: ANATOMI FENOMENA INSTANISASI PROFESI TEKNOLOGI",
        level: 1,
        content: []
      },
      {
        id: "s2-bab-4-1",
        title: "4.1 Definisi dan Karakteristik Utama",
        level: 2,
        content: [
          "Instanisasi profesi teknologi adalah proses di mana jalur pengembangan kompetensi yang membutuhkan waktu bertahun-tahun secara artifisial dikompresi dan disederhanakan menjadi klaim-klaim yang dapat dikonsumsi dalam hitungan hari atau minggu. Fenomena ini terjadi ketika motivasi komersial atau viral bertemu dengan kesenjangan literasi teknologi yang lebar pada audiens target.",
          "Yang membedakan instanisasi dari penyederhanaan yang legitim adalah adanya klaim yang secara eksplisit atau implisit menyatakan bahwa hasilnya setara dengan kompetensi profesional yang sesungguhnya. Seseorang yang menyelesaikan kursus \"Belajar Hacking 5 Hari\" tidak menjadi hacker profesional. Namun narasi yang mengelilingi kursus tersebut sering kali membuat peserta mempercayai sebaliknya."
        ]
      },
      {
        id: "s2-bab-4-2",
        title: "4.2 Mekanisme Penyebaran: Mengapa Narasi Instan Begitu Viral",
        level: 2,
        content: [
          "Untuk memahami mengapa fenomena instanisasi begitu sulit dilawan, kita harus memahami mekanisme psikologis dan algoritmik yang membuatnya sangat efektif dalam menyebar:",
          "-- Kesenjangan Kompetensi sebagai Celah: Audiens yang tidak memiliki latar belakang teknis tidak dapat mengevaluasi klaim yang dibuat. Mereka tidak tahu apa yang tidak mereka ketahui, sehingga klaim apapun terdengar plausibel.",
          "-- Optimasi Algoritma Media Sosial: Platform mengoptimalkan distribusi untuk engagement, bukan akurasi. Konten yang membuat orang penasaran mendapat distribusi lebih luas daripada konten edukatif yang akurat namun kurang sensasional."
        ]
      },
      {
        id: "s2-bab-4-3",
        title: "4.3 Empat Kategori Konten Instanisasi yang Paling Berbahaya",
        level: 2,
        content: [
          "Kategori 1: Klaim Kemampuan Tanpa Fondasi",
          "Contoh tipikal konten jenis ini antara lain: \"Jadi hacker profesional tanpa belajar coding\", \"Kuasai cybersecurity dalam 30 hari\", \"Hacker tidak perlu mengerti pemrograman, cukup pakai tools\". Narasi seperti ini adalah logika pembodohan yang secara aktif menghambat pertumbuhan kompetensi.",
          "Kategori 2: Dramatisasi Berlebihan",
          "Konten yang menampilkan hacking sebagai aktivitas yang glamour, instan, dan penuh adrenalin. Demonstrasi yang dilakukan dalam lingkungan dikontrol penuh dipresentasikan seolah-olah merupakan eksploitasi sistem produksi nyata.",
          "Kategori 3: Penyederhanaan yang Menyesatkan",
          "Konten yang menyederhanakan konsep teknis kompleks hingga kehilangan substansi yang penting. Misalnya, menjelaskan SQL Injection sebagai \"hanya mengetikkan karakter tertentu di form\" tanpa menjelaskan mengapa kondisi ini terjadi di level kode, kapan dan dalam konteks apa teknik ini berlaku, bagaimana teknik ini dideteksi dan dicegah, serta apa konsekuensi hukum dari penggunaan di luar konteks yang tepat.",
          "Kategori 4: Monetisasi Ilusi",
          "Konten yang diproduksi semata-mata untuk memaksimalkan penjualan kursus atau produk tanpa kepedulian genuine terhadap perkembangan penonton. Ciri khasnya: janji hasil finansial yang spesifik namun tidak dapat diverifikasi, testimonial yang tidak dapat dikonfirmasi secara independen, penghindaran pertanyaan teknis mendalam, dan tekanan untuk segera membeli dengan diskon yang diklaim \"hari ini saja\"."
        ]
      },
      {
        id: "s2-bab-5",
        title: "BAB V: ANATOMI SCRIPT KIDDIE SEBAGAI PRODUK LANGSUNG INSTANISASI",
        level: 1,
        content: []
      },
      {
        id: "s2-bab-5-1",
        title: "5.1 Definisi yang Tepat",
        level: 2,
        content: [
          "\"Script kiddie\" adalah istilah teknis dalam komunitas keamanan siber yang merujuk kepada individu yang menjalankan skrip, tools, atau exploit yang dibuat oleh orang lain tanpa memahami mekanisme teknis dan logika di baliknya. Istilah ini bukan hinaan personal. Ia adalah deskripsi teknis tentang kondisi kompetensi seseorang pada titik tertentu dalam perjalanan belajarnya.",
          "Yang membedakan script kiddie dari pemula yang sehat adalah kesadaran diri. Pemula yang sehat menyadari keterbatasannya dan berusaha membangun pemahaman. Script kiddie, terutama yang dihasilkan oleh fenomena instanisasi, tidak menyadari atau menolak untuk mengakui keterbatasannya. Ia menganggap kemampuan menjalankan tools sebagai bukti kompetensi."
        ]
      },
      {
        id: "s2-bab-5-2",
        title: "5.2 Bagaimana Script Kiddie Terbentuk: Jalur Kausal",
        level: 2,
        content: [
          "1. Fase 1: Terpapar konten viral yang menyederhanakan dan mendramatisasi keamanan siber di TikTok, YouTube, atau media sosial tentang cara meretas.",
          "2. Fase 2: Mengunduh dan menjalankan tools yang sudah jadi seperti Kali Linux dan Metasploit mengikuti tutorial langkah-per-langkah tanpa memahami apa yang terjadi di baliknya.",
          "3. Fase 3: Berhasil mereproduksi demonstrasi tutorial di lingkungan terkontrol seperti mesin virtual yang sudah dikonfigurasi untuk bisa diretas, menciptakan false confidence.",
          "4. Fase 4: Percaya diri mengklaim diri sebagai hacker di media sosial atau kepada orang-orang sekitar, tanpa memiliki pemahaman teknis yang mendukung klaim tersebut.",
          "5. Fase 5: Mencoba menerapkan teknik yang sama pada target nyata tanpa izin, yang tidak hanya gagal secara teknis, tetapi juga berpotensi melanggar hukum di bawah UU ITE Indonesia.",
          "6. Fase 6: Stagnan -- tanpa fondasi yang benar, sulit berkembang melampaui tools yang ada. Frustrasi atau tetap di level yang sama tanpa pertumbuhan nyata yang terukur."
        ]
      },
      {
        id: "s2-bab-5-3",
        title: "5.3 Empat Konsekuensi Keberadaan Script Kiddie bagi Ekosistem",
        level: 2,
        content: [
          "5.3.1 Peningkatan Noise dalam Platform Bug Bounty -- Program bug bounty yang serius menerima banjir laporan berkualitas rendah dari individu tanpa pemahaman teknis yang memadai. Dampak konkretnya: membuang waktu tim triage yang sangat terbatas, menciptakan backlog yang menunda penanganan laporan valid, mendorong program untuk memperketat akses dan persyaratan, dan merugikan seluruh komunitas peneliti termasuk yang kompeten.",
          "5.3.2 Risiko Hukum yang Nyata -- Indonesia memiliki Undang-Undang Informasi dan Transaksi Elektronik (UU ITE) yang mengkriminalisasi akses tidak sah terhadap sistem komputer. Script kiddie yang mencoba teknik dari konten viral pada sistem nyata tanpa izin dapat menghadapi konsekuensi hukum yang serius.",
          "5.3.3 Pencemaran Reputasi Komunitas -- Ketika seseorang yang mengklaim dirinya sebagai hacker berperilaku tidak etis atau tidak kompeten di forum publik, reputasi seluruh komunitas ikut terpengaruh. Ini menciptakan persepsi negatif yang mempersulit peneliti legitimate, stigma terhadap komunitas Indonesia di mata vendor internasional, dan hambatan tidak langsung bagi peneliti yang sesungguhnya kompeten.",
          "5.3.4 Pemborosan Potensi Talenta Nasional -- Banyak individu yang sebenarnya memiliki potensi nyata untuk menjadi praktisi keamanan siber yang kompeten, namun terjebak dalam jalur instanisasi yang tidak pernah membawa mereka ke tujuan. Waktu dan uang diinvestasikan dalam kursus predatif, frustrasi besar ketika kenyataan tidak sesuai ekspektasi, dan Indonesia kehilangan potensi talenta teknologi yang seharusnya dapat berkontribusi nyata."
        ]
      },
      {
        id: "s2-bab-6",
        title: "BAB VI: BAHAYA EDUKASI DANGKAL -- KETIKA VIRAL MENGALAHKAN BENAR",
        level: 1,
        content: []
      },
      {
        id: "s2-bab-6-1",
        title: "6.1 Karakteristik Konten Edukasi yang Berbahaya",
        level: 2,
        content: [
          "Edukasi dangkal yang berbahaya dalam konteks ini bukan merujuk pada penyederhanaan yang jujur. Ia merujuk pada konten yang memiliki karakteristik spesifik berikut:",
          "-- Mengklaim kedalaman tanpa substansi yang dapat diverifikasi secara mandiri",
          "-- Menghilangkan konteks kritis: cara melakukan X tanpa menjelaskan mengapa X terjadi, kapan X berlaku, apa konsekuensinya, dan bagaimana X dicegah",
          "-- Menjual hasil yang glamour tanpa mendokumentasikan proses panjang yang sesungguhnya diperlukan",
          "-- Tidak ada disclaimer etika dan hukum yang memadai dan proporsional",
          "-- Tidak menyediakan jalur lanjut yang jelas, menciptakan ketergantungan pada konten serupa"
        ]
      },
      {
        id: "s2-bab-6-2",
        title: "6.2 Kasus Konkret: Demonstrasi Hacking di Platform Video",
        level: 2,
        content: [
          "Ekosistem konten hacking di platform video pendek dan menengah menunjukkan pola yang sangat konsisten. Demonstrasi tipikal berlangsung sebagai berikut:",
          "-- Presenter menggunakan Kali Linux yang sudah dikonfigurasi sepenuhnya",
          "-- Target adalah mesin virtual yang sudah disiapkan untuk bisa diretas seperti mesin dari VulnHub atau DVWA",
          "-- Serangkaian perintah dijalankan yang sudah di-script sebelumnya",
          "-- Akses berhasil diperoleh dalam durasi kurang dari 10 menit",
          "Yang tidak pernah ditampilkan dalam konten viral ini:",
          "-- Jam-jam riset untuk memahami target sebelum pengujian dilakukan",
          "-- Kegagalan berulang sebelum pendekatan yang berhasil ditemukan",
          "-- Pemahaman mendalam tentang apa yang dilakukan setiap perintah",
          "-- Fakta bahwa target adalah lingkungan yang dikontrol penuh, bukan sistem produksi nyata"
        ]
      },
      {
        id: "s2-bab-6-3",
        title: "6.3 Dampak Psikologis: False Confidence dan Dunning-Kruger",
        level: 2,
        content: [
          "Salah satu dampak paling insidius dari edukasi dangkal adalah pembentukan false confidence, yaitu kepercayaan diri yang tidak proporsional dengan kompetensi yang sesungguhnya dimiliki. Ini adalah manifestasi klasik dari Efek Dunning-Kruger: individu dengan eksposur minimal terhadap suatu domain cenderung memiliki kepercayaan diri tertinggi, karena mereka belum cukup mengetahui domain tersebut untuk menyadari seberapa banyak yang belum mereka ketahui.",
          "False confidence dalam konteks keamanan siber berbahaya dalam dua arah sekaligus: mendorong perilaku tidak kompeten yaitu mencoba menemukan kerentanan di sistem yang tidak dipahami dengan metodologi yang tidak valid."
        ]
      },
      {
        id: "s2-bab-6-4",
        title: "6.4 Tanggung Jawab Kolektif Semua Pihak",
        level: 2,
        content: [
          "Tanggung Jawab Pembuat Konten -- Konten kreator yang beroperasi di domain teknologi memiliki tanggung jawab moral untuk memastikan konten yang mereka produksi akurat, kontekstual, dan tidak menyesatkan. Popularitas tidak menghapus tanggung jawab ini.",
          "Tanggung Jawab Platform -- Platform media sosial memiliki tanggung jawab untuk tidak mengoptimalkan distribusi konten secara eksklusif berdasarkan engagement tanpa mempertimbangkan akurasi dan dampak sosial.",
          "Tanggung Jawab Komunitas Teknologi -- Praktisi yang kompeten dan berintegritas memiliki tanggung jawab untuk secara aktif memberikan counternarrative terhadap misinformasi. Diam dalam menghadapi klaim yang tidak akurat adalah bentuk pembiaran.",
          "Tanggung Jawab Audiens -- Individu yang mengonsumsi konten teknologi juga memiliki tanggung jawab untuk mengembangkan literasi digital yang memadai. Sebelum mempercayai klaim apapun, tanyakan: di mana rekam jejak yang dapat diverifikasi dari orang yang membuat klaim ini?"
        ]
      },
      {
        id: "s2-bab-7",
        title: "BAB VII: MEMBANGUN KOMPETENSI OTENTIK -- PROSES BUKAN PRODUK",
        level: 1,
        content: []
      },
      {
        id: "s2-bab-7-1",
        title: "7.1 Filosofi Fundamental",
        level: 2,
        content: [
          "Kompetensi sejati dalam keamanan siber bukan sebuah produk yang dapat dibeli, diunduh, atau diinstankan. Ia adalah perjalanan yang berlangsung terus-menerus, yang ditandai oleh kegagalan berulang, penyesuaian metodologi, ekspansi pengetahuan yang tidak pernah berhenti, dan kerendahan hati yang tumbuh seiring pemahaman yang mendalam.",
          "Paradoks yang menarik: semakin dalam seseorang memahami keamanan siber, semakin ia menyadari betapa banyak yang belum ia ketahui. Ini bukan tanda kegagalan. Ini adalah tanda kematangan intelektual yang sesungguhnya."
        ]
      },
      {
        id: "s2-bab-7-2",
        title: "7.2 Peta Jalan Pengembangan Kompetensi Fase demi Fase",
        level: 2,
        content: [
          "[TABLE_HEADER:FASE|DESKRIPSI DAN KARAKTERISTIK]",
          "[TABLE:[Fondasi (6-12 bulan)|Pemrograman dasar dalam Python dan C. Matematika diskrit. Logika boolean. Konsep dasar sistem operasi Linux. Penggunaan terminal. Struktur data fundamental. Jangan pernah melewati fase ini.],[Jaringan (3-6 bulan)|Model OSI secara mendalam. TCP/IP stack. HTTP dan HTTPS. DNS. TLS dan SSL. Penggunaan Wireshark. Konsep routing dan firewall. Protokol aplikasi yang umum digunakan.],[Sistem (3-6 bulan)|Arsitektur prosesor dan memori. Manajemen proses. Sistem file. Privilege dan permission. Interaksi kernel ke user space. Dasar-dasar assembly x86.],[Kerentanan (6-12 bulan)|Kategori kerentanan CWE Top 25. OWASP Top 10. Mekanisme teknis di balik setiap kategori. Platform latihan (HackTheBox, TryHackMe, picoCTF). CTF competitions aktif.],[Spesialisasi (Berkelanjutan)|Pilih domain: web application security, binary exploitation, mobile security, cloud security, reverse engineering, atau malware analysis. Pendalaman intensif dan kontribusi komunitas.],[Profesional (Berkelanjutan)|Bug bounty aktif. Riset independen. Kontribusi open source. Publikasi temuan. Mentoring komunitas. Sertifikasi yang relevan (OSCP, CEH, GPEN).]]"
        ]
      },
      {
        id: "s2-bab-7-3",
        title: "7.3 Enam Prinsip Belajar yang Terbukti Efektif",
        level: 2,
        content: [
          "1. Prinsip 1: Bangun dari Bawah, Bukan dari Atas -- Tahan godaan untuk langsung menggunakan tools tingkat lanjut tanpa fondasi. Setiap jam yang diinvestasikan dalam mempelajari fundamental akan menghemat puluhan jam frustrasi di kemudian hari.",
          "2. Prinsip 2: Pahami, Jangan Hafal -- Keamanan siber berubah terlalu cepat untuk dihadapi dengan hafalan. Yang tidak berubah adalah prinsip-prinsip fundamental: bagaimana memori dikelola, bagaimana protokol bekerja, bagaimana sistem autentikasi dirancang.",
          "3. Prinsip 3: Praktikkan Secara Etis dan Legal -- Semua eksplorasi dan latihan harus dilakukan dalam lingkungan yang Anda miliki atau memiliki izin eksplisit untuk diuji. Platform latihan resmi dan program bug bounty yang terdaftar adalah tempat yang tepat.",
          "4. Prinsip 4: Gagal dengan Produktif -- Kegagalan adalah bagian tidak terpisahkan dari proses belajar. Yang membedakan pemelajar yang berkembang adalah kemampuan mengekstrak pelajaran dari setiap kegagalan.",
          "5. Prinsip 5: Bangun Jaringan dan Komunitas -- Tidak ada peneliti keamanan yang benar-benar belajar sendirian. Komunitas CTF, forum keamanan siber, grup diskusi teknis, dan konferensi adalah sumber pengetahuan dan koneksi yang tidak ternilai.",
          "6. Prinsip 6: Dokumentasikan Perjalanan Anda -- Menulis tentang apa yang dipelajari melalui efek Feynman: jika Anda tidak dapat menjelaskan sesuatu dengan sederhana, Anda belum benar-benar memahaminya."
        ]
      },
      {
        id: "s2-bab-7-4",
        title: "7.4 Platform dan Sumber Belajar yang Direkomendasikan",
        level: 2,
        content: [
          "[TABLE_HEADER:PLATFORM DAN SUMBER BELAJAR|MENGAPA DIREKOMENDASIKAN]",
          "[TABLE:[HackTheBox|Platform tantangan hands-on premium, diakui industri global, jalur karir terstruktur],[TryHackMe|Sangat cocok pemula, kurikulum guided dengan lab langsung, komunitas aktif],[picoCTF oleh Carnegie Mellon University|Sangat cocok pelajar semua level, dibuat institusi pendidikan terpercaya],[PortSwigger Web Security Academy|Materi web security gratis dan komprehensif, dibuat pembuat Burp Suite],[Offensive Security OSCP|Sertifikasi paling diakui industri global, rigorous dan tidak bisa dibeli tanpa kemampuan nyata],[CTF Competitions|Cara terbaik mengukur kemampuan nyata dalam tekanan waktu dan kompetisi terbuka],[Exploit Database oleh Offensive Security|Belajar dari exploit nyata yang sudah didokumentasikan, gratis dan komprehensif],[NVD dan CVE Database NIST|Belajar dari kerentanan nyata yang sudah dipublikasikan secara resmi],[Phrack Magazine|Publikasi teknis mendalam dari komunitas hacker yang otentik sejak 1985],[OWASP Testing Guide|Standar emas metodologi pengujian keamanan aplikasi web, gratis dan diakui industri]]"
        ]
      },
      {
        id: "s2-bab-8",
        title: "BAB VIII: IMPLIKASI NASIONAL DAN TANGGUNG JAWAB BERSAMA",
        level: 1,
        content: []
      },
      {
        id: "s2-bab-8-1",
        title: "8.1 Keamanan Siber sebagai Kepentingan Nasional",
        level: 2,
        content: [
          "Fenomena instanisasi profesi teknologi dan miskonsepsi tentang hacker bukan hanya masalah komunitas yang terbatas. Ia memiliki implikasi yang jauh lebih luas untuk bangsa:",
          "-- Kesiapan Pertahanan Siber Nasional: Jika sumber daya manusia keamanan siber Indonesia diisi oleh individu yang tampak kompeten namun sesungguhnya tidak, kesiapan pertahanan siber nasional menjadi ilusi yang berbahaya.",
          "-- Kepercayaan Investor dan Mitra Asing: Standar profesionalisme komunitas keamanan siber suatu negara memengaruhi persepsi internasional tentang kematangan ekosistem digitalnya.",
          "-- Perlindungan Data Masyarakat: Organisasi yang mengontrak pakar palsu memberikan perlindungan palsu kepada data pengguna dan pelanggan mereka.",
          "-- Pembangunan Generasi Talenta: Ekosistem edukasi yang jujur adalah investasi jangka panjang terhadap kualitas tenaga ahli teknologi Indonesia pada satu hingga dua dekade mendatang."
        ]
      },
      {
        id: "s2-bab-8-2",
        title: "8.2 Peran Institusi Pendidikan",
        level: 2,
        content: [
          "Institusi pendidikan formal memiliki tanggung jawab untuk memastikan kurikulum teknologi yang diajarkan berbasis pada fondasi ilmiah yang kuat, bukan pada tren konten viral. Kolaborasi dengan praktisi industri yang memiliki track record yang dapat diverifikasi adalah prioritas yang mendesak."
        ]
      },
      {
        id: "s2-bab-8-3",
        title: "8.3 Peran Pemerintah dan Regulator",
        level: 2,
        content: [
          "BSSN, Kominfo, dan lembaga terkait memiliki peran dalam:",
          "-- Menyediakan kerangka kualifikasi yang diakui secara nasional untuk praktisi keamanan siber",
          "-- Mendukung program edukasi yang berbasis pada standar industri global yang diakui",
          "-- Memberikan panduan yang jelas tentang batasan legal pengujian keamanan siber",
          "-- Memperkuat penegakan hukum terhadap pemasaran kursus yang menyesatkan secara material"
        ]
      },
      {
        id: "s2-bab-9",
        title: "BAB IX: KESIMPULAN",
        level: 1,
        content: [
          "Makalah ini telah mendedikasikan dirinya untuk mendekonstruksi dua ilusi yang saling memperkuat dalam ekosistem teknologi Indonesia: ilusi bahwa menjadi hacker dapat diinstankan, dan ilusi bahwa pemrograman adalah opsional dalam perjalanan tersebut. Kedua ilusi ini berbahaya tidak hanya bagi individu yang mempercayainya, tetapi bagi seluruh ekosistem yang bergantung pada kompetensi yang nyata.",
          "Delapan temuan utama yang dihasilkan dari analisis ini:",
          "1. Hacker sejati adalah pemecah masalah, pembuat, dan penemu zero-day yang tidak bisa diinstankan. Ia bukan sekadar pengguna tools.",
          "2. Pemrograman adalah fondasi yang tidak dapat dinegosiasikan dalam keamanan siber. Narasi bahwa hacker tidak perlu coding adalah logika pembodohan.",
          "3. Fenomena instanisasi profesi teknologi adalah produk dari pertemuan antara motivasi komersial, optimasi algoritma media sosial, dan kesenjangan literasi digital.",
          "4. Script kiddie bukan label permanen. Ia adalah kondisi yang dapat diatasi dengan komitmen terhadap pembelajaran otentik. Namun ia berbahaya jika dibiarkan tanpa koreksi.",
          "5. Edukasi dangkal yang viral bukan hanya tidak berguna. Ia secara aktif berbahaya karena menciptakan false confidence dan mendorong perilaku yang tidak kompeten bahkan melanggar hukum.",
          "6. Tanggung jawab untuk melawan fenomena ini tidak terletak pada satu pihak saja. Ia didistribusikan di antara pembuat konten, platform, komunitas teknologi, institusi pendidikan, dan individu.",
          "7. Indonesia memiliki talenta teknologi yang nyata dan signifikan. Yang diperlukan bukan lebih banyak klaim keahlian, melainkan ekosistem yang menghargai dan mendukung proses pembelajaran yang jujur dan berbasis bukti.",
          "8. Tidak ada jalan pintas menuju kompetensi keamanan siber yang sesungguhnya. Hanya ada proses, konsistensi, dan dedikasi yang pada akhirnya menghasilkan kemampuan nyata yang dapat memberi kontribusi positif kepada komunitas dan dunia."
        ]
      }
    ],
    references: [
      "number01. (2025). Fenomena Developer Instan dan Miskonsepsi Tentang Hacker/Cybersecurity, Episode III. Medium. https://medium.com/@number01/fenomena-developer-instan-dan-miskonsepsi-tentang-hacker-cybersec-episode-iii-d5e4f5a03f5a",
      "pwn0sec. (2025). Ilusi Otomatisasi versus Realitas Eksploitasi: Mengapa AI Tidak Dapat Menggantikan Peneliti Keamanan (Jurnal Seri I). Jurnal Keamanan Siber dan Etika Teknologi Indonesia, Vol. 1 No. 1.",
      "Levy, S. (1984). Hackers: Heroes of the Computer Revolution. Anchor Press/Doubleday.",
      "Dunning, D. & Kruger, J. (1999). Unskilled and Unaware of It: How Difficulties in Recognizing One's Own Incompetence Lead to Inflated Self-Assessments. Journal of Personality and Social Psychology, 77(6), 1121-1134.",
      "OWASP Foundation. (2021). OWASP Top 10 Web Application Security Risks. https://owasp.org/Top10/",
      "MITRE Corporation. (2024). CWE Top 25 Most Dangerous Software Weaknesses 2024. https://cwe.mitre.org/top25/",
      "Offensive Security. (2024). PWK PEN-200: Penetration Testing with Kali Linux, OSCP Certification Overview. https://www.offensive-security.com/courses/pen-200/",
      "PortSwigger. (2024). Web Security Academy: Free Online Web Security Training. https://portswigger.net/web-security",
      "HackTheBox. (2024). HackTheBox: Hands-on Cybersecurity Learning Platform. https://www.hackthebox.com",
      "NVD / NIST. (2024). National Vulnerability Database. https://nvd.nist.gov/",
      "BSSN. (2024). Laporan Tahunan Keamanan Siber Nasional Indonesia 2023. https://bssn.go.id",
      "Exploit Database. (2024). Exploit-DB: The Official Exploit Database by Offensive Security. https://www.exploit-db.com",
      "Phrack Magazine. (2024). Phrack: An Underground ezine for Hackers. http://www.phrack.org",
      "ISC2. (2023). ISC2 Cybersecurity Workforce Study 2023. https://www.isc2.org/research",
      "Eric S. Raymond. (2001). How to Become a Hacker: The Original Essay. http://www.catb.org/~esr/faqs/hacker-howto.html"
    ]
  }
];
