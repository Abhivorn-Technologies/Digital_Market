import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useModal } from '@/context/ModalContext';

// Import service images (using existing assets)
import serviceSeo from '@/assets/service-seo.png';
import serviceAi from '@/assets/service-ai.png';
import servicePaid from '@/assets/service-paid.png';

const servicesCards = [
    {
        id: 'seo-geo',
        title: 'SEO & GEO',
        description: 'Full-stack SEO and GEO engine combining human expertise and authority building.',
        cta: 'SCALE TRAFFIC',
        image: serviceSeo,
    },
    {
        id: 'content',
        title: 'Content',
        description: 'Expert-led ebooks, blogs, reports, and product content to educate buyers.',
        cta: 'BUILD CONTENT',
        image: servicePaid,
    },
    {
        id: 'creative',
        title: 'Creative',
        description: 'On-demand creative team for video, design, and full brand campaigns.',
        cta: 'ELEVATE CREATIVITY',
        image: serviceAi,
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.2,
        },
    },
};

const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
    },
};

export const ServicesCardsSection = () => {
    const { openModal } = useModal();

    return (
        <section className="section-padding bg-background">
            <div className="max-w-7xl mx-auto container-padding">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="lg:col-span-4 lg:sticky lg:top-32"
                    >
                        <span className="section-label mb-4">
                            <span className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center text-xs">🚀</span>
                            OUR SERVICES
                        </span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6">
                            Meet Your{' '}
                            <span className="text-italic-bold text-gradient">Content-Led Growth Engine</span>
                        </h2>
                        <p className="text-lg text-muted-foreground mb-8">
                            Scale Now Digital replaces fragmented agency workflows with one unified engine for Content,
                            Creative, SEO, and Paid Media.
                        </p>
                        <button
                            onClick={openModal}
                            className="btn-dark inline-flex items-center gap-2"
                        >
                            BOOK A DEMO
                            <ArrowRight className="w-4 h-4" />
                        </button>
                    </motion.div>

                    {/* Right Cards Grid */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-6"
                    >
                        {servicesCards.map((service) => (
                            <motion.div
                                key={service.id}
                                variants={cardVariants}
                                whileHover={{
                                    y: -12,
                                    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
                                    transition: { duration: 0.3 }
                                }}
                                className="group relative rounded-2xl overflow-hidden cursor-pointer h-[420px] md:h-[480px]"
                            >
                                {/* Background Image */}
                                <motion.img
                                    src={service.image}
                                    alt={service.title}
                                    className="absolute inset-0 w-full h-full object-cover"
                                    whileHover={{ scale: 1.08 }}
                                    transition={{ duration: 0.5 }}
                                />

                                {/* Dark Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />

                                {/* Content */}
                                <div className="absolute inset-0 flex flex-col justify-end p-6">
                                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                                        {service.title}
                                    </h3>
                                    <p className="text-white/80 text-sm leading-relaxed mb-5">
                                        {service.description}
                                    </p>
                                    <button
                                        onClick={openModal}
                                        className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-sm px-5 py-3 rounded-full transition-all duration-300 w-fit group-hover:gap-3"
                                    >
                                        {service.cta}
                                        <ArrowRight className="w-4 h-4" />
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
