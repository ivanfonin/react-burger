import { useState } from 'react';
import { TEventTarget } from '../services/types';

export function useForm(inputValues: any = {}) {
  const [form, setForm] = useState(inputValues);

  const handleChange = (evt: TEventTarget) => {
    const { name, value } = evt.target;
    setForm({ ...form, [name]: value });
  };

  return { form, setForm, handleChange };
}
