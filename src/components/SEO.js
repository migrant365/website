import React from "react";
import { Helmet } from "react-helmet";

const SEO = ({
  title = "migrant365 - Your Digital Partner for Web Development, Mobile Apps, and SEO",
  description = "Discover top-notch web and mobile development solutions tailored to your business needs. Our expert team specializes in stunning web design, mobile app development, and effective SEO strategies to enhance your online presence and drive growth. Partner with us for innovative, user-friendly solutions that elevate your brand.",
  keywords = "migrant, migrant 365, migrant365, Web Development, Mobile Development, Web Design, Mobile App Development, SEO Services, Digital Marketing, Responsive Web Design, E-commerce Development, UI/UX Design, Custom Software Development, Search Engine Optimization, Social Media Marketing, Content Management Systems (CMS), Website Maintenance, Cross-Platform Development, Cloud Solutions, Web Applications, SEO Strategy, Brand Development, Analytics and Reporting",
  image = "https://example.com/default-image.jpg", // Fallback image
  url = "https://migrant365.org",
}) => {
  return (
    <Helmet>
      {/* General Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      {/* Open Graph Meta Tags for Facebook and other platforms */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {/* <meta property="og:image" content={image} /> */}
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {/* <meta name="twitter:image" content={image} /> */}
      <meta name="twitter:url" content={url} />

      {/* Optional Meta Tags */}
      <meta name="twitter:site" content="@your_twitter_handle" />
      <meta name="twitter:creator" content="@creator_handle" />
    </Helmet>
  );
};

export default SEO;
