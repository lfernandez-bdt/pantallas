import { Icon } from "./Icon";

const Dropdown = ({ subMenu, dropdown, depthLevel }) => {
    depthLevel = depthLevel + 1;
    const dropdownClass = depthLevel > 1 ? 'dropdown-submenu' : '';
    return (
        <ul
            className={`dropdown menuItems  ${dropdown ? 'show' : ''
                }`}
        >
    
        </ul>
    );
};

export default Dropdown;