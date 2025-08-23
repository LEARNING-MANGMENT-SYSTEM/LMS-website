import { X } from "lucide-react";
import React from "react";

interface ModelProp {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  confirmLabel: string;
  cancelLabel: string;
  onConfirm: () => void;
  showCloseIcon?: boolean;
}
const Modal: React.FC<ModelProp> = ({
  isOpen,
  onClose,
  title,
  children,
  confirmLabel = "Confirm",
  cancelLabel = "Cancel",
  onConfirm,
  showCloseIcon = true,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-md max-h-[90vh] overflow-hidden">
        <div className="flex justify-between items-center  border-b border-gray-200 ">
          <h2 className="text-lg font-medium text-gray-950">{title}</h2>
          {showCloseIcon && (
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-500 transform-colors duration-200"
            >
              <X size={20} />
            </button>
          )}
        </div>
        <div className="p-4 max-h-[60vh] overflow-y-auto">
            {children}
            </div>
            <div className="flex justify-between items-center gap-3  p-4 border-t border-gray-200 ">
              <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300   focus:outline-none focus:ring-2 focus:right-offset-2 focus:ring-blue-500 transition-colors " onClick={onClose}>
                {cancelLabel}
              </button>
              <button className="px-4 py-2 text-sm font-medium text-white bg-[#FFDDD1]  border border-transparent   focus:outline-none focus:ring-2 focus:right-offset-2 focus:ring-blue-500 transition-colors" onClick={onConfirm}>
                {confirmLabel}
              </button>
            </div>
            
      </div>
    </div>
  );
};

export default Modal;
