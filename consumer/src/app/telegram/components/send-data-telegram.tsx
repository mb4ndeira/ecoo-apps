'use client'
import Script from "next/script";
export default function SendDataTelegram({data}: any){

    const sendData = () =>{
        const tg = (window as any).Telegram.WebApp;
        tg.sendData(JSON.stringify(data));
        tg.onEvent("popupClosed");
    }

return (
    <>
     <Script src="https://telegram.org/js/telegram-web-app.js"/>

        <button
              type="button"
              onClick={sendData}
              className="bg-green-500 text-white font-bold py-2 px-4 rounded-full"
            >
              Finalizar
        </button>
    </>
)
}
  