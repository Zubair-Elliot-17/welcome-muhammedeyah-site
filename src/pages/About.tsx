import { BookOpen, Users, Heart, Award, Star, Shield } from "lucide-react";
import schoolBuildingImg from "@/assets/school-building.jpg";

const About = () => {
  return (
    <div>
      {/* Hero banner */}
      <section className="relative overflow-hidden">
        <img
          src={schoolBuildingImg}
          alt="Muhammedeyah Primary School campus"
          className="h-64 w-full object-cover md:h-80"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-primary/30" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <h1 className="font-heading text-4xl font-extrabold text-primary-foreground md:text-5xl">
              About Our School
            </h1>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="bg-school-warm-bg py-16">
        <div className="container mx-auto max-w-3xl px-4">
          <span className="mb-2 inline-block text-sm font-semibold text-secondary">Our Story</span>
          <h2 className="mb-6 font-heading text-3xl font-bold text-foreground">
            Building Futures Since Day One
          </h2>
          <div className="space-y-4 leading-relaxed text-muted-foreground">
            <p>
              Muhammedeyah Primary School is a cornerstone of our Cape Town community.
              Established to provide quality education for children in the area, our school
              has grown into a vibrant learning institution where academic excellence meets
              warm, family-oriented values.
            </p>
            <p>
              We serve learners from Grade R to Grade 7, offering a well-rounded curriculum
              that includes academics, sports, arts, and cultural activities. Our dedicated
              staff goes above and beyond to ensure every child feels valued and supported.
            </p>
            <p>
              At the heart of our school is a strong sense of community. We believe that
              education is a partnership between the school, parents, and the broader community,
              and we work together to create the best possible environment for our children to
              thrive.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <span className="mb-2 inline-block text-sm font-semibold text-secondary">What We Stand For</span>
          <h2 className="mb-10 font-heading text-3xl font-bold text-foreground">Our Values</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: Heart, title: "Compassion", desc: "We treat every person with kindness, empathy, and respect." },
              { icon: Star, title: "Excellence", desc: "We strive for the highest standards in everything we do." },
              { icon: Users, title: "Community", desc: "We build strong bonds between learners, families, and staff." },
              { icon: Shield, title: "Integrity", desc: "We act with honesty and take responsibility for our actions." },
              { icon: BookOpen, title: "Curiosity", desc: "We encourage questioning, exploration, and a love for learning." },
              { icon: Award, title: "Inclusivity", desc: "We celebrate diversity and ensure every child feels welcome." },
            ].map((v) => (
              <div key={v.title} className="rounded-2xl bg-card p-6 shadow-sm ring-1 ring-border">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-school-gold-soft">
                  <v.icon size={28} className="text-school-navy" />
                </div>
                <h3 className="mb-2 font-heading text-lg font-bold text-foreground">{v.title}</h3>
                <p className="text-sm text-muted-foreground">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
