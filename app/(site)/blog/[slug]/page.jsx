import { notFound } from 'next/navigation';
import { getPostBySlug, getSlugPosts, getSettings } from '@/lib/blog-posts';
import { buildPostSchema, absUrl } from '@/lib/seo';
import JsonLd from '@/components/JsonLd';

// Renders published posts that have content_html and no bespoke href.
export const dynamicParams = true;

export async function generateStaticParams() {
  const posts = await getSlugPosts();
  return posts.map((p) => ({ slug: p.slug }));
}

function robotsObj(robots) {
  const v = (robots || 'index,follow').toLowerCase();
  return { index: !v.includes('noindex'), follow: !v.includes('nofollow') };
}

function wordCount(html) {
  const text = String(html || '').replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
  return text ? text.split(' ').length : 0;
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return {};

  const title = post.metaTitle || post.title;
  const description = post.metaDescription || post.excerpt;
  const ogImg = absUrl(post.ogImage || post.image);

  return {
    title,
    description,
    alternates: { canonical: post.canonical || `/blog/${post.slug}` },
    robots: robotsObj(post.robots),
    openGraph: {
      type: 'article',
      title: post.ogTitle || title,
      description: post.ogDescription || description,
      url: `/blog/${post.slug}`,
      images: ogImg ? [{ url: ogImg, alt: post.ogImageAlt || post.imageAlt || post.title }] : undefined,
      publishedTime: post.publishedAt || undefined,
      modifiedTime: post.updatedAt || undefined,
      tags: post.tags,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.ogTitle || title,
      description: post.ogDescription || description,
      images: ogImg ? [ogImg] : undefined,
    },
  };
}

export default async function Page({ params }) {
  const { slug } = await params;
  const [post, settings] = await Promise.all([getPostBySlug(slug), getSettings()]);
  if (!post) notFound();

  return (
    <>
      <JsonLd data={buildPostSchema({ post, author: settings, wordCount: wordCount(post.contentHtml) })} />

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
              {settings?.author_name && (
                <div className="d-flex flex-row gspace-1 align-items-center">
                  <i className="fa-solid fa-user accent-color"></i>
                  <span className="meta-data">{settings.author_name}</span>
                </div>
              )}
            </div>

            <div className="image-container blog-image mb-4">
              <img src={post.image} alt={post.imageAlt || post.title} className="img-fluid" decoding="async" />
            </div>

            {post.tldr && (
              <div className="post-tldr mb-4">
                <strong>TL;DR</strong>
                <p className="mb-0">{post.tldr}</p>
              </div>
            )}

            <div className="post-body" dangerouslySetInnerHTML={{ __html: post.contentHtml || '' }} />

            {post.faq?.length > 0 && (
              <section className="post-faq mt-5">
                <h2>Frequently asked questions</h2>
                {post.faq.map((item, i) => (
                  <details key={i} className="post-faq-item">
                    <summary>{item.q}</summary>
                    <p>{item.a}</p>
                  </details>
                ))}
              </section>
            )}

            {post.tags?.length > 0 && (
              <div className="post-tags mt-4 d-flex flex-row flex-wrap gap-2">
                {post.tags.map((t) => (
                  <span key={t} className="post-tag">#{t}</span>
                ))}
              </div>
            )}
          </article>
        </div>
      </section>
    </>
  );
}
