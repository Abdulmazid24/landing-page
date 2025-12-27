import { motion } from "framer-motion";

const testimonials = [
    {
        name: "Alex Rivera",
        role: "CTO at TechFlow",
        content: "Nexus completely transformed how we ship software. The AI integration is not just a gimmick; it's a productivity multiplier.",
        avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
    },
    {
        name: "Sarah Chen",
        role: "Lead Engineer at DataPulse",
        content: "The speed is incredible. I've never seen a platform handle complex builds this fast. It feels like magic.",
        avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
    },
    {
        name: "James Wilson",
        role: "Founder of StartupX",
        content: "Enterprise-grade security out of the box. We passed our SOC2 audit in record time thanks to Nexus defaults.",
        avatar: "https://i.pravatar.cc/150?u=a04258114e29026302d",
    },
];

export const Testimonials = () => {
    return (
        <section className="py-20 relative z-20">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                        Trusted by <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">Industry Leaders</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((t, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className="p-6 rounded-2xl bg-[#0d0d1f]/50 border border-[#2A0E61] backdrop-blur-sm hover:border-[#7042f8] transition-all duration-300"
                        >
                            <p className="text-gray-300 mb-6 text-lg italic">"{t.content}"</p>
                            <div className="flex items-center gap-4">
                                <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full border-2 border-[#7042f8]" />
                                <div>
                                    <h4 className="text-white font-bold">{t.name}</h4>
                                    <p className="text-sm text-gray-500">{t.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
