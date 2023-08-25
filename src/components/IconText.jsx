import '@/styles/stylesComponents/iconText.css'
import { Icon } from './Icon'
import Link from 'next/link'

export default function IconText({ icon, text,url, linkText}) {

    return (
        <div
            className={"containerItem"}
        >  
        <div className='icon'>
            <Icon
                dataTestId={`icon-${text}`}
                type={icon}
            />
        </div>
            <div className='text'>
            <p>
                {text} 
                <Link
                key={"getAccesPassword"}
                href={url}
                className={"linkIconText"}
              >
               {linkText}
              </Link> 
            </p>
            </div>
           
           
        </div>
    )
}
