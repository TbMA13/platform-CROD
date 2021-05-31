    function personal_data() {
        $("#form_projects").css({
            'display': 'none'
        });
        document.getElementById("projects").setAttribute('class', 'top_nav colors_container');

        $("#form_about_me").css({
            'display': 'none'
        });
        document.getElementById("about_me").setAttribute('class', 'top_nav colors_container');

        $("#form_personal").css({
            'display': 'block'
        });
        document.getElementById("personal_data").setAttribute('class', 'moment top_nav colors_container');
    }

    function about_me() {

        $("#form_personal").css({
            'display': 'none'
        });
        document.getElementById("personal_data").setAttribute('class', 'top_nav colors_container');

        $("#form_projects").css({
            'display': 'none'
        });
        document.getElementById("projects").setAttribute('class', 'top_nav colors_container');

        $("#form_about_me").css({
            'display': 'block'
        });
        document.getElementById("about_me").setAttribute('class', 'moment top_nav colors_container');
    }

    function projects() {
        $("#form_personal").css({
            'display': 'none'
        });
        document.getElementById("personal_data").setAttribute('class', 'top_nav colors_container');
        $("#form_about_me").css({
            'display': 'none'
        });
        document.getElementById("about_me").setAttribute('class', 'top_nav colors_container');
        $("#form_projects").css({
            'display': 'block'
        });
        document.getElementById("projects").setAttribute('class', 'top_nav colors_container moment');
    }


    function readerdipl(input) {
        if (input.files && input.files[0]) {
            var readerDipl = new FileReader();
            readerDipl.onload = function (e) {
                $('#diploma').attr('src', e.target.result);
            }
            readerDipl.readAsDataURL(input.files[0]);
        }
    }
    $("#user_diploma").change(function () {
        readerdipl(this);
    });

    function readURL(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();
            reader.onload = function (f) {
                $('#img').attr('src', f.target.result);
            }
            reader.readAsDataURL(input.files[0]);
        }
    }
    $("#user_photo").change(function () {
        readURL(this);
    });



    /* Индекс слайда по умолчанию */
    var slideIndex = 1;
    showSlides(slideIndex);

    /* Функция увеличивает индекс на 1, показывает следующй слайд*/
    function plusSlide() {
        showSlides(slideIndex += 1);
    }

    /* Функция уменьшяет индекс на 1, показывает предыдущий слайд*/
    function minusSlide() {
        showSlides(slideIndex -= 1);
    }

    /* Устанавливает текущий слайд */
    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    /* Основная функция слайдера */
    function showSlides(n) {
        var i;
        var slides = document.getElementsByClassName("item");
        var dots = document.getElementsByClassName("slider-dots_item");
        if (n > slides.length) {
            slideIndex = 1
        }
        if (n < 1) {
            slideIndex = slides.length
        }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex - 1].style.display = "flex";
        dots[slideIndex - 1].className += " active";
    }