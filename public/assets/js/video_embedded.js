$(function() {
  const $openModalButtons = $('.request-loader');
  const $overlay = $('#modal-overlay');
  const $closeModal = $('.my-close');
  const $videoFrame = $('#my-video-frame');

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
    unlockScroll();
  }

  $openModalButtons.on('click', function(e) {
      e.preventDefault();
      const videoUrl = $(this).attr('data-video');
      $videoFrame.attr('src', videoUrl);
      $overlay.css('display', 'flex');
      const video = $videoFrame[0];
      video.load();
      video.play().catch(function() {});
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