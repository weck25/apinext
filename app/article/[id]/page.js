'use client'
import React from 'react';
import useSWR from 'swr';
import Navbar from '@/app/component/navbar';
import Footer from '@/app/component/footer';
export default function ArticleDetail({params}) {
    const id = params.id;
  const baseUrl = process.env.NEXT_PUBLIC_URL_API;
  const fetcher = (url) => fetch(url).then((res) => res.json());
  const { data, error } = useSWR(id ? `${baseUrl}/articles/${id}` : null, fetcher);

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;
//   if (!Array.isArray(data.data)) return console.log(data.data) ;

  // Struktur data mungkin perlu disesuaikan berdasarkan respon API Anda
console.log(data)
  const { title, subtitle, description, author, created_at, updatedAt, publishedAt, img_article } = data[0];
  const largeImageUrl = img_article
  ? `${baseUrl}${img_article}`
  : null;
  return (
    <>
    <Navbar />
    <div key={id} className="mockup-browser border border-base-300">
  <div className="mockup-browser-toolbar">
    <div className="input border border-base-300">https://apinext.com</div>
  </div>
  <div className="flex justify-center px-4 py-16 border-t border-base-300">
  <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
    {largeImageUrl && 
    (
    <img src={largeImageUrl} className="max-w-sm rounded-lg shadow-2xl" />

    )
    }
    <div>
      <h1 className="text-5xl font-bold">{title}</h1>
      <h1 className="text-2xl font-bold">{subtitle}</h1>
      <p className="py-6">{description}</p>
      <div className="badge badge-secondary">{author}</div>
      <p className='py-6 bg-orange rounded justify-end'>Published : {created_at}</p>

    </div>
  </div>
</div>


  </div>
</div>
<Footer />
    </>

  );
}
