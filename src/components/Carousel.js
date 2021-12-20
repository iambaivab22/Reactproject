import React,{useState,useEffect} from "react";
import { makeStyles } from "@material-ui/core";
import { TrendingCoins } from "../Data/Config.js";
import { CryptoState } from "./CryptoContext";
import AliceCarousel from "react-alice-carousel";
import {Link} from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
    carousel: {
      height: "50%",
      display: "flex",
      alignItems: "center",
    },
    carouselItem: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      cursor: "pointer",
      textTransform: "uppercase",
      color: "white",
      textDecoration:"none",
    },

    })); 

export function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}


const Carousel = () => {
const classes=useStyles();
	const {currency,symbol}=CryptoState();
	const [trending,settrending]=useState([]);

	
	

     
     


useEffect(()=>{
	const fetchapi=async()=>{
		const response=await fetch(TrendingCoins(currency));
          const resjson=await response.json();

       settrending(resjson);
   };
   fetchapi();
    
	},[currency]);
console.log(trending);

const items=trending.map((coin)=>{
	let profit=coin.price_change_percentage_24h>=0;
	return(
	
		<Link className={classes.carouselItem} to={`/coins/${coin.id}`}>
        <img
          src={coin?.image}
          alt={coin.name}
          height="80"
          style={{ marginBottom: 10 }}
        />
        <span>
          {coin?.symbol}
          &nbsp;
          <span
            style={{
              color: profit > 0 ? "rgb(14, 203, 129)" : "red",
              fontWeight: 500,

            }}
          >
            {profit && "+"}
            {coin?.price_change_percentage_24h?.toFixed(2)}%
          </span>
        </span>
        <span style={{ fontSize: 22, fontWeight: 500 }}>
          {symbol} {numberWithCommas(coin?.current_price.toFixed(2))}
        </span>
      </Link>
		
		);
});
const responsive={
      0: {
          items: 1,
      },
      512:{
      	items:4,
      },
      
    };




  return (

       <>  
      <div className={classes.carousel}>
      <AliceCarousel
      mouseTracking
      touchTracking
      autoPlayInterval={1000}
      animationDuration={1500}
      disableDotsControls
      responsive={responsive}
      autoPlay
      items={items}>
      </AliceCarousel>
      </div>
      </>
    
  );
  }


export default Carousel;
