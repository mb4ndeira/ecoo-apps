import Footer from "@shared/components/Footer";

const HAS_PREVIOUS_PAGE = {
  "/": false,
  "/extrato-entregas": true,
  "/enviar-sacola": true,
  "/enviar-sacola/[id]": true,
  "/enviar-sacola/[id]/alterar": false,
  "/enviar-sacola/[id]/sacolaenviada": false,
  "/login": true,
  "/montar-sacola": true,
  "/montar-sacola/[id]/alterar": false,
  "/montar-sacola/[id]/aprovar": false,
  "/pedidos": true,
  "/pedidos/[id]": true,
  "/pedidos/[id]/aprovar": false,
  "/pedidos/[id]/justificativa": true,
  "/pedidos/[id]/justificativa/rejeitar": false,
};

const HAS_HELP_BUTTON = {
  "/": true,
  "/extrato-entregas": true,
  "/enviar-sacola": true,
  "/enviar-sacola/[id]": true,
  "/enviar-sacola/[id]/alterar": true,
  "/enviar-sacola/[id]/sacolaenviada": true,
  "/login": false,
  "/montar-sacola": true,
  "/montar-sacola/[id]/alterar": true,
  "/montar-sacola/[id]/aprovar": true,
  "/pedidos": false,
  "/pedidos/[id]": true,
  "/pedidos/[id]/aprovar": true,
  "/pedidos/[id]/justificativa": true,
  "/pedidos/[id]/justificativa/rejeitar": true,
};

export default function LayoutWithFooter({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col justify-between w-full h-full min-h-screen bg-theme-background">
      {children}
      <Footer
        hasPreviousPagePaths={HAS_PREVIOUS_PAGE}
        hasHelpButtonPaths={HAS_HELP_BUTTON}
        bgColor={"#4F4743"}
      />
    </div>
  );
}
