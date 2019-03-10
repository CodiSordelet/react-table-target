import React from 'react';
import './Modal.css';


export default class Modal extends React.Component {
   

    render() {
        if(!this.props.show) {
            return null;
        }

        return (
            <div className='modal' >
                 <div className="modal-content">
    <span className="close">&times;</span>
    <p>Some text in the Modal..</p>
  </div>
                <button onClick={this.props.toggleModal}>Exit</button>
            </div>
        )
        
    }
}