import { ExperienceCard } from "@/components/experience-card";
import { Metadata } from "next/types";

export const metadata: Metadata = {
  title: "kadriandev | Work",
  description: "Generated by create next app",
};

export default function ExperiencePage() {
  return (
    <div className={`flex flex-wrap justify-center gap-8 md:mt-32`}>
      <ExperienceCard
        company={"407 ETR"}
        address={"Woodbridge, Canada"}
        imageSrc={"/407_logo.jpg"}
        jobTitle={"Senior Full Stack Developer"}
        from={new Date("July 2023")}
        to={new Date()}
        skills={["React", "Node.js", "SQL", "Docker", "Kubernetes"]}
      >
        <p>
          Developed and maintained internal tool applications using React.js,
          Node.js, and MySQL, resulting in streamlined processes and increased
          efficiency for multiple teams within the organization.
        </p>
        <p>
          Led the entire software development lifecycle, from requirement
          gathering and analysis to design, implementation, and deployment of
          web applications.
        </p>
        <p>
          Mentored junior engineers, intern students and hosted lunch and learn
          sessions for the IT department, focusing on sharing knowledge of
          various emerging tools and techniques in the software landscape.
        </p>
      </ExperienceCard>
      <ExperienceCard
        company={"Revvity"}
        address={"Guelph, Canada"}
        imageSrc={"/revvity_logo.jpeg"}
        jobTitle={"Web Application Developer"}
        from={new Date("May 2022")}
        to={new Date("July 2023")}
        skills={["React", "Node.js", "GraphQL", "SQL"]}
      >
        <p>
          Built and integrated React components with RESTful APIs using GraphQL
          to fetch and manipulate data.
        </p>
        <p>
          Collaborated with cross-functional teams, including designers, product
          managers, and backend developers, to deliver high-quality web
          applications within tight deadlines.
        </p>
        <p>
          Conducted technical interviews and provided mentorship to junior
          developers to foster a collaborative and knowledge-sharing
          environment.
        </p>
      </ExperienceCard>
      <ExperienceCard
        company={"Kenna"}
        address={"Mississauga, Canada"}
        imageSrc={"/kenna_logo2.jpeg"}
        jobTitle={"Full Stack Developer"}
        from={new Date("January 2021")}
        to={new Date("August 2021")}
        skills={["React", "SQL"]}
      >
        <p>
          Developed and maintained a web application using React, Redux, and
          related technologies, delivering a seamless user experience with a
          focus on performance and scalability.
        </p>
        <p>
          Designed and developed SQL stored procedures and queries for data
          retrieval, manipulation, and optimization, improving application speed
          and efficiency.
        </p>
        <p>
          Created and maintained database schemas, tables, and views using SQL
          Server Management Studio, ensuring data integrity and security.
        </p>
      </ExperienceCard>
      <ExperienceCard
        company={"LifeWorks"}
        address={"Markham, Canada"}
        imageSrc={"/lifeworks_logo.jpg"}
        jobTitle={"IT Analyst"}
        from={new Date("May 2020")}
        to={new Date("August 2020")}
        skills={["Angular"]}
      >
        <p>
          Designed and developed an internal tool using Angular, TypeScript, and
          related technologies to create a complex schema-based JSON editor,
          improving data management efficiency and accuracy.
        </p>
      </ExperienceCard>
    </div>
  );
}
