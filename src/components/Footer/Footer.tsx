import { Logo } from '@components/Logo'
import styles from './footer.module.scss'

const Footer = () => {
  return (
    <footer className={`${styles.footer} dark:bg-black dark:text-white`}>
      <p className={styles.footer__designed}>Designed by RowshipLab</p>
      <div className={styles.footer__logo}>
        <Logo />
      </div>
      <p className={styles.footer__copyright}>
        © 2024. GGP Vault. All rights reserved
      </p>
    </footer>
  )
}
export default Footer
