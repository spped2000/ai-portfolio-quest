import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Plus, Github, Linkedin, Mail, GraduationCap, Briefcase, BookText } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import AddAchievementDialog from "@/components/AddAchievementDialog";
import AddSkillDialog from "@/components/AddSkillDialog";
import SkillCard from "@/components/SkillCard";
import AchievementCard from "@/components/AchievementCard";

const Index = () => {
  const { toast } = useToast();
  const [achievements, setAchievements] = useState([
    {
      id: 1,
      title: "KMITL Innovation expo",
      description: "KMITL Innovation expo 1-3 March 2024",
      date: "March 2024",
      imageUrl: "/photo-1605810230434-7631ac76ec81.jpg"
    },
    {
      id: 2,
      title: "Thailand Candidate Tokyo Tech-Asia Young Scientist",
      description: "Selected as Thailand's candidate for the Tokyo Tech-Asia Young Scientist program",
      date: "2024",
      imageUrl: "/photo-1460925895917-afdab827c52f.jpg"
    },
    {
      id: 3,
      title: "TensorFlow Speaker",
      description: "Speaker at a TensorFlow event",
      date: "2023",
      imageUrl: "/photo-1486312338219-ce68d2c6f44d.jpg"
    },
    {
      id: 4,
      title: "PartyRock App Challenge Bangkok",
      description: "Thought Leader Award at PartyRock App Challenge Bangkok",
      date: "2023",
      imageUrl: "/photo-1531297484001-80022131f5a1.jpg"
    },
    {
      id: 5,
      title: "AWS Gameday Hackathon",
      description: "4th place in the AWS Gameday Hackathon",
      date: "2023",
      imageUrl: "/photo-1518770660439-4636190af475.jpg"
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

      {/* About Section */}
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

      {/* Education Section */}
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

      {/* Experience Section */}
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
