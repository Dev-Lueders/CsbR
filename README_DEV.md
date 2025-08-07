<!-- Last working on what section and where and what was I doing
working on the review course file getting the drop downs to show properly has an issue


-->

## TODO


- [ ] When a user adds a skin or UGC content that match together from their uploads they can select if a prior post is related to this one like a helmet and suit skin then later matching it with a car skin content association or by extension getting a set of decals that work together in to a full picture
- [ ] game genre expansion
- [x] Build Backend for routes to the profile
- [ ] build Backend routes for UGC content
- [ ] build model for UGC_content profile
- [ ] backend connect Mongo
- [ ] backend connect MySQL
- [ ] backend CRUD api operations
- [ ] UI/UX signup, login, profile, need serious work
- [ ] build model for Client profile
- [ ] build model for Game profile
- [ ] build model for UGC_Content
- [ ] build testing models for each api route
- [ ] run testing models
- [ ] make clearList, whiteList, greyList, and blackList
- [ ]
  Backend Development
- [ ] User Authentication & Roles

- [ ]Set up JWT Authentication

- [ ]Implement role-based access control (RBAC)

- [ ]Master, Member, Creator, Moderator, Guest, Admin

08012025 - [X]Add isSuspended and isActive flags to client schema

- [ ]Add ClearList feature for trusted users with full access

- [ ]Prevent role override unless isClearListed is set to true

Database Structure

- [ ]Create MongoDB collections for:

- [ ]Users (with roles, suspension, etc.)

- [ ]Comments (with references to user and game)

- [ ]UGC (user-generated content) section

- [ ]Game Genre and System-specific tables

- [ ]Ensure MongoDB relationships with ObjectId references

- [ ]Create MySQL database with proper normalization:

- [ ]Separate tables for game info, user reviews, comments, etc.

- [ ]Implement dynamic table creation logic (for new genres, fields, etc.)

Game System & Genre Management

- [ ]Allow users to add new game genres (dynamically create new tables for each genre)

- [ ]Create tables for cross-referencing game genres with game titles

- [ ]Enable search filters by genre, description, etc.

Frontend Development

- [ ]User Interface

- [ ]Design role-based UI with conditional elements for Master, Admin, etc.

- [ ]Implement user settings page for role management (Admin view)

Add input forms for:

- [ ]Game Genre creation

- [ ]Commenting system (with scoring and reference to client)

- [ ]UGC content submission (with categories)

Components

- [ ]LocknKey Component (Game Code system Version 3)

- [ ]Game Card Component (display game info, reviews, etc.)

- [ ]Search Filter Component (by genre, title, description, across systems, across genre)

- [ ]Comment Section (with User Score and Reference)

- [ ]State Management (Redux)

- [ ]Integrate with global state for user roles and privileges

- [ ]Fetch data dynamically based on user’s game genre and preferences

APIs & Integration

- [ ]Build API to dynamically fetch game genres and related content

- [ ]Create endpoints for:

- [ ]User registration and role assignment

- [ ]Game genre and system management

- [ ]User comments and review submission

- [ ]Ensure all dynamic content (e.g., genres, fields) is searchable

- [ ]Implement MySQL querying for cross-referencing games by genre

Security

- [ ]Implement middleware for role validation (admin/moderator checks)

- [ ]Add security layer for sensitive data (e.g., JWT, hashed passwords)

- [ ]Set up protection against unauthorized access for ClearList users

Database and Schema Design

- [ ]Finalize MongoDB schema for Games, Genres, Users, Comments

Design MySQL schema for:

- [ ]Users Table (storing user data, roles, and flags)

- [ ]Games Table (game name, genre, system, etc.)

- [ ]Comments Table (linked to users and games)

- [ ]Genres Table (dynamically growing based on user input)

Miscellaneous

- [ ]Write unit tests for dynamic table creation and API routes

- [ ]Set up testing environment for MongoDB and MySQL integration

- [ ]Implement logging and error handling for API responses

File Structure 08/07/2025

D:.
│   .env
│   .gitignore
│   auto_commit.ps1
│   commit_count.txt
│   eslint.config.js
│   index.html
│   package-lock.json
│   package.json
│   README.md
│   README_DEV.md
│   vite.config.js
│   
├───.vscode
│       settings.json
│       
├───public
│       FILE_STRUCTURE08062025.txt
│
├───Road_map
│       bury.png
│       eh_jar.png
│       excited._jarpng.png
│       happy_jar.png
│       loading_all.png
│       loading_ball_1.png
│       loading_ball_2.png
│       map_adding_course.png
│       map_components.png
│       map_course_card.png
│       map_DB_PGA2KX.png
│       map_DB_Relation_PGA2K.png
│       map_guest_search.png
│       map_login_page.png
│       map_reviewform.png
│       map_search_loggedInTrue.png
│       possible tip emojies .png
│       possible_dig_icon.png
│       possible_dig_icon_2.png
│       program layout.png
│       sad_jar.png
│       smirking_jar.png
│       tip jar emotions.png
│       Tips_Pic.png
│
├───server
│   ├───auth
│   │   ├───controllers
│   │   ├───middleware
│   │   ├───routes
│   │   │   └───Login
│   │   │           login_routes.js
│   │   │
│   │   └───utils
│   ├───config
│   │   ├───mongoDB
│   │   │       Setup_MongoDB.js
│   │   │
│   │   └───mysqlDB
│   │           Setup_MySQLDB.js
│   │
│   ├───Games_DB
│   │   ├───Gran_Turismo
│   │   │       GT_DB.jsx
│   │   │
│   │   └───PGA_DB
│   │           Course_DB.jsx
│   │
│   ├───models
│   │   │   Master_model.js
│   │   │   UGC_Model.js
│   │   │
│   │   └───Client_Models
│   │           Admin_model.js
│   │           Client_model.js
│   │           Creator_model.js
│   │           Profile_model.js
│   │
│   ├───Modem
│   │   └───Up_Load
│   │           Up_Loading.jsx
│   │
│   ├───repositories
│   │       Admin_Repository.js
│   │       Client_Repository.js
│   │       Creator_Repository.js
│   │       Master_Repository.js
│   │       Profile_Repository.js
│   │       UGC_Repository.js
│   │
│   ├───routes
│   │   ├───CONNECT
│   │   │   ├───Mongo
│   │   │   └───MySQL
│   │   ├───DELETE
│   │   │   ├───Mongo
│   │   │   └───MySQL
│   │   ├───GET
│   │   │   ├───Mongo
│   │   │   └───MySQL
│   │   ├───HEAD
│   │   │   ├───Mongo
│   │   │   └───MySQL
│   │   ├───OPTIONS
│   │   │   ├───Mongo
│   │   │   └───MySQL
│   │   ├───PATCH
│   │   │   ├───Mongo
│   │   │   └───MySQL
│   │   ├───POST
│   │   │   ├───Mongo
│   │   │   └───MySQL
│   │   ├───PUT
│   │   │   ├───Mongo
│   │   │   └───MySQL
│   │   ├───RTManager
│   │   │   │   index.js
│   │   │   │
│   │   │   ├───Mongo
│   │   │   └───MySQL
│   │   ├───TRACE
│   │   │   ├───Mongo
│   │   │   └───MySQL
│   │   ├───UPDATE
│   │   │   ├───Mongo
│   │   │   └───MySQL
│   │   └───_REFACTOR
│   │       ├───Clients
│   │       │       Admin_routes.js
│   │       │       Client_routes.js
│   │       │       Creator_routes.js
│   │       │       Master_routes.js
│   │       │       Profile_routes.js
│   │       │
│   │       ├───Games
│   │       │       UGC_routes.js
│   │       │
│   │       ├───Login
│   │       └───Signup
│   │               Signup_routes.js
│   │
│   └───services
│           Admin_services.js
│           Client_services.js
│           Creator_services.js
│           Master_services.js
│           Profile_services.js
│           UGC_services.js
│
└───src
    │   App.css
    │   App.jsx
    │   bkupComp.ps1
    │   index.css
    │   main.jsx
    │
    ├───assets
    │   │   logo_v1.png
    │   │
    │   └───public
    ├───components
    │   │   components_styles.css
    │   │   Lock.jsx
    │   │
    │   ├───Atoms
    │   │   ├───Buttons
    │   │   │       Button.jsx
    │   │   │       Radio.jsx
    │   │   │
    │   │   ├───Check_Box
    │   │   │       Check_Box.jsx
    │   │   │
    │   │   ├───Drop_Down
    │   │   │       Drop_Down.jsx
    │   │   │
    │   │   ├───Input_Container
    │   │   │       Calendar.jsx
    │   │   │       Text_Box.jsx
    │   │   │
    │   │   ├───Main_Content
    │   │   │       Main_Container.jsx
    │   │   │
    │   │   ├───Media_Content
    │   │   │   │   Media_Container.jsx
    │   │   │   │
    │   │   │   └───video_comp
    │   │   │           video_content.jsx
    │   │   │           video_list.jsx
    │   │   │           video_player.jsx
    │   │   │
    │   │   ├───NavBar
    │   │   │       B_Navbar.jsx
    │   │   │       L_Navbar.jsx
    │   │   │       T_Navbar.jsx
    │   │   │
    │   │   ├───Page_Grid
    │   │   │       Page_Grid.jsx
    │   │   │
    │   │   ├───Pagination
    │   │   │       pagination_component.jsx
    │   │   │
    │   │   ├───Scroll_Bar
    │   │   │       Scroll_Bar.jsx
    │   │   │
    │   │   ├───Stats_Content
    │   │   │       Stats_Container.jsx
    │   │   │
    │   │   ├───UGC_Cards
    │   │   │       UGC_Cards.jsx
    │   │   │
    │   │   └───World_Map
    │   │           World_Map.jsx
    │   │
    │   ├───Components_Data
    │   │   ├───Atom_Data
    │   │   │   │   DD_Default_Props.jsx
    │   │   │   │   DD_Game_Options.json
    │   │   │   │   DD_Game_Systems.json
    │   │   │   │
    │   │   │   └───Default_Styles
    │   │   │           Styles_Button.json
    │   │   │           Styles_Check_Box.json
    │   │   │           Styles_Radio.json
    │   │   │
    │   │   └───Molecules_Data
    │   │       └───Scrolling_Banner
    │   ├───Molecules
    │   │   │   Scrolling_Banner.jsx
    │   │   │
    │   │   ├───Form
    │   │   │       Generic_Form.jsx
    │   │   │       UGC_Upload.jsx
    │   │   │
    │   │   ├───Gamer_Tag
    │   │   │       Add_Gamer.jsx
    │   │   │       Default_Prop_Gamer_Tag.jsx
    │   │   │
    │   │   ├───Review18
    │   │   │       Full_Hole_Review.jsx
    │   │   │
    │   │   └───Social_Channels
    │   │           Add_Social.jsx
    │   │
    │   ├───Organism
    │   │       Page_Frame.jsx
    │   │
    │   └───Util_component
    │           util_search.jsx
    │
    ├───Pages
    │   │   pages_styles.css
    │   │
    │   ├───About
    │   │       About.jsx
    │   │
    │   ├───Clients
    │   │   ├───Admin_Page
    │   │   │       Admin_Page.jsx
    │   │   │
    │   │   ├───Client_Page
    │   │   │       Client_Front_Page.jsx
    │   │   │       Client_Page.jsx
    │   │   │
    │   │   ├───Creator_Profile_Page
    │   │   │       Creator_Profile_Page.jsx
    │   │   │
    │   │   ├───Guest_Page
    │   │   │       Guest_Page.jsx
    │   │   │
    │   │   ├───Master_Page
    │   │   │       Master_Page.jsx
    │   │   │
    │   │   ├───Member_Page
    │   │   │       Member_Page.jsx
    │   │   │
    │   │   ├───Moderator_Page
    │   │   │       Moderator_Page.jsx
    │   │   │
    │   │   └───Profile_Page
    │   │           Creators_Page.jsx
    │   │           Profile_Page.jsx
    │   │
    │   ├───Games
    │   │   │   Games_Page.jsx
    │   │   │
    │   │   ├───Gran_Turismo
    │   │   │   │   GT7.jsx
    │   │   │   │
    │   │   │   ├───Adding Content
    │   │   │   │       GT7_Add_Content.jsx
    │   │   │   │
    │   │   │   └───Data
    │   │   │       │   GT_DD_Brand.json
    │   │   │       │   GT_DD_Data.json
    │   │   │       │   GT_DD_Parts.json
    │   │   │       │
    │   │   │       ├───Company
    │   │   │       │       GT_DD_Abarth.json
    │   │   │       │       GT_DD_AlfaRomero.json
    │   │   │       │       GT_DD_Alpine.json
    │   │   │       │       GT_DD_AMG.json
    │   │   │       │       GT_DD_AstonMartin.json
    │   │   │       │       GT_DD_Audi.json
    │   │   │       │       GT_DD_BAC.json
    │   │   │       │       GT_DD_BMW.json
    │   │   │       │       GT_DD_brembo.json
    │   │   │       │       GT_DD_Bugatti.json
    │   │   │       │       GT_DD_BVLGari.json
    │   │   │       │       GT_DD_Chaparral.json
    │   │   │       │       GT_DD_CHC.json
    │   │   │       │       GT_DD_Chevrolet.json
    │   │   │       │       GT_DD_Citroen.json
    │   │   │       │       GT_DD_DMC.json
    │   │   │       │       GT_DD_Dodge.json
    │   │   │       │       GT_DD_DSAutomobile.json
    │   │   │       │       GT_DD_Eckerts.json
    │   │   │       │       GT_DD_Ferrari.json
    │   │   │       │       GT_DD_Fiat.json
    │   │   │       │       GT_DD_Ford.json
    │   │   │       │       GT_DD_GAC.json
    │   │   │       │       GT_DD_Greddy.json
    │   │   │       │       GT_DD_Infinity.json
    │   │   │       │       GT_DD_Italdesign.json
    │   │   │       │       GT_DD_Jaguar.json
    │   │   │       │       GT_DD_KTM.json
    │   │   │       │       GT_DD_Maserati.json
    │   │   │       │       GT_DD_McLaren.json
    │   │   │       │       GT_DD_Mercedes.json
    │   │   │       │       GT_DD_Mini.json
    │   │   │       │       GT_DD_Pagani.json
    │   │   │       │       GT_DD_Peugeot.json
    │   │   │       │       GT_DD_Porsche.json
    │   │   │       │       GT_DD_Radical.json
    │   │   │       │       GT_DD_RCR.json
    │   │   │       │       GT_DD_Renault.json
    │   │   │       │       GT_DD_RS.json
    │   │   │       │       GT_DD_Ruf.json
    │   │   │       │       GT_DD_Skoda.json
    │   │   │       │       GT_DD_Tesla.json
    │   │   │       │       GT_DD_Volkswagon.json
    │   │   │       │       GT_DD_Volvo.json
    │   │   │       │       GT_DD_Wicked.json
    │   │   │       │       GT_DD_Zagato.json
    │   │   │       │
    │   │   │       └───Country
    │   │   │               GT_DD_America.json
    │   │   │               GT_DD_Austria.json
    │   │   │               GT_DD_Czech_Republic.json
    │   │   │               GT_DD_France.json
    │   │   │               GT_DD_Germany.json
    │   │   │               GT_DD_Italy.json
    │   │   │               GT_DD_Japan.json
    │   │   │               GT_DD_Make.json
    │   │   │               GT_DD_SKorea.json
    │   │   │               GT_DD_Sweden.json
    │   │   │               GT_DD_UK.json
    │   │   │
    │   │   └───PGA2K
    │   │       │   PGA2K.jsx
    │   │       │
    │   │       ├───2K23
    │   │       │   ├───Adding Content
    │   │       │   │   ├───Content
    │   │       │   │   │   └───Long_Form
    │   │       │   │   │           PGA2K23_C_Long.jsx
    │   │       │   │   │
    │   │       │   │   └───Reviews
    │   │       │   │       └───Long_Form
    │   │       │   │               PGA2K23_R_Long.jsx
    │   │       │   │
    │   │       │   └───Search
    │   │       │       ├───Basic
    │   │       │       │       Search_Page_PGA2K23.jsx
    │   │       │       │
    │   │       │       └───Search_Results
    │   │       │               Results_Page_PGA2K23.jsx
    │   │       │
    │   │       ├───2K25
    │   │       │   └───Search
    │   │       │       ├───Basic
    │   │       │       │       Search_Page_2K25.jsx
    │   │       │       │
    │   │       │       └───Search_Results
    │   │       │               Results_Page_2K25.jsx
    │   │       │
    │   │       ├───Content
    │   │       │       Course_Review.jsx
    │   │       │
    │   │       └───Data
    │   │           │   PGA_DD_Blank.json
    │   │           │   PGA_DD_Difficulty.json
    │   │           │   PGA_DD_Game_Version.json
    │   │           │   PGA_DD_Holes.json
    │   │           │   PGA_DD_Planets_Dune.json
    │   │           │   PGA_DD_Planets_HD10180.json
    │   │           │   PGA_DD_Planets_HR8799.json
    │   │           │   PGA_DD_Planets_Kepler.json
    │   │           │   PGA_DD_Planets_Pegasi.json
    │   │           │   PGA_DD_Planets_Startrek.json
    │   │           │   PGA_DD_Planets_Starwars.json
    │   │           │   PGA_DD_Planets_Trappist.json
    │   │           │   PGA_DD_RealSolarSystem.json
    │   │           │   PGA_DD_SolSys_List.json
    │   │           │   PGA_DD_System_AlphaCentauri.json
    │   │           │   PGA_DD_Tees.json
    │   │           │   PGA_DD_Theme.json
    │   │           │   PGA_DD_Type.json
    │   │           │
    │   │           └───Review_Data
    │   │                   PGA_DD_Play.json
    │   │                   PGA_DD_Review_Score_1to10.json
    │   │                   PGA_DD_Review_Score_1to5.json
    │   │
    │   ├───Help
    │   │       Help.jsx
    │   │       ReadMe.jsx
    │   │       SignUp_TOS.jsx
    │   │
    │   ├───Landing_Page
    │   │       Landing_Page.jsx
    │   │
    │   ├───Legal
    │   │       Legal_Page.jsx
    │   │
    │   ├───Login_Page
    │   │       Login_Page.jsx
    │   │
    │   ├───Pages_Data
    │   │       DD_Games.json
    │   │       DD_Game_Systems.json
    │   │
    │   ├───SignUp_Page
    │   │       Creators_SignUp.jsx
    │   │       Profile_SignUp.jsx
    │   │       SignUp_Page.jsx
    │   │
    │   ├───Suggestion_Box
    │   │       Suggestion_Box.jsx
    │   │
    │   └───Test Page
    │           Component_Testing.jsx
    │           Dummy_Golf_Data.json
    │           Dummy_Turismo_Data.json
    │
    ├───redux
    │   ├───Action
    │   │   ├───Main_Content
    │   │   │       act_Main_Content.js
    │   │   │
    │   │   └───NavBar
    │   │           act_T_NaveBar.js
    │   │
    │   ├───features
    │   │   ├───auth
    │   │   │       loginSlice.js
    │   │   │
    │   │   └───signup
    │   │           signupSlice.js
    │   │
    │   ├───Reducers
    │   │   │   reducers.js
    │   │   │   red_client.js
    │   │   │   red_settings_theme.js
    │   │   │
    │   │   ├───Main_Content
    │   │   │       red_Main_Content.js
    │   │   │
    │   │   └───NavBar
    │   │           red_T_NavBar.js
    │   │
    │   └───Stores
    │           Store.jsx
    │
    ├───Routes
    │       AuthRoutes.jsx
    │       ClientRoutes.jsx
    │       GameRoutes.jsx
    │       InfoRoutes.jsx
    │       SignupRoutes.jsx
    │       TestingRoutes.jsx
    │
    └───utils
        ├───Forms
        └───LinknSync
            ├───Mongo
            ├───MongoToSQL
            ├───MySQL
            └───SQLToMongo