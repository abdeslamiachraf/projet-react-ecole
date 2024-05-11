import { BrowserRouter,Route,Routes } from "react-router-dom";
import Login from "./login/Login";
import Dashboarde from "./admin/Dashboard";
import DashbaordP from "./prof/DashbaordP";
import DashbaordE from "./etudiant/DashbaordE";
import Filiere from "./admin/Filiere";
import Absence from "./admin/Absence";
import Candidature from "./admin/Candidature";
import RapportProf from "./prof/RapportProf";
import RapportA from "./admin/RapportA";


function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Login />} />
    {/* admin */}
    <Route path='/admin/dashboard' element={<Dashboarde />} />
    <Route path='/admin/Filiere' element={<Filiere />} />
    <Route path='/admin/Absence' element={<Absence />} />
    <Route path='/admin/Candidature' element={<Candidature />} />
    <Route path='/admin/rapport' element={<RapportA />} />





    {/* prof */}
    <Route path='/prof/dashboard' element={<DashbaordP />} />
    <Route path='/prof/dashboard/message' element={<RapportProf />} />

    {/* etudiant */}
    <Route path='/etudiant/dashboard/:id' element={<DashbaordE />} />





   </Routes>
   
   
   </BrowserRouter>
  );
}

export default App;
