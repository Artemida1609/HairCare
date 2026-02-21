import './App.css'
import { SideBarProvider } from './contexts/SideBarContext'
import { Home } from './pages/Home'
import artists from "./data/artists.json";

const preloadImages = (urls: string[]) => {
  urls.forEach((url) => {
    const img = new Image();
    img.src = url;
  });
};

preloadImages(artists.map((a) => a.img));

function App() {
  return (
    <>
    <SideBarProvider>
      <Home></Home>
    </SideBarProvider>
    </>
  )
}

export default App
