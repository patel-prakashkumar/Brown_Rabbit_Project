function myFunction() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("searchresults");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}

function myMobileSearchFn() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementsByClassName("mobile-input");
    console.log('input', input);
    filter = input[0].value.toUpperCase();
    ul = document.getElementsByClassName("mobile-search-result");
    li = ul[0].getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}

const myCarousel = document.getElementById('carouselExampleControls')


myCarousel.addEventListener('slide.bs.carousel', event => {

    document.querySelector('.caption-text.active').classList.remove('active');

    var currentA = event.relatedTarget;
    var mianatttr = currentA.getAttribute('data-index');

    if (mianatttr == "1") {
        console.log('One');
        var activeSlide = document.querySelector('.caption-text.text' + mianatttr);
        activeSlide.classList.add('active');
    }
    if (mianatttr == "2") {

        var activeSlide = document.querySelector('.caption-text.text' + mianatttr);
        activeSlide.classList.add('active');
    }
    if (mianatttr == "3") {

        var activeSlide = document.querySelector('.caption-text.text' + mianatttr);
        activeSlide.classList.add('active');
    }


})