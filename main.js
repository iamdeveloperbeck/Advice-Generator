const quoteBtn = document.getElementById('quote-btn');
const output = document.getElementById('quotes');
const quoteCount = document.getElementById('counter');

const quotes = [
    '"If there are 100 people, how many would be more patient than you?"',
    '"What part of the human face do you look at when you talk to someone?"',
    '"What book or movie character can you see in your own life?"',
    '"Have you ever had to complain to management? Why?"',
    '"What type of exercise do you like most?"',
    '"Whats your famous person story?"',
    '"How do you usually react if you receive bad service?"',
    '"What is the most interesting class youve ever taken?"',
    '"What would you be really good at if it wasnt for one thing?"',
    '"What situation is sure to make you cry?"',
    '"Whats the last thing that you gave up on? Are you happy or disappointed?"',
    '"Whats the best trick someone has ever played on you?"',
    '"Whats the most recent interesting conversation you had?"',
    '"To fucer are her yopaman men lyuboyini"'
];

const counter = [
    "142",
    "125",
    "18",
    "25",
    "45",
    "32",
    "8",
    "11",
    "56",
    "224",
    "144",
    "153",
    "88",
    "47",
];

quoteBtn.addEventListener('click', function() {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    output.innerHTML = randomQuote;
    const countQuote = counter[Math.floor(Math.random() * counter.length)];
    quoteCount.innerHTML = countQuote;
});