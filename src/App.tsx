import Main from "./pages/main";
import { Route, Routes } from "react-router-dom";
import SignUp from "./pages/sign-up";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/sign-in" element={<SignUp />} />
    </Routes>
  );
};

export default App;
