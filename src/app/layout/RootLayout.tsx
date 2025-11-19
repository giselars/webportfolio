import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

type RootLayoutProps = {
  children: React.ReactNode;
};

export const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      <Header />
      <div className="pt-16">{children}</div>
      <Footer />
    </div>
  );
};
