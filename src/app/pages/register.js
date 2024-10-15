// pages/register.js
import { useForm } from 'react-hook-form';
import { useState } from 'react';

export default function RegistrationForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [loading, setLoading] = useState(false);

  // In the onSubmit function
const onSubmit = async (data) => {
    setLoading(true);
    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
  
      const result = await response.json();
  
      if (response.ok) {
        alert(result.message);
        reset();
      } else {
        throw new Error(result.error);
      }
    } catch (error) {
      console.error('Error:', error.message);
      alert('Registration failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };
  

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold">Conference Registration</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="mt-4 space-y-4">
        {/* First Name */}
        <div>
          <label className="block font-medium">First Name</label>
          <input
            {...register('firstName', { required: 'First name is required' })}
            className="w-full p-2 border rounded"
          />
          {errors.firstName && (
            <p className="text-red-500 text-sm mt-1">{errors.firstName.message}</p>
          )}
        </div>

        {/* Surname */}
        <div>
          <label className="block font-medium">Surname</label>
          <input
            {...register('surname', { required: 'Surname is required' })}
            className="w-full p-2 border rounded"
          />
          {errors.surname && (
            <p className="text-red-500 text-sm mt-1">{errors.surname.message}</p>
          )}
        </div>

        {/* Phone Number */}
        <div>
          <label className="block font-medium">Phone Number</label>
          <input
            {...register('phoneNumber', { required: 'Phone number is required' })}
            className="w-full p-2 border rounded"
          />
          {errors.phoneNumber && (
            <p className="text-red-500 text-sm mt-1">{errors.phoneNumber.message}</p>
          )}
        </div>

        {/* Email Address */}
        <div>
          <label className="block font-medium">Email Address</label>
          <input
            type="email"
            {...register('email', { required: 'Email is required' })}
            className="w-full p-2 border rounded"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        {/* Residence */}
        <div>
          <label className="block font-medium">Residence</label>
          <input
            {...register('residence', { required: 'Residence is required' })}
            className="w-full p-2 border rounded"
          />
          {errors.residence && (
            <p className="text-red-500 text-sm mt-1">{errors.residence.message}</p>
          )}
        </div>

        {/* Microchurch */}
        <div>
          <label className="block font-medium">
            Microchurch (Church if not from DC Utawala)
          </label>
          <input
            {...register('microchurch', { required: 'Microchurch is required' })}
            className="w-full p-2 border rounded"
          />
          {errors.microchurch && (
            <p className="text-red-500 text-sm mt-1">{errors.microchurch.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-green-500 text-white py-2 px-4 rounded"
          disabled={loading}
        >
          {loading ? 'Registering...' : 'Register'}
        </button>
      </form>
    </div>
  );
}
