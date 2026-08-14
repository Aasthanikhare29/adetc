export default function BlogCard({ post }) {
  return (
    <div className="col">
      <div className="card card-blog">
        <div className="image-container blog-image">
          <img src={post.image} alt="Blog Image" className="img-fluid" />
        </div>
        <div className="card-blog-content">
          <div className="d-flex flex-row align-items-center justify-content-between">
            <div className="d-flex flex-row gspace-1 align-items-center">
              <i className="fa-solid fa-calendar accent-color"></i>
              <span className="meta-data">{post.date}</span>
            </div>
            <div className="d-flex flex-row gspace-1 align-items-center">
              <i className="fa-solid fa-folder accent-color"></i>
              <span className="meta-data">{post.category}</span>
            </div>
          </div>
          <a href={post.href} className="blog-title">{post.title}</a>
          <p className="mb-0">{post.excerpt}</p>
        </div>
      </div>
    </div>
  );
}
