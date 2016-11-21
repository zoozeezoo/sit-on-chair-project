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
    slideTab[slideCounter].classList.add('showSlide');

      leftArr[0].addEventListener('click', function() {
          slideTab[slideCounter].classList.remove('showSlide');
          slideCounter--;
          if (slideCounter < 0) {
              slideCounter = slideTab.length - 1;
          }
          slideTab[slideCounter].classList.add('showSlide');

        rightArr[0].addEventListener('click', function() {
            slideTab[slideCounter].classList.remove('showSlide');
            slideCounter++;
            if (slideCounter >= slideTab.length) {
                slideCounter = 0;
            }
            slideTab[slideCounter].classList.add('showSlide');
        });
    });


    var transparentBox = document.querySelectorAll('.whiteTransparentBox');
    var imgBox1 = document.querySelector('.box1');
    var imgBox2 = document.querySelector('.box2');

        imgBox1.addEventListener('mouseover', function() {
          transparentBox[0].style.display='none';
        });
        imgBox2.addEventListener('mouseover', function () {
          transparentBox[1].style.display='none';
        });
        imgBox1.addEventListener('mouseout', function() {
          transparentBox[0].style.display='block';
        });
        imgBox2.addEventListener('mouseout', function () {
          transparentBox[1].style.display='block';
        })

});
