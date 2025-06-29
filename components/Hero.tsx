const Hero = () => {
    return (
        <section id="home" className="min-h-screen flex items-center section-padding">
            <div className="container mx-auto">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <div>
                        <div className="mb-6">
                            <span className="text-[var(--primary)] text-sm uppercase tracking-widest font-medium">Digital Craft Studio</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-[0.9]">
                            Weaving
                            <span className="block text-gradient mt-2">Dreams</span>
                        </h1>
                        <p className="text-lg md:text-xl text-[var(--text-light)] mb-12 leading-relaxed max-w-lg">
                            A creative studio where imagination meets innovation. We craft digital wonders that captivate and inspire.
                        </p>
                        <div className="flex flex-wrap gap-6">
                            <a
                                href="#contact"
                                className="group relative px-10 py-5 overflow-hidden rounded-full border-2 border-[var(--primary)]"
                            >
                                <span className="relative z-10 text-[var(--primary)] group-hover:text-[var(--background)] transition-colors font-medium">
                                    Start a Project
                                </span>
                                <div className="absolute inset-0 bg-[var(--primary)] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
                            </a>
                            <a
                                href="#work"
                                className="px-10 py-5 text-[var(--text-light)] hover:text-[var(--foreground)] transition-colors font-medium"
                            >
                                View Work →
                            </a>
                        </div>
                    </div>
                    <div className="relative h-[400px] md:h-[500px] lg:h-[600px]">
                        <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)] via-transparent to-[var(--secondary)] opacity-30 rounded-3xl"></div>
                        <div className="absolute inset-0 bg-[var(--secondary)] rounded-3xl flex items-center justify-center">
                            <div className="text-[var(--primary)] text-7xl md:text-8xl font-light">⟨/⟩</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
