"use client";
import { ReactNode, useState } from "react";
import { Dialog } from "@headlessui/react";
import Link from "next/link";

interface ModalProps {
  openButton: ReactNode;
  title: string;
  description: string;
  approvalButtons: boolean;
  textButton1: string;
  textButton2: string;
  bgButton2: string;
  link2: string;
}

export default function Modal({
  openButton,
  title,
  description,
  approvalButtons,
  textButton1,
  textButton2,
  bgButton2,
  link2,
}: ModalProps) {
  let [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
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
            <Dialog.Description className="text-theme-primary font-inter px-[20px]">
              {description}
            </Dialog.Description>
            {approvalButtons && (
              <div className="mt-[40px] grid grid-cols-2 gap-3">
                <button
                  onClick={closeModal}
                  className="h-11 w-full ml-auto bg-[#EEF1F4] rounded-md font-inter font-semibold text-[#455154]"
                >
                  {textButton1}
                </button>
                <Link href={link2}>
                  <button
                    className={`h-11 w-full bg-[${bgButton2}] rounded-md font-inter font-semibold text-white`}
                  >
                    {textButton2}
                  </button>
                </Link>
              </div>
            )}
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  );
}
