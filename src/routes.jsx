import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginAdmin from "./components/LoginAdmin";
import LoginUser from "./components/LoginUser";
import DashboardAdmin1 from "./components/DashboardAdmin1";
import DashboardAdmin2 from "./components/DashboardAdmin2";
import DashboardAdmin3 from "./components/DashboardAdmin3";
import User1 from "./components/User1";
import User2 from "./components/User2";
import User3 from "./components/User3";
import TSA1 from "./components/TSA1";
import TSA2 from "./components/TSA2";
import TSA3 from "./components/TSA3";
import ISM1 from "./components/ISM1";
import ISM2 from "./components/ISM2";
import ISK1 from "./components/ISK1";
import ISK2 from "./components/ISK2";
import LSA1 from "./components/LSA1";
import LSA2 from "./components/LSA2";
import LSMK1 from "./components/LSMK1";
import LSU1 from "./components/LSU1";
import LSU2 from "./components/LSU2";
import TSU1 from "./components/TSU1";
import DetailSM from "./components/DetailSM";
import DetailSKU from "./components/DetailSKU";
import DetailTSU from "./components/DetailTSU";
import DetailTSA from "./components/DetailTSA";
import DetailSMA from "./components/DetailSMA";
import DetailSKA from "./components/DetailSKA";
import ResetPWA1 from "./components/ResetPWA1";
import ResetPWA2 from "./components/ResetPWA2";
import ResetPWU1 from "./components/ResetPWU1";
import ResetPWU2 from "./components/ResetPWU2";
import EditTS from "./components/EditTS";
import EditSM from "./components/EditSM";
import EditSK from "./components/EditSK";
import BerhasilEditTS from "./components/BerhasilEditTS";
import BerhasilEditSM from "./components/BerhasilEditSM";
import BerhasilEditSK from "./components/BerhasilEditSK";






export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/LoginAdmin" element={<LoginAdmin />} />
        <Route path="/LoginUser" element={<LoginUser />} />
        <Route path="/DashboardAdmin1" element={<DashboardAdmin1 />} />
        <Route path="/DashboardAdmin2" element={<DashboardAdmin2 />} />
        <Route path="/DashboardAdmin3" element={<DashboardAdmin3 />} />
        <Route path="/User1" element={<User1 />} />
        <Route path="/User2" element={<User2 />} />
        <Route path="/User3" element={<User3 />} />
        <Route path="/TSA1" element={<TSA1 />} />
        <Route path="/TSA2" element={<TSA2 />} />
        <Route path="/TSA3" element={<TSA3 />} />
        <Route path="/ISM1" element={<ISM1 />} />
        <Route path="/ISM2" element={<ISM2 />} />
        <Route path="/ISK1" element={<ISK1 />} />
        <Route path="/ISK2" element={<ISK2 />} />
        <Route path="/LSA1" element={<LSA1 />} />
        <Route path="/LSA2" element={<LSA2 />} />
        <Route path="/LSMK1" element={<LSMK1 />} />
        <Route path="/LSU1" element={<LSU1 />} />
        <Route path="/LSU2" element={<LSU2 />} />
        <Route path="/TSU1" element={<TSU1 />} />
        <Route path="/DetailSM" element={<DetailSM />} />
        <Route path="/DetailSKU" element={<DetailSKU />} />
        <Route path="/DetailTSU" element={<DetailTSU />} />
        <Route path="/DetailTSA" element={<DetailTSA />} />
        <Route path="/DetailSMA" element={<DetailSMA />} />
        <Route path="/DetailSKA" element={<DetailSKA />} />
        <Route path="/ResetPWA1" element={<ResetPWA1 />} />
        <Route path="/ResetPWA2" element={<ResetPWA2 />} />
        <Route path="/ResetPWU1" element={<ResetPWU1 />} />
        <Route path="/ResetPWU2" element={<ResetPWU2 />} />
        <Route path="/EditTS" element={<EditTS />} />
        <Route path="/EditSM" element={<EditSM />} />
        <Route path="/EditSK" element={<EditSK />} />
        <Route path="/BerhasilEditTS" element={<BerhasilEditTS />} />
        <Route path="/BerhasilEditSM" element={<BerhasilEditSM />} />
        <Route path="/BerhasilEditSK" element={<BerhasilEditSK />} />


        
      </Routes>
    </BrowserRouter>
  );
}
