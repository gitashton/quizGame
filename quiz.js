// quiz begins, no answers correct 
var correct = 0;

// ask questions
var answer1 = prompt("Name a programming language that's also a gem");
if ( answer1.toUpperCase() === 'RUBY' ) {
  correct += 1;
}
var answer2 = prompt("Name a programming language that's also a snake");
if ( answer2.toUpperCase() === 'PYTHON' ) {
  correct += 1;
}
var answer3 = prompt("Name the programming language used to create Minecraft");
if ( answer3.toUpperCase() === 'JAVA' ) {
  correct += 1;
}
var answer4 = prompt("Name the programming language used to create this program");
if ( answer4.toUpperCase() === 'JAVASCRIPT' ) {
  correct += 1;
}
var answer5 = prompt("Name the language used to create scripts in ROBLOX");
if ( answer5.toUpperCase() === 'LUA' ) {
  correct += 1;
}

// output results 
document.write("<p>You got " + correct + " out of 5 questions correct.</p>");

// output rank
if ( correct === 5 ) {
  document.write("<p><strong>You got all questions right. Here, have a fake gold crown.</strong></p>");
  document.write('<img src="http://www.nestdallas.com/product_images/g/067/Selletti-MY-Crown-Gold_Nest_10061__56701_zoom.jpg" alt="Gold crown" style="max-width: 40px;">');
}
