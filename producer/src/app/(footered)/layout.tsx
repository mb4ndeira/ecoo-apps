import Footer from "@shared/components/Footer";

const HAS_PREVIOUS_PAGE = {
  "/": false,
  "/informacoesciclo": true,
  "/login": true,
  "/produtos/vender": true,
  "/produtos/vender/ciclo": true,

};

const HAS_HELP_BUTTON = {
  "/": true,
  "/informacoesciclo": true,
  "/login": false,
  "/produtos/vender": true,
  "/produtos/vender/ciclo": true,
};

export default function LayoutWithFooter({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col justify-between w-full h-full min-h-screen bg-background">
      {children}
      <Footer hasPreviousPagePaths={HAS_PREVIOUS_PAGE} 
      hasHelpButtonPaths={HAS_HELP_BUTTON}
      />
    </div>
  );
}
