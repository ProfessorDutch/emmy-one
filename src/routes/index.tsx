import { createFileRoute } from "@tanstack/react-router";
import heroNightstand from "@/assets/hero-nightstand.jpg";
import handPhoneSearch from "@/assets/hand-phone-search.jpg";
import emptyOffice from "@/assets/empty-office-phone.jpg";
import painters from "@/assets/painters-working.jpg";
import handsAppointment from "@/assets/hands-phone-appointment.jpg";
import phoneDark from "@/assets/phone-dark-waiting.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "MeetEmmy — Every call answered. Every hour of the day." },
      {
        name: "description",
        content:
          "The person with the collapsed wall doesn't compare companies. They call the first one that picks up. Emmy makes sure that's you.",
      },
      { property: "og:title", content: "MeetEmmy — Every call answered." },
      {
        property: "og:description",
        content:
          "They weren't choosing between you and your competitor. They were moving down a list until somebody helped them.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

const PHONE = "(888) 555-1212";

function Index() {
  return (
    <main className="bg-background text-foreground overflow-x-hidden">
      <Hero />
      <SearchScene />
      <AngiMock />
      <CallSequence />
      <TwentyFourSeven />
      <Proof />
      <Emmy />
      <CTA />
      <Footer />
    </main>
  );
}

/* ---------------- HERO ---------------- */

function Hero() {
  return (
    <section className="relative min-h-[100vh] flex items-end overflow-hidden bg-night">
      <img
        src={heroNightstand}
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-30"
        width={1920}
        height={1080}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(20,15,10,0.55) 0%, rgba(20,15,10,0.7) 70%, rgba(20,15,10,0.92) 100%)",
        }}
      />
      <div className="relative z-10 w-full px-6 md:px-12 pb-24 md:pb-32 pt-32">
        <div className="mx-auto max-w-[1280px]">
          <div className="measure">
            <p
              className="eyebrow mb-10"
              style={{ color: "rgba(247,245,240,0.55)" }}
            >
              MeetEmmy / A scene
            </p>
            <p
              className="font-display-italic mb-8"
              style={{
                fontSize: "clamp(20px, 2vw, 26px)",
                color: "rgba(247,245,240,0.7)",
              }}
            >
              2:07 am
            </p>
            <h1
              className="hero-type"
              style={{ color: "rgba(247,245,240,0.96)" }}
            >
              Your retaining wall just gave way. You don't know how much of the
              yard went with it. It rained hard last night.
            </h1>
            <p
              className="body-lg mt-8"
              style={{ color: "rgba(247,245,240,0.7)" }}
            >
              Your wife is standing at the back door. You've got a slope, a
              mess, and no idea who to call.
            </p>
            <p
              className="font-display-italic mt-10"
              style={{
                fontSize: "clamp(22px, 2.2vw, 30px)",
                color: "rgba(247,245,240,0.85)",
              }}
            >
              So you do what every person does.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- SEARCH SCENE ---------------- */

function SearchScene() {
  return (
    <section className="section bg-background">
      <div className="mx-auto max-w-[1280px] px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-center">
          <div>
            <p className="eyebrow mb-8">Chapter one</p>
            <h2 className="section-opener mb-8">The search.</h2>
            <p className="body-lg measure">
              You open your phone. You search. You find a page that looks like
              this.
            </p>
          </div>
          <div className="relative">
            <img
              src={handPhoneSearch}
              alt="A hand holding a phone showing search results"
              loading="lazy"
              width={1600}
              height={1200}
              className="w-full h-auto object-cover"
              style={{ filter: "saturate(0.85) contrast(1.02)" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- ANGI-STYLE MOCK INSIDE PHONE ---------------- */

function AngiMock() {
  const companies = [
    { initials: "AC", name: "All-Star Concrete & Masonry", years: 14, rating: "4.9", reviews: 312 },
    { initials: "PW", name: "ProWall Solutions", years: 9, rating: "4.8", reviews: 278 },
    { initials: "HL", name: "Heritage Landscape & Stone", years: 11, rating: "4.9", reviews: 194 },
    { initials: "BM", name: "Benchmark Hardscapes", years: 7, rating: "4.8", reviews: 156 },
  ];

  return (
    <section className="section bg-background">
      <div className="mx-auto max-w-[1280px] px-6 md:px-12">
        <div className="flex justify-center">
          {/* Phone frame */}
          <div
            className="relative"
            style={{
              width: "min(360px, 90vw)",
              padding: "14px",
              borderRadius: "52px",
              background: "linear-gradient(180deg, #1a1a18 0%, #2a2826 100%)",
              boxShadow:
                "0 40px 80px -20px rgba(28,28,26,0.35), 0 0 0 2px rgba(28,28,26,0.08)",
            }}
          >
            <div
              className="relative overflow-hidden bg-white"
              style={{ borderRadius: "40px", aspectRatio: "9/19" }}
            >
              {/* notch */}
              <div
                className="absolute top-2 left-1/2 -translate-x-1/2 z-20"
                style={{
                  width: "100px",
                  height: "24px",
                  borderRadius: "14px",
                  background: "#0a0a08",
                }}
              />
              {/* status bar */}
              <div className="flex justify-between items-center px-7 pt-3 text-[11px] font-medium text-[#1C1C1A]">
                <span>9:44</span>
                <span className="opacity-0">.</span>
              </div>
              {/* search bar */}
              <div className="px-4 pt-6">
                <div
                  className="flex items-center gap-2 px-3 py-2 rounded-full border"
                  style={{ borderColor: "#e5e5e2", background: "#fafaf8" }}
                >
                  <span className="text-[#9b9b97] text-xs">⌕</span>
                  <span
                    className="text-[12px] text-[#3a3a37] truncate"
                    style={{ fontFamily: "var(--font-sans)" }}
                  >
                    retaining wall repair near me
                  </span>
                </div>
              </div>
              {/* results */}
              <div className="px-4 pt-4 space-y-3">
                {companies.map((c) => (
                  <div
                    key={c.initials}
                    className="rounded-xl border p-3"
                    style={{ borderColor: "#ececea", background: "#fff" }}
                  >
                    <div className="flex gap-3">
                      <div
                        className="flex items-center justify-center text-[11px] font-medium text-white shrink-0"
                        style={{
                          width: 40,
                          height: 40,
                          borderRadius: 8,
                          background: "#1C1C1A",
                        }}
                      >
                        {c.initials}
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-1.5 mb-0.5">
                          <p
                            className="text-[12px] font-medium text-[#1C1C1A] truncate"
                            style={{ fontFamily: "var(--font-sans)" }}
                          >
                            {c.name}
                          </p>
                        </div>
                        <p
                          className="text-[10px] text-[#6B6B67] mb-1"
                          style={{ fontFamily: "var(--font-sans)" }}
                        >
                          Licensed • Insured • {c.years} yrs
                        </p>
                        <div className="flex items-center gap-1.5">
                          <span className="text-[10px] text-[#1C1C1A]">
                            ★★★★★
                          </span>
                          <span
                            className="text-[10px] text-[#6B6B67]"
                            style={{ fontFamily: "var(--font-sans)" }}
                          >
                            {c.rating} ({c.reviews})
                          </span>
                          <span
                            className="ml-auto text-[9px] uppercase tracking-wider px-1.5 py-0.5 rounded"
                            style={{
                              background: "#f3efe6",
                              color: "#1C1C1A",
                              fontFamily: "var(--font-sans)",
                              fontWeight: 500,
                            }}
                          >
                            Top Pro
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto measure mt-20 md:mt-28">
          <p className="font-display-italic mb-6" style={{ fontSize: "clamp(24px, 2.4vw, 32px)", lineHeight: 1.25 }}>
            Every company on this page is qualified. Every single one.
          </p>
          <p className="body-lg mb-6">
            The person with the collapsed wall isn't comparing. They're not
            reading reviews. They're not picking the best option. They have a
            yard full of mud and they need someone to help them.
          </p>
          <p className="body-soft">
            You are a potential solution. So is every other company on that
            page.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ---------------- CALL SEQUENCE ---------------- */

function CallSequence() {
  const rows = [
    { label: "First company", result: "No answer.", fail: true },
    { label: "Second company", result: "Voicemail.", fail: true },
    {
      label: "Third company",
      result:
        '"24/7 service" — hold music — call center — can\'t schedule anything.',
      fail: true,
    },
    {
      label: "Fourth company",
      result: "Someone answers. Books the appointment. Done.",
      fail: false,
    },
  ];

  return (
    <section className="relative section overflow-hidden" style={{ background: "#efeae0" }}>
      <img
        src={emptyOffice}
        alt=""
        loading="lazy"
        width={1920}
        height={1080}
        className="absolute right-0 top-0 h-full w-full md:w-1/2 object-cover opacity-40"
        style={{ filter: "saturate(0.7)" }}
      />
      <div
        className="absolute inset-0 md:left-1/2"
        style={{
          background:
            "linear-gradient(90deg, #efeae0 0%, rgba(239,234,224,0.7) 30%, rgba(239,234,224,0.4) 100%)",
        }}
      />
      <div className="relative z-10 mx-auto max-w-[1280px] px-6 md:px-12">
        <div className="measure mb-16">
          <p className="eyebrow mb-8">Chapter two</p>
          <h2 className="section-opener mb-8">What happens when they call.</h2>
        </div>
        <div className="max-w-[760px]">
          {rows.map((r, i) => (
            <div
              key={i}
              className="grid grid-cols-[140px_1fr] md:grid-cols-[200px_1fr] gap-4 md:gap-8 items-center border-b"
              style={{
                minHeight: 72,
                borderColor: "rgba(28,28,26,0.12)",
              }}
            >
              <p
                className="text-[14px] md:text-[15px] font-medium"
                style={{
                  fontFamily: "var(--font-sans)",
                  color: "var(--color-muted-foreground)",
                  letterSpacing: "0.01em",
                }}
              >
                {r.label}
              </p>
              <p
                className="text-[16px] md:text-[18px] py-5"
                style={{
                  fontFamily: "var(--font-sans)",
                  fontWeight: r.fail ? 300 : 400,
                  color: r.fail ? "var(--color-foreground)" : "var(--color-foreground)",
                }}
              >
                {r.result}
              </p>
            </div>
          ))}
        </div>

        <div className="measure mt-16">
          <p className="body-lg mb-6">
            The search is over. Not because they were better. Not because they
            had more reviews. Because they were the first company that actually
            helped.
          </p>
          <p className="font-display-italic" style={{ fontSize: "clamp(22px, 2.2vw, 28px)", lineHeight: 1.3 }}>
            The other three companies didn't lose on merit. They just weren't
            there.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ---------------- 24/7 PROBLEM ---------------- */

function TwentyFourSeven() {
  const rows = [
    ['"Call us anytime."', "Forwards to an answering service."],
    ['"We always pick up."', "Message taken. Someone will call you back."],
    ['"24/7 emergency service."', "No appointment. No next step. No help."],
  ];
  return (
    <section className="section bg-background">
      <div className="mx-auto max-w-[1280px] px-6 md:px-12">
        <div className="measure mb-16">
          <p className="eyebrow mb-8">Chapter three</p>
          <h2 className="section-opener mb-8">The "24/7" problem.</h2>
          <p className="body-lg">
            Half the companies on that list advertise 24/7 availability. Here's
            what that actually looks like.
          </p>
        </div>

        <div className="max-w-[820px] space-y-0">
          {rows.map(([promise, reality], i) => (
            <div
              key={i}
              className="grid md:grid-cols-[1fr_auto_1fr] gap-3 md:gap-8 items-center py-7 border-b"
              style={{ borderColor: "rgba(28,28,26,0.12)" }}
            >
              <p
                className="font-display-italic"
                style={{ fontSize: "clamp(18px, 1.8vw, 22px)" }}
              >
                {promise}
              </p>
              <span
                className="hidden md:inline text-[11px] tracking-widest uppercase"
                style={{ color: "var(--color-muted-foreground)", fontWeight: 500 }}
              >
                →
              </span>
              <p className="body-soft" style={{ marginBottom: 0 }}>
                {reality}
              </p>
            </div>
          ))}
        </div>

        <div className="measure mt-16">
          <p className="body-lg">
            The person with the collapsed wall doesn't need a message taken.
            They need an appointment. The moment they realize nobody can
            actually help them, they're already dialing the next number.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ---------------- PROOF ---------------- */

function Proof() {
  return (
    <section className="relative section overflow-hidden bg-night">
      <img
        src={painters}
        alt=""
        loading="lazy"
        width={1920}
        height={1080}
        className="absolute inset-0 h-full w-full object-cover"
        style={{ opacity: 0.25, filter: "saturate(0.7)" }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(20,15,10,0.7) 0%, rgba(20,15,10,0.85) 100%)",
        }}
      />
      <div className="relative z-10 mx-auto max-w-[1280px] px-6 md:px-12">
        <div className="measure mb-20">
          <p className="eyebrow mb-8" style={{ color: "rgba(247,245,240,0.55)" }}>
            Chapter four
          </p>
          <h2
            className="section-opener mb-8"
            style={{ color: "rgba(247,245,240,0.96)" }}
          >
            This isn't a theory.
          </h2>
          <p className="body-lg" style={{ color: "rgba(247,245,240,0.78)" }}>
            A painting company was answering their phones. Or so they thought.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 md:gap-8 max-w-[1000px]">
          {[
            { n: "409", label: "calls came in", note: "Spam. Wrong numbers. Noise." },
            { n: "105", label: "real buyers", note: "People with an actual problem to solve." },
            { n: "47", label: "closed jobs", note: "Customers who got help. Got scheduled. Got served." },
          ].map((s) => (
            <div key={s.n}>
              <p
                className="font-display"
                style={{
                  fontSize: "clamp(64px, 9vw, 96px)",
                  lineHeight: 1,
                  color: "rgba(247,245,240,0.96)",
                  letterSpacing: "-0.03em",
                }}
              >
                {s.n}
              </p>
              <p
                className="font-display-italic mt-3"
                style={{
                  fontSize: "20px",
                  color: "rgba(247,245,240,0.7)",
                }}
              >
                {s.label}
              </p>
              <p
                className="mt-4 body-soft"
                style={{ color: "rgba(247,245,240,0.55)", marginBottom: 0 }}
              >
                {s.note}
              </p>
            </div>
          ))}
        </div>

        <div className="measure mt-20">
          <p className="body-lg" style={{ color: "rgba(247,245,240,0.85)" }}>
            Those 47 people had a problem. Emmy answered, asked the right
            questions, and booked the appointment. They got help. They have no
            idea what Emmy is. They don't care. They just know somebody
            answered.
          </p>
          <p
            className="font-display-italic mt-10"
            style={{
              fontSize: "clamp(22px, 2.2vw, 28px)",
              color: "rgba(247,245,240,0.92)",
              lineHeight: 1.3,
            }}
          >
            The question isn't how many calls you're getting. It's how many of
            the real ones are going to the next company on the list while
            yours rings out.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ---------------- EMMY ---------------- */

function Emmy() {
  const items = [
    "Every call answered",
    "Every hour of the day",
    "Appointment booked",
    "Your staff, still in control",
  ];
  return (
    <section className="section bg-background">
      <div className="mx-auto max-w-[1280px] px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-center">
          <div>
            <p className="eyebrow mb-8">Chapter five</p>
            <h2 className="section-opener mb-10">Meet Emmy.</h2>
            <p className="body-lg mb-6">
              Emmy is not here to replace your staff. Your people run your
              business. Emmy catches what they miss — the call that comes in
              while your scheduler is on another line, while your crew is on a
              job, while everyone has gone home.
            </p>
            <p className="body-soft mb-12">
              Not a call center. Not a message service. Emmy asks the right
              questions and books the appointment. The person with the problem
              gets a next step. Not a callback. Not a voicemail. A scheduled
              appointment.
            </p>

            <ul className="space-y-4 mb-12">
              {items.map((it) => (
                <li
                  key={it}
                  className="flex items-baseline gap-4 border-b pb-3"
                  style={{ borderColor: "rgba(28,28,26,0.1)" }}
                >
                  <span
                    className="font-display-italic"
                    style={{ fontSize: 14, color: "var(--color-muted-foreground)" }}
                  >
                    —
                  </span>
                  <span
                    className="text-[18px]"
                    style={{ fontFamily: "var(--font-sans)", fontWeight: 400 }}
                  >
                    {it}
                  </span>
                </li>
              ))}
            </ul>

            <p
              className="font-display-italic"
              style={{ fontSize: "clamp(22px, 2.2vw, 28px)", lineHeight: 1.3 }}
            >
              The person with the problem just wants help. Emmy makes sure they
              get it.
            </p>
          </div>

          <div className="relative">
            <img
              src={handsAppointment}
              alt="Hands on a phone, an appointment being confirmed"
              loading="lazy"
              width={1600}
              height={1200}
              className="w-full h-auto object-cover"
              style={{ filter: "saturate(0.85)" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- CTA ---------------- */

function CTA() {
  return (
    <section className="relative overflow-hidden bg-night" style={{ minHeight: "100vh" }}>
      <img
        src={phoneDark}
        alt=""
        loading="lazy"
        width={1920}
        height={1080}
        className="absolute inset-0 h-full w-full object-cover"
        style={{ opacity: 0.6 }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(14,12,10,0.55) 0%, rgba(14,12,10,0.85) 100%)",
        }}
      />
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 md:px-12 py-32">
        <div className="max-w-[720px] text-center">
          <p
            className="eyebrow mb-10"
            style={{ color: "rgba(247,245,240,0.55)" }}
          >
            Try it now
          </p>
          <p
            className="font-display mb-6"
            style={{
              fontSize: "clamp(24px, 2.4vw, 30px)",
              color: "rgba(247,245,240,0.92)",
              lineHeight: 1.35,
            }}
          >
            Call this number.
          </p>
          <p
            className="font-display-italic mb-16"
            style={{
              fontSize: "clamp(20px, 2vw, 24px)",
              color: "rgba(247,245,240,0.7)",
              lineHeight: 1.4,
            }}
          >
            Don't introduce yourself. Just tell Emmy you have a problem.
          </p>

          <a
            href={`tel:${PHONE.replace(/[^0-9]/g, "")}`}
            className="font-display block transition-opacity hover:opacity-90"
            style={{
              fontSize: "clamp(40px, 6vw, 68px)",
              color: "#C4621D",
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
            }}
          >
            {PHONE}
          </a>
          <p
            className="mt-6 body-soft"
            style={{ color: "rgba(247,245,240,0.55)", marginBottom: 0 }}
          >
            Emmy answers 24 hours a day.
          </p>

          <p
            className="mt-20 body-soft"
            style={{ color: "rgba(247,245,240,0.5)", marginBottom: 0 }}
          >
            No pitch. No demo. No salesperson. Just the experience your
            customers have every time your phone rings unanswered.
          </p>

          <p
            className="font-display-italic mt-16"
            style={{
              fontSize: "clamp(20px, 2vw, 26px)",
              color: "rgba(247,245,240,0.85)",
              lineHeight: 1.35,
            }}
          >
            The person with the problem just wants help.
            <br />
            Now you know exactly how that feels.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ---------------- FOOTER ---------------- */

function Footer() {
  return (
    <footer
      className="py-12 px-6 md:px-12 border-t"
      style={{ background: "#0e0c0a", borderColor: "rgba(247,245,240,0.08)" }}
    >
      <div className="mx-auto max-w-[1280px] flex flex-col md:flex-row justify-between items-center gap-4">
        <p
          className="font-display"
          style={{ color: "rgba(247,245,240,0.85)", fontSize: 18 }}
        >
          MeetEmmy
        </p>
        <p
          className="text-[11px] tracking-widest uppercase"
          style={{ color: "rgba(247,245,240,0.4)", fontWeight: 500 }}
        >
          © {new Date().getFullYear()} — Every call answered
        </p>
      </div>
    </footer>
  );
}
