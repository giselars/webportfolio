type PageContainerProps = {
  children: React.ReactNode;
};

export const PageContainer = ({ children }: PageContainerProps) => {
  return (
    <div className="mx-auto max-w-6xl px-4 pb-12 pt-6 md:px-6 lg:px-8">
      {children}
    </div>
  );
};
