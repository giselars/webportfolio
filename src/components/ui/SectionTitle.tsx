import type { SectionTitleProps } from '../../types';

export const SectionTitle = ({
  children,
  subtitle,
  className = '',
}: SectionTitleProps) => {
  return (
    <div className={`text-center mb-12 ${className}`}>
      <h2 className="text-4xl md:text-5xl font-bold mb-3">
        <span className="text-gray-800">&lt;</span>
        <span className="text-transparent bg-clip-text bg-gradient-button">
          {children}
        </span>
        <span className="text-gray-800"> /&gt;</span>
      </h2>
      {subtitle && (
        <p className="text-gray-600 text-sm md:text-base">~ {subtitle} ~</p>
      )}
    </div>
  );
};
