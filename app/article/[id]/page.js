'use client'
import React from 'react';
import useSWR from 'swr';

export default function ArticleDetail({params}) {
    const id = params.id;
  const baseUrl = process.env.NEXT_PUBLIC_URL_API;
  const fetcher = (url) => fetch(url).then((res) => res.json());
  const { data, error } = useSWR(id ? `${baseUrl}/api/articles/${id}?populate=*` : null, fetcher);

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;
//   if (!Array.isArray(data.data)) return console.log(data.data) ;

  // Struktur data mungkin perlu disesuaikan berdasarkan respon API Anda
console.log(data)
  const { title, subtitle, description, author, createdAt, updatedAt, publishedAt, picture } = data.data.attributes;
  const largeImageUrl = picture.data?.[0]?.attributes?.formats?.large?.url
  ? `${baseUrl}${picture.data[0].attributes.formats.large.url}`
  : null;
  return (
    <>
          <div key={id} className="card w-96 min-h-400 glass shadow-xl">
            <figure className="w-96 h-64">
              {largeImageUrl && (
                <img className="w-full h-full object-cover" src={largeImageUrl} alt={title}></img>
              )}
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                {title}
                <div className="badge badge-secondary">{author}</div>
              </h2>
              <p>{subtitle}</p>
              <div className="collapse">
                <input type="checkbox" />
                <div className="collapse-title text-xl font-medium">
                  Description
                </div>
                <div className="collapse-content">
                  <p>{description}</p>
                </div>
              </div>
              <div className="card-actions justify-end">
                <div className="badge badge-outline">Published: {new Date(publishedAt).toLocaleDateString()}</div>
              </div>
            </div>
          </div>
    </>

  );
}
