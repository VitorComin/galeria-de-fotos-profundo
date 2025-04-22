import { Faker, base, pt_BR } from "@faker-js/faker";
import { IHeaderContentMenu } from "../../types/GeneralTypes";
import HeaderContentMenuOptions from "../HeaderContentMenuOptions";

const BrazilianFaker = new Faker({
  locale: [pt_BR, base],
});

const HeaderContentMenu: React.FC<IHeaderContentMenu> = ({
  setAddressesList,
}) => {
  return (
    <>
      <HeaderContentMenuOptions setAddressesList={setAddressesList} />
    </>
  );
};

export default HeaderContentMenu;
