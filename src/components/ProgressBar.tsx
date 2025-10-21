import { Progress } from "@/components/ui/progress";
import { Trophy } from "lucide-react";

interface ProgressBarProps {
  current: number;
  total: number;
  score: number;
}

const ProgressBar = ({ current, total, score }: ProgressBarProps) => {
  const progress = (current / total) * 100;

  return (
    <div className="space-y-3 animate-fade-in">
      <div className="flex items-center justify-between text-sm">
        <span className="font-medium text-foreground">
          Question {current} of {total}
        </span>
        <span className="flex items-center gap-2 font-semibold text-primary">
          <Trophy className="w-4 h-4" />
          Score: {score}/{current - 1}
        </span>
      </div>
      <Progress value={progress} className="h-2" />
    </div>
  );
};

export default ProgressBar;
