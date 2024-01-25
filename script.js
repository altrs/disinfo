let names = ['Oliver Anderson', 'Maya Rodriguez', 'Ethan Bennett','Mason Wright', 'Evelyn Hayes', 'Alexander Kim', 'Kofi Mensah', 'Mei Chen', 'Aisha Khan', 'Lars Andersen', 'Sophie Müller', 'Valentina Carter', 'Matias Perez', 'Liam Foster'];
let generations = ['Silent Generation', 'Boomer', 'Gen X', 'Millennial', 'Gen Z'];
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

let randomFact;

let player1Cards = [];
let player2Cards = [];
let player1Choice = null;
let player2Choice = null;

let resultsShowing = false;
let player1Result = '';
let player2Result = '';
let rolledNumber1;
let rolledNumber2;
let prayerResult1;
let prayerResult2;
let resultText;
let resultText2;

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
	randomFact = facts[Math.floor(Math.random() * facts.length)];
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
    } else if (event.key === 'b') {
    	reset();
    	console.log("reset");
    }
});

let intervalId;
function roundResults(){

	if(resultsShowing == false){

		resultsShowing = true;
		intervalId = setInterval(toggleText, 1000);

		if(player1Choice == 'dice'){
			document.getElementById('dice1').querySelector('img').style.display = 'none';
			document.getElementById('dice1').querySelector('p').style.display = 'none';
			resultText = document.createElement('p');
			resultText.id = "rt1";

			let dice = rollDice();
			if(dice % 2 === 0){
				player1Result = 'believes';
				resultText.textContent = `ROLLED: ${dice}.` +  'Even. Your character believes the given statment.';
				resultText.style.margin = '20px';
				document.getElementById('dice1').appendChild(resultText);

				player1Cards.push(randomFact);
				document.getElementById('cc1').innerHTML = `${player1Cards.length}`;
				console.log(player1Cards);
			}
			else{
				player1Result = 'rejects';
				resultText.textContent = `ROLLED: ${dice}.` +  'Odd. Your character rejects the given statment.';
				resultText.style.margin = '20px';
				document.getElementById('dice1').appendChild(resultText);
			}
		} else if (player1Choice == 'pray'){
			document.getElementById('pray1').querySelector('img').style.display = 'none';
			document.getElementById('pray1').querySelector('p').style.display = 'none';
			resultText = document.createElement('p');
			resultText.id = "rt1";

			player1Result = pray();
			if(player1Result == 'answered'){
				//gif change

				if(randomFact.isTrue == false){
					resultText.textContent = 'YOUR PRAYERS HAVE BEEN ANSWERED! THE SALT SHAKER HAS FALLEN, BESTOWING UPON YOUR CHARACTER A GLIMPSE OF CLARITY. THE STATEMENT IS FALSE, AND YOUR CHARACTER REJECTS IT. THE SALT SHAKER HAS ALSO CLEANSED YOUR CHARACTERS MIND, ANY FALSE STATMENTS PREVIOUSLY COLLECTED HAVE BEEN PURGED.';
					resultText.style.margin = '10px';
					resultText.style.fontSize = '0.55vw';
					document.getElementById('pray1').appendChild(resultText);

					//clear array of false facts
				}else if(randomFact.isTrue == true){
					resultText.textContent = 'YOUR PRAYERS HAVE BEEN ANSWERED! THE SALT SHAKER HAS FALLEN, BESTOWING UPON YOUR CHARACTER A GLIMPSE OF CLARITY. THE STATEMENT IS TRUE, AND YOUR CHARACTER BELIEVES IT.';
					resultText.style.margin = '10px';
					resultText.style.fontSize = '0.5vw';
					document.getElementById('pray1').appendChild(resultText);

					player1Cards.push(randomFact);
					document.getElementById('cc1').innerHTML = `${player1Cards.length}`;
					console.log(player1Cards);
				}

			} else if (player1Result == 'ignored'){
				resultText.textContent = 'SORRY. YOUR PRAYERS HAVE NOT BEEN ANSWERED TODAY.';
				resultText.style.margin = '20px';
				document.getElementById('pray1').appendChild(resultText);
			}
		}

		if(player2Choice == 'dice'){
			document.getElementById('dice2').querySelector('img').style.display = 'none';
			document.getElementById('dice2').querySelector('p').style.display = 'none';
			resultText2 = document.createElement('p');
			resultText2.id = "rt2";

			let dice = rollDice();
			if(dice % 2 === 0){
				player2Result = 'believes';
				resultText2.textContent = `ROLLED: ${dice}.` +  'Even. Your character believes the given statment.';
				resultText2.style.margin = '20px';
				document.getElementById('dice2').appendChild(resultText2);

				player2Cards.push(randomFact);
				document.getElementById('cc2').innerHTML = `${player2Cards.length}`;
				console.log(player2Cards);
			}
			else{
				player2Result = 'rejects';
				resultText2.textContent = `ROLLED: ${dice}.` +  'Odd. Your character rejects the given statment.';
				resultText2.style.margin = '20px';
				document.getElementById('dice2').appendChild(resultText2);
			}
		} else if (player2Choice == 'pray'){
			document.getElementById('pray2').querySelector('img').style.display = 'none';
			document.getElementById('pray2').querySelector('p').style.display = 'none';
			resultText2 = document.createElement('p');
			resultText2.id = "rt2";

			player2Result = pray();
			if(player2Result == 'answered'){
				//gif change

				if(randomFact.isTrue == false){
					resultText2.textContent = 'YOUR PRAYERS HAVE BEEN ANSWERED! THE SALT SHAKER HAS FALLEN, BESTOWING UPON YOUR CHARACTER A GLIMPSE OF CLARITY. THE STATEMENT IS FALSE, AND YOUR CHARACTER REJECTS IT. THE SALT SHAKER HAS ALSO CLEANSED YOUR CHARACTERS MIND, ANY FALSE STATMENTS PREVIOUSLY COLLECTED HAVE BEEN PURGED.';
					resultText2.style.margin = '10px';
					resultText2.style.fontSize = '0.55vw';
					document.getElementById('pray2').appendChild(resultText2);

					//clear array of false facts
				}else if(randomFact.isTrue == true){
					resultText2.textContent = 'YOUR PRAYERS HAVE BEEN ANSWERED! THE SALT SHAKER HAS FALLEN, BESTOWING UPON YOUR CHARACTER A GLIMPSE OF CLARITY. THE STATEMENT IS TRUE, AND YOUR CHARACTER BELIEVES IT.';
					resultText2.style.margin = '10px';
					resultText2.style.fontSize = '0.5vw';
					document.getElementById('pray2').appendChild(resultText2);

					player2Cards.push(randomFact);
					document.getElementById('cc2').innerHTML = `${player2Cards.length}`;
					console.log(player2Cards);
				}

			} else if (player2Result == 'ignored'){
				resultText2.textContent = 'SORRY. YOUR PRAYERS HAVE NOT BEEN ANSWERED TODAY.';
				resultText2.style.margin = '20px';
				document.getElementById('pray2').appendChild(resultText2);
			}


		}

		console.log(player1Result);
	  	console.log(player2Result);

	}

}

function rollDice(){
	let randomDecimal = Math.random();
	let randomNumber = Math.floor(randomDecimal * 6) + 1;
	return randomNumber;
}

function pray(){
	let randomValue = Math.random();
 	return randomValue < 0.1 ? 'ignored' : 'answered';
}

function reset() {
    player1Result = '';
    player2Result = '';
    player1Choice = null;
    player2Choice = null;
    resultsShowing = false;
    document.getElementById('rt1').remove();
    document.getElementById('rt2').remove();
    clearInterval(intervalId);

    // Reset div styles
    document.getElementById('dice1').querySelector('img').style.display = 'flex';
    document.getElementById('dice1').querySelector('p').style.display = 'block';
    document.getElementById('pray1').querySelector('img').style.display = 'flex';
    document.getElementById('pray1').querySelector('p').style.display = 'block';

    document.getElementById('dice2').querySelector('img').style.display = 'flex';
    document.getElementById('dice2').querySelector('p').style.display = 'block';
    document.getElementById('pray2').querySelector('img').style.display = 'flex';
    document.getElementById('pray2').querySelector('p').style.display = 'block';

    // Reset div borders
    document.getElementById('dice1').style.border = "1px dotted black";
    document.getElementById('pray1').style.border = "1px dotted black";
    document.getElementById('dice2').style.border = "1px dotted black";
    document.getElementById('pray2').style.border = "1px dotted black";

	document.getElementById('dice1').querySelector('p').style.display = 'flex';
	document.getElementById('dice2').querySelector('p').style.display = 'flex';
	document.getElementById('pray1').querySelector('p').style.display = 'flex';
	document.getElementById('pray2').querySelector('p').style.display = 'flex';

    // Reset paragraph content
    document.getElementById('main1').querySelector('p').innerHTML = "MAKE YOUR CHOICE:";
    document.getElementById('main2').querySelector('p').innerHTML = "MAKE YOUR CHOICE:";
}



let isResultsText = true;
function toggleText() {
    const main1Paragraph = document.getElementById('main1').querySelector('p');
    const main2Paragraph = document.getElementById('main2').querySelector('p');
    if (isResultsText) {
        main1Paragraph.innerHTML = "PRESS B TO CONTINUE";
        main2Paragraph.innerHTML = "PRESS B TO CONTINUE";
    } else {
        main1Paragraph.innerHTML = "RESULTS";
        main2Paragraph.innerHTML = "RESULTS";
    }
    isResultsText = !isResultsText;
}

generatePlayers();
generateFact();






