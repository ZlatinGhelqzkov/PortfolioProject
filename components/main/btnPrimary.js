import Link from 'next/link'
import styles from '../../styles/btnPrimary.module.scss'

function BtnPrimary({ name, color, fun }) {
    return (
      <button onClick={fun} style={{ background: color }} className={styles.btnPrimary}>{name}</button>
    );
}

export default BtnPrimary;
