import Link from 'next/link';

export default function BlogPagination({ currentPage, totalPages }) {
  const TOTAL_PAGES = totalPages;
  const pages = Array.from({ length: TOTAL_PAGES }, (_, i) => i + 1);

  return (
    <nav className="blog-pagination" aria-label="Blog pagination">
      <Link
        href={currentPage > 1 ? (currentPage - 1 === 1 ? '/blog' : `/blog/page/${currentPage - 1}`) : '#'}
        className={`page-btn ${currentPage === 1 ? 'disabled' : ''}`}
        aria-disabled={currentPage === 1}
      >
        Prev
      </Link>
      {pages.map((page) => (
        <Link
          key={page}
          href={page === 1 ? '/blog' : `/blog/page/${page}`}
          className={`page-btn ${page === currentPage ? 'active' : ''}`}
          aria-current={page === currentPage ? 'page' : undefined}
        >
          {page}
        </Link>
      ))}
      <Link
        href={currentPage < TOTAL_PAGES ? `/blog/page/${currentPage + 1}` : '#'}
        className={`page-btn ${currentPage === TOTAL_PAGES ? 'disabled' : ''}`}
        aria-disabled={currentPage === TOTAL_PAGES}
      >
        Next
      </Link>
    </nav>
  );
}
