"use client";
import React, { useEffect, useState } from "react";

// Ajuste o tipo conforme o retorno real da API
export type News = {
  news_id: string;
  title: string;
  text: string;
  creator_id: string;
  tag: string;
};

function News_table() {
  const [news, setNews] = useState<News[]>([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await fetch("http://localhost:3001/public/lstNws", {
        });
        const data = await res.json();
        setNews(data);
      } catch (err) {
        console.error("Erro ao buscar categorias", err);
      }
    };
    fetchNews();
  });

  return (
    <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>#</th>
            <th>Nome</th>
            <th>Descrição</th>
            <th>Adicionado por</th>
          </tr>
        </thead>
        <tbody>
          {news.map((news, idx) => (
            <News_table_item
              key={news.id || idx}
              news={news}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default News_table;