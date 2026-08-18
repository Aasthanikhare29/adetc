import BlogCard from '@/components/BlogCard';
import BlogPagination from '@/components/BlogPagination';
import { getFilteredPosts, getFilteredTotalPages, blogQuery } from '@/lib/blog-posts';
import { notFound } from 'next/navigation';

export const dynamicParams = true;

export async function generateStaticParams() {
  const total = await getFilteredTotalPages();
  const params = [];
  for (let page = 2; page <= total; page += 1) {
    params.push({ page: String(page) });
  }
  return params;
}

export async function generateMetadata({ params }) {
  const { page } = await params;
  return {
    title: `Blog/Journal - Page ${page} | Ad Etc Studios`,
  };
}

export default async function Page({ params, searchParams }) {
  const { page } = await params;
  const sp = await searchParams;
  const filters = {
    category: typeof sp.category === 'string' ? sp.category : undefined,
    tag: typeof sp.tag === 'string' ? sp.tag : undefined,
    q: typeof sp.q === 'string' ? sp.q : undefined,
  };
  const pageNum = Number(page);
  const totalPages = await getFilteredTotalPages(filters);

  if (!Number.isInteger(pageNum) || pageNum < 2 || pageNum > totalPages) {
    notFound();
  }

  const posts = await getFilteredPosts(filters, pageNum);
  const query = blogQuery(filters);

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
            <BlogPagination currentPage={pageNum} totalPages={totalPages} query={query} />
          </div>
        </div>
      </section>
    </>
  );
}
