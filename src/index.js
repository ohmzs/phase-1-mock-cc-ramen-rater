// // ## Setup

// fetch (Url)
fetch('http://localhost:3000')
  .then(data => {return data.json()
  .then(res => console.log(res));




// fetch ();{
//   then(data=>{return data.json()})
//   .then(res => {console.log(res)})
//http://localhost:3000

//See all ramen images in the div with the id of ramen-menu. When the page loads, request the data from the server to get all the ramen objects. Then, display the image for each of the ramen using an img tag inside the #ramen-menu div.





























// // - Run `json-server --watch db.json` to get the backend started
// // - Open the `index.html` file on your browser
// // - Write your code in the `index.js` file

// // ## Endpoints

// // Your base URL for your API will be: `http://localhost:3000`

// // The endpoints you may need are:

// // - GET `/ramens`
// // - GET `/ramens/:id`

// // Feel free to add any additional classes or ids to any elements in the HTML file
// // as you see fit.

// // write your code here

// //- Access information from an API using a GET request and use it to update the
 
// // DOM

// //- Listen for user events and update the DOM in response

// //json-server --watch db.json


// // document.querySelector()
// // checkbox.addEventListener("click", () => {})
// // checkbox.addEventListener("click", () => {})
// // checkbox.addEventListener("click", () => {})
// // checkbox.addEventListener("click", () => {})
// // checkbox.addEventListener("click", () => {})

// // fetch (Url)

// fetch ('http://localhost:3000');{
//  .then(data=>{return data.json()})
//  .then(res => {console.log(res)})
// }

// document.addEventListener('DOMContentLoaded') , () => {
//     fetchSpells()
//     fetchEquipment()
// }
// const fetchEquipment = () => {
// //     fetch('http://localhost:3000')
// //     .then (res => res.json())
// //     .then (data => console.log (data));
// // }

// const fetchSpells = () => {
//     //fetch all
//     fetch ('http://localhost:3000')
//     .then (res => res.json())
//     .then (data => {
//         data.results.forEach((spell, index) => renderSpellName(spell, index))
// })

// const renderSpellName = (spell, index) => {
//     const li = document.createElement('li')
//     li.textContent = spell.name
//     document.querySelector('#spell-cards').append(li)
//    //if li is even it should have a class of even
//    // else it should have a class of odd
//     index%2===0?li.className = 'even' : li.className = 'odd'

//     li.addEventListener('click', () => fetchOne(spell))
// }
    
// const fetchOne = (spell) => {
//     console.log(spell)
//     //fetch one / show one
//     fetch( `https://www.dnd5eapico/api/spells/${spell.index}`)
//     .then(res => res.json())
//     .then(data => buildMainCard(data))
// }

// const buildMainCard = (spell) => {
//     console.log(spell)
//     const main = document.querySelector('main')
//     //Clear Main
//     main.innerHTML = ''

//     const name = document.createElement ('h1')
//     const school = document.createElement ('h3')
//     const castingTime = document.createElement ('p')
//     const range = document.createElement ('p')
//     const components = document.createElement ('p')
//     const duration = document.createElement ('p')
//     const classes = document.createElement ('p')
//     const desc = document.createElement ('p')

//     name.textContent   = spell.name
//     school.textContent = spell.school.name
//     castingTime.textContent = spell.casting_time
//     range.textContent = spell.range
    
//     //TODO sometimes returning undefined for material
//     components.textContent = `${spell.components.join(' ')} (${spell.material? spell.
//     material:''})`
//     duration.textContent = spell.duration               
//     classes.textContent = spell.classes.map(spellClass,index) => spellClass.name).join(' ')
   
//     desc.textContent = spell.desc[0]

//     main.className = 'card'
//     main.append (name, school, castingTime, range, components, classes, desc)

// }
// //create an app that list spells from Dungeonand Dragons 5th edition
// // [] Create a list of name spells from the dnd5eAPI. The endpoint needed is:
// // 'https://www.dnd5eapi.co/api/spells'
//     //Fetch to API
//     //assuming my spell data is an array
//     //loop over the array and create an element for every spell in the array with the text content set to the spells name. 


// // - every other spell should have the class name of even, 
// //and the rest the class name of odd (for CSS reasons) 

// // [] On click display the spells information in the main element. The endpoint needed is: 'https://www.dnd5eapi.co/api/spells/spell_name_here'
// // - Clicking a new spell should remove the old spell. 
// // - name, school, casting time, range components duration, classes, and description should be displayed. 
// // - The main container gains a class name of the card (for CSS reasons)
