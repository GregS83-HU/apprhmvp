import { useState } from 'react';
import { useRouter } from 'next/router';
import { supabase } from '../lib/supabaseClient';

export default function Home() {
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [email, setEmail] = useState('');
  const router = useRouter(); // 👈 pour redirection

  const handleSubmit = async (e) => {
    e.preventDefault();
    await supabase.from('candidats').insert([{ nom, prenom, email }]);
    alert("Candidat ajouté !");
  };

  const goToAnalyseCV = () => {
    router.push('/analyse-cv');
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Ajouter un candidat</h1>

      <form onSubmit={handleSubmit} style={{ marginBottom: '2rem' }}>
        <input
          placeholder="Nom"
          value={nom}
          onChange={(e) => setNom(e.target.value)}
          style={{ display: 'block', marginBottom: '1rem' }}
        />
        <input
          placeholder="Prénom"
          value={prenom}
          onChange={(e) => setPrenom(e.target.value)}
          style={{ display: 'block', marginBottom: '1rem' }}
        />
        <input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ display: 'block', marginBottom: '1rem' }}
        />
        <button type="submit">Ajouter</button>
      </form>

      <button
        onClick={goToAnalyseCV}
        style={{
          padding: '0.75rem 1.5rem',
          backgroundColor: '#0070f3',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer'
        }}
      >
        Analyser un CV
      </button>
    </div>
  );
}