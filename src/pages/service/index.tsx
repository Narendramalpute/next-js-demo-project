import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import styled from "@emotion/styled";
import Layout from "../../layout/Layout";

const About = () => {
  useEffect(() => {
    handleGetProductData();
  }, []);

  const [productData, setProoductData] = useState<any>([]);

  const handleGetProductData = async () => {
    try {
      const response = await axios.get<any>(
        "https://hp-api.onrender.com/api/characters"
      );
      setProoductData(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };
  
  const Container = styled.div`
  display:grid;
  grid-template-columns: auto auto auto;
  `;

  const Card = styled.div`
  border: 1px solid black;
  height: 350px;
  width: 380px;
  padding: 20px;
  margin: 10px;
  `;
  return (
    <Layout>
    <Container>
      
        {
          productData.map((item: any) => {
            return (
            
              <Card>
                <CardMedia
                  sx={{ height: 140 }}
                  image={item.image}
                  title="green iguana"
                />
                
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {item.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with
                  </Typography>
                </CardContent>
                </Card>
            
            );
          })}
     
    </Container>
    </Layout>
  );
};

export default About;
