import Hero from "@/components/Hero";
import About from "@/components/About";
import MetricsDashboard from "@/components/MetricsDashboard";
import GitLog from "@/components/GitLog";
import APIPlayground from "@/components/APIPlayground";
import StackArchitecture from "@/components/StackArchitecture";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <MetricsDashboard />
      <GitLog />
      <APIPlayground />
      <StackArchitecture />
      <Contact />
    </main>
  );
}
