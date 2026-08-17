function initSubmitNewsletter() {
    $('#newsletter-form').on('submit', function(event) {
        event.preventDefault();

        var $email = $('#newsletter');
        var $successMessage = $('#newsletter-success');
        var $errorMessage = $('#newsletter-error');

        var isValid = true;

        function validateEmail(email) {
            var pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            return pattern.test(email);
        }

        if (isValid) {
            $successMessage.removeClass('hidden');
            $('#newsletter-form')[0].reset();
            setTimeout(function() {
                $successMessage.addClass('hidden');
            }, 3000);
        } else {
            $errorMessage.removeClass('hidden');
            $('#newsletter-form')[0].reset();
            setTimeout(function() {
                $errorMessage.addClass('hidden');
            }, 3000);
        }
    });
}

function initSubmitContact() {
    const $form = $('#contact-form');
    const $overlay = $('#contact-dialog-overlay');
    const $dialogTitle = $('#contact-dialog-title');
    const $dialogMessage = $('#contact-dialog-message');
    const $dialogIconSuccess = $('#contact-dialog-icon-success');
    const $dialogIconError = $('#contact-dialog-icon-error');

    if (!$form.length) return;

    function showDialog(title, message, isSuccess) {
        $dialogTitle.text(title);
        $dialogMessage.text(message);
        if (isSuccess) {
            $dialogIconSuccess.removeClass('hidden');
            $dialogIconError.addClass('hidden');
        } else {
            $dialogIconError.removeClass('hidden');
            $dialogIconSuccess.addClass('hidden');
        }
        $overlay.addClass('show');
    }

    function hideDialog() {
        $overlay.removeClass('show');
    }

    $('#contact-dialog-ok').on('click', hideDialog);
    $('#contact-dialog-close').on('click', hideDialog);
    $overlay.on('click', function (event) {
        if (event.target === this) hideDialog();
    });

    $form.on('submit', function (event) {
        event.preventDefault();

        const name = $('#name').val().trim();
        const email = $('#email').val().trim();
        const phone = $('#phone').val().trim();
        const subject = $('#subject').val().trim();
        const projectType = $('#project-type').val().trim();
        const message = $('#Message').val().trim();

        let isValid = true;

        function validateEmail(email) {
            const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            return pattern.test(email);
        }

        if (name === "" || email === "" || subject === "" || message === "") {
            isValid = false;
        }
        if (!validateEmail(email)) {
            isValid = false;
        }
        if (projectType === "") {
            isValid = false;
        }

        if (!isValid) {
            alert("Please fill in all required fields with a valid email and project type.");
            return;
        }

        $.ajax({
            url: '/api/contact',
            method: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({
                name: name,
                email: email,
                phone: phone,
                subject: subject,
                projectType: projectType,
                message: message
            })
        })
            .done(function (response) {
                const msg = response && response.message ? response.message : "Thank you! Your message has been sent successfully.";
                alert(msg);
                $form[0].reset();
                $('.selected-text').text("Project Type");
            })
            .fail(function (xhr) {
                const msg = xhr && xhr.responseJSON && xhr.responseJSON.error ? xhr.responseJSON.error : "Oops! Form submission failed. Please try again.";
                showDialog("Submission Failed", msg, false);
            });
    });
}
