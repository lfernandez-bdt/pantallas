import '@/styles/stylesComponents/modalDark.css';
import { Icon } from './Icon';

export default function ModalDark({
  onClose,
  onClickLeft,
  onClickRight,
  titleLeft,
  titleRight,
  confirmBtn,
  children,
}) {
  return (
    <>
      <div className='backgroundModalDark' />
      <div className='centerModalDark'>
        <div className='modalDark'>
          <div className='headerModalDark'>
            <Icon
              className={'closeIconModalDark'}
              type={'cross'}
              onClick={() => onClose(false)}
            />
          </div>
          <div className='contentModalDark'>{children}</div>

          <div className='buttonsContainerModalDark'>
            <button className='btnModalDark ' onClick={onClickLeft}>
              {titleLeft}
            </button>
            <button
              className={confirmBtn ? 'confirmBtnModalDark' : 'btnModalDark'}
              onClick={onClickRight}
            >
              {titleRight}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
