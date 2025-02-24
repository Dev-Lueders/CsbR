// ------------------------------THIS IS THE LEGAL PAGE------------------------
// need to create a warning checkbox for every upload of any media content and a link to this page included
// Need to comply with the copyright laws
//also need a warning about publishing copyrighted material. done with a checkbox stating that they will not upload copyrighted material
// **********NOTICE THERE ARE NOTES AMONGST THE LEAGAL EASE STUFF*****************



import Text_Box from "../../components/Input_Container/Text_Box";
import T_Navbar from "../../components/NavBar/T_Navbar";
import B_Navbar from "../../components/NavBar/B_Navbar";
import React from "react";

const Legal = () => {

    const T_Links = [

        { label: "Home Page", path: "/" },
        { label: "Log Out" , path: "/SignOut"},
        // { label: "", path: ""},

    ];

    const B_Links = [ 

        { path: "/SignUp_Page", label: "Signup" },
        { path: "/contact", label: "Contact Us" },
        { path: "/help", label: "Help" },
        { path: "/about", label: "About" },
        { path: "/support", label: "Support" },
        

    ];




    return(
    
    <>
<T_Navbar links= {T_Links}/>
<br/>
<br/>
<br/>
<h6>
 All trademarks referenced herein are the property of their respective owners. Any mention of trademarked products is for informational purposes only and does not imply any affiliation with, or endorsement by, the respective companies. This product is not associated with, endorsed by, or otherwise affiliated with any of the trademarked brands mentioned herein. Furthermore, it is expressly stated that there is no implication of any affiliation, support, or compensation from the aforementioned companies for the products or services discussed. Any posting of links are the uploaders responsibilities and are subjcted to be taken down at any given moment without prior written notice or contact. 
</h6>
 <h3><strong>1. Purpose of Takedown Service</strong></h3>
<ul>We respect the intellectual property rights of others and expect users of our platform to do the same. This Takedown Service is designed to allow copyright holders to notify us of any content that they believe infringes on their rights.</ul>
<ul>If you are a copyright holder or authorized representative and believe that content hosted on our platform violates your copyrights, you may submit a takedown request. Upon receiving a valid notice, we will promptly review it and, if necessary, remove the infringing content.</ul>

<h3><strong>2. How to Submit a Takedown Request</strong></h3>
<ul>To submit a valid takedown request, the copyright holder or authorized representative must provide the following information:</ul>

<h5>a. Identification of the infringing content:</h5>
<ul>
  <li>A description of the copyrighted work that is allegedly being infringed upon.</li>
  <li>The URL or a description of where the infringing content is located on our website.</li>
</ul>

<h5>b. Statement of good faith:</h5>
<ul>A statement that you believe, in good faith, that the content is infringing your rights, and that the information provided is accurate.</ul>

<h5>c. Contact Information:</h5>
<ul>Your full name, address, telephone number, and email address where you can be contacted.</ul>

<h5>d. Signature:</h5>
<ul>A physical or electronic signature of the person authorized to act on behalf of the copyright owner.</ul>

<h3><strong>3. How to Send a Takedown Notice</strong></h3>
<ul>Please send your completed takedown request to the following email address:</ul>
<ul><a href="mailto:creatorsandboxreview@gmail.com">email@example.com</a></ul>
<ul>or via postal mail to:</ul>
<ul>Creatorsandboxreview<br/>Attn: Takedown Department<br/>[Your Address]<br/>[City, State, ZIP Code]</ul>
<ul>Upon receiving your notice, we will investigate the claim and take appropriate action in accordance with our Terms of Service and applicable law.</ul>

<h3><strong>4. Counter-Notice Procedure</strong></h3>
<ul>If you believe that your content was removed by mistake or misidentification, you have the right to file a counter-notice. The counter-notice must include:</ul>

<h5>a. A statement under penalty of perjury:</h5>
<ul>That you believe the content was removed due to a mistake or misidentification, and that you have a good faith belief that the content was not infringing.</ul>

<h5>b. Identification of the content:</h5>
<ul>A description of the content that was removed and the location of the content before it was removed.</ul>

<h5>c. Your contact information:</h5>
<ul>Your full name, address, telephone number, and email address.</ul>

<h5>d. A statement of consent:</h5>
<ul>(Include your consent to the actions taken or being appealed.)</ul>

<h3><strong>5. Consequences of Submitting False Takedown Requests</strong></h3>
<ul>If you submit a takedown request in bad faith, or with inaccurate information, you may be liable for any resulting damages. Be sure to review your claim thoroughly before submitting it.</ul>

<h3><strong>6. Limitation of Liability</strong></h3>
<ul>We do not assume any liability for the content submitted by our users. Our role is limited to hosting the content, and we take no responsibility for its legality. If you have concerns about a specific piece of content, please address them directly with the user who posted it.</ul>

<h3><strong>7. Take-Down Timelines</strong></h3>
<ul>Once a valid takedown notice is received, we will evaluate the request within [X] days. If necessary, infringing content will be removed within [X] days of verification.</ul>

<h3><strong>Additional Takedown Policy Details</strong></h3>

<h5>Misuse of Flagging System:</h5>
<ul>We take the integrity of our community and content seriously. The flagging system is provided to ensure that content on the platform is not infringing on any intellectual property rights or violating our Community Guidelines. By using the flagging system, you agree to follow the rules outlined below:</ul>

<h5>False Flagging and Abuse:</h5>
<ul>
  <li><strong>False Claims:</strong> If you repeatedly flag content that is not in violation of the platform’s Terms of Service, Copyright Policy, or Community Guidelines, this is considered abuse of the flagging system.</li>
  <li><strong>Abuse Defined:</strong> Abuse includes, but is not limited to, falsely claiming that content violates copyright, misrepresenting content as offensive or harmful without evidence, or flagging content with the intention to harm or disrupt the platform or other users.</li>
</ul>

<h5>Action Against False Claims:</h5>
<ul>Users who make multiple false claims (such as flagging non-infringing content multiple times) or who misuse the flagging system in other ways may face penalties, including but not limited to, suspension, permanent ban, and potential legal action.</ul>

<h3><strong>Consequences for Misuse</strong></h3>

<h5>Investigation:</h5>
<ul>If you are found to be abusing the flagging system, your account may be investigated. If the abuse is verified, we reserve the right to suspend or permanently ban your account.</ul>

<h5>Legal Action:</h5>
<ul>In extreme cases where misuse of the flagging system results in significant harm to other users, intellectual property holders, or the platform itself, we may pursue legal action against the user for defamation, harassment, or other applicable claims.</ul>

<h5>Monetary Penalties:</h5>
<ul>In cases of deliberate misuse, including submitting false claims to intentionally harm a creator’s content or account, the platform may seek compensation for damages incurred due to these actions.</ul>

<h3><strong>Appeals Process for Flagged Content</strong></h3>
<ul>If you believe your content has been flagged in error, you have the right to appeal the decision. Appeals must be made in writing through the platform’s appeal form, and the flagged content will be reviewed by our team. Repeated abuse of the appeal process will also be treated as misuse.</ul>

<h3><strong>Reporting Abuse</strong></h3>
<ul>We encourage our community to report any instances of flagging abuse or suspicious activity. If you believe someone is falsely flagging content or attempting to manipulate the flagging system, please contact our support team immediately.</ul>

<h3><strong>Consequences and Legal Action</strong></h3>

<h5>Penalties for False Flagging:</h5>
<ul>False flagging or harassment may result in suspension, a permanent ban, and potential legal action against the user.</ul>

<h5>Good Faith Flagging Acknowledgment</h5>
<ul>By checking this box, you confirm that you are flagging this content in good faith and based on a genuine belief that it violates our Terms of Service, Community Guidelines, or applicable Copyright Policies. You understand and agree to the following:</ul>

<h5>Good Faith Flagging:</h5>
<ul>You are flagging content because you believe it violates our platform’s guidelines and not for malicious reasons, such as to harm or disrupt the content or user experience on the platform.</ul>

<h5>Misuse and Abuse:</h5>
<ul>You understand that misuse or abuse of the flagging system, including but not limited to false flagging, targeting users with no legitimate reason, or submitting malicious claims, is strictly prohibited.</ul>

<h5>Consequences of Misuse:</h5>
<ul>If it is found that you have abused or misused the flagging system, including submitting false claims or harassment, your account may be subject to suspension or permanent ban from the platform. Repeat offenders will be permanently banned, and legal action may be taken depending on the severity of the abuse.</ul>

<ul>By flagging content, you agree to act in accordance with our Community Guidelines and acknowledge that your account may face penalties for any misuse of the system.</ul>

<B_Navbar links= {B_Links}/>
    </>
    
)
}
export default Legal;
