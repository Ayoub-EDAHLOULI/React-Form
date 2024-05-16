import "./style.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Form from "./Pages/Form";
import Success from "./Pages/Success";
import { AnimatePresence } from "framer-motion";

function App() {
  return (
    <AnimatePresence mode="wait" initial={false}>
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<Form />} />
          <Route path="success" element={<Success />} />
        </Routes>
      </BrowserRouter>
    </AnimatePresence>
  );
}

export default App;
