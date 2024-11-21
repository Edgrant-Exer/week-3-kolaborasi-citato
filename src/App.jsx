import SkalaKami from './SkalaKami';
import BertumbuhBesar from './BertumbuhBesar';
import Slider from './Slider';
import Header from "./Header";
import Welcome from "./Welcome";

function App() {
  return (
    <div className="flex flex-col items-center min-h-screen">
      <Header />
      <Welcome />
      <SkalaKami />
      <Slider />
      <BertumbuhBesar />
    </div>
  );
}

export default App;
