const fullname = document.getElementById('fullname')
console.log('CONTENT NOT YET LOADED!', fullname) // what will fullname evaluate to?

function capitalize (str) {
  let arr = str.split(' ')
  let newArr = arr.map(string => string.charAt(0).toUpperCase() + string.slice(1))
  return newArr.join(' ')
}

document.addEventListener('DOMContentLoaded', () => {
  const button = document.getElementById('add-person-button')

  button.addEventListener('click', () => {
    const fullname = document.getElementById('fullname')
    const profilePicture = document.getElementById('profile_picture')
    const email = document.getElementById('email')
    const street = document.getElementById('street')
    const city = document.getElementById('city')
    const state = document.getElementById('state')
    const postcode = document.getElementById('postcode')
    const phone = document.getElementById('phone')
    const cell = document.getElementById('cell')
    const dob = document.getElementById('date_of_birth')
    fetch('https://randomuser.me/api/')
      .then(res => res.json())
      .then(person => {
        const name = person.results[0].name
        fullname.innerText = capitalize(name.title + ' ' + name.first + ' ' + name.last)
        profilePicture.src = person.results[0].picture.medium
        email.innerText = person.results[0].email
        street.innerText = person.results[0].location.street
        city.innerText = capitalize(person.results[0].location.city)
        state.innerText = capitalize(person.results[0].location.state)
        postcode.innerText = person.results[0].location.postcode
        phone.innerText = person.results[0].phone
        cell.innerText = person.results[0].cell
        dob.innerText = person.results[0].dob.date
      })
  })
})
