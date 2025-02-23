import React from "react";
import B_Navbar from "../../components/NavBar/B_Navbar";


const ReadMe = () => {
    
    const B_Links = [

        {path:"/Help", label : "Help"},
        {path:"/Contact", label : "Contact Us"},
        {path:"/", label:"Home"},
        {path:"/about",label:"About Us"},

    ];
    return(
    <>

    <p>
        <ul>
  <h1>  Webpage Project for UGC User Generated Content from Games </h1>
This repository is for a webpage designed to provide a platform for users to create, share, and interact with user-generated content UGC from various games like Gran Turismo 7, PGA Tour 2K23 & 2K25, Lego 2K Drive, and many others. The goal is to provide a highly modular system that allows users to easily browse, add, and view content specific to the games they enjoy.
</ul>

<h5>Features</h5>
<ul>
React, Redux, Bootstrap, and Axios for building and managing the user interface and interactions.
</ul>
<h5>Backend</h5>
<ul>
    node.js
</ul>
<h5>Content Storage</h5>
<ul>
    Will be using MySQL and for the initial data is being compiled with Google Sheets, a function of converting from Google Sheets to MySQL will be required
</ul>
<h5>Components:</h5>
<ul>
 Developed using a modular approach, with reusable components e.g., buttons, checkboxes, dropdowns, inputs placed into different sections and styles to maintain the structure and ensure easy customization.
</ul>
<h5>Search Functionality:</h5>
<ul> 
    A search function will be implemented that catalogues the most used search words. These will be indexed for quicker search results and will make the platform more responsive.
</ul>

<h5>Monetization System:</h5> 
<ul>
    Includes badges, memberships, and rewards for content creation e.g., tutorial videos reaching certain thumbs up numbers.
</ul>

<h5>Badge System:</h5> 
<ul>
    Users earn badges based on content achievements, such as the first tutorial to hit 1000 thumbs up.
</ul>

<h5>Sharing Features:</h5>
<ul>
    Allows users to share course cards, reviews, and tutorials across platforms. When a user creates a review, they can receive an email with the review, which they can share with others.
</ul>

<ul>
<h4>Directory Structure</h4>
</ul>

<ul>
C:.
</ul>
<ul>App.css</ul>
<ul>App.jsx</ul>
<ul>index.css</ul>
<ul>main.jsx</ul>
<ul>├───assets</ul>
<ul>│       react.svg</ul>
<ul>├───components</ul>
<ul>│   │   components_styles.css</ul>
<ul>│   │   Lock.jsx</ul>
<ul>│   ├───Buttons</ul>
<ul>│   │       Button.jsx</ul>
<ul>│   │       Radio.jsx</ul>
<ul>│   ├───Check_Box</ul>
<ul>│   │       Check_Box.jsx</ul>
<ul>│   ├───Drop_Down</ul>
<ul>│   │       Drop_Down.jsx</ul>
<ul>│   │       Drop_Down_Searchable.jsx</ul>
<ul>│   ├───Input_Container</ul>
<ul>│   │       Text_Box.jsx</ul>
<ul>│   ├───Main_Content</ul>
<ul>│   │       Main_Content.jsx</ul>
<ul>│   ├───Media_Content</ul>
<ul>│   │   │   Media_Container.jsx</ul>
<ul>│   │   └───video_comp</ul>
<ul>│   │           video_content.jsx</ul>
<ul>│   │           video_list.jsx</ul>
<ul>│   │           video_player.jsx</ul>
<ul>│   ├───NavBar</ul>
<ul>│   │       B_Navbar.jsx</ul>
<ul>│   │       L_Navbar.jsx</ul>
<ul>│   │       T_Navbar.jsx</ul>
<ul>│   ├───Pagination</ul>
<ul>│   │       pagination_component.jsx</ul>
<ul>│   ├───Scrolling_Banner</ul>
<ul>│   │       Scrolling_Banner.jsx</ul>
<ul>│   ├───Scroll_Bar</ul>
<ul>│   │       Scroll_Bar.jsx</ul>
<ul>│   ├───Stats_Content</ul>
<ul>│   │       Stats_Container.jsx</ul>
<ul>│   └───World_Map</ul>
<ul>│           World_Map.jsx</ul>
<ul>├───Games</ul>
<ul>│   ├───GranTurismo</ul>
<ul>│   │   ├───GT6</ul>
<ul>│   │   │   ├───Adding Content</ul>
<ul>│   │   │   │   ├───Content</ul>
<ul>│   │   │   │   │   ├───Custom_Form</ul>
<ul>│   │   │   │   │   ├───Long_Form</ul>
<ul>│   │   │   │   │   └───Short_Form</ul>
<ul>│   │   │   │   ├───Reviews</ul>
<ul>│   │   │   │   │   ├───Custom_Form</ul>
<ul>│   │   │   │   │   ├───Long_Form</ul>
<ul>│   │   │   │   │   └───Short_Form</ul>
<ul>│   │   │   │   └───Tutorials</ul>
<ul>│   │   │   └───Search</ul>
<ul>│   │   │       ├───Basic</ul>
<ul>│   │   │       ├───Members</ul>
<ul>│   │   │       └───Search_Results</ul>
<ul>│   └───Other games</ul>
<ul>│       └───Search and Content Specifics</ul>
<ul>├───redux</ul>
<ul>│   ├───Action</ul>
<ul>│   └───Reducers</ul>
<ul>└───Pages</ul>
<h4>Search Functionality</h4>
<ul>
    <li>The search function allows users to look for content by specific keywords.</li>
    <li>It tracks and indexes the most frequently used search terms for quicker search results.</li>
    <li>Ensures that users get more efficient and faster responses when performing searches.</li>
</ul>

<h4>Key Features of the Search Function:</h4>
<ul>
    <li><strong>Search History Tracking:</strong> Catalogs the most frequently searched terms.</li>
    <li><strong>Indexing:</strong> Indexed search terms will be loaded to optimize query times.</li>
    <li><strong>Results Optimization:</strong> With indexed words, users can find their desired content faster.</li>
</ul>

<h4>Monetization System</h4>
<ul>
    <li>The site offers a monetization system with badges, special rewards, and content-sharing features.</li>
</ul>

<h4>Examples:</h4>
<ul>
    <li><strong>Tutorial Videos:</strong> Achieving 1000 thumbs up on your first tutorial earns you a badge.</li>
    <li><strong>Membership Rewards:</strong> Users who create high-quality tutorials can receive rewards like free membership for reaching certain milestones.</li>
</ul>

<h4>User-Generated Content (UGC)</h4>
<ul>
    <li>This project focuses on showcasing and sharing in-game created content.</li>
</ul>

<h4>Examples:</h4>
<ul>
    <li><strong>Forms:</strong> Short, Long, and Custom Forms for adding content (such as tutorials, reviews, etc.).</li>
    <li><strong>Reviews:</strong> Users can submit custom, long, or short reviews for content related to various games.</li>
    <li><strong>Content Uploading:</strong> Users can upload their content in various categories, categorized per game (e.g., GT7, PGATour2K23 & 2K25, Lego 2K Drive).</li>
</ul>

<h4>User Roles and Permissions</h4>

<h4>Flagging System</h4>
<ul>
    <li>A flagging system allows users to report inappropriate content.</li>
    <li>Users have different access levels to flag, edit, and delete content based on their role.</li>
</ul>

<h4>User Roles:</h4>
<ul>
    <li><strong>Guest:</strong> Can browse content but cannot interact (flag, edit, delete, etc.).</li>
    <li><strong>User:</strong> Can create content, comment, and flag content but cannot delete or edit others' content.</li>
    <li><strong>Moderator:</strong> Can flag content, delete inappropriate content, and moderate user interactions.</li>
    <li><strong>Admin:</strong> Can manage all aspects of the site, including managing users, moderators, and content.</li>
    <li><strong>Master:</strong> Has full control over settings, content, and user roles, including backend editing.</li>
</ul>

<h4>Permissions Overview:</h4>

<h4>Flagging:</h4>
<ul>
    <li>Users can flag content as inappropriate but cannot delete or edit.</li>
    <li>Moderators can review flagged content and take action to delete or resolve reports.</li>
    <li>Admins and Masters have full control over flagged content, including permanent removal.</li>
</ul>

<h4>Editing:</h4>
<ul>
    <li>Users can edit their own content but not others'.</li>
    <li>Moderators can edit flagged content if necessary (e.g., removing offensive language).</li>
    <li>Admins can edit any content across the platform and resolve issues directly.</li>
    <li>Masters have final control to edit all content.</li>
</ul>

<h4>Deleting:</h4>
<ul>
    <li>Users cannot delete other users' content.</li>
    <li>Moderators can delete flagged or reported content that violates guidelines.</li>
    <li>Admins and Masters can delete content, users, and manage administrative functions.</li>
</ul>

<h4>Reputation and Reward System:</h4>
<ul>
    <li>Users earn a reputation score based on their participation and contributions.</li>
    <li>Badges and rewards are given for milestones (e.g., content creation, thumbs-up on tutorials, positive feedback).</li>
    <li>Reputation helps users move from Guest to Master, unlocking additional privileges like content moderation.</li>
</ul>

<h4>Checks and Balances:</h4>
<ul>
    <li>Every role has checks and balances to maintain fairness.</li>
    <li>Flagged content is reviewed by moderators, with further intervention from admins or masters if necessary.</li>
    <li>The system ensures that no one has unchecked power, protecting users from abuse.</li>
</ul>

<h4>Notes on Components and Pages</h4>
<ul>
    <li>Each page and component has clear functionality notes to make the system easy to maintain.</li>
</ul>

<h4>Components:</h4>
<ul>
    <li>Each component has comments indicating its purpose, inputs, and outputs.</li>
    <li>Example: The Button component includes a note like, "Handles user interaction for form submission."</li>
</ul>

<h4>Pages:</h4>
<ul>
    <li>Every page includes a description of its function at the top.</li>
    <li>For example, a tutorial page will state that it displays user-generated tutorials for the selected game.</li>
    <li>Specific notes explain dynamic behaviors, such as how content is fetched and displayed.</li>
</ul>

<h4>Example Notes:</h4>

<h4>Main_Content.jsx:</h4>
<ul>
    <li>Handles dynamic rendering of different types of user-generated content (UGC), including reviews and tutorials.</li>
    <li>Explains how data from Redux or APIs are handled.</li>
</ul>

<h4>NavBar.jsx:</h4>
<ul>
    <li>Displays navigation options based on user login status.</li>
    <li>Clarifies different states of the navbar for logged-in vs. logged-out users.</li>
</ul>

<h4>Contribution</h4>
<ul>
    <li>Looking for gamers interested in contributing User Generated Content (UGC) for GT7, Minecraft, Lego 2K Drive, and more.</li>
    <li>Contact: <a href="mailto:creatorsandboxreview@gmail.com">creatorsandboxreview@gmail.com</a> for more details.</li>
</ul>

<div>
    <br></br>
</div>
<br>
</br>
<br>
</br>
    </p>
    <B_Navbar links= {B_Links}/>
    </>
    )
};


export default ReadMe;