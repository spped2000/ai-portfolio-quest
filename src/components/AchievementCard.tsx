import { Card } from "@/components/ui/card";
import { Award } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface AchievementCardProps {
  title: string;
  description: string;
  date: string;
  imageUrl: string;
}

const AchievementCard = ({ title, description, date, imageUrl }: AchievementCardProps) => {
  return (
    <Card className="p-6 hover:shadow-lg transition-shadow">
      <AspectRatio ratio={16 / 9} className="mb-4">
        <img
          src={imageUrl}
          alt={title}
          className="rounded-md object-cover w-full h-full"
        />
      </AspectRatio>
      <div className="flex items-center mb-4">
        <Award className="h-6 w-6 text-ai-600 mr-2" />
        <h3 className="text-xl font-semibold text-ai-800">{title}</h3>
      </div>
      <p className="text-ai-700 mb-4">{description}</p>
      <p className="text-sm text-ai-500">{date}</p>
    </Card>
  );
};

export default AchievementCard;