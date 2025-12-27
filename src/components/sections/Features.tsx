import { motion } from "framer-motion";
import { Brain, Database, Globe, Lock, Rocket, Zap } from "lucide-react";
import { cn } from "../../lib/utils";

const features = [
    {
        title: "AI-Powered Intelligence",
        description: "Built-in AI assistance that understands your codebase context.",
        icon: Brain,
        className: "col-span-1 lg:col-span-2 bg-[#1a1a2e]",
    },
    {
        title: "Global Edge Network",
        description: "Deploy instantly to 100+ regions with zero configuration.",
        icon: Globe,
        className: "col-span-1 bg-[#16162c]",
    },
    {
        title: "Enterprise Security",
        description: "Bank-grade encryption and SOC2 Type II compliance.",
        icon: Lock,
        className: "col-span-1 bg-[#111126]",
    },
    {
        title: "Instant Database",
        description: "Serverless Postgres with automatic scaling and backups.",
        icon: Database,
        className: "col-span-1 lg:col-span-2 bg-[#1a1a2e]",
    },
    {
        title: "Lightning Fast Build",
        description: "Rust-based bundler for millisecond HMR.",
        icon: Zap,
        className: "col-span-1 bg-[#16162c]",
    },
    {
        title: "One-Click Deploy",
        description: "From git push to production in seconds.",
        icon: Rocket,
        className: "col-span-1 lg:col-span-3 bg-gradient-to-r from-[#2A0E61] to-[#1a1a2e]",
    },
];

export const Features = () => {
    return (
        <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 relative z-20">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                        Powering the <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">Next Generation</span>
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Everything you need to build, scale, and secure your applications.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ scale: 1.02 }}
                            className={cn(
                                "p-8 rounded-2xl border border-[#2A0E61] hover:border-[#7042f8] transition-colors relative overflow-hidden group",
                                feature.className
                            )}
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-[#7042f8]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                            <div className="relative z-10">
                                <div className="w-12 h-12 rounded-lg bg-[#2A0E61]/50 flex items-center justify-center mb-4 text-[#b49bff] group-hover:text-white group-hover:bg-[#7042f8] transition-colors">
                                    <feature.icon size={24} />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                                <p className="text-gray-400">{feature.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
