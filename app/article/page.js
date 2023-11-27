"use client"
import React from 'react';
import useSWR from 'swr';
export default function page() {
  const baseUrl = process.env.NEXT_PUBLIC_URL_API;
  const fetcher = (url) => fetch(url).then((res) => res.json());

  const { data, error } = useSWR(`${baseUrl}/api/articles?populate=*`, fetcher);

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;
  if (!Array.isArray(data.data)) return <div>Data is not in the expected format</div>;

    return (
      <>
        <header className="bg-gray-800 text-white p-4">
        <h1 className="text-3xl">Blog Sederhana</h1>
    </header>
    <main className="p-4">
        <div className="grid grid-cols-3 gap-4">
        {data.data.map((item, index) => {
        const { title, subtitle, description, author, createdAt, updatedAt, publishedAt, picture } = item.attributes;

        // Mengambil URL gambar dalam format large jika tersedia
        const largeImageUrl = picture.data?.[0]?.attributes?.formats?.large?.url
          ? `${baseUrl}${picture.data[0].attributes.formats.large.url}`
          : null;

        return (
          <div key={index} className="card w-96 min-h-400 glass shadow-xl">
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
        );
      })}
        </div>
    </main>
    <footer className="bg-gray-700 text-white p-4 text-center">
        Footer Blog
    </footer>
      </>
    )
  }
  