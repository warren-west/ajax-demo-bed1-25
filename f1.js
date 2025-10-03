// CONST VARIABLES
const F1_API_BASE_URL = "https://f1api.dev/api"
const F1_API_URL_CURRENT_DRIVERS = "/current/drivers"

// VARIABLES
let drivers = []
let [ season, championshipId ] = [ "", "" ]

// DOM ELEMENTS
const driverTable = document.getElementById("drivers-table")

// EVENT LISTENERS

// EVENT HANDLERS
async function getDriversAsync() {
    console.log("Fetching drivers...")
    const resp = await fetch(F1_API_BASE_URL + F1_API_URL_CURRENT_DRIVERS)
    const json = await resp.json()

    console.log(json)

    drivers = json.drivers

    renderDrivers()
}

// FUNCTIONS
function renderDrivers() {
    console.log("Rendering drivers...")

    // create table header row
    const thead = document.createElement("thead")
    const headers = ["teamId", "number", "name", "surname", "nationality"]

    // create <th> tags and append to <thead>
    for (let h of headers) {
        const newTh = document.createElement("th")
        newTh.innerText = h.toUpperCase()
        thead.appendChild(newTh)

    }
    
    driverTable.appendChild(thead)

    // loop through list of drivers    
    for (let d of drivers) {
        const newTr = document.createElement("tr")

        for (let h of headers) {
            const newTd = document.createElement("td")
            newTd.innerText = d[h]
            newTr.appendChild(newTd)
        }

        driverTable.appendChild(newTr)
    }
}

// RUNTIME
getDriversAsync()