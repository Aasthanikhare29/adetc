import BlogCard from '@/components/BlogCard';
import BlogPagination from '@/components/BlogPagination';
import { getPaginatedPosts } from '@/lib/blog-posts';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  title: 'Blog',
  description:
    'The AdEtc Studios blog — insights on ad film making, brand video, TVC formats, filmmaking tips and behind-the-scenes production notes from our Ahmedabad studio.',
  path: '/blog',
});

export default function Page() {
  const posts = getPaginatedPosts(1);

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
            <BlogPagination currentPage={1} />
          </div>
        </div>
      </section>
    </>
  );
}
