var min = 1;
var max = 25;

/* I did 25 Jokes so the min and max will be 25*/

//Lets create a random number generator to stringify JSON Object

var randomNumber = Math.floor(Math.random() * (min + max)) - min;

// I already have the 25 jokes in a JSON array so lets use it inside Container div

var Container = document.getElementById('Container');
var JokesContainer = document.getElementById('JokesContainer');

var JsonJoke = { 
    Jokes : ["Mother: Who do you like more, me or your dad. Liam: I like you both. Mother: Ok, if I go to america and your dad goes to paris, where will you go Liam: I will go to paris. Mother: That’s means you like dad more Liam: No, its because i like paris Mother: Ok, fine, if I go to paris and your dad goes to america, where will you go. Liam: I will go to America. Mother: Why Liam: Because I have already gone to paris.","The Pope and Donald Trump are on stage in front of a huge crowd.","What do you call a bee that lives in America. A USB","Donald Trump wants to ban the sale of pre-shredded cheese. – He wants to make America grate again.","If Hillary Clinton and Donald Trump are in a boat and it capsizes. Who survives? – America.","Fortnite is like America… At one time it was good and free. Now it’s neither.","A turtle is crossing the road when he’s mugged by two snails. When the police show up, they ask him what happened. The shaken turtle replies, “I don’t know. It all happened so fast.”","What’s the best thing about Switzerland? I don’t know, but the flag is a big plus.","What do a beach and an American beer have in common? They're both close to water!","Why are there no more minerals on the West Coast? Because they Oregon.","What happened to the American who went to the hospital with a broken leg? He went broke.","Which country and jazz instrument does Donald Trump like to play? A Trump-et.","Why did the man get arrested for shooting a sick bald eagle? Because it's ill-eagle.","Why are there hardly any knock knock jokes about America? Because freedom rings!","Why is everybody in Canada a lot cooler than the USA? Because of their winter.","Which part of America has four eyes but still can't read? Mississippi.","Why is the cellphone network so good in Wisconsin? Because even the smallest towns there have at least four bars.","What do the Minnesota Vikings and the Memphis Grizzlies have in common? Neither has a title!","What do you call pizza seasoning from Portland? Oregon-o.","What's different when you compare the Memphis Grizzlies with a dollar bill? The dollar bill is good for four quarters.","Why did NASA relocate from Houston? Because they heard the Houston Rockets can't perform when it counts."," Why is it that the Minnesota Vikings cannot eat their cereals for breakfast? It's because they tend to choke a lot when they come too close to a bowl.","Why did the man from Colorado shift to Las Vegas? Because he wanted to take a gamble.","How did the buffalo pass his examinations? He just winged it.","What did the police department name their squad of short policemen? Minneapolis."] 
}
  
var JsonJokeString = JSON.stringify(JsonJoke.Jokes[randomNumber]);


//Here are the jokes, Now lets print they inside JokesContainer at every click



  
   setInterval({


JokesContainer.innerHTML = JsonJokeString;
   }, 7000)



//Now lets host this on github to netlify to api
