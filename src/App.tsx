import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { documentTextOutline, cashOutline, locationOutline, homeOutline } from 'ionicons/icons';

import Home from './pages/home';
import Extract from './pages/extract/extract';
import Recharge from './pages/recharge/recharge';
import Establishments from './pages/establishments/establishments';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route path="/extract" component={Extract} exact={true} />
          <Route path="/recharge" component={Recharge} exact={true} />
          <Route path="/establishments" component={Establishments} />
          <Route path="/home" component={Home} />
          <Route path="/" render={() => <Redirect to="/home" />} exact={true} />
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="home" href="/home">
            <IonIcon icon={homeOutline} />
            <IonLabel>Inicio</IonLabel>
          </IonTabButton>
          <IonTabButton tab="extract" href="/extract">
            <IonIcon icon={documentTextOutline} />
            <IonLabel>Meu extrato</IonLabel>
          </IonTabButton>
          <IonTabButton tab="recharge" href="/recharge">
            <IonIcon icon={cashOutline} />
            <IonLabel>Recargas</IonLabel>
          </IonTabButton>
          <IonTabButton tab="establishments" href="/establishments">
            <IonIcon icon={locationOutline} />
            <IonLabel>Onde usar</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;