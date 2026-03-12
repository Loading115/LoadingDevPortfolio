import type { LucideIcon } from "lucide-react";
import { Brush, Code2, Cpu, Palette } from "lucide-react";

/**
 * Declarative model for one technical skill card in the About section.
 */
export type TechnicalSkillData = {
  id: string;
  name: string;
  category: string;
  icon: LucideIcon;
};

/**
 * About technical skills.
 * Add, remove, or reorder items here to update the section UI.
 */
export const technicalSkillsData: readonly TechnicalSkillData[] = [
  {
    id: "unity",
    name: "Unity",
    category: "Engine",
    icon: Cpu,
  },
  {
    id: "unreal",
    name: "Unreal Engine",
    category: "Engine",
    icon: Cpu,
  },
  {
    id: "csharp",
    name: "C#",
    category: "Language",
    icon: Code2,
  },
  {
    id: "cpp",
    name: "C++",
    category: "Language",
    icon: Code2,
  },
  {
    id: "game-design",
    name: "Game Design",
    category: "Design",
    icon: Palette,
  },
  {
    id: "modeling",
    name: "3D Modeling",
    category: "Art",
    icon: Brush,
  },
];
