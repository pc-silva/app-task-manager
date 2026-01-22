import { createPortal } from "react-dom";

import { Button } from "./Button";
import { Input } from "./Inputs";

export const AddTaskDialog = ({ isOpen, handleClose }) => {
  if (!isOpen) return null;

  return createPortal(
    <div className="font-inter fixed top-0 flex h-screen w-screen items-center justify-center backdrop-blur">
      <div className="w-84 space-y-4 rounded-xl bg-white p-5 text-center shadow">
        <div className="space-y-1">
          <h1 className="text-xl font-semibold text-[#35383E]">Nova Tarefa</h1>
          <p className="text-sm text-[#9A9C9F]">insira as informações abaixo</p>
        </div>
        <div className="flex flex-col gap-4">
          <Input label={"Título"} placeholder="Título da tarefa" />
          <Input label={"Horário"} placeholder="Selecione" />
          <Input label={"Descrição"} placeholder="Descreva a tarefa" />
          <div className="flex justify-between gap-2">
            <Button
              onClick={handleClose}
              size="medium"
              variant="secondary"
              className="w-full"
            >
              Cancelar
            </Button>
            <Button size="medium" className="w-full">
              Salvar
            </Button>
          </div>
        </div>
      </div>
    </div>,
    document.body,
  );
};
