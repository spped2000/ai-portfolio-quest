import { Card } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";

export const EducationSection = () => (
  <section className="container mx-auto px-4 py-16">
    <Card className="p-8 bg-white/50 backdrop-blur-sm">
      <div className="flex items-center mb-6">
        <GraduationCap className="h-8 w-8 text-ai-600 mr-3" />
        <h2 className="text-3xl font-bold text-ai-800">Education</h2>
      </div>
      
      <div className="space-y-8">
        {/* Master's Degree */}
        <div className="border-l-4 border-ai-600 pl-4">
          <h3 className="text-xl font-semibold text-ai-800">King Mongkut's Institute of Technology Ladkrabang</h3>
          <p className="text-ai-700 font-medium">Master's degree, Artificial Intelligence</p>
          <p className="text-ai-600">Faculty of Information Technology</p>
          <p className="text-ai-500">Jul 2022 - 2024</p>
        </div>

        {/* Bachelor's Degree */}
        <div className="border-l-4 border-ai-600 pl-4">
          <h3 className="text-xl font-semibold text-ai-800">Mahidol University</h3>
          <p className="text-ai-700 font-medium">Bachelor's degree, Physics</p>
          <p className="text-ai-600">AI submajor</p>
          <div className="mt-2">
            <p className="text-ai-600 font-medium">Senior Project:</p>
            <p className="text-ai-600">Deep Learning Inversion of One-dimensional Acoustic Data</p>
            <p className="text-sm text-ai-500 italic">(Completed before ChatGPT release)</p>
          </div>
          <p className="text-ai-500 mt-2">2018 - 2022</p>
        </div>
      </div>
    </Card>
  </section>
);