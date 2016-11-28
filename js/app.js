document.addEventListener("DOMContentLoaded", function() {


    var submenu = document.getElementsByClassName('submenu');
    var dropBtn = document.getElementsByClassName('dropBtn');


    dropBtn[0].addEventListener('click', function() {
        submenu[0].classList.toggle('show');
    });


    window.addEventListener('click', function(e) {
        if (!e.target.matches('.dropBtn')) {

            var submenuA = document.querySelectorAll('.submenu a')
            var i;
            for (var i = 0; i < submenuA.length; i++) {
                var submenuOpen = submenuA[i];
                if (submenuOpen.classList.contains('show')) {
                    submenuOpen.classList.remove('show')
                }
            }
        }
    });



    var leftArr = document.getElementsByClassName('left-arrow');
    var rightArr = document.getElementsByClassName('right-arrow');
    var slideTab = document.getElementsByClassName('slide');

    slideCounter = 0;
    slideTab[slideCounter].classList.add('showSlide');

    leftArr[0].addEventListener('click', function() {
        slideTab[slideCounter].classList.remove('showSlide');
        slideCounter--;
        if (slideCounter < 0) {
            slideCounter = slideTab.length - 1;
        }
        slideTab[slideCounter].classList.add('showSlide');
    });

    rightArr[0].addEventListener('click', function() {
        slideTab[slideCounter].classList.remove('showSlide');
        slideCounter++;
        if (slideCounter >= slideTab.length) {
            slideCounter = 0;
        }
        slideTab[slideCounter].classList.add('showSlide');
    });


    var transparentBox = document.querySelectorAll('.whiteTransparentBox');
    var imgBox1 = document.querySelector('.box1');
    var imgBox2 = document.querySelector('.box2');

    imgBox1.addEventListener('mouseover', function() {
        transparentBox[0].style.visibility = 'hidden';
    });
    imgBox2.addEventListener('mouseover', function() {
        transparentBox[1].style.visibility = 'hidden';
    });
    imgBox1.addEventListener('mouseout', function() {
        transparentBox[0].style.visibility = 'initial';
    });
    imgBox2.addEventListener('mouseout', function() {
        transparentBox[1].style.visibility = 'unset'; //unset, initial, visible
    });

});
