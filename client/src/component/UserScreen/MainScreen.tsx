import Complain from "./sections/Complain";
import EditProfile from "./sections/EditProfile";
import PastRepair from "./sections/PastRepair";
import Profile from "./sections/Profile";

interface MainScreenInterface {
  activeComponent: string;
}

export default function MainScreen({ activeComponent }: MainScreenInterface) {
  console.log(activeComponent);
  return <div className="my-12">
    {activeComponent == "profile" ? (
      <Profile />
    ) : activeComponent == "editprofile" ? (
      <EditProfile />
    ) : activeComponent == "complain" ? (
      <Complain />
    ) : activeComponent == "history" ? (
      <PastRepair />
    ) : (
      <Profile />
    )}
  </div>;
}
