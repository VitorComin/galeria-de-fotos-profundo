import { Col, List, Typography } from "antd";
import { IAddresses } from "../../types/GeneralTypes";
import { useContext } from "react";
import { GeneralContext } from "../../contexts/GeneralContext";

const AddressesList: React.FC = () => {
  const { addressesList } = useContext(GeneralContext);

  return (
    <List
      size="large"
      header={
        <Typography.Text
          strong
        >{`Lista de Endereços (${addressesList?.length})`}</Typography.Text>
      }
      bordered
      dataSource={addressesList}
      renderItem={(address: IAddresses) => (
        <List.Item>
          <Col span={14}>
            <Typography.Text>
              <strong>Rua:</strong> {address?.street}
            </Typography.Text>
            <Typography.Text>
              <strong>Cidade:</strong> {address?.city}
            </Typography.Text>
          </Col>
          <Col>
            <Typography.Text>
              <strong>Estado:</strong> {address?.state}
            </Typography.Text>
            <Typography.Text>
              <strong>CEP:</strong> {address?.zipCode}
            </Typography.Text>
          </Col>
        </List.Item>
      )}
    />
  );
};

export default AddressesList;
