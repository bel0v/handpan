import React from 'react'


const ProceedButtons = (props) => 
  <div className = 'proceed-buttons'>
    <button 
      className ={'proceed-button-proceed long-btn '  + (props.saveEnabled ? '' : 'disabled')}
      onClick={props.onClickProceed}> 
        Заказать эту настройку > 
    </button>
    <span className ='save-hint'>Ноты в пресете не могут повторяться!</span>
  </div>

ProceedButtons.propTypes = {
  saveEnabled: React.PropTypes.bool.isRequired
}

export default ProceedButtons;