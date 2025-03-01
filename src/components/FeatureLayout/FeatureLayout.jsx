import styles from './FeatureLayout.module.scss'

const FeatureLayout = ({title, textTop, textBottom, children, id}) => {
    return (
    <div id={id} className={styles.container}>
        <div className={styles.header}>
            <p className={styles.textTop}>{textTop}</p>
            <h3>{title}</h3>
            <p className={styles.textBottom}>{textBottom}</p>
        </div>
        {children}
    </div>
    )
}

export default FeatureLayout;