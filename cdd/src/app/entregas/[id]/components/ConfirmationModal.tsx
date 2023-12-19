import React, { ReactNode } from "react";
import Modal from "@/components/Modal";

interface ConfirmationModalProps {
  openButton: ReactNode;
}

export default function ConfirmationModal({
  openButton,
}: ConfirmationModalProps) {
  return (
    <div className="flex-1">
      <Modal
        openButton={openButton}
        title="Você tem certeza?"
        description="Após aprovar a entrega essa operação não poderá ser desfeita. Em
        caso de erro, entre em contato com o suporte."
        approvalButtons={true}
        textButton1="Cancelar"
        textButton2="Aprovar"
        bgButton2="#00735E"
      />
    </div>
  );
}
