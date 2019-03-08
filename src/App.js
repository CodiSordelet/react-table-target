import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BootstrapTable from 'react-bootstrap-table-next';
class App extends Component {

  state = {
    data: [
      {
        companyName: 'Integra llc',
        companyLocation: 'Atlanta, GA',
        currentValuation: 60000000,
        companyDescription:'',
        keyContacts:[{
          name: 'Codi Sordelet',
          position:'CEO',
        }],
        status:'approved',
        grossProfitMargin: 7575884,
        netProfit:67588548,
        netProfitMargin: 6778585,
        currentRatio: .6
      },
      {
        companyName: 'Integra llc',
        companyLocation: 'Atlanta, GA',
        currentValuation: 60000000,
        companyDescription:'',
        keyContacts:[{
          name: 'Codi Sordelet',
          position:'CEO',
        }],
        status:'approved',
        grossProfitMargin: 7575884,
        netProfit:67588548,
        netProfitMargin: 6778585,
        currentRatio: .6
      },
      {
        companyName: 'Integra llc',
        companyLocation: 'Atlanta, GA',
        currentValuation: 60000000,
        companyDescription:'',
        keyContacts:[{
          name: 'Codi Sordelet',
          position:'CEO',
        }],
        status:'approved',
        grossProfitMargin: 7575884,
        netProfit:67588548,
        netProfitMargin: 6778585,
        currentRatio: .6
      },
      {
        companyName: 'Integra llc',
        companyLocation: 'Atlanta, GA',
        currentValuation: 60000000,
        companyDescription:'',
        keyContacts:[{
          name: 'Codi Sordelet',
          position:'CEO',
        }],
        status:'approved',
        grossProfitMargin: 7575884,
        netProfit:67588548,
        netProfitMargin: 6778585,
        currentRatio: .6
      },
      {
        companyName: 'Integra llc',
        companyLocation: 'Atlanta, GA',
        currentValuation: 60000000,
        companyDescription:'',
        keyContacts:[{
          name: 'Codi Sordelet',
          position:'CEO',
        }],
        status:'approved',
        grossProfitMargin: 7575884,
        netProfit:67588548,
        netProfitMargin: 6778585,
        currentRatio: .6
      },
      {
        companyName: 'Integra llc',
        companyLocation: 'Atlanta, GA',
        currentValuation: 60000000,
        companyDescription:'',
        keyContacts:[{
          name: 'Codi Sordelet',
          position:'CEO',
        }],
        status:'approved',
        grossProfitMargin: 7575884,
        netProfit:67588548,
        netProfitMargin: 6778585,
        currentRatio: .6
      },
    ]
  }

  componentDidMount() {
    
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
