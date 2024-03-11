const nurseryRyhme = ['Twinkle twinkle little star', 'Grand Old Duke of York', 'Sleeping Bunnies', 'Incey wincey spider', 'Old MacDonald had a farm'];
const instruments = ['tamborine', 'maraca', 'piano', 'triangle'];
const action = ['march', 'lie down', 'clap hands', 'wiggle your fingers'];

//console.log(nurseryRyhme,instruments,action); testing code

const generateRandomNurseryRyhme = () => {
    let randomNurseryRhyme = nurseryRyhme[Math.floor(Math.random()*nurseryRyhme.length)];
    let randominstrument = instruments[Math.floor(Math.random()*instruments.length)];
    let randomaction = action[Math.floor(Math.random()*action.length)];
    console.log(`You should sing ${randomNurseryRhyme}`);
    console.log(`You should use a ${randominstrument} whilst you sing`);
    console.log(`Remember to ${randomaction} as you sing!`);
}

generateRandomNurseryRyhme(); //run the generator