import { IListLayout } from "../../types/GeneralTypes";
import AddressesList from "../AddressesList";

const ListLayout: React.FC<IListLayout> = ({ addressesList }) => {
  return (
    <>
      <AddressesList addressesList={addressesList} />
    </>
  );
};

export default ListLayout;
