import principalImg from "@/assets/principal.jpg";

const staffMembers = [
  { name: "Mrs. N. Davids", role: "Principal", subject: "School Leadership", img: principalImg },
  { name: "Mr. A. Jacobs", role: "Deputy Principal", subject: "Mathematics", img: null },
  { name: "Ms. F. Adams", role: "Grade 1 Teacher", subject: "Foundation Phase", img: null },
  { name: "Mrs. S. Petersen", role: "Grade 2 Teacher", subject: "Foundation Phase", img: null },
  { name: "Mr. R. Khan", role: "Grade 3 Teacher", subject: "Intermediate Phase", img: null },
  { name: "Ms. L. Williams", role: "Grade 4 Teacher", subject: "Languages & Social Sciences", img: null },
  { name: "Mr. T. Abrahams", role: "Grade 5 Teacher", subject: "Natural Sciences", img: null },
  { name: "Mrs. Z. Moosa", role: "Grade 6 Teacher", subject: "Mathematics & Technology", img: null },
  { name: "Ms. D. Hendricks", role: "Grade 7 Teacher", subject: "English & Life Skills", img: null },
  { name: "Mr. J. September", role: "Sports Coordinator", subject: "Physical Education", img: null },
  { name: "Mrs. H. Isaacs", role: "Librarian", subject: "Library & Reading", img: null },
  { name: "Ms. C. Daniels", role: "Admin Secretary", subject: "Administration", img: null },
];

const getInitials = (name: string) => {
  const parts = name.replace(/Mrs\.|Mr\.|Ms\./, "").trim().split(" ");
  return parts.map((p) => p[0]).join("").toUpperCase();
};

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

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {staffMembers.map((member) => (
            <div
              key={member.name}
              className="flex flex-col items-center rounded-2xl bg-card p-6 shadow-sm ring-1 ring-border text-center transition-shadow hover:shadow-md"
            >
              {member.img ? (
                <img
                  src={member.img}
                  alt={member.name}
                  className="mb-4 h-28 w-28 rounded-full object-cover ring-4 ring-school-gold-soft"
                />
              ) : (
                <div className="mb-4 flex h-28 w-28 items-center justify-center rounded-full bg-primary font-heading text-2xl font-bold text-primary-foreground ring-4 ring-school-gold-soft">
                  {getInitials(member.name)}
                </div>
              )}
              <h3 className="font-heading text-lg font-bold text-foreground">{member.name}</h3>
              <p className="text-sm font-semibold text-secondary">{member.role}</p>
              <p className="mt-1 text-xs text-muted-foreground">{member.subject}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Staff;
