import CourseGoal from "./components/CourseGoal";
import Header from "./components/Header";

import GoldImg from "./assets/goals.jpg";
import { useState } from "react";

type GoalsType = { id: string | number; title: string; description: string }[];

export default function App() {
  const [goals, setGoals] = useState<GoalsType>([]);

  function handleAddGoal() {
    setGoals((previousGoals) => {
      const newGoal = {
        id: "g-1",
        title: "Learn React + Typescript",
        description: "By doing real projects",
      };
      return [...previousGoals, newGoal];
    });
  }
  return (
    <main>
      <Header img={{ src: GoldImg, alt: "image of goal" }}>
        <h1>Your first goal</h1>
      </Header>
      <button onClick={handleAddGoal}>Add Goal</button>
      <ul>
        {goals.map((goal) => (
          <li>
            <CourseGoal title={goal.title} description={goal.description} />
          </li>
        ))}
      </ul>
    </main>
  );
}
