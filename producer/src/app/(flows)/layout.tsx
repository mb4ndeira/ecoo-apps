import Footer from "@/components/Footer";

export default function LayoutWithReturnFooter({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex flex-col justify-between w-full h-full min-h-screen bg-background">
      {children}
      <Footer />
    </main>
  );
}
