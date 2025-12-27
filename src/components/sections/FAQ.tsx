import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
    {
        question: "How does the AI code generation work?",
        answer: "Nexus uses advanced LLMs trained specifically on production-grade infrastructure code. It understands your project context and suggests architecturally sound solutions, not just snippets.",
    },
    {
        question: "Can I deploy to my own cloud provider?",
        answer: "Yes! While Nexus provides a managed edge network, we support exporting Terraform/Pulumi configurations for AWS, GCP, and Azure integration.",
    },
    {
        question: "Is my code secure?",
        answer: "Absolutely. We are SOC2 Type II compliant. Your code is encrypted at rest and in transit, and our AI models are zero-retention—we never train on your private IP.",
    },
    {
        question: "What happens if I exceed the free tier?",
        answer: "We'll notify you well in advance. You can upgrade to Pro for $29/mo or set hard limits to prevent any unexpected charges.",
    },
];

export const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section id="faq" className="py-20 relative z-20">
            <div className="max-w-4xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                        Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">Questions</span>
                    </h2>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="border border-[#2A0E61] rounded-lg bg-[#0d0d1f]/50 overflow-hidden"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full flex items-center justify-between p-6 text-left hover:bg-[#2A0E61]/20 transition-colors"
                            >
                                <span className="text-lg font-medium text-white">{faq.question}</span>
                                {openIndex === index ? (
                                    <Minus className="text-[#7042f8]" />
                                ) : (
                                    <Plus className="text-[#7042f8]" />
                                )}
                            </button>
                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className="p-6 pt-0 text-gray-400">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
