import Footer from "@shared/components/Footer";

const HAS_PREVIOUS_PAGE = { "/": false };

export default function LayoutWithFooter({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col justify-between w-full h-full min-h-screen bg-background">
      {children}
      <Footer paths={HAS_PREVIOUS_PAGE} />
    </div>
  );
}
