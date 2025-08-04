import React from "react";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { Link } from "react-router-dom";

interface tiles1 {
    pic: string;
    alt: string;
    topic: string;
    desc: string;
}


export default function Carousel({pic?, alt?, topic?, desc?} : tiles1) {
    return(
        <Splide
      options={{
        type: 'loop',
        arrows: false,
        perPage: 1,
        gap: '1rem',
        autoplay: true,
      }}
      aria-label="Carousel of commubicable diseases"
      className="mb-10"
    >
        <SplideSlide className="p-5">
          <Link to={"/info/hepatitis_b"}>
            <img src={`/img/${pic}`} alt={`/img/${alt}`} className="w-full h-60 m-auto object-cover" />
            <h3 className="my-3">Hepatitis B</h3>
            <p className="line-clamp-3">{desc}</p>
          </Link>
        </SplideSlide>
        <SplideSlide className="p-5">
          <Link to={"/info/hiv"}>
            <img src={`/img/${pic}`} alt={`/img/${alt}`} className="w-full h-60 m-auto object-cover" />
            <h3 className="my-3">HIV</h3>
            <p className="line-clamp-3">{desc}</p>
          </Link>
        </SplideSlide>
        <SplideSlide className="p-5">
          <Link to={"/info/malaria"}>
            <img src={`/img/${pic}`} alt={`/img/${alt}`} className="w-full h-60 m-auto object-cover" />
            <h3 className="my-3">Malaria</h3>
            <p className="line-clamp-3">{desc}</p>
          </Link>
        </SplideSlide>
        <SplideSlide className="p-5">
          <Link to={"/overviewpage"}>
            <img src={`/img/${pic}`} alt={`/img/${alt}`} className="w-full h-60 m-auto object-cover" />
              <h3 className="my-3">More</h3>
              <p className="line-clamp-3">{desc}</p>
          </Link>
        </SplideSlide>
        </Splide>
    )

}
