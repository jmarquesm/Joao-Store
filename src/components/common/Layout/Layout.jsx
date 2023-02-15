// components
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
import { ScrollTop } from "../ScrollTop";

// styles
import * as S from "./styles";

function Layout({ children, items, setItems }) {
  return (
    <div>
      <Header items={items} setItems={setItems} />

      <S.Container>{children}</S.Container>
      <Footer />
      <ScrollTop />
    </div>
  );
}

export default Layout;
