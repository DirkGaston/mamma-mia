import FooterLayout from "./FooterLayout";
import HeaderLayout from "./HeaderLayout";
import MainLayout from "./MainLayout";
import "../assets/css/Layout.css";

function PageLayout() {
  return (
    <div className="PageLayout crt">
      <HeaderLayout />
      <MainLayout />
      {/* <FooterLayout /> */}
    </div>
  );
}

export default PageLayout;
