import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeScreen from "./pages/HomeScreen";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <BrowserRouter >
      <ScrollToTop />
      <Routes>
        <Route index element={<HomeScreen />}></Route>


      </Routes >
    </BrowserRouter >
  );
}

export default App;
