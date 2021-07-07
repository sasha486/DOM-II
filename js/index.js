// ------------------ 1. mouseover event to change link colors -----------------

const linkColor = document.querySelector(".nav");
linkColor.addEventListener("mouseover", (e) => {
  e.target.style.color = "darkOrange";
});

// ----------------------- 2. mouseout event to change color back ---------------------

linkColor.addEventListener("mouseout", (e) => {
  e.target.style.color = "black";
});

// -------------- stop navigation items from refreshing the page ----------

const navigation = document.querySelector(".nav-link");
navigation.addEventListener("click", (e) => {
  e.target.preventDefault();
});

// -------------------- 3. mouseenter to skew the title -------------

const title = document.querySelector(" .main-navigation ");
title.addEventListener("mouseenter", (element) => {
  element.target.style.transform = "skewx(200deg)";
  element.target.style.transition = "transform 1.5s";
  element.target.style.color = "hotPink";
});

// ----------------- 4. mouseleave transform ----------------------

const exit = document.querySelector(".main-navigation");
exit.addEventListener("mouseleave", (event) => {
  event.target.style.transform = "skewy(360deg)";
  event.target.style.border = " 5px dotted paleGreen";
});

// -------------- 5. wheel event to change content color -------------

const pink = document.querySelector(".intro > p");
pink.addEventListener("wheel", (e) => {
  e.target.style.backgroundColor = "pink";
  e.target.style.color = "teal";
});

// -------------------- 6. keydown event to change background color -------------

const bodyColor = document.querySelector("body");
bodyColor.addEventListener("keydown", (e) => {
  e.target.style.backgroundColor = "#F39337";
});

// ------------------ 7. mouseenter to transform h2's ---------

const welcome = document.querySelectorAll("h2").forEach((item) =>
  item.addEventListener("mouseenter", (e) => {
    e.target.style.transform = "rotatex(360deg)";
    e.target.style.transition = "transform 2s";
    e.target.style.color = "paleGreen";
    e.target.addEventListener("mouseleave", (event) => {
      e.target.style.transform = "rotatey(360deg)";
      e.target.style.textShadow = " 2px 5px hotPink";
    });
  })
);

// ----------------- 8. keyup to change the body color --------------

const peach = document.querySelector("body");
peach.addEventListener("keyup", (e) => {
  e.target.style.backgroundColor = "#32a8a0";
});

// ------------- 9. mouseenter to style text --------------------

const destination = document
  .querySelectorAll(".destination p")
  .forEach((item) =>
    item.addEventListener("mouseenter", (e) => {
      e.target.style.textAlign = "center";
      e.target.style.backgroundColor = "#b982cf";
      e.target.style.borderRadius = "20px";
      e.target.style.marginBottom = " 5px";
    })
  );

// ----------------- 10. mouseover to style the images -------------------

const borders = document.querySelectorAll("img").forEach((item) => {
  item.addEventListener("mouseover", (e) => {
    e.target.style.border = " 10px dotted orange";
  });
});
