import { Github, Twitter, Linkedin, Rocket } from "lucide-react";

export const Footer = () => {
    return (
        <footer className="w-full bg-[#030014] text-gray-300 py-10 border-t border-[#2A0E61] relative z-50">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">

                {/* Brand */}
                <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-2">
                        <Rocket className="w-6 h-6 text-[#7042f8]" />
                        <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-500">
                            Nexus
                        </span>
                    </div>
                    <p className="text-sm text-gray-400">
                        The next generation of AI-powered development. Build faster, scale smarter.
                    </p>
                </div>

                {/* Links */}
                <div>
                    <h3 className="font-bold text-white mb-4">Product</h3>
                    <ul className="space-y-2 text-sm">
                        <li><a href="#" className="hover:text-[#7042f8] transition-colors">Features</a></li>
                        <li><a href="#" className="hover:text-[#7042f8] transition-colors">Integration</a></li>
                        <li><a href="#" className="hover:text-[#7042f8] transition-colors">Pricing</a></li>
                        <li><a href="#" className="hover:text-[#7042f8] transition-colors">Changelog</a></li>
                    </ul>
                </div>

                <div>
                    <h3 className="font-bold text-white mb-4">Community</h3>
                    <ul className="space-y-2 text-sm">
                        <li><a href="#" className="hover:text-[#7042f8] transition-colors">Discord</a></li>
                        <li><a href="#" className="hover:text-[#7042f8] transition-colors">Twitter</a></li>
                        <li><a href="#" className="hover:text-[#7042f8] transition-colors">GitHub</a></li>
                        <li><a href="#" className="hover:text-[#7042f8] transition-colors">Docs</a></li>
                    </ul>
                </div>

                {/* Socials */}
                <div>
                    <h3 className="font-bold text-white mb-4">Connect</h3>
                    <div className="flex gap-4">
                        <a href="#" className="hover:text-[#7042f8] transition-colors"><Twitter size={20} /></a>
                        <a href="#" className="hover:text-[#7042f8] transition-colors"><Github size={20} /></a>
                        <a href="#" className="hover:text-[#7042f8] transition-colors"><Linkedin size={20} /></a>
                    </div>
                </div>
            </div>

            <div className="text-center text-xs text-gray-500 mt-10">
                &copy; {new Date().getFullYear()} Nexus Inc. All rights reserved.
            </div>
        </footer>
    );
};
