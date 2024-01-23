"use client"
import React from 'react';
import useSWR from 'swr';
import Link from 'next/link';




export default function ArticleCard() {

  const baseUrl = process.env.NEXT_PUBLIC_URL_API;
  const fetcher = (url) => fetch(url).then((res) => res.json());

  const { data, error } = useSWR(`${baseUrl}/articles`, fetcher);

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;
  if (!Array.isArray(data)) return <div>Data is not in the expected format</div>;
 
    return (
      <>
    <main className="p-4">
        <div className="grid grid-cols-3 gap-4">
        {data.map((item, index) => {
        const { title, subtitle, description, author, created_at, edited_at, publishedAt, img_article } = item;
        const id = item.id;
        // Mengambil URL gambar dalam format large jika tersedia
        const largeImageUrl = img_article
          ? `${baseUrl}${img_article}`
          : null;

        return (
          
          <div key={index} className="card w-96 min-h-400 glass shadow-xl">
            <figure className="w-96 h-64">
              {largeImageUrl && (
                <img className="w-full h-full object-cover" src={largeImageUrl} alt={title}></img>
              )}
            </figure>
            <Link href={`/article/${id}`}>
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
                <div className="badge badge-outline">Published: {created_at}</div>
              </div>
            </div>
            </Link>
            
            
            
          </div>
        );
      })}
        </div>
    </main>
      </>
    )
  }
  