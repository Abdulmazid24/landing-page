import createGlobe from "cobe";
import { useEffect, useRef } from "react";

export const Globe = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        let phi = 0;

        if (!canvasRef.current) return;

        const globe = createGlobe(canvasRef.current, {
            devicePixelRatio: 2,
            width: 600 * 2,
            height: 600 * 2,
            phi: 0,
            theta: 0,
            dark: 1,
            diffuse: 1.2,
            mapSamples: 16000,
            mapBrightness: 6,
            baseColor: [0.3, 0.3, 0.3],
            markerColor: [0.1, 0.8, 1],
            glowColor: [1, 1, 1],
            markers: [
                // longitude latitude
                { location: [37.7595, -122.4367], size: 0.03 },
                { location: [40.7128, -74.006], size: 0.1 },
                { location: [52.52, 13.405], size: 0.05 },
                { location: [35.676, 139.65], size: 0.07 },
                { location: [-34.60, -58.38], size: 0.04 },
                { location: [28.61, 77.20], size: 0.06 },
            ],
            onRender: (state) => {
                // Called on every animation frame.
                // `state` will be an empty object, return updated params.
                state.phi = phi;
                phi += 0.01;
            },
        });

        return () => {
            globe.destroy();
        };
    }, []);

    return (
        <div className="flex flex-col items-center justify-center py-20 relative z-20 overflow-hidden">
            <div className="text-center mb-10 max-w-3xl px-4">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                    Deployed <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Everywhere</span>
                </h2>
                <p className="text-gray-400 text-lg">
                    Your code runs on the edge. Low latency for users, no matter where they are.
                </p>
            </div>

            <div className="w-full max-w-[600px] h-[600px] relative">
                <canvas
                    ref={canvasRef}
                    style={{ width: 600, height: 600, maxWidth: "100%", aspectRatio: 1 }}
                    className="w-full h-full opacity-[0.9]"
                />
                {/* Soft glow behind globe */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-blue-500/20 blur-[100px] rounded-full pointer-events-none -z-10" />
            </div>
        </div>
    );
};
