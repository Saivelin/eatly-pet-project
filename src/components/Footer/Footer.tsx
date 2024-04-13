import Link from 'next/link'
import Logo from '../icons/Logo'
import styles from './Footer.module.scss'
import Underline from '../Underline/Underline'
import Container from '../ui/Container/Container'

const navItems = [
    { title: 'Blog', link: '/blog' },
    { title: 'Pricing', link: '/pricing' },
    { title: 'About us', link: '/about-us' },
    { title: 'Contact', link: '/contact' }
]

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <Container>
                <div className={styles.nav}>
                    <Logo />
                    <nav className={styles.navItems}>
                        {navItems.map((el, i) => (
                            <Link
                                href={el.link}
                                key={i}
                            >
                                {el.title}
                            </Link>
                        ))}
                    </nav>
                </div>
                <Underline/>
                <div className={styles.info}>
                    <p>© 2023 EATLY All Rights Reserved.</p>
                    <div className={styles.socials}>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </Container>
        </footer>
    )
}

export default Footer
