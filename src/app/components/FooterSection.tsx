const FooterSection = () => {
    return (
        <footer className="w-full text-center p-10 space-y-6">
            <div className="text-gray-700 font-semibold">
                <p>© All Rights Reserved 2023</p>
                <p className="text-sm">Arjun R. Mistry</p>
            </div>
            <div>
                <ul className="capitalize flex justify-center items-center space-x-6 text-gray-700 text-sm font-semibold">
                    <li>
                        <a href="/">home</a>
                    </li>
                    <li>
                        <a href="/about">about</a>
                    </li>
                    <li>
                        <a href="/blog">blog</a>
                    </li>
                    <li>
                        <a href="/project">project</a>
                    </li>
                    <li>
                        <a href="/contact">contact</a>
                    </li>
                </ul>
            </div>
        </footer>
    );
};

export default FooterSection;
