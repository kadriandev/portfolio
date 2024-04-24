import { Bubbles } from "@/components/bubbles";
import { ExperienceCard } from "@/components/experience-card";
import { Button } from "@/components/ui/button";
import Link from 'next/link';

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col">
            <section className="flex flex-col justify-center items-center h-screen w-screen mt-18 overflow-hidden">
                <div className="text-center z-20">
                    <h1 className="text-2xl font-semibold">Kyle Monteiro</h1>
                    <h2>I'm a Full-Stack Developer from Toronto, Canada.</h2>
                    <div className="m-4 space-x-2">
                        <Link href={'http://github.com/kadriandev'}>
                            <Button>
                                <svg className="mr-2" width="20" height="20" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.49933 0.25C3.49635 0.25 0.25 3.49593 0.25 7.50024C0.25 10.703 2.32715 13.4206 5.2081 14.3797C5.57084 14.446 5.70302 14.2222 5.70302 14.0299C5.70302 13.8576 5.69679 13.4019 5.69323 12.797C3.67661 13.235 3.25112 11.825 3.25112 11.825C2.92132 10.9874 2.44599 10.7644 2.44599 10.7644C1.78773 10.3149 2.49584 10.3238 2.49584 10.3238C3.22353 10.375 3.60629 11.0711 3.60629 11.0711C4.25298 12.1788 5.30335 11.8588 5.71638 11.6732C5.78225 11.205 5.96962 10.8854 6.17658 10.7043C4.56675 10.5209 2.87415 9.89918 2.87415 7.12104C2.87415 6.32925 3.15677 5.68257 3.62053 5.17563C3.54576 4.99226 3.29697 4.25521 3.69174 3.25691C3.69174 3.25691 4.30015 3.06196 5.68522 3.99973C6.26337 3.83906 6.8838 3.75895 7.50022 3.75583C8.1162 3.75895 8.73619 3.83906 9.31523 3.99973C10.6994 3.06196 11.3069 3.25691 11.3069 3.25691C11.7026 4.25521 11.4538 4.99226 11.3795 5.17563C11.8441 5.68257 12.1245 6.32925 12.1245 7.12104C12.1245 9.9063 10.4292 10.5192 8.81452 10.6985C9.07444 10.9224 9.30633 11.3648 9.30633 12.0413C9.30633 13.0102 9.29742 13.7922 9.29742 14.0299C9.29742 14.2239 9.42828 14.4496 9.79591 14.3788C12.6746 13.4179 14.75 10.7025 14.75 7.50024C14.75 3.49593 11.5036 0.25 7.49933 0.25Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
                                GitHub
                            </Button>
                        </Link>
                        <Link href={'http://linkedin.com/in/kylemonteiro'}>
                            <Button>
                                <svg className="mr-2" width="20" height="20" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 1C1.44772 1 1 1.44772 1 2V13C1 13.5523 1.44772 14 2 14H13C13.5523 14 14 13.5523 14 13V2C14 1.44772 13.5523 1 13 1H2ZM3.05 6H4.95V12H3.05V6ZM5.075 4.005C5.075 4.59871 4.59371 5.08 4 5.08C3.4063 5.08 2.925 4.59871 2.925 4.005C2.925 3.41129 3.4063 2.93 4 2.93C4.59371 2.93 5.075 3.41129 5.075 4.005ZM12 8.35713C12 6.55208 10.8334 5.85033 9.67449 5.85033C9.29502 5.83163 8.91721 5.91119 8.57874 6.08107C8.32172 6.21007 8.05265 6.50523 7.84516 7.01853H7.79179V6.00044H6V12.0047H7.90616V8.8112C7.8786 8.48413 7.98327 8.06142 8.19741 7.80987C8.41156 7.55832 8.71789 7.49825 8.95015 7.46774H9.02258C9.62874 7.46774 10.0786 7.84301 10.0786 8.78868V12.0047H11.9847L12 8.35713Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
                                Linkedin
                            </Button>
                        </Link>
                    </div>
                </div>
                <Bubbles numOfBubbles={20} />
            </section>
            <div className="flex flex-col mb-20 pt-10 z-20 bg-black">
                {/* <section className="grid grid-cols-2 my-3"> */}
                {/*     <div className="w-[400px] h-[400px] rounded-full overflow-clip"> */}
                {/*         <Image */}
                {/*             src='/headshot.jpeg' */}
                {/*             width={400} */}
                {/*             height={400} */}
                {/*             alt="heashot" */}
                {/*         /> */}
                {/*     </div> */}
                {/*     <p className="align-middle"></p> */}
                {/* </section> */}
                <section id="experience">
                    <h1 className="text-center text-3xl font-semibold">Experience</h1>
                    <div className={`flex flex-wrap mb-10 justify-center p-14 gap-6`}>
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
                                Developed and maintained internal tool applications using React.js, Node.js,
                                and MySQL, resulting in streamlined processes and increased efficiency for
                                multiple teams within the organization.
                            </p>
                            <p>
                                Led the entire software development lifecycle, from requirement gathering
                                and analysis to design, implementation, and deployment of web applications.
                            </p>
                            <p>
                                Mentored junior engineers, intern students and hosted lunch and learn
                                sessions for the IT department, focusing on sharing knowledge of various
                                emerging tools and techniques in the software landscape.
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
                                Built and integrated React components with RESTful APIs using GraphQL to
                                fetch and manipulate data.
                            </p>
                            <p>
                                Collaborated with cross-functional teams, including designers, product
                                managers, and backend developers, to deliver high-quality web applications
                                within tight deadlines.
                            </p>
                            <p>
                                Conducted technical interviews and provided mentorship to junior
                                developers to foster a collaborative and knowledge-sharing environment.
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
                                Developed and maintained a web application using React, Redux, and related
                                technologies, delivering a seamless user experience with a focus on
                                performance and scalability.
                            </p>
                            <p>
                                Designed and developed SQL stored procedures and queries for data retrieval,
                                manipulation, and optimization, improving application speed and efficiency.
                            </p>
                            <p>
                                Created and maintained database schemas, tables, and views using SQL Server
                                Management Studio, ensuring data integrity and security.
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
                                related technologies to create a complex schema-based JSON editor, improving
                                data management efficiency and accuracy.
                            </p>
                        </ExperienceCard>
                    </div>
                </section>
                {/* <section className="my-3"> */}
                {/*     <h1 id="projects" className="text-2xl">Projects</h1> */}
                {/*     <hr className="border border-b-black dark:border-b-white my-2" /> */}
                {/*     <p>These are my projects</p> */}
                {/* </section> */}
            </div>
        </main >
    );
}
