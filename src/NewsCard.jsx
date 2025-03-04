import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Button,
  Menu,
  MenuItem,
} from "@mui/material";
import { toast } from "react-toastify";

function NewsCard({ article }) {
  const { title, summary, source, ai_generated_image } = article;
  const [anchorEl, setAnchorEl] = React.useState(null);

  // Open share menu
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  // Close share menu
  const handleClose = () => {
    setAnchorEl(null);
  };

  // Copy article text for LinkedIn/Instagram
  const copyArticle = (article) => {
    const text = `📢 ${article.title}\n\n${article.summary}\n\nSource: ${article.source}\n\n🔗 Powered by: Project Hodhod`;

    navigator.clipboard
      .writeText(text)
      .then(() => {
        toast.success("Article copied!");
      })
      .catch(() => {
        toast.error("Failed to copy!");
      });
  };

  // Download AI-generated image
  const downloadImage = async () => {
    if (!ai_generated_image) return;

    try {
      const response = await fetch(ai_generated_image);
      const blob = await response.blob();
      const link = document.createElement("a");

      link.href = URL.createObjectURL(blob);
      link.download = `${title || ""}.png`;

      document.body.appendChild(link);
      link.click();

      // Clean up
      document.body.removeChild(link);
      URL.revokeObjectURL(link.href);

      toast.success("Image downloaded!");
      handleClose();
    } catch (error) {
      toast.error("Failed to download image!");
      console.error("Error downloading image:", error);
    }
  };

  return (
    <Card style={{ marginBottom: "20px", padding: "10px" }}>
      {ai_generated_image && (
        <img
          src={ai_generated_image}
          alt="AI Generated"
          style={{ width: "100%", height: "200px", objectFit: "cover" }}
        />
      )}
      <CardContent>
        <Typography variant="h6">{title}</Typography>
        <Typography>{summary}</Typography>
        <Typography variant="body2">
          <a href={source} target="_blank" rel="noopener noreferrer">
            Read more
          </a>
        </Typography>
        <Typography variant="caption" display="block">
          Powered by: Project Hodhod
        </Typography>

        {/* Share Button */}
        <div style={{ marginTop: "10px" }}>
          <Button variant="contained" color="primary" onClick={handleClick}>
            Share 📤
          </Button>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={copyArticle}>📄 Copy Article</MenuItem>
            {ai_generated_image && (
              <MenuItem onClick={downloadImage}>📷 Download Image</MenuItem>
            )}
          </Menu>
        </div>
      </CardContent>
    </Card>
  );
}

export default NewsCard;
