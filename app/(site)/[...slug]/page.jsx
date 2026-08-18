import { notFound } from 'next/navigation';
import { getPageBySlug, getPublishedPageSlugs } from '@/lib/pages';
import { buildPageSchema, absUrl } from '@/lib/seo';
import { collectFaq } from '@/lib/blocks';
import BlockRenderer from '@/components/blocks/BlockRenderer';
import JsonLd from '@/components/JsonLd';

// Serves DB-driven builder pages for any path NOT owned by an explicit route
// (explicit routes like /about, /blog always take precedence).
export const dynamicParams = true;

export async function generateStaticParams() {
  const slugs = await getPublishedPageSlugs();
  return slugs.map((s) => ({ slug: s.split('/') }));
}

function robotsObj(robots) {
  const v = (robots || 'index,follow').toLowerCase();
  return { index: !v.includes('noindex'), follow: !v.includes('nofollow') };
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const page = await getPageBySlug(slug.join('/'));
  if (!page) return {};
  const title = page.metaTitle || page.title;
  const description = page.metaDescription;
  const ogImg = absUrl(page.ogImage);
  return {
    title,
    description,
    alternates: { canonical: page.canonical || `/${page.slug}` },
    robots: robotsObj(page.robots),
    openGraph: {
      type: 'website',
      title: page.ogTitle || title,
      description: page.ogDescription || description,
      url: `/${page.slug}`,
      images: ogImg ? [{ url: ogImg, alt: page.ogImageAlt || page.title }] : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title: page.ogTitle || title,
      description: page.ogDescription || description,
      images: ogImg ? [ogImg] : undefined,
    },
  };
}

export default async function BuilderPage({ params }) {
  const { slug } = await params;
  const page = await getPageBySlug(slug.join('/'));
  if (!page) notFound();

  const faq = collectFaq(page.blocks);

  return (
    <>
      <JsonLd data={buildPageSchema({ page, faq })} />
      <BlockRenderer blocks={page.blocks} />
    </>
  );
}
