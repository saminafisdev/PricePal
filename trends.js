const introModal = document.querySelector(".intro-modal");
const introModalOverlay = document.querySelector(".modal-overlay");

const trendModalCloseBtn = document.querySelector(
  ".trend-modal .modal-close-btn"
);
const trendModal = document.querySelector(".trend-modal");
const trendModalOverlay = document.querySelector("#trend-overlay");
const predictedProductListing = document.querySelector(
  ".predicted-product-listing"
);
const loaderParent = document.querySelector(".loader-parent");
const generateBtn = document.querySelector("#generate-btn");
const trendViewBtns = document.querySelectorAll(".trend-btn");
const trendModalParent = document.querySelector(".trend-modal-parent");

trendModalCloseBtn.addEventListener("click", (e) => {
  trendModalParent.classList.remove("show-trend");
});

const dummyData = [
  { date: "2024-05-01", price: 120 },
  { date: "2024-05-02", price: 122 },
  { date: "2024-05-03", price: 121 },
  { date: "2024-05-04", price: 119 },
  { date: "2024-05-05", price: 118 },
  { date: "2024-05-06", price: 117 },
  { date: "2024-05-07", price: 115 },
  { date: "2024-05-08", price: 116 },
  { date: "2024-05-09", price: 118 },
  { date: "2024-05-10", price: 120 },
  { date: "2024-05-11", price: 121 },
  { date: "2024-05-12", price: 123 },
  { date: "2024-05-13", price: 124 },
  { date: "2024-05-14", price: 125 },
  { date: "2024-05-15", price: 127 },
  { date: "2024-05-16", price: 126 },
  { date: "2024-05-17", price: 124 },
  { date: "2024-05-18", price: 123 },
  { date: "2024-05-19", price: 122 },
  { date: "2024-05-20", price: 120 },
  { date: "2024-05-21", price: 121 },
  { date: "2024-05-22", price: 119 },
  { date: "2024-05-23", price: 118 },
  { date: "2024-05-24", price: 117 },
  { date: "2024-05-25", price: 116 },
  { date: "2024-05-26", price: 115 },
  { date: "2024-05-27", price: 114 },
  { date: "2024-05-28", price: 113 },
  { date: "2024-05-29", price: 112 },
  { date: "2024-05-30", price: 111 },
  { date: "2024-05-31", price: 110 },
];

const timeframe = [];
const priceframe = [];

dummyData.forEach((data) => timeframe.push(data.date));
dummyData.forEach((data) => priceframe.push(data.price));

const ctx = document.getElementById("trend-chart");

new Chart(ctx, {
  type: "line",
  data: {
    labels: timeframe,
    datasets: [
      {
        label: "Price(৳)",
        data: priceframe,
        borderWidth: 1,
      },
    ],
  },
  options: {
    responsive: true,
    scales: {
      y: {
        beginAtZero: false,
      },
    },
  },
});

// Loading animation timer
generateBtn.addEventListener("click", (e) => {
  setTimeout(() => {
    loaderParent.style.display = "none";
    predictedProductListing.style.display = "grid";
  }, 2000);
  introModal.style.display = "none";
  introModalOverlay.style.display = "none";
});

// View trend
trendViewBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    console.log("hello");
    trendModalParent.classList.add("show-trend");
  });
});
