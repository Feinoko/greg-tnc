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

// variable for shine effect
const iconPaths_EL = document.querySelectorAll('.icones-finalités path');



let cb = (entries, observer) => {
  entries.forEach(entry => {
    if(entry.isIntersecting) {
      
      // handle rotation
      iconsFinalités_EL.forEach((icon) => {
        console.log(icon);
        icon.style.transform = `rotate(${rotationAngle}turn)`;
        rotationAngle -= .25; // increment a quarter turn (anti-clockwise) each time
        console.log(`rotationAngle value = ${rotationAngle}`);
      })

      // handle shine
      iconPaths_EL.forEach((path) => {
        path.classList.add('temp-shine');
      })

    };
  });
}

let options = {
  root: null,
  rootMargin: '0px',
  threshold: 1.0
}

let observer = new IntersectionObserver(cb, options);

observer.observe(finalités_EL);



