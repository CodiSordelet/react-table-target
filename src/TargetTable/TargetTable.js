import React from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import { Type } from 'react-bootstrap-table2-editor';
import cellEditFactory from 'react-bootstrap-table2-editor';
import './TargetTable.css';
import axios from 'axios';
import paginationFactory from 'react-bootstrap-table2-paginator';


export default class TargetTable extends React.Component {
    state = {
        data: [],
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
    
       //filter out rowkey that does not have a matching object in data on state
       this.setState({data});
       let selectedRows = [...this.state.selectedRows];
         //if the selectedRows contains a key that does not belong to currently stored targets,
         // remove it from selectedRows
        this.state.data.forEach(item => {
            selectedRows = selectedRows.filter(key => key !== item.key);
        });

        this.setState({selectedRows});
      }
    
      handleOnSelect = (row, isSelect) => {
        if (isSelect) {
            this.setState(() => ({
              selectedRows: [...this.state.selectedRows, row.key]
            }));
          } else {
            this.setState(() => ({
              selectedRows: this.state.selectedRows.filter(x => x !== row.key)
            }));
          }
      }

      formatContacts = (cell, row) => {
        if(cell) {
            return( 
                <ul>
                {cell.name}
                </ul>
                )
        }

        return 'blank'
      }
    
      
      
      handleOnSelectAll = (isSelect, rows) => {
        const ids = rows.map(r => r.key);
        if (isSelect) {
          this.setState(() => ({
            selectedRows: ids
          }));
        } else {
          this.setState(() => ({
            selectedRows: []
          }));
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

        let target ={
            key: new Date().getTime(),
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
          }
    
    
      data.push(target);
    
      this.setState({data});
      }

      componentDidMount() {
          axios.get('data.json').then(response => {
             this.setState({data:response.data}) 
            })
          
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
          formatter: this.currencyFormatter,
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
          formatter: this.currencyFormatter,
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
          text: 'Operating Ratio',
          formatter: this.ratioFormatter
        },
        {
            dataField: 'keyContact',
            text: 'Key Contact',
            formatter: this.formatContacts
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
        onSelect: this.handleOnSelect,
        onSelectAll: this.handleOnSelectAll,
        clickToEdit: true,
        style: { backgroundColor: '#7aad66' }
      };

     return (
        <div className='table'>
          <h1>Target Companies for Acquisition</h1>
          <div className='btn-toolbar'>
          <button type="button" className="btn btn-primary action" onClick={this.addNewRow}>Add New Row</button>
          <button type="button" className="btn btn-danger" onClick={this.handleDelete}>Delete Row(s)</button>
          </div>
            <BootstrapTable 
            keyField='key' 
            data={ data } 
            columns={ columns } 
            rowEvents={rowEvents} 
            rowStyle={rowStyle} 
            selectRow={selectRow} 
            cellEdit= {cellEditFactory({ mode: 'dbclick',
            blurToSave: true,
            })}
            pagination={paginationFactory()} />
          </div>
        );
      }
}