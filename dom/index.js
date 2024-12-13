const tableBody = document.querySelector('tbody')
const form = document.querySelector('form')
const nameInput = document.querySelector('[name="fullName"]')

console.log(tableBody, form, nameInput)

form.addEventListener('submit', (e) => {
    e.preventDefault();
    if(nameInput.value){
        const id = [...tableBody.children].length
        const row = document.createElement('tr')

        const id_td = document.createElement('td')
        id_td.textContent = id
        row.append(id_td)

        const name_td = document.createElement('td')
        name_td.textContent = nameInput.value
        row.append(name_td)

        tableBody.append(row)
    }
})