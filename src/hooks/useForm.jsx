import { useState } from 'react';

export function useForm(inputValues = {}) {
  const [form, setForm] = useState(inputValues);

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setForm({ ...form, [name]: value });
  };

  return { form, setForm, handleChange };
}
