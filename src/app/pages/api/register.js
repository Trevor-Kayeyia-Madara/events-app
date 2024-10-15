// pages/api/register.js
import { supabase } from '../../lib/supabaseClient';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { firstName, surname, phoneNumber, email, residence, microchurch } = req.body;

    try {
      const { error } = await supabase.from('registrations').insert([
        {
          first_name: firstName,
          surname,
          phone_number: phoneNumber,
          email,
          residence,
          microchurch,
        },
      ]);

      if (error) {
        throw error;
      }

      res.status(200).json({ message: 'Registration successful!' });
    } catch (error) {
      console.error('Error:', error.message);
      res.status(500).json({ error: 'Registration failed. Please try again.' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
