import MyDay from "./events";
import People from "./people";
import Attention from "./important";
import { SearchBar } from "../SideNavBar";
function Page() {
  return (
    <div className="">
      <SearchBar />
      <div className="2xl:flex">
        <MyDay />
        <People />
        <Attention />
      </div>
    </div>
  );
}

export default Page;
