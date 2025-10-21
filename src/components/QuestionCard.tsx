import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Question } from "@/data/questions";
import { Check, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface QuestionCardProps {
  question: Question;
  selectedAnswer: number | null;
  showFeedback: boolean;
  onAnswerSelect: (answerIndex: number) => void;
}

const QuestionCard = ({ 
  question, 
  selectedAnswer, 
  showFeedback, 
  onAnswerSelect 
}: QuestionCardProps) => {
  const getButtonVariant = (index: number) => {
    if (!showFeedback) return "outline";
    if (index === question.correctAnswer) return "default";
    if (index === selectedAnswer && index !== question.correctAnswer) return "destructive";
    return "outline";
  };

  const getButtonClass = (index: number) => {
    if (!showFeedback) return "";
    if (index === question.correctAnswer) return "bg-success hover:bg-success";
    if (index === selectedAnswer && index !== question.correctAnswer) return "";
    return "opacity-50";
  };

  return (
    <Card className="p-6 md:p-8 space-y-6 animate-fade-in">
      <div className="space-y-2">
        <span className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
          {question.category}
        </span>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground">
          {question.question}
        </h2>
      </div>

      <div className="grid gap-3 md:gap-4">
        {question.options.map((option, index) => (
          <Button
            key={index}
            variant={getButtonVariant(index)}
            className={cn(
              "h-auto py-4 px-6 text-left justify-start text-base md:text-lg transition-all",
              getButtonClass(index),
              !showFeedback && "hover:scale-[1.02]"
            )}
            onClick={() => onAnswerSelect(index)}
            disabled={showFeedback}
          >
            <span className="flex items-center gap-3 w-full">
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-muted flex items-center justify-center font-semibold">
                {String.fromCharCode(65 + index)}
              </span>
              <span className="flex-1">{option}</span>
              {showFeedback && index === question.correctAnswer && (
                <Check className="w-5 h-5 flex-shrink-0" />
              )}
              {showFeedback && index === selectedAnswer && index !== question.correctAnswer && (
                <X className="w-5 h-5 flex-shrink-0" />
              )}
            </span>
          </Button>
        ))}
      </div>
    </Card>
  );
};

export default QuestionCard;
