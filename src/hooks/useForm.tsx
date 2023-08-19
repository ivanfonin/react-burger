import { useState } from 'react';
import { TEventTarget, TInputValues } from '../services/types/data';

export function useForm(inputValues: TInputValues = {}) {
  const [form, setForm] = useState(inputValues);

  const handleChange = (evt: TEventTarget) => {
    const { name, value } = evt.target;
    setForm({ ...form, [name]: value });
  };

  return { form, setForm, handleChange };
}
