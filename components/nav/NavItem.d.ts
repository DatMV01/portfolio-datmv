import { ReactNode } from "react";

export interface NavItem {
  id: string;
  link: string;
  title: string;
  icon: ReactNode;
}
