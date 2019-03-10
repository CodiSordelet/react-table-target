import React, { Component } from 'react';
import './App.css';
import BootstrapTable from 'react-bootstrap-table-next';
import { Type } from 'react-bootstrap-table2-editor';
import cellEditFactory from 'react-bootstrap-table2-editor';
import Modal from './Modal/Modal';




class App extends Component {

  state = {
    showModal: false,
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
        currentRatio: 60
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
        currentRatio: 60
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
        currentRatio: 60
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
        currentRatio: 60
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
        currentRatio: 60
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
        currentRatio: 60
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

  onClose = e => {
    this.props.show = false;
  }

  currencyFormatter = (cell,row) => {
    if(!cell) {
      return '';
    }
    
    return (
      <span>
        $ { cell.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") }
      </span>
    )
  }


  handleDelete = () => {
   let data = [...this.state.data];
   this.state.selectedRows.forEach(item => {
     data = data.filter(obj => obj.key !== item);
   });

   this.setState({data});
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

  ratioFormatter = (cell,row) => {
     if(!cell) {
       return '';
     }
      return (
        <span>
          % {cell}
        </span>
      )
  }

  addNewRow = () => {
    const data =[...this.state.data];


  data.push(  {
    key: this.state.data[this.state.data.length - 1].key + 1,
    companyName: '',
    companyLocation: '',
    currentValuation: null,
    companyDescription:  null,
    keyContacts:[],
    status:'',
    grossProfitMargin: null,
    netProfit: null,
    netProfitMargin: null,
    currentRatio: null
  });

  this.setState({data});
    // const showModal = !this.state.showModal;
    //   this.setState({showModal});
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
      text: 'Current Valuation',
      formatter: this.currencyFormatter
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
      text: 'Gross Profit Margin',
      formatter: this.currencyFormatter
    },
    {
      dataField: 'netProfit',
      text: 'Net Profit',
      formatter: this.currencyFormatter
    },
    {
      dataField: 'netProfitMargin',
      text: 'Net Profit Margin',
      formatter: this.currencyFormatter
    },
    {
      dataField: 'currentRatio',
      text: 'Current Ratio',
      formatter: this.ratioFormatter
    },
   
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
    clickToSelect: false,
    onSelect: this.handleOnSelect,
    onSelectAll: this.handleOnSelectAll,
    clickToEdit: true
  };


    return (
      <div className="App">
      <h1>Target Companies for Acquisition</h1>
      <button type="button" className="btn btn-primary" onClick={this.addNewRow}>Add New Row</button><br/>
      <button type="button" className="btn btn-danger" onClick={this.handleDelete}>Delete Row(s)</button>
        <BootstrapTable 
        keyField='key' 
        data={ data } 
        columns={ columns } 
        rowEvents={rowEvents} 
        rowStyle={rowStyle} 
        selectRow={selectRow} 
        cellEdit= {cellEditFactory({ mode: 'click',
        blurToSave: true,
        })} />
      
      </div>
    );
  }
}

export default App;
