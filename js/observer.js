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

    console.log(`this inside callback : ${this} `);
    console.log(this);

    /* Description : on scrolling to the finalités section, trigger animation on icones: add a rotation where each icon rotate a quarter turn more than the previous, and a temporary shine */

    // set sections opacity to 0 for the fade effect
    const iconSvgs_EL = document.querySelectorAll('.section-finalités .wp-block-kadence-column');
    iconSvgs_EL.forEach((svg) => {
      svg.style.opacity = '0';
    })

    console.log('entries');
    console.log(entries);
    entries.forEach(entry => {
      if (entry.isIntersecting && !this.hasIntersectedFinalites) {

        this.hasIntersectedFinalites = true;
        let rotationAngle = 0;

        // handle rotation
        // this.iconsFinalités_EL = document.querySelectorAll('.icones-finalités');
        console.log(this.iconsFinalités_EL);
        this.iconsFinalités_EL.forEach((icon) => {
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
    }, this);
  }

  // 3. initiate observer
  initiateObserver() {

    // options
    let options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    }

    // using bind(this) so that 'this' remains the ObserverAnimations class, and does not become the IntersectionObserver class in the callback
    let observer_finalites = new IntersectionObserver(this.cb_finalites.bind(this), options);

    observer_finalites.observe(this.finalites_EL);

  }
}

export default ObserverAnimations;