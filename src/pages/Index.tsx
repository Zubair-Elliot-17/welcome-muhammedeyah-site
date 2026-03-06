import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, Image, Users, Heart } from "lucide-react";
import schoolBuildingImg from "@/assets/school-building.jpg";

const Index = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-primary">
        <div className="container relative mx-auto px-4 py-24 md:py-36">
          <div className="max-w-2xl">
            <span className="mb-4 inline-block rounded-full bg-secondary/20 px-4 py-1 text-sm font-semibold text-secondary">
              Welcome to Our School Family
            </span>
            <h1 className="mb-6 font-heading text-4xl font-extrabold leading-tight text-primary-foreground md:text-5xl lg:text-6xl">
              Muhammadeyah Primary School
            </h1>
            <p className="mb-8 text-lg leading-relaxed text-primary-foreground/80">
              A warm, nurturing environment where every child is valued, inspired,
              and empowered to walk on the Straight Path — in the heart of Cape Town.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 rounded-xl bg-secondary px-6 py-3 font-heading font-bold text-secondary-foreground transition-transform hover:scale-105"
              >
                Learn More <ArrowRight size={18} />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-xl border-2 border-primary-foreground/30 px-6 py-3 font-heading font-bold text-primary-foreground transition-colors hover:bg-primary-foreground/10"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="bg-school-warm-bg py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl">
            <span className="mb-2 inline-block text-sm font-semibold text-secondary">
              Welcome
            </span>
            <h2 className="mb-6 font-heading text-3xl font-bold text-foreground">
              Welcome
            </h2>
            <div className="space-y-4 leading-relaxed text-muted-foreground">
              <p className="font-heading text-lg font-semibold text-foreground italic">
                Assalaamu alaykum wa rahmatullahi wa barakatu
              </p>
              <p>
                A warm welcome to your "loved one" to Muhammadeyah. May his / her stay with us be a prosperous, happy, exciting and learner-friendly one, Insha-Allah. Our aim is to equip the child to walk on the Straight Path towards Allah. This aim can be achieved through parent-child-teacher cooperation.
              </p>
              <p>
                By joining the Muhammadeyah family you and your child have become part of a school with a very rich history and a proud tradition which we hope you will help to preserve.
              </p>
              <p>
                We hope that your child will be happy and successful at Muhammadeyah, Insha-Allah.
              </p>
              <div className="mt-6 border-l-4 border-secondary pl-4">
                <p className="text-sm text-muted-foreground">With best wishes,</p>
                <p className="font-heading font-bold text-foreground italic">
                  "Your partner in education"
                </p>
                <p className="font-heading font-bold text-foreground">Principal</p>
                <p className="text-sm text-muted-foreground">Muhammadeyah Primary School</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Community */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <span className="mb-2 inline-block text-sm font-semibold text-secondary">
            Together We Grow
          </span>
          <h2 className="mb-4 font-heading text-3xl font-bold text-foreground">
            Our Community
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-muted-foreground">
            We are more than a school — we are a family. Parents, teachers, and learners
            come together to create an environment built on respect, care, and shared values.
          </p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Heart, label: "Caring Environment", desc: "A safe space where every child is loved" },
              { icon: BookOpen, label: "Quality Education", desc: "A curriculum that inspires curiosity" },
              { icon: Users, label: "Strong Community", desc: "Parents and teachers working together" },
              { icon: Image, label: "Rich Experiences", desc: "Sports, arts, culture and more" },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-2xl bg-card p-6 shadow-md ring-1 ring-border transition-shadow hover:shadow-lg"
              >
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-school-gold-soft">
                  <item.icon size={28} className="text-school-navy" />
                </div>
                <h3 className="mb-2 font-heading text-lg font-bold text-foreground">
                  {item.label}
                </h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="bg-school-warm-bg py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-6 md:grid-cols-2">
            <Link
              to="/notices"
              className="group relative overflow-hidden rounded-2xl bg-primary p-8 transition-transform hover:scale-[1.02]"
            >
              <div className="relative z-10">
                <BookOpen size={36} className="mb-4 text-secondary" />
                <h3 className="mb-2 font-heading text-2xl font-bold text-primary-foreground">
                  Notice Board
                </h3>
                <p className="mb-4 text-primary-foreground/70">
                  Stay up to date with the latest announcements, events, and important school news.
                </p>
                <span className="inline-flex items-center gap-1 font-semibold text-secondary transition-transform group-hover:translate-x-1">
                  View Notices <ArrowRight size={16} />
                </span>
              </div>
            </Link>
            <Link
              to="/gallery"
              className="group relative overflow-hidden rounded-2xl"
            >
              <img
                src={schoolBuildingImg}
                alt="School campus"
                className="h-full w-full object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
              <div className="absolute bottom-0 left-0 p-8">
                <Image size={36} className="mb-4 text-secondary" />
                <h3 className="mb-2 font-heading text-2xl font-bold text-primary-foreground">
                  Photo Gallery
                </h3>
                <p className="mb-4 text-primary-foreground/70">
                  Explore moments from school events, sports days, and celebrations.
                </p>
                <span className="inline-flex items-center gap-1 font-semibold text-secondary transition-transform group-hover:translate-x-1">
                  View Gallery <ArrowRight size={16} />
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
