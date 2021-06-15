import './App.css';
import Home from './components/fullComponents/Home/Home';
import Login from './components/fullComponents/loginAndRegister/login/login';
import Register from './components/fullComponents/loginAndRegister/register/register';
import Explore from './components/fullComponents/explore/explore';
import Sugested from './components/fullComponents/sugested/sugested';
import Rank from './components/fullComponents/rank/rank';
import Contact from './components/fullComponents/contact/contact';
import AboutUs from './components/fullComponents/aboutUs/aboutUs';
import TermsOfUse from './components/fullComponents/termsOfUse/termsOfUse';
import Support from './components/fullComponents/support/support';
import LegalInfo from './components/fullComponents/legalInfo/legalInfo';
import UserPanel from './components/fullComponents/panel/userPanel/userPanel';
import StudioPanel from './components/fullComponents/panel/studioPanel/StudioPanel';
import AccountInfo from './components/fullComponents/panel/accountInfo/accountInfo';
import UserDetail from './components/fullComponents/panel/userdetail/UserDetail';
import TopUpCoins from './components/fullComponents/topUpCoins/topUpCoins';
import Studio from './components/fullComponents/studio/studio';
import Game from './components/fullComponents/game/Game.js';
import Lotery from './components/fullComponents/lotery/Lotery';
import Bug from './components/fullComponents/bug/Bug';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

function App() {
  localStorage.setItem('permission', "");
  return (
    <div>
      <Router className="rrouter">

        <Switch className="sswitch">
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/explore" component={Explore} />
          <Route path="/sugested" component={Sugested} />
          <Route path="/rank" component={Rank} />
          <Route path="/contact" component={Contact} />
          <Route path="/aboutUs" component={AboutUs} />
          <Route path="/termsOfUse" component={TermsOfUse} />
          <Route path="/support" component={Support} />
          <Route path="/legalInfo" component={LegalInfo} />
          <Route path="/userPanel" component={UserPanel} />
          <Route path="/accountInfo" component={AccountInfo} />
          <Route path="/topUpCoins" component={TopUpCoins} />
          <Route path="/studio" component={Studio} />
          <Route path="/game" component={Game} />
          <Route path="/lotery" component={Lotery} />
          <Route path="/bug" component={Bug} />
          <Route path="/userDetail" component={UserDetail} />
          <Route path="/studioPanel" component={StudioPanel} />
          
        </Switch>

      </Router>
    </div>
  );
}

export default App;