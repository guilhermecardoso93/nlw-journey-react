import {
  Calendar,
  CircleCheck,
  CircleDashed,
  Link2,
  MapPin,
  Plus,
  PlusCircle,
  Settings2,
  Tag,
  User,
  UserCog,
  X,
} from "lucide-react";
import { useState } from "react";

export function TripDetailsPage() {
  const [isCreateActivityModalOpen, setIsCreateActivityModalOpen] =
    useState(false);

  function openCreateActivityModal() {
    setIsCreateActivityModalOpen(true);
  }

  function closeCreateActivityModal() {
    setIsCreateActivityModalOpen(false);
  }

  return (
    <div className="max-w-6xl px-6 py-10 mx-auto space-y-8">
      <div className="px-4 h-16 rounded-xl bg-zinc-900 shadow-shape flex items-center justify-between">
        <div className="flex items-center gap-2">
          <MapPin className="size-5 text-zinc-400" />
          <span className="text-zinc-100">Florianópolis, SC</span>
        </div>

        <div className="flex items-center gap-5">
          <div className="flex items-center gap-2">
            <Calendar className="size-5 text-zinc-400" />
            <span className="text-zinc-100">17 a 23 de agosto</span>
          </div>
          <div className="w-px h-6 bg-zinc-800" />
          <button className="bg-zinc-800 text-zinc-200 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-zinc-700">
            Alterar local/data
            <Settings2 className="size-5" />
          </button>
        </div>
      </div>

      <main className="flex gap-16 px-4">
        <div className="flex-1 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-semibold">Atividades</h2>
            <button
              onClick={openCreateActivityModal}
              className="bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-lime-400"
            >
              {" "}
              <Plus className="size-5" />
              Cadastrar Atividade
            </button>
          </div>

          <div className="space-y-8">
            <div className="space-y-2.5">
              <div className="flex gap-2 items-baseline">
                <span className="text-xl text-zinc-300 font-semibold">
                  Dia 17
                </span>
                <span className="text-sm text-zinc-500">Domingo</span>
              </div>
              <p className="text-sm text-zinc-500">
                Nenhuma atividade cadastrada nesse dia
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <div className="space-y-2.5">
              <div className="flex gap-2 items-baseline">
                <span className="text-xl text-zinc-300 font-semibold">
                  Dia 18
                </span>
                <span className="text-sm text-zinc-500">Segunda-Feira</span>
              </div>
              <div className="space-y-2.5">
                <div className="py-2.5 px-4 bg-zinc-900 rounded-xl shadow-shape flex items-center gap-3">
                  <CircleCheck className="size-5 text-line-300" />
                  <span className="text-zinc-100">Academia em grupo</span>
                  <span className="text-zinc-400 text-sm ml-auto">08:00H</span>
                </div>
                <div className="py-2.5 px-4 bg-zinc-900 rounded-xl shadow-shape flex items-center gap-3">
                  <CircleCheck className="size-5 text-line-300" />
                  <span className="text-zinc-100">Academia em grupo</span>
                  <span className="text-zinc-400 text-sm ml-auto">08:00H</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-80 space-y-6">
          <div className="space-y-6">
            <h2 className="font-semibold text-xl">Links Importantes</h2>
            <div className="space-y-5">
              <div className="flex items-center justify-between gap-4">
                <div className="space-y-1.5">
                  <span className="block font-medium text-zinc-100">
                    Reserva do Airbnb
                  </span>
                  <a
                    href="/"
                    className="block font-sm text-zinc-400 truncate hover:text-zinc-500"
                  >
                    Reserva do
                    Ahdfklgdflkghdlkfghdklhgkldfhglkdhfgkldfgdhfgkdhgkdhfgkdhgkldhgkldhirbnb
                  </a>
                </div>
                <Link2 className="text-zinc-400 size-5 shrink-0" />
              </div>
              <div className="flex items-center justify-between gap-4">
                <div className="space-y-1.5">
                  <span className="block font-medium text-zinc-100">
                    Reserva do Airbnb
                  </span>
                  <a
                    href="/"
                    className="block font-sm text-zinc-400 truncate hover:text-zinc-500"
                  >
                    Reserva do
                    Ahdfklgdflkghdlkfghdklhgkldfhglkdhfgkldfgdhfgkdhgkdhfgkdhgkldhgkldhirbnb
                  </a>
                </div>
                <Link2 className="text-zinc-400 size-5 shrink-0" />
              </div>
            </div>
            <button className="bg-zinc-800 w-full flex items-center justify-center  text-zinc-200 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-zinc-700">
              <PlusCircle className="size-5" />
              Cadastrar Novo Link
            </button>
          </div>
          <div className="w-full h-px bg-zinc-800" />

          <div>
            <div className="space-y-6">
              <h2 className="font-semibold text-xl">Convidados</h2>
              <div className="space-y-5">
                <div className="flex items-center justify-between gap-4">
                  <div className="space-y-1.5">
                    <span className="block font-medium text-zinc-100">
                      Diego fernandes
                    </span>
                    <span className="block font-xs text-zinc-400 truncate">
                      guilherme_cardosogui@hotmail.com
                    </span>
                  </div>
                  <CircleDashed className="text-zinc-400 size-5 shrink-0" />
                </div>
                <div className="flex items-center justify-between gap-4">
                  <div className="space-y-1.5">
                    <span className="block font-medium text-zinc-100">
                      Guilherme Cardoso
                    </span>
                    <span className="block font-xs text-zinc-400 truncate">
                      guilherme_cardosogui@hotmail.com
                    </span>
                  </div>
                  <CircleDashed className="text-zinc-400 size-5 shrink-0" />
                </div>
              </div>
              <button className="bg-zinc-800 w-full flex items-center justify-center  text-zinc-200 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-zinc-700">
                <UserCog className="size-5" />
                Gerenciar Convidados
              </button>
            </div>
          </div>
        </div>
      </main>

      {isCreateActivityModalOpen && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
          <div className="w-[640px] rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <h2 className="font-lg font-semibold">
                  Confirmar Criação de Viagem
                </h2>
                <button>
                  <X
                    className="size-5 text-zinc-400"
                    onClick={closeCreateActivityModal}
                  />
                </button>
              </div>

              <p className="text-sm text-zinc-400">
                Para concluir a criação da viagem para{" "}
                <span className="font-semibold text-zinc-100 mr-1">
                  {" "}
                  Florianópolis, Brasil{" "}
                </span>{" "}
                nas datas de
                <span className="font-semibold text-zinc-100 ml-1">
                  16 a 27 de agosto de 2024
                </span>{" "}
                preencha seus dados abaixo:
              </p>
            </div>

            <form className="space-y-3">
              <div className="h-14 px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2">
                <User className="text-zinc-400 size-5" />
                <input
                  type="text"
                  name="name"
                  placeholder="Seu nome completo"
                  className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
                />
              </div>

              <div className="h-14 px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2">
                <Tag className="text-zinc-400 size-5" />
                <input
                  type="text"
                  name="title"
                  placeholder="Qual a atividade?"
                  className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
                />
              </div>

              <button
                type="submit"
                className="w-full justify-center bg-lime-300 text-lime-950 rounded-lg px-5 h-44 font-medium flex items-center gap-2 hover:bg-lime-400"
              >
                Salvar Atividade
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
