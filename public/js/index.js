const ratings = {
  sony: 4.7,
  samsung: 3.4,
  vizio: 2.3,
  panasonic: 4.6,
  phillips: 4.1
};
const starsTotal = 5;
const productSelect = document.getElementById("product-select");
const ratingControl = document.getElementById("rating-control");

let product;

productSelect.addEventListener("change", e => {
  product = e.target.value;
  ratingControl.disable = false;
  ratingControl.value = ratings[product];
});

ratingControl.addEventListener("blur", e => {
  const rating = e.target.value;

  if (rating <= 5 && rating >= 0) {
    let starPercentage = (rating / starsTotal) * 100;
    let starPercentageRounded = `${Math.round(starPercentage / 10) * 10}%`;
    console.log(12);
    console.log(document.querySelector(`.${product} .stars-inner`));
    document.querySelector(
      `.${product} .stars-inner`
    ).style.width = starPercentageRounded;
  }
});

const getRatings = () => {
  for (let rating in ratings) {
    let starPercentage = (ratings[rating] / starsTotal) * 100;
    let starPercentageRounded = `${Math.round(starPercentage / 10) * 10}%`;

    document.querySelector(
      `.${rating} .stars-inner`
    ).style.width = starPercentageRounded;
  }
};

document.addEventListener("DOMContentLoaded", getRatings);
