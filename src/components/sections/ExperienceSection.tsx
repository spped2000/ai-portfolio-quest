import { Card } from "@/components/ui/card";
import { Briefcase } from "lucide-react";

export const ExperienceSection = () => (
  <section className="container mx-auto px-4 py-16">
    <Card className="p-8 bg-white/50 backdrop-blur-sm">
      <div className="flex items-center mb-6">
        <Briefcase className="h-8 w-8 text-ai-600 mr-3" />
        <h2 className="text-3xl font-bold text-ai-800">Experience</h2>
      </div>
      
      <div className="space-y-8">
        <div className="border-l-4 border-ai-600 pl-4">
          <h3 className="text-xl font-semibold text-ai-800">AI Engineer</h3>
          <p className="text-ai-700 font-medium">AXONS · Full-time</p>
          <p className="text-ai-500">Aug 2023 - Present · 1 yr 4 mos</p>
        </div>

        <div className="border-l-4 border-ai-600 pl-4">
          <h3 className="text-xl font-semibold text-ai-800">Researcher</h3>
          <p className="text-ai-700 font-medium">Faculty of Information Technology, King Mongkut's Institute of Technology Ladkrabang</p>
          <p className="text-ai-500">May 2023 - Present · 1 yr 7 mos · Hybrid</p>
          <ul className="list-disc ml-4 mt-2 text-ai-700">
            <li>Published 2 papers (one journal, one proceeding)</li>
            <li>Revolutionizing egg quality control: advanced prompt-based models for automated detection of broken eggs without the need for training</li>
            <li>Zero-/Few-Shot Anomaly Classification for Transistor Using Multimodal CLIP Retrieval-Augmented</li>
          </ul>
        </div>

        <div className="border-l-4 border-ai-600 pl-4">
          <h3 className="text-xl font-semibold text-ai-800">Co-Founder and Engineer</h3>
          <p className="text-ai-700 font-medium">Phuetnoi · Self-employed</p>
          <p className="text-ai-500">Apr 2024 - Jul 2024 · 4 mos</p>
          <ul className="list-disc ml-4 mt-2 text-ai-700">
            <li>12 Finalist Agritech Innovation</li>
            <li>Collaborated with junior colleagues from the Faculty of Engineering to create a smart agriculture platform integrated with AI, including smart drones, a smart Thai agriculture chatbot, and anomaly detection using self-supervised learning</li>
          </ul>
        </div>

        <div className="border-l-4 border-ai-600 pl-4">
          <h3 className="text-xl font-semibold text-ai-800">AI/ML tutor</h3>
          <p className="text-ai-700 font-medium">ตื่นมาโค้ด python · Owner</p>
          <p className="text-ai-500">Jan 2023 - Jul 2024 · 1 yr 7 mos</p>
        </div>

        <div className="border-l-4 border-ai-600 pl-4">
          <h3 className="text-xl font-semibold text-ai-800">AI Software Engineer</h3>
          <p className="text-ai-700 font-medium">Baksters · Full-time</p>
          <p className="text-ai-500">Oct 2022 - Jul 2023 · 10 mos</p>
        </div>
      </div>
    </Card>
  </section>
);