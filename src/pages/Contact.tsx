import React, { useRef, useState, type FormEvent } from 'react';
import { Mail, MapPin, Phone, Send, Loader2, CheckCircle, AlertCircle } from 'lucide-react';
import Section from '../components/Section';
import ThoughtBubble from '../components/contact/ThoughtBubble';
import emailjs from '@emailjs/browser';

// --- CONFIGURATION ---
// 1. Sign up at https://www.emailjs.com/
// 2. Create a new Email Service (e.g., Gmail) -> Get Service ID
// 3. Create a new Email Template -> Get Template ID
// 4. Go to Account > API Keys -> Get Public Key
const EMAILJS_SERVICE_ID = "service_xq97bt6";
const EMAILJS_TEMPLATE_ID = "template_5bcsr1v";
const EMAILJS_PUBLIC_KEY = "d_poMDRx9AmfLLrD3";

const Contact: React.FC = () => {
    const formRef = useRef<HTMLFormElement>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        if (!formRef.current) return;



        setIsSubmitting(true);
        setErrorMessage(null);

        try {
            await emailjs.sendForm(
                EMAILJS_SERVICE_ID,
                EMAILJS_TEMPLATE_ID,
                formRef.current,
                EMAILJS_PUBLIC_KEY
            );
            setIsSuccess(true);
            formRef.current.reset();
        } catch (error: any) {
            console.error(error);
            const explicitError = error?.text || JSON.stringify(error);
            setErrorMessage(`Error: ${explicitError}. Please check your keys or template.`);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div>
            <Section className="py-12 md:py-16">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
                    {/* Left Column: Personal Brand & Info */}
                    <div className="space-y-10">
                        {/* Photo & Thought Bubble Section */}
                        <div className="relative flex flex-col sm:flex-row items-center sm:items-start gap-8">
                            {/* Headshot */}
                            <div className="shrink-0 relative group">
                                <div className="w-56 h-56 md:w-72 md:h-72 rounded-full border-4 border-white shadow-lg overflow-hidden relative z-20 transition-transform duration-500 hover:scale-105">
                                    <div className="absolute inset-0 border-2 border-blue-100 rounded-full z-30 pointer-events-none"></div>
                                    <img
                                        src="/gokul contact me.jpg"
                                        alt="Gokul Kumar Kesavan headshot"
                                        className="w-full h-full object-cover object-top"
                                        onError={(e) => {
                                            (e.target as HTMLImageElement).src = 'https://ui-avatars.com/api/?name=Gokul+Kumar&background=0D8ABC&color=fff&size=200';
                                        }}
                                    />
                                </div>
                                {/* Soft Shadow */}
                                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-3/4 h-4 bg-black/10 blur-xl rounded-full" />
                            </div>

                            {/* Thought Bubble */}
                            <ThoughtBubble />
                        </div>

                        {/* Hook & Quote */}
                        <div className="bg-gradient-to-br from-blue-50/50 to-white p-8 rounded-2xl border border-blue-100/50">
                            <p className="text-gray-700 leading-relaxed text-lg mb-6">
                                "I’m actively looking for full-time roles in <span className="font-bold text-blue-700">Business Analytics</span>, <span className="font-bold text-blue-700">AI/ML</span> and <span className="font-bold text-blue-700">Data Analytics</span> - while staying open to meaningful projects, collaborations, and product ideas."
                            </p>

                            <div className="flex items-center gap-3 pt-4 border-t border-blue-100/50">
                                <span className="h-px flex-grow bg-blue-100"></span>
                                <span className="text-sm font-medium text-gray-500 italic">Curiosity first. Learning always.</span>
                            </div>
                        </div>

                        {/* Contact Details */}
                        <div>
                            <h3 className="text-xl font-bold mb-6">Contact Information</h3>
                            <div className="space-y-6">
                                {/* Email */}
                                <div className="flex items-start gap-4 text-gray-600 group">
                                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-blue-600 shadow-sm border border-gray-100 group-hover:scale-110 transition-transform duration-300">
                                        <Mail size={20} />
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-gray-400">Email</p>
                                        <a href="mailto:gokulkumar0639@gmail.com" className="text-lg font-medium hover:text-blue-600 transition-colors">
                                            gokulkumar0639@gmail.com
                                        </a>
                                    </div>
                                </div>

                                {/* Phone */}
                                <div className="flex items-start gap-4 text-gray-600 group">
                                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-blue-600 shadow-sm border border-gray-100 group-hover:scale-110 transition-transform duration-300">
                                        <Phone size={20} />
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-gray-400">Phone</p>
                                        <div className="flex flex-col gap-1">
                                            <p className="text-lg font-medium flex items-center gap-2">
                                                <span className="text-xl">🇺🇸</span> +1 (571) 274-1699
                                            </p>
                                            <p className="text-lg font-medium flex items-center gap-2 text-gray-500">
                                                <span className="text-xl">🇮🇳</span> +91 87540 54440
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Location */}
                                <div className="flex items-start gap-4 text-gray-600 group">
                                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-blue-600 shadow-sm border border-gray-100 group-hover:scale-110 transition-transform duration-300">
                                        <MapPin size={20} />
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-gray-400">Location</p>
                                        <a
                                            href="https://maps.app.goo.gl/7TVvx1F9jAXH5kALA"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-lg font-medium hover:text-blue-600 transition-colors"
                                        >
                                            Arlington, VA, USA
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Form */}
                    <div className="h-fit sticky top-24">
                        <div className="mb-8">
                            <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600">Get in Touch</h1>
                            <p className="text-gray-500 text-lg">Have a project in mind or want to say hello?</p>
                        </div>
                        <form
                            ref={formRef}
                            onSubmit={handleSubmit}
                            className={`bg-white p-8 md:p-10 rounded-3xl border border-gray-100 shadow-lg space-y-6 transition-all duration-300 ${isSuccess ? 'opacity-50 pointer-events-none blur-sm' : 'opacity-100'}`}
                        >
                            <div>
                                <label htmlFor="user_name" className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                                <input
                                    type="text"
                                    name="name" // EmailJS needs 'name' attribute
                                    id="user_name"
                                    required
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all bg-gray-50 focus:bg-white"
                                    placeholder="Your name"
                                />
                            </div>
                            <div>
                                <label htmlFor="user_email" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                                <input
                                    type="email"
                                    name="email" // EmailJS needs 'name' attribute
                                    id="user_email"
                                    required
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all bg-gray-50 focus:bg-white"
                                    placeholder="your@email.com"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                                <textarea
                                    name="message" // EmailJS needs 'name' attribute
                                    id="message"
                                    required
                                    rows={5}
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all bg-gray-50 focus:bg-white resize-none"
                                    placeholder="How can I help you?"
                                ></textarea>
                            </div>

                            {/* Error Message */}
                            {errorMessage && (
                                <div className="p-4 bg-red-50 text-red-600 rounded-xl flex items-center gap-2 text-sm">
                                    <AlertCircle size={16} />
                                    {errorMessage}
                                </div>
                            )}

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full py-4 bg-gray-900 text-white font-bold rounded-xl hover:bg-black transition-all transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70 disabled:scale-100 flex items-center justify-center gap-2 shadow-lg shadow-gray-900/10"
                            >
                                {isSubmitting ? (
                                    <>
                                        <Loader2 size={18} className="animate-spin" /> Sending...
                                    </>
                                ) : (
                                    <>
                                        Send Message <Send size={18} />
                                    </>
                                )}
                            </button>
                        </form>

                        {/* Success Overlay */}
                        {isSuccess && (
                            <div className="absolute inset-0 flex items-center justify-center z-10">
                                <div className="bg-white p-8 rounded-3xl shadow-2xl border border-green-100 text-center max-w-sm mx-4 transform animate-[enter_0.3s_ease-out]">
                                    <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4 text-green-500">
                                        <CheckCircle size={32} />
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Message Sent!</h3>
                                    <p className="text-gray-500 mb-6">Thanks for reaching out, Gokul. I'll get back to you as soon as possible.</p>
                                    <button
                                        onClick={() => setIsSuccess(false)}
                                        className="px-6 py-2 bg-gray-100 text-gray-700 font-semibold rounded-lg hover:bg-gray-200 transition-colors"
                                    >
                                        Send another
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </Section>
        </div>
    );
};

export default Contact;
