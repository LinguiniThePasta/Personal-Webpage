import Link from 'next/link'
const Navbar = () => {
    return (
        <>
            <nav className={"flex py-3 bg-amber-400 font-bold"}>
                <Link className={"ml-6"} href={"/"}>LOGO</Link>
                <ul className={"inline-flex flex-grow justify-evenly mx-10"}>
                    <li>
                        <Link href={"/about"}>About Me</Link>
                    </li>
                    <li>
                        <Link href={"/blogs"}>Blogs</Link>
                    </li>
                    <li>
                        <Link href={"/blogs"}>Project</Link>
                    </li>
                    <li>
                        <Link href={"/contact"}>Contact</Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar;