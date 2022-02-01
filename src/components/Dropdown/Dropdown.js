import styles from './Dropdown.module.css';

const DropDown = ({selection})=>{
    return(
        <>
            <select className={styles.dropDown}>
                {selection.map(item=><option key={item.id} value={item.value}>{item.value}</option>)}
            </select>
        </>
    );
}

export default DropDown;