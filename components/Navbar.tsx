const Navbar = () => {
    return (
        <nav className="fixed top-0 w-full z-50 bg-[var(--background)] bg-opacity-90 backdrop-blur-md">
            <div className="container mx-auto px-8 py-8">
                <div className="flex justify-between items-center">
                    <a href="#home" className="text-2xl font-bold group">
                        <span className="text-gradient">ndreea</span>
                        <span className="text-[var(--text-light)] group-hover:text-[var(--foreground)] transition-colors">.studio</span>
                    </a>
                    <div className="hidden md:flex items-center gap-12">
                        <a href="#work" className="text-[var(--text-light)] hover:text-[var(--primary)] transition-colors text-sm uppercase tracking-wider">Work</a>
                        <a href="#services" className="text-[var(--text-light)] hover:text-[var(--primary)] transition-colors text-sm uppercase tracking-wider">Services</a>
                        <a href="#about" className="text-[var(--text-light)] hover:text-[var(--primary)] transition-colors text-sm uppercase tracking-wider">Studio</a>
                        <a href="#contact" className="text-[var(--text-light)] hover:text-[var(--primary)] transition-colors text-sm uppercase tracking-wider">Connect</a>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
