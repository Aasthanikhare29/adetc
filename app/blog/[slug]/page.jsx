import { notFound } from 'next/navigation';
import { getPostBySlug, slugPosts } from '@/lib/blog-posts';
import { pageMetadata, articleLd, breadcrumbLd } from '@/lib/seo';
import JsonLd from '@/components/JsonLd';

// Only posts that have a `body` and no bespoke `href` are rendered here.
// Today that set is empty — this route is the mechanism for future posts:
// add a post to lib/blog-posts.js with a `body` (blocks below) and no `draft`.
export function generateStaticParams() {
  return slugPosts.map((p) => ({ slug: p.slug }));
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

// Body block types: { type: 'heading' | 'paragraph' | 'list' | 'quote', ... }
function Block({ block }) {
  switch (block.type) {
    case 'heading':
      return <h3>{block.text}</h3>;
    case 'list':
      return (
        <ul>
          {block.items.map((item, i) => (
            <li key={i}><p>{item}</p></li>
          ))}
        </ul>
      );
    case 'quote':
      return (
        <blockquote className="post-quote">
          <p>{block.text}</p>
          {block.author && <p className="post-quote-author">{block.author}</p>}
        </blockquote>
      );
    case 'paragraph':
    default:
      return <p>{block.text}</p>;
  }
}

export default async function Page({ params }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
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
            {(post.body || []).map((block, i) => (
              <Block key={i} block={block} />
            ))}
          </article>
        </div>
      </section>
    </>
  );
}
