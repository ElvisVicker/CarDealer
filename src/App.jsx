
import Header from "./components/header/Header";
import Body from "./components/body/Body";
import Footer from "./components/footer/Footer"
import './App.css'
import { AppProvider } from "./AppContext";
export default function App() {
  return (
    <div>
      <img className='backgroundAll' src="https://rare-gallery.com/uploads/posts/505189-desktop-background.jpg" alt="" srcset="" />
      <AppProvider>
        <Header />
        <Body />
        <Footer />
      </AppProvider>








    </div>
  );
}

