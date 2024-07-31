function section1Animation() {
  let tl1 = gsap.timeline();
  tl1.from("nav .logo i , nav .logo h1 , nav .part2 h4 , nav .part2 button", {
    y: -40,
    opacity: 0,
    duration: 0.8,
    stagger: 0.12,
    delay: 0.7,
  });

  tl1.from(
    ".center .part1 h1",
    {
      x: -200,
      opacity: 0,
      duration: 0.5,
    },
    "-=0.3"
  );
  tl1.from(".center .part1 p", {
    x: -100,
    opacity: 0,
    duration: 0.3,
  });
  tl1.from(".center .part1 button", {
    opacity: 0,
    duration: 0.4,
  });
  tl1.from(
    ".center .part2 img",
    {
      opacity: 0,
      duration: 0.5,
    },
    "-=0.3"
  );

  tl1.from(".section1bottom img", {
    y: 30,
    stagger: 0.15,
    duration: 0.6,
    opacity: 0,
  });
}

function section2Animation() {
  let tl12 = gsap.timeline({
    scrollTrigger: {
      trigger: "#services",
      scroller: "body",
      start: "top 50%",
      scrub: 1,
    },
  });

  tl12.from("#services", {
    y: 30,
    opacity: 0,
  });

  // line 1

  tl12.from(
    ".container .elem.line1.left",
    {
      x: -100,
      opacity: 0,
      duration: 1,
    },
    "line1"
  );
  tl12.from(
    ".container .elem.line1.right",
    {
      x: 100,
      opacity: 0,
      duration: 1,
    },
    "line1"
  );

  // line 2

  tl12.from(
    ".container .elem.line2.left",
    {
      x: -100,
      opacity: 0,
      duration: 1,
    },
    "line2"
  );
  tl12.from(
    ".container .elem.line2.right",
    {
      x: 100,
      opacity: 0,
      duration: 1,
    },
    "line2"
  );
}

function section3Animation() {
  // part 1
  let tl3 = gsap.timeline({
    scrollTrigger: {
      trigger: ".section3",
      scroller: "body",
      start: "top 50%",
    },
  });
  tl3.from(".section3 #part1 #left h2 , .section3 #part1 #left p", {
    y: 50,
    opacity: 0,
    duration: 0.7,
    stagger: 0.3,
  });
  tl3.from(".section3 #part1 #left button", {
    opacity: 0,
    duration: 0.4,
  });
  tl3.from(
    ".section3 #part1 #right img",
    {
      opacity: 0,
      duration: 0.4,
    },
    "-=1"
  );
  // part 2
  gsap.from("#part2 .case", {
    y: 30,
    opacity: 0,
    scrollTrigger: {
      trigger: "#part2 .case",
      scroller: "body",
      start: "top 60%",
    },
  });
  let tl4 = gsap.timeline({
    scrollTrigger: {
      trigger: ".section3 #part3",
      scroller: "body",
      start: "top 70%",
    },
  });
  // part 3
  tl4.from(".section3 #part3 .elem p", {
    x: -40,
    duration: 0.8,
    opacity: 0,
  });
  tl4.from(
    ".section3 #part3 .elem h1",
    {
      y: 20,
      opacity: 0,
      duration: 0.3,
    },
    "a"
  );
  tl4.from(
    "#part3 img",
    {
      scale: 0,
    },
    "a"
  );
}

section1Animation()
section2Animation()
section3Animation()
