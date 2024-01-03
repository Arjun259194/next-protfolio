import Link from "next/link";

function Header() {
    return (
        <header className="fixed w-3/4 left-1/2 -translate-x-1/2 z-50">
            <nav className="">
                <ul className="flex justify-evenly w-full p-2 mt-5 font-semibold text-gray-800 md:px-5 shadow-lg bg-blue-200/50 rounded-xl">
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/about">About</Link>
                    </li>
                    <li>
                        <Link href="/projects">Projects</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
