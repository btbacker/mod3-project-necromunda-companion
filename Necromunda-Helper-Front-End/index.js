const body = document.querySelector('body')

function createPage() {
    body.innerHTML = ""
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
        selBar.Bar = "Currently looking at: "
    let statusBar = document.createElement('div')
        statusBar.id = "status"
        statusBar.textContent = "Selection Pending"
    let options = document.createElement('div')
        options.id = "options"
        options.textContent = "Possible Changes"

    body.append(logIn, logOut, headerInfo, squadBar, invBar, selBar, statusBar, options)
    
    let button = document.createElement('button')
        button.setAttribute("type", "submit"); 
        button.setAttribute("name", "submit"); 
        button.textContent = "Log-In"
        button.addEventListener('click', (e) => logInHandler(e))

    let logOutBtn = document.createElement('button')
        logOutBtn.setAttribute("name", "log-out")
        logOutBtn.textContent = "Log-Out"
        logOutBtn.addEventListener('click', (e) => logOutHandler())
        logOut.append(logOutBtn)

    let newSquad = document.createElement('button')
        newSquad.id = "new-squad-button"
        newSquad.textContent = "New Squad"
        newSquad.addEventListener('click', (e) => newSquadHandler())
        squadBar.append(newSquad)

    let username = document.createElement('input')
        username.setAttribute("type", "text"); 
        username.setAttribute("name", "username"); 
        username.setAttribute("placeholder", "Username");

    // let password = document.createElement('input')
        // password.setAttribute("type", "text"); 
        // password.setAttribute("name", "password"); 
        // password.setAttribute("placeholder", "Password");

    body.append(logIn, logOut, headerInfo, squadBar, invBar, selBar, statusBar, options)

    let form = document.createElement('form')
        form.appendChild(username)
        // form.appendChild(password)
        form.appendChild(button)

    logIn.appendChild(form)
}


function logOutHandler() {
    createLogIn()
}

function logInHandler(e) {
    e.preventDefault()
    fetch('http://127.0.0.1:3000/users')
    .then(res => res.json())
    .then(data => handleUserData(data, e))
}

function handleUserData(data, e) {

}
    
function newSquadHandler() {
    let squads = document.querySelector('#squad-bar')
    let leader = document.createElement('div')
    let fighters = document.createElement('div')
    squads.innerHTML = ""

    let fightersForm = document.createElement('form')
    let leaderForm = document.createElement('form')
    squads.append(leader, fighters)
    leader.append(leaderForm)
    fighters.append(fightersForm)

    let leaderName = document.createElement('input')
    leaderName.setAttribute("type", "text"); 
    leaderName.setAttribute("name", "name"); 
    leaderName.setAttribute("placeholder", "Gang Leader Name");

    let leaderSubmit = document.createElement('button')
    leaderSubmit.textContent = "Create Leader" 
    leaderSubmit.setAttribute("name", "submit"); 
    leaderSubmit.addEventListener('click', (e) => submitLeaderHandler(e))
    //has to have a leader and only 1
    //button to add leader after pressing it. Disappears. He appears on the fighter list instead.

    let fighterDropdown = document.createElement('select')
    fighterDropdown.id = "fighter-dropdown"
    let gangerOption = document.createElement('option')
    gangerOption.value = "Ganger"
    let juvieOption = document.createElement('option')
    juvieOption.value = "Juvie"
    let heavyOption = document.createElement('option')
    heavyOption = "Heavy"

    let gangerName = document.createElement('input')
    gangerName.setAttribute("type", "text"); 
    gangerName.setAttribute("name", "name"); 
    gangerName.setAttribute("placeholder", "Ganger Name");

    let gangerSubmit = document.createElement('button')
    gangerSubmit.textContent = "Create Fighter" 
    gangerSubmit.setAttribute("name", "submit"); 
    gangerSubmit.addEventListener('click', (e) => submitFighterHandler(e))

    //dropdown of 3 things, ganger, juvie, or heavy
    //same name input
    //button to add that guy to your squad


    let gangerSubmit = document.createElement('button')
    gangerSubmit.textContent = "Create Fighter" 
    gangerSubmit.setAttribute("name", "submit"); 
    gangerSubmit.addEventListener('click', (e) => submitFighterHandler(e))
    //button to add 1 ganger w/selected name

    let juviesSubmit = document.createElement('button')
    j
    juviesSubmit.setAttribute("name", "juvie-name"); 
    juviesSubmit.setAttribute("placeholder", "Juvie Name");
    juviesSubmit.textContent = "Number of New Juvies"
    
    //button to add 1 ganger w/selected name

    let heaviesSubmit = document.createElement('button')
    heaviesSubmit.setAttribute("name", "heavy-name"); 
    heaviesSubmit.setAttribute("placeholder", "Heavy Name");
    heaviesSubmit.textContent = "Number of New Heavies"
    //button to add 1 heavy w/selected name

    let submit = document.createElement('button')
    submit.setAttribute("type", "button"); 
    submit.setAttribute("name", "add to squad"); 
    submit.textContent = "Create Squad"
    submit.addEventListener('click', (e) => submitSquadHandler(e))
}

function submitSquadHandler(e) {
    console.log(e.target)
}

createPage()