
import { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';
import logo from '../assets/logo.png';

const supabase = createClient(
  'https://sgyogaoanvidoeujzfoc.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNneW9nYW9hbnZpZG9ldWp6Zm9jIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDczMzM2ODQsImV4cCI6MjA2MjkwOTY4NH0.CBjG7Q2TIF88w92ktp46Exu4P6vFEkRWAPeyPsCR37U'
);

export default function Dashboard() {
  const [formData, setFormData] = useState({
    kund: '', avresa: '', avgangsort: '', destination: '', returresa: '', storlek: '',
    offert_deadline: '', buss_pa_plats: '', resplan: '', kommentar: '', synergybus_id: '', status: 'Väntar'
  });

  const [uppdragList, setUppdragList] = useState([]);

  const fetchUppdrag = async () => {
    const { data, error } = await supabase.from('uppdrag').select('*').order('created_at', { ascending: false });
    if (!error && data) setUppdragList(data);
  };

  useEffect(() => { fetchUppdrag(); }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { error } = await supabase.from('uppdrag').insert([{ ...formData }]);
    if (!error) {
      setFormData({ kund: '', avresa: '', avgangsort: '', destination: '', returresa: '', storlek: '', offert_deadline: '', buss_pa_plats: '', resplan: '', kommentar: '', synergybus_id: '', status: 'Väntar' });
      fetchUppdrag();
    }
  };

  const updateStatus = async (id, status) => {
    await supabase.from('uppdrag').update({ status }).eq('id', id);
    fetchUppdrag();
  };

  return (
    <div className="flex flex-col p-6 bg-gray-100 min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <img src={logo} alt="Logo" className="h-10" />
        <button className="bg-red-500 px-4 py-2 text-white rounded">Logga ut</button>
      </div>
      <div className="flex flex-col lg:flex-row gap-8">
        <form onSubmit={handleSubmit} className="w-full lg:w-1/2 bg-white p-6 rounded shadow">
          <h2 className="text-xl font-bold mb-4">Skapa nytt uppdrag</h2>
          <input placeholder="Kund" value={formData.kund} onChange={e => setFormData({ ...formData, kund: e.target.value })} className="mb-2 p-2 border w-full rounded" />
          <input type="datetime-local" value={formData.avresa} onChange={e => setFormData({ ...formData, avresa: e.target.value })} className="mb-2 p-2 border w-full rounded" />
          <input placeholder="Avgångsort" value={formData.avgangsort} onChange={e => setFormData({ ...formData, avgangsort: e.target.value })} className="mb-2 p-2 border w-full rounded" />
          <input placeholder="Destination" value={formData.destination} onChange={e => setFormData({ ...formData, destination: e.target.value })} className="mb-2 p-2 border w-full rounded" />
          <input type="datetime-local" value={formData.returresa} onChange={e => setFormData({ ...formData, returresa: e.target.value })} className="mb-2 p-2 border w-full rounded" />
          <input placeholder="Storlek" value={formData.storlek} onChange={e => setFormData({ ...formData, storlek: e.target.value })} className="mb-2 p-2 border w-full rounded" />
          <input type="datetime-local" value={formData.offert_deadline} onChange={e => setFormData({ ...formData, offert_deadline: e.target.value })} className="mb-2 p-2 border w-full rounded" />
          <textarea placeholder="Resplan" value={formData.resplan} onChange={e => setFormData({ ...formData, resplan: e.target.value })} className="mb-2 p-2 border w-full rounded" />
          <input placeholder="Kommentar" value={formData.kommentar} onChange={e => setFormData({ ...formData, kommentar: e.target.value })} className="mb-2 p-2 border w-full rounded" />
          <input placeholder="Synergybus ID" value={formData.synergybus_id} onChange={e => setFormData({ ...formData, synergybus_id: e.target.value })} className="mb-4 p-2 border w-full rounded" />
          <button className="w-full bg-blue-600 text-white p-2 rounded">Skapa</button>
        </form>

        <div className="w-full lg:w-1/2">
          <h2 className="text-lg font-bold mb-2">Alla uppdrag</h2>
          <table className="w-full bg-white rounded shadow text-sm">
            <thead>
              <tr className="bg-gray-200 text-left">
                <th className="p-2">Kund</th>
                <th className="p-2">Pris</th>
                <th className="p-2">Status</th>
              </tr>
            </thead>
            <tbody>
              {uppdragList.map(u => (
                <tr key={u.id} className="border-t">
                  <td className="p-2">{u.kund}</td>
                  <td className="p-2">{u.pris || '-'}</td>
                  <td className="p-2">{u.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
