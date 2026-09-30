import AppRouter from "@/router/AppRouter";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

function App() {
  return (
    <main className="min-h-screen bg-base text-ink">
      <ScrollToTop />
      <AppRouter />
      <Footer />
    </main>
  );
}

export default App;
