import { postUrl } from '@/lib/blog-posts';

export default function BlogCard({ post }) {
  return (
    <div className="col">
      <div className="card card-blog">
        <div className="image-container blog-image">
          <img src={post.image} alt={post.title} className="img-fluid" loading="lazy" decoding="async" />
        </div>
        <div className="card-blog-content">
          <div className="d-flex flex-row flex-wrap align-items-center justify-content-between gap-2">
            <div className="d-flex flex-row gspace-1 align-items-center">
              <i className="fa-solid fa-calendar accent-color"></i>
              <span className="meta-data">{post.date}</span>
            </div>
            <div className="d-flex flex-row gspace-1 align-items-center">
              <i className="fa-solid fa-folder accent-color"></i>
              <span className="meta-data">{post.category}</span>
            </div>
          </div>
          <a href={postUrl(post)} className="blog-title">{post.title}</a>
          <p className="mb-0">{post.excerpt}</p>
        </div>
      </div>
    </div>
  );
}
