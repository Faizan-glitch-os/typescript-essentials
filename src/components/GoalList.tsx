import { type GoalsType } from "../App";
import CourseGoal from "./CourseGoal";

type GoalListProp = {
  goals: GoalsType[];
  onDeleteGoal: (id: number) => void;
};

export default function GoalList({ goals, onDeleteGoal }: GoalListProp) {
  return (
    <ul>
      {goals.map((goal) => (
        <li>
          <CourseGoal
            id={goal.id}
            title={goal.title}
            description={goal.description}
            onDelete={onDeleteGoal}
          />
        </li>
      ))}
    </ul>
  );
}
