import { Calendar, MapPin } from "lucide-react";

export function App() {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="max-w-3xl w-full px-6 text-center space-y-10">
        <p className="text-lg zinc-300">
          Convide seus amigos e planeje sua próxima viagem!
        </p>
        <div className="h-16  bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape">
          <div className="flex items-center gap-2">
            <MapPin className="size-5 text-zinc-400" />
            <input
              placeholder="Para onde você vai ?"
              className="bg-transparent text-lg placeholder-zinc-400"
            />
          </div>
          <Calendar className="size-5 text-zinc-400" />

          <input
            placeholder="Quando ?"
            className="bg-transparent text-lg placeholder-zinc-400"
          />
          <button>Continuar</button>
        </div>
        <p className="text-sm text-zinc-500">
          Ao planejar sua viagem pela plann.er você automaticamente concorda{" "}
          <br />
          com nossos{" "}
          <a className="text-zinc-300 underline" href="#">
            termos de uso
          </a>
          <a className="text-zinc-300 underline" href="#">
            políticas de privacidade
          </a>
          .
        </p>
      </div>
    </div>
  );
}
