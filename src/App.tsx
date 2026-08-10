import { ThemeProvider } from '@/lib/theme';
import { useRouter } from '@/lib/router';
import { useSEO } from '@/lib/seo';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { FloatingContact } from '@/components/FloatingContact';
import { HomePage } from '@/pages/HomePage';
import { ServicesPage } from '@/pages/ServicesPage';
import { SolutionsPage } from '@/pages/SolutionsPage';
import { AboutPage } from '@/pages/AboutPage';
import { WhyUsPage } from '@/pages/WhyUsPage';
import { ContactPage } from '@/pages/ContactPage';

function App() {
  const { route } = useRouter();
  useSEO(route);

  return (
    <ThemeProvider>
      <div className="flex min-h-screen flex-col">
        <Navbar current={route} />
        <main className="flex-1">
          {route === '/' && <HomePage />}
          {route === '/services' && <ServicesPage />}
          {route === '/solutions' && <SolutionsPage />}
          {route === '/about' && <AboutPage />}
          {route === '/why-us' && <WhyUsPage />}
          {route === '/contact' && <ContactPage />}
        </main>
        <Footer />
        <FloatingContact />
      </div>
    </ThemeProvider>
  );
}

export default App;
