import SkalaKami from './SkalaKami';
import BertumbuhBesar from './BertumbuhBesar';
import Slider from './Slider';
import Header from "./Header";
import Welcome from "./Welcome";
import ProgramLoyalti from "./ProgramLoyalti.jsx"
import MenuFooter from "./MenuFooter.jsx"
import KerjadiGojek from './KerjadiGojek.jsx';
import Layanan from './layanan.jsx';



function App() {
  return (
    <div className="flex flex-col items-center min-h-screen">
      <Header />
      <Welcome />
      <SkalaKami />
      <Slider />
      <BertumbuhBesar />
      <KerjadiGojek />
      <Layanan />
      <ProgramLoyalti />
      <MenuFooter />
    </div>
  );
}

export default App;
