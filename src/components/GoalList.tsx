import { type GoalsType } from "../App";
import CourseGoal from "./CourseGoal";

type GoalListProp = {
  goals: GoalsType[];
};

export default function GoalList({ goals }: GoalListProp) {
  return (
    <ul>
      {goals.map((goal) => (
        <li>
          <CourseGoal title={goal.title} description={goal.description} />
        </li>
      ))}
    </ul>
  );
}
