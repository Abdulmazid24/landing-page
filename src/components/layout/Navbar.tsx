import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Rocket, Sparkles } from "lucide-react";
import { Button } from "../ui/Button";

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: "Features", href: "#features" },
        { name: "Integration", href: "#integration" },
        { name: "Pricing", href: "#pricing" },
        { name: "Enterprise", href: "#enterprise" },
    ];

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-[#03001417] backdrop-blur-md border-b border-[#2A0E6136] shadow-lg shadow-[#2A0E61]/20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <div className="flex items-center gap-2 cursor-pointer group">
                        <div className="relative">
                            <Rocket className="w-8 h-8 text-[#7042f8] group-hover:animate-pulse" />
                            <div className="absolute -inset-1 bg-[#7042f8] blur-xl opacity-20 group-hover:opacity-40 transition-opacity rounded-full"></div>
                        </div>
                        <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-500">
                            Nexus
                        </span>
                    </div>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-gray-300 hover:text-white hover:shadow-[0_0_20px_rgba(112,66,248,0.5)] transition-all duration-300 text-sm font-medium"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>

                    {/* CTA Buttons */}
                    <div className="hidden md:flex items-center gap-4">
                        <Button variant="ghost" className="text-gray-300 hover:text-white">Sign In</Button>
                        <Button variant="neon" className="gap-2">
                            <Sparkles className="w-4 h-4" />
                            Get Started
                        </Button>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-300 hover:text-white p-2"
                        >
                            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-[#030014]/90 backdrop-blur-xl border-b border-[#2A0E61]/50"
                    >
                        <div className="px-4 pt-2 pb-8 space-y-4">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="block text-gray-300 hover:text-[#7042f8] py-2 text-lg font-medium"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </a>
                            ))}
                            <div className="pt-4 flex flex-col gap-4">
                                <Button variant="ghost" className="w-full justify-start text-gray-300">Sign In</Button>
                                <Button variant="neon" className="w-full justify-center">Get Started</Button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};
