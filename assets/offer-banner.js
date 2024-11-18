document.addEventListener("DOMContentLoaded", function () {
  const params = new URLSearchParams(window.location.search);

  if (params.has("oseid")) {
    return;
  }

  const screenWidth = window.innerWidth;
  screenWidth > 480 ? showMainOfferBanner() : showAlternateOfferBanner();
});

document
  .getElementById("hideOfferBannerBtn")
  .addEventListener("click", showAlternateOfferBanner);
document
  .getElementById("showMainBannerBtn")
  .addEventListener("click", showMainOfferBanner);

function showMainOfferBanner(e) {
  if (e) e.preventDefault();

  // Dynamically check and set the image source (if needed)
  const imgElement = document.getElementById("weeklyOfferImage");
  const metaImageUrl = document.querySelector(
    "meta[name='dynamic-image-url']"
  )?.content;

  if (imgElement && metaImageUrl) {
    imgElement.src = metaImageUrl;
  }

  document
    .getElementById("mainOfferBanner")
    .classList.add("offer-banner--show");
  document
    .getElementById("mainOfferBanner")
    .classList.remove("offer-banner--hide");

  document
    .getElementById("showMainBannerBtn")
    .classList.remove("alternate-offer-banner--show");
  document
    .getElementById("showMainBannerBtn")
    .classList.add("alternate-offer-banner--hide");
}

function showAlternateOfferBanner(e) {
  if (e) e.preventDefault();

  document
    .getElementById("mainOfferBanner")
    .classList.remove("offer-banner--show");
  document
    .getElementById("mainOfferBanner")
    .classList.add("offer-banner--hide");

  document
    .getElementById("showMainBannerBtn")
    .classList.add("alternate-offer-banner--show");
  document
    .getElementById("showMainBannerBtn")
    .classList.remove("alternate-offer-banner--hide");
}
