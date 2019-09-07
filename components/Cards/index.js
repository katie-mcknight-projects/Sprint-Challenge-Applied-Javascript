// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

const cardsContainer = document.querySelector(".cards-container");

function createCard(articleHeadline, imgsrc, authorName) {
  const card = document.createElement("div");
  card.classList.add("card");

  const headline = document.createElement("div");
  headline.classList.add("headline");
  headline.textContent = articleHeadline;

  const authorDiv = document.createElement("div");
  authorDiv.classList.add("author");

  const imgDiv = document.createElement("div");
  imgDiv.classList.add("img-container");

  const img = document.createElement("img");
  img.src = imgsrc;

  const author = document.createElement("span");
  author.textContent = `By ${authorName}`;

  card.append(headline, authorDiv);
  authorDiv.append(imgDiv, author);
  imgDiv.append(img);

  return card;
}

axios
  .get("https://lambda-times-backend.herokuapp.com/articles")
  .then(res => {
    const topics = res.data.articles;
    for (topic in topics) {
      topics[topic].map(article => {
        cardsContainer.append(
          createCard(article.headline, article.authorPhoto, article.authorName)
        );
      });
    }
  })
  .catch(err => console.log(err));
