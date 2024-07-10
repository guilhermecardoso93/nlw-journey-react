import { useState } from "react";
import { ArrowRight, Calendar, MapPin, UserRoundPlus } from "lucide-react";

export function App() {
  const [isGuestsInputOpen, setIsGuestsInputOpen] = useState(false);

  function openGuessInput() {
    setIsGuestsInputOpen(true);
  }

  function openGuestsModal{
    console.log('oi')
  }

  return (
    <div className="w-full h-screen flex items-center justify-center bg-pattern bg-no-repeat bg-center">
      <div className="max-w-3xl w-full px-6 text-center space-y-10">
        <div className="flex flex-col items-center gap-3">
          <img src="/logo.svg" alt="Logo" />
          <p className="text-lg zinc-300">
            Convide seus amigos e planeje sua próxima viagem!
          </p>
        </div>
        <div className='space-y-4'>
          <div className="h-16  bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-3">
            <div className="flex items-center gap-2 flex-1">
              <MapPin className="size-5 text-zinc-400" />
              <input
                placeholder="Para onde você vai ?"
                className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
              />
            </div>
            <div className="flex items-center gap-2 ">
              <Calendar className="size-5 text-zinc-400" />
              <input
                placeholder="Quando ?"
                className="bg-transparent text-lg placeholder-zinc-400 w-40 outline-none"
              />
            </div>

            <div className="w-px h-6 bg-zinc-800" />

            <button
              onClick={openGuessInput}
              className="bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium flex items-center gap-1 hover:bg-lime-400"
            >
              Continuar
              <ArrowRight className="size-5 text-lime-950" />
            </button>
          </div>

          {isGuestsInputOpen && (
            <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-3">
              <button
                type="button"
                onClick={openGuestsModal}
                className="flex items-center gap-2 flex-1 text-left"
              >
                <UserRoundPlus className="size-5 text-zinc-400" />
                <span className="text-zinc-400 text-lg flex-1">
                  Quem estará na viagem?
                </span>
              </button>

              <div className="w-px h-6 bg-zinc-800" />

              <button className="bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-lime-400">
                Confirmar viagem
                <ArrowRight className="size-5" />
              </button>
            </div>
          )}
        </div>
        <p className="text-sm text-zinc-500">
          Ao planejar sua viagem pela plann.er você automaticamente concorda{" "}
          <br />
          com nossos{" "}
          <a className="text-zinc-300 underline" href="#">
            termos de uso
          </a>{" "}
          e{" "}
          <a className="text-zinc-300 underline" href="#">
            políticas de privacidade
          </a>
          .
        </p>
      </div>
    </div>
  );
}
