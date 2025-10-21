// Import React hooks and required components
import { useState } from "react";
import { Question } from "@/data/questions"; // Type definition for quiz questions
import QuestionCard from "./QuestionCard"; // Component to display individual question
import ProgressBar from "./ProgressBar"; // Component to display quiz progress

// Define the props expected by the Quiz component
interface QuizProps {
  questions: Question[]; // Array of quiz questions
  onComplete: (score: number) => void; // Callback when quiz is completed
}

// Main Quiz component
const Quiz = ({ questions, onComplete }: QuizProps) => {
  // Track the current question index
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  
  // Track user's total score
  const [score, setScore] = useState(0);
  
  // Track the currently selected answer index (or null if none selected)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  
  // Track whether feedback is being shown (correct/wrong answer indication)
  const [showFeedback, setShowFeedback] = useState(false);

  // Get the current question object
  const currentQuestion = questions[currentQuestionIndex];

  // Determine if the current question is the last one
  const isLastQuestion = currentQuestionIndex === questions.length - 1;

  /**
   * Handles when a user selects an answer.
   * Updates score, shows feedback, and moves to the next question or ends quiz.
   */
  const handleAnswerSelect = (answerIndex: number) => {
    // Prevent multiple clicks while feedback is showing
    if (showFeedback) return;
    
    // Store the selected answer
    setSelectedAnswer(answerIndex);
    setShowFeedback(true);

    // If the answer is correct, increment the score
    if (answerIndex === currentQuestion.correctAnswer) {
      setScore(score + 1);
    }

    // Wait 1.5 seconds before proceeding (to show feedback)
    setTimeout(() => {
      if (isLastQuestion) {
        // If it's the last question, finalize the score
        const finalScore =
          answerIndex === currentQuestion.correctAnswer ? score + 1 : score;
        onComplete(finalScore); // Call parent callback with final score
      } else {
        // Move to the next question
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setSelectedAnswer(null); // Reset selection
        setShowFeedback(false); // Hide feedback
      }
    }, 1500);
  };

  // Component UI rendering
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      {/* Container for quiz content */}
      <div className="w-full max-w-3xl space-y-6">
        {/* Progress bar showing current question and score */}
        <ProgressBar 
          current={currentQuestionIndex + 1} 
          total={questions.length}
          score={score}
        />
        
        {/* Question card displaying question and answer options */}
        <QuestionCard
          question={currentQuestion}
          selectedAnswer={selectedAnswer}
          showFeedback={showFeedback}
          onAnswerSelect={handleAnswerSelect}
        />
      </div>
    </div>
  );
};

// Export component for use in other files
export default Quiz;
