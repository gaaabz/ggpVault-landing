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
        <div className={styles.slider__curve}>
          <Curve />
        </div>
        <div className={styles.slider__icons}>
          <div className={styles.slider__icon}>
            <Image src={ChessPiece} alt="Great APY" width={117} height={117} />
          </div>
          <div className={styles.slider__icon}>
            <Image src={BarChart} alt="Great APY" width={117} height={117} />
          </div>
          <div className={styles.slider__icon}>
            <Image src={ChessPiece} alt="Great APY" width={117} height={117} />
          </div>
          <div className={styles.slider__icon}>
            <Image src={Magnet} alt="Great APY" width={117} height={117} />
          </div>
        </div>
      </div>
      <div className={styles.slider__texts}>
        <div className={styles.slider__text}>
          <h3>Withdraw Whenever</h3>
          <p>
            Withdraws are possible anytime except the 3 days before a rewards
            period. Earned Rewards will be avaliable immedately after the
            rewards period ends.
          </p>
        </div>
      </div>
    </div>
  )
}
export default Slider
