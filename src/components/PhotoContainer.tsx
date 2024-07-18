import React, { useState } from 'react';
import { IonButton, IonImg } from '@ionic/react';
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';

const PhotoContainer: React.FC = () => {
  const [photo, setPhoto] = useState<string | undefined>(undefined);

  const takePhoto = async () => {
    const image: Photo = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.DataUrl,
      source: CameraSource.Camera,
    });
    setPhoto(image.dataUrl);
  };

  return (
    <div className="container">
      <IonButton onClick={takePhoto}>Take a new photo using the camera</IonButton>
      {photo && <IonImg src={photo} />}
    </div>
  );
};

export default PhotoContainer;
