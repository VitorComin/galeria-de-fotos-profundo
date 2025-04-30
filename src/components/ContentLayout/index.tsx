import { Card, Space, Typography } from "antd";
import ListLayout from "../ListLayout";
import { simulateSimpleComponentWork } from "../../utils/simulateSimpleComponentWork";

const ContentLayout: React.FC = () => {
  const componentWorkResult = simulateSimpleComponentWork();

  return (
    <Space className="layout-content-container">
      <Card style={{ marginBottom: 10 }}>
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
      <ListLayout />
    </Space>
  );
};

export default ContentLayout;
