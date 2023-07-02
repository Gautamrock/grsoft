let hamburger = document.querySelector(".hamburger");
let navbar = document.querySelector(".navslide");
let close = document.querySelector(".close");
let circle = document.querySelector(".circle");
let requestQuote =document.querySelector(".requestQuote");
let formss = document.querySelector(".form");
let formClose = document.querySelector(".formClose");
let companyMenu = document.querySelector("#company");
let companyClose = document.querySelector(".companyClose");
let servicesMenu = document.querySelector("#services");
let serviceClose = document.querySelector(".serviceClose");
let magento = document.querySelector(".magento");
let mdSubmenu =document.querySelector(".mdSubmenu");
let arrows = document.querySelector(".arrows")
let technologySubmenu = document.querySelector("#technology");
let technologyClose = document.querySelector(".technologyClose");
let outSourcing = document.querySelector("#Outsourcing");
let OutsourcingClose = document.querySelector(".OutsourcingClose");


magento.addEventListener('click',()=>{
  
  mdSubmenu.classList.toggle("mdSubmenu");
  arrows.classList.toggle(".arrow");
})

hamburger.addEventListener('click',()=>{
  navbar.classList.add("navslidedrag");
  document.querySelector(".close").style.display = "block"
  circle.style.display= "block";
})

close.addEventListener('click',()=>{
  navbar.classList.remove("navslidedrag");
  document.querySelector(".close").style.display = "none"
  circle.style.display= "none";
})
requestQuote.addEventListener('click',()=>{
  formss.classList.add("formSlide");
})
formClose.addEventListener('click',()=>{
  formss.classList.remove("formSlide");
})
companyMenu.addEventListener('click',()=>{
  document.getElementById("companySubmenu").style.transform = "translateX(0)"
})
companyClose.addEventListener('click',()=>{
  document.getElementById("companySubmenu").style.transform = "translateX(-600%)"
})
servicesMenu.addEventListener('click',()=>{
  document.getElementById("serviceSubmenu").style.transform = "translateX(0)"
})
serviceClose.addEventListener('click',()=>{
  document.getElementById("serviceSubmenu").style.transform = "translateX(-600%)"
})
technologySubmenu.addEventListener('click',()=>{
  document.getElementById("technologySubmenu").style.transform = "translateX(0)"
})
technologyClose.addEventListener('click',()=>{
  document.getElementById("technologySubmenu").style.transform = "translateX(-600%)"
})
outSourcing.addEventListener('click',()=>{
  document.getElementById("outsourcingSubmenu").style.transform = "translateX(0)"
})
OutsourcingClose.addEventListener('click',()=>{
  document.getElementById("outsourcingSubmenu").style.transform = "translateX(-600%)"
})




document.addEventListener("DOMContentLoaded", function() {
  let about = document.querySelectorAll(".aboutText");
  let box = document.querySelectorAll(".box");
  let counter = document.querySelectorAll(".counter");
  let address = document.querySelectorAll(".address");
  let tags = document.querySelectorAll(".tags");
  let featureBox = document.querySelectorAll(".featureBox");
  


 
 
   function checkPosition() {
   
     for (var i = 0; i < about.length; i++) {
       var element = about[i];
       var positionFromTop = element.getBoundingClientRect().top;
 
       if (positionFromTop - window.innerHeight <= 0) {
         element.classList.add("aboutslide");
       }
     }
     for (var i = 0; i < box.length; i++) {
       var element = box[i];
       var positionFromTop = element.getBoundingClientRect().top;
 
       if (positionFromTop - window.innerHeight <= 0) {
         element.classList.add("boxslide");
       }
     }
     for (var i = 0; i < counter.length; i++) {
       var element = counter[i];
       var positionFromTop = element.getBoundingClientRect().top;
 
       if (positionFromTop - window.innerHeight <= 0) {
         element.classList.add("counterslide");
       }
     }
     for (var i = 0; i < featureBox.length; i++) {
       var element = featureBox[i];
       var positionFromTop = element.getBoundingClientRect().top;
 
       if (positionFromTop - window.innerHeight <= 0) {
         element.classList.add("featureBoxslide");
       }
     }
     for (var i = 0; i < address.length; i++) {
       var element = address[i];
       var positionFromTop = element.getBoundingClientRect().top;
 
       if (positionFromTop - window.innerHeight <= 0) {
         element.classList.add("addressslide");
       }
     }
     for (var i = 0; i < tags.length; i++) {
       var element = tags[i];
       var positionFromTop = element.getBoundingClientRect().top;
 
       if (positionFromTop - window.innerHeight <= 0) {
         element.classList.add("tagsslide");
       }
     }

     
   }
 
   window.addEventListener("scroll", checkPosition);
   window.addEventListener("resize", checkPosition);
 
   checkPosition();
 });



document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.section');
    const menuLinks = document.querySelectorAll('.side-menu a');
  
    function changeMenuActiveState() {
      let currentSection = '#section1';
  
      sections.forEach(function(section) {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
  
        if (pageYOffset >= sectionTop - sectionHeight / 2) {
          currentSection = section.getAttribute('id');
        }
      });
  
      menuLinks.forEach(function(menuLink) {
        menuLink.classList.remove('active');
        if (menuLink.getAttribute('href').slice(1) === currentSection) {
          menuLink.classList.add('active');
        }
      });
    }
  
    window.addEventListener('scroll', changeMenuActiveState);
  });
  

  var counters = document.querySelectorAll('.count');
  var scrollOffset = 200; // Offset for triggering counting (pixels)
  
  var isInViewport = function (element) {
    var rect = element.getBoundingClientRect();
    var windowHeight = window.innerHeight || document.documentElement.clientHeight;
    return rect.top <= windowHeight - scrollOffset;
  };
  
  var startCounting = function () {
    var initialCounts = [0, 0, 0, 0];
    var targetCounts = [300, 100, 80, 50];
    var durations = [500, 500, 500, 500];
    var incrementValues = [];
  
    counters.forEach(function (counter, index) {
      var target = targetCounts[index];
      var count = initialCounts[index];
      var duration = durations[index];
      incrementValues[index] = Math.ceil((target - count) / (duration / 20));
  
      var updateCount = function () {
        count += incrementValues[index];
        counter.innerText = count;
  
        if (count < target) {
          setTimeout(updateCount, 50);
        } else {
          counter.innerText = target;
        }
      };
  
      updateCount();
    });
  };
  
  window.addEventListener('scroll', function () {
    if (isInViewport(document.querySelector('.counter'))) {
      startCounting();
      window.removeEventListener('scroll', arguments.callee);
    }
  });

