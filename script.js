let names = ['Oliver Anderson', 'Maya Rodriguez', 'Ethan Bennett','Mason Wright', 'Evelyn Hayes', 'Alexander Kim', 'Kofi Mensah', 'Mei Chen', 'Aisha Khan', 'Lars Andersen', 'Sophie Müller', 'Valentina Carter', 'Matias Perez', 'Liam Foster'];
let generations = ['Silent Generation', 'Baby Boomer', 'Gen X', 'Millennial', 'Gen Z'];
let affilations = ['Democrat', 'Republican', 'Libertarian', 'Green Party', 'Constitution Party', 'Socialist', 'Democratic Socialist', 'Independent'];
let locations = ['Boise', 'Savannah','Anchorage', 'Wichita', 'Providence', 'Tucson', 'Omaha', 'Birmingham','Madison', 'Spokane', 'Baton Rouge', 'Fargo', 'Columbia', 'Eugene','Springfield'];
let genders = ['She/her', 'She/they', 'He/him', 'He/they', 'She/He/They', 'They/them', 'Prefer not to say'];
let occupations = ['Graphic Designer','Paramedic','Archaeologist','Financial Analyst','Chef', 'Librarian', 'Software Engineer','Event Planner','Welder','Speech Therapist', 'Media Manager','Astronomer', 'Electrician', 'Fitness Trainer', 'Pediatric Nurse'];
let educations = ['HS Diploma', 'BA', 'BFA', 'BS', 'MFA', 'PhD', 'MD'];
let hobbies = ['Gardening', 'Walking around', 'Sun Bathing', 'Taxidermy', 'Eavesdropping', 'Tennis', 'Chasing cats', 'Diving', 'Barbecuing', 'Hacking', 'Hoola hooping', 'Rock stacking', 'Karaoke', 'Playing monopoly', 'Mushroom foraging'];
let charTraits = ['name', 'gen','aff','loc','gender','occ','edu','hobby'];
let allArrays = [names, generations, affilations, locations, genders, occupations, educations, hobbies];

let facts = [
    { text: "Taylor Swift’s <a href='https://twitter.com/Israel/status/1714922694414598419'>body guard</a> returned to his home country, Israel, to join the IDF, after the 10/19 Hamas attack.", isTrue: false },
    { text: "Pope Francis catches media attention after wearing a <a href='https://www.tiktok.com/@niquerazzi/video/7214935132447264042?lang=en'>white puffer</a>", isTrue: false },
    { text: "Mattel is creating a line of decompostable barbies. The company plans to go plastic free by 2030", isTrue: false},
    { text: "Police forces arrayed against the pipeline protesters at the Standing Rock Indian Reservation raided and burned a protester camp", isTrue: false},
   	{ text: "Disney World was battling the Florida government in court to get a resort exemption, allowing anyone 18 and older to drink on property", isTrue: false},
   	{ text: "AnyDream is a Secretive AI Platform using Strip for Nonconsensual Pornographic Deepfakes transactions", isTrue: true},
   	{ text: "Based on a 2022 study, in Pittsburg, black motorists are 2.4 times more likely than whites to be stopped for traffic violations", isTrue: true},
   	{ text: "By the mid-2000s, nearly 90 percent of all energy consumed worldwide came from nonrenewable sources:", isTrue: true},
   	{ text: "In 2023, about $1.5 billion has been received by government through legal settlements with several companies involved in the opiod crisis", isTrue: true},
   	{ text: "It has been documented that SARS-CoV-2 (COVID) has transmitted between humans and free-ranging white-tailed deer.", isTrue: true},
];

let player1Cards = [];
let player2Cards = [];
let player1Choice = null;
let player2Choice = null;

let player1Result = '';
let player2Result = '';
let rolledNumber1;
let rolledNumber2;
let prayerResult1;
let prayerResult2;

function generatePlayers(){
	for(let i=0; i<8; i++){
		let ct1 = document.getElementById(charTraits[i] + '1');
		let ct2 = document.getElementById(charTraits[i] + '2');
		let currentArray = allArrays[i];
		let randomElement1 = currentArray[Math.floor(Math.random() * currentArray.length)];
		let randomElement2 = currentArray[Math.floor(Math.random() * currentArray.length)];
		ct1.innerHTML = randomElement1;
		ct2.innerHTML = randomElement2;
	}
}

let factHTML = document.getElementById('fact-text');
function generateFact(){
	let randomFact = facts[Math.floor(Math.random() * facts.length)];
	factHTML.innerHTML = randomFact.text;
}
setInterval(() => {factHTML.style.fontWeight = (factHTML.style.fontWeight === 'bold') ? 'normal' : 'bold';}, 1000);


document.addEventListener("keydown", (event) => {
    switch (event.key) {
        case 'a':
            changeChoice(1, 'dice');
            break;
        case 's':
            changeChoice(1, 'pray');
            break;
    }
});

document.addEventListener("keydown", (event) => {
    switch (event.key) {
        case 'k':
            changeChoice(2, 'dice');
            break;
        case 'l':
            changeChoice(2, 'pray');
            break;
    }
});

function changeChoice(player, input) {
	if(player == 1){
		if (input === 'dice') {
	        player1Choice = 'dice';
	        document.getElementById('dice1').style.border = "1.5px solid orange";
	        document.getElementById('pray1').style.border = "1px dotted black";
	    } else if (input === 'pray') {
	        player1Choice = 'pray';
	        document.getElementById('pray1').style.border = "1.5px solid orange";
	        document.getElementById('dice1').style.border = "1px dotted black";
	    }
	}

	if(player == 2){
		if (input === 'dice') {
	        player2Choice = 'dice';
	        document.getElementById('dice2').style.border = "1.5px solid orange";
	        document.getElementById('pray2').style.border = "1px dotted black";
	    } else if (input === 'pray') {
	        player2Choice = 'pray';
	        document.getElementById('pray2').style.border = "1.5px solid orange";
	        document.getElementById('dice2').style.border = "1px dotted black";
	    }
	}

	if(player1Choice != null && player2Choice != null){
		document.getElementById('main1').querySelector('p').innerHTML = "PRESS SPACE BAR TO SUBMIT CHOICES";
		document.getElementById('main2').querySelector('p').innerHTML = "PRESS SPACE BAR TO SUBMIT CHOICES";
	}
}

document.addEventListener("keydown", (event) => {
    if (event.key === ' ' || event.code === 'Space') {
        if(player1Choice != null && player2Choice != null){
        	console.log(player1Choice);
        	console.log(player2Choice);
        	document.getElementById('main1').querySelector('p').style.background = "transparent";
        	document.getElementById('main2').querySelector('p').style.background = "transparent";
        	roundResults();
        }
        else{
        	document.getElementById('main1').querySelector('p').style.background = "red";
        	document.getElementById('main2').querySelector('p').style.background = "red";
        }
    }
});

function roundResults(){
	if(player1Choice == 'dice'){
		let dice = rollDice();
		if(dice % 2 === 0){player1Result = 'believes';}
		else{player1Result = 'rejects';}
	} else if (player1Choice == 'pray'){

	}
}

function rollDice(){
	const randomDecimal = Math.random();
	const randomNumber = Math.floor(randomDecimal * 6) + 1;
	return randomNumber;
}

function pray(){
	
}

generatePlayers();
generateFact();






