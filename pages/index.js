import { useState } from 'react';
import { supabase } from '../lib/supabaseClient';

export default function Home() {
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await supabase.from('candidats').insert([{ nom, prenom, email }]);
    alert("Candidat ajouté !");
  };

  return (
    <div>
      <h1>Ajouter un candidat</h1>
      <form onSubmit={handleSubmit}>
        <input placeholder="Nom" value={nom} onChange={(e) => setNom(e.target.value)} />
        <input placeholder="Prénom" value={prenom} onChange={(e) => setPrenom(e.target.value)} />
        <input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <button type="submit">Ajouter</button>
      </form>
    </div>
  );
}