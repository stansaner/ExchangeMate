import React from 'react';
import "./modal.css";


const Modal =  (props) => {

    function handleModalClose () {

        props.setShowModal(false)
    }

    return (

        <div className={`modal ${props.showModal ? 'show' : ''} `} onClick={handleModalClose}>
            <div className="modal-body">
                <p>Please select two currencies</p>
                <button onClick={handleModalClose}>close</button>
            </div>
        </div>
    )
}

export default Modal;