import React from "react";
import Slider from "react-slick";
import { FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const reviews = [
  {
    name: "Ankit Bose",
    date: "28 May 2025",
    text: "Good stay at this place",
    rating: 5,
  },
  {
    name: "Akarshan Shukla",
    date: "28 May 2025",
    text: "The experience was lovely, staff very helpful.",
    rating: 5,
  },
  {
    name: "Swagat Behera",
    date: "27 May 2025",
    text: "Very fantastic services for this hotel. Staffs were polite and helpful.",
    rating: 5,
  },
  {
    name: "Tenzin Dhongag",
    date: "27 May 2025",
    text: "Had a wonderful experience. Staff were professional and friendly.",
    rating: 5,
  },
  {
    name: "Sonam Dhargyal",
    date: "27 May 2025",
    text: "Exceptional stay. The service and hospitality were amazing.",
    rating: 5,
  },
];

// Custom arrows
const NextArrow = ({ onClick }) => (
  <button
    className="absolute right-0 top-1/2 -translate-y-1/2 bg-white rounded-full shadow p-2 hover:bg-gray-100 z-10"
    onClick={onClick}
  >
    <FaChevronRight />
  </button>
);

const PrevArrow = ({ onClick }) => (
  <button
    className="absolute left-0 top-1/2 -translate-y-1/2 bg-white rounded-full shadow p-2 hover:bg-gray-100 z-10"
    onClick={onClick}
  >
    <FaChevronLeft />
  </button>
);

export default function TestimonialsCarousel() {
  const settings = {
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "40px",
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2, centerPadding: "30px" },
      },
      { breakpoint: 640, settings: { slidesToShow: 1, centerPadding: "20px" } },
    ],
  };

  return (
    <Slider {...settings}>
      {reviews.map((review, idx) => (
        <div key={idx} className="px-2">
          <div className="bg-white/80 rounded-xl shadow p-6 min-w-[250px] flex flex-col">
            <h4 className="font-semibold">{review.name}</h4>
            <p className="text-xs text-gray-500">{review.date}</p>
            <div className="flex my-2">
              {Array(review.rating)
                .fill()
                .map((_, i) => (
                  <FaStar key={i} className="text-yellow-400 text-sm" />
                ))}
            </div>
            <p className="text-gray-700 text-sm">{review.text}</p>
          </div>
        </div>
      ))}
    </Slider>
  );
}
