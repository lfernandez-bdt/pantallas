import '@/styles/stylesComponents/modal.css'
import { Icon } from './Icon'

export default function Modal({onClose, children}) {
  return (
    <>
      <div className='darkBG' />
      <div className='centered'>
        <div className='modal'>
          <div className='modalContent'>
            {children}
          </div>
          <div className='modalActions'>
            <div className='actionsContainer'>
              <button className='modalBtn confirmBtn' onClick={onClose}>Confirmar</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}