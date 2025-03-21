// import React from "react";
import BlogCard from "./BlogCard";
import Img1 from "../../assets/blog/blog1.png";
import Img2 from "../../assets/blog/blog2.png";
import Img3 from "../../assets/blog/blog3.png";

const BlogsData = [
  {
    id: 1,
    image: Img3,
    link:"https://medium.com/@sheyasolutionsllc",
    title: "LEARNING FROM HOME; A BETTER OPTION?",
    description:
      "Learning from home, also known as distance learning or homeschooling, has an aged and evolving history. Here are some key Events.",
    author: "Sheya Solutions LLC",
    date: "April 22, 2022",
  },
  {
    id: 2,
    image: Img2,
    link:"https://medium.com/@sheyasolutionsllc",
    title: "Realtime analytics",
    description:
      "“The results have been incredible. With Power Digital, it feels like they’re in our trench, supporting and understanding us. They’re like a partner and mentor in helping us get where we want to be. “The results have been incredible. ",
    author: "Someone",
    date: "April 22, 2022",
  },
  {
    id: 3,
    image: Img1,
    link:"https://medium.com/@sheyasolutionsllc",
    title: "Realtime analytics",
    description:
      "“The results have been incredible. With Power Digital, it feels like they’re in our trench, supporting and understanding us. They’re like a partner and mentor in helping us get where we want to be. “The results have been incredible. ",
    author: "Someone",
    date: "April 22, 2022",
  },
];

const BlogsComp = () => {
  return (
    <>
      <span id="blog"></span>
      <div className="bg-gray-100 dark:bg-gray-900 dark:text-white py-10 pb-14">
        <section data-aos="fade-up" className="container ">
          <h1 className="my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-semibold">
            Our Blogs
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {BlogsData.map((item) => (
              <BlogCard key={item.id} {...item} />
            ))}
          </div>
          <div className="text-center">
            <button className="primary-btn font-extrabold">
              <a
                href="https://medium.com/@sheyasolutionsllc"
                target="_blank"
                rel="noreferrer"
              >
                View All Posts
              </a>
            </button>
          </div>
        </section>
      </div>
    </>
  );
};

export default BlogsComp;
