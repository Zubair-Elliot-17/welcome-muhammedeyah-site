import { BookOpen, Star, Target, History, Award, Users } from "lucide-react";

const About = () => {
  return (
    <div>
      {/* Hero banner */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary to-school-navy-light py-20">
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
              Muhammadeyah is a primary school under the Western Cape Education Department. We are based in the Wynberg residential area – The school first opened its doors to the learners of the community in 1929 with Mr. M.S. Berdien as the first principal. They first conducted a so-called Garden School where the teachers offered their services free of charge. Emanating from this selfless dedication and commitment of the pioneers was the birth of Muhammadeyah Primary School – an institution developed by the community, for the community and dedicated to teaching and learning within an Islamic context.
            </p>
            <blockquote className="border-l-4 border-secondary pl-4 italic text-foreground/80">
              "Children do not only come to school to merely write and pass exams but rather to Live, to laugh and play and to do the things they enjoy doing and to respect and adopt the norms and values of their elders. When children are happy, teachers are happy; Muhammadeyah is a happy school!"
              <span className="mt-2 block text-sm not-italic text-muted-foreground">— Mr. Solomons</span>
            </blockquote>
            <p>
              To quote Mr. Solomons at the end of his 36 years as principal: "The school progressed from a non-entity to an educational institution commanding the respect of the community at large." Mr. Jedaar, Mr. Gamiet and Mr. Ismail were at the helm of affairs during the history of our school, building on passionately and enthusiastically from their predecessors. Mr. Ismail was tasked with taking the school into the next level of the high-tech and internet period. Mr. Salie was the Acting principal until the end of March 2019. Mr. E. Abrahams took over the principal reins from Mr. Ismail in April 2019 and is currently leading the school.
            </p>
          </div>

          {/* Stats */}
          <div className="mt-10 rounded-2xl bg-primary p-8">
            <h3 className="mb-6 font-heading text-xl font-bold text-primary-foreground">
              Muhammadeyah Today
            </h3>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[
                "Close to 800 learners",
                "28 teachers",
                "24 classes",
                "Computer room",
                "Islamic & Arabic reading teachers",
                "Remedial & 2 PE teachers",
                "1 Creative Arts teacher",
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
              Besides the full WCED curriculum, we participate in sport as we are very passionate about it and we have a strong belief in the holistic development of our learners:
            </p>
            <div className="flex flex-wrap gap-2">
              {["Athletics", "Soccer", "Cricket", "Cycling", "Calligraphy", "Chess", "Archery", "Netball", "Nasheed Groups", "Mini Cricket"].map((activity) => (
                <span key={activity} className="rounded-full bg-school-gold-soft px-4 py-1.5 text-sm font-semibold text-school-navy">
                  {activity}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
