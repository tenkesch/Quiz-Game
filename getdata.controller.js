import 'dotenv/config'
const apiKey = process.env.apiKey

export function checkBrawler(playerGuess) {
    const url = `/guess?brawlerName=${playerGuess}`
    try {
        const response = await fetch(url)
    } catch (err) {
        throw new Error(err.message)
    }

    return true
}
