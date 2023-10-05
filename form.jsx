import React, { useState } from 'react';
import { initializeApp } from 'firebase/app';

const app = initializeApp(firebaseConfig);

function Sign() {
const [prenom, setPrenom] = useState('');
const [nom, setNom] = useState('');
const [motDePasse, setMotDePasse] = useState('');

const handleSubmit = (e) => {
e.preventDefault();
console.log('Prénom:', prenom);
console.log('Nom:', nom);
console.log('Mot de passe:', motDePasse);
};

return (
<div className='log'>
    <div className="login">
        <h1 className='title__sign'>Bienvenue chez nous</h1>
        <form className="login-form" onSubmit={handleSubmit}>
            <input type="text" placeholder="Entrez votre prénom" value={prenom} onChange={(e)=>
            setPrenom(e.target.value)}
            required
            />
            <input type="text" placeholder="Entrez votre nom" value={nom} onChange={(e)=> setNom(e.target.value)}
            required
            />
            <input type="password" placeholder="Entrez votre mot de passe" value={motDePasse} onChange={(e)=>
            setMotDePasse(e.target.value)}
            required
            />
            <button type="submit">S'INSCRIRE</button>
        </form>
    </div>
</div>
);
}

export default Sign;