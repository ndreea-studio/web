const About = () => {
    return (
        <section id="about" className="section-padding">
            <div className="container mx-auto">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
                            The <span className="text-gradient">Cauldron</span>
                        </h2>
                        <div className="space-y-6 text-lg text-[var(--text-light)]">
                            <p>
                                ndreea.studio is a magical place where creativity and technology intertwine to create digital wonders.
                            </p>
                            <p>
                                We believe in the power of dreams and the magic of creation. Our goal is to bring your vision to life in the most enchanting way possible.
                            </p>
                            <p>
                                Our spells are cast with passion, precision, and a touch of stardust.
                            </p>
                        </div>
                        <div className="mt-12 flex gap-16">
                            <div>
                                <div className="text-4xl font-bold text-[var(--primary)] mb-2">50+</div>
                                <p className="text-[var(--text-light)]">Spells Cast</p>
                            </div>
                            <div>
                                <div className="text-4xl font-bold text-[var(--primary)] mb-2">3+</div>
                                <p className="text-[var(--text-light)]">Years of Magic</p>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-6">
                        <div className="space-y-6">
                            <div className="bg-[var(--secondary)] p-8 rounded-2xl">
                                <div className="text-3xl font-bold text-[var(--primary)] mb-2">Swift</div>
                                <p className="text-[var(--text-light)]">Magic is fast, so are our creations</p>
                            </div>
                            <div className="bg-[var(--secondary-light)] p-8 rounded-2xl">
                                <div className="text-3xl font-bold text-[var(--primary)] mb-2">Pure</div>
                                <p className="text-[var(--text-light)]">Simplicity is the ultimate magic</p>
                            </div>
                        </div>
                        <div className="space-y-6">
                            <div className="bg-[var(--secondary-light)] p-8 rounded-2xl">
                                <div className="text-3xl font-bold text-[var(--primary)] mb-2">Modern</div>
                                <p className="text-[var(--text-light)]">Using the latest magical tools</p>
                            </div>
                            <div className="bg-[var(--secondary)] p-8 rounded-2xl">
                                <div className="text-3xl font-bold text-[var(--primary)] mb-2">Eternal</div>
                                <p className="text-[var(--text-light)]">Built to last, forever and always</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
