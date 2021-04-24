import axios from 'axios'

const MARKET_URL = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'

export const fetchCoins = async () => {

    try {
        const {data} = await axios.get(MARKET_URL).then();
        console.log("coins: ", data)
        return data
    } catch(error) {
        console.log(error)
    }

}