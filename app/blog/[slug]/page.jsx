import { notFound } from 'next/navigation';
import { getPostBySlug, getSlugPosts } from '@/lib/blog-posts';
import { pageMetadata, articleLd, breadcrumbLd } from '@/lib/seo';
import JsonLd from '@/components/JsonLd';

// Renders published posts that have content_html and no bespoke href.
export const dynamicParams = true;

export async function generateStaticParams() {
  const posts = await getSlugPosts();
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return pageMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
    image: post.image,
  });
}

export default async function Page({ params }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) notFound();

  return (
    <>
      <JsonLd
        data={[
          articleLd({
            headline: post.title,
            description: post.excerpt,
            image: post.image,
            datePublished: post.date,
            path: `/blog/${post.slug}`,
          }),
          breadcrumbLd([
            { name: 'Home', path: '/' },
            { name: 'Blog', path: '/blog' },
            { name: post.title, path: `/blog/${post.slug}` },
          ]),
        ]}
      />

      {/* Banner Inner Section */}
      <section className="section banner-inner single-post-banner">
        <div className="banner-overlay"></div>
        <div className="hero-container">
          <div className="banner-inner-container">
            <h2>{post.title}</h2>
            <nav className="breadcrumb">
              <a href="/" className="breadcrumb-item">Home</a>
              <span className="separator">/</span>
              <a href="/blog" className="breadcrumb-item">Blog</a>
              <span className="separator">/</span>
              <span className="breadcrumb-item current">{post.category}</span>
            </nav>
          </div>
        </div>
      </section>

      {/* Article Section */}
      <section className="section">
        <div className="hero-container">
          <article className="single-post-content">
            <div className="d-flex flex-row flex-wrap align-items-center gap-3 mb-3">
              <div className="d-flex flex-row gspace-1 align-items-center">
                <i className="fa-solid fa-calendar accent-color"></i>
                <span className="meta-data">{post.date}</span>
              </div>
              <div className="d-flex flex-row gspace-1 align-items-center">
                <i className="fa-solid fa-folder accent-color"></i>
                <span className="meta-data">{post.category}</span>
              </div>
            </div>
            <div className="image-container blog-image mb-4">
              <img src={post.image} alt={post.title} className="img-fluid" decoding="async" />
            </div>
            <div
              className="post-body"
              dangerouslySetInnerHTML={{ __html: post.contentHtml || '' }}
            />
          </article>
        </div>
      </section>
    </>
  );
}
