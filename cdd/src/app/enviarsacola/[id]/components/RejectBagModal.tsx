import React, { ReactNode } from "react";
import Modal from "@/components/Modal";

interface RejectBagModalProps {
  openButton: ReactNode;
  link: string;
}

export default function RejectBagModal({
  openButton,
  link,
}: RejectBagModalProps) {
  return (
    <Modal
      openButton={openButton}
      title="Você tem certeza?"
      description="Ao alterar o status para pendente, a sacola deverá ser enviada novamente."
      approvalButtons={true}
      textButton1="Cancelar"
      textButton2="Alterar"
      bgButton2="#FF7070"
      link2={link}
    />
  );
}
