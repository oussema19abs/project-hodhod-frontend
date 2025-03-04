import React, { useState, useEffect } from "react";
import {
  Container,
  Pagination,
  CircularProgress,
  Typography,
} from "@mui/material";
import NewsCard from "./NewsCard";

const API_URL = "https://project-hodhod-backend.onrender.com/news"; // Replace with actual backend

function NewsList({ topic }) {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const articlesPerPage = 5;

  useEffect(() => {
    setLoading(true);
    fetch(`${API_URL}/${topic}`)
      .then((res) => res.json())
      .then((data) => {
        setArticles(data.news || []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [topic]);

  // Calculate total pages dynamically
  const totalPages = Math.ceil(articles.length / articlesPerPage);

  // Get current page articles
  const paginatedArticles = articles.slice(
    (page - 1) * articlesPerPage,
    page * articlesPerPage
  );

  return (
    <Container style={{ marginTop: "20px" }}>
      {loading ? (
        <CircularProgress sx={{ display: "block", margin: "20px auto" }} />
      ) : paginatedArticles.length > 0 ? (
        paginatedArticles.map((article, index) => (
          <NewsCard key={index} article={article} />
        ))
      ) : (
        <Typography textAlign="center">No news found for "{topic}"</Typography>
      )}

      {totalPages > 1 && (
        <Pagination
          count={totalPages}
          page={page}
          onChange={(e, value) => setPage(value)}
          sx={{ display: "flex", justifyContent: "center", margin: "20px 0" }}
        />
      )}
    </Container>
  );
}

export default NewsList;
