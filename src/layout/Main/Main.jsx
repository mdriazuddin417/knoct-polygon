import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

const Main = () => {
  return (
    <div>
      <Header />
      <div>
        <Outlet />
      </div>
      {/* <div className="mt-auto">
        <Footer />
      </div> */}
    </div>
  );
};

export default Main;
