import { Space, Typography } from "antd";
import ListLayout from "../ListLayout";
import { useContext } from "react";
import { GeneralContext } from "../../contexts/GeneralContext";

const ContentLayout: React.FC = () => {
  const { addressesList } = useContext(GeneralContext);

  return (
    <Space className="layout-content-container">
      {addressesList?.length > 0 ? (
        <ListLayout />
      ) : (
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
      )}
    </Space>
  );
};

export default ContentLayout;
