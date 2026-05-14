import 'dotenv/config'
const apiKey = process.env.apiKey

export async function checkBrawler(playerGuess) {
    const apiUrl = `https://api.brawlstars.com/v1/brawlers`
    try {
        const response = await fetch(apiUrl, {
            headers: {
                Authorization: `Bearer ${process.env.API_KEY}`,
                Accept: 'application/json',
            },
        })
        if (!response) throw new Error('Failed to connect to API Server')
        const data = await response.json()
        return data
    } catch (err) {
        throw new Error(err.message)
    }
}
