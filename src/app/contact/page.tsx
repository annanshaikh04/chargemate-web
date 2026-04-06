"use client";

import { useState } from "react";

export default function ContactPage() {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <div className="mx-auto max-w-2xl px-4 py-16 md:py-24">
            <header className="text-center mb-12">
                <h1 className="font-display text-3xl font-bold text-ink-900 md:text-4xl">
                    Get in Touch
                </h1>
                <p className="mt-4 text-ink-600">
                    Have questions about the ChargeMate manufacturing roadmap or strategic partnerships? Our founding team is ready to connect.
                </p>
            </header>

            {submitted ? (
                <div className="rounded-ds-lg bg-brand-50 p-8 text-center ring-1 ring-brand-100 shadow-sm animate-in fade-in zoom-in duration-300">
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-brand-700 text-white mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-6 w-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                        </svg>
                    </div>
                    <h2 className="text-xl font-bold text-ink-900">Message Received</h2>
                    <p className="mt-2 text-sm text-ink-600">
                        Thank you for reaching out to the ChargeMate team. We've received your inquiry and will be in touch shortly.
                    </p>
                    <button
                        onClick={() => setSubmitted(false)}
                        className="mt-6 text-sm font-semibold text-brand-700 hover:text-brand-800"
                    >
                        Send another message
                    </button>
                </div>
            ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                        <div>
                            <label htmlFor="first-name" className="block text-sm font-semibold text-ink-900">
                                First name
                            </label>
                            <input
                                type="text"
                                name="first-name"
                                id="first-name"
                                required
                                className="mt-2 block w-full rounded-ds border-0 px-3.5 py-2 text-ink-900 shadow-sm ring-1 ring-inset ring-ink-300 placeholder:text-ink-400 focus:ring-2 focus:ring-inset focus:ring-brand-600 sm:text-sm"
                            />
                        </div>
                        <div>
                            <label htmlFor="last-name" className="block text-sm font-semibold text-ink-900">
                                Last name
                            </label>
                            <input
                                type="text"
                                name="last-name"
                                id="last-name"
                                required
                                className="mt-2 block w-full rounded-ds border-0 px-3.5 py-2 text-ink-900 shadow-sm ring-1 ring-inset ring-ink-300 placeholder:text-ink-400 focus:ring-2 focus:ring-inset focus:ring-brand-600 sm:text-sm"
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-semibold text-ink-900">
                            Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            required
                            className="mt-2 block w-full rounded-ds border-0 px-3.5 py-2 text-ink-900 shadow-sm ring-1 ring-inset ring-ink-300 placeholder:text-ink-400 focus:ring-2 focus:ring-inset focus:ring-brand-600 sm:text-sm"
                        />
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-sm font-semibold text-ink-900">
                            Message
                        </label>
                        <textarea
                            name="message"
                            id="message"
                            rows={4}
                            required
                            className="mt-2 block w-full rounded-ds border-0 px-3.5 py-2 text-ink-900 shadow-sm ring-1 ring-inset ring-ink-300 placeholder:text-ink-400 focus:ring-2 focus:ring-inset focus:ring-brand-600 sm:text-sm"
                        />
                    </div>
                    <button
                        type="submit"
                        className="block w-full rounded-ds bg-brand-700 px-3.5 py-2.5 text-center text-sm font-bold text-white shadow-ds hover:bg-brand-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 transition-all duration-200 active:scale-[0.98]"
                    >
                        Send Message
                    </button>
                </form>
            )}

            <div className="mt-16 border-t border-ink-100 pt-12">
                <h3 className="text-center text-sm font-semibold uppercase tracking-widest text-ink-400 mb-8">
                    The Founders of Everyday Friction
                </h3>
                <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
                    {[
                        "Sarah Stantial",
                        "Shannon Cullen",
                        "Ryan Jankowski",
                        "Rohan Reddy",
                        "Annanahmed Shaikh"
                    ].map(name => (
                        <span key={name} className="text-xs font-bold text-ink-500">{name}</span>
                    ))}
                </div>
            </div>
        </div>
    );
}
