$(window).on("load", function () {
    $('.div-loader').delay(500).fadeOut(500);
});

// Navbar scroll effect

$(function () {
    $(window).on('scroll', function (event) {
        var scroll = $(window).scrollTop();
        if (scroll < 20) {
            $('.header-navbar').removeClass("sticky");
            const basePath = window.location.pathname.includes('/services') ? '../' : '';
            $('.header-navbar img').attr("src", basePath + "assets/img/logo-terra.svg");
        } else {
            $(".header-navbar").addClass("sticky");
            const basePath = window.location.pathname.includes('/services') ? '../' : '';
            $('.header-navbar img').attr("src", basePath + "assets/img/logo-terra-2.svg");
        }
    });

    $(".navbar-nav a").on('click', function () {
        $(".navbar-collapse").removeClass("show");
    });

    $(".navbar-toggler").on('click', function () {
        $(this).toggleClass("active");
    });

    $(".navbar-nav a").on('click', function () {
        $(".navbar-toggler").removeClass('active');
    });

    // Initialize Counter-Up


    const counterUp = window.counterUp.default;

    const callback = entries => {
        entries.forEach(entry => {
            const el = entry.target
            if (entry.isIntersecting && !el.classList.contains('is-visible')) {
                counterUp(el, {
                    duration: 2000,
                    delay: 16,
                })
                el.classList.add('is-visible')
            }
        })
    };

    const IO = new IntersectionObserver(callback, { threshold: 1 });

    const els = document.querySelectorAll('.counter');
    els.forEach(el => {
        IO.observe(el)
    });

    // Show or hide the sticky footer button
    $(window).on('scroll', function (event) {
        if ($(this).scrollTop() > 600) {
            $('.back-to-top').fadeIn(200)
        } else {
            $('.back-to-top').fadeOut(200)
        }
    });

    //Animate the scroll to top
    $('.back-to-top').on('click', function (event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: 0,
        }, 1500);
    });

    // Initialize AOS.js for scroll animations

    AOS.init();

    //Contact

    var forms = document.querySelectorAll('.needs-validation')
                Array.prototype.slice.call(forms).forEach(function (form) {
                    form.addEventListener('submit', function (event) {
                        if (!form.checkValidity()) {
                            event.preventDefault()
                            event.stopPropagation()
                        } else {
                            // Si el formulario es válido, enviar mensaje a WhatsApp
                            event.preventDefault();
                            sendWhatsAppMessage(form);
                        }
                        form.classList.add('was-validated')
                    }, false)
                })

    // Función para enviar mensaje de WhatsApp
    function sendWhatsAppMessage(form) {
        // Obtener valores del formulario
        const name = document.getElementById('contactName').value;
        const phone = document.getElementById('contactPhone').value;
        const message = document.getElementById('contactMessage').value;

        // Número de WhatsApp de Terra (sin caracteres especiales)
        const whatsappNumber = '525523133079';

        // Construir el mensaje
        const whatsappMessage = encodeURIComponent(
            `Hola! Soy ${name}\n` +
            `Mi celular: ${phone}\n` +
            `Consulta: ${message}`
        );

        // URL de WhatsApp Web
        const whatsappURL = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

        // Abrir WhatsApp en una nueva ventana
        window.open(whatsappURL, '_blank');
    }

});



