import React from "react";
import T_Navbar from "../../components/NavBar/T_Navbar";
import B_Navbar from "../../components/NavBar/B_Navbar";

const Help = () => {
const T_Links = [
    { label: "Home", path: "/" },
    { label: "About", path: "/About" },
    { label: "Log In", path:"/Login_Page"}
];

const B_Links = [
    { path: "/SignUp_Page", label: "Signup" },
    { path: "/Contact", label: "Contact Us" },
    { path: "/About", label: "About" },
    { path: "/Support", label: "Support" },
    { path: "/Legal", label: "Legal" },
];

    return(
    <>
        <T_Navbar links = {T_Links}/>
        <h3>The Rustic</h3>
<ul>
  <li>The Rustic refers to the type of design or aesthetic found in certain golf courses. These courses are inspired by natural, rural landscapes, often featuring rugged, earthy elements such as natural vegetation, rustic-style clubhouses, and undisturbed surroundings that give a more country or countryside vibe. This design contains open fields, rolling meadows, and a peaceful, farm-like atmosphere, with minimal urban development. The landscape might feature gentle hills, trees, and contrasts with more manicured, urban-style courses in the game.</li>
</ul>

<h3>The Country</h3>
<ul>
  <li>The Country theme in designer mode refers to a rural, pastoral aesthetic. It typically includes elements that evoke the tranquility of countryside settings. It gives players the opportunity to design courses that reflect a more traditional and natural environment, ideal for laid-back, scenic golf experiences.</li>
</ul>

<h3>The Highland</h3>
<ul>
  <li>The Highland represents a landscape inspired by the Scottish Highlands or other rugged, elevated terrains. It features rolling hills, rugged cliffs, and expansive open spaces, often with dramatic elevation changes. The theme evokes the traditional links-style golf courses found in Scotland, with minimal trees and a focus on natural, windswept terrain. The setting gives a sense of wild beauty, perfect for challenging, wind-swept courses with open views and natural hazards like hills and rough terrain.</li>
</ul>

<h3>The Tropical</h3>
<ul>
  <li>The Tropical theme represents lush, vibrant environments typically found in tropical regions. This theme includes features like palm trees, beaches, dense vegetation, and bodies of water. The overall atmosphere is warm, exotic, and often feels like a coastal paradise. The courses designed with this theme evoke a serene, island-like setting, ideal for those who enjoy scenic views, bright green landscapes, and warm, breezy conditions.</li>
</ul>

<h3>The Delta</h3>
<ul>
  <li>The Delta theme represents marshy, wetland environments. This theme includes rivers, swamps, and areas with slow-moving water channels. The terrain is typically flat but interspersed with water hazards, tall grasses, and other vegetation found in delta regions. It evokes a natural, swampy landscape where water management becomes a significant challenge for course design, creating unique golfing obstacles.</li>
</ul>

<h3>The Autumn</h3>
<ul>
  <li>The Autumn represents a landscape filled with vibrant fall colors. Trees and foliage are in shades of orange, red, yellow, and brown, evoking the beauty of the autumn season. The terrain often includes a mix of trees with fallen leaves scattered across the ground, creating a cozy, crisp atmosphere. This theme captures the essence of late-year golf, with cool, breezy conditions and scenic, seasonal surroundings ideal for a more relaxed and picturesque golfing experience.</li>
</ul>

<h3>The Boreal</h3>
<ul>
  <li>The Boreal represents cold, forested environments typical of northern regions. This theme includes dense evergreen forests, such as pine and spruce trees, with cool, crisp air. The terrain often feels remote and natural, with a focus on rugged, untamed wilderness. The setting evokes a sense of being deep in a northern forest, perfect for designing courses with challenging, natural obstacles like thick woods and uneven terrain, providing a serene but formidable golfing experience.</li>
</ul>

<h3>The Winter</h3>
<ul>
  <li>The Winter represents a snow-covered, icy landscape, giving courses a cold, frozen look. The ground is blanketed in snow, with trees and other features often covered in frost. Water hazards may be frozen over, creating unique challenges for course design. This theme evokes a serene, wintry atmosphere where snowdrifts and slippery surfaces add to the difficulty of play, making it feel like a winter wonderland perfect for a more seasonal and frosty golfing experience.</li>
</ul>

<h3>The Steppe</h3>
<ul>
  <li>The Steppe represents wide, open grasslands characterized by minimal vegetation and flat terrain. This landscape typically features dry, windy conditions and limited trees, giving it a vast, expansive feel. The Steppe theme can create courses that challenge players with long sightlines and minimal cover, emphasizing strategic play in a more barren, natural setting. The open spaces and rolling hills may also provide unique opportunities for course design and shot shaping.</li>
</ul>

<h3>The Desert</h3>
<ul>
  <li>The Desert represents arid, sandy landscapes typical of desert environments. This theme features dry, rugged terrain with sparse vegetation, including cacti and rocky outcrops. The courses designed under this theme often include sandy waste areas and unique geological formations, creating challenges such as extreme heat and wind conditions. The stark beauty of the desert provides a dramatic backdrop for golfing, emphasizing strategy and precision in play against the backdrop of a harsh yet captivating environment.</li>
</ul>

<h3>The Harvest</h3>
<ul>
  <li>The Harvest evokes agricultural landscapes during the harvest season. This theme features golden fields ready for harvest, with crops like wheat or corn, and often includes rustic farm elements. The environment creates a warm, nostalgic atmosphere that highlights the bounty of the season. Courses designed with this theme may have unique challenges, such as navigating through fields and avoiding farm-related obstacles, while providing a picturesque setting ideal for a relaxed golfing experience.</li>
</ul>

<h3>The Swiss</h3>
<ul>
  <li>The Swiss represents an alpine landscape characterized by stunning mountains, green valleys, and picturesque scenery reminiscent of Switzerland. This theme features snow-capped peaks, lush meadows, and often charming chalets or traditional Swiss structures. The Swiss theme creates a serene and breathtaking golfing environment, ideal for courses that incorporate elevation changes and scenic views, enhancing the overall golfing experience with a beautiful, mountainous backdrop.</li>
</ul>

<h3>HCP</h3>
<ul>
  <li>HCP stands for Handicap or Handicap Index. It is a numerical measure of a golfers potential ability, allowing players of different skill levels to compete fairly. A lower handicap indicates a better player. The handicap is calculated based on the golfers past performances, considering the difficulty of the courses played. It helps to level the playing field by adjusting scores so that golfers can compete against one another, regardless of their skill levels.</li>
</ul>

<h3>TGC</h3>
<ul>
  <li>In PGA 2K23, TGC refers to TGCTours, a prominent online community for competitive golf gaming. It allows players to participate in organized tournaments and events using the games course design tools. TGCTours features a robust system for leaderboard tracking and events across various platforms, creating a competitive environment for players to showcase their skills and course designs.</li>
</ul>

<h3>Playthrough Link</h3>
<ul>
  <li>This is where you can copy and paste a link of a playthrough of the course you are adding to the database.</li>
</ul>

<h3>Course Notes</h3>
<ul>
  <li>These are notes that the designer would like for you to know about the course. Could be a back story to the course, or why it was created. Or tips for particular holes, hazards, or Easy shots.</li>
</ul>

<h3>Course Reviews</h3>
<ul>
  <li>This section will be for courses that got reviewed by other people. What did they say about this course?</li>
</ul>

        <B_Navbar links = {B_Links}/>

    </>
    )
};
 export default Help;