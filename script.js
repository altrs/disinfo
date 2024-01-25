let names = ['Oliver Anderson', 'Maya Rodriguez', 'Ethan Bennett','Mason Wright', 'Evelyn Hayes', 'Alexander Kim', 'Kofi Mensah', 'Mei Chen', 'Aisha Khan', 'Lars Andersen', 'Sophie Müller', 'Valentina Carter', 'Matias Perez', 'Liam Foster'];
let generations = ['Silent Generation', 'Baby Boomer', 'Generation X', 'Millennials', 'Generation Z'];
let affilations = ['Democrat', 'Republican', 'Libertarian', 'Green Party', 'Constitution Party', 'Socialist', 'Democratic Socialist', 'Independent'];
let locations = ['Boise', 'Savannah','Anchorage', 'Wichita', 'Providence', 'Tucson', 'Omaha', 'Birmingham','Madison', 'Spokane', 'Baton Rouge', 'Fargo', 'Columbia', 'Eugene','Springfield'];
let genders = ['She/her', 'She/they', 'He/him', 'He/they', 'She/He', 'She/He/They', 'They/them', 'Prefer not to say'];
let occupations = ['Graphic Designer','Paramedic','Archaeologist','Financial Analyst','Chef', 'Librarian', 'Software Engineer','Event Planner','Welder','Speech Therapist', 'Media Manager','Astronomer', 'Electrician', 'Fitness Trainer', 'Pediatric Nurse'];
let educations = ['HS Diploma', 'BA', 'BFA', 'BS', 'MFA', 'PhD', 'MD'];
let hobbies = ['Gardening', 'Walking around', 'Sun Bathing', 'Taxidermy', 'Eavesdropping', 'Tennis', 'Chasing cats', 'Diving', 'Barbecuing', 'Hacking', 'Hoola hooping', 'Rock stacking', 'Karaoke', 'Playing monopoly', 'Mushroom foraging'];
let charTraits = ['name', 'gen','aff','loc','gender','occ','edu','hobby'];
let allArrays = [names, generations, affilations, locations, genders, occupations, educations, hobbies];

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

generatePlayers();