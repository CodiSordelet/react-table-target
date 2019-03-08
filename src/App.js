import React, { Component } from 'react';
import './App.css';
import BootstrapTable from 'react-bootstrap-table-next';
class App extends Component {

  state = {
    data: [
      {
        companyName: 'Integra llc',
        companyLocation: 'Atlanta, GA',
        currentValuation: 60000000,
        companyDescription:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
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

    const columns = [{
      dataField: 'companyName',
      text: 'Company Name'
    }, {
      dataField: 'companyLocation',
      text: 'HQ Location'
    }, {
      dataField: 'currentValuation',
      text: 'Current Valuation'
    },
    {
      dataField: 'companyDescription',
      text: 'Company Description'
    },
    {
      dataField: 'status',
      text: 'Status'
    },
    {
      dataField: 'grossProfitMargin',
      text: 'Gross Profit Margin'
    },
    {
      dataField: 'netProfit',
      text: 'Net Profit'
    },
    {
      dataField: 'netProfitMargin',
      text: 'Net Profit Margin'
    },
    {
      dataField: 'currentRatio',
      text: 'Current Ratio'
    }
  ];

  const rowStyle = { backgroundColor: '#c8e6c9' };


   
    

    return (
      <div className="App">
       <BootstrapTable keyField='id' data={ this.state.data } columns={ columns } rowStyle={ rowStyle } />
      </div>
    );
  }
}

export default App;
