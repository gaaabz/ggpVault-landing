'use client'

import GgpLogoColor from '@/images/ggp-vault-color.svg'
import GgpLogo from '@/images/ggp-vault.svg'
import { IconMoon } from '@components/IconMoon'
import { IconSun } from '@components/IconSun'
import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import styles from './header.module.scss'

const Header = () => {
  const [darkMode, setDarkMode] = useState(false)
  const headerContainer = useRef<HTMLDivElement | null>(null)
  const [headerHidden, setHeaderHidden] = useState(false)
  const [currentScrollTop, setCurrentScrollTop] = useState(0)

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }

    const handleScroll = () => {
      const headerContainerHeight = headerContainer.current?.offsetHeight

      if (headerContainerHeight === undefined) return

      if (
        window.scrollY > currentScrollTop &&
        window.scrollY > headerContainerHeight
      ) {
        setHeaderHidden(true)
      } else {
        setHeaderHidden(false)
      }

      setCurrentScrollTop(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [darkMode, currentScrollTop])

  const toggleDarkMode = () => setDarkMode(!darkMode)

  return (
    <>
      <header
        className={clsx(styles.header, {
          [styles['header--hidden']]: headerHidden,
          [`${styles['header--fixed']} dark:bg-[#131313] dark:bg-opacity-60`]:
            currentScrollTop > 0,
        })}
        ref={headerContainer}
      >
        <div className={styles.header__container}>
          <div className={styles.header__logo}>
            <Image
              className="block dark:hidden"
              src={GgpLogoColor}
              alt="GGP Vault"
              width={189}
              height={36}
            />
            <Image
              className="hidden dark:block"
              src={GgpLogo}
              alt="GGP Vault"
              width={189}
              height={36}
            />
          </div>
          <div className={styles.header__bar}>
            <nav className={`${styles.header__nav} dark:text-white`}>
              <Link href="https://docs.seafi.app">Docs</Link>
              <Link href="#faqs">FAQs</Link>
              <Link
                href="https://app.seafi.app"
                className={`${styles.header__button} dark:border-white`}
              >
                Launch app
              </Link>
            </nav>
            <button
              className={clsx(styles.header__mode, {
                [styles['header__mode--dark']]: darkMode,
              })}
              onClick={toggleDarkMode}
            >
              <span>
                <IconSun />
              </span>
              <span>
                <IconMoon />
              </span>
            </button>
          </div>
        </div>
      </header>
    </>
  )
}
export default Header
