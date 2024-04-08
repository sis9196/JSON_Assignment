// let myJSON = {
// 	"title": "The Inheritance Game",
// 	"picture_url": "https://m.media-amazon.com/images/I/71meDssK2bL._AC_UF1000,1000_QL80_.jpg",
// 	"color": "#177245",
// 	"favorite_font": "Sans Serif",
// 	"description": "Avery Grambs has a plan for a better future: survive high school, win a scholarship, and get out. But her fortunes change in an instant when billionaire Tobias Hawthorne dies and leaves Avery virtually his entire fortune. The catch? Avery has no idea why -- or even who Tobias Hawthorne is. To receive her inheritance, Avery must move into sprawling, secret passage-filled Hawthorne House, where every room bears the old man's touch -- and his love of puzzles, riddles, and codes. Unfortunately for Avery, Hawthorne House is also occupied by the family that Tobias Hawthorne just dispossessed. This includes the four Hawthorne grandsons: dangerous, magnetic, brilliant boys who grew up with every expectation that one day, they would inherit billions. Heir apparent Grayson Hawthorne is convinced that Avery must be a conwoman, and he's determined to take her down. His brother, Jameson, views her as their grandfather's last hurrah: a twisted riddle, a puzzle to be solved. Caught in a world of wealth and privilege, with danger around every turn, Avery will have to play the game herself just to survive.",	
// };


let jsonDatabase = [
{
	"title": "Book 1: The Inheritance Games",
	"picture_url": "https://m.media-amazon.com/images/I/71meDssK2bL._AC_UF1000,1000_QL80_.jpg",
	"color": "#7BA05B",
	"favorite_font": "Sans Serif",
	"description": "Avery Grambs has a plan for a better future: survive high school, win a scholarship, and get out. But her fortunes change in an instant when billionaire Tobias Hawthorne dies and leaves Avery virtually his entire fortune. The catch? Avery has no idea why -- or even who Tobias Hawthorne is. To receive her inheritance, Avery must move into sprawling, secret passage-filled Hawthorne House, where every room bears the old man's touch -- and his love of puzzles, riddles, and codes. Unfortunately for Avery, Hawthorne House is also occupied by the family that Tobias Hawthorne just dispossessed. This includes the four Hawthorne grandsons: dangerous, magnetic, brilliant boys who grew up with every expectation that one day, they would inherit billions. Heir apparent Grayson Hawthorne is convinced that Avery must be a conwoman, and he's determined to take her down. His brother, Jameson, views her as their grandfather's last hurrah: a twisted riddle, a puzzle to be solved. Caught in a world of wealth and privilege, with danger around every turn, Avery will have to play the game herself just to survive.",
},
{
	"title": "Book 2: The Hawthorne Legacy",
	"picture_url": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1610493390i/50531218.jpg",
	"color": "#1164B4",
	"favorite_font": "Sans Serif",
	"description": "The Inheritance Games ended with a bombshell, and now heiress Avery Grambs has to pick up the pieces and find the man who might hold the answers to all of her questions - including why Tobias Hawthorne left his entire fortune to Avery, a virtual stranger, rather than to his own daughters or grandsons. Thanks to a DNA test, Avery knows that she's not a Hawthorne by blood, but clues pile up hinting at a deeper connection to the family than she had ever imagined. As the mystery grows and the plot thickens, Grayson and Jameson, the enigmatic and magnetic Hawthorne grandsons, continue to pull Avery in different directions. And there are threats lurking around every corner, as adversaries emerge who will stop at nothing to see Avery out of the picture - by any means necessary.",
},
{
	"title": "Book 3: The Final Gambit",
	"picture_url":"https://m.media-amazon.com/images/I/91bgAVuRzFL._AC_UF1000,1000_QL80_.jpg",
	"color":"#CC3333",
	"favorite_font":"Sans Serif",
	"description":"To inherit billions, all Avery Kylie Grambs has to do is survive a few more weeks living in Hawthorne House. The paparazzi are dogging her every step. Financial pressures are building. Danger is a fact of life. And the only thing getting Avery through it all is the Hawthorne brothers. Her life is intertwined with theirs. She knows their secrets and they know her. But as the clock ticks down to the moment when Avery will become the richest teenager on the planet, trouble arrives in the form of a visitor who needs her help—and whose presence in Hawthorne House could change everything. It soon becomes clear that there is one last puzzle to solve, and Avery and the Hawthorne brothers are drawn into a dangerous game against an unknown and powerful player.",
},
{
	"title":"Book 4: The Brothers Hawthorne",
	"picture_url":"https://m.media-amazon.com/images/I/91jXTr5kePL._AC_UF1000,1000_QL80_.jpg",
	"color":"#32174D",
	"favorite_font":"Sans Serif",
	"description":"Grayson Hawthorne was raised as the heir apparent to his billionaire grandfather, taught from the cradle to put family first. Now the great Tobias Hawthorne is dead and his family disinherited, but some lessons linger. When Grayson’s half-sisters find themselves in trouble, he swoops in to do what he does best: take care of the problem—efficiently, effectively, mercilessly. And without getting bogged down in emotional entanglements. Jameson Hawthorne is a risk-taker, a sensation-seeker, a player of games. When his mysterious father appears and asks for a favor, Jameson can’t resist the challenge. Now he must infiltrate London’s most exclusive underground gambling club, which caters to the rich, the powerful, and the aristocratic, and win an impossible game of greatest stakes. Luckily, Jameson Hawthorne lives for impossible. Drawn into twisted games on opposite sides of the globe, Grayson and Jameson—with the help of their brothers and the girl who inherited their grandfather’s fortune—must dig deep to decide who they want to be and what each of them will sacrifice to win.",
}
	]

function createElementProper(incomingJSON) {
	let newContentElement = document.createElement("DIV");
	newContentElement.style.backgroundColor = incomingJSON['color'];
	newContentElement.style.fontFamily = incomingJSON['favorite_font'];
	newContentElement.classList.add('contentItem');

	
	let titleElement = document.createElement("H3");
	titleElement.textContent = incomingJSON['title'];
	newContentElement.appendChild(titleElement);

	let pictureElement = document.createElement("IMG");
	pictureElement.src = incomingJSON['picture_url'];
	newContentElement.appendChild(pictureElement);

	let descriptionElement = document.createElement("P");
	descriptionElement.textContent = incomingJSON['description'];
	newContentElement.appendChild(descriptionElement);
	
	document.body.appendChild(newContentElement);
}

// createElementProper(myJSON);

for (var i = 0; i < jsonDatabase.length; i++){
	createElementProper(jsonDatabase[i]);
}





