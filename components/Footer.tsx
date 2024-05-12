import Link from 'next/link'
const Footer = () => {
    return (
        <>
            <footer>
                <ul>
                    <li>
                        <Link href={"/"}>LOGO</Link>
                    </li>
                    <li>
                        Views: 0
                    </li>
                    <li>
                        <Link href={"https://www.linkedin.com"}>Linkedin</Link>
                    </li>
                    <li>
                        <Link href={"https://www.github.com"}>GitHub</Link>
                    </li>
                </ul>
            </footer>
        </>
    )
}

export default Footer;