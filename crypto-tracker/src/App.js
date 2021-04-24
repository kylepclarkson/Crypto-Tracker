import './App.css';

import { fetchCoins } from './api'
import React, { Component } from 'react';
import Coin from './components/Coin';
import SearchBar from './components/SearchBar';

export class App extends Component {

  state = {
    coins: [],
    search: '',
  } 

  // handle search bar input, setting it to state.
  handleSearch = function(e) {
    this.setState({ search: e.target.value})
  }

  // filter coins using search value in state.
  filterCoins = function(coins) {
    coins.filter(coin => {
      return coin.toLowerCase().includes(this.state.search.toLowerCase())
    })
  }

  constructor(props) {
    super(props)
    this.handleSearch = this.handleSearch.bind(this)
    this.filterCoins = this.filterCoins.bind(this)
  }

  async componentDidMount() {
    const coins = await fetchCoins()
    this.setState({ coins: coins })
  }

  componentDidUpdate() {
    console.log("Did update")
    console.log('search: ', this.state.search)
  }

  render() {
    return (
      <div className="index.css">
        <div className="coin-search">
          <SearchBar handleSearch={this.handleSearch} />
        </div>
        {
          this.state.coins.filter(coin => {
            return (
              <Coin
                key={coin.id}
                name={coin.name}
                image={coin.image}
                symbol={coin.symbol}
                price={coin.current_price}
                marketcap={coin.market_cap}
                priceChange={coin.price_change_percentage_24h}
                volume={coin.total_volume}
              />
            )
          })
        }
      </div>
    )
  }
}

export default App;
