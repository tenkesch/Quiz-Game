const guessForm = document.querySelector('.guess-form')

guessForm.addEventListener('submit', async (e) => {
    e.preventDefault()

    const formData = new FormData(e.target)
    const brawlerName = formData.get('character-name')

    if (!brawlerName?.trim()) {
        console.warn('Please enter a brawler name first!')
        return
    }
    try {
        console.log(`i got name : [${brawlerName}]`)
        const response = await fetch(`/guess?brawlerName=${brawlerName}`)
        console.log('This is what i got in return?\n')
        console.log(response)

        if (!response?.ok) {
            console.warn('API error, returned response.ok=false')
            console.log(response)
            return
        }
        const data = await response.json()

        console.log('successfully fetched data:')
        console.log(data)
    } catch (err) {
        console.error(err.message)
    }
})
