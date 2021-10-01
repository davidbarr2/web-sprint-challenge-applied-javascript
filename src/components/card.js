  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>

import axios from "axios"

  //
const Card = (article) => {
  // create elements
  const cardDiv = document.createElement('div')
  const headlineDiv = document.createElement('div')
  const authorDiv = document.createElement('div')
  const imgContainer = document.createElement('div')
  const authorImg = document.createElement('img')
  const authorName = document.createElement('span')

  // assign classes
  cardDiv.classList.add('card')
  headlineDiv.classList.add('headline')
  authorDiv.classList.add('author')
  imgContainer.classList.add('img-container')

  // insert content
  headlineDiv.textContent = article.headline
  authorImg.setAttribute('src', article.authorPhoto)
  authorName.textContent = `By ${article.authorName}`

  // append children
  cardDiv.appendChild(headlineDiv)
  cardDiv.appendChild(authorDiv)
    authorDiv.appendChild(imgContainer)
      imgContainer.appendChild(authorImg)
    authorDiv.appendChild(authorName)
  
    return cardDiv
}

  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5000/api/articles` (test it in Postman/HTTPie!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
const cardAppender = (selector) => {
  const parentElement = document.querySelector(selector)
  axios.get(`http://localhost:5000/api/articles`)
    .then( res => {
      const articlesArray = Array.from(res.data.articles)
      console.log(res.data.articles)
      // articlesArray.forEach( topic => {
      //   topic.forEach( article => {
      //     parentElement.appendChild(Card(article))
      //   })
      // });
    })
    .catch(err => console.log(err))
}

export { Card, cardAppender }
