"use client";

import OldButton from "@shared/components/OldButton";
import { useState } from "react";

interface HandleOrdersDeliveryButtonProps {
  cycleId: string;
  farmId: string;
  updateStatusTo: string;
  buttonTitle: string;
  buttonColor: string;
  successUrl: string;
}

const HandleOrdersDeliveryButton = ({
  cycleId,
  farmId,
  updateStatusTo,
  buttonTitle,
  buttonColor,
  successUrl,
}: HandleOrdersDeliveryButtonProps) => {
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    setLoading(true);
    const response = await fetch("/api/orders/handle-orders-delivery", {
      method: "PATCH",
      body: JSON.stringify({
        cycleId,
        farmId,
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

export default HandleOrdersDeliveryButton;
