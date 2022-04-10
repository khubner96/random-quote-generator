/************************************************
Treehouse Techdegree:
Project 4 - Random Quote Generator

/***
 * `quotes` array
***/

const quotes = [
  //creates an array of quotes
  {quote: 'Fortune favors the bold.', source: 'Virgil', year: '161 B.C.', tag:'#Classic', section:'Wisdom'},
  {quote: 'I think, therefore I am.', source: 'Rene Descartes', tag:'#Classic',section:'Inspiration'},
  {quote: 'I came, I saw, I conquered.', source:'Julius Caesar', section:'Inspiration'},
  {quote: 'When life gives you lemons, you make lemonade.', source:'Elbert Hubbard',section:'Wisdom'},
  {quote: 'Practice makes perfect.', source: 'Vince Lombardi', section:'Wisdom'},
  {quote: 'Beware; for I am fearless, and therefore powerful', source:'Mary Shelley', citation:'Frankenstein', section:'Inspiration'}
];
console.log(quotes);
//shows array of quotes within the console

const colors = [
  //creates an array of colors
  `(255,179,186)`,
   `(255,223,186)`,
   `(255,255,186)`,
   `(186,255,201)`,
  `(186,255,255)`
];
console.log(colors);
//shows array of colors within the console

/***
 * `getRandomQuote` function
***/

function getRandomQuote() {
  return quotes[Math.floor(Math.random()*quotes.length)];
}
//generates a random quote
function getRandomColor() {
  return colors[Math.floor(Math.random()*colors.length)];
}
//generates a random color
console.log(getRandomQuote());
//shows random quote generated onto the console

console.log(getRandomColor());
//shows random color in the console

/***
 * `printQuote` function
***/


function printQuote() {
  //creates a function that grabs the random generated quote and sets each section of it
  let html =``;
  //creates html variable
  reloadColor();
    // runs the reloadColor Function
  let printRandomQuote = getRandomQuote();
  //creates variable printRandomQuote which runs the random quote generator function
  html += `<p class="quote">` + printRandomQuote.quote + `</p>`;
  //puts the quote into paragraphs
  html += `<p class="source">` +printRandomQuote.source;
  //puts the quote source under the quote in another paragraph
  if ("citation" in printRandomQuote) {
    html+= '<span class="citation">' + printRandomQuote.citation + `</span>`;
  }
  if ("year" in printRandomQuote) {
    html += `<span class="year">` + printRandomQuote.year + `</span>`+`</p>`;
    //if the object contains a year property it will include that as well
  }
  if ("section" in printRandomQuote) {
    html += `<p>` + `<span class="section">` + printRandomQuote.section + `</span>`;
  }
  if ("tag" in printRandomQuote) {
    html +=  `<span class="tag">` + printRandomQuote.tag + `</span>`;
  }
  return html;
  //this will return the whole html line that has been added onto, without this the html won't return back. It will also run the reloadingcolor function
}

window.setInterval(() => {
  document.getElementById('quote-box').innerHTML = printQuote();
}, 10000);
//displays the html line created in the 'quote-box' onto the webpage and runs printQuote every 10 seconds

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

function reloadColor() {
  getRandomColor();
  document.body.style.backgroundColor = `rgb${getRandomColor()}`;
}
//creates line of code for background-color
console.log(reloadColor());
//changes the background color of the body
document.getElementById("load-quote").addEventListener("click", function() {
  //sets the function printQuote() onto the "load-quote" which is the button to get a new quote
        document.getElementById('quote-box').innerHTML = printQuote();
    })
