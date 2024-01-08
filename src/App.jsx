import PandaHead from "./assets/pandahead.jpeg";
import Needle from "./assets/Needle.svg";
import Upload from "./assets/Upload.svg";
import {useState} from "react";
const App = () => {
  const initBg = "./assets/pandahead.jpeg";
  const [bg, setBg] = useState(initBg);
  return (
    <>
      <div
        style={{backgroundImage: `url(${PandaHead})`}}
        className='h-screen w-screen flex justify-center items-center bg-no-repeat bg-contain bg-center'
      ></div>
      <div className='absolute bottom-0 left-0 w-full flex justify-between px-8 py-16'>
        <img src={Needle} alt='' className='w-16 h-16' />
        <img src={Upload} alt='' className='w-16 h-16' />
      </div>
    </>
  );
};
export default App;
