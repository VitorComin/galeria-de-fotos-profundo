import { Col, List, Space, Typography } from "antd";
import { IAddresses, IContentLayout } from "../../types/GeneralTypes";
import ListLayout from "../ListLayout";

const ContentLayout: React.FC<IContentLayout> = ({ addressesList }) => {
  return (
    <Space className="layout-content-container">
      {addressesList?.length > 0 ? (
        <ListLayout addressesList={addressesList} />
      ) : (
        <Typography.Paragraph>
          Escolha uma opção de tamanho de objeto.
          <br />
          <br />
          O objetivo é ver a performance da aplicação usando a componentização
          plana com gerenciamento de estado relativo.
          <br />
          <br />
          Os resultados serão usados para o MVP do meu TCC.
        </Typography.Paragraph>
      )}
    </Space>
  );
};

export default ContentLayout;
