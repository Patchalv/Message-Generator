//Arrays for different advice types
let signs = ['star', 'moon', 'sun', 'comet'];
let fortunes = ['terrible luck', 'bad luck', 'ok luck', 'good luck', 'great luck'];
let advice = ['go out and eat', 'not read this', 'play more', 'trust no one'];
let personalAdvice = [];

//Generate sign message
let signOutput = signs[Math.floor(Math.random() * signs.length)];
personalAdvice.push('Your sign is: ' + signOutput);
//console.log('Your sign is: ' + signOutput);

//Generate fortune message
let fortuneOutput = fortunes[Math.floor(Math.random() * fortunes.length)];
personalAdvice.push('You will have: ' + fortuneOutput);
//console.log('You will have: ' + fortuneOutput);

//Generate advice message
let adviceOutput = advice[Math.floor(Math.random() * advice.length)];
personalAdvice.push('You must: ' + adviceOutput);
//console.log('You must: ' + adviceOutput);

//Print out the three messages from the personalAdvice array
console.log(personalAdvice);