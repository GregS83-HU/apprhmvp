import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabaseClient';

export default function OpenedPositionList() {
  const [openedposition, setOpenedPosition] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const { data, error } = await supabase.from('openedposition').select('*');
      if (error) console.error(error);
      else setOpenedPosition(data);
    }
    fetchData();
  }, []);

  return (
    <div>
      <h2>Liste des position ouvertes</h2>
      <ul>
        {openedposition.map((openedposition) => (
          <li key={openedposition.position_id}>
            {openedposition.position_title} {openedposition.position_description}
          </li>
        ))}
      </ul>
    </div>
  );
}