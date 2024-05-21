import React, { useState } from 'react'
import { ThemeProvider } from '@mui/material'
import Header from './components/Header'
import Ecosystem from './components/Ecosystem'
import Roadmap from './components/Roadmap'
import Features from './components/Features'
import Distribution from './components/Distribution'
import Contract from './components/Contract'
import Watch from './components/Watch'
import Footer from './components/Footer'
import Burger from './components/Burger'
import theme from './theme'

function App() {
  const [isburger, SetIsBurger] = useState<boolean>(false)

  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <Header isburger={isburger} SetIsBurger={SetIsBurger} />
        {isburger ?
          <div style={{ display: 'none' }}>
            <Ecosystem />
            <Roadmap />
            <Distribution />
            <Features />
            <Contract />
            <Watch />
            <Footer />
          </div> :
          <div>
            <Ecosystem />
            <Roadmap />
            <Distribution />
            <Features />
            <Contract />
            <Watch />
            <Footer />
          </div>
        }
        {!isburger ?
          <div style={{ display: 'none' }}>
            <Burger isburger={isburger} SetIsBurger={SetIsBurger} />
          </div> :
          <div>
            <Burger isburger={isburger} SetIsBurger={SetIsBurger} />
          </div>
        }
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;
