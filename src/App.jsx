import React, { useState } from "react";
import {
  Container,
  TextField,
  Button,
  Typography,
  Chip,
  Box,
} from "@mui/material";
import NewsList from "./NewsList";
import Footer from "./Footer";
import { ToastContainer } from "react-toastify";

function App() {
  const [topic, setTopic] = useState("AI");
  const [fetchNewsTrigger, setFetchNewsTrigger] = useState(false);

  // Predefined filters
  const filters = ["AI", "Cybersecurity", "Politics", "Business", "Technology"];

  const handleFetchNews = () => {
    setFetchNewsTrigger((prev) => !prev); // Toggle state to trigger fetching
  };

  return (
    <>
      <ToastContainer position="bottom-center" autoClose={3000} theme="dark" />
      <Container
        style={{ marginTop: "20px", textAlign: "center", maxWidth: "600px" }}
      >
        <Typography variant="h4" gutterBottom>
          📢 Project Hodhod
        </Typography>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: 1,
            flexWrap: "wrap",
            marginBottom: 2,
          }}
        >
          {filters.map((filter) => (
            <Chip
              key={filter}
              label={filter}
              onClick={() => setTopic(filter)}
              color={topic === filter ? "primary" : "default"}
              sx={{ cursor: "pointer" }}
            />
          ))}
        </Box>

        <TextField
          label="Search topic (e.g., AI, Politics)"
          variant="outlined"
          fullWidth
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          style={{ marginBottom: "10px" }}
        />

        <Button
          variant="contained"
          color="primary"
          onClick={handleFetchNews}
          style={{ marginBottom: "20px" }}
        >
          Fetch News
        </Button>

        <NewsList topic={topic} fetchTrigger={fetchNewsTrigger} />

        <Footer />
      </Container>
    </>
  );
}

export default App;
