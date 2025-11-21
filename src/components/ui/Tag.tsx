import { cn } from '@/lib/cn';

type TagVariant = 'default' | 'soft' | 'outline';

type TagProps = {
  label: string;
  variant?: TagVariant;
  className?: string;
};

export const Tag = ({ label, variant = 'soft', className }: TagProps) => {
  const baseClasses =
    'inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium';

  const variantClasses: Record<TagVariant, string> = {
    default: 'border-transparent bg-emerald-400 text-slate-950',
    soft: 'border-emerald-500/30 bg-emerald-500/10 text-emerald-300',
    outline: 'border-slate-600 bg-transparent text-slate-200',
  };

  return (
    <span className={cn(baseClasses, variantClasses[variant], className)}>
      {label}
    </span>
  );
};
