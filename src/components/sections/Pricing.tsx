import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";
import { Button } from "../ui/Button";

const plans = [
    {
        name: "Starter",
        price: "Free",
        description: "For individuals and hobbyists.",
        features: ["5 Projects", "Community Support", "1GB Storage", "Basic AI Features"],
        color: "from-blue-400 to-cyan-300",
    },
    {
        name: "Pro",
        price: "$29",
        period: "/month",
        description: "For professional developers.",
        features: [
            "Unlimited Projects",
            "Priority Support",
            "100GB Storage",
            "Advanced AI Models",
            "Team Collaboration",
        ],
        highlight: true,
        color: "from-purple-500 to-cyan-500",
    },
    {
        name: "Enterprise",
        price: "Custom",
        description: "For large teams and organizations.",
        features: ["Unlimited Everything", "24/7 Dedicated Support", "SSO & Security", "Custom AI Training", "SLA Guarantee"],
        color: "from-pink-500 to-rose-400",
    },
];

export const Pricing = () => {
    return (
        <section id="pricing" className="py-20 relative z-20">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                        Simple, Transparent <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">Pricing</span>
                    </h2>
                    <p className="text-gray-400 text-lg">Choose the perfect plan for your needs.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className={`p-8 rounded-2xl border backdrop-blur-sm relative flex flex-col ${plan.highlight
                                    ? "bg-[#0d0d1f]/80 border-[#7042f8] shadow-[0_0_30px_rgba(112,66,248,0.2)]"
                                    : "bg-[#0d0d1f]/40 border-[#2A0E61]"
                                }`}
                        >
                            {plan.highlight && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-purple-500 to-cyan-500 text-white px-4 py-1 rounded-full text-sm font-bold flex items-center gap-1">
                                    <Sparkles size={14} /> Most Popular
                                </div>
                            )}

                            <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                            <div className="flex items-baseline gap-1 mb-4">
                                <span className={`text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${plan.color}`}>
                                    {plan.price}
                                </span>
                                {plan.period && <span className="text-gray-400">{plan.period}</span>}
                            </div>
                            <p className="text-gray-400 mb-8 text-sm">{plan.description}</p>

                            <ul className="space-y-4 mb-8 flex-1">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className="flex items-center gap-3 text-gray-300 text-sm">
                                        <div className="p-1 rounded-full bg-[#2A0E61] text-[#7042f8]">
                                            <Check size={14} />
                                        </div>
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <Button
                                variant={plan.highlight ? "neon" : "outline"}
                                className={`w-full ${!plan.highlight && "border-[#2A0E61] hover:bg-[#2A0E61]/50 text-white"}`}
                            >
                                Get Started
                            </Button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
