const Services = () => {
    return (
        <section id="services" className="section-padding bg-[var(--secondary)] w-full">
            <div className="container mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                        Our <span className="text-gradient">Magic</span>
                    </h2>
                    <p className="text-lg md:text-xl text-[var(--text-light)] max-w-2xl mx-auto">
                        The spells we cast to make your digital dreams a reality.
                    </p>
                </div>
                <div className="grid md:grid-cols-3 gap-12">
                    <div className="card">
                        <div className="text-5xl mb-6">✨</div>
                        <h3 className="text-2xl font-semibold mb-4">Enchanting Design</h3>
                        <p className="text-[var(--text-light)] mb-6">
                            We craft visually stunning designs that are not only beautiful but also intuitive and user-friendly.
                        </p>
                        <ul className="space-y-2 text-sm text-[var(--text-light)]">
                            <li>• UI/UX Magic</li>
                            <li>• Bewitching Brand Identities</li>
                            <li>• Interactive Spellbooks</li>
                        </ul>
                    </div>
                    <div className="card">
                        <div className="text-5xl mb-6">🚀</div>
                        <h3 className="text-2xl font-semibold mb-4">Powerful Potions</h3>
                        <p className="text-[var(--text-light)] mb-6">
                            We brew powerful code that brings your ideas to life, ensuring a seamless and magical experience.
                        </p>
                        <ul className="space-y-2 text-sm text-[var(--text-light)]">
                            <li>• Full-Stack Alchemy</li>
                            <li>• API Wizardry</li>
                            <li>• Performance Spells</li>
                        </ul>
                    </div>
                    <div className="card">
                        <div className="text-5xl mb-6">🔮</div>
                        <h3 className="text-2xl font-semibold mb-4">Mystical Strategy</h3>
                        <p className="text-[var(--text-light)] mb-6">
                            We use our crystal ball to foresee the future and create strategies that ensure your success.
                        </p>
                        <ul className="space-y-2 text-sm text-[var(--text-light)]">
                            <li>• Product Prophecies</li>
                            <li>• Technical Divination</li>
                            <li>• Growth Enchantments</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
