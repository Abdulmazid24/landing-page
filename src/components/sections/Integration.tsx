import { motion } from "framer-motion";
import { Terminal, Github, Gitlab, Database, Cloud, Blocks } from "lucide-react";

const integrations = [
    { name: "GitHub", icon: Github, color: "#fff" },
    { name: "GitLab", icon: Gitlab, color: "#fc6d26" },
    { name: "VS Code", icon: Terminal, color: "#007acc" },
    { name: "PostgreSQL", icon: Database, color: "#336791" },
    { name: "AWS", icon: Cloud, color: "#ff9900" },
    { name: "Docker", icon: Blocks, color: "#2496ed" },
];

export const Integration = () => {
    return (
        <section id="integration" className="py-20 relative z-20 overflow-hidden">
            <div className="absolute inset-0 bg-[#030014] opacity-50" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex flex-col gap-6"
                    >
                        <h2 className="text-3xl md:text-5xl font-bold text-white">
                            Seamlessly Integrate with <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                                Variables & Tools
                            </span>
                        </h2>
                        <p className="text-gray-400 text-lg">
                            Nexus connects with your favorite tools and services. Deploy from Git, sync with your database, and manage environment variables with zero configuration.
                        </p>
                        <div className="flex gap-4">
                            {/* Placeholder tags */}
                            <span className="px-4 py-2 rounded-full border border-[#2A0E61] text-gray-300 text-sm">CI/CD Pipelines</span>
                            <span className="px-4 py-2 rounded-full border border-[#2A0E61] text-gray-300 text-sm">Cloud Sync</span>
                        </div>
                    </motion.div>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {integrations.map((tool, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="h-32 rounded-xl bg-[#0d0d1f] border border-[#2A0E61] flex flex-col items-center justify-center gap-3 hover:border-[#7042f8] hover:shadow-[0_0_20px_rgba(112,66,248,0.2)] transition-all group cursor-pointer"
                            >
                                <tool.icon size={32} style={{ color: tool.color }} className="opacity-80 group-hover:opacity-100 transition-opacity" />
                                <span className="text-gray-400 font-medium group-hover:text-white transition-colors">{tool.name}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
