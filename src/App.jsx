import { Route, Routes } from "react-router-dom";
import Home from "./component/pages/Home";
import NotFound from "./component/error/NotFound";
import NavBar from "./component/share/Nav";
import Footer from "./component/share/Footer";
import ExercisesDetails from "./component/pages/ExerciseDetails";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/details/:id" element={<ExercisesDetails />} />
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
