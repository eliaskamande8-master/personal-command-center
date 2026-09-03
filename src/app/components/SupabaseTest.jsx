'use client';

import { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabase';

export default function SupabaseTest() {
  const [status, setStatus] = useState('Testing connection...');
  const [data, setData] = useState(null);

  useEffect(() => {
    async function testConnection() {
      try {
        // Replace 'your_table_name' with an actual table in your Supabase database, 
        // or this will test basic client connectivity.
        const { data, error } = await supabase.from('tasks').select('*').limit(1);

        if (error) {
          setStatus(`Connection failed: ${error.message}`);
        } else {
          setStatus('Successfully connected to Supabase! 🎉');
          setData(data);
        }
      } catch (err) {
        setStatus(`An error occurred: ${err.message}`);
      }
    }

    testConnection();
  }, []);

  return (
    <div className="p-6 bg-slate-900 border border-slate-800 rounded-xl max-w-md mx-auto my-8 text-slate-100 shadow-lg">
      <h3 className="text-lg font-semibold mb-2">Supabase Status</h3>
      <p className="text-sm mb-4 text-slate-300">{status}</p>
      {data && (
        <div className="bg-slate-950 p-3 rounded text-xs overflow-x-auto text-emerald-400 font-mono">
          {JSON.stringify(data, null, 2)}
        </div>
      )}
    </div>
  );
}