import { Layout } from "antd";

const { Footer } = Layout;

const LayoutFooter: React.FC = () => {
  return (
    <Footer style={{ textAlign: "center" }}>
      Vitor Comin ©{new Date().getFullYear()} Gerenciamento de Estado Global -
      Componentização Profunda
    </Footer>
  );
};

export default LayoutFooter;
