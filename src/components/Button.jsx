import '@/styles/stylesComponents/button.css'

export default function Button({onclick,type="default",children}) {
 
  return (
    <button type={type} onClick={onclick}>
      {children}
    </button>
  )
}
