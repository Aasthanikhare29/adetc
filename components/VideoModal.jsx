export default function VideoModal() {
  return (
    <div id="modal-overlay" className="modal-overlay">
      <span className="my-close">
        <i className="fa-solid fa-xmark"></i>
      </span>
      <div className="my-modal">
        <video id="my-video-frame" controls playsInline preload="none" title="Video Player"></video>
      </div>
    </div>
  );
}
