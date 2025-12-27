import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "../ui/Button";

export const CTA = () => {
    return (
        <section className="py-20 px-4 relative z-20 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-[#2A0E61]/20 to-transparent pointer-events-none" />

            <div className="max-w-4xl mx-auto text-center relative z-10 p-10 bg-[#0d0d1f]/50 backdrop-blur-lg border border-[#2A0E61] rounded-3xl">
                <div className="absolute -top-10 -left-10 w-40 h-40 bg-purple-500 rounded-full blur-[100px] opacity-20 animate-pulse"></div>
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-cyan-500 rounded-full blur-[100px] opacity-20 animate-pulse"></div>

                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                    Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">Revolutionize</span> Your Workflow?
                </h2>
                <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
                    Join thousands of developers building the future with Nexus. Start your journey today with our free tier.
                </p>

                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <Button variant="neon" size="lg" className="rounded-full px-8 py-6 text-base">
                        Get Started for Free
                        <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                    <Button variant="outline" size="lg" className="rounded-full px-8 py-6 text-base bg-transparent border-[#7042f8] text-[#b49bff] hover:bg-[#7042f8]/10">
                        <Sparkles className="mr-2 w-5 h-5" />
                        Book a Demo
                    </Button>
                </div>
            </div>
        </section>
    );
};
