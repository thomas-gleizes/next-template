import React, { useEffect, useMemo } from "react";
import ReactDOM from "react-dom";
import classnames from "classnames";

import { useBrowser } from "hooks";
import domUuid from "helpers/domUuid";

interface ModalProps {
  isOpen: boolean;
  toggle: () => void;
  size?: Size;
  children: React.ReactNode;
  className?: string;
}

const Modal: Component<ModalProps> = ({ isOpen, toggle, children, size }) => {
  const backgroundId = useMemo<string>(() => `modal-${domUuid()}`, []);
  const isBrowser = useBrowser();

  const modalNode = useMemo<HTMLDivElement>(
    () => isBrowser && document.createElement("div"),
    [isBrowser]
  );

  useEffect(() => {
    if (isOpen) {
      modalNode.id = `modal m-${domUuid()}`;
      document.body.appendChild(modalNode);

      return () => {
        document.body.removeChild(modalNode);
      };
    }
  }, [isOpen]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  const classname = useMemo<string>(() => {
    switch (size) {
      case "xs":
        return "w-1/4";
      case "sm":
        return "w-1/3";
      case "lg":
        return "w-2/3";
      case "xl":
        return "w-3/4";
      default:
        return "w-1/2";
    }
  }, [size]);

  const handleClick = (event) => {
    if (event.target.id === backgroundId) toggle();
  };

  if (!isBrowser) return null;

  const component = (
    <div
      id={backgroundId}
      onClick={handleClick}
      className="z-100 fixed top-0 left-0 w-screen h-screen bg-opacity-50 bg-gray-800"
    >
      <div className="fixed flex justify-items-center backdrop-filter backdrop-blur-sm bg-gray-600 bg-opacity-40 h-screen w-screen overflow-hidden top-0 left-0 z-100 px-4">
        <div className={classnames(classname, "bg-white m-auto max-h-[90%]")}>
          {children}
        </div>
      </div>
    </div>
  );

  return ReactDOM.createPortal(component, modalNode);
};

export default Modal;
