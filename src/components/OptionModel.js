import React from 'react'
import Modal from 'react-modal'

const OptionModel=(props)=>(
    <Modal
        isOpen={!!props.selectOption}
        contentLabel="Selected Option"
        onRequestClose={props.handleOkay}
    >
        <h3>Selected Option</h3>
        {props.selectOption && <p>{props.selectOption}</p>}
        <button onClick={props.handleOkay}>Okay</button>
    </Modal>
)

export default OptionModel