const main = document.querySelector('main')

createPage()

function createPage() {
    main.innerHTML = ""
    let logIn = document.createElement('div')
        logIn.id = "log-in"
    let logOut = document.createElement('div')
        logOut.id = "log-out"
    let headerInfo = document.createElement('div')
        headerInfo.id = "header-info"
    let squadBar = document.createElement('div')
        squadBar.id = "squad-bar"
        squadBar.textContent = "Fighters"
    let invBar = document.createElement('div')
        invBar.id = "inventory-bar"
        invBar.textContent = "Gang Inventory"
    let selBar = document.createElement('div')
        selBar.id = "selection"
        selBar.textContent = "Currently looking at: "
    let statusBar = document.createElement('div')
        statusBar.id = "status"
        statusBar.textContent = "Selection Pending"
    let options = document.createElement('div')
        options.id = "options"
        options.textContent = "Possible Changes"
    let form = document.createElement('form')
        form.id = "log-in-form"
        form.addEventListener('submit', (e) => {
            e.preventDefault
            logInHandler(e)
        })

    main.append(logIn, logOut, headerInfo, squadBar, invBar, selBar, statusBar, options)

    let username = document.createElement('input')
        username.setAttribute("type", "text"); 
        username.setAttribute("name", "username"); 
        username.setAttribute("placeholder", "Username");

    let button = document.createElement('button')
        button.setAttribute("form", "log-in-form")
        button.setAttribute("type", "submit"); 
        button.setAttribute("name", "submit"); 
        button.textContent = "Log-In"
        // button.addEventListener('click', (e) => logInHandler(e))

    // let logOutBtn = document.createElement('button')
        // logOutBtn.setAttribute("name", "log-out")
        // logOutBtn.textContent = "Log-Out"
        // logOutBtn.addEventListener('click', (e) => logOutHandler())
        // logOut.append(logOutBtn)

    let newSquad = document.createElement('button')
        newSquad.id = "new-squad-button"
        newSquad.textContent = "New Squad"
        newSquad.addEventListener('click', (e) => newSquadHandler())
        squadBar.append(newSquad)

    main.append(logIn, logOut, headerInfo, squadBar, invBar, selBar, statusBar, options)
    form.append(username, button)
    logIn.appendChild(form)
}

function logInHandler(e) {
    e.preventDefault()
    fetch('http://127.0.0.1:3000/users')
        .then(res => res.json())
        .then(data => handleUserData(data, e))
}

function logOutHandler() {
    createPage()
}

function handleUserData(data, e) {
    e.preventDefault()
    data.forEach(user => {
        if (user.name === e.target.username.value) {
            logIn = document.querySelector('#log-in')
                logIn.innerHTML = ""
            userH2 = document.createElement('h2')
                userH2.id = data.id
                userH2.innerText = data.name
            logIn.append(userH2)
            buildUserView(data)
        } 
        else {
            fetch('http://127.0.0.1:3000/users', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name: e.target.username.value
                })
            })
            .then(res => res.json)
            .then(user => buildUserView(user))
        }
    })
}

function buildUserView(user) {
    console.log(user)
    debugger
    // squads = document.querySelector('#squad-bar')
    // logIn = document.querySelector('#log-in')
    //         logIn.innerHTML = ""
    //         userH2 = document.createElement('h2')
    //         userH2.id = user.id
    //         userH2.innerText = user.name
    //         logIn.append(userH2)
    // ul = document.createElement('ul')
    // ul.id = `${user.name}-fighter-list`
    // if (user.squads.length > 0) {
    // user.sqauds.forEach(squad => {
    //     li = document.createElement('li')
    //     li.id = squad.name
    //     li.innerText = squad.name
    //     ul.appendChild(li)
    //     squads.appendChild(ul)
    // })} else {
    //     squads.innerText = "Currently you have no gangs."
    // }
}
    
function newSquadHandler() {
    console.log("hello")
    let squads = document.querySelector('#squad-bar')
    let gang = document.createElement('div')
        gang.id = "gang-div"
    let leader = document.createElement('div')
        leader.id = "leader-div"
    let fighters = document.createElement('div')
        fighters.id = "fighter-div"
    squads.innerHTML = ""

    
    let fightersForm = document.createElement('form')
        fightersForm.addEventListener('submit', (e) => submitFighterHandler(e))
    let leaderForm = document.createElement('form')
        leaderForm.addEventListener('submit', (e) => submitLeaderHandler(e))
    let gangForm = document.createElement('form')
        gangForm.addEventListener('submit', (e) => submitGangNameHandler(e))
        
    leader.append(leaderForm)
    fighters.append(fightersForm)
    gang.append(gangForm)
    // squads.append(gang, leader, fighters)

    let gangDropdown = document.createElement('select')
        gangDropdown.id = "gang-dropdown"
    let gangOption1 = document.createElement('option')
        gangOption1.value = "Goliath"
        gangOption1.textContent = "Goliath"
    let gangOption2 = document.createElement('option')
        gangOption2.value = "Orlock"
        gangOption2.textContent = "Orlock"
    let gangOption3 = document.createElement('option')
        gangOption3.value = "Van Saar"
        gangOption3.textContent = "Van Saar"
    let gangOption4 = document.createElement('option')
        gangOption4.value = "Delaque"
        gangOption4.textContent = "Delaque"
    let gangOption5 = document.createElement('option')
        gangOption5.value = "Cawdor"
        gangOption5.textContent = "Cawdor"
    let gangOption6 = document.createElement('option')
        gangOption6.value = "Escher"
        gangOption6.textContent = "Escher"

    let gangName = document.createElement('input')
        gangName.setAttribute("type", "text"); 
        gangName.setAttribute("name", "name"); 
        gangName.setAttribute("placeholder", "Gang Name");

    let gangSubmit = document.createElement('button')
        gangSubmit.textContent = "Establish Gang"
        gangSubmit.setAttribute("type", "submit");
        gangSubmit.setAttribute("name", "submit");
        gangSubmit.addEventListener('click', (e) => submitGangHandler(e))

    let leaderName = document.createElement('input')
        leaderName.setAttribute("type", "text"); 
        leaderName.setAttribute("name", "name"); 
        leaderName.setAttribute("placeholder", "Name Gang Leader");

    let leaderSubmit = document.createElement('button')
        leaderSubmit.textContent = "Forge New Leader" 
        leaderSubmit.setAttribute("name", "submit"); 
        leaderSubmit.addEventListener('click', (e) => submitLeaderHandler(e))

    leaderForm.append(leaderName, leaderSubmit)
    squads.append(gang, gangName, gangSubmit, leader, fighters)
    gangDropdown.append(gangOption1, gangOption2, gangOption3, gangOption4, gangOption5, gangOption6)
    gangForm.append(gangDropdown, gangName, gangSubmit)
    //has to have a leader and only 1
    //button to add leader after pressing it. Disappears. He appears on the fighter list instead.

    let fighterDropdown = document.createElement('select')
        fighterDropdown.id = "fighter-dropdown"
    let gangerOption = document.createElement('option')
        gangerOption.value = "Ganger"
        gangerOption.textContent = "Ganger"
    let juvieOption = document.createElement('option')
        juvieOption.value = "Juvie"
        juvieOption.textContent = "Juvie"
    let heavyOption = document.createElement('option')
        heavyOption.value = "Heavy"
        heavyOption.textContent = "Heavy"

    let gangerName = document.createElement('input')
        gangerName.setAttribute("type", "text"); 
        gangerName.setAttribute("name", "name"); 
        gangerName.setAttribute("placeholder", "Ganger Name");

    let gangerSubmit = document.createElement('button')
        gangerSubmit.textContent = "Recruit Gang Member" 
        gangerSubmit.setAttribute("name", "submit"); 
        gangerSubmit.addEventListener('click', (e) => submitFighterHandler(e))
    
    fighterDropdown.append(gangerOption, juvieOption, heavyOption)
    fightersForm.append(fighterDropdown, gangerName, gangerSubmit)

    let doneButton = document.createElement('button')
        doneButton.setAttribute("type", "button"); 
        doneButton.setAttribute("name", "done-button"); 
        doneButton.textContent = "Done Adding Gang Members"
        doneButton.addEventListener('click', (e) => submitSquadHandler(e))

    squads.append(doneButton)

    selectionDiv = document.querySelector("#selection")

    let newSquadName = document.createElement('p')
        newSquadName.id = "new-squad-name"
        newSquadName.innerText = "Squad Name: As yet Unknown"
    let newSquadCredits = document.createElement('p')
        newSquadCredits.id = "new-squad-credits"
        newSquadCredits.innerHTML = "Starting Credits: 1000"
    let newSquadInfo = document.createElement('p')
        newSquadInfo.id = "new-squad-info"
        newSquadInfo.innerHTML = "Each new Squad must belong to a House, have a Name, a Leader, and at least 4 (but no more than 10) other gang members. The Gang Leader costs 120 credits, Heavies cost 60, Gangers cost 50, and Juvies cost 25."
    
    selectionDiv.append(newSquadName, newSquadCredits, newSquadInfo)
}

function submitGangNameHandler(e) {
    e.preventDefault()
    console.log(e)
    debugger
    let gangDiv = document.querySelector('#gang-div')
        gangDiv.innerHTML = ""
    let selectionDiv = document.querySelector('#selection')
        selectionDiv.innerHTML = ""
    let pGangHouse = document.createElement('p')
        pGangHouse.id = "s-gang-house"
        pGangHouse.innerText = "hello"
    let pGangName = document.createElement('p')
        pGangName.id = "s-gang-name"
        pGangName.innerText = e.target.name.value
    selectionDiv.append(pGangHouse, pGangName)
    console.log(selectionDiv)
    // p = document.createElement('p')
    // p.id = "s-gang-house"
    // p2 = document.createElement('p')
    // p.id = "s-gang-name"
    // p.innerText = e.target[0].value
    // p2.innerText = e.target[1].value
    // selectionDiv.append(p2, p)
}

function submitLeaderHandler(e) {
    e.preventDefault()
    console.log(e.target.value)
}

function submitFighterHandler(e) {
    e.preventDefault()
    console.log(e.target.value)
}

function submitSquadHandler(e) {
    console.log(e.target.value)
}

///

const dice = {	
    sides: 6,	
    roll: function () {	
      var randomNumber = Math.floor(Math.random() * this.sides) + 1;	
      return randomNumber;	
    }	
}	

//Prints dice roll to the page	

function displayRoll(number) {	
    var dicePlaceholder = document.getElementById('dice-placeholder');	
    dicePlaceholder.innerHTML = number;	
}	

var button = document.getElementById('dice-roll-button');	
    button.onclick = function() {	
        var result = dice.roll();	
        displayRoll(result);	
    };