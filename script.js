const galleryItems = document.querySelectorAll(".gallery-item");
const lightbox = document.querySelector(".lightbox");
const lightboxImage = document.getElementById("lightbox-image");
const closeBtn = document.getElementById("close-btn");

function openLightbox(event) {
  lightbox.style.display = "flex";
  const imgSrc = event.target.getAttribute("src");
  const fullSrc = imgSrc.replace("-thumbnail", "");
  lightboxImage.setAttribute("src", fullSrc);
}

function hideLightbox() {
  lightbox.style.display = "none";
}

function overlayClick() {
  lightbox.style.display = "none";
}

galleryItems.forEach((item) => {
  item.addEventListener("click", openLightbox);
});

closeBtn.addEventListener("click", hideLightbox);
lightbox.addEventListener("click", overlayClick);
