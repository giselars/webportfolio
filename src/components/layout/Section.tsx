type SectionProps = {
  id?: string;
  className?: string;
  children: React.ReactNode;
};

export const Section = ({ id, className, children }: SectionProps) => {
  return (
    <section id={id} className={`flex flex-col gap-6 ${className ?? ''}`}>
      {children}
    </section>
  );
};
