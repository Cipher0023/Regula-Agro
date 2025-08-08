"use client";

import React, { useEffect, useState } from "react";
import Notícia from "../postagens/notícia/Notícia";
import NotíciaSecundária from "../postagens/notíciasecundária/NotíciaSecundária";

export interface News {
  news_id: string;
  title: string;
  text: string;
  creator_id: string;
  tag: "culturas" | "defensivos" | "bioinsumos" | "fertilizantes" | "biodiversidade" | "pesquisa";
}

function Destaques() {
  const [news, setNews] = useState<News[]>([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await fetch("http://localhost:3001/public/lstNws");
        const data: News[] = await res.json();
        setNews(data);
      } catch (err) {
        console.error("Erro ao buscar notícias", err);
      }
    };
    fetchNews();
  }, []);

  if (!news.length) {
    return <div>Carregando...</div>;
  }

  const [first, ...rest] = news;

  return (
    <div className="flex flex-row w-full max-h-[548px] space-x-4">
      <div className="flex-1">
        <Notícia
          imageUrl="trator.png"
          title={first.title}
          views={0}
          comments={0}
          badgeType={first.tag}
          daysAgo={0}
        />
      </div>

      <div className="flex-1 space-y-4 flex flex-col pb-10">
        {rest.slice(0, 2).map((item) => (
          <NotíciaSecundária
            key={item.news_id}
            imageUrl="trator.png"
            title={item.title}
            views={0}
            comments={0}
            badgeType={item.tag}
            daysAgo={0}
          />
        ))}
      </div>
    </div>
  );
}

export default Destaques;
