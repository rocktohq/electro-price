import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { Outlet, useNavigation } from "react-router-dom";
import Loader from "../Loader/Loader";

export const MainLayout = () => {

  const navigation = useNavigation();


  return (
    <>
      <Header></Header>
      <div className="max-w-screen-2xl min-h-screen mx-auto px-2 my-12">
        {
          navigation.state === "loading"
            ?
            <Loader></Loader>
            :
            <Outlet></Outlet>
        }
      </div>
      <Footer></Footer>
    </>
  )
}
