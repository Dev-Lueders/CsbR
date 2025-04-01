

import "../../components/components_styles.css"
import T_Navbar from "../../components/Atoms/NavBar/T_Navbar";
import B_Navbar from "../../components/Atoms/NavBar/B_Navbar";
import Main_Container from "../../components/Atoms/Main_Content/Main_Container";
import Scroll_Bar from "../../components/Atoms/Scroll_Bar/Scroll_Bar";
import React from "react";

const About = () => {

    const T_Links = [
            { label: "Sign Up", path: "/signup/SignUp_Page"},
            { label: "Profile" , path:"/client/Profile_Page"},
            { label: "Home", path:"/"},
    ];

    const B_Links =  [
        { path: "/info/Legal", label: "Legal"},
        { path: "/info/Contact", label: "Contact Us" },
        { path: "/info/Help", label: "Help" },
        { path: "/info/Support", label: "Support" },
    ];
return (
  <>
        <T_Navbar links={T_Links}/>
    <Scroll_Bar
      height="80vh"
      width="100%"
      gridPosition={{ col: "1/38", row: "4/38"}}
    >
      <Main_Container
        className="Main_Content"
        style={{ gridColumn: 1 / 38, gridRow: 4 / 38 }}
      >
        <h1>About Us</h1>
        <ul>
          Welcome to CreatorsanboxReview, the ultimate platform for
          user-generated content (UGC) built for the creator, by the creator.
          Our mission is to provide a space where gamers, content creators, and
          enthusiasts can share, discover, and review in-game creations with
          ease.
        </ul>
        <h3>What We Offer</h3>
        <ul>
          🔹 Comprehensive Search & Review System – Easily find and evaluate the
          best user-generated content.
        </ul>
        <ul>
          🔹 Seamless Sharing – Share your favorite game content, character
          builds, and challenges across multiple platforms.
        </ul>
        <ul>
          🔹 Interactive Community – Engage with other creators, leave reviews,
          and showcase your work in a structured and searchable way.
        </ul>
        <ul>
          🔹 Reward System – Earn badges, free membership months, and exclusive
          perks by contributing quality content.
        </ul>
        <ul>
          🔹 Scalability & Growth – Our platform is built to expand, supporting
          new games and deep customization options over time.
        </ul>
        <h3>Our Vision</h3>
        <ul>
          We believe that gaming communities thrive on creativity and
          collaboration. That’s why we’ve built a scalable, modular platform
          where players can discover, share, and engage like never before.
          Whether you’re a casual gamer, a dedicated content creator, or a
          competitive strategist, our goal is to empower you with the tools to
          showcase your work and connect with others. Join us as we build the
          future of in-game UGC discovery. 🚀
        </ul>
      </Main_Container>
    </Scroll_Bar>
    <B_Navbar links={B_Links} />
  </>
);


}
export default About;