import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Data } from './Data';
import { Card, CardMedia, CardContent, Typography, Container, Grid } from '@mui/material';

const NewsList = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    axios
      .get(Data)
      .then((response) => setNews(response.data.articles))
      .catch(() => alert('No news found'));
  }, []);

  return (
    <Container maxWidth="lg" style={{ marginTop: '30px' }}>
      <Grid container spacing={3}>
        {news.map((article, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card>
              <CardMedia
                component="img"
                height="200"
                image={article.urlToImage || 'https://via.placeholder.com/300'}
                alt={article.title}
              />
              <CardContent>
                <Typography variant="h6" component="div" gutterBottom>
                  {article.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {article.description || 'No description available'}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default NewsList;
