const item = document.querySelector(".css");

item.animate(
  [{ transform: "translateX(0rem)" }, { transform: "translateY(-1rem)" }],
  {
    duration: 3000,
    easing: "ease-in-out",
    direction: "alternate",
    iterations: Infinity,
  }
);
