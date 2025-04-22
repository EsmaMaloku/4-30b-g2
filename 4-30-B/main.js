  function scrollSlider(arrow, direction) {
    const sliderContainer = arrow.parentNode;
    const slider = sliderContainer.querySelector('.slider');
    const scrollAmount = 120;
    slider.scrollBy({ left: direction * scrollAmount, behavior: 'smooth' });
  }