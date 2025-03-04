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

  // Predefined filters
  const filters = ["AI", "Cybersecurity", "Politics", "Business", "Technology"];

  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} />
      <Container
        style={{ marginTop: "20px", textAlign: "center", maxWidth: "600px" }}
      >
        <Typography variant="h4" gutterBottom>
          📢 Project HodHod
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
          onClick={() => console.log("Fetching news...")}
        >
          Fetch News
        </Button>

        <NewsList topic={topic} />

        <Footer />
      </Container>
    </>
  );
}

export default App;
