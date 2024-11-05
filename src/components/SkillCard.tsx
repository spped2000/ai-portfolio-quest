import { Card } from "@/components/ui/card";
import { Coffee } from "lucide-react";

interface SkillCardProps {
  name: string;
}

const SkillCard = ({ name }: SkillCardProps) => {
  return (
    <Card className="p-6 hover:shadow-lg transition-shadow">
      <div className="flex items-center">
        <Coffee className="h-6 w-6 text-ai-600 mr-2" />
        <h3 className="text-xl font-semibold text-ai-800">{name}</h3>
      </div>
    </Card>
  );
};

export default SkillCard;