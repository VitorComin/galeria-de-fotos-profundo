import { Space, Typography } from "antd";
import HeaderContentMenu from "../HeaderContentMenu";

const HeaderContent: React.FC = () => {
  return (
    <>
      <Space>
        <Typography.Title style={{ color: "white" }}>
          Lista de Endereços
        </Typography.Title>
      </Space>
      <HeaderContentMenu />
    </>
  );
};

export default HeaderContent;
