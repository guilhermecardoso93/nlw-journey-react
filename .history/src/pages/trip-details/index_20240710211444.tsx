import { MapPin } from "lucide-react";

export function TripDetailsPage() {
  return (
    <div className="max-w-6xl px-6 py-10">
      <div className="px-4 h-16 rounded-xl bg-zinc-900 shadow-shape flex items-center justify-between">
        <div>
          <MapPin className="size-5 text-zinc-400" />
          <span className="text-lg text-zinc-100">Florianópolis, SC</span>
        </div>
      </div>
    </div>
  );
}
