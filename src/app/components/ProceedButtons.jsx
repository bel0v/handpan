import React from 'react'


const ProceedButtons = (props) => 
  <div className = 'proceed-buttons'>
    <button 
      className ={'proceed-button-save long-btn ' + (props.saveEnabled ? '' : 'disabled')} 
      onClick={props.onClickSave}> 
        Сохранить*
    </button>
    <button 
      className ='proceed-button-proceed long-btn' 
      onClick={props.onClickProceed}> 
        Заказать > 
    </button>
    <span className ='save-hint'>Ноты в пресете не могут повторяться!</span>
  </div>

ProceedButtons.propTypes = {
  saveEnabled: React.PropTypes.bool.isRequired
}

export default ProceedButtons;