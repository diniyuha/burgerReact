
import { Header } from "./components/header/Header"
import { Navigation } from "./components/Navigation/Navigation"
import { Catalog } from "./components/Catalog/Catalog"

export const App = () => {
    return (
   <>
    <Header />
    <main>
      <Navigation/>
      <Catalog/>
    </main>
    <footer></footer>
   </>
    )
}

