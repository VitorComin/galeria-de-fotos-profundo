import { Faker, base, pt_BR } from "@faker-js/faker";
import HeaderContentMenuOptions from "../HeaderContentMenuOptions";

const BrazilianFaker = new Faker({
  locale: [pt_BR, base],
});

const HeaderContentMenu: React.FC = () => {
  return (
    <>
      <HeaderContentMenuOptions />
    </>
  );
};

export default HeaderContentMenu;
