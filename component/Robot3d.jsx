"use client";

import {useEffect } from "react";

export default function RobotViewer() {
    useEffect(() => {
        import("@google/model-viewer");
    },  []); 

    return (
        <div className="relative h-full w-full bg-transparent">
            <model-viewer src="/models/Animasi22.glb" alt="Animasi 3d GATONOMOUS" camera-controls=""
            autoplay="" camera-orbit="0deg 90deg auto" min-camera-orbit="auto 90deg auto" max-camera-orbit="auto 90deg auto" shadow-intensity="0" exposure="1" 
            loading="lazy" touch-action="pan-y" 
            style={{width: "100%", height: "100%", backgroundColor:"transparent", border: "none",}} />
        </div>
    );
}
