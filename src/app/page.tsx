import { IconUnion } from '@/components/IconUnion'
import { Slider } from '@/components/Slider'
import Screenshot from '@/images/screenshot.webp'
import Image from 'next/image'
import Link from 'next/link'
import styles from './home.module.scss'

const faqs = [
  {
    title: 'Has xGGP been audited?',
    content:
      'Yes - we did two private audits that can be viewed on our github or in our docs.',
  },

  {
    title: 'What are the expected rewards?',
    content:
      '20% APY and rewards will be distributed a few hours before each GGP rewards period.',
  },
  {
    title: 'When do I need to have GGP in the vault?',
    content:
      'Rewards are distrubuted a few hours before each rewards period. Make sure to you have your GGP tokens deposited in the xGGP vault before the rewards period to make sure you earn yield. ',
  },
  {
    title: 'When can I withdraw my GGP from the vault?',
    content:
      'We will try and maintain as much liquidity as possible for depositors. Before each rewards period, GGP is withdrawn from the vault for staking. After the rewards period, as our nodes finish their validation cycle, GGP will be re-deposited into the vault. Within 14 days of a rewards cycle, the vault should have enough GGP for 100% of people to withdraw. Any GGP can be withdraw before then as long as there is liquidty in the vault.',
  },
  {
    title: 'What are the risks?',
    content:
      'We outline these in more detail in our docs: https://docs.ggpvault.com',
  },
  {
    title: 'How does it work?',
    content:
      'We are operating several GoGoPool minipools alongside this vault. We supply the Avax and handle the operation of the nodes, and use the vault GGP to stake on those nodes. Yield comes from the GGP rewards cycles.',
  },
  {
    title: 'Is xGGP fully permissionless?',
    content:
      "No - the contracts are upgradable by SeaFi LLC's 2:3 multisig and the GGP is being staked on nodes operated by the SeaFi team.",
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
            <p>Stake your GGP for ~20% APY.</p>
          </div>
          <Link href="https://app.seafi.app" className="button">
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
              rewards. You can get 20% APY by depositing it into the xGGP
              tokenized vault.
            </p>
          </div>

          <Slider />
        </div>
      </section>

      <section
        className={`${styles.creator} dark:bg-creator-pattern-dark dark:text-white`}
      >
        {/* <p>Are you a digital creator?</p> */}
        <h2 className={styles.creator__title}>Start Earning Rewards</h2>
        <Link href="https://app.seafi.app" className="button dark:bg-secondary">
          Deposit GGP
        </Link>
      </section>

      <section
        className={`${styles.faqs} dark:bg-faq-pattern-dark dark:text-white`}
        id="faqs"
      >
        <div className={styles.faqs__container}>
          <div className={styles.faqs__title}>
            <h2>Frequently asked questions</h2>
            <p>
              If you can’t find what you’re looking for, join the{' '}
              <a href="https://discord.gg/nMC2XnXcVC">GGP discord</a>.
            </p>
          </div>
          <div className={styles.faqs__list}>
            {faqs.map((faq, index) => (
              <details
                key={index}
                className={`${styles.faqs__item} group dark:bg-[#2F2F2F]`}
              >
                <summary className="dark:text-white">
                  <span>{faq.title}</span>
                  <span className="dark:last:text-white group-open:dark:last:bg-white group-open:dark:last:text-[#2F2F2F]">
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
