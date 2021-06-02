class ObserverAnimations {

  // 1. create / initiate object
  constructor() {
    this.finalites_EL = document.querySelector('.section-finalités');
    this.iconsFinalités_EL = document.querySelectorAll('.icones-finalités');
    this.hasIntersectedFinalites = false;
    this.initiateObserver();
    console.log('observer object called');
  }

  // 2. callbacks

  cb_finalites(entries, observer) {

    /* Description : on scrolling to the finalités section, trigger animation on icones: add a rotation where each icon rotate a quarter turn more than the previous, and a temporary shine */

    // set sections opacity to 0 for the fade effect
    const iconSvgs_EL = document.querySelectorAll('.section-finalités .wp-block-kadence-column');
    iconSvgs_EL.forEach((svg) => {
      svg.style.opacity = '0';
    })

    entries.forEach(entry => {
      if (entry.isIntersecting && !hasIntersected) {

        this.hasIntersectedFinalites = true;
        let rotationAngle = 0;

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

    observer_finalites.observe(this.finalites_EL);

  }
}

export default ObserverAnimations;