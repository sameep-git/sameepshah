'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { CheckCircle, ShoppingBasket, DollarSign, Users, MessageSquare } from 'lucide-react';

export default function SidequestLanding() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

    const themeColor = '#00E39C'; // Bright green from logo concept

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!name || !email || !message) return;

        setStatus('loading');
        
        // Construct mailto link
        const subject = `Sidequest Support Request from ${name}`;
        const body = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;
        const mailtoLink = `mailto:sameepshah384@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

        // Open email client
        window.location.href = mailtoLink;
        
        setStatus('success');
        
        // Reset after a delay
        setTimeout(() => {
            setStatus('idle');
            setName('');
            setEmail('');
            setMessage('');
        }, 3000);
    };

    return (
        <div className="min-h-screen bg-[#111] text-white font-sans selection:bg-[#00E39C] selection:text-black">
            {/* Hero Section */}
            <main className="flex flex-col items-center justify-center min-h-[90vh] px-4 relative overflow-hidden">

                {/* Background Glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#00E39C]/20 rounded-full blur-[120px] pointer-events-none" />

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="relative z-10 text-center max-w-2xl mx-auto"
                >
                    {/* Logo */}
                    <div className="mx-auto mb-8 w-24 h-24 rounded-3xl overflow-hidden shadow-[0_0_40px_-10px_#00E39C]">
                        <img src="/sidequest.png" alt="sidequest logo" className="w-full h-full object-cover" />
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4">
                        sidequest
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-400 mb-12 font-medium">
                        Making grocery runs rewarding.
                    </p>

                    <div className="space-y-6 bg-white/5 backdrop-blur-lg p-8 rounded-3xl border border-white/10 shadow-2xl">
                        <h2 className="text-xl font-semibold">Contact Support</h2>
                        <p className="text-gray-400 text-sm mb-4">
                            Have a question or feedback? We'd love to hear from you.
                        </p>

                        <form onSubmit={handleSubmit} className="space-y-4 w-full max-w-sm mx-auto">
                            <div>
                                <input
                                    type="text"
                                    required
                                    placeholder="Your Name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-[#00E39C] focus:ring-1 focus:ring-[#00E39C] outline-none transition-all placeholder:text-gray-500"
                                />
                            </div>
                            <div>
                                <input
                                    type="email"
                                    required
                                    placeholder="Email Address"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-[#00E39C] focus:ring-1 focus:ring-[#00E39C] outline-none transition-all placeholder:text-gray-500"
                                />
                            </div>
                            <div>
                                <textarea
                                    required
                                    placeholder="How can we help?"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    rows={4}
                                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-[#00E39C] focus:ring-1 focus:ring-[#00E39C] outline-none transition-all placeholder:text-gray-500 resize-none"
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={status === 'loading'}
                                className="w-full py-3.5 rounded-xl bg-[#00E39C] text-black font-bold text-lg hover:bg-[#00c285] active:scale-95 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                            >
                                {status === 'success' ? (
                                    <>
                                        <CheckCircle className="w-5 h-5" />
                                        <span>Opening Mail App...</span>
                                    </>
                                ) : (
                                    <>
                                        <MessageSquare className="w-5 h-5" />
                                        <span>Send Message</span>
                                    </>
                                )}
                            </button>
                        </form>
                    </div>
                </motion.div>
            </main>

            {/* Features Grid */}
            <section className="px-4 py-20 bg-black/50">
                <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8 text-center md:text-left">
                    <FeatureCard
                        icon={<ShoppingBasket className="w-6 h-6 text-[#00E39C]" />}
                        title="Gamified Shopping"
                        description="Turn boring grocery runs into fun quests and earn rewards."
                    />
                    <FeatureCard
                        icon={<Users className="w-6 h-6 text-[#00E39C]" />}
                        title="Roommate Sync"
                        description="Split costs automatically and never argue about who paid for what."
                    />
                    <FeatureCard
                        icon={<DollarSign className="w-6 h-6 text-[#00E39C]" />}
                        title="Earn Bounties"
                        description="Complete requests for others and get paid for your time."
                    />
                </div>
            </section>

            <footer className="py-8 text-center text-gray-600 text-sm">
                <div className="flex justify-center gap-6 mb-4">
                    <Link href="/sidequest/privacy" className="hover:text-[#00E39C] transition-colors">
                        Privacy Policy
                    </Link>
                    <a href="mailto:sameepshah384@gmail.com" className="hover:text-[#00E39C] transition-colors">
                        Contact Support
                    </a>
                </div>
                <p>&copy; {new Date().getFullYear()} Sameep Shah. All rights reserved.</p>
            </footer>
        </div>
    );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
    return (
        <div className="p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-[#00E39C]/30 transition-colors">
            <div className="w-12 h-12 rounded-full bg-[#00E39C]/10 flex items-center justify-center mb-4 mx-auto md:mx-0">
                {icon}
            </div>
            <h3 className="text-lg font-bold mb-2">{title}</h3>
            <p className="text-gray-400">{description}</p>
        </div>
    );
}
