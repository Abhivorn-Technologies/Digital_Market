import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles, ArrowRight, Zap, Target, TrendingUp } from 'lucide-react';
import { useModal } from '@/context/ModalContext';

export const GreetingModal = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { openModal } = useModal();

    useEffect(() => {
        // Check if user has visited before
        const hasVisited = localStorage.getItem('hasVisitedScaleNow');

        if (!hasVisited) {
            // Mark as visited immediately
            localStorage.setItem('hasVisitedScaleNow', 'true');

            // Open the book demo modal directly after a brief delay
            const timer = setTimeout(() => {
                openModal();
            }, 2000);

            return () => clearTimeout(timer);
        }
    }, [openModal]);

    const handleClose = () => {
        setIsOpen(false);
        // Mark as visited so it doesn't show again
        localStorage.setItem('hasVisitedScaleNow', 'true');
    };

    const handleGetStarted = () => {
        handleClose();
        // Give a small delay before opening the demo modal for better UX
        setTimeout(() => {
            openModal();
        }, 300);
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 bg-background/80 backdrop-blur-md">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 30 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 30 }}
                        transition={{
                            type: "spring",
                            damping: 25,
                            stiffness: 300
                        }}
                        className="relative w-full max-w-lg bg-card rounded-3xl shadow-[0_0_50px_-12px_rgba(0,0,0,0.3)] border border-primary/10 p-8 md:p-10 overflow-hidden"
                    >
                        {/* Premium Gradient Background Elements */}
                        <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/20 rounded-full blur-[80px]" />
                        <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-secondary/20 rounded-full blur-[80px]" />

                        <button
                            onClick={handleClose}
                            className="absolute top-6 right-6 p-2 rounded-full hover:bg-muted transition-colors text-muted-foreground hover:text-foreground z-20"
                        >
                            <X className="w-5 h-5" />
                        </button>

                        <div className="relative z-10">
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: 0.2, type: "spring" }}
                                className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center mb-8 shadow-lg shadow-primary/20"
                            >
                                <Zap className="w-8 h-8 text-white" />
                            </motion.div>

                            <motion.h2
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                className="text-3xl md:text-4xl font-bold text-foreground mb-4"
                            >
                                Ready to <span className="text-gradient">Scale Now?</span>
                            </motion.h2>

                            <motion.p
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                                className="text-lg text-muted-foreground mb-8 leading-relaxed"
                            >
                                Welcome to Scale Now Digital. We've helped hundreds of brands achieve 10x growth using AI-driven strategies. Let's see what we can do for you.
                            </motion.p>

                            <div className="grid grid-cols-2 gap-4 mb-10">
                                <motion.div
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.5 }}
                                    className="flex items-center gap-3 p-3 rounded-xl bg-muted/50 border border-border"
                                >
                                    <Target className="w-5 h-5 text-primary" />
                                    <span className="text-sm font-medium">Precision Targeting</span>
                                </motion.div>
                                <motion.div
                                    initial={{ opacity: 0, x: 10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.6 }}
                                    className="flex items-center gap-3 p-3 rounded-xl bg-muted/50 border border-border"
                                >
                                    <TrendingUp className="w-5 h-5 text-secondary" />
                                    <span className="text-sm font-medium">Fast Growth</span>
                                </motion.div>
                            </div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.7 }}
                                className="flex flex-col sm:flex-row gap-4"
                            >
                                <button
                                    onClick={handleGetStarted}
                                    className="flex-1 btn-primary py-4 rounded-2xl flex items-center justify-center gap-2 group shadow-xl shadow-primary/20"
                                >
                                    Get Started
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </button>
                                <button
                                    onClick={handleClose}
                                    className="px-8 py-4 rounded-2xl border border-border hover:bg-muted transition-colors font-medium"
                                >
                                    Maybe Later
                                </button>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};
