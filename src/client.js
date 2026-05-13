const guessForm = document.querySelector('.guess-form')

guessForm.addEventListener('submit', async (e) => {
    e.preventDefault()

    const formData = new FormData(e.target)
    const requestedValue = formData.get('character-name')

    console.log('THIS WORKSSS, USER INPUTTED: ' + requestedValue)

    const recievedData = await checkBrawler(requestedValue)
})

async function checkBrawler(requestedBrawler) {
    const response = await fetch('/checkBrawler', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ requestedBrawler }),
    })

    const data = await response.json()
    console.log(data)

    return data
}
