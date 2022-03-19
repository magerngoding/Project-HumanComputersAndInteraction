var slideCount = 1;
showSlider(slideCount);

function nextSlides(n){
  showSlider(slideCount += n);
}

function currentSlide(n){
  showSlider(slideCount = n);
}

function showSlider(n){
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");

  if(n > slides.length){
        slideCount = 1}
  if (n < 1) {
        slideCount = slides.length}
  for (i = 0; i < slides.length; i++){
        slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++){
        dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideCount-1].style.display = "block";
  dots[slideCount-1].className += " active";
}
