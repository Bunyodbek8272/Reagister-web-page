import "./App.css";
import { Routes, Route } from "react-router-dom";
import SignIn from "./views/SignIn";
import Form from "./components/Form";
import Step1 from "./views/Step1";
import Step2 from "./views/Step2";
import Step3 from "./views/Step3";
import Step4 from "./views/Step4";
import Step5 from "./views/Step5";
import Finish from "./views/Finish";
function App() {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="step1" element={<Step1 />} />
      <Route path="step2" element={<Step2 />} />
      <Route path="step3" element={<Step3 />} />
      <Route path="step4" element={<Step4 />} />
      <Route path="step5" element={<Step5 />} />
      <Route path="finish" element={<Finish />} />

      <Route path="form" element={<Form />} />
    </Routes>
  );
}

export default App;
