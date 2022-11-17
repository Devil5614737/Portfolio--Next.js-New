
import React from "react";
import { Card } from "./Card";
import { Container } from "./Container";



export const Projects = () => {


  return (
    <section id="projects" className="p-2 mt-[25rem]">
      <Container>
        <header>
          <h2 className="text-[3rem] font-bold mb-[.6rem]">Projects</h2>
          <p className="text-[1.8rem] text-[#5A5A5A]">
            Here are some of my projects
          </p>
        </header>

        <div 
      
        className="projects mt-[5rem] grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card
            title="Netflix Clone"
            src="/netflix clone 3.PNG"
            desc="Built with Next.js , Typescript, Firebase and Tailwind"
            tag="Clone"
            link="https://netflix-clone-next-js-2.vercel.app/login"
            code='https://github.com/Devil5614737/Netflix-Clone-Next.js'
          />
          <Card
            title="FullStack Blog App"
            src="/fullstack-blog.PNG"
            desc="Built with Next.js ,Node.js ,MongoDb and Bootstrap"
            tag="Web app"
            link="https://blog-app-ashen-one.vercel.app/"
            code='https://github.com/Devil5614737/BlogApp'
          />
          <Card
            title="Shopping Cart"
            src="/shopping cart.PNG"
            desc="A shopping cart built with React ,Typescript and Bootstrap"
            tag="Web app"
            link="https://shopping-cart-with-typescript-eta.vercel.app/"
            code='https://github.com/Devil5614737/Shopping-Cart-with-typescript'
          />
          <Card
            title="Todos App"
            src="/Todoapp2.PNG"
            desc="Built With React and Typescript"
            tag="Web app"
            link="https://todos-app-with-typescript-2.vercel.app/"
            code='https://github.com/Devil5614737/TodoAppWithTypescript2'
          />
          <Card
            title="Instagram Clone"
            src="/instagram.PNG"
            desc="Built with Reactjs, Firebase and Material UI"
            tag="Clone"
            link="https://instagram-clone-react-firebase.vercel.app/"
            code='https://github.com/Devil5614737/InstagramCloneReact-Firebase'
          />
        </div>
      </Container>
    </section>
  );
};
