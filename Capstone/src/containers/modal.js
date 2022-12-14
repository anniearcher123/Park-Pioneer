import React from "react";

function Modal () {
    return (
       <div className={`modal-${modalState == true ? 'show' : 'hide'}`}>
          
       </div>
    )
}

export default Modal;