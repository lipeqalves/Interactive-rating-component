import { MyContextProvider } from "../context";
import Home from "./home";
export const App = () => {
  return (
    <MyContextProvider>
      <Home />
    </MyContextProvider>
  );
};
