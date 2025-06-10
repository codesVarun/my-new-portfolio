export interface Project {
  projectId: string;
  projectName: string;
  projectDescription: string;
  projectRepoLink?: string;
  projectLiveUrl?: string;
}

export const projectMockData: Project[] = [
  {
    projectId: "Project01",
    projectName: "Data Engineering Journey",
    projectDescription:
      "This project is a repo that contains everything about Data Engineering—from notes and daily logs to five real-world projects. For more details, check out the project repo.",
    projectRepoLink: "https://github.com/codesVarun/data-engineering-journey",
  },
  {
    projectId: "Project02",
    projectName: "ETL-PIPELINE-COVID-API",
    projectDescription:
      "An ETL pipeline that fetches COVID-19 data from public APIs, transforms it, and loads it into PostgreSQL. The stack includes Python, Airflow, Docker, docker-compose, PostgreSQL, and SQLite.",
    projectRepoLink:
      "https://github.com/codesVarun/data-engineering-journey/tree/main/projects/etl-pipeline-covid-api",
  },
  {
    projectId: "Project03",
    projectName: "NavPM",
    projectDescription:
      "A full-stack enterprise-grade solution built for small to mid-level organizations, offering features like opportunity management, recruitment, bench tracking, and invoice management. Developed as a Data Engineer and Full Stack Developer.",
  },
  {
    projectId: "Project04",
    projectName: "Text Generator",
    projectDescription:
      "An interactive text-generation web application built with JavaScript that allows users to input text and generate creative outputs. Powered by client-side logic, it's deployed via GitHub Pages for a seamless demo experience.",
    projectRepoLink: "https://github.com/codesVarun/textGenerator",
    projectLiveUrl: "https://codesvarun.github.io/textGenerator/",
  },
  {
    projectId: "Project05",
    projectName: "Java Fullstack Boilerplate",
    projectDescription:
      "A comprehensive Java full-stack repository with three branches (frontend, backend, sql). Demonstrates end-to-end web development including Java EE/Spring backend, React/Thymeleaf frontend, and SQL schema/scripts.",
    projectRepoLink: "https://github.com/codesVarun/java-fullstack",
    projectLiveUrl: undefined,
  },
  {
    projectId: "Project06",
    projectName: "Neo4j Mini Project",
    projectDescription:
      "A mini-project demonstrating usage of Neo4j graph database for domain-specific data modeling and querying. Includes schema design, Cypher scripts, and code examples to explore graph relationships.",
    projectRepoLink: "https://github.com/codesVarun/neo4j-miniProject",
    projectLiveUrl: undefined,
  },
  {
    projectId: "Project07",
    projectName: "Complete React Guide",
    projectDescription:
      "A structured collection of React tutorials, small projects, and learning modules. Covers core React concepts including components, hooks, routing, and state management.",
    projectRepoLink: "https://github.com/codesVarun/complete-react",
    projectLiveUrl: undefined,
  },
  {
    projectId: "Project08",
    projectName: "Social Media App",
    projectDescription:
      "A full-stack social media web application featuring post creation, image/video support, chat, notifications, and translation. Developed with React and deployed via Vercel.",
    projectRepoLink: "https://github.com/codesVarun/social-media-app",
    projectLiveUrl: "https://social-media-app-iota-vert.vercel.app/",
  },
];
