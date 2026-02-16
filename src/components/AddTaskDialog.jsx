import "./AddTaskDialog.css";

import PropTypes from "prop-types";
import { useRef } from "react";
import { createPortal } from "react-dom";
import { useForm } from "react-hook-form";
import { CSSTransition } from "react-transition-group";
import { toast } from "sonner";
import { v4 } from "uuid";

import { LoaderIcon } from "../assets/icons/index";
import { Button } from "./Button";
import { Input } from "./Inputs";
import { TimeSelect } from "./TimeSelect";

export const AddTaskDialog = ({ isOpen, handleClose, onSubmitSuccess }) => {
  const nodeRef = useRef(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  async function handleSaveClick(data) {
    const title = data.title.trim();
    const description = data.description.trim();
    const time = data.time;

    const task = { id: v4(), title, description, time, status: "not_started" };
    const response = await fetch("http://localhost:3000/tasks", {
      method: "POST",
      body: JSON.stringify(task),
    });
    if (!response.ok) {
      return toast.error("Erro ao adicionar tarefa, tente novamente!");
    }

    resetInputTask();
    onSubmitSuccess(task);
    handleClose();
  }

  function resetInputTask() {
    reset({
      title: "",
      time: "morning",
      description: "",
    });
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
            <div className="bg-brand-white w-84 space-y-4 rounded-xl p-5 text-center shadow">
              <div className="space-y-1">
                <h1 className="text-brand-darkBlue text-xl font-semibold">
                  Nova Tarefa
                </h1>
                <p className="text-brand-textGray text-sm">
                  insira as informações abaixo
                </p>
              </div>
              <form
                onSubmit={handleSubmit(handleSaveClick)}
                className="flex flex-col gap-4"
              >
                <Input
                  label={"Título"}
                  placeholder="Título da tarefa"
                  errorMessage={errors?.title?.message}
                  {...register("title", {
                    required: "O título é obrigatório!",
                    validate: (value) => {
                      if (!value.trim()) {
                        return "O campo título é obrigatório!";
                      }
                      return true;
                    },
                  })}
                  disabled={isSubmitting}
                />

                <TimeSelect
                  disabled={isSubmitting}
                  errormessage={errors?.time?.message}
                  {...register("time", {
                    required: "O horário é obrigatório!",
                  })}
                />

                <Input
                  label={"Descrição"}
                  placeholder="Descreva a tarefa"
                  errorMessage={errors?.description?.message}
                  {...register("description", {
                    required: "A descrição é obrigatória!",
                    validate: (value) => {
                      if (!value.trim()) {
                        return "O campo descrição é obrigatório!";
                      }
                      return true;
                    },
                  })}
                  disabled={isSubmitting}
                />

                <div className="flex justify-between gap-2">
                  <Button
                    onClick={() => {
                      resetInputTask();
                      handleClose();
                    }}
                    type="button"
                    size="large"
                    color="secondary"
                    className="w-full"
                  >
                    Cancelar
                  </Button>
                  <Button
                    size="large"
                    className="flex w-full items-center"
                    type="submit"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <LoaderIcon className="animate-spin" />
                    ) : (
                      "Salvar"
                    )}
                  </Button>
                </div>
              </form>
            </div>
          </div>,
          document.body,
        )}
      </div>
    </CSSTransition>
  );
};

AddTaskDialog.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};
