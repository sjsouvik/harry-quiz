var readlineSync = require("readline-sync");
var chalk = require("chalk");

var userName = readlineSync.question(chalk.hex("#e67e22")("May I have your name?\n"));
console.log("Welcome " + chalk.black.bgWhite.bold(userName) + " to " +chalk.cyan.bgWhite.bold("Harry Potter Quiz \n"));
console.log(chalk.hex("#e67e22")("-----------------------------Let's Start the quiz---------------------------------"));

var score = 0;

// play function to check answers are correct or not
function play(question, answer, level){	
    var userAnswer = readlineSync.question(question);	

    //checking the answer given by user correct or not
    if(userAnswer.toUpperCase() === answer.toUpperCase()){
		console.log(chalk.green.bgGray.bold("Right!"));
		if(level == 1)
			score += 1;
		else
			score += 2;	
    }
    else{
		console.log(chalk.red.bgGray.bold("Wrong!"));
		console.log(chalk.green.bold("The correct answer is :", answer));
		if(level == 1)
			score -= 0.25;
		else
			score -= 0.50;	
	}

    //score after answering each question
    console.log(chalk.blue.bgWhite.bold("Current Score:"), score);
    console.log("--------------------------------------");  
}

//Highest Scores - array of objects
var highest = [{
  name: "Rito",
  score: 12.5
}, {
  name: "Ibrahim",
  score: 10.5 
}, {
  name: "Abhijit",
  score: 8.5
}]

//Array of Objects - which contains questions and answers for the quiz game
var questionsForLevel1 = [{
  question: "How did Harry survive underwater in the Triwizard Tournament? \n a.Transfiguration \n b.Bubble head charm \n c.Gillyweed \n d.Gills charm \n",
  answer: "c"
}, {
  question: "What spell is used to save Hermione from the troll in The Sorcerer's Stone? \n a.Wingardium Leviosa \n b.Stupify \n c.Petrificus Totalus \n d.Confundus \n",
  answer: "a"
}, {
  question: "What is the model of the first broom Harry ever receives? \n a.Cleansweep One \n b.Nimbus 2000 \n c.Hoover \n d.Firebolt \n",
  answer: "b"
}, {
  question: "From what King’s Cross platform does the Hogwarts Express leave? \n a.Eight and One-quarter \n b.Nine and Three-quarters \n c.Five and a Half \n d.Eleven \n",
  answer: "b"
}, {
  question: "What crime was Hagrid committed of in his time at Hogwarts? \n a.Opening the Chamber of Secrets \n b.Killing a girl \n c.Going into the Forbidden Forest \n d.Casting a spell on a professor \n",
  answer: "a"
}];

var questionsForLevel2 = [{
  question: "Who played Lord Voldemort in the movies? \n a.Jeremy Irons \n b.Tom Hiddleston \n c.Gary Oldman \n d.Ralph Fiennes \n",
  answer: "d"
}, {
  question: "The three kinds of balls used in Quidditch are Bludgers, Snitches, and…? \n a.Quaffles \n b.Wiffles \n c.Boccis \n d.Foozles \n",
  answer: "a"
}, {
  question: "What does the spell “Obliviate” do? \n a.Destroys objects \n b.Sends someone to the nether realm \n c.Removes parts of someone’s memory \n d.Makes objects invisible \n",
  answer: "c"
}, {
  question: "Who has given Harry Potter the Invisibility cloak? \n a.Dumbledore \n b.Mad-eye Moody \n c.Professor Snape \n d.Dobby \n",
  answer: "a"
}, {
  question: "What are the names of Draco Malfoy’s two cronies? \n a.Huggs and Pucey \n b.Flint and Boyle \n c.Crabbe and Goyle \n d.Pike and Zabini \n",
  answer: "c"
}];

console.log(chalk.hex("#e67e22")("*******************************Level 1********************************"));
console.log(chalk.hex("#e67e22")("Correct answer -> + 1, Wrong answer -> - 0.25"));
//calling play functions for each question and answer of Level 1
for(var i = 0; i < questionsForLevel1.length; i++)
{
    var currentQuestion = questionsForLevel1[i];
    play(chalk.black.bgCyan.bold(currentQuestion.question), currentQuestion.answer, 1);
}

console.log(chalk.hex("#e67e22")("*******************************Level 2********************************"));
console.log(chalk.hex("#e67e22")("Correct answer -> + 2, Wrong answer -> - 0.50"));
//calling play functions for each question and answer of Level 2
for(var i = 0; i < questionsForLevel2.length; i++)
{
    var currentQuestion = questionsForLevel2[i];
    play(chalk.black.bgCyan.bold(currentQuestion.question), currentQuestion.answer, 2);
}

console.log("YAY! You SCORED: ", score); //to show final score

//to print and check whether user beaten high scorer
var hasBeaten = false;
var rank = 0;
console.log("***********Top Players************");
for(var i = 0; i < highest.length; i++)
{
    var currentHighestScorer = highest[i];
    console.log("Name: ", currentHighestScorer.name);
    console.log("Score: ", currentHighestScorer.score);
    if(score > currentHighestScorer.score && !hasBeaten)
    {
		rank = i + 1;
		hasBeaten = true;    
    }
}

//if user has scored >= score of one of the top 3 players then it will show a message with rank among top 3
if(hasBeaten)
    console.log(chalk.hex("#e67e22")("******Congrats! You have beaten one of the top players in the game, Current Rank : " + rank + " ********"));