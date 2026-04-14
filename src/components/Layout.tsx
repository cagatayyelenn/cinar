import { Outlet } from 'react-router-dom';
import TopBar from './TopBar';
import Header from './Header';
import Footer from './Footer';
import FloatingContactButtons from './FloatingContactButtons';

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col font-sans text-black relative">
      <TopBar />
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <FloatingContactButtons />
      <Footer />
    </div>
  );
}
