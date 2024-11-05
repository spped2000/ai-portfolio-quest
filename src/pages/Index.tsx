import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Github, Linkedin, Mail, BookText } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import AddAchievementDialog from "@/components/AddAchievementDialog";
import AddSkillDialog from "@/components/AddSkillDialog";
import SkillCard from "@/components/SkillCard";
import AchievementCard from "@/components/AchievementCard";
import { useToast } from "@/components/ui/use-toast";
import { AboutSection } from "@/components/sections/AboutSection";
import { EducationSection } from "@/components/sections/EducationSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";

const Index = () => {
  const { toast } = useToast();

  const [achievements, setAchievements] = useState([
    {
      id: 1,
      title: "KMITL Innovation expo",
      description: "KMITL Innovation expo 1-3 March 2024",
      date: "March 2024",
      imageUrl: "/achievement-1.jpg"
    },
    {
      id: 2,
      title: "Thailand Candidate Tokyo Tech-Asia Young Scientist",
      description: "Selected as Thailand's candidate for the Tokyo Tech-Asia Young Scientist program",
      date: "2024",
      imageUrl: "/achievement-2.jpg"
    },
    {
      id: 3,
      title: "TensorFlow Speaker",
      description: "Speaker at a TensorFlow event",
      date: "2023",
      imageUrl: "/achievement-3.jpg"
    },
    {
      id: 4,
      title: "PartyRock App Challenge Bangkok",
      description: "Thought Leader Award at PartyRock App Challenge Bangkok",
      date: "2023",
      imageUrl: "/achievement-4.jpg"
    },
    {
      id: 5,
      title: "AWS Gameday Hackathon",
      description: "4th place in the AWS Gameday Hackathon",
      date: "2023",
      imageUrl: "/achievement-5.jpg"
    }
  ]);

  const [skills, setSkills] = useState([
    { id: 1, name: "Python" },
    { id: 2, name: "Flask" },
    { id: 3, name: "Ray" },
    { id: 4, name: "Tensorflow" },
    { id: 5, name: "Pytorch" },
    { id: 6, name: "MLops" },
    { id: 7, name: "AI application deployment" },
    { id: 8, name: "Tuning Optimize Edge device" },
    { id: 9, name: "Cloud (AWS) e.g. sagemaker, bedrock, EC2, S3" },
    { id: 10, name: "Deep Learning" },
    { id: 11, name: "Machine Learning" },
    { id: 12, name: "LLMs, VLMs" },
    { id: 13, name: "Multi-Modal RAG" },
    { id: 14, name: "Research" }
  ]);
  const [isAddingAchievement, setIsAddingAchievement] = useState(false);
  const [isAddingSkill, setIsAddingSkill] = useState(false);

  const addAchievement = (achievement: { title: string; description: string; date: string; imageUrl: string }) => {
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
      <section className="container mx-auto px-4 py-20 text-center animate-fadeIn">
        <Avatar className="w-32 h-32 mx-auto mb-8 border-4 border-white shadow-lg">
          <AvatarImage src="/profile.jpg" alt="Natdhanai Praneenatthavee" />
          <AvatarFallback>NP</AvatarFallback>
        </Avatar>
        <h1 className="text-4xl md:text-6xl font-bold text-ai-800 mb-4">
          Natdhanai Praneenatthavee
        </h1>
        <p className="text-xl md:text-2xl text-ai-600 mb-8">
          AI Engineer from Thailand
        </p>
        <div className="flex justify-center space-x-4">
          <Button variant="outline" size="icon" asChild>
            <a href="https://github.com/spped2000" target="_blank" rel="noopener noreferrer">
              <Github className="h-5 w-5" />
            </a>
          </Button>
          <Button variant="outline" size="icon" asChild>
            <a href="https://www.linkedin.com/in/natdhanai-praneenatthavee-271899242/" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-5 w-5" />
            </a>
          </Button>
          <Button variant="outline" size="icon" asChild>
            <a href="https://medium.com/@spped2000" target="_blank" rel="noopener noreferrer">
              <BookText className="h-5 w-5" />
            </a>
          </Button>
          <Button variant="outline" size="icon" asChild>
            <a href="mailto:jobpython2000@gmail.com">
              <Mail className="h-5 w-5" />
            </a>
          </Button>
        </div>
      </section>

      <AboutSection />
      <EducationSection />
      <ExperienceSection />

      {/* Skills Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-ai-800 mb-8">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill) => (
            <SkillCard key={skill.id} {...skill} />
          ))}
        </div>
      </section>

      {/* Achievements Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-ai-800 mb-8">Achievements</h2>
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

