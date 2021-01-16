import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../../components/ExploreContainer';
import './recharge.css';

const Recharge: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Recharge</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Recharge</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Recharge page" />
      </IonContent>
    </IonPage>
  );
};

export default Recharge;
