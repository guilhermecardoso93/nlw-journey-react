import { useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import {
  MapPin,
  Calendar,
  Settings2,
  ArrowRight,
  UserRoundPlus,
  X,
  AtSign,
  Plus,
  User,
} from "lucide-react";
import { InviteGuestsModal } from "./invite-guests-modal";

export function CreateTrip() {
  const navigate = useNavigate()
  const [isGuestsInputOpen, setIsGuestsInputOpen] = useState(false);
  const [isGuestsModalOpen, setIsGuestsModalOpen] = useState(false);
  const [isConfirmTripModalOpen, setIsConfirmTripModalOpen] = useState(false);
  const [emailsToInvite, setEmailsToInvite] = useState([
    "diego@rocketseat.com.br",
    "john@acme.com",
    "guilherme-cardosogui@hotmail.com",
    "guistark67@gmail.com",
  ]);

  function openGuestsInput() {
    setIsGuestsInputOpen(true);
  }

  function closeGuestsInput() {
    setIsGuestsInputOpen(false);
  }

  function openGuestsModal() {
    setIsGuestsModalOpen(true);
  }

  function closeGuestsModal() {
    setIsGuestsModalOpen(false);
  }

  function openConfirmTripModal() {
    setIsConfirmTripModalOpen(true);
  }

  function closeConfirmTripModal() {
    setIsConfirmTripModalOpen(false);
  }

  function addNewEmailToInvite(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    const email = data.get("email")?.toString();

    if (!email) {
      return;
    }

    if (emailsToInvite.includes(email)) {
      alert("Email já cadastrado!");
      event.currentTarget.reset();
      return;
    }

    setEmailsToInvite([...emailsToInvite, email]);

    event.currentTarget.reset();
  }

  function removeEmailFromInvites(emailToRemove: string) {
    const newEmailList = emailsToInvite.filter(
      (email) => email !== emailToRemove
    );

    setEmailsToInvite(newEmailList);
  }

  function createTrip() {
    navigate('/trop/123')
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
        <div className="space-y-4">
          <div className="h-16  bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-3">
            <div className="flex items-center gap-2 flex-1">
              <MapPin className="size-5 text-zinc-400" />
              <input
                placeholder="Para onde você vai ?"
                className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
                disabled={isGuestsInputOpen}
              />
            </div>
            <div className="flex items-center gap-2 ">
              <Calendar className="size-5 text-zinc-400" />
              <input
                placeholder="Quando ?"
                className="bg-transparent text-lg placeholder-zinc-400 w-40 outline-none"
                disabled={isGuestsInputOpen}
              />
            </div>

            <div className="w-px h-6 bg-zinc-800" />

            {isGuestsInputOpen ? (
              <button
                onClick={closeGuestsInput}
                className="bg-zinc-800 text-zinc-200 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-zinc-700"
              >
                Alterar local/data
                <Settings2 className="size-5" />
              </button>
            ) : (
              <button
                onClick={openGuestsInput}
                className="bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-lime-400"
              >
                Continuar
                <ArrowRight className="size-5" />
              </button>
            )}
          </div>

          {isGuestsModalOpen && (
          <InviteGuestsModal />
      )}

      {isConfirmTripModalOpen && (
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
                    onClick={closeConfirmTripModal}
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

            <form
              onSubmit={addNewEmailToInvite}
              className="p-2.5 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2 space-y-3"
            >
              <div className="h-14 px-5 bg-zinc-950 rounded-lg flex items-center gap-2">
                <User className="text-zinc-400 size-5" />
                <input
                  type="text"
                  name="name"
                  placeholder="Seu nome completo"
                  className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
                />
              </div>
              <div className="h-14 px-5 bg-zinc-950 rounded-lg flex items-center gap-2">
                <User className="text-zinc-400 size-5" />
                <input
                  type="email"
                  name="email"
                  placeholder="Seu e-amil pessoal"
                  className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
                />
              </div>
            </form>
            <button
            onClick={createTrip}
              type="submit"
              className="w-full justify-center bg-lime-300 text-lime-950 rounded-lg px-5 h-44 font-medium flex items-center gap-2 hover:bg-lime-400"
            >
              Convidar
              <Plus className="size-5" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
