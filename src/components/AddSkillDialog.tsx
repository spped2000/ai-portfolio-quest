import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { useState } from "react";

interface AddSkillDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onAdd: (skill: { name: string; level: number }) => void;
}

const AddSkillDialog = ({ open, onOpenChange, onAdd }: AddSkillDialogProps) => {
  const [name, setName] = useState("");
  const [level, setLevel] = useState(75);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAdd({ name, level });
    setName("");
    setLevel(75);
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add Skill</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Input
              placeholder="Skill Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm text-ai-700">Proficiency Level: {level}%</label>
            <Slider
              value={[level]}
              onValueChange={(value) => setLevel(value[0])}
              max={100}
              step={1}
            />
          </div>
          <Button type="submit" className="w-full">Add Skill</Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddSkillDialog;