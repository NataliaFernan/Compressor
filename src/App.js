import './App.css';
import axios from 'axios';
import Compressor from 'compressorjs';
import { useState } from 'react';
import React from 'react';
import { Button, Container, makeStyles, Typography } from '@material-ui/core';



const useStyles = makeStyles((theme) => ({
  btn:{
    backgroundColor: '#000'
  },
  root:{
    display: 'flex',
    alignContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    placeContent: 'center'
  },
  icon:{
    fontSize:'90px !important',
    color:'#000'
  }
}))

function getURL(){
  var url = App.getElementById("file");
  file.click()
}

 function App() {

  const styles = useStyles();
  const [imagemNova, setNovaimagem] = useState(null);
  const [imagem, setImagem] = useState(null);


   new Compressor (imagem, {
     width:1000,
     height:1000,

     success(result){
       setNovaimagem(result)
     },
     error(err){
       console.log(err.message);
     },
   });
 
  return (

    <div className="App">

        <input type= "file" id="file" onChange={e => setImagem(e.target.files[0])} accept="Image/*"/>

        {imagemNova && (
          <div>
            <Typography variant="h5">
              Resultado
            </Typography>
            <Button color="primary" variant='contained' href={URL.createObjectURL(imagemNova)} download> Download da Imagem</Button>
          </div>
        )}
        <Container className={styles.root}>
          <br/>
          {
            imagemNova && (
              <div>
                <img
                src={URL.createObjectURL(imagemNova)}
                alt="Thumb"
                />
              </div>
            )
          }
        </Container>
    </div>
    );
  }
 export default App;
