import { Card } from "@/components/ui/card";
import { Brain } from "lucide-react";

interface SkillCardProps {
  name: string;
  level: number;
}

const SkillCard = ({ name, level }: SkillCardProps) => {
  return (
    <Card className="p-6 hover:shadow-lg transition-shadow">
      <div className="flex items-center mb-4">
        <Brain className="h-6 w-6 text-ai-600 mr-2" />
        <h3 className="text-xl font-semibold text-ai-800">{name}</h3>
      </div>
      <div className="w-full bg-ai-100 rounded-full h-2.5">
        <div
          className="bg-ai-600 h-2.5 rounded-full transition-all duration-500"
          style={{ width: `${level}%` }}
        />
      </div>
      <p className="text-right mt-2 text-sm text-ai-600">{level}%</p>
    </Card>
  );
};

export default SkillCard;