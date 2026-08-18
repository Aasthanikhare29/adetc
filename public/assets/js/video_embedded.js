$(function() {
  const $openModalButtons = $('.request-loader');
  const $overlay = $('#modal-overlay');
  const $closeModal = $('.my-close');
  const $videoFrame = $('#my-video-frame');
  const $youtubeFrame = $('#my-youtube-frame');

  function extractYouTubeId(url) {
    if (!url) return null;
    const m = url.match(/(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/)|youtu\.be\/)([A-Za-z0-9_-]{11})/);
    return m ? m[1] : null;
  }

  function lockScroll() {
    $('body').css('overflow', 'hidden');
  }

  function unlockScroll() {
    $('body').css('overflow', '');
  }

  function closeModal() {
    $overlay.hide();
    $videoFrame[0].pause();
    $videoFrame.attr('src', '');
    $youtubeFrame.attr('src', '');
    $videoFrame.show();
    $youtubeFrame.hide();
    unlockScroll();
  }

  $openModalButtons.on('click', function(e) {
      e.preventDefault();
      const videoUrl = $(this).attr('data-video');
      const youtubeId = extractYouTubeId(videoUrl);
      if (youtubeId) {
          $videoFrame.hide();
          $youtubeFrame.show();
          $youtubeFrame.attr('src', 'https://www.youtube.com/embed/' + youtubeId + '?autoplay=1&rel=0');
      } else {
          $youtubeFrame.hide();
          $videoFrame.show();
          $videoFrame.attr('src', videoUrl);
          const video = $videoFrame[0];
          video.load();
          video.play().catch(function() {});
      }
      $overlay.css('display', 'flex');
      lockScroll();
  });

  $closeModal.on('click', closeModal);

  $overlay.on('click', function(e) {
      if (e.target === this) {
          closeModal();
      }
  });

  $(document).on('keydown', function(e) {
      if (e.key === 'Escape') {
          closeModal();
      }
  });
});