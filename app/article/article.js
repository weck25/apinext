"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";

function ArticlesComponent() {
  const [articles, setArticles] = useState([]);
  const baseUrl = process.env.NEXT_PUBLIC_URL_API;

  useEffect(() => {
    async function fetchData() {
      try {
        // const response = await fetch('http://172.208.91.27:1337/api/articles?populate=*');

        // if (!response.ok) n{
        //     throw new Error(`HTTP error! status: ${response.status}`);
        // }

        // const jsonData = await response.json();

        // const fetchedArticles = jsonData.data.map(item => {
        //     //Destructuring Assignment
        //     const { title, subtitle, description, author, createdAt, updatedAt, publishedAt, picture } = item.attributes;
        //     //Optional Chaining (?.) || Ternary Operator (? :)
        //     const largeImageUrl = picture.data?.[0]?.attributes?.formats?.large?.url
        //     //String Interpolation (Template Literals)
        //         ? `${baseUrl}${picture.data[0].attributes.formats.large.url}`
        //         : null;

        //     return { title, subtitle, description, author, createdAt, updatedAt, publishedAt, largeImageUrl };
        // });

        // setArticles(fetchedArticles);
        // Menggunakan axios untuk melakukan request
        const response = await axios.get(`${baseUrl}/api/articles?populate=*`);

        // Mengolah data yang diterima
        const fetchedArticles = response.data.data.map((item) => {
          //Destructuring Assignment
          const {
            title,
            subtitle,
            description,
            author,
            createdAt,
            updatedAt,
            publishedAt,
            picture,
          } = item.attributes;
          //Optional Chaining (?.) || Ternary Operator (? :)
          const largeImageUrl = picture.data?.[0]?.attributes?.formats?.large
            ?.url
            ? //String Interpolation (Template Literals)
              `${baseUrl}${picture.data[0].attributes.formats.large.url}`
            : null;

          return {
            title,
            subtitle,
            description,
            author,
            createdAt,
            updatedAt,
            publishedAt,
            largeImageUrl,
          };
        });

        setArticles(fetchedArticles);
      } catch (error) {
        console.error("There was a problem fetching the articles:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <>
      {articles.map((article, index) => (
        <div key={index}>
          <div className="card w-96 min-h-400 glass shadow-xl">
            <figure className="w-96 h-64">
              {article.largeImageUrl && (
                <img className="w-full h-full object-cover" src={article.largeImageUrl} alt={article.title} />
              )}
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                {article.title}
                <div className="badge badge-secondary">{article.author}</div>
              </h2>
              <p>{article.subtitle}</p>
              <div className="collapse">
  <input type="checkbox" /> 
  <div className="collapse-title text-xl font-medium">
    description
  </div>
  <div className="collapse-content"> 
    <p>{article.description}</p>
  </div>
</div>
              <div className="card-actions justify-end">
                <div className="badge badge-outline">Fashion</div>
                <div className="badge badge-outline">Products</div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default ArticlesComponent;