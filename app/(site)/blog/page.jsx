import BlogCard from '@/components/BlogCard';
import BlogPagination from '@/components/BlogPagination';
import { getPaginatedPosts, getTotalPages } from '@/lib/blog-posts';

export const metadata = {
  title: 'Blog/Journal - Ad Etc Studios',
};

export default async function Page() {
  const [posts, totalPages] = await Promise.all([getPaginatedPosts(1), getTotalPages()]);

  return (
    <>
      {/* Banner Inner Section */}
      <section className="section banner-inner blog-banner">
        <div className="banner-overlay"></div>
        <div className="hero-container">
          <div className="banner-inner-container">
            <h2>Blog</h2>
            <nav className="breadcrumb">
              <a href="/" className="breadcrumb-item">Home</a>
              <span className="separator">/</span>
              <span className="breadcrumb-item current">Our Blog</span>
            </nav>
          </div>
        </div>
      </section>
      {/* Blog Section */}
      <section className="section">
        <div className="hero-container">
          <div className="blog-content-container">
            <div className="row row-cols-lg-3 row-cols-md-2 row-cols-1 grid-spacer-3">
              {posts.map((post, index) => (
                <BlogCard key={index} post={post} />
              ))}
            </div>
            <BlogPagination currentPage={1} totalPages={totalPages} />
          </div>
        </div>
      </section>
    </>
  );
}
