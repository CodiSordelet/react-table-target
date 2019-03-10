import React, { Component } from 'react';
import './App.css';
import BootstrapTable from 'react-bootstrap-table-next';
import { Type } from 'react-bootstrap-table2-editor';




class App extends Component {

  state = {
    modalShow: false,
    data: [
      {
        key:0,
        companyName: 'Integra llc',
        companyLocation: 'Atlanta, GA',
        currentValuation: 60000000,
        companyDescription:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        keyContacts:[{
          name: 'Codi Sordelet',
          position:'CEO',
        }],
        status:'Pending Approval',
        grossProfitMargin: 7575884,
        netProfit:67588548,
        netProfitMargin: 6778585,
        currentRatio: .6
      },
      {
        key: 1,
        companyName: 'Alan llc',
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
        key: 2,
        companyName: 'Radiant llc',
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
        key: 3,
        companyName: 'Cramer llc',
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
        key: 4,
        companyName: 'Giovanni\'s Pizza',
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
        key: 5,
        companyName: 'Boda Inc',
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
      }
    ],
    selectedRows: []
  }



  onClickOfRow = (e, row, rowIndex) => {
    let selectedRows=[...this.state.selectedRows];

    if(selectedRows.includes(row.key)) {
      selectedRows = selectedRows.filter(value => value !== row.key);
    } else if(!selectedRows.includes(row.key)) {
      selectedRows.push(row.key);
    }

    this.setState({selectedRows});
  }


  handleDelete = () => {
   let rows = [...this.state.data];
    /*
    * Delete should filter for each
    *
    * 
    */ 

    // for(let i = 0; this.state.selectedRows.length; i++) {
    //   const key = this.state.selectedRows[i];
    //   console.log(rows.includes(key));
    //   if(rows.includes(key)) {

    //       rows = rows.filter(row => row.key !== key);
    //   }
    // }

    this.setState({data: rows});
    // let arrayOfRows = [...this.state.selectedRows];
    // //
    // let dataArray = [...this.state.data];
    // for(let i = 0; i < arrayOfRows.length; i++) {
      
    //   delete dataArray[temp];
    // }
    
    // let finalArray = this.arrayRemove(dataArray,'undefined');
    // console.log(finalArray);
    //  this.setState({
    //    data: finalArray,
    //    selectedRows: []
    //   });
  }

  handleOnSelect = (row, isSelect) => {
    return true; 
  }

  handleOnSelectAll = (isSelect, rows) => {
    if (isSelect && rows) {
      let selectedRows = rows.map(r => r.key);
      this.setState({selectedRows});

    } else if(isSelect && !rows) {
      
      this.setState({selectedRows: []});
  
    }
  }

  showModal = () => {
    this.setState({showModal: true})
  }

  addNewRow = () => {

  }


  render() {
    const data =[...this.state.data];
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
      text: 'Status',
      editor: {
        type: Type.SELECT,
        options: [{
          value: 'Resesarching',
          label: 'Resesarching'
        }, {
          value: 'Pending Approval',
          label: 'Pending Approval'
        }, {
          value: 'Approved',
          label: 'Approved'
        }, {
          value: 'Declined',
          label: 'Declined'
        }]
      }
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
    },
    {
      dataField: "databasePkey",
      text: "Remove",
      
  }
  ];

  const rowStyle = {
     backgroundColor: 'white',
     fontSize: 12
  };

  const rowEvents = {
    onClick: this.onClickOfRow
  };

  const selectRow = {
    mode: 'checkbox',
    clickToSelect: true,
    style: { backgroundColor: '#ef8383' },
    onSelect: this.handleOnSelect,
    onSelectAll: this.handleOnSelectAll
  };


    return (
      <div className="App">
      <button type="button" className="btn btn-primary" onClick={this.addNew}>Add New</button><br/>
      <button type="button" className="btn btn-danger" onClick={this.handleDelete}>Delete Row(s)</button>
        <BootstrapTable 
        keyField='key' 
        data={ data } 
        columns={ columns } 
        rowEvents={rowEvents} 
        rowStyle={rowStyle} 
        selectRow={selectRow} />
      </div>
    );
  }
}

export default App;
