import { Home } from "@mui/icons-material";
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Channel from "../organism/Channel";
import Developer from "../organism/Developer";
import Footer from "../organism/Footer";
import Gsap from "../organism/Gsap";
import Header from "../organism/Header";
import Not from "../organism/Not";
import Port from "../organism/Port";
import Search from "../organism/Search";
import Today from "../organism/Today";
import Video from "../organism/Video";
import Webd from "../organism/Webd";
import Website from "../organism/Website";
import Youtube from "../organism/Youtube";

const Routing = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/today" element={<Today />}></Route>
          <Route path="/developer" element={<Developer />}></Route>
          <Route path="/webd" element={<Webd />}></Route>
          <Route path="/website" element={<Website />}></Route>
          <Route path="/gsap" element={<Gsap />}></Route>
          <Route path="/port" element={<Port />}></Route>
          <Route path="/youtube" element={<Youtube />}></Route>
          <Route path="/channel/:channelId" element={<Channel />}></Route>
          <Route path="/video/:videoId" element={<Video />}></Route>
          <Route path="/search/:searchId" element={<Search />}></Route>
          <Route path="/*" element={<Not />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default Routing;
