import React, { useState, useRef } from 'react';
import './user.css'
import profil from '../../assets/portrait-femme.jpg'


function User() {
  const [selectedFiles, setSelectedFiles] = useState(null);
  const fileInputRef = useRef();

  const handleFileInputChange = (event) => {
    setSelectedFiles(event.target.files);
  };

  const handleUploadClick = () => {
    console.log(selectedFiles);
  };

  return (
    <div className='container__user'>
      <img src={profil} alt="Profil" />
      <h2>Marion Dupuis</h2>
      <div>Enfant : Anaïs Dupuis</div>
      <div>Age : 7 ans</div>

      <input type="file" ref={fileInputRef} onChange={handleFileInputChange} multiple />
      <button onClick={handleUploadClick}>Télécharger des documents</button>
    </div>
  );
}

export default User;
