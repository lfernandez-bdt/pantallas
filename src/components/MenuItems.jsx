import '@/styles/stylesComponents/narvarLeft.css'

import { useState, useEffect, useRef } from 'react';
import Dropdown from './Dropdown';
import Link from 'next/link';
import { Icon } from './Icon';
import { useRouter } from 'next/navigation';


const MenuItems = ({ items, depthLevel }) => {
    const [dropdown, setDropdown] = useState(false);
    const router = useRouter()

    let ref = useRef();

    useEffect(() => {

    }, [dropdown]);

    const closeDropdown = () => {
        dropdown && setDropdown(false);
    };

    return (
        <>
            <div
                className="menuItems item"
                ref={ref}
            >
                <button
                    className='iconTitle'
                    onClick={() => { router.push(items.href) }}
                >
                    <Icon
                        dataTestId={`icon-${items.title}`}
                        type={items.icon}
                    />

                    {items.title}
                </button>
                {
                    items.submenu && (
                        <button
                            type="button"
                            className='iconDropdown'
                            aria-haspopup="subMenu"
                            aria-expanded={dropdown ? 'true' : 'false'}
                            onClick={() => setDropdown((prev) => !prev)}
                        >
                            <Icon
                                dataTestId={`icon-dropsown${items.title}`}
                                type={"chevronDown"}
                            />
                        </button>

                    )
                }
            </div>
            {items.submenu?.length ? (
                <Dropdown
                    depthLevel={depthLevel}
                    subMenu={items.submenu}
                    dropdown={dropdown}
                />
            ) : null}


        </>

    );
};

export default MenuItems;
