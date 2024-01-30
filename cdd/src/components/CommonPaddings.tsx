export default function CommonPaddings({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="px-8 md:px-10 lg:px-16 pb-10 pt-10 md:pt-16 lg:pt-20">
      {children}
    </div>
  );
}
