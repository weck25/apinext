"use client"
import { useState } from "react";
import axios from 'axios';

export default function  Tambah(){

    const [Title, setTitle]= useState('');
    const [Subtitle, setSubtitle] =useState("");
    const [Description,setDescription] = useState("");
    const [Image, setImage]= useState('');
    const [Author, setAuthor]= useState('');
    const [CreatedAt, setCreaatedAt]= useState(Date);
    const [EditedAt, setEditedAt]= useState(Date);
    const [Published, setPublished]= useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const baseUrl = process.env.NEXT_PUBLIC_URL_API;
        // Create an object with the form data

        const title = Title
        const subtitle = Subtitle
        const img_article = Image
        const description = Description
        const author = Author
        const created_at = CreatedAt
        const edited_at = EditedAt
        const published = Published
        const formData = {
          title,
          subtitle,
          description,
          img_article,
          author,
          created_at,
          edited_at,
          published,
        };
      
        try {
          // Make a POST request to your API endpoint using Axios
          const response = await axios.post(`${baseUrl}/articles`, formData);
      
          // Handle the response as needed
          console.log(response.data);
        } catch (error) {
          // Handle any errors that occur during the request
          console.error(error);
        }
      };

return (
    <>
     <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={Title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
      />
      <input
        type="text"
        value={Subtitle}
        onChange={(e) => setSubtitle(e.target.value)}
        placeholder="Subtitle"
      />
      <input
        type="text"
        value={Description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Deskription"
      />
      <input
        type="text"
        value={Image}
        onChange={(e) => setImage(e.target.value)}
        placeholder="image"
      />
      <input
        type="text"
        value={Author}
        onChange={(e) => setAuthor(e.target.value)}
        placeholder="Author"
      />
      <input
        type="date"
        value={CreatedAt}
        onChange={(e) => setCreaatedAt(e.target.value)}
        placeholder="created at"
      />
      <input
        type="date"
        value={EditedAt}
        onChange={(e) => setEditedAt(e.target.value)}
        placeholder="published at"
      />
      
      <button type="submit">Add Data</button>
    </form>
    </>
);
};