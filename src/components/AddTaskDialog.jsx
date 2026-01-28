import "./AddTaskDialog.css";

import { useRef, useState } from "react";
import { createPortal } from "react-dom";
import { CSSTransition } from "react-transition-group";
import { v4 } from "uuid";

import { Button } from "./Button";
import { Input } from "./Inputs";
import { TimeSelect } from "./TimeSelect";

export const AddTaskDialog = ({ isOpen, handleClose, handleSubmit }) => {
  const [errors, setErrors] = useState([]);

  const nodeRef = useRef(null);
  const titleRef = useRef();
  const descriptionRef = useRef();
  const timeRef = useRef();

  function handleSaveClick() {
    const newErrors = [];

    const title = titleRef.current.value;
    const description = descriptionRef.current.value;
    const time = timeRef.current.value;

    if (!title.trim()) {
      newErrors.push({
        inputName: "title",
        message: "O título é obrigatório.",
      });
    }
    if (!description.trim()) {
      newErrors.push({
        inputName: "description",
        message: "A descrição é obrigatória.",
      });
    }
    if (!time.trim()) {
      newErrors.push({
        inputName: "time",
        message: "O horário é obrigatório.",
      });
    }

    if (newErrors.length > 0) {
      setErrors(newErrors);
      return;
    }

    handleSubmit({ id: v4(), title, description, time, status: "not_started" });
    handleClose();
    handleCleanInput();
  }

  const titleError = errors.find((error) => error.inputName === "title");
  const descriptionError = errors.find(
    (error) => error.inputName === "description",
  );
  const timeError = errors.find((error) => error.inputName === "time");

  function handleCleanInput() {
    setErrors([]);
  }

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
                <Input
                  label={"Título"}
                  placeholder="Título da tarefa"
                  error={titleError?.message}
                  ref={titleRef}
                />

                <TimeSelect error={timeError?.message} ref={timeRef} />

                <Input
                  label={"Descrição"}
                  placeholder="Descreva a tarefa"
                  error={descriptionError?.message}
                  ref={descriptionRef}
                />

                <div className="flex justify-between gap-2">
                  <Button
                    onClick={() => {
                      handleClose();
                      handleCleanInput();
                    }}
                    size="medium"
                    variant="secondary"
                    className="w-full"
                  >
                    Cancelar
                  </Button>
                  <Button
                    size="medium"
                    className="w-full"
                    onClick={handleSaveClick}
                  >
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
