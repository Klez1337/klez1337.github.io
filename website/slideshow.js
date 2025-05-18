let slideIndex = 0;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex + n);
}

/**
 * Näyttää tietyn dian diaesityksessä ja piilottaa muut diat.
 *
 * @param {number} n - Näytettävän dian indeksi (alkaen 0).
 *
 * Funktio hakee kaikki elementit, joilla on luokka "slide", piilottaa ne ja näyttää vain valitun dian.
 * Jos annettu indeksi on suurempi kuin diojen määrä, näytetään ensimmäinen dia.
 * Jos indeksi on pienempi kuin 0, näytetään viimeinen dia.
 */
function showSlides(n) {
  let slides = document.getElementsByClassName("slide");
  if (slides.length === 0) return;
  if (n >= slides.length) { slideIndex = 0; }
  else if (n < 0) { slideIndex = slides.length - 1; }
  else { slideIndex = n; }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex].style.display = "block";
}