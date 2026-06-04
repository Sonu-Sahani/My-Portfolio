export const Education = () => {
  const EDUCATIONS = [
    {
      period: "2023 — Present",
      degree: "Bachelor of Technology in Computer Science & Engineering",
      institution: "MNNIT Allahabad",
      location: "Prayagraj, India",
      description:
        "Pursuing a B.Tech in Computer Science and Engineering with a strong focus on Full Stack Development, Data Structures & Algorithms, Operating Systems, and Software Engineering. Actively building real-world web applications and exploring AI/ML concepts.",
      technologies: [
        "DSA",
        "React.js",
        "Node.js",
        "MongoDB",
        "JavaScript",
        "Operating Systems",
      ],
      current: true,
    },
    {
      period: "2021 — 2022",
      degree: "Higher Secondary Education",
      institution: "Nasa National College",
      location: "Kathmandu, Nepal",
      description:
        "Completed higher secondary education with a strong academic foundation in mathematics, science, and computer fundamentals, which sparked my interest in software development and technology.",
      technologies: [
        "Mathematics",
        "Physics",
        "Computer Science",
        "Problem Solving",
      ],
    },
    {
      period: "2018 — 2020",
      degree: "Secondary Education",
      institution: "Shree Amar Secondary School",
      location: "Bara, Nepal",
      description:
        "Built a strong academic foundation while developing analytical thinking, discipline, and an early interest in computers and technology.",
      technologies: ["Science", "Mathematics", "Communication", "Leadership"],
    },
  ];

  return (
    <section id="education" className="py-32 relative overflow-hidden">
      <div
        className="absolute top-1/2 right-1/4 w-96
        h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2"
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span
            className="text-secondary-foreground text-sm
            font-medium tracking-wider uppercase animate-fade-in"
          >
            Academic Journey
          </span>

          <h2
            className="text-4xl md:text-5xl font-bold
            mt-4 mb-6 animate-fade-in animation-delay-100
            text-secondary-foreground"
          >
            Education that{" "}
            <span className="font-serif italic font-normal text-white">
              shapes the future.
            </span>
          </h2>

          <p
            className="text-muted-foreground
            animate-fade-in animation-delay-200"
          >
            The academic foundation that helped me develop technical expertise,
            problem-solving abilities, and a passion for software engineering.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/70 via-primary/30 to-transparent md:-translate-x-1/2 shadow-[0_0_25px_rgba(32,178,166,0.8)]" />

          <div className="space-y-12">
            {EDUCATIONS.map((edu, idx) => (
              <div
                key={idx}
                className="relative grid md:grid-cols-2 gap-8 animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 150}ms` }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background z-10">
                  {edu.current && (
                    <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />
                  )}
                </div>

                {/* Content */}
                <div
                  className={`pl-8 md:pl-0 ${
                    idx % 2 === 0
                      ? "md:pr-16 md:text-right"
                      : "md:col-start-2 md:pl-16"
                  }`}
                >
                  <div className="glass p-6 rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-500">
                    <span className="text-sm text-primary font-medium">
                      {edu.period}
                    </span>

                    <h3 className="text-xl font-semibold mt-2">{edu.degree}</h3>

                    <p className="text-muted-foreground">{edu.institution}</p>

                    {edu.location && (
                      <p className="text-sm text-primary mt-1">
                        {edu.location}
                      </p>
                    )}

                    <p className="text-sm text-muted-foreground mt-4">
                      {edu.description}
                    </p>

                    <div
                      className={`flex flex-wrap gap-2 mt-4 ${
                        idx % 2 === 0 ? "md:justify-end" : ""
                      }`}
                    >
                      {edu.technologies.map((tech, techIdx) => (
                        <span
                          key={techIdx}
                          className="px-3 py-1 bg-surface text-xs rounded-full text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
