import { createPortal } from "react-dom";
import cn from "../../utils/cn";
import {
  createContext,
  MouseEvent,
  ReactNode,
  useContext,
  useRef,
} from "react";

type TModalContext = {
  OnClose: () => void;
};

const ModalContext = createContext<TModalContext | null>(null);

type TModal = {
  isOpen: boolean;
  OnClose: () => void;
  children: ReactNode;
};
const Modal = ({ isOpen, OnClose, children }: TModal) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const handleOutsideClick = (e: MouseEvent) => {
    if (
      containerRef.current &&
      !containerRef.current.contains(e.target as Node)
    ) {
      OnClose();
    }
  };

  return createPortal(
    <ModalContext.Provider value={{ OnClose }}>
      <div
        className={cn(
          "fixed inset-0 flex justify-center items-center bg-gray-500/70 invisible",
          {
            visible: isOpen,
          }
        )}
        onClick={handleOutsideClick}
      >
        <div
          ref={containerRef}
          className="bg-white w-full max-w-sm rounded px-3 py-2"
        >
          {children}
        </div>
      </div>
    </ModalContext.Provider>,
    document.getElementById("portal") as Element
  );
};

const CloseButton = ({ children }: { children?: ReactNode }) => {
  const { OnClose } = useContext(ModalContext) as TModalContext;
  return (
    <button onClick={OnClose} className="">
      {children || (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-7 text-red-500 hover:bg-slate-100 p-1 hover:rounded-full"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18 18 6M6 6l12 12"
          />
        </svg>
      )}
    </button>
  );
};

const Header = ({ children }: { children?: React.ReactNode }) => {
  return (
    <div className="flex w-full justify-between items-center mb-2">
      {children}
    </div>
  );
};

Modal.Header = Header;
Modal.closeButton = CloseButton;

export default Modal;
