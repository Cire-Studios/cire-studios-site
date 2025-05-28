import { Badge } from "./ui/badge";

export default function SkillBadge({ skill }: { skill: string }) {
  return (
    <Badge className="bg-gray-800 text-emerald-400 border border-emerald-500/30 px-4 py-2 text-sm">
      {skill}
    </Badge>
  );
}
