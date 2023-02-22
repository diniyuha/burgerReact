import { Container } from "./components/container/container"
import { Header } from "./components/header/Header"

export const App = () => {
    return (
   <>
    <Header />
    <main>
      <nav>
        <Container maks="leskin" className="navigation__container"/>
      </nav>
      <section></section>
    </main>
    <footer></footer>
   </>
    )
}

