import Header from "./components/Header";

import GoldImg from "./assets/goals.jpg";
import { type ReactNode, useState } from "react";
import GoalList from "./components/GoalList";
import NewGoal from "./components/NewGoal";
import ShowInfo from "./components/ShowInfo";

export type GoalsType = {
  id: number;
  title: string;
  description: string;
};

export default function App() {
  const [goals, setGoals] = useState<GoalsType[]>([]);

  function handleAddGoal(newGoal: GoalsType) {
    setGoals((previousGoals) => {
      return [...previousGoals, newGoal];
    });
  }

  function handleDeleteGoal(id: number) {
    setGoals((previousGoal) => previousGoal.filter((goal) => goal.id !== id));
  }

  let content: ReactNode;

  if (goals.length === 0) {
    content = (
      <ShowInfo info="hint">
        <p>Now goals to show</p>
      </ShowInfo>
    );
  }

  if (goals.length >= 4) {
    content = (
      <ShowInfo info="warning" severity="low">
        <p>Dont take it too fast</p>
      </ShowInfo>
    );
  }

  if (goals.length >= 8) {
    content = (
      <ShowInfo info="warning" severity="medium">
        <p>You are taking alot of goals at the sametime.</p>
      </ShowInfo>
    );
  }

  if (goals.length >= 10) {
    content = (
      <ShowInfo info="warning" severity="high">
        <p>
          You are exausting yourself with alot of goals. Please keep it slow and
          steady
        </p>
      </ShowInfo>
    );
  }

  return (
    <main>
      <Header img={{ src: GoldImg, alt: "image of goal" }}>
        <h1>Your first goal</h1>
      </Header>
      <NewGoal onAddGoal={handleAddGoal} />
      {content}
      <GoalList goals={goals} onDeleteGoal={handleDeleteGoal} />
    </main>
  );
}
