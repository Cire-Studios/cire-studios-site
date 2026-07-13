import { Badge } from "./ui/badge";

export default function SkillBadge({ skill }: { skill: string }) {
  return (
    <Badge className="bg-zinc-900 text-zinc-300 border border-zinc-700 px-4 py-2 text-sm rounded-sm font-normal tracking-wide">
      {skill}
    </Badge>
  );
}
