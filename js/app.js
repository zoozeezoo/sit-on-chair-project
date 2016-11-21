document.addEventListener("DOMContentLoaded", function() {


    var submenu = document.getElementsByClassName('submenu');
    var dropBtn = document.getElementsByClassName('dropBtn');


    dropBtn[0].addEventListener('click', function() {
        submenu[0].classList.toggle('show');
    });


    var allSubmenuA = document.querySelectorAll('.submenu a')
    console.log(allSubmenuA);

    window.onclick = function(e) {
      if (!e.target.matches('.dropBtn')) {

        for (var i = 0; i < allSubmenuA.length; i++) {
          var submenuOpen = allSubmenuA[i];
          if (submenuOpen.classList.contains('show')) {
            submenuOpen.classList.remove('show');
      }
    }
  }
}



    var leftArr = document.getElementsByClassName('left-arrow');
    var rightArr = document.getElementsByClassName('right-arrow');
    var slideTab = document.getElementsByClassName('slide');
    // console.log(slideTab);

    slideCounter = 0;
    slideTab[slideCounter].classList.add('show');

      leftArr[0].addEventListener('click', function() {
          slideTab[slideCounter].classList.remove('show');
          slideCounter--;
          if (slideCounter < slideTab.length) {
              slideCounter = slideTab.length - 1;
          }
          slideTab[slideCounter].classList.add('show');

        rightArr[0].addEventListener('click', function() {
            slideTab[slideCounter].classList.remove('show');
            slideCounter++;
            if (slideCounter >= slideTab.length) {
                slideCounter = 0;
            }
            slideTab[slideCounter].classList.add('show');
        });
    });
});
