import styles from './Header.module.css';

import { dropDownData } from '../../data';

import DropDown from '../Dropdown/Dropdown';

const Header = ({count})=>{
    return(
        <div className={styles['header']}>
            <h3 className={styles['holdings']}>Holdings({count})</h3>
            <span><DropDown selection={dropDownData} /></span>
        </div>
    );
}

export default Header;