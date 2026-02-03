
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle, Send, User, Mail, Phone, MessageSquare } from 'lucide-react';
import { useState } from 'react';
import { useModal } from '@/context/ModalContext';

export const BookDemoModal = () => {
    const { isModalOpen, closeModal } = useModal();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
    });
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setIsSubmitted(true);
        setIsLoading(false);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const resetForm = () => {
        setIsSubmitted(false);
        setFormData({ name: '', email: '', phone: '', message: '' });
        closeModal();
    };

    return (
        <AnimatePresence>
            {isModalOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={closeModal}
                        className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50"
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 pt-24"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="bg-card border border-border rounded-xl shadow-2xl w-full max-w-md relative overflow-hidden">
                            <button
                                onClick={closeModal}
                                className="absolute top-4 right-4 p-2 text-muted-foreground hover:text-foreground transition-colors rounded-full hover:bg-muted"
                            >
                                <X className="w-5 h-5" />
                            </button>

                            <div className="p-5 md:p-6">
                                {isSubmitted ? (
                                    <div className="text-center py-8">
                                        <div className="w-16 h-16 rounded-full bg-green-100 dark:bg-green-900/20 flex items-center justify-center mx-auto mb-6">
                                            <CheckCircle className="w-8 h-8 text-green-600 dark:text-green-500" />
                                        </div>
                                        <h3 className="text-2xl font-bold text-foreground mb-4">Request Sent!</h3>
                                        <p className="text-muted-foreground mb-8">
                                            We'll be in touch shortly to schedule your demo.
                                        </p>
                                        <button onClick={resetForm} className="btn-primary w-full justify-center">
                                            Close
                                        </button>
                                    </div>
                                ) : (
                                    <form onSubmit={handleSubmit}>
                                        <h3 className="text-2xl font-bold text-foreground mb-2">Book Free Consultation</h3>
                                        <p className="text-muted-foreground mb-6">
                                            See how Scale Now Digital can accelerate your growth.
                                        </p>

                                        <div className="space-y-4">
                                            <div>
                                                <label className="block text-sm font-medium text-foreground mb-1.5">Name</label>
                                                <div className="relative">
                                                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                                                    <input
                                                        required
                                                        name="name"
                                                        value={formData.name}
                                                        onChange={handleChange}
                                                        className="w-full pl-10 pr-4 py-2.5 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
                                                        placeholder="Your Name"
                                                    />
                                                </div>
                                            </div>

                                            <div>
                                                <label className="block text-sm font-medium text-foreground mb-1.5">Email</label>
                                                <div className="relative">
                                                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                                                    <input
                                                        required
                                                        type="email"
                                                        name="email"
                                                        value={formData.email}
                                                        onChange={handleChange}
                                                        className="w-full pl-10 pr-4 py-2.5 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
                                                        placeholder="work@email.com"
                                                    />
                                                </div>
                                            </div>

                                            <div>
                                                <label className="block text-sm font-medium text-foreground mb-1.5">Mobile Number</label>
                                                <div className="relative">
                                                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                                                    <input
                                                        required
                                                        type="tel"
                                                        name="phone"
                                                        value={formData.phone}
                                                        onChange={handleChange}
                                                        className="w-full pl-10 pr-4 py-2.5 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
                                                        placeholder="+91 99999 99999"
                                                    />
                                                </div>
                                            </div>

                                            <div>
                                                <label className="block text-sm font-medium text-foreground mb-1.5">Message (Optional)</label>
                                                <div className="relative">
                                                    <MessageSquare className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                                                    <textarea
                                                        name="message"
                                                        value={formData.message}
                                                        onChange={handleChange}
                                                        rows={2}
                                                        className="w-full pl-10 pr-4 py-2.5 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:outline-none resize-none"
                                                        placeholder="Any specific requirements?"
                                                    />
                                                </div>
                                            </div>

                                            <button
                                                type="submit"
                                                disabled={isLoading}
                                                className="w-full btn-primary justify-center py-3 mt-2"
                                            >
                                                {isLoading ? 'Sending...' : 'Book Demo'}
                                            </button>
                                        </div>
                                    </form>
                                )}
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};
