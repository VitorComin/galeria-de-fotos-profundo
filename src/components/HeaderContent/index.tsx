import { Space, Typography } from "antd";
import HeaderContentMenu from "../HeaderContentMenu";
import { simulateSimpleComponentWork } from "../../utils/simulateSimpleComponentWork";

const HeaderContent: React.FC = () => {
  const componentWorkResult = simulateSimpleComponentWork();

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
