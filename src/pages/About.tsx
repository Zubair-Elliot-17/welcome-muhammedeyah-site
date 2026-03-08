import { BookOpen, Star, Target, History, Award, Users } from "lucide-react";

const About = () => {
  return (
    <div>
      {/* Hero banner */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary to-[hsl(216,45%,28%)] py-20">
        <div className="absolute left-0 top-0 h-full w-1/2 bg-gradient-to-r from-secondary/10 to-transparent" />
        <div className="container relative mx-auto px-4 text-center">
          <h1 className="font-heading text-4xl font-extrabold text-primary-foreground md:text-5xl">
            Muhammadeyah Primary School
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-primary-foreground/70">
            Established 1929 · Wynberg, Cape Town
          </p>
        </div>
      </section>

      {/* Our Name */}
      <section className="bg-school-warm-bg py-16">
        <div className="container mx-auto max-w-3xl px-4">
          <div className="mb-2 flex items-center gap-2">
            <Star size={20} className="text-secondary" />
            <span className="text-sm font-semibold text-secondary">Our Name</span>
          </div>
          <h2 className="mb-6 font-heading text-3xl font-bold text-foreground">
            The Meaning Behind Our Name
          </h2>
          <p className="leading-relaxed text-muted-foreground">
            It was in 1929 during the month of Rabiul Awwal, the month of the birth of our beloved Prophet (SAW), when the founding fathers contemplated an appropriate name for the school. They decided to name the school Muhammadeyah in honour of our beloved Prophet Muhammad (SAW).
          </p>
        </div>
      </section>

      {/* Mission & Motto */}
      <section className="py-16">
        <div className="container mx-auto max-w-3xl px-4">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-2xl bg-card p-8 shadow-sm ring-1 ring-border">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-school-gold-soft">
                <Target size={28} className="text-school-navy" />
              </div>
              <h3 className="mb-3 font-heading text-xl font-bold text-foreground">Mission Statement</h3>
              <p className="leading-relaxed text-muted-foreground">
                To strive towards an education of the highest calibre through a holistic approach to learning and teaching according to the norms and values of Islam.
              </p>
            </div>
            <div className="rounded-2xl bg-card p-8 shadow-sm ring-1 ring-border">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-school-gold-soft">
                <BookOpen size={28} className="text-school-navy" />
              </div>
              <h3 className="mb-3 font-heading text-xl font-bold text-foreground">School Motto</h3>
              <p className="leading-relaxed text-muted-foreground">
                The inscription on our school badge is:
              </p>
              <p className="mt-2 font-heading text-2xl font-extrabold text-secondary">
                Iqra — "Read!"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="bg-school-warm-bg py-16">
        <div className="container mx-auto max-w-3xl px-4">
          <div className="mb-2 flex items-center gap-2">
            <Award size={20} className="text-secondary" />
            <span className="text-sm font-semibold text-secondary">Introduction</span>
          </div>
          <h2 className="mb-6 font-heading text-3xl font-bold text-foreground">
            About Our School
          </h2>
          <div className="space-y-4 leading-relaxed text-muted-foreground">
            <p>
              Muhammadeyah is a primary school under the Western Cape Education Department located in the Wynberg residential area in the Southern Suburbs of Cape Town.
            </p>
            <p>
              The school was established to serve the Muslim community by providing an education that combines traditional Islamic learning with the tools needed to participate actively and creatively in modern society.
            </p>
            <p>
              Muhammadeyah Primary School first opened its doors in 1929 and has since grown into a respected institution known both locally and internationally, with former students living and working across the world.
            </p>
          </div>
        </div>
      </section>

      {/* History */}
      <section className="py-16">
        <div className="container mx-auto max-w-3xl px-4">
          <div className="mb-2 flex items-center gap-2">
            <History size={20} className="text-secondary" />
            <span className="text-sm font-semibold text-secondary">Our History</span>
          </div>
          <h2 className="mb-6 font-heading text-3xl font-bold text-foreground">
            A Legacy of Community & Learning
          </h2>
          <div className="space-y-4 leading-relaxed text-muted-foreground">
            <p>
              Muhammadeyah Primary School was established through the efforts of the Moslem Education Trust (MET), founded in 1927 with the goal of creating a Muslim school for the community.
            </p>
            <p>
              The first teacher and principal was the founding principal, who helped start what was initially a small "Garden School" where teachers volunteered their services. From this dedication, Muhammadeyah Primary School was born — a school built by the community, for the community.
            </p>
            <p>
              Over the decades, successive principals and teachers strengthened the institution and guided it through periods of growth and social change. The school expanded physically with additional classrooms and a hall to accommodate more learners.
            </p>
          </div>

          {/* Stats */}
          <div className="mt-10 rounded-2xl bg-primary p-8">
            <h3 className="mb-6 font-heading text-xl font-bold text-primary-foreground">
              Muhammadeyah Today
            </h3>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[
                "720 learners",
                "28 teachers",
                "21 classes",
                "Two computer rooms",
                "Islamic & Arabic teachers",
                "Remedial education support",
              ].map((stat) => (
                <div key={stat} className="rounded-xl bg-primary-foreground/10 px-4 py-3 text-sm font-semibold text-primary-foreground">
                  {stat}
                </div>
              ))}
            </div>
          </div>

          {/* Activities */}
          <div className="mt-10">
            <h3 className="mb-4 font-heading text-xl font-bold text-foreground">
              Learner Activities
            </h3>
            <p className="mb-4 text-muted-foreground">
              The school promotes an Islamic environment and holistic education while following the full curriculum of the Western Cape Education Department. Learners participate in activities including:
            </p>
            <div className="flex flex-wrap gap-2">
              {["Swimming", "Athletics", "Soccer", "Volleyball", "Cricket", "Cycling", "Hiking"].map((activity) => (
                <span key={activity} className="rounded-full bg-school-gold-soft px-4 py-1.5 text-sm font-semibold text-school-navy">
                  {activity}
                </span>
              ))}
            </div>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              The school has achieved strong academic performance in national and systemic assessments, demonstrating excellence in both Mathematics and English.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
