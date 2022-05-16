import { useState } from 'react';
import Modal from '.components/Modal';
import Backdrop from '.components/Backdrop';

function contactUs(props){
    const [ modalIsOpen, setModalIsOpen ] =useState(false);
    function buttonHandler(){
        setModalIsOpen(true);
    }

    function closeModalHandler(){
        setModalIsOpen(false);
    }

    return (
        <div>
            <h2>{props.text}</h2>
            <div className='actions'>
                <button className='btn' onClick={buttonHandler}>
                    OK
                </button>
            </div>
            {modalIsOpen && <Modal />}
            {modalIsOpen && <Backdrop onCancel={closeModalHandler}/>}
        </div>
        
    )

}

export default contactUs;