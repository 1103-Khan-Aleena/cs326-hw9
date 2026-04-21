const readline = require("readline"); 
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdin
})
const votes = {
    breakfast: 0,
    lunch: 0,
    dinner: 0
};
    console.log("Breakfast Votes: " + votes.breakfast);
    console.log("Lunch Votes: " + votes.lunch);
    console.log("Dinner Votes: " + votes.dinner);

function mealVote(meal){
    if (meal == "breakfast" || meal == "Breakfast"){
        votes.breakfast++;
    }
    else if(meal== "lunch" || meal == "Lunch"){
        votes.lunch++;
    }
    else if(meal == "dinner" || meal == "Dinner"){
        votes.dinner++;
    }
    else{
        console.log("not a meal");
        return;
    }

    console.log("Breakfast Votes: " + votes.breakfast);
    console.log("Lunch Votes: " + votes.lunch);
    console.log("Dinner Votes: " + votes.dinner);
}

function question(){
    rl.question("Vote for breakfast, lunch or dinner: ", function(answer){
        mealVote(answer);
        question();
    });
}

question();
