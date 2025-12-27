import { motion } from "framer-motion";
import { Check, Zap } from "lucide-react";
import { useState, useEffect } from "react";

const codeSnippet = `const nexus = require("nexus-ai");

// Auto-optimize your backend
await nexus.optimize({
  database: "postgres",
  caching: "redis",
  strategy: "aggressive"
});

console.log("System optimized!");`;

export const CodeDemo = () => {
    const [text, setText] = useState("");
    const fullText = codeSnippet;

    useEffect(() => {
        let i = 0;
        const interval = setInterval(() => {
            setText(fullText.slice(0, i));
            i++;
            if (i > fullText.length) clearInterval(interval);
        }, 50);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="py-20 relative z-20 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-16">

                {/* Text Content */}
                <div className="flex-1 space-y-8">
                    <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
                        It writes code <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500">
                            So you don't have to
                        </span>
                    </h2>
                    <p className="text-gray-400 text-lg">
                        Nexus understands your intent. Just describe what you need, and watch the system architect highly performant solutions in milliseconds.
                    </p>

                    <div className="space-y-4">
                        {[
                            "Context-aware autocompletion",
                            "Real-time bug fixes",
                            "Automated refactoring",
                            "Security vulnerability scanning"
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="flex items-center gap-3 text-gray-300"
                            >
                                <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center text-green-400">
                                    <Check size={14} />
                                </div>
                                {item}
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Code Window */}
                <div className="flex-1 w-full">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="bg-[#0e0e1a] rounded-xl border border-[#2A0E61] shadow-[0_0_50px_rgba(42,14,97,0.3)] overflow-hidden"
                    >
                        {/* Window Header */}
                        <div className="px-4 py-3 bg-[#0a0a12] border-b border-[#2A0E61] flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 rounded-full bg-red-500" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                                <div className="w-3 h-3 rounded-full bg-green-500" />
                            </div>
                            <div className="text-xs text-gray-500 font-mono">deployment.js</div>
                            <div className="w-4" /> {/* Spacer */}
                        </div>

                        {/* Code Content */}
                        <div className="p-6 font-mono text-sm relative min-h-[300px]">
                            <pre className="text-gray-300">
                                <code dangerouslySetInnerHTML={{
                                    __html: text.replace(/const|require|await|console/g, '<span class="text-purple-400">$&</span>').replace(/"[^"]*"/g, '<span class="text-green-400">$&</span>')
                                }} />
                                <span className="w-2 h-4 bg-gray-400 inline-block animate-pulse align-middle ml-1" />
                            </pre>

                            {/* AI Popup */}
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 3 }}
                                className="absolute bottom-6 right-6 bg-[#1a1a2e] border border-[#7042f8] p-4 rounded-lg shadow-xl w-64"
                            >
                                <div className="flex items-center gap-2 mb-2 text-[#b49bff] text-xs font-bold uppercase tracking-wider">
                                    <Zap size={14} className="fill-current" />
                                    Nexus AI
                                </div>
                                <p className="text-gray-300 text-xs mb-3">
                                    I noticed you're setting up a database. Using the aggressive caching strategy will improve read speeds by 400%.
                                </p>
                                <div className="flex gap-2">
                                    <button className="flex-1 py-1.5 bg-[#7042f8] text-white text-xs rounded hover:bg-[#5b32d1] transition-colors">
                                        Apply
                                    </button>
                                    <button className="flex-1 py-1.5 bg-[#2A0E61] text-gray-300 text-xs rounded hover:text-white transition-colors">
                                        Dismiss
                                    </button>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
