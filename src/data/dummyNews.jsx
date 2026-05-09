export const allNewsData = [
  {
    id: "1",
    date: "12 APRIL 2026", // Diupdate agar sesuai dengan gambar referensi
    category: "ENVIRONMENT",
    title: "Heningnya Udara Hutan Kalimantan Timur Menarik Minat Investor BUMS",
    description: "Hutan Kalimantan Timur kembali menarik perhatian, bukan hanya karena keanekaragaman hayatinya, tetapi juga kualitas udaranya yang masih alami. Suasana hening dan udara bersih di kawasan ini mulai dilirik oleh investor Badan Usaha Milik Swasta (BUMS) sebagai peluang baru di sektor ekowisata.",
    summary: "Hutan Kalimantan Timur kembali menarik perhatian, bukan hanya karena keanekaragaman hayatinya, tetapi sebagai aset ekonomi hijau global...",
    excerpt: "Mengulas peran penting hutan lintang tinggi dalam siklus karbon global seiring meningkatnya suhu bumi.",
    author: "Faiz Alif",
    role: "Jurnalis Junior", // Sesuai desain metadata
    handle: "@FAIZALIF",
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e",
    heroImage: "https://picsum.photos/seed/forest/1200/600",
    authorImage: "/img/author.png",
    readTime: "2 MIN READ SUMMARY", // Sesuai label di gambar
    reactions: { 
      clap: 142, 
      light: 86, 
      think: 54, 
      monocle: 93, 
      chart: 12, 
      heart: 210 
    } // Data reaksi lengkap sesuai referensi
  },
  {
    id: "2",
    date: "10 MEI 2026",
    category: "POLITICS",
    title: "Presiden Prabowo Sibuk Rayakan Ulang Tahun Buna Teddy",
    description: "Evaluasi menyeluruh terhadap sistem administrasi negara dalam menghadapi dinamika politik global.",
    summary: "Kemeriahan perayaan ulang tahun ke-29 Buna Teddy menjadi sorotan publik di tengah agenda kenegaraan yang padat...",
    excerpt: "Bagaimana momen personal pemimpin negara menjadi wajah baru komunikasi politik di era digital.",
    author: "Tirta",
    role: "Editor Politik",
    handle: "@TIRTIR",
    image: "https://picsum.photos/seed/teddy/1200/600",
    heroImage: "https://picsum.photos/seed/teddy/1200/600",
    authorImage: "https://picsum.photos/seed/user2/40/40",
    readTime: "3 MIN READ",
    reactions: { clap: 50, light: 20, think: 15, heart: 100 }
  },
  {
    id: "3",
    date: "08 OKT 2025",
    category: "ECONOMICS",
    title: "Transformasi Ekonomi Hijau: Bagaimana Indonesia Memimpin Arus Asia Tenggara",
    description: "Langkah berani dalam dekarbonisasi industri menempatkan nusantara di garis depan revolusi industri berkelanjutan.",
    excerpt: "Model bisnis baru yang berfokus pada daur ulang sampah plastik menjadi produk bernilai tinggi.",
    author: "Linda Kusuma",
    role: "Kontributor Ekonomi",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab",
    readTime: "3 MIN READ"
  },
  {
    id: "4",
    category: "TECHNOLOGY",
    title: "Neural Architecture: The Next Phase of AI",
    date: "09 OKT 2025",
    description: "Bagaimana AI mulai mengambil peran dalam pengambilan keputusan moral manusia.",
    excerpt: "Melihat sejauh mana algoritma bisa dipercaya untuk menentukan pilihan etis kita.",
    author: "Sari Wijaya",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f",
    readTime: "2 MIN READ"
  },
  {
    id: "5",
    category: "CULTURE",
    title: "Rahasia Tradisi Malam Jum'at Kliwon di Kota Batang",
    date: "10 OKT 2025",
    description: "Di tengah hiruk-pikuk kota metropolitan, hidup sering terasa seperti perlombaan tanpa garis akhir.",
    excerpt: "Menemukan ketenangan dalam rutinitas urban yang melelahkan melalui filosofi slow living.",
    author: "Rian",
    image: "https://picsum.photos/seed/nature/400/300",
    readTime: "3 MIN READ"
  }
];

// Data Komentar untuk CommentSection baru
export const dummyComments = [
  { 
    id: 1, 
    author: "Fahri Sani", 
    time: "2 hours ago", 
    text: "Harusnya Lebih Dilestarikan dong bukan dijual gini gimana sih pemerintah",
    avatar: "/img/avatar-1.png" 
  },
  { 
    id: 2, 
    author: "Vennanda", 
    time: "2 hours ago", 
    text: "Gak setuju am komen atas gw, kita butuh 1000rb lapangan pekerjaan",
    avatar: "/img/avatar-2.png" 
  }
];

// Data Sidebar yang sinkron dengan allNewsData
export const popularData = [
  { id: "2", category: "POLITICS", title: "Presiden Prabowo Sibuk Rayakan Ulang Tahun Buna Teddy", readTime: "3 MIN READ" },
  { id: "4", category: "TECHNOLOGY", title: "Neural Architecture: The Next Phase of AI", readTime: "2 MIN READ" },
  { id: "5", category: "CULTURE", title: "Rahasia Tradisi Malam Jum'at Kliwon di Kota Batang", readTime: "3 MIN READ" }
];

// Data More From Section (Dengan gambar bulat)
export const moreData = [
  { 
    id: "8", 
    title: "Regenerasi Agrikultur: Apakah Bisa?", 
    date: "12 JANUARI 2026", 
    img: "https://picsum.photos/seed/agri1/60/60" 
  },
  { 
    id: "9", 
    title: "Tanam Ubi Di Pasir Untung Jutaan Rupiah", 
    date: "30 JANUARI 2026", 
    img: "https://picsum.photos/seed/ubi2/60/60" 
  }
];