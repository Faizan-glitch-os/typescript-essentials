import { type ReactNode } from "react";

type HeaderProps = {
  img: { src: string; alt: string };
  children: ReactNode;
};

export default function Header({ img, children }: HeaderProps) {
  return (
    <header>
      <img {...img} />
      {children}
    </header>
  );
}
