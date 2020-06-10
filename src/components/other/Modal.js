import React from 'react'
import ReactDOM from 'react-dom'

const Modal = props => {
  return ReactDOM.createPortal(
    <div onClick={props.onDismiss} className="ui dimmer mds visible active" >
      <div onClick={(e) => e.stopPropagation()} className="ui standard modals visible active" style={{}}>
        <div className="header">{props.title} <br />{props.question}</div>

        <div className="content"  >{props.content}</div>
        <div className="actions">{props.actions}</div>
      </div>
    </div>,
    document.querySelector('#modal')
  )
}

export default Modal
