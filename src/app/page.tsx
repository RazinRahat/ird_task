import CategoriesComponent from "@/components/Categories/CategoriesComponent";
import DuaComponent from "@/components/Dua/DuaComponent";
import Navbar from "@/components/Navbar/Navbar";
import SettingsComponent from "@/components/Settings/SettingsComponent";
import SidebarComponent from "@/components/Sidebar/SidebarComponent";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="flex flex-row justify-center items-center">
        <SidebarComponent />
        <div className="flex flex-col justify-center items-center">
          <Navbar />
          <div className="flex flex-row justify-center items-center">
            <CategoriesComponent />
            <DuaComponent />
            <SettingsComponent />
          </div>
        </div>
      </div>
    </>
  );
}
