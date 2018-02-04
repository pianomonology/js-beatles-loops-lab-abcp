function theBeatlesPlay (musicians, instruments){
  var text = [];
  
  for (var i = 0; i < musicians.length; i++){
    
    text.push(musicians[i]+ ` plays ` + instruments[i]);
  }
  return text;
}
const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];

function johnLennonFacts(facts){
  var count = 0;
  while (count < facts.length){
    facts[count] = facts[count] + '!!!';
    count++;
  }
  return facts;
}

function iLoveTheBeatles(number){
  var array =[];
  var count = 0;
  do{
    array.push('I love the Beatles!');
    count++;
  } while (count < number && number <15)
  return array;
}
