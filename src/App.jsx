import Header from "./components/header/Header";
import Body from "./components/body/Body";
import Footer from "./components/footer/Footer"
import './App.css'
import { AppProvider } from "./AppContext";
export default function App() {
  return (
    <div>
      <img className='backgroundAll' src="https://c1.wallpaperflare.com/preview/405/803/659/highway-light-trail-quick-travel.jpg" alt="" srcset="" />
      <AppProvider>
        <Header />
        <Body />
        <Footer />
      </AppProvider>
    </div>
  );
}