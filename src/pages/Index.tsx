import { useState } from "react";
import Welcome from "@/components/Welcome";
import Quiz from "@/components/Quiz";
import Results from "@/components/Results";
import { questions } from "@/data/questions";

type GameState = "welcome" | "quiz" | "results";

const Index = () => {
  const [gameState, setGameState] = useState<GameState>("welcome");
  const [finalScore, setFinalScore] = useState(0);

  const handleStartQuiz = () => {
    setGameState("quiz");
  };

  const handleQuizComplete = (score: number) => {
    setFinalScore(score);
    setGameState("results");
  };

  const handleRestart = () => {
    setFinalScore(0);
    setGameState("welcome");
  };

  return (
    <>
      {gameState === "welcome" && <Welcome onStart={handleStartQuiz} />}
      {gameState === "quiz" && (
        <Quiz questions={questions} onComplete={handleQuizComplete} />
      )}
      {gameState === "results" && (
        <Results 
          score={finalScore} 
          totalQuestions={questions.length} 
          onRestart={handleRestart} 
        />
      )}
    </>
  );
};

export default Index;
