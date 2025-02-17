import React, { useState } from 'react';

type RegisterProps = {
  onRegister: (data: { nombre: string; email: string; telefono: string; direccion: string }) => void;
};

const Register: React.FC<RegisterProps> = ({ onRegister }) => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    direccion: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    console.log(formData);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onRegister(formData);
  };

  return (
    <form className="register-form" onSubmit={handleSubmit}>
      <label>
        Nombre:
        <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} required />
      </label>
      <label>
        Correo Electrónico:
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />
      </label>
      <label>
        Teléfono:
        <input type="tel" name="telefono" value={formData.telefono} onChange={handleChange} required />
      </label>
      <label>
        Dirección:
        <input type="text" name="direccion" value={formData.direccion} onChange={handleChange} required />
      </label>
      <button type="submit">Registrar</button>
    </form>
  );
};

export default Register;