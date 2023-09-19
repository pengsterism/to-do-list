import { styled } from "styled-components";
import ButtonGrid from "./ButtonGrid";

function App() {
  const AppStyle = styled.div`
    text-align: left;
    font-weight: 400;
    display: flex;
    min-width: 320px;
    max-width: 768px;
    padding: var(--component-spacing-32, 32px) var(--component-spacing-56, 56px);
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: var(--component-spacing-8, 8px);
    align-self: stretch;
  `;
  const HeaderStyle = styled.h2`
    color: var(--mecca-colors-mecca-black, #000);
    font-family: Euclid Circular B;
    font-size: 16px;
    font-style: normal;
    line-height: 24px;
    font-weight: 500;
    text-align: left;
    margin: 0;
  `;

  const AddressStyle = styled.h3`
    color: var(--mecca-colors-mecca-black, #000);
    font-family: Euclid Circular B;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    margin: 0;
      `;

  const MainStyle = styled.h2`
    color: var(--neutral-colors-darkest-grey, #666);
    /* Notations/Desktop */
    font-family: Euclid Circular B;
    font-size: 10px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
    text-align: left;
  `;

  const FooterStyle = styled.h2`
    color: var(--neutral-colors-darkest-grey, #666);
    /* Notations/Desktop */
    font-family: Euclid Circular B;
    font-size: 10px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  `;

  function Header(props) {
    return (
      <header>
        <HeaderStyle>{props.store} </HeaderStyle>
      </header>
    );
  }

  function AddressTitle(props) {
    return <AddressStyle>{props.address} </AddressStyle>;
  }
  function MainTitle(props) {
    return (
      <section>
        <MainStyle>{props.distance}</MainStyle>
      </section>
    );
  }

  function Footer(props) {
    return (
      <footer>
        <p>{props.year} </p>
      </footer>
    );
  }

  return (
    <AppStyle>
      <div>
        <Header store="Mecca Cosmetica Melbourne Central" />
          <AddressTitle address="Melbourne Central Shopping Centre, Ground Level, 211 La Trobe St, Melbourne VIC 3000" />
        <MainStyle>
          <MainTitle distance="4.7km • 18 min drive" />
        </MainStyle>
      </div>
      <ButtonGrid />
      <div>
      <FooterStyle>
        <Footer year="Zahira practice 09/08/23" />{" "}
      </FooterStyle>
      </div>
    </AppStyle>
  );
}

export default App;
