import "./AddTaskDialog.css";

import { useRef } from "react";
import { createPortal } from "react-dom";
import { CSSTransition } from "react-transition-group";

import { Button } from "./Button";
import { Input } from "./Inputs";
import { TimeSelect } from "./TimeSelect";

export const AddTaskDialog = ({ isOpen, handleClose }) => {
  const nodeRef = useRef(null);

  return (
    <CSSTransition
      nodeRef={nodeRef}
      in={isOpen}
      timeout={500}
      classNames="add-dialog"
      unmountOnExit
    >
      <div>
        {createPortal(
          <div
            ref={nodeRef}
            className="font-inter fixed top-0 flex h-screen w-screen items-center justify-center backdrop-blur"
          >
            <div className="w-84 space-y-4 rounded-xl bg-white p-5 text-center shadow">
              <div className="space-y-1">
                <h1 className="text-xl font-semibold text-[#35383E]">
                  Nova Tarefa
                </h1>
                <p className="text-sm text-[#9A9C9F]">
                  insira as informações abaixo
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <Input label={"Título"} placeholder="Título da tarefa" />
                <TimeSelect />
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
        )}
      </div>
    </CSSTransition>
  );
};
