import CommentSection from "@/app/components/CommentSection";
import PopularSidebar from "@/app/components/PopularSidebar";
import SidebarMore from "@/app/components/SidebarMore";
import AuthSidebar from "@/app/components/AuthSidebar";
import AuthFooter from "@/app/components/AuthFooter";
import "@/app/styles/globals.css";

// 1. IMPORT DATA DARI FILE PUSAT
import { allNewsData } from "@/data/dummyNews";

export default function ArticleDetail({ params }) {
  const { id } = params;

  // 2. CARI DATA BERDASARKAN ID (Gunakan .find karena di dummyNews itu Array)
  const article = allNewsData.find((item) => item.id == id);

  // Jika ID tidak ditemukan, tampilkan pesan error atau 404
  if (!article) {
    return (
      <div className="error-container" style={{ padding: '100px', textAlign: 'center' }}>
        <h1>404</h1>
        <p>Berita tidak ditemukan!</p>
      </div>
    );
  }

  return (
    <div className="article-detail-page">
      <div className="container">
        {/* --- MAIN CONTENT AREA (Kiri) --- */}
        <div className="main-content">
          <article className="full-article">
            {/* Header: Kategori, Gambar, Judul */}
            <div className="article-header">
              <span className="category-label">{article.category}</span>
              <img src={article.heroImage || article.image} alt="Main Article" className="hero-image" />
              <h1 className="article-title">{article.title}</h1>
            </div>

            {/* Meta Author */}
            <div className="author-meta">
              <img src={article.authorImage || "https://via.placeholder.com/40"} alt={article.author} className="author-avatar" />
              <div className="author-info">
                <strong>{article.author}</strong>
                <p>{article.date} • {article.readTime || "2 MIN READ SUMMARY"}</p>
              </div>
            </div>

            {/* Ringkasan Isi Artikel */}
            <div className="article-body">
              {/* Pakai summary atau description sebagai cadangan */}
              <p>{article.summary || article.description}</p>
              <button className="view-full-article-btn">VIEW FULL ARTICLE</button>
            </div>

            {/* Reactions Bar (Hanya muncul jika ada data reactions) */}
            {article.reactions && (
              <div className="reactions-bar">
                {Object.entries(article.reactions).map(([type, count]) => {
                  const emojis = { clap: '👏', light: '💡', idea: '🤔', love: '❤️', star: '⭐', hot: '🔥' };
                  return (
                    <span key={type} className="reaction-item">
                      {emojis[type]} {count}
                    </span>
                  );
                })}
              </div>
            )}

            {/* SHARE THIS STORY */}
            <div className="share-story">
              <span>SHARE THIS STORY:</span>
              <button className="share-btn">🔗</button>
              <button className="share-btn">📝</button>
            </div>
          </article>

          {/* Section Komentar & Ajakan Login/Daftar */}
          <CommentSection />
          <AuthFooter />
        </div>

        {/* --- SIDEBAR AREA (Kanan) --- */}
        <aside className="sidebar">
          <PopularSidebar />
          <AuthSidebar />
          {/* Kirim kategori ke SidebarMore untuk artikel terkait */}
          <SidebarMore category={article.category} />
        </aside>
      </div>
    </div>
  );
}