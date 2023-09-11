let calculatorbutton = document.getElementById("calculatorbutton")
calculatorbutton.addEventListener("click", answerclick)
function answerclick () {let PlayerCount = prompt("How many players are there? (1-4)")
if (PlayerCount == 1) {
    let Player1info = prompt("Input the player's name and then their points seperated by a comma");
    let Player1 = Player1info.split(",");
    let Zombies_Points = prompt("How many zombies are there? Please input a number");
    let Double_Points = prompt("Do you have access to double points? Please input Yes if so");

    if (Double_Points == "Yes") {
        let DoublePointsMultiplier = 2
        alert("Player 1: " + (Player1) + " Points \nYou have " + Zombies_Points * 130 * DoublePointsMultiplier + " available points")
    } else {
        let DoublePointsMultiplier = 1
        alert("Player 1: " + (Player1) + " Points \nYou have " + Zombies_Points * 130 * DoublePointsMultiplier + " available points")
    }
    alert("Player 1: " + (Player1) + " Points \nYou have " + Zombies_Points * 130 * DoublePointsMultiplier + " available points") // no tengo ni idea de porque preciso esta alert repetida, pero si no esta, se repite el "How many players are there?
}
if (PlayerCount == 2) {
    let Player1info = prompt("Input the first player's name and then their points seperated by a comma");
    let Player1 = Player1info.split(",");
    let Player2info = prompt("Input the second player's name and then their points seperated by a comma");
    let Player2 = Player2info.split(",");
    let Zombies_Points = prompt("How many zombies are there? Please input a number");
    let Double_Points = prompt("Do you have access to double points? Please input Yes if so");

    if (Double_Points == "Yes") {
        let DoublePointsMultiplier = 2
        alert("Player 1: " + (Player1) + " Points \nPlayer 2: " + (Player2) + " Points\nYou have " + Zombies_Points * 130 * DoublePointsMultiplier + " available points")
    } else {
        let DoublePointsMultiplier = 1
        alert("Player 1: " + (Player1) + " Points \nPlayer 2: " + (Player2) + " Points\nYou have " + Zombies_Points * 130 * DoublePointsMultiplier + " available points")
    }
    alert("Player 1: " + (Player1) + " Points \nPlayer 2: " + (Player2) + " Points\nYou have " + Zombies_Points * 130 * DoublePointsMultiplier + " available points")
}
if (PlayerCount == 3) {
    let Player1info = prompt("Input the first player's name and then their points seperated by a comma");
    let Player1 = Player1info.split(",");
    let Player2info = prompt("Input the second player's name and then their points seperated by a comma");
    let Player2 = Player2info.split(",");
    let Player3info = prompt("Input the third player's name and then their points seperated by a comma");
    let Player3 = Player3info.split(",");
    let Zombies_Points = prompt("How many zombies are there? Please input a number");
    let Double_Points = prompt("Do you have access to double points? Please input Yes if so");

    if (Double_Points == "Yes") {
        let DoublePointsMultiplier = 2
        alert("Player 1: " + (Player1) + " Points \nPlayer 2: " + (Player2) + " Points\nPlayer 3: " + (Player3) + " Points\nYou have " + Zombies_Points * 130 * DoublePointsMultiplier + " available points")
    } else {
        let DoublePointsMultiplier = 1
        alert("Player 1: " + (Player1) + " Points \nPlayer 2: " + (Player2) + " Points\nPlayer 3: " + (Player3) + " Points\nYou have " + Zombies_Points * 130 * DoublePointsMultiplier + " available points")
    }
    alert("Player 1: " + (Player1) + " Points \nPlayer 2: " + (Player2) + " Points\nPlayer 3: " + (Player3) + " Points\nYou have " + Zombies_Points * 130 * DoublePointsMultiplier + " available points")
}
if (PlayerCount == 4) {
    let Player1info = prompt("Input the first player's name and then their points seperated by a comma");
    let Player1 = Player1info.split(",");
    let Player2info = prompt("Input the second player's name and then their points seperated by a comma");
    let Player2 = Player2info.split(",");
    let Player3info = prompt("Input the third player's name and then their points seperated by a comma");
    let Player3 = Player3info.split(",");
    let Player4info = prompt("Input the fourth player's name and then their points seperated by a comma");
    let Player4 = Player4info.split(",");
    let Zombies_Points = prompt("How many zombies are there? Please input a number");
    let Double_Points = prompt("Do you have access to double points? Please input Yes if so");

    if (Double_Points == "Yes") {
        let DoublePointsMultiplier = 2
        alert("Player 1: " + (Player1) + " Points \nPlayer 2: " + (Player2) + " Points\nPlayer 3: " + (Player3) + " Points\nPlayer 4: " + (Player4) + " Points\nYou have " + Zombies_Points * 130 * DoublePointsMultiplier + " available points")
    } else {
        let DoublePointsMultiplier = 1
        alert("Player 1: " + (Player1) + " Points \nPlayer 2: " + (Player2) + " Points\nPlayer 3: " + (Player3) + " Points\nPlayer 4: " + (Player4) + " Points\nYou have " + Zombies_Points * 130 * DoublePointsMultiplier + " available points")
    }
    alert("Player 1: " + (Player1) + " Points \nPlayer 2: " + (Player2) + " Points\nPlayer 3: " + (Player3) + " Points\nPlayer 4: " + (Player4) + " Points\nYou have " + Zombies_Points * 130 * DoublePointsMultiplier + " available points")
}
}
let usernametitle = document.getElementById("usernametitle")
let usernameinput = document.getElementById("username");
usernameinput.onchange = () => {localStorage.setItem ("usernamestorage", usernameinput.value)}
if (localStorage.getItem("usernamestorage") != null) {usernametitle.innerText= (localStorage.getItem("usernamestorage")) + ", welcome back to the Kronorium"}