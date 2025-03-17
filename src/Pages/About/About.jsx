import T_Navbar from "../../components/NavBar/T_Navbar";
import B_Navbar from "../../components/NavBar/B_Navbar";
import React from "react";

const About = () => {

    const T_Links = [
            { label: "Sign Up", path: "/SignUp_Page"},
            { label: "Profile" , path:"/Profile_Page"},
            { label: "Home", path:"/"},
    ];

    const B_Links =  [
        { path: "/Legal", label: "Legal"},
        { path: "/Contact", label: "Contact Us" },
        { path: "/Help", label: "Help" },
        { path: "/Support", label: "Support" },
    ];
return(
<>
<T_Navbar links = {T_Links}/>

<h1>About Us</h1>
<ul>Welcome to CreatorsanboxReview, the ultimate platform for user-generated content (UGC) built for the creator, by the creator. Our mission is to provide a space where gamers, content creators, and enthusiasts can share, discover, and review in-game creations with ease.
</ul>
<h3>What We Offer</h3>
<ul>🔹 Comprehensive Search & Review System – Easily find and evaluate the best user-generated content, from custom builds to detailed game strategies.
</ul>
<ul>🔹 Seamless Sharing – Share your favorite game content, character builds, and challenges across multiple platforms.
</ul>
<ul>
🔹 Interactive Community – Engage with other creators, leave reviews, and showcase your work in a structured and searchable way.
</ul>
<ul>
🔹 Reward System – Earn badges, free membership months, and exclusive perks by contributing quality content.
</ul>
<ul>
🔹 Scalability & Growth – Our platform is built to expand, supporting new games and deep customization options over time.
</ul>
<h3>Our Vision</h3>
<ul>
We believe that gaming communities thrive on creativity and collaboration. That’s why we’ve built a scalable, modular platform where players can discover, share, and engage like never before. Whether you’re a casual gamer, a dedicated content creator, or a competitive strategist, our goal is to empower you with the tools to showcase your work and connect with others.

Join us as we build the future of in-game UGC discovery. 🚀
</ul>
<B_Navbar links = {B_Links}/>
</>

)


}
export default About;