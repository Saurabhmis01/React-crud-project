import { BrowserRouter,Routes,Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./component/Home";
import Insert from "./component/Insert";
import Display from "./component/Display";
import Update from "./component/Update";
import Editdata from "./component/Editdata";
import Search from "./component/Search";

const App=()=>{
  return(
    <>
     <BrowserRouter>
     <Routes>
      <Route path="/" element={<Layout/>} >
      <Route index element={<Home/>} />
      <Route path="home" element={<Home/>} />
      <Route path="insert" element={<Insert/>} />
      <Route path="display" element={<Display/>} />
      <Route path="search" element={<Search/>} />
      <Route path="update" element={<Update/>} />
      <Route path="editdata" element={<Editdata/>} />

      </Route>
     </Routes>
     </BrowserRouter>
    </>
  )
}
export default App;