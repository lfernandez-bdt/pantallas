import '@/styles/stylesComponents/polizaItem.css'
import { Icon } from './Icon'

export default function PolizaItem({ variation, titulo, nroPoliza, fechaInicio, fechaProxPago, valorGarantizado }) {

  return (
    <div className={"cardPoliza"}>
      <div className='headerCard'>
        <h3>{titulo}</h3>
        <p>Poliza {nroPoliza}</p>
      </div>
      <div className='cardBody'>
        <div className='valorContainer'>
          <h4>Valor Garantizado:</h4>
          <h2>${valorGarantizado}</h2>
        </div>
        <div className='fechasContainer'>
          <div>
            <p>{fechaInicio}</p>
          </div>
          <div className='fechaAndBox'>
            <p>{fechaProxPago}</p>
            <div className='containerBotton'>
              <Icon
                className="icon"
                dataTestId={`icon-Poliza-${nroPoliza}`}
                type={"question"}
              />
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
