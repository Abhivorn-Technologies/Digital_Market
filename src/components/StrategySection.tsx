import { motion } from 'framer-motion';
import { Rocket, Search, Heart, CheckCircle2, Youtube, ArrowUpRight } from 'lucide-react';

export const StrategySection = () => {
    return (
        <section className="pt-0 pb-20 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto container-padding">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">

                    {/* Left Column: Header + Card 1 */}
                    <div className="flex flex-col gap-12 lg:gap-16">
                        {/* Header */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <span className="flex items-center gap-2 text-[#FF5C00] font-bold tracking-wider text-sm uppercase mb-4">
                                STRATEGY <Rocket className="w-4 h-4" />
                            </span>
                            <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold text-[#1A1A1A] leading-[1.05] tracking-tight">
                                Outsmart <span className="text-[#4A4A4A] italic font-normal">the</span> <br />
                                competition
                            </h2>
                        </motion.div>

                        {/* Card 1: Enterprise Growth Audits */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="bg-[#FDF6F0] rounded-[48px] p-8 lg:p-10 flex flex-col min-h-[550px]"
                        >
                            <h3 className="text-2xl font-bold text-[#1A1A1A] mb-4">Enterprise Growth Audits</h3>
                            <p className="text-[#4A4A4A] text-[15px] leading-relaxed mb-10">
                                Deep, consulting-driven audits of your funnel, competitors, content ecosystem, and market landscape. We uncover unseen opportunities, diagnose bottlenecks, and define a clear strategic path to exponential organic growth.
                            </p>

                            {/* Visual: Traffic Comparison */}
                            <div className="mt-auto relative">
                                {/* Tab Header */}
                                <div className="bg-[#FF7A50] rounded-[32px] rounded-br-none p-6 pt-5 pb-20 relative overflow-hidden">
                                    <div className="flex items-center gap-3 text-white font-medium text-sm mb-6">
                                        <span>yourwebsite.com</span>
                                        <div className="flex items-center gap-1 bg-white/20 backdrop-blur-sm rounded-full pl-1 pr-2 py-0.5 border border-white/20">
                                            <div className="bg-white rounded-full w-5 h-5 flex items-center justify-center text-[10px] text-[#4285F4] font-black">G</div>
                                            <CheckCircle2 className="w-4 h-4 text-white" />
                                        </div>
                                    </div>
                                </div>

                                {/* Stats Box */}
                                <div className="absolute top-[60px] md:top-[68px] left-2 md:left-4 right-[-4px] md:right-[-8px] bg-white rounded-[24px] md:rounded-[32px] overflow-hidden shadow-2xl flex border border-gray-100">
                                    <div className="flex-1 p-4 md:p-5 lg:p-6 bg-white">
                                        <p className="text-xl md:text-2xl lg:text-3xl font-bold text-[#1A1A1A]">23k</p>
                                        <p className="text-[8px] md:text-[10px] text-muted-foreground uppercase font-bold tracking-tight mt-1">Your current traffic</p>
                                    </div>
                                    <div className="flex-1 p-4 md:p-5 lg:p-6 bg-[#006B44]">
                                        <p className="text-xl md:text-2xl lg:text-3xl font-bold text-white flex items-center gap-1 md:gap-2">
                                            720k <ArrowUpRight className="w-4 h-4 md:w-5 h-5" />
                                        </p>
                                        <p className="text-[8px] md:text-[10px] text-white/70 uppercase font-bold tracking-tight mt-1">Your potential traffic</p>
                                    </div>
                                </div>

                                {/* Lower Bars Panel */}
                                <div className="mt-12 md:mt-16 bg-white rounded-[24px] md:rounded-[32px] p-6 md:p-8 pb-8 md:pb-10 shadow-lg border border-[#F0E0D5]">
                                    <div className="space-y-6 md:space-y-8">
                                        <div className="flex items-center gap-3 md:gap-4">
                                            <div className="flex-1 space-y-2 md:space-y-2.5">
                                                <motion.div className="h-2 md:h-2.5 bg-[#FF7A50] rounded-full" initial={{ width: 0 }} whileInView={{ width: '85%' }} transition={{ duration: 1 }} />
                                                <motion.div className="h-1.5 md:h-2 bg-[#FFDCCE] rounded-full w-[40%]" initial={{ width: 0 }} whileInView={{ width: '40%' }} transition={{ duration: 1, delay: 0.1 }} />
                                            </div>
                                            <span className="text-sm md:text-lg font-bold text-[#006B44] whitespace-nowrap">50k <ArrowUpRight className="w-4 h-4 md:w-5 h-5 inline mb-1" /></span>
                                        </div>
                                        <div className="h-[1px] bg-gray-100" />
                                        <div className="flex items-center gap-3 md:gap-4">
                                            <div className="flex-1 space-y-2 md:space-y-2.5">
                                                <motion.div className="h-2 md:h-2.5 bg-[#FF7A50] rounded-full" initial={{ width: 0 }} whileInView={{ width: '75%' }} transition={{ duration: 1, delay: 0.2 }} />
                                                <motion.div className="h-1.5 md:h-2 bg-[#FFDCCE] rounded-full w-[30%]" initial={{ width: 0 }} whileInView={{ width: '30%' }} transition={{ duration: 1, delay: 0.3 }} />
                                            </div>
                                            <span className="text-sm md:text-lg font-bold text-[#006B44] whitespace-nowrap">32k <ArrowUpRight className="w-4 h-4 md:w-5 h-5 inline mb-1" /></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Card 2: AI-Era Search Growth Plans (Tall Center) */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="bg-[#FDF6F0] rounded-[48px] p-6 md:p-8 lg:p-10 flex flex-col min-h-[500px] md:min-h-[600px] lg:min-h-[850px] lg:mt-12"
                    >
                        <h3 className="text-2xl font-bold text-[#1A1A1A] mb-4">AI-Era Search Growth Plans</h3>
                        <p className="text-[#4A4A4A] text-[15px] leading-relaxed mb-10">
                            We design tailored SEO + GEO strategies for the AI era — covering YouTube, ChatGPT, AI Overviews, and modern discovery platforms. From entity maps to content architectures, we help you build visibility where your buyers are actually searching next.
                        </p>

                        <div className="mt-8 flex flex-col items-center flex-1 relative">
                            {/* Search Simulation */}
                            <div className="bg-white rounded-2xl p-3 pl-6 shadow-lg border border-[#F0E0D5] flex items-center gap-4 w-full relative z-10 mb-12 md:mb-20">
                                <span className="text-xs md:text-sm text-[#4A4A4A] font-medium leading-tight">Ask Me Anything With AI Search</span>
                                <div className="bg-[#D14D1D] p-2 md:p-2.5 rounded-xl ml-auto">
                                    <Search className="w-4 h-4 md:w-5 h-5 text-white" />
                                </div>
                            </div>

                            {/* Character Illustration Area */}
                            <div className="relative w-full aspect-[3/4] max-w-[340px] flex items-end">
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full aspect-square bg-[#FFDCCE]/50 rounded-full scale-125 -z-10" />

                                <img
                                    src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=400&h=600&auto=format&fit=crop"
                                    alt="AI Strategy"
                                    className="w-full h-full object-contain object-bottom mix-blend-multiply filter contrast-[1.1] grayscale-[0.2]"
                                />

                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    className="absolute bottom-4 md:bottom-6 left-2 right-2 md:left-1/2 md:-translate-x-1/2 md:w-[90%] bg-white rounded-[24px] md:rounded-3xl p-4 md:p-6 shadow-2xl border border-gray-100 z-20"
                                >
                                    <div className="space-y-3 md:space-y-4">
                                        <div className="flex items-center gap-2 md:gap-3">
                                            <div className="w-4 h-4 md:w-5 h-5 rounded-full bg-[#006B44]/10 flex items-center justify-center">
                                                <CheckCircle2 className="w-3 h-3 md:w-4 h-4 text-[#006B44]" />
                                            </div>
                                            <span className="text-[12px] sm:text-[13px] md:text-[15px] font-bold text-[#1A1A1A] whitespace-nowrap">Discovered On ChatGPT</span>
                                        </div>
                                        <div className="flex items-center gap-2 md:gap-3">
                                            <div className="w-4 h-4 md:w-5 h-5 rounded-full bg-[#006B44]/10 flex items-center justify-center">
                                                <CheckCircle2 className="w-3 h-3 md:w-4 h-4 text-[#006B44]" />
                                            </div>
                                            <span className="text-[12px] sm:text-[13px] md:text-[15px] font-bold text-[#1A1A1A] whitespace-nowrap">Ranked In AI Overviews</span>
                                        </div>
                                    </div>
                                </motion.div>

                                <motion.div
                                    animate={{ y: [0, -8, 0] }}
                                    transition={{ duration: 4, repeat: Infinity }}
                                    className="absolute top-10 right-0 bg-white rounded-2xl p-2.5 pr-4 shadow-xl flex items-center gap-3 border border-gray-50 z-10"
                                >
                                    <div className="bg-[#FF0000] p-1.5 rounded-lg">
                                        <Youtube className="w-4 h-4 text-white" />
                                    </div>
                                    <div className="space-y-1">
                                        <div className="h-1.5 w-10 bg-gray-200 rounded-full" />
                                        <div className="h-1 w-6 bg-gray-100 rounded-full" />
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column Mix */}
                    <div className="flex flex-col gap-6 lg:gap-8 lg:mt-32">

                        {/* Card 3: AI Transformation Workshops */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="bg-[#FDF6F0] rounded-[48px] p-8 lg:p-10 flex flex-col"
                        >
                            <h3 className="text-2xl font-bold text-[#1A1A1A] mb-4 text-wrap">AI Transformation Workshops & Roadmaps</h3>
                            <p className="text-[#4A4A4A] text-[15px] leading-relaxed mb-10">
                                Hands-on workshops & roadmaps for AI-native content & creative workflows
                            </p>

                            <div className="bg-[#FF7A50] rounded-[32px] p-8 relative overflow-hidden min-h-[220px]">
                                <div className="relative z-10">
                                    <p className="text-[10px] text-white/70 uppercase font-black tracking-widest mb-1">CLICK RATE</p>
                                    <p className="text-4xl font-black text-white">381%</p>
                                </div>

                                <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
                                    <motion.path
                                        d="M-10,180 Q100,180 200,140 T450,40"
                                        fill="none"
                                        stroke="white"
                                        strokeWidth="5"
                                        strokeLinecap="round"
                                        initial={{ pathLength: 0 }}
                                        whileInView={{ pathLength: 1 }}
                                        transition={{ duration: 1.5, ease: "easeOut" }}
                                    />
                                    <path
                                        d="M-10,180 Q100,180 200,140 T450,40 V250 H-10 Z"
                                        fill="rgba(255,255,255,0.1)"
                                    />
                                </svg>

                                <div className="absolute bottom-6 md:bottom-8 right-6 md:right-8 bg-[#006B44] text-white text-[10px] font-black px-3 py-1.5 rounded-lg tracking-widest shadow-lg">
                                    WEEK 26
                                </div>

                                <motion.div
                                    className="absolute"
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{ delay: 1.4 }}
                                    style={{ top: '25px', right: '25px' }}
                                >
                                    <ArrowUpRight className="w-6 h-6 md:w-8 md:h-8 text-white stroke-[3px]" />
                                </motion.div>
                            </div>
                        </motion.div>

                        {/* Card 4: Social Strategies and Audits */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                            className="bg-[#FDF6F0] rounded-[48px] p-8 lg:p-10 flex flex-col mt-4"
                        >
                            <h3 className="text-2xl font-bold text-[#1A1A1A] mb-4">Social Strategies and Audits</h3>
                            <p className="text-[#4A4A4A] text-[15px] leading-relaxed mb-10">
                                We craft social strategies using cultural insight, audience behavior, and formats that capture attention.
                            </p>

                            <div className="relative pt-12">
                                <div className="bg-white rounded-[40px] p-8 pb-12 shadow-2xl border border-gray-50 relative z-10">
                                    <div className="flex items-center justify-between mb-8">
                                        <p className="text-[17px] font-bold text-[#1A1A1A]">Sentiment Trends</p>
                                        <div className="flex gap-2">
                                            <div className="w-7 h-7 bg-orange-50 rounded-full flex items-center justify-center text-orange-400 text-xs text-center">😊</div>
                                            <div className="w-7 h-7 bg-orange-50 rounded-full flex items-center justify-center text-orange-300 text-xs text-center">😐</div>
                                            <div className="w-7 h-7 bg-orange-50 rounded-full flex items-center justify-center text-orange-200 text-xs text-center">☹️</div>
                                        </div>
                                    </div>

                                    <svg className="w-full h-24" viewBox="0 0 300 100">
                                        <motion.path
                                            d="M0,80 L30,40 L60,60 L90,20 L120,50 L150,10 L180,40 L210,5 L240,30 L270,15 L300,50"
                                            fill="none"
                                            stroke="#FF7A50"
                                            strokeWidth="4"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            initial={{ pathLength: 0 }}
                                            whileInView={{ pathLength: 1 }}
                                            transition={{ duration: 1.5 }}
                                        />
                                    </svg>
                                </div>

                                <motion.div
                                    animate={{ rotate: 5, y: -10 }}
                                    className="absolute -top-12 right-[-10px] md:right-[-15px] w-32 md:w-40 bg-white rounded-3xl p-3 shadow-2xl border border-gray-100 z-20 pointer-events-none"
                                >
                                    <div className="rounded-2xl overflow-hidden mb-3 aspect-square relative bg-gradient-to-br from-[#00D1FF] to-[#006B44]">
                                        <img
                                            src="https://images.unsplash.com/photo-1544568100-847a948585b9?q=80&w=200&h=200&auto=format&fit=crop"
                                            alt="Post"
                                            className="w-full h-full object-cover mix-blend-overlay opacity-60"
                                        />
                                        <div className="absolute top-2 left-2 bg-white/20 backdrop-blur-md p-1 rounded-md text-[8px] text-white font-black">ACTIVE</div>
                                    </div>
                                    <div className="px-1">
                                        <div className="flex items-center gap-2 mb-2">
                                            <img src="https://images.unsplash.com/photo-1544568100-847a948585b9?w=32&h=32&auto=format" className="w-5 h-5 rounded-full" alt="User" />
                                            <div className="h-1.5 w-10 md:w-12 bg-gray-200 rounded-full" />
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-1">
                                                <Heart className="w-2.5 h-2.5 md:w-3 h-3 text-[#FF7A50] fill-current" />
                                                <span className="text-[9px] md:text-[10px] font-bold">12.5K</span>
                                            </div>
                                            <div className="h-1.5 w-1.5 md:h-2 md:w-2 bg-gray-200 rounded-full" />
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};
