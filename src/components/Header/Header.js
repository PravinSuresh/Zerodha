import styles from './Header.module.css';

const Header = ({count})=>{
    return(
        <div className={styles['header']}>
            <h3 className={styles['holdings']}>Holdings({count})</h3>
            <span className={styles.dropDown}>dropdown</span>
        </div>
    );
}

export default Header;