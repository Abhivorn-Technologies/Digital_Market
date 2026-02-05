import { motion } from 'framer-motion';
import { ArrowRight, Search, TrendingUp, Sparkles, Globe, Mail, Users, BarChart3 } from 'lucide-react';
import { useModal } from '@/context/ModalContext';

// Import service images
// Import service images
import serviceSeo from '@/assets/seo.jpg';
import serviceAi from '@/assets/AiCreatives.png';
import servicePaid from '@/assets/paidads1.jpg';
import serviceGlobal from '@/assets/globalconsulting.jpg';
import serviceEmail from '@/assets/email-whatsapp1.jpg';
import serviceTalent from '@/assets/influncermarketing.jpg';
import serviceAnalytics from '@/assets/dataanalytics.jpg';

const servicesCards = [
    {
        id: 'seo-geo',
        title: 'SEO & GEO',
        description: 'Full-stack SEO and GEO engine combining human expertise and authority building.',
        cta: 'SCALE TRAFFIC',
        image: serviceSeo,
        icon: Search,
    },
    {
        id: 'paid-ads',
        title: 'Paid Ads',
        description: 'Precision-targeted campaigns across Google Ads, Meta, and marketplaces to drive results.',
        cta: 'GET LEADS',
        image: servicePaid,
        icon: TrendingUp,
    },
    {
        id: 'ai-creative',
        title: 'AI Creative',
        description: 'Creatives that scale social presence, images, Reels, Short form videos & Ad creatives',
        cta: 'ELEVATE',
        image: serviceAi,
        icon: Sparkles,
    },
];

const moreServicesCards = [
    {
        id: 'global-consulting',
        title: 'Global Consulting',
        description: 'Expand your brand internationally with localised strategies and multi-market campaign expertise.',
        cta: 'GO GLOBAL',
        image: serviceGlobal,
        icon: Globe,
    },
    {
        id: 'email-whatsapp',
        title: 'Email & WhatsApp',
        description: 'Nurture relationships through personalised messaging and automated workflows.',
        cta: 'CONNECT',
        image: serviceEmail,
        icon: Mail,
    },
    {
        id: 'influencer-marketing',
        title: 'Influencer Marketing',
        description: 'Connect with authentic voices your audience trusts to grow your brand and reach.',
        cta: 'COLLABORATE',
        image: serviceTalent,
        icon: Users,
    },
    {
        id: 'data-analytics',
        title: 'Data & Analytics',
        description: 'Transform data into actionable insights with advanced analytics and conversion optimisation.',
        cta: 'OPTIMIZE',
        image: serviceAnalytics,
        icon: BarChart3,
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
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-16">
                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="lg:col-span-4"
                    >
                        <span className="section-label mb-4">
                            <span className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center text-xs">🚀</span>
                            OUR SERVICES
                        </span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6">
                            Transform Your Digital Presence{' '}
                            <span className="text-[#FF5C00] italic">Into Revenue</span>
                        </h2>
                        <p className="text-lg text-muted-foreground mb-6">
                            Accelerate content velocity, increase brand visibility across LLMs, Search, and Social.
                            Supercharge organic growth. Scale now Digital combines world-class strategy, technology, and creative talent in one powerful growth engine to help you win the AI age
                        </p>

                        <div className="inline-flex items-center gap-3 bg-card border border-border shadow-sm rounded-full px-5 py-2 mb-8 transform hover:scale-105 transition-transform duration-300">
                            <span className="text-primary font-bold text-xl">10x</span>
                            <span className="text-sm font-medium text-foreground leading-tight">Faster<br />Content Velocity</span>
                        </div>

                        <div className="block"></div>
                        <button
                            onClick={openModal}
                            className="btn-dark inline-flex items-center gap-2"
                        >
                            BOOK A DEMO
                            <ArrowRight className="w-4 h-4" />
                        </button>
                    </motion.div>

                    {/* Right Cards Grid (Row 1) */}
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
                                    transition: { duration: 0.4, ease: "easeOut" }
                                }}
                                className="group relative rounded-[32px] overflow-hidden cursor-pointer h-[480px] md:h-[520px] shadow-xl hover:shadow-2xl transition-all duration-500"
                            >
                                {/* Background Image with subtle zoom on hover */}
                                <motion.div className="absolute inset-0 w-full h-full">
                                    <motion.img
                                        src={service.image}
                                        alt={service.title}
                                        className="absolute inset-0 w-full h-full object-cover"
                                        whileHover={{ scale: 1.1 }}
                                        transition={{ duration: 0.7 }}
                                    />
                                    {/* Refined Gradient Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
                                </motion.div>

                                {/* Glassmorphism Content Box */}
                                <div className="absolute bottom-4 left-4 right-4 p-6 rounded-[24px] bg-black/40 backdrop-blur-xl border border-white/10 shadow-2xl transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                                    <div className="flex items-center gap-3 mb-2">
                                        <div className="p-2 rounded-lg bg-primary/20 backdrop-blur-md">
                                            <service.icon className="w-5 h-5 text-primary" />
                                        </div>
                                        <h3 className="text-2xl font-bold text-white tracking-tight whitespace-nowrap">
                                            {service.title}
                                        </h3>
                                    </div>

                                    <p className="text-white/80 text-sm leading-relaxed mb-6 line-clamp-2 group-hover:line-clamp-none transition-all duration-500">
                                        {service.description}
                                    </p>

                                    <button
                                        onClick={openModal}
                                        className="inline-flex items-center gap-2 bg-primary hover:bg-white hover:text-black text-white font-bold text-xs uppercase tracking-wide px-4 py-3 rounded-full transition-all duration-300 w-full justify-center group/btn whitespace-nowrap"
                                    >
                                        {service.cta}
                                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                                    </button>
                                </div>

                                {/* Subtle Border Shine on Hover */}
                                <div className="absolute inset-0 border-2 border-primary/0 group-hover:border-primary/30 rounded-[32px] transition-colors duration-500 pointer-events-none" />
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                {/* Additional Services Grid (Row 2) */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                >
                    {moreServicesCards.map((service) => (
                        <motion.div
                            key={service.id}
                            variants={cardVariants}
                            whileHover={{
                                y: -12,
                                transition: { duration: 0.4, ease: "easeOut" }
                            }}
                            className="group relative rounded-[32px] overflow-hidden cursor-pointer h-[420px] shadow-xl hover:shadow-2xl transition-all duration-500"
                        >
                            {/* Background Image with subtle zoom on hover */}
                            <motion.div className="absolute inset-0 w-full h-full">
                                <motion.img
                                    src={service.image}
                                    alt={service.title}
                                    className="absolute inset-0 w-full h-full object-cover"
                                    whileHover={{ scale: 1.1 }}
                                    transition={{ duration: 0.7 }}
                                />
                                {/* Refined Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
                            </motion.div>

                            {/* Glassmorphism Content Box */}
                            <div className="absolute bottom-4 left-4 right-4 p-5 rounded-[24px] bg-black/40 backdrop-blur-xl border border-white/10 shadow-2xl transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="p-2 rounded-lg bg-primary/20 backdrop-blur-md">
                                        <service.icon className="w-4 h-4 text-primary" />
                                    </div>
                                    <h3 className="text-lg font-bold text-white tracking-tighter whitespace-nowrap">
                                        {service.title}
                                    </h3>
                                </div>

                                <p className="text-white/80 text-xs leading-relaxed mb-4 line-clamp-2 group-hover:line-clamp-none transition-all duration-500">
                                    {service.description}
                                </p>

                                <button
                                    onClick={openModal}
                                    className="inline-flex items-center gap-2 bg-primary hover:bg-white hover:text-black text-white font-bold text-[10px] uppercase tracking-wide px-4 py-2.5 rounded-full transition-all duration-300 w-full justify-center group/btn whitespace-nowrap"
                                >
                                    {service.cta}
                                    <ArrowRight className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform" />
                                </button>
                            </div>

                            {/* Subtle Border Shine on Hover */}
                            <div className="absolute inset-0 border-2 border-primary/0 group-hover:border-primary/30 rounded-[32px] transition-colors duration-500 pointer-events-none" />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};
