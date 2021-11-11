import React from 'react';
import { IonApp, IonContent, IonHeader, IonLabel, IonTabs, IonTitle, IonToolbar, IonTabBar, IonIcon, IonRouterOutlet, IonTabButton } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { chatbubbleEllipses, person, informationCircle } from 'ionicons/icons'

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

/* Components */
import TestComponent from './components/TestComponent';
import { Route, Redirect } from 'react-router';

const App: React.FC = () => (
  <IonApp>
    <IonHeader>
      <IonToolbar>
          <IonTitle>
              ROLER
          </IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent>
    <IonReactRouter>
        <IonTabs>

            <IonRouterOutlet>
              <Route path="/" render={() => <Redirect to="/tabs/chats" />} exact={true} />
              <Route path="/roler" render={() => <Redirect to="/tabs/chats" />} exact={true} />
              <Route path="/tabs/chats" render={() => <TestComponent />} exact={true} />
            </IonRouterOutlet>
          
            {/* contact list */}
            <IonTabBar  slot="bottom">
              <IonTabButton tab="chats" href="/tabs/chats">
                  <IonIcon icon={person} />
                  <IonLabel>
                      Chats
                  </IonLabel>
              </IonTabButton>
              <IonTabButton tab="roleplays" href="/tabs/roleplays">
                  <IonIcon icon={chatbubbleEllipses} />
                  <IonLabel>
                      Chats
                  </IonLabel>
              </IonTabButton>
              <IonTabButton tab="about" href="/tabs/about">
                  <IonIcon icon={informationCircle} />
                  <IonLabel>
                      About
                  </IonLabel>
              </IonTabButton>
            </IonTabBar>
          </IonTabs>
        </IonReactRouter>

    </IonContent>
  </IonApp>
);

export default App;
