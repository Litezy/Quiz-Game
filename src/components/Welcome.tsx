import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Brain } from "lucide-react";

interface WelcomeProps {
  onStart: () => void;
}


//welcome card
const Welcome = ({ onStart }: WelcomeProps) => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl p-8 md:p-12 text-center space-y-6 animate-fade-in">
        <div className="flex justify-center mb-4">
          <div className="bg-primary rounded-full p-6">
            <Brain className="w-16 h-16 text-primary-foreground" />
          </div>
        </div>
        
        <h1 className="text-4xl  font-bold text-foreground">
          Web3-bridge Quiz Master
        </h1>
        
        <p className="text-xl text-muted-foreground max-w-lg mx-auto">
          Test your knowledge across various topics. Answer 10 questions and see how well you score!
        </p>
        
        <div className="space-y-4 pt-4">
          <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary" />
              <span>10 Questions</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-secondary" />
              <span>Multiple Topics</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-accent" />
              <span>Instant Feedback</span>
            </div>
          </div>
        </div>

        <Button 
          onClick={onStart} 
          size="lg"
          className="mt-6 text-lg px-8 py-6 hover:scale-105 transition-transform"
        >
          Start Quiz
        </Button>
      </Card>
    </div>
  );
};

export default Welcome;
