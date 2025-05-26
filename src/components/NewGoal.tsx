import { type FormEvent } from "react";
import { GoalsType } from "../App";

type NewGoalProps = {
  onAddGoal: (newGoal: GoalsType) => void;
};
export default function NewGoal({ onAddGoal }: NewGoalProps) {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const newGoal: GoalsType = {
      id: Math.random(),
      title: formData.get("title") as string,
      description: formData.get("description") as string,
    };

    onAddGoal(newGoal);
  }

  return (
    <form onSubmit={handleSubmit}>
      <p>
        <label htmlFor="title">Goal Title</label>
        <input type="text" id="title" name="title" />
      </p>
      <p>
        <label htmlFor="description">Goal Description</label>
        <input type="text" id="description" name="description" />
      </p>
      <p>
        <button>Add Goal</button>
      </p>
    </form>
  );
}
