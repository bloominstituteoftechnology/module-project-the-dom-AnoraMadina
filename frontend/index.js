function moduleProject1() {
  const footer = document.querySelector('footer');
  const currentYear = new Date().getFullYear();
  footer.textContent = `© BLOOM INSTITUTE OF TECHNOLOGY ${currentYear}`;

  // 👇 WORK WORK BELOW THIS LINE 👇

  // 👉 TASK 1 - Add a "widget" class name to widgets so CSS kicks in
  //  ✨ add your code here
  // const widget = document.querySelector('.quoteoftheday');
  // widget.classList.add('widget')

  // const widget1 = document.querySelector('.corporatespeak');
  // widget1.classList.add('widget')

  // const widget2 = document.querySelector('.countdown');
  // widget2.classList.add('widget')

  // const widget3 = document.querySelector('.friends');
  // widget3.classList.add('widget')

  //or
  const widgets = document.querySelectorAll('section>div');
  widgets.forEach((widget, idx) => {
    widget.classList.add('widget')
    widget.setAttribute('tabindex', idx + 1)
  })
  


  // 👉 TASK 2 - Build a "Quote of the Day" widget
  //  ✨ add your code here
const randomDigit = Math.floor(Math.random() * quotes.length) //eslint-disable-line
const randomQuotes = quotes[randomDigit] //eslint-disable-line
//get the quotes
const quote = document.createElement('div')
const quoteText = randomQuotes.quote;
quote.textContent = quoteText;
const widgetOne = document.querySelector('.quoteoftheday');
widgetOne.appendChild(quote);
//get author and date
const authorDate = document.createElement('div');
const {author, date} = randomQuotes
authorDate.textContent = `${author} in ${date || 'an unknown date'}`
widgetOne.appendChild(authorDate)

// 👉 TASK 3 - Build a "Corporate Speak" widget
//  ✨ add your code here
const randomVerb1 = verbs[Math.floor(Math.random() * verbs.length)];//eslint-disable-line
const randomVerb2 = verbs[Math.floor(Math.random() * verbs.length)];//eslint-disable-line
const randomNoun1 = nouns[Math.floor(Math.random() * nouns.length)];//eslint-disable-line
const randomNoun2 = nouns[Math.floor(Math.random() * nouns.length)];//eslint-disable-line
const randomAdverb1 = adverbs[Math.floor(Math.random() * adverbs.length)];//eslint-disable-line
const randomAdverb2 = adverbs[Math.floor(Math.random() * adverbs.length)];//eslint-disable-line

const fullSentence = `We need to ${randomVerb1} our ${randomNoun1} ${randomAdverb1} in order to ${randomVerb2} our ${randomNoun2} ${randomAdverb2}.`;
const paragraph = document.createElement('p');
paragraph.textContent = fullSentence;
document.querySelector('.corporatespeak').appendChild(paragraph)


// 👉 TASK 4 - Build a "Countdown" widget
//  ✨ add your code here
//after 5 second must have a pop-up message Liftoff! 🚀
const countdownWidget = document.querySelector('.countdown');
let count = 5;
const countdown = document.createElement('p');
countdown.textContent = `T-minus ${count}...`;
countdownWidget.appendChild(countdown);
const id = setInterval(() => {
  if (count === 1) {
    countdown.textContent = 'Liftoff! 🚀';
    clearInterval(id);
  } else {
    count--;
    countdown.textContent = `T-minus ${count}...`;
  }
}, 1000);


// 👉 TASK 5 - Build a "Friends" widget
//  ✨ add your code here
const person = people[Math.floor(Math.random() * people.length)];//eslint-disable-line
const personParagraph = document.createElement('p');
document.querySelector('.friends').appendChild(personParagraph);
const year = person.dateOfBirth.split('-')[0];
let sentence = `${person.fname} ${person.lname} was born in ${year} and `;

if(!person.friends.length){
  sentence += 'has no friends.'
}else{
  sentence += 'is friends with '

  for (let i = 0; i < person.friends.length; i++) {
    const friendId = person.friends[i]
    const friend = people.find(p => p.id === friendId)//eslint-disable-line
    const fullName = `${friend.fname} ${friend.lname}`
    console.log(fullName)
    let isLastIdx = i === person.friends.length - 1
    let isNextToLastIdx = i === person.friends.length - 2
    if (isLastIdx) {
      sentence += `${fullName}`
    } else if (isNextToLastIdx) {
      sentence += `${fullName} and `
    } else {
      sentence += `${fullName}, `
    }
  }
}
  personParagraph.textContent = sentence;

 


// 👉 TASK 6 - Make it so user can tab through the widgets
//  ✨ add your code here
// function tabindex(){
//   document.querySelector('.quoteoftheday').tabIndex = 1;
//   document.querySelector('.corporatespeak').tabIndex = 2;
//   document.querySelector('.countdown').tabIndex = 3;
//   document.querySelector('.friends').tabIndex = 4;
// }
// tabindex();

  // 👆 WORK WORK ABOVE THIS LINE 👆
}

// ❗ DO NOT WORK BELOW THIS LINE
// ❗ DO NOT WORK BELOW THIS LINE
// ❗ DO NOT WORK BELOW THIS LINE
if (typeof module !== 'undefined' && module.exports) module.exports = { moduleProject1 }
else moduleProject1()
