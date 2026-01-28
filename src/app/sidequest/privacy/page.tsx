'use client';

import Link from 'next/link';
import { ArrowLeft, Shield } from 'lucide-react';

export default function PrivacyPolicy() {
    return (
        <div className="min-h-screen bg-[#111] text-white font-sans selection:bg-[#00E39C] selection:text-black">
            <div className="max-w-3xl mx-auto px-6 py-12">
                <div className="mb-8">
                    <Link href="/sidequest" className="inline-flex items-center text-gray-400 hover:text-[#00E39C] transition-colors mb-6">
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Back to Sidequest
                    </Link>
                    <div className="flex items-center gap-3 mb-2">
                        <Shield className="w-8 h-8 text-[#00E39C]" />
                        <h1 className="text-3xl font-bold">Privacy Policy</h1>
                    </div>
                    <p className="text-gray-400">Last updated: {new Date().toLocaleDateString()}</p>
                </div>

                <div className="prose prose-invert prose-green max-w-none space-y-8 text-gray-300">
                    <section>
                        <h2 className="text-xl font-bold text-white mb-4">1. Introduction</h2>
                        <p>
                            Welcome to Sidequest ("we," "our," or "us"). We are committed to protecting your privacy. 
                            This Privacy Policy explains how we collect, use, and share your personal information when you use our mobile application, Sidequest.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white mb-4">2. Information We Collect</h2>
                        <p className="mb-2">We collect the following types of information to provide and improve our service:</p>
                        <ul className="list-disc pl-5 space-y-2">
                            <li><strong>Account Information:</strong> When you create an account, we collect your name, email address, and profile photo.</li>
                            <li><strong>Payment Information:</strong> We collect your Venmo handle to facilitate peer-to-peer payments. We do not store credit card numbers or process payments directly.</li>
                            <li><strong>Household Data:</strong> Information about your household members and shared expenses.</li>
                            <li><strong>User Content:</strong> Photos of receipts and other content you upload to the app.</li>
                            <li><strong>Device Information:</strong> We may collect information about your mobile device, including model, operating system, and unique device identifiers to ensure app functionality.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white mb-4">3. How We Use Your Information</h2>
                        <p className="mb-2">We use your information to:</p>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>Provide, maintain, and improve the Sidequest app.</li>
                            <li>Facilitate household management and expense splitting.</li>
                            <li>Process receipts and extract relevant data for your quests.</li>
                            <li>Send you technical notices, updates, and support messages.</li>
                            <li>Respond to your comments and questions.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white mb-4">4. Sharing of Information</h2>
                        <p className="mb-2">We do not sell your personal information. We may share your information in the following circumstances:</p>
                        <ul className="list-disc pl-5 space-y-2">
                            <li><strong>With Household Members:</strong> Your display name, avatar, and expense activity are visible to other members of your household.</li>
                            <li><strong>Service Providers:</strong> We use third-party services (such as Supabase for database hosting and Expo for app infrastructure) to help us operate our service.</li>
                            <li><strong>Legal Compliance:</strong> We may disclose information if required by law or to protect our rights or the safety of others.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white mb-4">5. Data Security</h2>
                        <p>
                            We implement reasonable security measures to protect your personal information. 
                            However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white mb-4">6. Your Rights</h2>
                        <p>
                            You have the right to access, update, or delete your account information at any time through the app settings. 
                            If you wish to delete your data entirely, please contact us.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white mb-4">7. Contact Us</h2>
                        <p>
                            If you have any questions about this Privacy Policy, please contact us at:
                            <br />
                            <a href="mailto:sameepshah384@gmail.com" className="text-[#00E39C] hover:underline">sameepshah384@gmail.com</a>
                        </p>
                    </section>
                </div>

                <footer className="mt-12 pt-8 border-t border-white/10 text-center text-gray-500 text-sm">
                    <p>&copy; {new Date().getFullYear()} Sameep Shah. All rights reserved.</p>
                </footer>
            </div>
        </div>
    );
}
