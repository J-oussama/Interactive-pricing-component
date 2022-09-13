let selecter = document.querySelector(".selecter");
let range = document.getElementById("range");
let selecteBtn = document.querySelector(".selecteBtn");

let pricing = document.querySelector(".pricing");
console.log(selecter, selecteBtn);

let pageviews = document.querySelector(".main__header--title");

console.log(pageviews);

console.log(range.value);

// when we move the range thumb reset the value of the
range.addEventListener("click", (event) => {
  //  chagne the value pageviews of the soft cyan color for the range mvm
  range.style.cssText = `
	background: linear-gradient(
		to right,
		var(--soft-cyan) 0%,
		var(--soft-cyan) ${event.target.value}%,
		var(--light-grayish-blue) 50%,
		var(--light-grayish-blue) 100%
	);
  `;
  // chagne the   value base on the ragne value
  pageviews.textContent = event.target.value * 10 + `K PAGEVIEWS`;
});

// if the toggle button is checked or not
let toggleInput = document.querySelector(".toggle__input");

console.log(toggleInput.value);

// set the value of the check to on when reload the page

toggleInput.addEventListener("click", (event) => {
  console.log(event.target);
  console.log(toggleInput.interminate);
});
