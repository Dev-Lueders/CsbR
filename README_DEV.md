<!-- Last working on what section and where and what was I doing 
working on the review course file getting the drop downs to show properly has an issue


-->

## TODO 
- [ ] When a user adds two different skins or UGC content that match together they can select if a prior post is related to this one like a helmet and suit skin then later matching it with a car skin content association
- [ ] game genre expansion
- [ ] Build Backend for routes to the profile
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

 - [ ]Add isSuspended and isActive flags to user schema

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

 - [ ]LocknKey Component (Game Code system)

 - [ ]Game Card Component (display game info, reviews, etc.)

 - [ ]Search Filter Component (by genre, title, description)

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

 
