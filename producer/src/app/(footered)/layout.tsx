import Footer from "@shared/components/Footer";

const HAS_PREVIOUS_PAGE = {
  "/": false,
  "/login": true,
  "/produtos/vender": true,
  "/produtos/vender/ciclo": true,
  "/em-construcao": true,
};

const HAS_HELP_BUTTON = {
  "/": true,
  "/login": false,
  "/produtos/vender": true,
  "/produtos/vender/ciclo": true,
  "/em-construcao": false,
};

const RETURN_URLS = {
  "/produtos/vender": "/produtos/vender/ciclo",
  "/produtos/vender/ciclo": "/",
  "/em-construcao": "/",
};

export default function LayoutWithFooter({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col justify-between w-full bg-theme-background">
      <div className="h-[calc(100vh-var(--footer-height))] overflow-y-auto">
        {children}
      </div>
      <div className="h-[var(--footer-height)]">
        <Footer
          hasPreviousPagePaths={HAS_PREVIOUS_PAGE}
          hasHelpButtonPaths={HAS_HELP_BUTTON}
          bgColor={"#3E5155"}
          returnUrls={RETURN_URLS}
        />
      </div>
    </div>
  );
}