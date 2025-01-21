import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeScreen from "./pages/HomeScreen";
import ScrollToTop from "./components/ScrollToTop";
import CountryScreen from "./pages/CountryScreen";
import ArtistScreen from "./pages/ArtistScreen";

function App() {
  return (
    <BrowserRouter >
      <ScrollToTop />
      <Routes>
        <Route index element={<HomeScreen />}></Route>
        <Route path="artist" element={< ArtistScreen />}></Route>
        <Route path="country" element={<CountryScreen />}></Route>
      </Routes >
    </BrowserRouter >
  );
}

export default App;
