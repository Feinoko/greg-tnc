class ObserverAnimations {

  // 1. create / initiate object
  constructor() {
    this.finalites_EL = document.querySelector('.section-finalités');
    this.initiateObserver();
  }

  // 2. callbacks

  cb_finalites(entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting && !hasIntersected) {

        hasIntersected = true;

        // handle rotation
        iconsFinalités_EL.forEach((icon) => {
          console.log(icon);
          icon.style.transform = `rotate(${rotationAngle}turn)`;
          rotationAngle -= .25; // increment a quarter turn (anti-clockwise) each time
          console.log(`rotationAngle value = ${rotationAngle}`);
        })

        // handle shine
        const iconPaths_EL = document.querySelectorAll('.icones-finalités path');
        iconPaths_EL.forEach((path) => {
          path.classList.add('temp-shine');
        })

        // handle fade & slide
        iconSvgs_EL.forEach((svg) => {
          svg.style.opacity = '1';
          svg.style.transform = 'translateY(0)';
        })
      };
    });
  }

  // 3. initiate observer
  initiateObserver() {

    // options
    let options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    }

    let observer_finalites = new IntersectionObserver(this.cb_finalites, options);

    observer.observe(finalités_EL);

  }
}