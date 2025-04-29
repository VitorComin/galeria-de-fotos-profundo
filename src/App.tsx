import { Layout } from "antd";
import "./App.css";
import LayoutHeader from "./components/LayoutHeader";
import LayoutFooter from "./components/LayoutFooter";
import ContentPage from "./pages/ContentPage";
import { GeneralProvider } from "./contexts/GeneralContext";
import { simulateSimpleComponentWork } from "./utils/simulateSimpleComponentWork";

function App() {
  const componentWorkResult = simulateSimpleComponentWork();

  return (
    <GeneralProvider>
      <Layout style={{ height: "100vh" }}>
        <LayoutHeader />
        <ContentPage />
        <LayoutFooter />
      </Layout>
    </GeneralProvider>
  );
}

export default App;
