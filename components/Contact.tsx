const Contact = () => {
    return (
        <section id="contact" className="section-padding bg-[var(--secondary)] w-full">
            <div className="container mx-auto text-center">
                <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8">
                    Ready for <span className="text-gradient">Magic</span>?
                </h2>
                <p className="text-lg md:text-xl text-[var(--text-light)] mb-16 max-w-2xl mx-auto">
                    Let&apos;s conjure something amazing together. Reach out and let the magic begin.
                </p>
                <div className="flex flex-col items-center gap-8">
                    <a
                        href="mailto:hello@ndreea.studio"
                        className="group relative px-12 py-6 overflow-hidden rounded-full border-2 border-[var(--primary)]"
                    >
                        <span className="relative z-10 text-[var(--primary)] group-hover:text-[var(--background)] transition-colors text-lg font-medium">
                            hello@ndreea.studio
                        </span>
                        <div className="absolute inset-0 bg-[var(--primary)] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
                    </a>
                    <div className="flex gap-8 text-[var(--text-light)]">
                        <a href="https://github.com/ndreea-studio" className="hover:text-[var(--primary)] transition-colors">GitHub</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
