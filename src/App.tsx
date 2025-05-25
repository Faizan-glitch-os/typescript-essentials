import CourseGoal from "./components/CourseGoal";
import Header from "./components/Header";

import GoldImg from "./assets/goals.jpg";

export default function App() {
  return (
    <main>
      <Header img={{ src: GoldImg, alt: "image of goal" }}>
        <h1>Your first goal</h1>
      </Header>
      <CourseGoal
        title="Learn Typescript with React"
        description="Deep dive in Typescript with react"
      />
    </main>
  );
}
