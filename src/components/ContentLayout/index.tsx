import { Card, Space, Typography } from "antd";
import ListLayout from "../ListLayout";
import { useContext } from "react";
import { GeneralContext } from "../../contexts/GeneralContext";
import { simulateSimpleComponentWork } from "../../utils/simulateSimpleComponentWork";

const ContentLayout: React.FC = () => {
  const { addressesList } = useContext(GeneralContext);
  const componentWorkResult = simulateSimpleComponentWork();

  return (
    <Space className="layout-content-container">
      <ListLayout />
      <Card>
        <Typography.Paragraph>
          Escolha uma opção de tamanho de objeto.
          <br />
          <br />
          O objetivo é ver a performance da aplicação usando a componentização
          profunda com gerenciamento de estado global.
          <br />
          <br />
          Os resultados serão usados para o MVP do meu TCC.
        </Typography.Paragraph>
      </Card>
    </Space>
  );
};

export default ContentLayout;
