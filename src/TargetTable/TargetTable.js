import React from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import { Type } from 'react-bootstrap-table2-editor';
import cellEditFactory from 'react-bootstrap-table2-editor';
import './TargetTable.css';
import axios from 'axios';
import paginationFactory from 'react-bootstrap-table2-paginator';
import KeyContactsTable from '../KeyContactsTable/KeyContactsTable';



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

       this.setState({data});
       let selectedRows = [...this.state.selectedRows];
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
        let target = {
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
            });
      }

      handleChangeName =(e,indexOfObject,objectKey) => {
        const data = [...this.state.data];
        let ObjectIndex = data.map((target) => target.key).indexOf(indexOfObject);
        let index =  data[ObjectIndex].keyContacts.map((contact) => {return contact.key }).indexOf(objectKey);
        data[ObjectIndex].keyContacts[index].name = e.target.value;
        this.setState({data});
      }

      handleChangeEmail =(e,indexOfObject,objectKey) => {
        const data = [...this.state.data];
        let ObjectIndex = data.map((target) => target.key).indexOf(indexOfObject);
        let index = data[ObjectIndex].keyContacts.map((contact) => {return contact.key }).indexOf(objectKey);
        data[ObjectIndex].keyContacts[index].email = e.target.value;
        this.setState({data});
      }

      handleChangePhoneNumber =(e,indexOfObject,objectKey) => {
        const data = [...this.state.data];
        let ObjectIndex = data.map((target) => target.key).indexOf(indexOfObject);
        let index =  data[ObjectIndex].keyContacts.map((contact) => {return contact.key }).indexOf(objectKey);
        data[ObjectIndex].keyContacts[index].phoneNumber = e.target.value;
        this.setState({data});
      }

      handleChangePosition =(e,indexOfObject,objectKey) => {
        const data = [...this.state.data];
        let ObjectIndex = data.map((target) => target.key).indexOf(indexOfObject);
        let index =  data[ObjectIndex].keyContacts.map((contact) => {return contact.key }).indexOf(objectKey);
        data[ObjectIndex].keyContacts[index].position = e.target.value;
        this.setState({data});
      }

      handleDeletionOfContact = (e,indexOfObject,objectKey) => {
       const data = [...this.state.data];
       let ObjectIndex = data.map((target) => target.key).indexOf(indexOfObject);
       let index =  data[ObjectIndex].keyContacts.map((contact) => {return contact.key }).indexOf(objectKey);
       data[ObjectIndex].keyContacts.splice(index,1);
       this.setState({data});
      }

      addNewKeyContact = (e,key) => {
            const data = [...this.state.data];
            let index = data.map((target) => target.key).indexOf(key);
            
       
            data[index].keyContacts.push(
                {   
                    key: new Date().getTime(),
                    name:"",
                    email: "",
                    position: "",
                    phoneNumber: ""
                    }
            )
            this.setState({data})
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
        }
      ];

      const rowStyle = {
         backgroundColor: 'table-dark',
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

      const expandRow = {
        renderer: row => {
            return(
                <KeyContactsTable
                        addNewKeyContact={this.addNewKeyContact}
                        row={row}
                        handleChangeName={this.handleChangeName}
                        handleChangeEmail={this.handleChangeEmail}
                        handleChangePhoneNumber={this.handleChangePhoneNumber}
                        handleChangePosition={this.handleChangePosition}
                        handleDeletionOfContact={this.handleDeletionOfContact}
                    />
            )
        },
        showExpandColumn: true
      }

      const style ={
          color: '#ffffff',
          fontWeight:'bold'
      }

     return (
        <div className='table'>
          <h1 style ={style} className='text-center'>Target Companies for Acquisition</h1>
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
            expandRow ={expandRow}
            pagination={paginationFactory()}
            wrapperClasses='table-dark' />
          </div>
        );
      }
} 

