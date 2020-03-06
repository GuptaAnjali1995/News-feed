import React from "react";
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Card from '../Card/Card';
//importing Custom Hooks
import {useFetch} from '../hooks/Fetch';


export default function Container1() {
     
  const res = useFetch("http://newsapi.org/v2/everything?q=bitcoin&from=2020-01-29&sortBy=publishedAt&apiKey=a0e5e3b2bc93487d8330e96f3b853e66", {});
  if (!res.response) {
    return <div>Loading...</div>
  }

  const data = res.response;

  return (

    <Container maxWidth="lg"   style={{marginTop:20}}>

     <Grid container spacing={1}>
      {data.articles.map((article, index) => (      
        <Grid item xs={12} md={4} lg={4}>
          <div >
          <Card key={index} article = {article}/>
          </div>
        </Grid>
      ))}
     </Grid>
</Container>    
  );
}