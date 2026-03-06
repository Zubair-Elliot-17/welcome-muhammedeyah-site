import { Users, BookOpen, ClipboardList } from "lucide-react";

const staffGroups = [
  {
    icon: Users,
    role: "Principal",
    description: "School leadership, vision, and overall management of Muhammadeyah Primary School.",
  },
  {
    icon: BookOpen,
    role: "Teachers",
    description:
      "28 dedicated educators covering all grades from Grade R to Grade 7, including Islamic studies, Arabic reading, remedial education, physical education, and creative arts.",
  },
  {
    icon: ClipboardList,
    role: "Administrative Staff",
    description:
      "Our admin team ensures the smooth day-to-day operations of the school, supporting learners, parents, and teachers alike.",
  },
];

const Staff = () => {
  return (
    <div className="bg-school-warm-bg py-16">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <span className="mb-2 inline-block text-sm font-semibold text-secondary">
            Meet Our Team
          </span>
          <h1 className="mb-4 font-heading text-4xl font-extrabold text-foreground">
            Our Dedicated Staff
          </h1>
          <p className="mx-auto max-w-xl text-muted-foreground">
            Our caring and experienced educators are passionate about making a difference
            in every child's life.
          </p>
        </div>

        <div className="mx-auto grid max-w-3xl gap-6">
          {staffGroups.map((group) => (
            <div
              key={group.role}
              className="flex items-start gap-5 rounded-2xl bg-card p-8 shadow-sm ring-1 ring-border transition-shadow hover:shadow-md"
            >
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-school-gold-soft">
                <group.icon size={28} className="text-school-navy" />
              </div>
              <div>
                <h3 className="font-heading text-xl font-bold text-foreground">{group.role}</h3>
                <p className="mt-1 leading-relaxed text-muted-foreground">{group.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Staff;
