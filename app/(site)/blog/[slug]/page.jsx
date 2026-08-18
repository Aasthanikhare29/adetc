import { notFound } from 'next/navigation';
import { getPostBySlug, getSlugPosts, getSettings, getPublishedPosts, postUrl } from '@/lib/blog-posts';
import { buildPostSchema, absUrl } from '@/lib/seo';
import JsonLd from '@/components/JsonLd';
import FaqAccordion from '@/components/FaqAccordion';

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

  const allPosts = await getPublishedPosts();
  const categories = Array.from(new Set(allPosts.map((p) => p.category).filter(Boolean)));
  const tagCounts = {};
  allPosts.forEach((p) => (p.tags || []).forEach((t) => { tagCounts[t] = (tagCounts[t] || 0) + 1; }));
  const popularTags = Object.entries(tagCounts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 12)
    .map((e) => e[0]);

  // Related posts: same category / shared tags rank higher, current post excluded.
  const related = allPosts
    .filter((p) => p.slug !== slug)
    .map((p) => {
      const sharedTags = (p.tags || []).filter((t) => (post.tags || []).includes(t)).length;
      const score = (p.category === post.category ? 2 : 0) + sharedTags;
      return { p, score };
    })
    .sort((a, b) => b.score - a.score)
    .slice(0, 4)
    .map((x) => x.p);

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
          <div className="row">
            <div className="col-lg-8 order-1 order-lg-2">
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
                <FaqAccordion items={post.faq} />
              </section>
            )}

            {post.tags?.length > 0 && (
              <div className="post-tags mt-4 d-flex flex-row flex-wrap gap-2">
                {post.tags.map((t) => (
                  <span key={t} className="post-tag">#{t}</span>
                ))}
              </div>
            )}

            {settings?.author_name && (
              <div className="post-author-box mt-5">
                <div className="post-author-avatar">{settings.author_name.trim().charAt(0)}</div>
                <div className="post-author-info">
                  <span className="post-author-label">Written by</span>
                  <h4>{settings.author_name}</h4>
                  {settings.author_bio && <p>{settings.author_bio}</p>}
                </div>
              </div>
            )}
          </article>
            </div>
            <aside className="col-lg-4 order-2 order-lg-1 blog-detail-sidebar">
              {/* Related Posts */}
              {related.length > 0 && (
                <div className="blog-recent-widget">
                  <h4>Related Posts</h4>
                  <ul className="blog-recent-list">
                    {related.map((p) => (
                      <li key={p.slug} className="blog-recent-item">
                        <a href={postUrl(p)} className="blog-recent-thumb">
                          <img src={p.image} alt={p.imageAlt || p.title} />
                        </a>
                        <div className="blog-recent-meta">
                          <a href={postUrl(p)}>{p.title}</a>
                          <span className="blog-recent-date">{p.date}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Categories */}
              {categories.length > 0 && (
                <div className="blog-recent-widget">
                  <h4>Categories</h4>
                  <ul className="blog-cat-list">
                    {categories.map((c) => (
                      <li key={c}>
                        <a href={`/blog?category=${encodeURIComponent(c)}`}>{c}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Popular Tags */}
              {popularTags.length > 0 && (
                <div className="blog-recent-widget">
                  <h4>Popular Tags</h4>
                  <div className="blog-tag-cloud">
                    {popularTags.map((t) => (
                      <a key={t} href={`/blog?tag=${encodeURIComponent(t)}`} className="blog-tag">
                        {t}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
