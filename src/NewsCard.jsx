import React from "react";
import { Card, CardContent, Typography, CardMedia } from "@mui/material";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function NewsCard({ article }) {
  return (
    <Card sx={{ marginBottom: 2 }}>
      {article.ai_generated_image && (
        <Carousel showThumbs={false} infiniteLoop>
          <div>
            <CardMedia
              component="img"
              height="200"
              image={article.ai_generated_image}
              alt="AI Generated Image"
            />
          </div>
        </Carousel>
      )}
      <CardContent>
        <Typography variant="h6">{article.title}</Typography>
        <Typography>{article.summary}</Typography>
      </CardContent>
    </Card>
  );
}

export default NewsCard;
