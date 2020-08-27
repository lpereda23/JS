
// First getting Kanye quotes

//Finding the div where quote will be placed and declaring it as a variable
let quotesDiv = document.getElementById('quotes');

//sending a GET request to the KANYE API.
fetch('https://api.kanye.rest')
.then(res => res.json())//fetch returns an object we call jsonto parse response text as JSON
.then(quote => { //Finally receive JSON object that we can manipulate, set it to quote
quotesDiv.innerHTML += `<p> ${quote.quote} </p>` //appending to quotesDiv by innerHTML property
});

//Now getting cat pics

//Grabbing button by finding id we have it then adding an event addEventListener
//  which takes two arguments: the event, a callback function to handle the event
let catButton = document.getElementById('give-cat');
catButton.addEventListener("click", evt=>{

  //Grabbing the place where the cat pic should by id we gave in index.html
  let catDiv = document.getElementById('cat-pic');

  //Again making a GET request. In the last .then we do a forEAch method on the
  //  JSON response since it is an array
  fetch('https://api.thecatapi.com/v1/images/search?')
  .then(res => res.json())
  .then(cats =>{
    cats.forEach(cat=>{ //Inserting a header
      catDiv.innerHTML = `<h3>Here is this cat wishing you the bestest day! </h3>
      <img src="${cat.url}" alt="kitty" />`
    })
  })

})
