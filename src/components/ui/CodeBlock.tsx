import type { CodeBlockProps } from '../../types';

export const CodeBlock = ({ children, className = '' }: CodeBlockProps) => {
  return (
    <div
      className={`bg-white/90 backdrop-blur-sm rounded-xl border border-lavender-200 overflow-hidden ${className}`}
    >
      <pre className="p-4 font-mono text-sm text-gray-700 overflow-x-auto text-left">
        {children}
      </pre>
    </div>
  );
};
