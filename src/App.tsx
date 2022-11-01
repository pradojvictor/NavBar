import Routes from "./Routes"
import { GlobalStyle, BackgroundSection} from "./styleGlobal/style"

function App() {


  return (
    <div className="App">
      <GlobalStyle/>
      <BackgroundSection>
        <Routes />
      </BackgroundSection>

    </div>
  )
}

export default App
