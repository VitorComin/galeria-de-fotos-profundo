import { Col, List, Typography } from "antd";
import { IAddresses, IAddressesList } from "../../types/GeneralTypes";
import { simulateSimpleComponentWork } from "../../utils/simulateSimpleComponentWork";

const AddressesList: React.FC<IAddressesList> = ({ addressesList }) => {
  const componentWorkResult = simulateSimpleComponentWork();

  return (
    <List
      size="large"
      style={{ borderColor: "#f0f0f0" }}
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
