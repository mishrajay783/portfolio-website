import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiSend } from 'react-icons/fi';
import Section from './Section.jsx';

const initialForm = { name: '', email: '', subject: '', message: '' };

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const updateField = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const validate = () => {
    const nextErrors = {};
    if (!form.name.trim()) nextErrors.name = 'Name is required';
    if (!/^\S+@\S+\.\S+$/.test(form.email)) nextErrors.email = 'Valid email is required';
    if (!form.subject.trim()) nextErrors.subject = 'Subject is required';
    if (form.message.trim().length < 10) nextErrors.message = 'Message should be at least 10 characters';
    return nextErrors;
  };

  const submit = (event) => {
    event.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);
    setSent(false);
    if (Object.keys(nextErrors).length === 0) {
      setSent(true);
      setForm(initialForm);
    }
  };

  return (
    <Section id="contact" eyebrow="Contact" title="Let's discuss your data problem">
      <motion.form
        className="contact-form"
        onSubmit={submit}
        noValidate
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.55 }}
      >
        <label>
          Name
          <input name="name" value={form.name} onChange={updateField} placeholder="Your name" />
          {errors.name && <small>{errors.name}</small>}
        </label>
        <label>
          Email
          <input name="email" type="email" value={form.email} onChange={updateField} placeholder="you@example.com" />
          {errors.email && <small>{errors.email}</small>}
        </label>
        <label>
          Subject
          <input name="subject" value={form.subject} onChange={updateField} placeholder="Project discussion" />
          {errors.subject && <small>{errors.subject}</small>}
        </label>
        <label className="full">
          Message
          <textarea name="message" value={form.message} onChange={updateField} placeholder="Tell me what you need analyzed" />
          {errors.message && <small>{errors.message}</small>}
        </label>
        <button className="btn primary" type="submit">
          <FiSend /> Submit
        </button>
        {sent && <p className="success-message">Thanks! Your message has been validated successfully.</p>}
      </motion.form>
    </Section>
  );
}
