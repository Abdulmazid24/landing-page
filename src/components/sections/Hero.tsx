import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Code2, Sparkles } from "lucide-react";
import { Button } from "../ui/Button";

export const Hero = () => {
    return (
        <div className="relative flex flex-col h-full w-full">
            <div className="flex flex-col justify-center items-center h-screen z-[20] px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="relative"
                >
                    <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full blur opacity-30 animate-pulse"></div>
                    <div className="relative px-4 py-2 bg-[#0d0d1f]/80 rounded-full border border-[#2A0E61] flex items-center gap-2 mb-8 backdrop-blur-sm">
                        <Sparkles className="w-4 h-4 text-[#b49bff]" />
                        <span className="text-[#b49bff] text-sm font-medium">
                            The Future of AI Development
                        </span>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[600px] w-auto h-auto text-center"
                >
                    <span>
                        Providing
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 ml-3">
                            the best
                        </span>
                    </span>
                    <span className="text-5xl">Project Experience</span>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.8 }}
                    className="text-lg text-gray-400 my-5 max-w-[600px] text-center"
                >
                    Nexus is a next-generation decentralized ecosystem, providing the most immersive experience for building applications with AI-driven intelligence.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 1 }}
                    className="flex flex-col sm:flex-row gap-4 z-[20]"
                >
                    <Button variant="neon" size="lg" className="rounded-full text-base font-semibold px-8 py-6">
                        Start Building Now
                        <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                    <Button variant="outline" size="lg" className="rounded-full text-base font-semibold px-8 py-6 border-[#7042f8] text-[#b49bff] hover:bg-[#7042f8]/10 hover:text-white">
                        <Code2 className="w-5 h-5 mr-2" />
                        View Documentation
                    </Button>
                </motion.div>
            </div>
        </div>
    );
};
