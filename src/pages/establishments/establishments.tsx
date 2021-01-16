import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../../components/ExploreContainer';
import './establishments.css';

const Establishments: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Establishments</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Establishments</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Establishments page" />
      </IonContent>
    </IonPage>
  );
};

export default Establishments;
