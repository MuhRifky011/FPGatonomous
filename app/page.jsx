import Hero from "@/component/Hero";
import About from "@/component/About";  
import RobotSect from "@/component/RobotSect";

export default function Home() {
    return (
        <main className=" min-h-screen" >
            <Hero />
            <About />
            <RobotSect />
        </main>
    );
}