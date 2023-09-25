import LeftSection from './components/LeftSection';
import RightSection from './components/RightSection';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex flex-col md:flex-row p-8 md:p-16 lg:p-32 overflow-hidden flex-grow">
        <LeftSection />
        <RightSection />
      </div>
      <Footer />
    </div>
  );
}
