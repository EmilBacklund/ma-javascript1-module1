const cats = [
  {
    name: "Blob",
    age: 10,
  },
  {
    name: "Harold",
  },
  {
    name: "Blurt",
    age: 21,
  },
];

// Question 1

const cat = {
  complain: function () {
    console.log("Meow");
  },
};

// Question 2

const heading = document.querySelector("h3");

heading.innerHTML = "Updated heading";

// Question 3

heading.style.fontSize = "2em";

// Question 4

heading.classList.add("subheading");

// Question 5

const paragraphs = document.querySelectorAll("p");

for (let i = 0; i < paragraphs.length; i++) {
  paragraphs[i].style.color = "red";
}

// Question 6

const resultsContainer = document.querySelector(".results");

resultsContainer.innerHTML = `<p>New paragraph</p>`;
resultsContainer.style.backgroundColor = "yellow";

// Question 7

function logNameProperty(list) {
  for (let i = 0; i < list.length; i++) {
    console.log(list[i].name);
  }
}

logNameProperty(cats);

// Question 8

function createCats(cats) {
  let html = "";

  for (let i = 0; i < cats.length; i++) {
    let catName = cats[i].name;
    let catAge = cats[i].age;

    if (!catAge) {
      catAge = "Age Unknown";
    }
    html += `<div>
    <h5>${catName}</h5>
    <p>${catAge}</p>
    </div>`;
  }
  return html;
}

const catContainer = document.querySelector(".cat-container");
catContainer.innerHTML = createCats(cats);
