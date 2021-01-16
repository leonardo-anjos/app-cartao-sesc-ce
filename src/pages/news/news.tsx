import React from 'react';
import { IonGrid, IonRow, IonCol, IonContent } from '@ionic/react';
import './news.css';

const News: React.FC = () => {
  return (
    <IonContent>
      <IonGrid>
        <IonRow>
          <IonCol>ion-col</IonCol>
          <IonCol>ion-col</IonCol>
          <IonCol>ion-col</IonCol>
          <IonCol>ion-col</IonCol>
        </IonRow>
      </IonGrid>
    </IonContent>
  );
};

export default News;
