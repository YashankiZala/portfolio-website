const aboutSection = document.querySelector("#about-section");
const aboutButton = document.querySelector("#about-button");
const horiNav=document.querySelector("#horizontalNav");

function handleMenuSection() {
  aboutSection.classList.toggle("hidden");
  aboutButton.classList.remove("hidden");
}

function handleMenuButton() {
  aboutSection.classList.remove("hidden");
  aboutButton.classList.toggle("hidden");
}

function handleMenuButtonCnt() {
  aboutSection.classList.remove("hidden");
}

function barClick(){
  horiNav.classList.remove("hidden");
}

function navCross(){
  horiNav.classList.toggle("hidden");
}

const form = document.getElementById("contact-form");
const submitButton = form.querySelector('button[type="submit"]');

// Function to check if all fields are filled
function checkFormFields() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  // Enable button if all fields are filled
  submitButton.disabled = !(name && email && message);
}

// Add event listeners to all form fields to detect changes
form.addEventListener("input", checkFormFields);

// hover effect script starts here
const hoverElement = document.getElementById("hoverElement");
const hoverLine = document.getElementById("hoverLine");

const hoverElement2 = document.getElementById("hoverElement2");
const hoverLine2 = document.getElementById("hoverLine2");

const hoverElement3 = document.getElementById("hoverElement3");
const hoverLine3 = document.getElementById("hoverLine3");

const hoverElement4 = document.getElementById("hoverElement4");
const hoverLine4 = document.getElementById("hoverLine4");

const hoverElement5 = document.getElementById("hoverElement5");
const hoverLine5 = document.getElementById("hoverLine5");

hoverElement.addEventListener("mouseenter", () => {
  hoverLine.style.transition = "width 0.5s ease";
  hoverLine.style.backgroundColor = "#ef4444";
  hoverLine.style.width = "100%";
  hoverLine.style.left = "0";
  hoverLine.style.right = "auto";
});

hoverElement.addEventListener("mouseleave", () => {
  hoverLine.style.transition = "width 0.5s ease";
  hoverLine.style.backgroundColor = "#1e40af";
  hoverLine.style.width = "0";
  hoverLine.style.right = "0";
  hoverLine.style.left = "auto";
});

hoverElement2.addEventListener("mouseenter", () => {
  hoverLine2.style.transition = "width 0.5s ease";
  hoverLine2.style.backgroundColor = "#ef4444";
  hoverLine2.style.width = "100%";
  hoverLine2.style.left = "0";
  hoverLine2.style.right = "auto";
});

hoverElement2.addEventListener("mouseleave", () => {
  hoverLine2.style.transition = "width 0.5s ease";
  hoverLine2.style.backgroundColor = "#1e40af";
  hoverLine2.style.width = "0";
  hoverLine2.style.right = "0";
  hoverLine2.style.left = "auto";
});

hoverElement3.addEventListener("mouseenter", () => {
  hoverLine3.style.transition = "width 0.5s ease";
  hoverLine3.style.backgroundColor = "#ef4444";
  hoverLine3.style.width = "100%";
  hoverLine3.style.left = "0";
  hoverLine3.style.right = "auto";
});

hoverElement3.addEventListener("mouseleave", () => {
  hoverLine3.style.transition = "width 0.5s ease";
  hoverLine3.style.backgroundColor = "#1e40af";
  hoverLine3.style.width = "0";
  hoverLine3.style.right = "0";
  hoverLine3.style.left = "auto";
});

hoverElement4.addEventListener("mouseenter", () => {
  hoverLine4.style.transition = "width 0.5s ease";
  hoverLine4.style.backgroundColor = "#ef4444";
  hoverLine4.style.width = "100%";
  hoverLine4.style.left = "0";
  hoverLine4.style.right = "auto";
});

hoverElement4.addEventListener("mouseleave", () => {
  hoverLine4.style.transition = "width 0.5s ease";
  hoverLine4.style.backgroundColor = "#1e40af";
  hoverLine4.style.width = "0";
  hoverLine4.style.right = "0";
  hoverLine4.style.left = "auto";
});

hoverElement5.addEventListener("mouseenter", () => {
  hoverLine5.style.transition = "width 0.5s ease";
  hoverLine5.style.backgroundColor = "#ef4444";
  hoverLine5.style.width = "100%";
  hoverLine5.style.left = "0";
  hoverLine5.style.right = "auto";
});

hoverElement5.addEventListener("mouseleave", () => {
  hoverLine5.style.transition = "width 0.5s ease";
  hoverLine5.style.backgroundColor = "#1e40af";
  hoverLine5.style.width = "0";
  hoverLine5.style.right = "0";
  hoverLine5.style.left = "auto";
});

const hoverElement6 = document.getElementById("hoverElement6");
const hoverLine6 = document.getElementById("hoverLine6");

hoverElement6.addEventListener("mouseenter", () => {
  hoverLine6.style.transition = "width 0.5s ease";
  hoverLine6.style.backgroundColor = "#ef4444";
  hoverLine6.style.width = "100%";
  hoverLine6.style.left = "0";
  hoverLine6.style.right = "auto";
});

hoverElement6.addEventListener("mouseleave", () => {
  hoverLine6.style.transition = "width 0.5s ease";
  hoverLine6.style.backgroundColor = "#1e40af";
  hoverLine6.style.width = "0";
  hoverLine6.style.right = "0";
  hoverLine6.style.left = "auto";
});
// hover effect script ends here

//Footer hover starts here

const hoverElement7 = document.getElementById("hoverElement7");
const hoverLine7 = document.getElementById("hoverLine7");

hoverElement7.addEventListener("mouseenter", () => {
  hoverLine7.style.transition = "width 0.5s ease";
  hoverLine7.style.backgroundColor = "#ef4444";
  hoverLine7.style.width = "100%";
  hoverLine7.style.left = "0";
  hoverLine7.style.right = "auto";
});

hoverElement7.addEventListener("mouseleave", () => {
  hoverLine7.style.transition = "width 0.5s ease";
  hoverLine7.style.backgroundColor = "#1e40af";
  hoverLine7.style.width = "0";
  hoverLine7.style.right = "0";
  hoverLine7.style.left = "auto";
});

const hoverElement8 = document.getElementById("hoverElement8");
const hoverLine8 = document.getElementById("hoverLine8");

hoverElement8.addEventListener("mouseenter", () => {
  hoverLine8.style.transition = "width 0.5s ease";
  hoverLine8.style.backgroundColor = "#ef4444";
  hoverLine8.style.width = "100%";
  hoverLine8.style.left = "0";
  hoverLine8.style.right = "auto";
});

hoverElement8.addEventListener("mouseleave", () => {
  hoverLine8.style.transition = "width 0.5s ease";
  hoverLine8.style.backgroundColor = "#1e40af";
  hoverLine8.style.width = "0";
  hoverLine8.style.right = "0";
  hoverLine8.style.left = "auto";
});

const hoverElement9 = document.getElementById("hoverElement9");
const hoverLine9 = document.getElementById("hoverLine9");

hoverElement9.addEventListener("mouseenter", () => {
  hoverLine9.style.transition = "width 0.5s ease";
  hoverLine9.style.backgroundColor = "#ef4444";
  hoverLine9.style.width = "100%";
  hoverLine9.style.left = "0";
  hoverLine9.style.right = "auto";
});

hoverElement9.addEventListener("mouseleave", () => {
  hoverLine9.style.transition = "width 0.5s ease";
  hoverLine9.style.backgroundColor = "#1e40af";
  hoverLine9.style.width = "0";
  hoverLine9.style.right = "0";
  hoverLine9.style.left = "auto";
});

const hoverElement10 = document.getElementById("hoverElement10");
const hoverLine10 = document.getElementById("hoverLine10");

hoverElement10.addEventListener("mouseenter", () => {
  hoverLine10.style.transition = "width 0.5s ease";
  hoverLine10.style.backgroundColor = "#ef4444";
  hoverLine10.style.width = "100%";
  hoverLine10.style.left = "0";
  hoverLine10.style.right = "auto";
});

hoverElement10.addEventListener("mouseleave", () => {
  hoverLine10.style.transition = "width 0.5s ease";
  hoverLine10.style.backgroundColor = "#1e40af";
  hoverLine10.style.width = "0";
  hoverLine10.style.right = "0";
  hoverLine10.style.left = "auto";
});