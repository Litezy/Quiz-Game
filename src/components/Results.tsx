// Importing reusable UI components and utilities
import { Button } from "@/components/ui/button"; // Custom button component
import { Card } from "@/components/ui/card"; // Card container for layout styling
import { Trophy, RotateCcw, Share2 } from "lucide-react"; // Icons from Lucide React library
import { toast } from "sonner"; // Notification/toast library

// Define the props the Results component expects
interface ResultsProps {
  score: number; // User's score
  totalQuestions: number; // Total number of quiz questions
  onRestart: () => void; // Function to restart the quiz
}

// Main Results component
const Results = ({ score, totalQuestions, onRestart }: ResultsProps) => {
  // Calculate the user's performance percentage
  const percentage = Math.round((score / totalQuestions) * 100);
  
  // Determine a message based on performance
  const getPerformanceMessage = () => {
    if (percentage >= 90) return "Outstanding! 🎉"; // Excellent performance
    if (percentage >= 70) return "Great Job! 👏"; // Good performance
    if (percentage >= 50) return "Good Effort! 👍"; // Average performance
    return "Keep Practicing! 💪"; // Below average, encouragement message
  };

  // Return color class based on score performance
  const getPerformanceColor = () => {
    if (percentage >= 70) return "text-success"; // Green for good scores
    if (percentage >= 50) return "text-accent"; // Yellow/orange for average
    return "text-destructive"; // Red for low scores
  };

  // Handle sharing the user's score
  const handleShare = () => {
    toast.success("Score copied to clipboard!"); // Show success toast
    navigator.clipboard.writeText(
      `I scored ${score}/${totalQuestions} (${percentage}%) on Quiz Master! 🎯`
    ); // Copy score text to clipboard
  };

  // Component UI rendering
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      {/* Card wrapper to display results */}
      <Card className="w-full max-w-2xl p-8 md:p-12 text-center space-y-6 animate-fade-in">
        
        {/* Trophy icon at the top */}
        <div className="flex justify-center mb-4">
          <div className="bg-primary rounded-full p-6">
            <Trophy className="w-16 h-16 text-primary-foreground" />
          </div>
        </div>
        
        {/* Header text */}
        <h1 className="text-3xl md:text-4xl font-bold text-foreground">
          Quiz Complete!
        </h1>
        
        {/* Score details section */}
        <div className="space-y-4 py-6">
          {/* Performance message with dynamic color */}
          <p className={`text-2xl font-semibold ${getPerformanceColor()}`}>
            {getPerformanceMessage()}
          </p>
          
          {/* Display actual score and percentage */}
          <div className="bg-muted rounded-lg p-6 space-y-2">
            <p className="text-5xl md:text-6xl font-bold text-foreground">
              {score}/{totalQuestions}
            </p>
            <p className="text-xl text-muted-foreground">
              {percentage}% Correct
            </p>
          </div>
        </div>

        {/* Buttons section (Restart + Share) */}
        <div className="flex flex-col sm:flex-row gap-3 pt-4">
          {/* Restart button */}
          <Button 
            onClick={onRestart} 
            size="lg"
            className="flex-1 p-2 hover:scale-105 transition-transform"
          >
            <RotateCcw className="w-5 h-5 mr-2" />
            Play Again
          </Button>
          
          {/* Share button */}
          <Button 
            onClick={handleShare}
            variant="outline"
            size="lg"
            className="flex-1 p-2 hover:scale-105 transition-transform"
          >
            <Share2 className="w-5 h-5 mr-2" />
            Share Score
          </Button>
        </div>
      </Card>
    </div>
  );
};

// Export component for use in other files
export default Results;
