import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Plus, Award, Brain, Briefcase, Github, Linkedin, Mail } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import AddAchievementDialog from "@/components/AddAchievementDialog";
import AddSkillDialog from "@/components/AddSkillDialog";
import SkillCard from "@/components/SkillCard";
import AchievementCard from "@/components/AchievementCard";

const Index = () => {
  const { toast } = useToast();
  const [achievements, setAchievements] = useState([
    {
      id: 1,
      title: "AI Model Deployment",
      description: "Successfully deployed large language models in production environment",
      date: "2023",
    }
  ]);
  const [skills, setSkills] = useState([
    { id: 1, name: "Machine Learning", level: 90 },
    { id: 2, name: "Python", level: 95 },
    { id: 3, name: "Deep Learning", level: 85 },
  ]);
  const [isAddingAchievement, setIsAddingAchievement] = useState(false);
  const [isAddingSkill, setIsAddingSkill] = useState(false);

  const addAchievement = (achievement: { title: string; description: string; date: string }) => {
    setAchievements([...achievements, { id: achievements.length + 1, ...achievement }]);
    toast({
      title: "Achievement added",
      description: "Your achievement has been successfully added to your portfolio.",
    });
  };

  const addSkill = (skill: { name: string; level: number }) => {
    setSkills([...skills, { id: skills.length + 1, ...skill }]);
    toast({
      title: "Skill added",
      description: "Your skill has been successfully added to your portfolio.",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-ai-100">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center animate-fadeIn">
        <h1 className="text-4xl md:text-6xl font-bold text-ai-800 mb-4">
          Natdhanai Praneenatthavee
        </h1>
        <p className="text-xl md:text-2xl text-ai-600 mb-8">
          AI Engineer from Thailand
        </p>
        <div className="flex justify-center space-x-4">
          <Button variant="outline" size="icon">
            <Github className="h-5 w-5" />
          </Button>
          <Button variant="outline" size="icon">
            <Linkedin className="h-5 w-5" />
          </Button>
          <Button variant="outline" size="icon">
            <Mail className="h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section className="container mx-auto px-4 py-16">
        <Card className="p-8 bg-white/50 backdrop-blur-sm">
          <h2 className="text-3xl font-bold text-ai-800 mb-4">About Me</h2>
          <p className="text-lg text-ai-700 leading-relaxed">
            As an AI Engineer based in Thailand, I specialize in developing and deploying machine learning solutions. 
            With a passion for artificial intelligence and its applications, I work on creating innovative solutions 
            that bridge the gap between cutting-edge AI research and practical business applications.
          </p>
        </Card>
      </section>

      {/* Skills Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-ai-800">Skills</h2>
          <Button onClick={() => setIsAddingSkill(true)} variant="outline">
            <Plus className="h-4 w-4 mr-2" />
            Add Skill
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill) => (
            <SkillCard key={skill.id} {...skill} />
          ))}
        </div>
      </section>

      {/* Achievements Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-ai-800">Achievements</h2>
          <Button onClick={() => setIsAddingAchievement(true)} variant="outline">
            <Plus className="h-4 w-4 mr-2" />
            Add Achievement
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievements.map((achievement) => (
            <AchievementCard key={achievement.id} {...achievement} />
          ))}
        </div>
      </section>

      <AddAchievementDialog
        open={isAddingAchievement}
        onOpenChange={setIsAddingAchievement}
        onAdd={addAchievement}
      />
      <AddSkillDialog
        open={isAddingSkill}
        onOpenChange={setIsAddingSkill}
        onAdd={addSkill}
      />
    </div>
  );
};

export default Index;