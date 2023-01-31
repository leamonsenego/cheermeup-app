const quoteChoices = [
    {quote: "'You only live once, but if you do it right, once is enough.'", author: "Mae West"},
    {quote:"'Everything that is meant for you will feel like a deep exhale, as though you are returning home to a place you forgot existed.'", author: "Brianna West"},
    {quote: "'You have been assigned this mountain so you can show others that it can be moved.'", author: "Mel Robbins"},
	{quote: "'One day you will be grateful you kept going. Stay for that day.'", author:"Brianna West"},
	{quote: "'Trust the timing of your life. Things are unfolding in perfect order.'", author:"Amber Lyon"},
	{quote: "'If people are doubting how far you can go, go so far that you can’t hear them anymore.'",author: "Michele Ruiz"},
	{quote:"'Trust yourself. You know more than you think you do.'",author:"Benjamin Spock"},
	{quote:"'When one door of happiness closes, another opens; but often we look so long at the closed door that we do not see the one which has been opened for us.'", author:"Helen Keller"},
	{quote: "'Keep your eyes on the stars, and your feet on the ground.'", author: "Theodore Roosevelt"},
	{quote: "'Twenty years from now you will be more disappointed by the things that you didn't do than by the ones you did do. So throw off the bowlines. Sail away from the safe harbor. Catch the trade winds in your sails. Explore. Dream. Discover.'",author: "H. Jackson Brown Jr., P.S. I Love You"},
 {quote: "'Sometimes when you’re in a dark place you think you’ve been buried but you’ve actually been planted.'", author: "Christine Caine"},
  {quote: "'Don’t be pushed around by the fears in your mind. Be led by the dreams in your heart.'", author: "Roy T. Bennett"},
	];

const button = document.querySelector(".click-here");

const generateQuote = () => {
  const randomQuote = Math.floor(Math.random() * quoteChoices.length);

  const randomItem = quoteChoices[randomQuote];

  button.innerHTML = `${randomItem.quote} -  ${randomItem.author}`
};

button.addEventListener("click", generateQuote);
