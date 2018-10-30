console.log('Hello');

first = 'Cavan';
last = 'Pasek';

fullName = first + ' ' + last;

console.log('Hello, my name is '+fullName);

name = process.argv[2];
age = process.argv[3];

console.log(name+' is '+age);

if (age > 50){
  //replace this with code to run if under 50
  console.log('You are old');
} else if (age < 0) {
  //replace this with code to run if under 0
  console.log('You are not born');
} else {
  console.log('You are young');
}

if (age >= 5 && age <= 18) {
  //replace this with code to run if between 5 and 18
  console.log('You are in school');
} else {
  console.log('You are not in school');
}
