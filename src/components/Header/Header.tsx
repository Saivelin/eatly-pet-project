import { useMemo } from 'react'
import Logo from '../icons/Logo'
import Container from '../ui/Container/Container'
import styles from './Header.module.scss'
import Link from 'next/link'
import Button from '../ui/Button/Button'
import Underline from '../Underline/Underline'

const navItems = [
    { title: 'Menu', link: '/menu' },
    { title: 'Blog', link: '/blog' },
    { title: 'Pricing', link: '/pricing' },
    { title: 'Contact', link: '/contact' }
]

const Header = () => {
    return (
        <Container>
            <header className={styles.header}>
                <nav className={styles.nav}>
                    <div className={styles.logo}>
                        <Logo />
                    </div>
                    <div className={styles.navElements}>
                        {navItems.map((el, i) => {
                            return (
                                <Link
                                    key={i}
                                    href={el.link}
                                    className={styles.navItem}
                                >
                                    {el.title}
                                </Link>
                            )
                        })}
                    </div>
                    <div className={styles.btns}>
                        <Button type='primary'>Login</Button>
                        <Button type='secondary'>Sing Up</Button>
                    </div>
                </nav>
            </header>
            <Underline/>
        </Container>
    )
}

export default Header
