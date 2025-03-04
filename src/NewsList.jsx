import React, { useState, useEffect } from "react";
import { Container, Pagination, CircularProgress, Typography } from "@mui/material";
import NewsCard from "./NewsCard";

const API_URL = "https://project-hodhod-backend.onrender.com/news"; // Replace with actual backend

function NewsList({ topic }) {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(`${API_URL}/${topic}`)
      .then((res) => res.json())
      .then((data) => {
        setArticles(data.news || []);
        setTotalPages(3); // Change this if API supports pagination
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [topic, page]);

  return (
    <Container>
      {loading ? (
        <CircularProgress sx={{ display: "block", margin: "20px auto" }} />
      ) : articles.length > 0 ? (
        articles.map((article, index) => <NewsCard key={index} article={article} />)
      ) : (
        <Typography textAlign="center">No news found for "{topic}"</Typography>
      )}

      <Pagination
        count={totalPages}
        page={page}
        onChange={(e, value) => setPage(value)}
        sx={{ display: "flex", justifyContent: "center", margin: "20px 0" }}
      />
    </Container>
  );
}

export default NewsList;
