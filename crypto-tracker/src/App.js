import './App.css';

import { fetchCoins } from './api'
import React, { Component } from 'react';
import Coin from './components/Coin';
import SearchBar from './components/SearchBar';

export class App extends Component {

  state = {
    coins: [],
    search: '',
    isLoading: 'True',
  }

  // handle search bar input, setting it to state.
  handleSearch = function (e) {
    this.setState({ search: e.target.value })
  }

  // display chart data for clicked coin
  displayChart = function(id) {
    console.log('coin id clicked: ', id)
  }

  constructor(props) {
    super(props)
    this.handleSearch = this.handleSearch.bind(this)
    this.displayChart = this.displayChart.bind(this)
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
          // Filter coins by what is entered in search bar.  
          this.state.coins.filter(coin => coin.name.toLowerCase().includes(this.state.search.toLowerCase())).map(coin => {
            return (
              <Coin
                key={coin.id}
                id={coin.id}
                name={coin.name}
                image={coin.image}
                symbol={coin.symbol}
                price={coin.current_price}
                marketcap={coin.market_cap}
                priceChange={coin.price_change_percentage_24h}
                volume={coin.total_volume}
                displayChart={this.displayChart}
              />
            )
          })
        }
      </div>
    )
  }
}

export default App;
