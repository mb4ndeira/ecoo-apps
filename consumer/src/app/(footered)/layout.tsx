import Footer from "@shared/components/Footer";

const HAS_PREVIOUS_PAGE = {
  "/": false,
  "/telegram": true
};

const HAS_HELP_BUTTON = {
  "/": true,
  "/telegram": true
};

const RETURN_URLS = {
  "/telegram": "/"
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
        bgColor={"#3E5155"}
        returnUrls={RETURN_URLS}
      />
    </div>
  );
}
