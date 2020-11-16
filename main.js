/* 
“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”
― Marilyn Monroe
“You've gotta dance like there's nobody watching,
Love like you'll never be hurt,
Sing like there's nobody listening,
And live like it's heaven on earth.”
― William W. Purkey

“In three words I can sum up everything I've learned about life: it goes on.”
― Robert Frost

“To live is the rarest thing in the world. Most people exist, that is all.”
― Oscar Wilde

“There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle.”
― Albert Einstein

“I may not have gone where I intended to go, but I think I have ended up where I needed to be.”
― douglas adams, The Long Dark Tea-Time of the Soul

“Today you are You, that is truer than true. There is no one alive who is you're than You.”
― Dr. Seuss, Happy Birthday to You!

“Life isn't about finding yourself. Life is about creating yourself.”
― George Bernard Shaw

“When someone loves you, the way they talk about you is different. You feel safe and comfortable.”
― Jess C. Scott, The Intern
*/


let btn = document.getElementById('btn');
let output = document.getElementById('output');

const genre = [
  '“When someone loves you, the way they talk about you is different. You feel safe and comfortable.”',
  '“Life is not about finding yourself. Life is about creating yourself.”',
  '“Today you are You, that is truer than true. There is no one alive who is yonder than You.”',
  '“I may not have gone where I intended to go, but I think I have ended up where I needed to be.”',
  '“There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle.”',
'“To live is the rarest thing in the world. Most people exist, that is all.”',
'“In three words I can sum up everything I have learned about life: it goes on.”',
'“You have gotta dance like there is nobody watching Love like you will never be hurt Sing like there is nobody listening And live like it is heaven on earth.”',
'“I am selfish impatient and a little insecure. I make mistakes. I am out of control and at times hard to handle. But if you can not handle me at my worst. then you sure as hell do not deserve me at my best.”'

]
const writers = [
  '-Jess C. Scott, The Intern',
  '-George Bernard Shaw',
   '-Dr. Seuss, Happy Birthday to You!',
   '-douglas adams, The Long Dark Tea-Time of the Soul',
   '-Albert Einstein',
   '-Oscar Wilde',
   '-Robert Frost',
   ' -William W. Purkey',
   '-Marilyn Monroe'
]

btn.addEventListener('click', function(){
  var randomGenre = genre[Math.floor(Math.random() * genre.length)]
  var randomWriters = writers[Math.floor(Math.random() * writers.length)]
  output.innerHTML = randomGenre + randomWriters;
});