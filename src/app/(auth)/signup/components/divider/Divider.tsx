import styles from './divider.styles';

function Divider() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.line} />
      <p className={styles.text}>OR</p>
      <div className={styles.line} />
    </div>
  );
}

export default Divider;
