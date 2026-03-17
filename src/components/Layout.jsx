import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

const Layout = () => (
  <div className="flex flex-col bg-black text-white min-h-screen">
    <Navbar />
    <div className="grid xl:grid-cols-8 gap-2 p-3 ">
      <Sidebar /> {/* sticky profile card, xl:col-span-2 */}
      <main className="xl:col-span-6 pl-4  space-y-5">
        <Outlet /> {/* page content renders here */}
      </main>
    </div>
  </div>
);

export default Layout;
