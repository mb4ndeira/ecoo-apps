import React, { ReactNode } from "react";
import Modal from "@/components/Modal";

interface ApproveModalProps {
  openButton: ReactNode;
  link: string;
}

export default function ApproveModal({ openButton, link }: ApproveModalProps) {
  return (
    <Modal
      openButton={openButton}
      title="Você tem certeza?"
      description="Ao marcar a sacola como pronta, o cliente será notificado."
      approvalButtons={true}
      textButton1="Cancelar"
      textButton2="Confirmar"
      bgButton2="#00735E"
      link2={link}
    />
  );
}
