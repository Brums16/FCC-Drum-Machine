import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import Backdrop from "./Backdrop";

import Machine from "./Machine";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Backdrop />
    <Machine />
  </StrictMode>
);
