export function App() {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="w-3xl px-6 text-center space-y-10">
        <p className="text-lg zinc-300">
          Convide seus amigos e planeje sua próxima viagem!
        </p>
        <div className="h-16  bg-zinc-900 px-4 rounded-xl flex items-center">
          <input placeholder="Para onde você vai" />
          <input placeholder="Quando ?" />
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
