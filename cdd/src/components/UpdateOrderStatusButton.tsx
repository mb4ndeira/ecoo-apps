"use client";

import OldButton from "@shared/components/OldButton";
import { useState } from "react";

interface UpdateOrderStatusButtonProps {
  orderId: string;
  updateStatusTo: string;
  buttonTitle: string;
  buttonColor: string;
  successUrl: string;
}

const UpdateOrderStatusButton = ({
  orderId,
  updateStatusTo,
  buttonTitle,
  buttonColor,
  successUrl,
}: UpdateOrderStatusButtonProps) => {
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    setLoading(true);
    const response = await fetch("/api/update-order-status", {
      method: "PATCH",
      body: JSON.stringify({
        orderId,
        updateStatusTo,
        _successUrl: successUrl,
      }),
    });
    if (response.ok) {
      window.location.href = successUrl;
    }
    setLoading(false);
  };
  return (
    <OldButton
      title={buttonTitle}
      className={`bg-[${buttonColor}] rounded-lg font-inter font-semibold text-white h-11 flex justify-center items-center`}
      onClick={handleClick}
      disabled={loading}
    >
      {loading ? "Carregando..." : buttonTitle}
    </OldButton>
  );
};

export default UpdateOrderStatusButton;
