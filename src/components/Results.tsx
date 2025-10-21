import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Trophy, RotateCcw, Share2 } from "lucide-react";
import { toast } from "sonner";

interface ResultsProps {
  score: number;
  totalQuestions: number;
  onRestart: () => void;
}

const Results = ({ score, totalQuestions, onRestart }: ResultsProps) => {
  const percentage = Math.round((score / totalQuestions) * 100);
  
  const getPerformanceMessage = () => {
    if (percentage >= 90) return "Outstanding! 🎉";
    if (percentage >= 70) return "Great Job! 👏";
    if (percentage >= 50) return "Good Effort! 👍";
    return "Keep Practicing! 💪";
  };

  const getPerformanceColor = () => {
    if (percentage >= 70) return "text-success";
    if (percentage >= 50) return "text-accent";
    return "text-destructive";
  };

  const handleShare = () => {
    toast.success("Score copied to clipboard!");
    navigator.clipboard.writeText(
      `I scored ${score}/${totalQuestions} (${percentage}%) on Quiz Master! 🎯`
    );
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl p-8 md:p-12 text-center space-y-6 animate-fade-in">
        <div className="flex justify-center mb-4">
          <div className="bg-primary rounded-full p-6">
            <Trophy className="w-16 h-16 text-primary-foreground" />
          </div>
        </div>
        
        <h1 className="text-3xl md:text-4xl font-bold text-foreground">
          Quiz Complete!
        </h1>
        
        <div className="space-y-4 py-6">
          <p className={`text-2xl font-semibold ${getPerformanceColor()}`}>
            {getPerformanceMessage()}
          </p>
          
          <div className="bg-muted rounded-lg p-6 space-y-2">
            <p className="text-5xl md:text-6xl font-bold text-foreground">
              {score}/{totalQuestions}
            </p>
            <p className="text-xl text-muted-foreground">
              {percentage}% Correct
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 pt-4">
          <Button 
            onClick={onRestart} 
            size="lg"
            className="flex-1 hover:scale-105 transition-transform"
          >
            <RotateCcw className="w-5 h-5 mr-2" />
            Play Again
          </Button>
          
          <Button 
            onClick={handleShare}
            variant="outline"
            size="lg"
            className="flex-1 hover:scale-105 transition-transform"
          >
            <Share2 className="w-5 h-5 mr-2" />
            Share Score
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default Results;
