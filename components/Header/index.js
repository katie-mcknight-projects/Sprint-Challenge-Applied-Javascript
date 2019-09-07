// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

const container = document.querySelector(".header-container");

function Header() {
  const headerDiv = document.createElement("div");
  headerDiv.classList.add("header");

  const date = document.createElement("span");
  date.classList.add("date");
  date.textContent = "SMARCH 28, 2019";

  const title = document.createElement("h1");
  title.textContent = "Lambda Times";

  const temp = document.createElement("span");
  temp.classList.add("temp");
  temp.textContent = "98°";

  headerDiv.append(date, title, temp);

  return headerDiv;
}

container.append(Header());
