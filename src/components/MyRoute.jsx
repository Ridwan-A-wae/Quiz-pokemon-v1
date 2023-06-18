import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../App"
import C1 from "./C1";
import C2 from "./C2";
import C3 from "./C3";
import C4 from "./C4";
import C5 from "./C5";
import C6 from "./C6";
import C7 from "./C7";
import C8 from "./C8";
import C9 from "./C9";
import C10 from "./C10";
import C11 from "./C11";
import C12 from "./C12";
import C13 from "./C13";
import C14 from "./C14";
import C15 from "./C15";
import C16 from "./C16";
import C17 from "./C17";
import C18 from "./C18";
import C19 from "./C19";
import C20 from "./C20";

function MyRoute() {
  return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App/>}  />
                <Route path="/c1" element={<C1/>}  />
                <Route path="/c2" element={<C2/>}  />
                <Route path="/c3" element={<C3/>}  />
                <Route path="/c4" element={<C4/>}  />
                <Route path="/c5" element={<C5/>}  />
                <Route path="/c6" element={<C6/>}  />
                <Route path="/c7" element={<C7/>}  />
                <Route path="/c8" element={<C8/>}  />
                <Route path="/c9" element={<C9/>}  />
                <Route path="/c10" element={<C10/>}  />
                <Route path="/c11" element={<C11/>}  />
                <Route path="/c12" element={<C12/>}  />
                <Route path="/c13" element={<C13/>}  />
                <Route path="/c14" element={<C14/>}  />
                <Route path="/c15" element={<C15/>}  />
                <Route path="/c16" element={<C16/>}  />
                <Route path="/c17" element={<C17/>}  />
                <Route path="/c18" element={<C18/>}  />
                <Route path="/c19" element={<C19/>}  />
                <Route path="/c20" element={<C20/>}  />
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default MyRoute