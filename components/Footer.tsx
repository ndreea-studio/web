const Footer = () => {
    return (
        <footer className="py-24 border-t border-[var(--secondary-light)] w-full">
            <div className="container mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
                    <p className="text-[var(--text-light)]">
                        © {new Date().getFullYear()} ndreea.studio
                    </p>
                    <p className="text-[var(--text-light)] text-sm">
                        Crafted with magic in the digital realm.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
