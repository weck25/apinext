import { useState } from "react";

const FormArticle = ()=>{
    const [Title, setTitle]= useState('');
    const [Subtitle, setSubtitle] =useState("");
    const [Description,setDescription] = useState("");
    const [Image, setImage]= useState('');
    const [Author, setAuthor]= useState('');
    const [CreatedAt, setCreaatedAt]= useState(Date);
    const [PublishedAt, setPublishedAt]= useState(Date);
    const [Published, setPublished]= useState(false);

};