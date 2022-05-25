import { Route, Routes, HashRouter } from "react-router-dom";
import Layout from "../components/layout";
import EmaleChosing from "../pages/emale-chosing";

function Router() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<EmaleChosing />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default Router;
