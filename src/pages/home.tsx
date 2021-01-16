import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent } from '@ionic/react';
import News from './news/news';
import './home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Home</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        {/* credit */}
        <IonCard>
          <IonCardContent>
            <span>R$ 55,00</span>
          </IonCardContent>
        </IonCard>

        {/* news */}
        <News />
      </IonContent>

    </IonPage>
  );
};

export default Home;
