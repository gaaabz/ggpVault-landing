'use client'

import GgpLogoColor from '@/images/ggp-vault-color.svg'
import GgpLogo from '@/images/ggp-vault.svg'
import { IconMoon } from '@components/IconMoon'
import { IconSun } from '@components/IconSun'
import { LogoMobile } from '@components/LogoMobile'
import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import styles from './header.module.scss'

const items = [
  { href: '/', label: 'Home' },
  { href: 'https://docs.seafi.app', label: 'Docs' },
  { href: '#faqs', label: 'FAQs' },
]

const Header = () => {
  const pathname = usePathname()
  const [darkMode, setDarkMode] = useState(false)
  const headerContainer = useRef<HTMLDivElement | null>(null)
  const [headerHidden, setHeaderHidden] = useState(false)
  const [currentScrollTop, setCurrentScrollTop] = useState(0)
  const [hamburgerOpen, setHamburgerOpen] = useState(false)

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }

    const handleScroll = () => {
      const headerContainerHeight = headerContainer.current?.offsetHeight

      if (headerContainerHeight === undefined) return false
      if (hamburgerOpen) return false

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
  }, [darkMode, currentScrollTop, hamburgerOpen])

  const toggleDarkMode = () => setDarkMode(!darkMode)
  const toggleHamburger = () => setHamburgerOpen(!hamburgerOpen)

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
              className="hidden dark:hidden md:block"
              src={GgpLogoColor}
              alt="GGP Vault"
              width={189}
              height={36}
            />
            <Image
              className="hidden md:hidden dark:md:block"
              src={GgpLogo}
              alt="GGP Vault"
              width={189}
              height={36}
            />
            <span className={`${styles.header__logomobile} dark:text-white`}>
              <LogoMobile />
            </span>
          </div>
          <div className={styles.header__bar}>
            <nav
              className={clsx(
                `${styles.header__nav} dark:bg-black dark:text-white dark:md:bg-transparent`,
                { [styles['header__nav--open']]: hamburgerOpen },
              )}
            >
              {items.map(({ href, label }, index) => {
                return (
                  <Link
                    key={href}
                    href={href}
                    className={clsx({
                      [styles['header__nav--active']]: pathname === href,
                      ['block md:hidden']: index === 0,
                    })}
                  >
                    {label}
                  </Link>
                )
              })}
            </nav>
            <Link
              href="https://app.seafi.app"
              className={`${styles.header__button} dark:border-white dark:text-white`}
            >
              Launch app
            </Link>
            <button
              className={clsx(styles.header__mode, {
                [styles['header__mode--dark']]: darkMode,
                [styles['header__mode--open']]: hamburgerOpen,
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
            <button
              className={clsx(styles.header__hamburger, {
                [styles['header__hamburger--open']]: hamburgerOpen,
              })}
              onClick={toggleHamburger}
            >
              <span className="dark:bg-white"></span>
              <span className="dark:bg-white"></span>
              <span className="dark:bg-white"></span>
            </button>
          </div>
        </div>
      </header>
    </>
  )
}
export default Header
