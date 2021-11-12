import Link from 'next/link'
import styles from '../../styles/btnSecondary.module.scss'

function BtnSecondary({ name, fun }) {
    return (
      <button  onClick={fun} className={styles.btnSecondary} >{name}</button>
    );
}

export default BtnSecondary;
