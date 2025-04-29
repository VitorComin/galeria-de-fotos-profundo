import { Space, Typography } from "antd";
import { IContentLayout } from "../../types/GeneralTypes";
import ListLayout from "../ListLayout";
import { simulateSimpleComponentWork } from "../../utils/simulateSimpleComponentWork";
import Card from "antd/es/card/Card";

const ContentLayout: React.FC<IContentLayout> = ({ addressesList }) => {
  const componentWorkResult = simulateSimpleComponentWork();

  return (
    <Space className="layout-content-container">
      <Card style={{ marginBottom: 10 }}>
        <Typography.Paragraph>
          Escolha uma opção de tamanho de objeto.
          <br />
          <br />
          O objetivo é ver a performance da aplicação usando a componentização
          profunda com gerenciamento de estado relativo.
          <br />
          <br />
          Os resultados serão usados para o MVP do meu TCC.
        </Typography.Paragraph>
      </Card>
      <ListLayout addressesList={addressesList} />
    </Space>
  );
};

export default ContentLayout;
