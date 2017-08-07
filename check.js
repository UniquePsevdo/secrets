/*
console.log('exp ' , Math.round(Date.now() / (1000 + 5 * 60 * 60)));
console.log('now ' , Math.round(Date.now() / (1000)));
console.log('dif ' , Math.round(Date.now() / (1000 + 5 * 60 * 60)) - Math.round(Date.now() / (1000)));
*/
console.log(Math.round((Date.now()/1000) + 65*60));
console.log(Math.round((Date.now() / 1000 + 65*60) - Date.now()/1000));