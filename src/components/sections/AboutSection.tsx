import { Card } from "@/components/ui/card";

export const AboutSection = () => (
  <section className="container mx-auto px-4 py-16">
    <Card className="p-8 bg-white/50 backdrop-blur-sm">
      <h2 className="text-3xl font-bold text-ai-800 mb-4">About Me</h2>
      <p className="text-lg text-ai-700 leading-relaxed">
        Hello, I'm Job and I'm passionate about technology.
        I'm not just an AI engineer, but also an innovator who creates new products and studies emerging technologies
        to solve various problems. I enjoy tackling challenging and novel problems.
      </p>
    </Card>
  </section>
);