document.addEventListener("DOMContentLoaded", function() {


    var submenu = document.getElementsByClassName('submenu');
    var dropBtn = document.getElementsByClassName('dropBtn');
    // var allSubmenuA = document.querySelectorAll('.dropBtn a')
    console.log(submenu);
    console.log(dropBtn);

    dropBtn.addEventListener('click', function() {
        submenu.classList.toggle('show');
    });



    var leftArr = document.getElementsByClassName('left-arrow');
    var rightArr = document.getElementsByClassName('right-arrow');
    var slideTab = document.getElementsByClassName('slide');
    console.log(slideTab);

    slideCounter = 0;
    slideTab[slideCounter].classList.add('show');

    leftArr.addEventListener('click', function() {
        slideTab[slideCounter].classList.remove('show');
        slideCounter--;
        if (slideCounter < slideTab.length) {
            slideCounter = slideTab.length - 1;
        }
        slideTab[slideCounter].classList.add('show');

        rightArr.addEventListener('click', function() {
            slideTab[slideCounter].classList.remove('show');
            slideCounter++;
            if (slideCounter >= slideTab.length) {
                slideCounter = 0;
            }
            slideTab[slideCounter].classList.add('show');
        });
    });
});
