//CALL 'package' USING package("package_name", "package_type", "message if applicable");
if (window.matchMedia("(max-width: 720px)").matches === false) {
    //GSAP HORIZONTAL SCROLLER
    let scroll_tl = gsap.timeline({
        scrollTrigger: {
            trigger: '.gsap_horizontal_scrolltrigger',
            start: "top center",
            scrub: true,
            end: "+=300",
        }
    }),
    facts = [...document.querySelectorAll('.gsap_card')]
    scroll_tl.to('.gsap_horizontal_scrolltrigger .division_2', {
        scale: 1.5,
        duration: 1,
        ease: "slow"
    })
    scroll_tl.to(facts, {
        xPercent: -85 * (facts.length - 1),
        scrollTrigger: {
            trigger: ".gsap_cards",
            start: "center center",
            pin: true,
            scrub: 1,
            snap: 0 / (facts.length - 1),
            end: () => `+=4320`
        }
    });




gsap.registerPlugin(ScrollTrigger);

// Basic Animation (Fade In)

gsap.from(".fade-in", {
  duration: 1,
  opacity: 0,
  stagger: 0.2, // Optional: stagger the animation of multiple elements with the same class
  scrollTrigger: {
    trigger: ".fade-in", // Element that triggers the animation
    start: "top 80%", // Adjust start position (e.g., "top center", "bottom 20%")
    toggleActions: "play none none reverse", // Play on enter, reverse on leave
    // markers: true, // Add markers for debugging (optional)
    // Other ScrollTrigger options as needed (e.g., scrub, pin)
  }
});

// Slide In Animation

gsap.from(".slide-in", {
  duration: 0.8,
  y: 50,
  opacity: 0,
  stagger: 0.2,
  ease: "back.out(1.2)",
  scrollTrigger: {
    trigger: ".slide-in",
    start: "top 70%",
    toggleActions: "play none none reverse",
  }
});


// Scale Animation with Scrub

gsap.from(".scale-up", {
  duration: 1,
  scale: 0.5, // Start scaled down
  opacity: 0,
  scrollTrigger: {
    trigger: ".scale-up",
    start: "top 100%",
    scrub: true, // Smooth scrubbing effect
    // markers: true,
  }
});

gsap.from(".scale-down", {
  duration: 1,
  scale: 0.5, // Start scaled down
  opacity: 0,
  scrollTrigger: {
    trigger: ".scale-down",
    start: "bottom 10%",
    scrub: true, // Smooth scrubbing effect
    // markers: true,
  }
});

// Pinning an Element

gsap.to(".pinned-element", {
  duration: 2, // Adjust duration as needed
  scale: 0.7,
  scrollTrigger: {
    trigger: ".pinned-element",
    pin: true, // Pin the element
    start: "top top", // Adjust start and end positions
    end: "bottom top", // or "bottom bottom" for full duration
    scrub: true, // Smooth scrubbing effect (optional)
    // markers: true,
  }
});

// Background Change on Scroll




// Example of animating multiple elements with the same class:

gsap.from(".multiple-elements", {
  duration: 0.5,
  opacity: 0,
  y: 20,
  stagger: 0.1, // Stagger the animation
  scrollTrigger: {
    trigger: ".multiple-elements",
    start: "top 10%",
    toggleActions: "play none none reverse",
  }
});










gsap.utils.toArray(".panel").forEach(panel => {
  ScrollTrigger.create({
    trigger: panel,
    pin: true,
    start: "top top", // Adjust start position as needed
    end: "bottom top", // Adjust end position as needed
    scrub: true, // Smooth scrubbing (optional)
    // markers: true // For debugging
  });
});


gsap.utils.toArray(".toggle-element").forEach(element => {
  ScrollTrigger.create({
    trigger: element,
    toggleClass: "active", // Toggle the "active" class
    start: "top 80%",
    toggleActions: "play none none reverse",
    // markers: true
  });
});






gsap.to(".box", {
  x: 400, // Animate the x position
  duration: 2,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".box",
    start: "top center",
    scrub: true // Link animation directly to scrollbar
  }
});




gsap.utils.toArray(".text-reveal").forEach(text => {
        gsap.from(text, {
            opacity: 0,
            y: 20,
            duration: 0.5,
            scrollTrigger: {
                trigger: text, // The element that triggers the animation
                start: "top 80%", // Adjust start position as needed
                toggleActions: "play none none reverse", // Animate on enter and reverse on leave
                // markers: true, // Helpful for debugging
                onEnter: () => text.classList.add("active"),
                onLeaveBack: () => text.classList.remove("active")
            }
        });
    });
    
    
    gsap.from(".slide-in-text", {
  opacity: 0,
  y: 20, // Slide up
  duration: 0.8,
  ease: "power1.out",
  scrollTrigger: {
    trigger: ".text-reveal",
    start: "top 80%",
    toggleActions: "play none none reverse",
    // markers: true,
  },
});


gsap.utils.toArray(".zoom-in").forEach(text => {
  gsap.from(text, {
    opacity: 0,
    scale: 0.8, // Initial scale
    duration: 0.8,
    ease: "back.out(1.7)", // Use back easing for a nice bounce
    scrollTrigger: {
      trigger: text,
      start: "top 80%",
      toggleActions: "play none none reverse",
      // markers: true,
    },
  });
});



gsap.utils.toArray(".my-button").forEach(button => {
  gsap.fromTo(button, { scale: 1, backgroundColor: "#007bff" }, {
    scale: 1.1,
    backgroundColor: "#0056b3",
    duration: 0.3,
    ease: "power1.out",
    onReverseComplete: () => gsap.set(button, { scale: 1, backgroundColor: "#007bff" }),
    scrollTrigger: {
      trigger: button,
      toggleActions: "play none none reverse",
      // markers: true,
    }
  });
});


 gsap.to(".scrolling-text", {
            x: - (document.querySelector(".scrolling-text").offsetWidth - document.documentElement.clientWidth), // Calculate the distance to scroll
            ease: "none",
            scrollTrigger: {
                trigger: ".rail",
                start: "left 30%", // The element that triggers the animation
                pin: true, // Pin the container while scrolling
                scrub: 1, // Smooth scrubbing effect. Use true for basic scrubbing or a number for duration
                end: "+=" + (document.querySelector(".rail").offsetWidth - document.documentElement.clientWidth), // End the scroll at the end of the text
                // markers: true, // For debugging - shows the trigger and end positions
            }
        });
            
            
            
            
            
  $(document).ready(function() {
  const $section = $('.mover');
  const $figure = $('.mover_up');

  $section.mousemove(function(e) {
    const sectionOffset = $section.offset();
    const mouseX = e.pageX - sectionOffset.left;
    const mouseY = e.pageY - sectionOffset.top;

    let figureX = mouseX - $figure.width() * 2;
    let figureY = mouseY - $figure.height() * 2;

    figureX = Math.max(0, Math.min($section.width() - $figure.width(), figureX));
    figureY = Math.max(0, Math.min($section.height() - $figure.height(), figureY));
    if (figureY > 70){ figureY = 70; }
    if (figureX > 70){ figureX = 70; }
    $figure.css({ left: figureX + 'px', top: figureY + 'px' });
  });
});



$(document).ready(function() {
  const $section = $('.mover');
  const $figure = $('.mover_down');

  $section.mousemove(function(e) {
    const sectionOffset = $section.offset();
    const mouseX = e.pageX - sectionOffset.left;
    const mouseY = e.pageY - sectionOffset.top;

    let figureY = mouseX - $figure.width() * 2;
    let figureX = mouseY - $figure.height() * 2;

    figureX = Math.max(0, Math.min($section.width() - $figure.width(), figureX));
    figureY = Math.max(0, Math.min($section.height() - $figure.height(), figureY));
    if (figureY > 70){ figureY = 70; }
    if (figureX > 70){ figureX = 70; }
    $figure.css({ bottom: figureX + 'px', right: figureY + 'px' });
  });
});



$(document).ready(function() {
    const $text = $(".white");
    const text = $text.text();
    $text.empty();

    for (let i = 0; i < text.length; i++) {
        let char = text[i];
        if (char === " ") {
            char = "&nbsp;"; // Use non-breaking space for spaces
        }
        const $span = $("<span>").addClass("letter").html(char); // Use .html()
        $text.append($span);
    }

  const $letters = $(".letter");
  const letterCount = $letters.length;

  $(window).scroll(function() {
    const scrollTop = $(window).scrollTop();
    const windowHeight = $(window).height();
    const textTop = $text.offset().top;
    const textHeight = $text.height();
    const triggerPoint = textTop - windowHeight * 0.8;
    const animationEnd = textTop + textHeight;
    if (scrollTop > triggerPoint && scrollTop < animationEnd) {
      const scrollProgress = (scrollTop - triggerPoint) / (animationEnd - triggerPoint);
      const lettersToShow = Math.floor(scrollProgress * letterCount);
      $letters.each(function(index) {
        if (index < lettersToShow) {
          $(this).css("opacity", 1);
        } else {
          $(this).css("opacity", 0.4);
        }
      });
    } else if (scrollTop > animationEnd) {
      $letters.css("opacity", 1);
    } else {
      $letters.css("opacity", 0);
    }
  });
});

}