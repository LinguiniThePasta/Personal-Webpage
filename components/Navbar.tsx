import Link from 'next/link'
const Navbar = () => {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link href={"/"}>LOGO</Link>
                    </li>
                    <li>
                        <Link href={"/blogs"}>Blogs</Link>
                    </li>
                    <li>
                        <Link href={"/blogs"}>Project</Link>
                    </li>
                    <li>
                        <Link href={"/about"}>About Me</Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar;