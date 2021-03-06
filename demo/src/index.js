import React, { Component } from 'react';
import './index.css';

import Chart from './components/Chart/Chart.js';
import Base from './components/Base/Base.js';
import Country from './components/Country/Country.js'

class App extends Component {

  state = {

    baseCurrency: "USD",
    rates: {},
    comparisons: [],

  };

  componentDidMount() {
    fetch("https://api.exchangeratesapi.io/latest")
      .then(response => response.json())
      .then(api => {

        console.log("got data", api.rates);
        this.setState({
          rates: api.rates,
        });
      });
  };





  countrySelect = (ev) => {
    const comparisons = this.state.comparisons.concat([ev.target.value])
    this.setState({ comparisons: comparisons });
    console.log(comparisons)

  }




  onSubmit = (ev) => {

    this.setState({ baseCurrency: ev.target.value });
    console.log({ baseCurrency: ev.target.value });
    const baseCurrency = ev.target.value;
    console.log(baseCurrency);
    const url = "https://api.exchangeratesapi.io/latest?base=" + ev.target.value;

    fetch(url)
      .then(response => response.json())
      .then(data => {
        this.setState({ rates: data.rates })
        console.log(data.rates)

      });


  };



  render() {
    console.log("State:", this.state)


    return (

      <body className="background"  >

        <div className="Container">



          <Base
            BaseChange={this.onSubmit.bind(this)}
          />




          <nav className="topnav">
            Currency Exchange Rate
  
                {/* <Base
              BaseChange={this.onSubmit.bind(this)}
            /> */}


            {/* <Country
              onChange={this.countrySelect.bind(this)}
            /> */}

          </nav>

<Country
              onChange={this.countrySelect.bind(this)}
            />




          <Chart
            comparisons={this.state.comparisons}
            rates={this.state.rates}
          />

        </div>
      </body>
    );
  }
}
export default App;
