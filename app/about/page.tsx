"use client";

export default function AboutPage() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-12 space-y-10 text-muted-foreground">
      <h1 className="text-4xl font-bold text-primary">About Me</h1>

      {/* Education */}
      <div>
        <h2 className="text-2xl font-semibold mb-4 text-white">Education</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>B.Tech in Computer Science & Engineering (2024)</li>
          <li>Diploma in Computer Science & Engineering (2020) – Scored 74%</li>
          <li>High School (2015) – Scored 81%</li>
        </ul>
      </div>

      {/* Experience */}
      <div>
        <h2 className="text-2xl font-semibold mb-4 text-white">Experience</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>
            Data Engineer at <strong>NavAdr Technology Solution</strong> <br />
            <span className="text-sm text-muted-foreground">
              Jan 2025 – Present
            </span>
          </li>
          <li>
            Full Stack Developer at <strong>V Connect Pvt. Ltd</strong> <br />
            <span className="text-sm text-muted-foreground">
              July 2024 – Jan 2025
            </span>
          </li>
        </ul>
      </div>

      {/* Certifications */}
      <div>
        <h2 className="text-2xl font-semibold mb-4 text-white">
          Certifications
        </h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Full-Stack Bootcamp 2023 – Udemy</li>
          <li>JavaScript Trainee (Remote) – RecruitNXT</li>
          <li>Data Structures & Algorithms in JavaScript – Udemy</li>
          <li>React: Zero to Mastery – Udemy</li>
        </ul>
      </div>

      {/* Hobbies & Interests */}
      <div>
        <h2 className="text-2xl font-semibold mb-4 text-white">
          Hobbies & Interests
        </h2>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <strong>Books I’ve Read:</strong>
            <ul className="list-disc list-inside ml-6">
              <li>The Master Algorithm – Pedro Domingos</li>
              <li>Atomic Habits – James Clear</li>
              <li>The Quick and Easy Way to Effective Speaking</li>
              <li>Think and Grow Rich – Napoleon Hill</li>
            </ul>
          </li>
          <li>Playing football</li>
          <li>Listening to music</li>
          <li>Travelling and exploring places & new technologies</li>
        </ul>
      </div>
    </section>
  );
}
