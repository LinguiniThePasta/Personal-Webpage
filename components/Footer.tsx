import Link from 'next/link'
const Footer = () => {
    return (
        <>
            <footer className={"flex py-4 bg-amber-400 font-bold"}>
                <Link className={"ml-6"} href={"/"}>LOGO</Link>
                <span className={"flex flex-grow justify-center"}>
                    Views: 0
                </span>
                <ul className={"inline-flex justify-evenly mx-10"}>
                    <li className={"px-2.5"}>
                        <Link href={"https://www.linkedin.com"}>L</Link>
                    </li>
                    <li className={"px-2.5"}>
                        <Link href={"https://www.github.com"}>G</Link>
                    </li>
                </ul>
            </footer>
        </>
    )
}

export default Footer;