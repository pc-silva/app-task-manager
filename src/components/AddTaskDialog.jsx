import { createPortal } from "react-dom";

export const AddTaskDialog = ({ isOpen }) => {
  if (!isOpen) return null;

  return createPortal(
    <div className="font-inter fixed top-0 flex h-screen w-screen items-center justify-center backdrop-blur transition">
      <div className="w-84 space-y-1 rounded-xl bg-white p-5 text-center shadow">
        <h1 className="text-xl font-semibold text-[#35383E]">Nova Tarefa</h1>
        <p className="text-sm text-[#9A9C9F]">insira as informações abaixo</p>
      </div>
    </div>,
    document.body,
  );
};
