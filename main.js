let calculatorbutton = document.getElementById("calculatorbutton")
calculatorbutton.addEventListener("click", answerclick)
async function answerclick() {
    let { value: PlayerCount } = await Swal.fire({
        title: "How many players are there? (1-4)",
        input: "text",
        showCancelButton: true,
        inputValidator: (value) => {
            if (!value) {
                return 'You need to write something!'
            }
        }
    })
    if (PlayerCount == 1) {
        let { value: Player1info } = await Swal.fire({
            title: "Input the player's name and then their points seperated by a comma",
            input: "text",
            showCancelButton: true,
            inputValidator: (value) => {
                if (!value) {
                    return 'You need to write something!'
                }
            }
        })
        let Player1 = Player1info.split(",");
        let { value: Zombies_Points } = await Swal.fire({
            title: "How many zombies are there? Please input a number",
            input: "text",
            showCancelButton: true,
            inputValidator: (value) => {
                if (!value) {
                    return 'You need to write something!'
                }
            }
        })
        let { value: Double_Points } = await Swal.fire({
            title: "Do you have access to double points? Please input Yes if so",
            input: "text",
            showCancelButton: true,
            inputValidator: (value) => {
                if (!value) {
                    return 'You need to write something!'
                }
            }
        })
        if (Double_Points == "Yes") {
            let DoublePointsMultiplier = 2
            let calculatorresultsreset = document.getElementById("calculatorresults")
            calculatorresultsreset.replaceChildren();
            let calculatorresults = document.createElement("p");
            calculatorresults.innerHTML = ("Player 1: " + (Player1) + " Points <br> You have " + Zombies_Points * 130 * DoublePointsMultiplier + " available points")
            document.getElementById("calculatorresults").append(calculatorresults);
        } else {
            let DoublePointsMultiplier = 1
            let calculatorresultsreset = document.getElementById("calculatorresults")
            calculatorresultsreset.replaceChildren();
            let calculatorresults = document.createElement("p");
            calculatorresults.innerHTML = ("Player 1: " + (Player1) + " Points <br> You have " + Zombies_Points * 130 * DoublePointsMultiplier + " available points")
            document.getElementById("calculatorresults").append(calculatorresults);
        }
    }
    if (PlayerCount == 2) {
        let { value: Player1info } = await Swal.fire({
            title: "Input the first player's name and then their points seperated by a comma",
            input: "text",
            showCancelButton: true,
            inputValidator: (value) => {
                if (!value) {
                    return 'You need to write something!'
                }
            }
        })
        let Player1 = Player1info.split(",");
        let { value: Player2info } = await Swal.fire({
            title: "Input the second player's name and then their points seperated by a comma",
            input: "text",
            showCancelButton: true,
            inputValidator: (value) => {
                if (!value) {
                    return 'You need to write something!'
                }
            }
        })
        let Player2 = Player2info.split(",");
        let { value: Zombies_Points } = await Swal.fire({
            title: "How many zombies are there? Please input a number",
            input: "text",
            showCancelButton: true,
            inputValidator: (value) => {
                if (!value) {
                    return 'You need to write something!'
                }
            }
        })
        let { value: Double_Points } = await Swal.fire({
            title: "Do you have access to double points? Please input Yes if so",
            input: "text",
            showCancelButton: true,
            inputValidator: (value) => {
                if (!value) {
                    return 'You need to write something!'
                }
            }
        })
        if (Double_Points == "Yes") {
            let DoublePointsMultiplier = 2
            let calculatorresultsreset = document.getElementById("calculatorresults")
            calculatorresultsreset.replaceChildren();
            let calculatorresults = document.createElement("p");
            calculatorresults.innerHTML = ("Player 1: " + (Player1) + " Points <br> Player 2: " + (Player2) + " Points<br>You have " + Zombies_Points * 130 * DoublePointsMultiplier + " available points")
            document.getElementById("calculatorresults").append(calculatorresults);
        } else {
            let DoublePointsMultiplier = 1
            let calculatorresultsreset = document.getElementById("calculatorresults")
            calculatorresultsreset.replaceChildren();
            let calculatorresults = document.createElement("p");
            calculatorresults.innerHTML = ("Player 1: " + (Player1) + " Points <br> Player 2: " + (Player2) + " Points<br>You have " + Zombies_Points * 130 * DoublePointsMultiplier + " available points")
            document.getElementById("calculatorresults").append(calculatorresults);
        }
    }
    if (PlayerCount == 3) {
        let { value: Player1info } = await Swal.fire({
            title: "Input the first player's name and then their points seperated by a comma",
            input: "text",
            showCancelButton: true,
            inputValidator: (value) => {
                if (!value) {
                    return 'You need to write something!'
                }
            }
        })
        let Player1 = Player1info.split(",");
        let { value: Player2info } = await Swal.fire({
            title: "Input the second player's name and then their points seperated by a comma",
            input: "text",
            showCancelButton: true,
            inputValidator: (value) => {
                if (!value) {
                    return 'You need to write something!'
                }
            }
        })
        let Player2 = Player2info.split(",");
        let { value: Player3info } = await Swal.fire({
            title: "Input the third player's name and then their points seperated by a comma",
            input: "text",
            showCancelButton: true,
            inputValidator: (value) => {
                if (!value) {
                    return 'You need to write something!'
                }
            }
        })
        let Player3 = Player3info.split(",");
        let { value: Zombies_Points } = await Swal.fire({
            title: "How many zombies are there? Please input a number",
            input: "text",
            showCancelButton: true,
            inputValidator: (value) => {
                if (!value) {
                    return 'You need to write something!'
                }
            }
        })
        let { value: Double_Points } = await Swal.fire({
            title: "Do you have access to double points? Please input Yes if so",
            input: "text",
            showCancelButton: true,
            inputValidator: (value) => {
                if (!value) {
                    return 'You need to write something!'
                }
            }
        })
        if (Double_Points == "Yes") {
            let DoublePointsMultiplier = 2
            let calculatorresultsreset = document.getElementById("calculatorresults")
            calculatorresultsreset.replaceChildren();
            let calculatorresults = document.createElement("p");
            calculatorresults.innerHTML = ("Player 1: " + (Player1) + " Points <br>Player 2: " + (Player2) + " Points<br>Player 3: " + (Player3) + " Points<br>You have " + Zombies_Points * 130 * DoublePointsMultiplier + " available points")
            document.getElementById("calculatorresults").append(calculatorresults);
        } else {
            let DoublePointsMultiplier = 1
            let calculatorresultsreset = document.getElementById("calculatorresults")
            calculatorresultsreset.replaceChildren();
            let calculatorresults = document.createElement("p");
            calculatorresults.innerHTML = ("Player 1: " + (Player1) + " Points <br>Player 2: " + (Player2) + " Points<br>Player 3: " + (Player3) + " Points<br>You have " + Zombies_Points * 130 * DoublePointsMultiplier + " available points")
            document.getElementById("calculatorresults").append(calculatorresults);
        }
    }
    if (PlayerCount == 4) {
        let { value: Player1info } = await Swal.fire({
            title: "Input the first player's name and then their points seperated by a comma",
            input: "text",
            showCancelButton: true,
            inputValidator: (value) => {
                if (!value) {
                    return 'You need to write something!'
                }
            }
        })
        let Player1 = Player1info.split(",");
        let { value: Player2info } = await Swal.fire({
            title: "Input the second player's name and then their points seperated by a comma",
            input: "text",
            showCancelButton: true,
            inputValidator: (value) => {
                if (!value) {
                    return 'You need to write something!'
                }
            }
        })
        let Player2 = Player2info.split(",");
        let { value: Player3info } = await Swal.fire({
            title: "Input the third player's name and then their points seperated by a comma",
            input: "text",
            showCancelButton: true,
            inputValidator: (value) => {
                if (!value) {
                    return 'You need to write something!'
                }
            }
        })
        let Player3 = Player3info.split(",");
        let { value: Player4info } = await Swal.fire({
            title: "Input the fourth player's name and then their points seperated by a comma",
            input: "text",
            showCancelButton: true,
            inputValidator: (value) => {
                if (!value) {
                    return 'You need to write something!'
                }
            }
        })
        let Player4 = Player4info.split(",");
        let { value: Zombies_Points } = await Swal.fire({
            title: "How many zombies are there? Please input a number",
            input: "text",
            showCancelButton: true,
            inputValidator: (value) => {
                if (!value) {
                    return 'You need to write something!'
                }
            }
        })
        let { value: Double_Points } = await Swal.fire({
            title: "Do you have access to double points? Please input Yes if so",
            input: "text",
            showCancelButton: true,
            inputValidator: (value) => {
                if (!value) {
                    return 'You need to write something!'
                }
            }
        })
        if (Double_Points == "Yes") {
            let DoublePointsMultiplier = 2
            let calculatorresultsreset = document.getElementById("calculatorresults")
            calculatorresultsreset.replaceChildren();
            let calculatorresults = document.createElement("p");
            calculatorresults.innerHTML = ("Player 1: " + (Player1) + " Points <br>Player 2: " + (Player2) + " Points<br>Player 3: " + (Player3) + " Points<br>Player 4: " + (Player4) + " Points<br>You have " + Zombies_Points * 130 * DoublePointsMultiplier + " available points")
            document.getElementById("calculatorresults").append(calculatorresults);
        } else {
            let DoublePointsMultiplier = 1
            let calculatorresultsreset = document.getElementById("calculatorresults")
            calculatorresultsreset.replaceChildren();
            let calculatorresults = document.createElement("p");
            calculatorresults.innerHTML = ("Player 1: " + (Player1) + " Points <br>Player 2: " + (Player2) + " Points<br>Player 3: " + (Player3) + " Points<br>Player 4: " + (Player4) + " Points<br>You have " + Zombies_Points * 130 * DoublePointsMultiplier + " available points")
            document.getElementById("calculatorresults").append(calculatorresults);
        }
    }
}
let usernametitle = document.getElementById("usernametitle")
let usernameinput = document.getElementById("username");
usernameinput.onchange = () => { localStorage.setItem("usernamestorage", usernameinput.value) }
if (localStorage.getItem("usernamestorage") != null) { usernametitle.innerText = (localStorage.getItem("usernamestorage")) + ", welcome back to the Kronorium" }