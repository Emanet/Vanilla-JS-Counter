let count = 0;

// select value and buttons

const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");
console.log(btns);
btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    console.log(e.currentTarget.classList.value);
    if (e.currentTarget.classList.value == "btn decrease") {
      value.textContent = --count;
    } else if (e.currentTarget.classList.value == "btn increase") {
      value.textContent = ++count;
    } else {
      count = 0;
      value.textContent = 0;
    }
    if (count > 0) {
      value.style.color = "green";
    }
    if (count < 0) {
      value.style.color = "red";
    }
    if (count === 0) {
      value.style.color = "orange";
    }
  });
});
