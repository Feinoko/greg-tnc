// console.log('hello');

/* ================ 
Intersection Observer 
================= */

/* Description : on scrolling to the finalités section, trigger animation on icones: add a rotation where each icon rotate a quarter turn more than the previous, and a temporary shine */

const finalités_EL = document.querySelector('.section-finalités');

// get all 4 icons
const icon1_EL = document.querySelector('.icone-finalités-1');
const icon2_EL = document.querySelector('.icone-finalités-2');
const icon3_EL = document.querySelector('.icone-finalités-3');
const icon4_EL = document.querySelector('.icone-finalités-4');

// variables for rotation
const iconsFinalités_EL = document.querySelectorAll('.icones-finalités');
let rotationAngle = 0; // will be incremented on each iteration 

// set sections opacity to 0 for the fade effect
const iconSvgs_EL = document.querySelectorAll('.section-finalités .wp-block-kadence-column');
iconSvgs_EL.forEach((svg) => {
  svg.style.opacity = '0';
})

// trigger intersection only once
let hasIntersected = false;

let cb = (entries, observer) => {
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

let options = {
  root: null,
  rootMargin: '0px',
  threshold: 0.1
}

let observer = new IntersectionObserver(cb, options);

observer.observe(finalités_EL);



