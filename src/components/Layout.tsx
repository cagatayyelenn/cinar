import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col font-sans text-black relative">
      <Header />
      <main className="flex-grow pt-20 lg:pt-28">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
