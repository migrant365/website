import React from "react";
import { Helmet } from "react-helmet";

const SEO = ({
  title = "migrant365 - Your Digital Partner for Web Development, Mobile Apps, and SEO",
  description = "Discover top-notch web and mobile development solutions tailored to your business needs. Our expert team specializes in stunning web design, mobile app development, and effective SEO strategies to enhance your online presence and drive growth. Partner with us for innovative, user-friendly solutions that elevate your brand.",
  keywords = "Web Development, Mobile Development, Web Design, Mobile App Development, SEO Services, Digital Marketing, Responsive Web Design, E-commerce Development, UI/UX Design, Custom Software Development, Search Engine Optimization, Social Media Marketing, Content Management Systems (CMS), Website Maintenance, Cross-Platform Development, Cloud Solutions, Web Applications, SEO Strategy, Brand Development, Analytics and Reporting",
  image,
  url,
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      {image && <meta property="og:image" content={image} />}
      {url && <meta property="og:url" content={url} />}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
    </Helmet>
  );
};

export default SEO;
