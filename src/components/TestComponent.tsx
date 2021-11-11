import React from 'react';
import { IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonContent } from '@ionic/react';

const TestComponent: React.FC = () => (
  <IonContent>
      <IonCard>
          <IonCardHeader>
              <IonCardTitle>
                  LOREM IPSUM
              </IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos dicta at explicabo corrupti vitae, laborum voluptatem nihil ratione cum inventore cupiditate temporibus maiores laudantium molestias iusto, fugiat error numquam dignissimos.
          </IonCardContent>
      </IonCard>
  </IonContent>
);

export default TestComponent;