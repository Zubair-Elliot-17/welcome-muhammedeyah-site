import { Calendar, Pin, Bell, Megaphone } from "lucide-react";

const notices = [
  {
    icon: Bell,
    date: "20 February 2026",
    title: "School Reopens for Term 1",
    body: "We welcome all learners back! Please ensure uniforms are in order and stationery is packed.",
    pinned: true,
  },
  {
    icon: Megaphone,
    date: "18 February 2026",
    title: "Parent Meeting – Grade 1 & 2",
    body: "A parent information session for Grade 1 & 2 parents will be held in the school hall at 6:00 PM.",
    pinned: true,
  },
  {
    icon: Calendar,
    date: "14 February 2026",
    title: "Sports Day – 28 February",
    body: "Our annual inter-house sports day is approaching! Learners must wear their house colours. Parents are welcome to attend and cheer.",
    pinned: false,
  },
  {
    icon: Calendar,
    date: "10 February 2026",
    title: "Fundraiser: Cake Sale",
    body: "Join us for a delicious cake sale to raise funds for new library books. Donations of baked goods are most welcome!",
    pinned: false,
  },
  {
    icon: Bell,
    date: "5 February 2026",
    title: "Uniform Drive",
    body: "If you have gently used school uniforms, please donate them at the front office to help families in need.",
    pinned: false,
  },
  {
    icon: Megaphone,
    date: "1 February 2026",
    title: "Aftercare Registration Open",
    body: "Limited spots available for our aftercare programme. Contact the office to register your child.",
    pinned: false,
  },
];

const NoticeBoard = () => {
  return (
    <div className="bg-school-warm-bg py-16">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <span className="mb-2 inline-block text-sm font-semibold text-secondary">
            Stay Informed
          </span>
          <h1 className="mb-4 font-heading text-4xl font-extrabold text-foreground">
            Notice Board
          </h1>
          <p className="mx-auto max-w-xl text-muted-foreground">
            Keep up with the latest news, events, and announcements from our school community.
          </p>
        </div>

        <div className="mx-auto max-w-3xl space-y-5">
          {notices.map((notice, i) => (
            <div
              key={i}
              className={`rounded-2xl bg-card p-6 shadow-sm ring-1 transition-shadow hover:shadow-md ${
                notice.pinned ? "ring-secondary/50" : "ring-border"
              }`}
            >
              <div className="mb-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className={`flex h-9 w-9 items-center justify-center rounded-lg ${
                    notice.pinned ? "bg-school-gold-soft" : "bg-muted"
                  }`}>
                    <notice.icon size={18} className={notice.pinned ? "text-school-navy" : "text-muted-foreground"} />
                  </div>
                  <span className="text-xs font-medium text-muted-foreground">{notice.date}</span>
                </div>
                {notice.pinned && (
                  <span className="flex items-center gap-1 rounded-full bg-secondary/20 px-2 py-0.5 text-xs font-semibold text-secondary-foreground">
                    <Pin size={12} /> Pinned
                  </span>
                )}
              </div>
              <h3 className="mb-2 font-heading text-lg font-bold text-foreground">{notice.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{notice.body}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NoticeBoard;
