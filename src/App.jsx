import './App.css'
import Entry from './components/Entry'
import Japan_banner from "./assets/Japan_banner.png"
import mapMakerIcon from "./assets/mapMakerIcon.png"

import Header from './components/Header'

function App() {

  return (
    <>
      <Header></Header>
      <Entry imageSrc={Japan_banner}
        imageAlt="Mount Fuji"
        iconSrc={mapMakerIcon}
        country="Japan"
        locationLink="https://www.google.com/maps/place/Mount+Fuji/..."
        locationName="Mount Fuji"
        dates="12 Jan, 2021 - 24 Jan, 2021"
        description="Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists." />
    </>
  )
}

export default App
