import React, { ReactNode } from "react";
import Modal from "@cdd/components/Modal";

interface ApproveBagModalProps {
  openButton: ReactNode;
  link: string;
}

export default function ApproveBagModal({
  openButton,
  link,
}: ApproveBagModalProps) {
  return (
    <Modal
      openButton={openButton}
      title="Você tem certeza?"
      description="Ao alterar o status para enviada, o cliente será notificado que ela está a caminho."
      approvalButtons={true}
      textButton1="Cancelar"
      textButton2="Confirmar"
      bgButton2="#00735E"
      link2={link}
    />
  );
}
