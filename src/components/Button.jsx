import '@/styles/stylesComponents/button.css'

/**
 * @typedef {Object} ButtonProps
 * @property {import('react').MouseEventHandler<HTMLButtonElement>} onclick
 * @property {import('react').ReactNode} children
 * @property {import('react').CSSProperties} style
*/

/**
 * @param {ButtonProps} props
 */
export default function Button({ onclick, type = "default", children, style = {} }) {

  return (
    <button type={type} onClick={onclick} style={style}>
      {children}
    </button>
  )
}
