import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../components/Header';
import LadderPage from '../components/LadderPage';
import NotFoundPage from '../components/NotFoundPage';
import HelpPage from '../components/HelpPage';
import LadderListPage from '../components/LadderListPage';
import TopLadderListPage from '../components/TopLadderListPage';
import AddProblemPage from '../components/AddProblemPage';
import AddLadderPage from '../components/AddLadderPage';
import EditLadderPage from '../components/EditLadderPage';
import EditProblemPage from '../components/EditProblemPage';

const AppRouter = ()=>(
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={TopLadderListPage} exact={true} />
        <Route path="/ladders" component={LadderListPage} exact={true} />
        <Route path="/ladders/create" component={AddLadderPage} exact={true} />
        <Route path="/ladders/:id" component={LadderPage} exact={true} />
        <Route path="/ladders/:id/problem/create" component={AddProblemPage} exact={true} />
        <Route path="/ladders/edit/:id" component={EditLadderPage} exact={true} />
        <Route path="/ladders/edit/:id/problem/edit/:id" component={EditProblemPage} exact={true} />
        <Route path="/help" component={HelpPage} exact={true} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);
export default AppRouter;



// const AppRouter = ()=>(
//   <BrowserRouter>
//     <div>
//       <Header />
//       <Switch>
//         <Route path="/" component={LadderPage} exact={true} />
//         <Route path="/create" component={LadderPage} exact={true} />
//         <Route path="/help" component={HelpPage} exact={true} />
//         <Route component={NotFoundPage} />
//       </Switch>
//     </div>
//   </BrowserRouter>
// );