 
import "./App.css";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Blogs from "./Components/Blogs";
import PageNotFound from "./Components/PageNotFound";
import Menu from "./Components/Menu"; 
import Layout from "./Layout";
import BlogInner from "./Components/BlogInner";
import React from "react";
// import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
// import {
//   RouterProvider,
//   Route,useLocation,
//   createBrowserRouter,
//   createRoutesFromElements,
// } from "react-router-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";


// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//     children: [
//       {
//         path: "",
//         element: <Home />,
//       },
//       {
//         path: "about",
//         element: <About />,
//       },
//       {
//         path: "menu",
//         element: <Menu />,
//       },
//       {
//         path: "blogs",
//         element: <Blogs />,
//       },
//       {
//         path: "bloginner",
//         element: <BlogInner />,
//       },
//       {
//         path: "contact",
//         element: <Contact />,
//       },
//     ],
//   },
// ]);

// function App() {
//   const router = createBrowserRouter(
//     createRoutesFromElements(
//       <Route exact path="/" element={<Layout />}>
//         <Route exact path="" element={<Home />} />
//         <Route exact path="about" element={<About />} />
//         <Route exact path="menu" element={<Menu />} />
//         <Route exact path="blogs" element={<Blogs />} />
//         <Route exact path="contact" element={<Contact />} />
//         <Route exact path="*" element={<PageNotFound />} />
//         <Route exact path="bloginner/:blogid" element={<BlogInner />} />
//       </Route>
//     )
//   );
const App = () => {
  return (
    <BrowserRouter basename="/samfoodies">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="menu" element={<Menu />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<PageNotFound />} />
          <Route path="bloginner/:blogid" element={<BlogInner />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};


export default App;
