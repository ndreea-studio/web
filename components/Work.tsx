import React from 'react';

const Work = () => {
    return (
        <section id="work" className="section-padding">
            <div className="container mx-auto">
                <div className="mb-16">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                        Our <span className="text-gradient">Creations</span>
                    </h2>
                    <p className="text-lg md:text-xl text-[var(--text-light)] max-w-2xl">
                        A glimpse into the digital experiences we&apos;ve brought to life.
                    </p>
                </div>
                <div className="grid md:grid-cols-2 gap-12">
                    {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="group cursor-pointer card">
                            <div className="relative h-[300px] overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)] to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                                    <span className="text-[var(--primary)] text-sm uppercase tracking-wider mb-2">Coming Soon</span>
                                    <h3 className="text-2xl font-semibold">Project {i}</h3>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Work;
