import React from 'react';
import PropTypes from 'prop-types';

 const KeyContactsTable = props => {
                return (  
                <div>
                    <h1 className='text-center'>Key Contacts</h1>
                    <button type="button" className="btn btn-success action" onClick={e => props.addNewKeyContact(e,props.row.key)}>Add New</button>
                    <table className="table table-striped style-font table-bordered">
                        <thead>
                            <tr>
                            <th  className="align-middle" scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Phone number</th>
                            <th scope="col">Position</th>
                            <th scope="col">Remove</th>
                            </tr>
                        </thead>
                         <tbody>
                    {
                        props.row.keyContacts.map((item,key) =>  {
                            return(
                                <tr key ={key}>
                                <td><input className="align-middle" key={key} type="text" value={item.name} onChange={ e => props.handleChangeName(e,props.row.key,item.key) }/></td>
                                <td><input key={key} type="text" value={item.email} onChange={ e => props.handleChangeEmail(e,props.row.key,item.key) }/></td>
                                <td><input key={key} type="text" value={item.phoneNumber} onChange={ e => props.handleChangePhoneNumber(e,props.row.key,item.key) }/></td>
                                <td><input key={key} type="text" value={item.position} onChange={ e => props.handleChangePosition(e,props.row.key,item.key) }/></td>
                                <td><button type="button" className="btn btn-danger" onClick={e => props.handleDeletionOfContact(e,props.row.key,item.key)}>Remove</button></td>
                                </tr>
                            )
                    })
                    }
                    </tbody>
                    </table>
                    </div>
                )   
}

export default KeyContactsTable;

KeyContactsTable.propTypes = {
    addNewKeyContact: PropTypes.func.isRequired,
    row: PropTypes.object.isRequired,
    handleChangeName: PropTypes.func.isRequired,
    handleChangeEmail: PropTypes.func.isRequired,
    handleChangePhoneNumber: PropTypes.func.isRequired,
    handleChangePosition: PropTypes.func.isRequired,
    handleDeletionOfContact: PropTypes.func.isRequired
}