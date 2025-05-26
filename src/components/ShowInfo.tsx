import { ReactNode } from "react";

type HintInfoType = {
  info: "hint";
  children: ReactNode;
};

type WarningInfoType = {
  info: "warning";
  severity: "low" | "medium" | "high";
  children: ReactNode;
};

type ShowInfoType = HintInfoType | WarningInfoType;

export default function ShowInfo(props: ShowInfoType) {
  if (props.info === "hint") {
    return <aside className="infobox infobox-hint">{props.children}</aside>;
  }

  if (props.info === "warning") {
    return (
      <aside className={"infobox infobox-warning warning--" + props.severity}>
        <h2>Warning</h2>
        {props.children}
      </aside>
    );
  }
}
