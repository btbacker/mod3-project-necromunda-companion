const main = document.querySelector('main')

createPage()

// function loginPage() {

// }



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
            logInHandler(e)
        })

    let username = document.createElement('input')
        username.setAttribute("type", "text"); 
        username.setAttribute("name", "username"); 
        username.setAttribute("placeholder", "Username");

    let button = document.createElement('button')
        button.setAttribute("form", "log-in-form")
        button.setAttribute("type", "submit"); 
        button.setAttribute("name", "submit"); 
        button.textContent = "Log-In"

    let newSquad = document.createElement('button')
        newSquad.id = "new-squad-button"
        newSquad.textContent = "New Squad"
        newSquad.addEventListener('click', (e) => newSquadHandler())
        squadBar.append(newSquad)

    main.append(logIn, logOut, headerInfo, squadBar, invBar, selBar, statusBar, options)
    form.append(username, button)
    logIn.appendChild(form)
}

//creates the page in main

function logInHandler(e) {
    e.preventDefault()
    fetch('http://127.0.0.1:3000/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: e.target.username.value
        })
    })
        .then(res => res.json())
        .then(user => buildUserView(user))
        .then(console.log("hi"))
}

function logOutHandler() {
    createPage()
}

function buildUserView(user) {
    // let logIn = document.querySelector('#log-in')
    // logIn.innerHTML = ""
    let logOut = document.querySelector('#log-out')
    let logOutBtn = document.createElement('button')
    logOutBtn.setAttribute("name", "log-out")
    logOutBtn.textContent = "Log Out"
    logOutBtn.addEventListener('click', (e) => logOutHandler())
    logOut.append(logOutBtn)
    squads = document.querySelector('#squad-bar')
    logIn = document.querySelector('#log-in')
            logIn.innerHTML = ""
            userH2 = document.createElement('h2')
            userH2.name = user.name
            userH2.innerText = user.name
            logIn.append(userH2)

    ul = document.createElement('ul')
    ul.id = `${user.name}-squad-list`
    if (user.squads.length > 0) {
    user.squads.forEach(squad => {
        squadButton = document.createElement('button')
        squadButton.id = `${squad.name}-button`
        squadButton.name = `${squad.id}`
        squadButton.innerText = 'Edit Squad'
        squadButton.addEventListener('click', (e) => fetchSquadHandler(squad))
        li = document.createElement('li')
        li.innerText = squad.name
        li.appendChild(squadButton)
        ul.appendChild(li)
        squads.appendChild(ul)
        console.log(squad)
    })} else {
        squads.innerText = "Currently you have no gangs."
    }
}
// Modifies page for the User that logged in

function fetchSquadHandler(e, user) {
    fetch(`http://127.0.0.1:3000/squads/${e.target.name.value}`)
    .then(res => res.json())
    .then(squad => showSquadHandler(squad))
}

function showSquadHandler(squad) {
    statusBar = document.querySelector('#status')
    statusBar.innerText = `Currently looking at: Squad ${squad.name}`
    selectionBar = document.querySelector('#selection')
    selectionBar.innerHTML = ""
    ul = document.createElement('ul')
    squad.fighters.forEach(fighter => {
        li = document.createElement('li')
        li.innerText = `Name: ${fighter.name}, Position: ${fighter.position}, Cost: ${fighter.cost}, Movement: ${fighter.movement}, Weapon Skill: ${fighter.weapon_skill}, Ballistic Skill: ${fighter.ballistic_skill}, Strength: ${fighter.strength}, Toughness: ${fighter.toughness}, Wounds: ${fighter.wounds}, Initiative: ${fighter.initiative}, Attacks: ${fighter.attacks}, Leadership: ${fighter.leadership}`
        li.value = fighter.id
    })
}

function newSquadHandler() {
    let inventory = document.querySelector('#inventory-bar')
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
        gangForm.addEventListener('submit', (e) => submitGangNameHandler(e) )
        leader.append(leaderForm)
        fighters.append(fightersForm)
        gang.append(gangForm)
        squads.append(gang, leader, fighters)

    let gangDropdown = document.createElement('select')
        gangDropdown.id = "gang-dropdown"
        gangDropdown.name = "gangdropdown"
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
    gangSubmit.textContent = "Found a Gang"
    gangSubmit.setAttribute("type", "submit")
    gangSubmit.setAttribute("name", "submit"); 
    

    squads.append(leader, fighters)

    gangDropdown.append(gangOption1, gangOption2, gangOption3, gangOption4, gangOption5, gangOption6)
    gangForm.append(gangDropdown, gangName, gangSubmit)

    let leaderName = document.createElement('input')
        leaderName.setAttribute("type", "text"); 
        leaderName.setAttribute("name", "name"); 
        leaderName.setAttribute("placeholder", "Name Gang Leader");

    let leaderSubmit = document.createElement('button')
    leaderSubmit.textContent = "A Leader is Forged" 
    leaderSubmit.setAttribute("name", "submit");

    leaderForm.append(leaderName, leaderSubmit)
    squads.append(gang, gangName, gangSubmit, leader, fighters)
    gangDropdown.append(gangOption1, gangOption2, gangOption3, gangOption4, gangOption5, gangOption6)
    gangForm.append(gangDropdown, gangName, gangSubmit)
    //has to have a leader and only 1
    //button to add leader after pressing it. Disappears. He appears on the fighter list instead.

    let fighterDropdown = document.createElement('select')
    fighterDropdown.id = "fighter-dropdown"
    fighterDropdown.name ="fighterdropdown"
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
        gangerSubmit.setAttribute("type", "submit")
        gangerSubmit.setAttribute("name", "submit")
    
    fighterDropdown.append(gangerOption, juvieOption, heavyOption)
    fightersForm.append(fighterDropdown, gangerName, gangerSubmit)

    let doneButton = document.createElement('button')
        doneButton.setAttribute("type", "button"); 
        doneButton.setAttribute("name", "done-button"); 
        doneButton.textContent = "Done Adding Gang Members"

    squads.append(doneButton)

    selectionDiv = document.querySelector("#selection")

    let newSquadName = document.createElement('p')
        newSquadName.id = "new-squad-name"
        newSquadName.innerText = "Squad Name: As yet Unknown"
    let newSquadCredits = document.createElement('p')
        newSquadCredits.innerHTML = "Starting Credits: "
    let innerP = document.createElement('p')
        innerP.id = "new-squad-credits"
        innerP.innerHTML = "1000"
    let newSquadInfo = document.createElement('p')
        newSquadInfo.id = "new-squad-info"
        newSquadInfo.innerHTML = "Each new Squad must belong to a House, have a Name, a Leader, and at least 4 (but no more than 10) other gang members. The Gang Leader costs 120 credits, Heavies cost 60, Gangers cost 50, and Juvies cost 25."
    newSquadCredits.append(innerP)
    inventory.append(newSquadCredits)
    selectionDiv.append(newSquadName, newSquadInfo)
}   

function submitGangNameHandler(e) {
    e.preventDefault()
    let gangDiv = document.querySelector('#gang-div')
    gangDiv.innerHTML = ""
    let selectionDiv = document.querySelector('#selection')
    selectionDiv.innerHTML = ""
    let pGangHouse = document.createElement('p')
    pGangHouse.id = "s-gang-house"
    pGangHouse.innerText = `House: ${e.target.gangdropdown.value}`
    let pGangName = document.createElement('p')
    pGangName.id = "s-gang-name"
    pGangName.innerText = `Gang Name: ${e.target.name.value}`
    selectionDiv.append(pGangHouse, pGangName)

    fetch('http://127.0.0.1:3000/squads', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name: e.target.name.value,
            house: e.target.gangdropdown.value
        })
    }).then(res => res.json()).then(data => data)
}

function submitLeaderHandler(e) {
    e.preventDefault()
    console.log(e.target.name.value)
    fetch('http://127.0.0.1:3000/fighters', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: e.target.name.value,
            position: "Leader"
        })
    })
    .then(res => res.json())
    .then(leader => buildLeader(leader))
}

function buildLeader(leader) {
    console.log(leader)
    debugger
    let sBar = document.querySelector('#selection')
    let p = document.createElement('p')
    p.textContent = `Leader: ${leader.name}`
    sBar.append(p)
}

function submitFighterHandler(e) {
    e.preventDefault()
    console.log(e)
    let selectionDiv = document.querySelector('#selection')
    let fighterDiv = document.createElement('div')
        fighterDiv.className = "fighter"
    let fighter = document.createElement('p')
        fighter.innerText = e.target.name.value
    fighterDiv.append(fighter)
    selectionDiv.append(fighterDiv)

    fetch('http://127.0.0.1:3000/fighters',  {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name: e.target.name.value,
            position: e.target.fighterdropdown.value
        })
    }).then(res => res.json()).then(data => data)
}


function submitSquadHandler(e) {
    console.log(e.target.value)
    let squads = document.querySelector('#squad-bar')
    squads.innerHTML = ""
    let inventory = document.querySelector('#inventory-bar')
    let inventoryDescription = document.createElement('p')
    inventoryDescription.innerText = "All fighters are automatically equipped with a knife. Select a fighter to equip a weapon to."
    inventory.append(inventoryDescription)
}

/// Dice Assist Visual Representation ///

const dice = {	
    sides: 6,	
    roll: function () {	
      var randomNumber = Math.floor(Math.random() * this.sides) + 1;	
      return randomNumber;	
    }	
}	
//Prints dice roll to the page	

function displayRoll(number) {	
    var dicePlaceholder = document.getElementById('dice-placeholder')	
        dicePlaceholder.innerHTML = number
    displayPreviousRoll(number)
}

function displayPreviousRoll(num)
    let dicePlaceholder2 = document.createElement('div')
        dicePlaceholder2.id = 'dice-placeholder-2'
        dicePlaceholder2.innerText = previousRoll
        console.log(dicePlaceholder2)
    // if (typeof dicePlaceholder2 == 'undefined') {
        document.getElementById('roll-container').appendChild(dicePlaceholder2)
    // }
    // else if (typeof dicePlaceholder2 !== 'undefined') {
    //     dicePlaceholder2.innerHTML = ''
    //     dicePlaceholder2.innerHTML = previousRoll
    // }
}	

var button = document.getElementById('dice-roll-button');	
button.onclick = function() {	
    var result = dice.roll();	
    displayRoll(result);	
};	
