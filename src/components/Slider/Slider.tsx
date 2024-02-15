import BarChart from '@/images/bar-chart.webp'
import ChessPiece from '@/images/chess-piece.webp'
import Magnet from '@/images/magnet.webp'
import { Curve } from '@components/Curve'
import Image from 'next/image'
import styles from './slider.module.scss'

const Slider = () => {
  return (
    <div className={styles.slider}>
      <div className={styles.slider__graphic}>
        <div className={`${styles.slider__curve} dark:text-white`}>
          <Curve />
        </div>
        <div className={styles.slider__icons}>
          <div
            className={`${styles.slider__icon} ${styles['slider__icon--active']} dark:bg-[#5B5B5B]`}
          >
            <Image src={ChessPiece} alt="Great APY" width={117} height={117} />
          </div>
          <div
            className={`${styles.slider__icon} dark:border dark:border-white dark:border-opacity-5 dark:bg-[#181818]`}
          >
            <Image src={BarChart} alt="Great APY" width={117} height={117} />
          </div>
          <div
            className={`${styles.slider__icon} dark:border dark:border-white dark:border-opacity-5 dark:bg-[#181818]`}
          >
            <Image src={ChessPiece} alt="Great APY" width={117} height={117} />
          </div>
          <div
            className={`${styles.slider__icon} dark:border dark:border-white dark:border-opacity-5 dark:bg-[#181818]`}
          >
            <Image src={Magnet} alt="Great APY" width={117} height={117} />
          </div>
        </div>
      </div>
      <div className={`${styles.slider__texts} dark:text-white`}>
        <div className={styles.slider__text}>
          <h3 className="dark:text-primary">Withdraw Whenever</h3>
          <p>
            Withdraw anytime as long as there is liquidity in the vault. Read
            more about the liquidity strategy: https://docs.ggpVault.com
          </p>
        </div>
      </div>
    </div>
  )
}
export default Slider
