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
  observer.observe(document.querySelector('.experience'));
  observer.observe(document.querySelector('.job1'));
  observer.observe(document.querySelector('.job2'));
  observer.observe(document.querySelector('.job3'));
  observer.observe(document.querySelector('.job4'));

  function myFunction() {
    var x = document.getElementById("myNavbar");
    if (x.className === "navbar") {
      x.className += " responsive";
    } else {
      x.className = "navbar";
    }
  }
  