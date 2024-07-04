"use client";

import React, { ReactNode, useState } from "react";
import { Dialog } from "@headlessui/react";

interface ModalProps {
  openButton?: ReactNode;
  title?: string;
  description?: string;
  approvalButtons?: boolean;
  textButton1?: string;
  textButton2?: string;
  classNameButton1: string;
  classNameButton2: string;
  onClickButton?: () => void;
}

export default function Modal({
  openButton,
  title,
  description,
  textButton1,
  textButton2,
  classNameButton1,
  classNameButton2,
  onClickButton,
}: ModalProps) {
  let [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <div onClick={openModal}>{openButton}</div>
      <Dialog
        as="div"
        open={isOpen}
        onClose={closeModal}
        className="fixed inset-10 h-fit w-10/12 overflow-y-auto text-center"
      >
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
        <div className="fixed inset-0 flex w-screen items-center justify-center px-2">
          <Dialog.Panel className="bg-white z-10 rounded-3xl py pt-12 pb-7 px-4">
            <Dialog.Title>
              <div className="font-semibold text-2xl mb-4 text-[20px]">
                {title}
              </div>
            </Dialog.Title>
            <Dialog.Description className="text-theme-primary px-[20px]">
              {description}
            </Dialog.Description>
            <div className="mt-20 w-full flex">
              <button
                onClick={closeModal}
                className={`h-11 w-full ml-auto p-2 rounded-md font-semibold ${classNameButton1}`}
              >
                {textButton1}
              </button>
              <button
                onClick={onClickButton}
                className={`h-11 w-full ml-2 p-2 rounded-md font-semibold ${classNameButton2}`}
              >
                {textButton2}
              </button>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </div>
  );
}
