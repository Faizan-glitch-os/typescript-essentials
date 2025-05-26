import { useRef, type FormEvent } from "react";
import { GoalsType } from "../App";

type NewGoalProps = {
  onAddGoal: (newGoal: GoalsType) => void;
};
export default function NewGoal({ onAddGoal }: NewGoalProps) {
  const titleRef = useRef<HTMLInputElement>(null);
  const descriptionRef = useRef<HTMLInputElement>(null);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    // const formData = new FormData(event.currentTarget);

    /* const newGoal: GoalsType = {
      id: Math.random(),
      title: formData.get("title") as string,
      description: formData.get("description") as string,
    }; */

    const newGoal: GoalsType = {
      id: Math.random(),
      title: titleRef.current!.value,
      description: descriptionRef.current!.value,
    };

    onAddGoal(newGoal);
  }

  return (
    <form onSubmit={handleSubmit}>
      <p>
        <label htmlFor="title">Goal Title</label>
        <input ref={titleRef} type="text" id="title" name="title" />
      </p>
      <p>
        <label htmlFor="description">Goal Description</label>
        <input
          ref={descriptionRef}
          type="text"
          id="description"
          name="description"
        />
      </p>
      <p>
        <button>Add Goal</button>
      </p>
    </form>
  );
}
