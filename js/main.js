const observer = new IntersectionObserver(entries => {
    // Loop over the entries
    entries.forEach(entry => {
      // If the element is visible
      if (entry.isIntersecting) {
        // Add the animation class
        entry.target.classList.add('fadeinup');
      }
    });
  });
  observer.observe(document.querySelector('.about'));
  observer.observe(document.querySelector('.news'));

  

  function myFunction() {
    var x = document.getElementById("myNavbar");
    if (x.className === "navbar") {
      x.className += " responsive";
    } else {
      x.className = "navbar";
    }
  }
  
  function navigateToAbout(event) {
      event.preventDefault();
      window.history.replaceState({}, "", "/about");
    // Here you can add any additional logic you need, such as scrolling to the element with id="about"
    document.getElementById("about").scrollIntoView();
  }