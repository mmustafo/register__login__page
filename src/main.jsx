import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { GLobalCOntextProvider } from "./context/GlobalContext.jsx";
import { Toaster } from "react-hot-toast"; 

ReactDOM.createRoot(document.getElementById("root")).render(
  <GLobalCOntextProvider>
    <App />
    <Toaster />
  </GLobalCOntextProvider>
);
