import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

type RootLayoutProps = {
  children: React.ReactNode;
};

export const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <div className="flex min-h-screen flex-col bg-gradient-main">
      <Header />
      <main className="flex-1 pt-16">
        <div className="mx-auto max-w-6xl ">{children}</div>
      </main>
      <Footer />
    </div>
  );
};
