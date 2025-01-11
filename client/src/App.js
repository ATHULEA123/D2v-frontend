import {BrowserRouter, Route, Routes} from "react-router-dom";
import {FormComponent, Main, UsersideUpdate} from "./components";

import ArchitectPortal from "./pages/ArichitechPortal/Index";

import {Activity, Architect, ContactUs, LeadContent, PageNotFound, Static, UserLogin, Testfile} from "./pages";

import Leads from "./pages/Leads/LeadItems";
import {Design, DesignContent} from "./pages/Design";
import {Work, WorkContent} from "./pages/Work";
import LiveEstimation from "./pages/LiveEstimation";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route path="/liveestimation" element={<LiveEstimation/>} />
          <Route path="/test" element={<Testfile />} />
          <Route path="/architect" element={<ArchitectPortal portalType="architect" />} />
          <Route path="/master" element={<ArchitectPortal portalType="master" />} />
          <Route path="/" element={<Static />} />
          <Route path="/login" element={<UserLogin />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/userupdate" element={<UsersideUpdate />} />
          <Route path="/pannel" element={<Main />}>
            <Route index element={<Leads />} />
            <Route path="leads" element={<Leads />} />
            <Route path="leaditem/:id" element={<LeadContent />} />
            <Route path="design" element={<Design />} />
            <Route path="designitem/:id" element={<DesignContent />} />
            <Route path="add/design" element={<FormComponent mode={"add"} />} />
            <Route path="activity" element={<Activity />} />
            <Route path="architect" element={<Architect />} />
            <Route path="work" element={<Work />} />
            <Route path="workitem/:id" element={<WorkContent />} />
            
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
