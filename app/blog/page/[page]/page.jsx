import BlogCard from '@/components/BlogCard';
import BlogPagination from '@/components/BlogPagination';
import { getPaginatedPosts, TOTAL_PAGES } from '@/lib/blog-posts';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  const params = [];
  for (let page = 2; page <= TOTAL_PAGES; page += 1) {
    params.push({ page: String(page) });
  }
  return params;
}

export async function generateMetadata({ params }) {
  const { page } = await params;
  return {
    title: `Blog — Page ${page}`,
    description:
      'More insights on video production, ad films, brand video and filmmaking from the AdEtc Studios blog.',
    alternates: { canonical: `/blog/page/${page}` },
    robots: { index: true, follow: true },
  };
}

export default async function Page({ params }) {
  const { page } = await params;
  const pageNum = Number(page);

  if (!Number.isInteger(pageNum) || pageNum < 2 || pageNum > TOTAL_PAGES) {
    notFound();
  }

  const posts = getPaginatedPosts(pageNum);

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
            <BlogPagination currentPage={pageNum} />
          </div>
        </div>
      </section>
    </>
  );
}
