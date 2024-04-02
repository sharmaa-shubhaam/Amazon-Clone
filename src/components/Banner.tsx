import React from "react";
import { Carousel } from "react-responsive-carousel";

export default function Banner(): React.JSX.Element {
   const carousel: (string | undefined)[] = [
      "https://m.media-amazon.com/images/I/91g++9eD5vL._SX3000_.jpg",
      "https://m.media-amazon.com/images/I/71cD-VDL-rL._SX3000_.jpg",
      "https://m.media-amazon.com/images/I/71Iljj5MJUL._SX3000_.jpg",
      "https://m.media-amazon.com/images/I/81Ba0WWAMlL._SX3000_.png",
      "https://m.media-amazon.com/images/I/71leVQ9M6+L._SX3000_.jpg",
   ];

   return (
      <div className="relative -z-10">
         <Carousel infiniteLoop={true} autoPlay={true} showThumbs={false}>
            {carousel.map((src, key) => {
               return (
                  <div key={key}>
                     <figure className="w-full">
                        <img src={src} alt="carousel-image" className="w-full object-fill" />
                     </figure>
                  </div>
               );
            })}
         </Carousel>
         <div className="absolute bottom-0 w-full bg-gradient-to-t from-[var(--white)] h-[80%]" />
      </div>
   );
}
