import { Fragment, useState } from "react";
import Footer from "./Footer";
import Sidebar from "../component/UserScreen/Sidebar";
import MainScreen from "../component/UserScreen/MainScreen";
import UserNavbar from "../component/UserScreen/UserNavbar";

export default function DashboardLayout() {
  const [activeComponent, setActiveComponent] = useState("profilesummary");
  return (
    <Fragment>
      <UserNavbar />
      <div className="relative top-0 left-0">
        <div className="flex flex-col md:flex-row min-h-full bg-gray-100">
          <div className="basis-1 md:basis-[20%] z-10 bg-gray-200 h-full border-r-2 border-gray-200 md:fixed top-[4.5rem]">
            <Sidebar setActiveComponent={setActiveComponent} />
          </div>
          <div className="basis-1 md:relative md:basis-[80%] left-[20%] p-2 py-8 bg-gray-100 min-h-screen">
            <MainScreen activeComponent={activeComponent} />
          </div>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
}
