import "./styles.css";
import { useState } from "react";
export default function App() {
  const images = [
    {
      url:
        "https://cdn.pixabay.com/photo/2016/05/01/21/20/earth-1365995_1280.jpg",
      cption: "Galaxy"
    },
    {
      url:
        "https://cdn.pixabay.com/photo/2016/11/29/05/45/astronomy-1867616_1280.jpg",
      caption: "Sky"
    },
    {
      url:
        "https://cdn.pixabay.com/photo/2016/07/02/12/21/eclipse-1492818_1280.jpg",
      caption: "Sun"
    },
    {
      url:
        "https://cdn.pixabay.com/photo/2012/08/25/22/22/saturn-54999_1280.jpg",
      caption: "Planet"
    }
  ];
  return (
    <div className="App">
      <SlideShow images={images} />
    </div>
  );
}

const SlideShow = ({ images }) => {
  const [current, setCurrent] = useState(0);
  const handlePrev = () => {
    if (current > 0) {
      setCurrent(current - 1);
    } else {
      setCurrent(images.length - 1);
    }
  };
  const handleNext = () => {
    if (current < images.length - 1) {
      setCurrent(current + 1);
    } else {
      setCurrent(0);
    }
  };
  return (
    <>
      <div className="slideShow">
        {images.map((img, i) => {
          return <Slide {...img} key={i} active={i === current} />;
        })}
      </div>
      <div className="dot_container">
        {images.map((_, i) => {
          return (
            <div
              className={`dot ${i === current ? "active" : ""}`}
              key={i}
              onClick={() => setCurrent(i)}
            />
          );
        })}
      </div>
      <div className=" navigation prev" onClick={handlePrev}>
        &lt;
      </div>
      <div className="navigation next" onClick={handleNext}>
        &gt;
      </div>
    </>
  );
};

const Slide = ({ url, caption, active }) => {
  return (
    <div className={`slide ${active ? "active" : ""}`}>
      <img src={url} alt={caption} />
      <span>{caption}</span>
    </div>
  );
};
