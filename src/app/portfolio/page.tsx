import { useState, ChangeEvent, FormEvent } from 'react';

export default function CreatePortfolio() {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    image: null as File | null,
    live_url: '',
    github_url: '',
    techstack: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement >) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const data = new FormData();
    Object.keys(formData).forEach((key) => {
      data.append(key, (formData as any)[key]);
    });

    const res = await fetch('/api/portfolio', {
      method: 'POST',
      body: data,
    });

    if (res.ok) {
      console.log('Portfolio created successfully!');
    } else {
      console.error('Failed to create portfolio');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Name" onChange={handleChange} required />
      <textarea name="description" placeholder="Description" onChange={handleChange} required />
      <input type="file" name="image" onChange={handleChange} required />
      <input type="url" name="live_url" placeholder="Live URL" onChange={handleChange} />
      <input type="url" name="github_url" placeholder="GitHub URL" onChange={handleChange} />
      <input type="text" name="techstack" placeholder="Tech Stack (comma separated)" onChange={handleChange} />
      <button type="submit">Create Portfolio</button>
    </form>
  );
}
