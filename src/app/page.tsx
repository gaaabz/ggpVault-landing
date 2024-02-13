import { IconUnion } from '@/components/IconUnion'
import { Slider } from '@/components/Slider'
import Screenshot from '@/images/screenshot.webp'
import Image from 'next/image'
import Link from 'next/link'
import styles from './home.module.scss'

const faqs = [
  {
    title: 'Does ggGGP handle VAT?',
    content:
      'Well no, but if you move your company offshore you can probably ignore it.',
  },
  {
    title: 'Can I pay for my subscription via purchase order?',
    content: '',
  },
  {
    title: 'How do I apply for a job at ggGGP?',
    content: '',
  },
  {
    title: 'What was that testimonial about tax fraud all about?',
    content: '',
  },
  {
    title:
      'ggGGP sounds horrible but why do I still feel compelled to purchase?',
    content: '',
  },
  {
    title:
      'I found other companies called ggGGP, are you sure you can use this name?',
    content: '',
  },
  {
    title: 'How do you generate reports?',
    content: '',
  },
  {
    title: 'Can we expect more inventory features?',
    content: '',
  },
  {
    title: 'I lost my password, how do I get into my account?',
    content: '',
  },
]

export default function Home() {
  return (
    <>
      <section className={`${styles.yield} dark:bg-[#131313]`}>
        <div
          className={`${styles.yield__gradient} dark:bg-[radial-gradient(circle_at_12%_0%,_rgba(0,194,255,0)_5%,_rgba(0,194,255,0.3)_30%,_rgba(0,194,_255,_0.1)_50%,_rgba(0,194,255,0)_60%)]`}
        ></div>
        <div className={styles.yield__top}>
          <div className={`${styles.yield__title} dark:text-white`}>
            <h1>
              Earn <span className="dark:text-secondary">yield</span> on your
              GGP
            </h1>
            <p>
              Trade with over different cryptocurrency and fiat curency pairs,
              including Bitcoin, Ethereum, and BNB pairs
            </p>
          </div>
          <Link href="#" className="button">
            Stake GGP Now
          </Link>
          <Image
            className={styles.yield__image}
            src={Screenshot}
            alt="Earn yield on your GGP"
            width={869}
            height={485}
          />
        </div>
        <div className={styles.yield__bottom}>
          <div className={`${styles.yield__title} dark:text-white`}>
            <h2>
              Earn GGP every rewards cycle, without{' '}
              <span>running a minipool</span> or staking AVAX
            </h2>
            <p>
              If you are doing nothing with your GGP you are missing out on
              rewards. You can get 25% APY by depositing it into our tokenized
              vault.
            </p>
          </div>

          <Slider />
        </div>
      </section>

      <section
        className={`${styles.creator} dark:bg-creator-pattern-dark dark:text-white`}
      >
        <p>Are you a digital creator?</p>
        <h2 className={styles.creator__title}>Earn free crypto with Neftly</h2>
        <Link href="#" className="button dark:bg-secondary">
          Become creator
        </Link>
      </section>

      <section className={styles.faqs}>
        <div className={styles.faqs__container}>
          <div className={styles.faqs__title}>
            <h2>Frequently asked questions</h2>
            <p>
              If you can’t find what you’re looking for, email our support team
              and if you’re lucky someone will get back to you.
            </p>
          </div>
          <div className={styles.faqs__list}>
            {faqs.map((faq, index) => (
              <details key={index} className={styles.faqs__item}>
                <summary>
                  <span>{faq.title}</span>
                  <span>
                    <IconUnion />
                  </span>
                </summary>
                <p>{faq.content}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
