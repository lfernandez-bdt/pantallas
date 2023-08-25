import '@/styles/stylesComponents/modal.css'
import { Icon } from './Icon'

export default function Confirm({onCancel, onAccept, btnMessage, children}) {
  return (
    <>
      <div className='darkBG'/>
      <div className='centered'>
        <div className='modal'>
          <button className='closeBtn' onClick={onCancel}>
            <Icon dataTestId={`icon-cross`} type={`cross`} style={{ marginBottom: "-3px" }} />
          </button>
          <div className='modalContent'>
            {children}
          </div>
          <div className='modalActions'>
            <div className='actionsContainer'>
              <button className='cancelBtn whiteBtn' onClick={onCancel}>
                {btnMessage.cancel}
              </button>
              <button className='deleteBtn' onClick={onAccept}>
                {btnMessage.accept}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
