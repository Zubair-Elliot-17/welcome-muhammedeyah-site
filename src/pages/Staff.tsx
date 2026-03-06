import placeholderPrincipal from "@/assets/placeholder-principal.png";
import placeholderTeacher from "@/assets/placeholder-staff.png";
import placeholderAdmin from "@/assets/placeholder-admin.png";

const Staff = () => {
  return (
    <div className="bg-school-warm-bg py-16">
      <div className="container mx-auto px-4">
        {/* Page Header */}
        <div className="mb-16 text-center">
          <span className="mb-2 inline-block text-sm font-semibold text-secondary">
            Meet Our Team
          </span>
          <h1 className="mb-4 font-heading text-4xl font-extrabold text-foreground">
            Our Dedicated Staff
          </h1>
          <p className="mx-auto max-w-xl text-muted-foreground">
            Our caring and experienced team is passionate about making a difference
            in every child's life.
          </p>
        </div>

        {/* Principal Section */}
        <section className="mb-16">
          <h2 className="mb-8 text-center font-heading text-2xl font-bold text-foreground">
            Principal
          </h2>
          <div className="mx-auto max-w-xs">
            <div className="flex flex-col items-center rounded-2xl bg-card p-8 shadow-sm ring-1 ring-border text-center">
              <div className="mb-4 flex h-32 w-32 items-center justify-center overflow-hidden rounded-full bg-muted ring-4 ring-secondary/30">
                <img
                  src={placeholderPrincipal}
                  alt="Principal placeholder"
                  className="h-full w-full object-cover"
                />
              </div>
              <h3 className="font-heading text-lg font-bold text-foreground">Principal</h3>
              <p className="mt-1 text-sm text-muted-foreground">School Leadership</p>
            </div>
          </div>
        </section>

        {/* Teachers Section */}
        <section className="mb-16">
          <h2 className="mb-2 text-center font-heading text-2xl font-bold text-foreground">
            Teachers
          </h2>
          <p className="mb-8 text-center text-sm text-muted-foreground">21 dedicated educators</p>
          <div className="grid gap-5 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7">
            {Array.from({ length: 21 }).map((_, i) => (
              <div
                key={`teacher-${i}`}
                className="flex flex-col items-center rounded-2xl bg-card p-5 shadow-sm ring-1 ring-border text-center transition-shadow hover:shadow-md"
              >
                <div className="mb-3 flex h-20 w-20 items-center justify-center overflow-hidden rounded-full bg-muted ring-4 ring-secondary/20">
                  <img
                    src={placeholderTeacher}
                    alt="Teacher placeholder"
                    className="h-full w-full object-cover"
                  />
                </div>
                <h3 className="font-heading text-sm font-bold text-foreground">Teacher</h3>
              </div>
            ))}
          </div>
        </section>

        {/* Administrative Staff Section */}
        <section>
          <h2 className="mb-2 text-center font-heading text-2xl font-bold text-foreground">
            Administrative Staff
          </h2>
          <p className="mb-8 text-center text-sm text-muted-foreground">10 support team members</p>
          <div className="grid gap-5 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {Array.from({ length: 10 }).map((_, i) => (
              <div
                key={`admin-${i}`}
                className="flex flex-col items-center rounded-2xl bg-card p-5 shadow-sm ring-1 ring-border text-center transition-shadow hover:shadow-md"
              >
                <div className="mb-3 flex h-20 w-20 items-center justify-center overflow-hidden rounded-full bg-muted ring-4 ring-secondary/20">
                  <img
                    src={placeholderAdmin}
                    alt="Administrative staff placeholder"
                    className="h-full w-full object-cover"
                  />
                </div>
                <h3 className="font-heading text-sm font-bold text-foreground">Administrative Staff</h3>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Staff;
