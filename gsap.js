// Hero Section Animations
const heroTimeline = gsap.timeline();
heroTimeline.from('.intro-small', {duration: 2, x: '-32px', opacity: '0.6', ease: 'power-4'});
heroTimeline.from('#intro', {duration: 2, x: '-128px', opacity: '0.6', ease: 'power-4'}, '-=2');
heroTimeline.from('.social-links', {duration: 2, opacity: '0', ease: 'power-4'}, '-=1');

// Register ScrollTrigger Plugin
gsap.registerPlugin(ScrollTrigger);

// About Section Animations
let tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".about-container",
    start: "center center",  // Start when it reaches the center
    end: "+=800",            // Stay fixed for 800px of scroll
    pin: true,               // Keeps section in place temporarily
    // anticipatePin: 1,        // Smooth transition into pinning
    scrub: true,             // Smooth effect while scrolling
  }
});

// Step 1: Keep the content in place for 800px of scroll (implicit due to pinning)

// Step 2: Animate layers after the pause
tl.to(".layer-primary", {
  scale: 3,
  opacity: 0,
  duration: 2,
  ease: "sine.in",
}, "+=0.5"); // Overlapping animation for smooth effect

tl.to(".layer-secondary", {
  scale: 2,
  opacity: 0,
  duration: 2.5,
  ease: "sine.in",
}, "-=2"); // Small delay before animation starts

tl.to(".layer-text", {
  scale: 1.4,
  // opacity: 0,
  duration: 3,
  ease: "sine.in",
}, "-=2"); // All layers animate together

// Project Cards Animations
gsap.utils.toArray(".project-card").forEach((card, index) => {
    gsap.fromTo(card, 
        { opacity: 0, y: "20%" }, 
        {
            opacity: 1, 
            y: "10%",
            duration: 2,
            ease: "expo.out",
            scrollTrigger: {
                trigger: card,
                // start: () => `top ${80 - index * 5}%`,  // Adjusts start dynamically for each card
                start: "top 90%",  // Start when the top of the card reaches 80% of the viewport
                end: "top 30%",
                scrub: 0.5,
                toggleActions: "play none none reverse",
            }
        }
    );
});

// Project Heading Animation
gsap.from('.project-heading', {duration: 2, x: '-20%', opacity: '0', ease: 'expo',
    scrollTrigger:{
        trigger: ".project-heading",
        start: "top 90%",
        end: "bottom 30%",
        scrub: true
    }
});

ScrollTrigger.matchMedia({
    "(min-width: 769px)": function() {
        gsap.to(".projects-container", {
            scrollTrigger: {
                trigger: ".projects-section",
                start: "top top",
                end: "bottom 30%",
                scrub: true,
                pin: ".project-heading", // Keeps heading fixed
            }
        });
    }
});

// Contact Section Animation
gsap.from('.contact-text', {duration: 2, x: '-10%', opacity: '0', ease: 'expo', 
    scrollTrigger:{
        trigger: ".contact-cta-text",
        start: "top 90%",
        scrub: true
    }
});

const texts = ["Hiring?", "Want to collaborate?", "Or just want to say hi?"];
    let index = 0;
    const textElement = document.getElementById("flipText");

    const tlContact = gsap.timeline({ repeat: -1 });

    tlContact.to(textElement, { rotationX: 90, opacity: 0, duration: 1, ease: "power2.in" }, "+=2")
      .call(() => {
        index = (index + 1) % texts.length;
        textElement.textContent = texts[index];
      })
      .to(textElement, { rotationX: 0, opacity: 1, duration: 1, ease: "power2.out" });


// Mobile View Animations
let mm = gsap.matchMedia();

mm.add("(max-width: 768px)", () => {

});
