import { motion } from "framer-motion";
import { Building2, ShieldCheck, Zap } from "lucide-react";
import { Button } from "../ui/Button";

export const Enterprise = () => {
    return (
        <section id="enterprise" className="py-20 relative z-20">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-r from-[#2A0E61] to-[#0d0d1f] rounded-3xl p-8 md:p-16 border border-[#7042f8]/30 flex flex-col md:flex-row items-center gap-12"
                >
                    <div className="flex-1 space-y-6 text-center md:text-left">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#7042f8]/20 border border-[#7042f8] text-[#b49bff] text-sm font-medium">
                            <Building2 size={16} />
                            <span>Enterprise Ready</span>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-white">
                            Scale with Confidence
                        </h2>
                        <p className="text-gray-300 text-lg">
                            Custom solutions for large-scale organizations. Dedicated infrastructure, advanced security audits, and priority support channels.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center md:justify-start">
                            <div className="flex items-center gap-2 text-gray-300">
                                <ShieldCheck className="text-[#7042f8]" />
                                <span>SOC2 Compliant</span>
                            </div>
                            <div className="flex items-center gap-2 text-gray-300">
                                <Zap className="text-[#7042f8]" />
                                <span>99.99% Uptime</span>
                            </div>
                        </div>

                        <div className="pt-6">
                            <Button variant="neon" size="lg">Contact Sales</Button>
                        </div>
                    </div>

                    <div className="flex-1 relative">
                        {/* Abstract visual for Enterprise */}
                        <div className="aspect-video rounded-xl bg-black/50 overflow-hidden border border-[#2A0E61] relative">
                            <div className="absolute inset-0 bg-gradient-to-tr from-[#7042f8]/20 to-transparent" />
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-cyan-500 rounded-full blur-[80px] opacity-30 animate-pulse" />
                            <div className="grid grid-cols-6 gap-4 p-8 opacity-50">
                                {Array.from({ length: 24 }).map((_, i) => (
                                    <div key={i} className="h-2 bg-[#2A0E61] rounded-full w-full animate-pulse" style={{ animationDelay: `${i * 0.1}s` }} />
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
