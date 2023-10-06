  import React, { useState, useRef } from 'react';
  import './user.css';
  import profil from '../../assets/portrait-femme.jpg';
  import trajet from '../../assets/trajet.png'

  function User() {
    const [selectedFiles, setSelectedFiles] = useState(null);
    const [enfants, setEnfants] = useState(["Anaïs Dupuis"]); // Liste des enfants
    const [nouvelEnfant, setNouvelEnfant] = useState(""); // Enfant à ajouter
    const [itineraire, setItineraire] = useState(""); // Itinéraire de chez lui jusqu'à l'école
    const [nouvelItineraire, setNouvelItineraire] = useState(""); // Nouvel itinéraire à ajouter
    const fileInputRef = useRef();

    const handleFileInputChange = (event) => {
      setSelectedFiles(event.target.files);
    };

    const handleUploadClick = () => {
      console.log(selectedFiles);
    };

    const ajouterEnfant = () => {
      if (nouvelEnfant) {
        setEnfants([...enfants, nouvelEnfant]);
        setNouvelEnfant("");
      }
    };

    const handleSubmitItineraire = (event) => {
      event.preventDefault();
      if (nouvelItineraire) {
        setItineraire(nouvelItineraire);
        setNouvelItineraire("");
      }
    };

    return (
      <><div className='container__user'>
        <img src={profil} alt="Profil" />
        <h2>Marion Dupuis</h2>
        <div>Enfants :</div>
        <ul>
          {enfants.map((enfant, id) => (
            <li key={id}>{enfant}</li>
          ))}
        </ul>
        <div>
          <input type="text" value={nouvelEnfant} onChange={(e) => setNouvelEnfant(e.target.value)} placeholder="Prénom de votre enfant" /><br />
          <button onClick={ajouterEnfant}>Ajouter un enfant</button>
        </div>
        <form onSubmit={handleSubmitItineraire}>
          <label>
            Itinéraire:
            <input type="text" value={nouvelItineraire} onChange={(e) => setNouvelItineraire(e.target.value)} />
          </label>
          <button type="submit">Ajouter l'itinéraire</button>
        </form>
        <div>Itinéraire habituel : {itineraire}</div>
        <input type="file" ref={fileInputRef} onChange={handleFileInputChange} multiple />
        <button onClick={handleUploadClick}>Télécharger des documents</button>
      
  </div>      <div className='img__trajet'>      <img src={trajet} alt="Profil" />
  </div>
</>
    );
  }

  export default User;
