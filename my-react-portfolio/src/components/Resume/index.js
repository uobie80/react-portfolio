import React from "react";
import ResumePDF from '../../docs/Resume.pdf';
import "../../css/custom.css";

export default function Resume () {

    return (
  <main className="container" role="main">
      <div className="container-fluid jumbotron jumbotron-portfolio py-5">
        <div className="container">
          <h1 className="display-3 fw-bold text-white">Resume</h1>
        </div>
      </div>
      <div className="container">
        
       <a href={ResumePDF} download> Download Resume </a>
             
        <h5 style={{marginTop: '10px'}}>Resume</h5>
        <table>
          <tr>
            <td><b>PROFILE</b></td>
             <td> Seasoned IT consultant with heavy hands-on experience working with cutting edge  
                  technologies and delivering projects for Fortune 500 companies and other highly 
                  visible clients in New York City and Tri-State area.
             </td>
             </tr>
             <tr>
            <td><b>SKILLS</b></td>
             <td> <p style={{marginBottom: '0.5px'}}><b>Programming Languages:</b></p>
                  <p>JavaScript, jQuery, Python 2.x, 3.x, Unix Shell Scripting, Java (core), SQL</p>
                  <p style={{marginBottom: '0.5px'}}><b>Operating Systems:</b></p>
                  <p> Windows 10, Oracle Linux Server 7, Red Hat Enterprise Linux Server 7</p>
                  <p style={{marginBottom: '0.5px'}}><b>Application/Web Servers:</b></p>
                  <p> Oracle WebLogic Server, Apache HTTP Server, Apache Tomcat </p>
                  <p style={{marginBottom: '0.5px'}}><b>Databases:</b></p>
                  <p> Oracle 11g, MySQL, PostgreSQL, Microsoft Access</p>
                  <p style={{marginBottom: '0.5px'}}><b>Software Products:</b></p>
                  <p> MS Office, Ansible, Django, Anaconda Python distro, Pandas, Terraform (AWS), Jenkins, Bitbucket</p>
             </td>
             </tr>
             <tr>
            <td><b>EXPERIENCE</b></td>
             <td> <p><b>Accenture</b>, Florham Park, NJ</p>
                  <p><i>Software Engineer/Architect</i></p>
                  <ul>
                    <li>Architected and implemented a highly available clustered Oracle Identity Management deployment in a Red Hat Linux server environment. </li>
                    <li>Architected and implemented a highly available clustered Oracle Identity Management deployment in a Red Hat Linux server environment. </li>
                    <li>	Developed custom scripts written in Python/Unix Shell to automatically monitor the utilization of CPU, memory, and hard disk space on Linux servers.</li>
                    <li>	Developed custom scripts written in Python/Unix Shell to automatically install and configure Oracle Identity Management suite of applications.  This helped save the client time and effort to build/re-build development, test, stage, and production environments in a matter of minutes instead of weeks.</li>
                    <li>	Developed custom standalone applications (.exe) written in Python to read and compare data extracts in csv format from multiple systems and produce a report in MS Excel format which identified data discrepancies amongst each of the systems.  This greatly helped insurance client improve data quality and keep it systems in sync.</li>
                    <li>	Developed several custom scripts written in Python to produce automated reports used by auditors to aid their effort involved in SOX and other security compliance work.</li>
                    <li>	Developed custom Python/Unix Shell scripts administered via HP Opsware to apply patches to Linux servers monthly.</li>
                    <li>	Developed a custom web application using Django, Python, and Unix Shell to serve as a front end to a MySQL database that contained server patching details.  This allowed administrators to log in, review, and update patching details for their servers.</li>
                    <li>	Performed use case analysis for requirements gathering.</li>
                    <li>	Developed Ansible playbooks to automate software installation, service monitoring, and update server configuration files of heterogenous server platforms in an environment that contained 4,000+ servers.  This allowed different engineering support teams to be more productive by increasing their bandwidth to address other support issues.</li>
                    <li>	Performed automated code deployments, AWS infrastructure destroy, re-build, and test using Bitbucket, Terraform, and Jenkins.</li>
                  </ul>
             </td>
             </tr>
              <tr>
            <td><b>ACTIVITIES</b></td>
             <td> <p><b>Toastmasters</b>, Roseland, NJ</p>
                  <ul>
                    <li>10 speeches completed toward achieving a CC (Competent Communicator) award. </li>
                  </ul>
             </td>
             </tr>
              <tr>
            <td><b>EDUCATION</b></td>
             <td> <p>Cornell University, Ithaca, NY
			            Master Certificate, June 2017
		            	Major: Systems Design and Project Leadership
                  </p>

                  <p>Pace University, New York, NY
                     Master’s Degree of Science, May 2010
                     Major: Information Systems GPA: 3.74
                     </p>

             </td>
             </tr>
        </table>
   
</div></main>
    );
}