import { MantineProvider } from "@mantine/core";
import "./App.css";

import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import StripeContainer from "./Pages/Payment/StripeContainer";
import Resume from "./Pages/Resume/Resume";
import { colorPlates } from "./Theming/CustomColorPlates/Plates";
import Payment from "./Pages/Payment/Payment";
import Success from "./Pages/Success/Success";
import Cancel from "./Pages/Cancel/Cancel";
import { useEffect } from "react";
import ReactGA from "react-ga4";
import { Helmet } from "react-helmet-async";

ReactGA.initialize('G-J11X1KZSV8');

function App() {
  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: window.location.pathname + window.location.search, title: "Home Page" });
  }, []);
  return (
    <div className="App">
      <Helmet>
        <title>Permresume | Free Resume Builder</title>
      </Helmet>


      <MantineProvider
        theme={{
          colorScheme: "light",
          colors: {
            custom: colorPlates.blue,
          },
        }}
      >
        <Routes>
          <Route exact path="/payment" element={<Payment />} />
          <Route exact path="/" element={<Home />} />
          <Route exact path="/resume" element={<Resume />} />
          <Route exact path="/success" element={<Success />} />
          <Route exact path="/cancel" element={<Cancel />} />
        </Routes>
      </MantineProvider>
    </div>
  );
}

export default App;



// <!--<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">-->
// <!--    <url>-->
// <!--        <loc>https://resume.permamotive.com</loc>-->
// <!--    </url>-->
// <!--    <url>-->
// <!--        <loc>https://resume.permamotive.com/resume</loc>-->
// <!--    </url>-->
// <!--</urlset>-->