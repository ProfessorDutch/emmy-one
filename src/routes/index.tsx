import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import heroAlarm from "@/assets/hero-alarm-607.jpg";
import collapsedWall from "@/assets/collapsed-wall-hero.png";
import manCalling from "@/assets/dialing-glow.jpg";
import emptyOffice from "@/assets/empty-office-ringing.jpg";
import coverageMap from "@/assets/coverage-map.jpg";
import phoneIncoming from "@/assets/phone-incoming.jpg";
import heroImg from "@/assets/whats-next-hero.jpg";
import img01 from "@/assets/ae-missed-calls.jpg";
import netImg from "@/assets/ae-safety-net.jpg";
import img03 from "@/assets/ae-03-homeowner.jpg";
import img06 from "@/assets/ae-lights-on-map.jpg";
import img07 from "@/assets/ae-07-truck-dawn.jpg";
import img07Fleet from "@/assets/ae-07-fleet-dawn.jpg";
import img08 from "@/assets/ae-08-phone-down.jpg";
import img09 from "@/assets/ae-09-aerial-dawn.jpg";
import phoneAppointment from "@/assets/phone-tims-tree-appointment-mobile.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    links: [
      {
        rel: "preload",
        as: "image",
        href: phoneAppointment,
        type: "image/jpeg",
      },
    ],
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
          "They weren't choosing between you and a competitor. They were moving down a list until somebody helped them.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

const PHONE = "(844) 321-3669";
const GHL_ENDPOINT = "https://emmy-call-flow-fix.lovable.app/api/public/ghl-lead";

function Eyebrow({ children, muted = false }: { children: React.ReactNode; muted?: boolean }) {
  return <p className={muted ? "eyebrow-muted" : "eyebrow"}>{children}</p>;
}

function ChapterMark({ n, label }: { n: string; label: string }) {
  return (
    <div className="flex items-center gap-4">
      <span
        className="font-display-italic"
        style={{ fontSize: 28, color: "var(--color-ember)", lineHeight: 1 }}
      >
        Chapter {n}
      </span>
      <span className="rule-orange" />
      <p className="eyebrow" style={{ letterSpacing: "0.22em" }}>
        {label}
      </p>
    </div>
  );
}

function Index() {
  return (
    <main className="bg-background text-foreground overflow-x-hidden">
      {/* ACT ONE — The Moment */}
      <Hero />
      <SearchScene />
      <PhoneList />
      <CallSequence />
      <TwentyFourSeven />

      {/* ACT TWO — The Proof (first mention of Emmy as fact) */}
      <Proof />

      {/* THE SHIFT — same phone, different hands */}
      <Shift />

      {/* ACT THREE — The Revelation */}
      <TheFind />
      <FirstAHa />
      <TheRecord />

      {/* ACT FOUR — The Framework */}
      <Prominence />
      <TheName />
      <TheQuestion />

      {/* ACT FIVE — The Solution */}
      <MeetEmmy />
      <TheNet />
      
      <TheStages />
      <Pricing />

      {/* THE CLOSE */}
      <DemoCTA />
      <Enrollment />
      <Close />
      <Footer />
    </main>
  );
}

/* ============================================================
   HERO — 6:07 am alarm clock. Phone next to bed. You just woke up.
   ============================================================ */

function Hero() {
  return (
    <section className="relative min-h-[100svh] flex flex-col bg-night text-white overflow-hidden">
      <img
        src={heroAlarm}
        alt=""
        fetchPriority="high"
        width={1920}
        height={1080}
        className="absolute inset-0 h-full w-full object-cover"
        style={{ opacity: 0.55, objectPosition: "30% center" }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(10,10,10,0.55) 0%, rgba(10,10,10,0.6) 40%, rgba(10,10,10,0.95) 100%)",
        }}
      />

      <div className="relative z-10 px-5 md:px-10 pt-6 md:pt-8 flex items-center justify-between">
        <p
          className="font-display tracking-tight text-[20px] md:text-[22px]"
          style={{ color: "white" }}
        >
          MeetEmmy
        </p>
        <p className="eyebrow" style={{ color: "var(--color-ember)" }}>
          A scene
        </p>
      </div>

      <div className="relative z-10 flex-1 flex items-end px-5 md:px-10 pb-16 md:pb-24 pt-24 md:pt-32">
        <div className="mx-auto w-full max-w-[1280px]">
          <div className="max-w-[760px]">
            <div className="flex items-center gap-3 mb-8">
              <span className="rule-orange" />
              <p
                className="eyebrow"
                style={{ color: "var(--color-ember)", letterSpacing: "0.22em" }}
              >
                6:07 AM
              </p>
            </div>

            <h1 className="hero-type" style={{ color: "white" }}>
              Your retaining wall gave way.
              <br />
              <span className="font-display-italic" style={{ color: "rgba(255,255,255,0.75)" }}>
                You don't know how much of the yard went with it.
              </span>
            </h1>

            <p
              className="body-lg mt-8 max-w-[560px]"
              style={{ color: "rgba(255,255,255,0.72)" }}
            >
              It rained hard last night. Your wife is at the back door. You've got
              a slope, a mess, and no idea who to call.
            </p>

            <p
              className="font-display-italic mt-12"
              style={{
                fontSize: "clamp(20px, 2vw, 26px)",
                color: "var(--color-ember)",
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

/* ============================================================
   SEARCH SCENE
   ============================================================ */

function SearchScene() {
  return (
    <section className="relative bg-white">
      <div className="relative w-full">
        <img
          src={collapsedWall}
          alt="A collapsed residential retaining wall the morning after heavy rain"
          loading="lazy"
          width={1920}
          height={1080}
          className="w-full h-[60svh] md:h-[85svh] object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(0,0,0,0) 40%, rgba(0,0,0,0.65) 100%)",
          }}
        />
        <div className="absolute bottom-0 left-0 right-0 p-5 md:p-12">
          <p className="eyebrow mb-3" style={{ color: "var(--color-ember)" }}>
            What you woke up to
          </p>
          <p
            className="font-display text-white max-w-[820px]"
            style={{ fontSize: "clamp(32px, 4.6vw, 56px)", lineHeight: 1.05, letterSpacing: "-0.02em" }}
          >
            This isn't a project.
            <br />
            <span className="font-display-italic" style={{ color: "var(--color-ember)" }}>
              This is an emergency.
            </span>
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-[1280px] px-5 md:px-10 py-20 md:py-32">
        <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-start">
          <div className="md:col-span-5">
            <p className="eyebrow mb-6">Chapter one</p>
            <h2 className="section-opener">The search.</h2>
          </div>
          <div className="md:col-span-7">
            <p className="body-lg mb-6 max-w-[560px]">
              You open your phone. You search{" "}
              <em className="font-display-italic">"retaining wall repair near me."</em>{" "}
              You find a page that looks like this.
            </p>
            <p className="body-soft max-w-[560px]">
              Four companies. All qualified. All claiming 24/7. All a tap away.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   PHONE LIST
   ============================================================ */

function PhoneList() {
  const companies = [
    { name: "All-Star Concrete & Masonry", phone: "(770) 555-0142", rating: "4.9", reviews: 312, badge: "Top Pro" },
    { name: "ProWall Solutions", phone: "(770) 555-0188", rating: "4.8", reviews: 278, badge: "Top Pro" },
    { name: "Heritage Landscape & Stone", phone: "(770) 555-0207", rating: "4.9", reviews: 194, badge: "" },
    { name: "Benchmark Hardscapes", phone: "(770) 555-0233", rating: "4.8", reviews: 156, badge: "Hired 12x" },
  ];

  return (
    <section className="relative" style={{ background: "var(--color-muted)" }}>
      <div className="mx-auto max-w-[1280px] px-5 md:px-10 py-20 md:py-32">
        <div className="grid md:grid-cols-12 gap-14 md:gap-16 items-center">
          <div className="md:col-span-6 flex justify-center md:justify-start order-2 md:order-1">
            <div
              className="relative shrink-0"
              style={{
                width: 320,
                padding: 10,
                borderRadius: 46,
                background: "linear-gradient(180deg, #0a0a0a 0%, #1f1f1f 100%)",
                boxShadow:
                  "0 50px 100px -30px rgba(0,0,0,0.45), 0 0 0 1.5px rgba(0,0,0,0.6)",
              }}
            >
              <div
                className="relative overflow-hidden bg-white"
                style={{ borderRadius: 36, height: 660 }}
              >
                <div
                  className="absolute top-2 left-1/2 -translate-x-1/2 z-20"
                  style={{ width: 96, height: 26, borderRadius: 14, background: "#0a0a0a" }}
                />
                <div className="flex justify-between items-center px-6 pt-3 text-[12px] font-semibold text-black">
                  <span>6:11</span>
                  <span className="opacity-0">.</span>
                </div>

                <div className="px-3 pt-5">
                  <div className="flex items-center gap-2 px-3 py-2.5 rounded-full" style={{ background: "#f2f2f0" }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#777" strokeWidth="2.5">
                      <circle cx="11" cy="11" r="7" />
                      <path d="m20 20-3-3" />
                    </svg>
                    <span className="text-[12px] text-[#333] truncate" style={{ fontFamily: "var(--font-sans)" }}>
                      retaining wall repair near me
                    </span>
                  </div>
                </div>

                <div className="px-4 pt-4 pb-2">
                  <p className="text-[10px] font-medium uppercase tracking-wider text-[#888]" style={{ fontFamily: "var(--font-sans)" }}>
                    Sponsored · 4 results
                  </p>
                </div>

                <div className="px-3 space-y-2.5">
                  {companies.map((c, i) => (
                    <div key={c.phone} className="rounded-2xl p-3" style={{ background: "#fff", border: "1px solid #ececea" }}>
                      <div className="flex items-start gap-2.5">
                        <div
                          className="flex items-center justify-center text-[10px] font-bold text-white shrink-0"
                          style={{
                            width: 36, height: 36, borderRadius: 8,
                            background: i === 0 ? "var(--color-ember)" : "#1a1a1a",
                          }}
                        >
                          {c.name.split(" ").filter((w) => /^[A-Z]/.test(w)).slice(0, 2).map((w) => w[0]).join("")}
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className="text-[11.5px] font-semibold text-[#0a0a0a] leading-tight truncate" style={{ fontFamily: "var(--font-sans)" }}>
                            {c.name}
                          </p>
                          <div className="flex items-center gap-1 mt-0.5">
                            <span className="text-[10px] text-[#FF8c00]">★★★★★</span>
                            <span className="text-[9.5px] text-[#666]" style={{ fontFamily: "var(--font-sans)" }}>
                              {c.rating} ({c.reviews})
                            </span>
                            {c.badge && (
                              <span
                                className="ml-1 text-[8px] uppercase tracking-wider px-1 py-0.5 rounded font-semibold"
                                style={{ background: "#FFF1E8", color: "#C24A00", fontFamily: "var(--font-sans)" }}
                              >
                                {c.badge}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                      <a
                        href={`tel:${c.phone.replace(/[^0-9]/g, "")}`}
                        className="mt-2.5 w-full flex items-center justify-center gap-1.5 py-1.5 rounded-lg text-[11.5px] font-semibold"
                        style={{
                          background: i === 0 ? "var(--color-ember)" : "#0a0a0a",
                          color: "white",
                          fontFamily: "var(--font-sans)",
                        }}
                      >
                        <svg width="11" height="11" viewBox="0 0 24 24" fill="white">
                          <path d="M20 15.5c-1.25 0-2.45-.2-3.57-.57a1 1 0 0 0-1.02.24l-2.2 2.2a15.045 15.045 0 0 1-6.59-6.58l2.2-2.21a1 1 0 0 0 .25-1.02A11.36 11.36 0 0 1 8.5 4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1c0 9.39 7.61 17 17 17a1 1 0 0 0 1-1v-3.5a1 1 0 0 0-1-1Z" />
                        </svg>
                        Call {c.phone}
                      </a>
                    </div>
                  ))}
                </div>

                <div className="pt-3 pb-4 text-center">
                  <p className="text-[10px] text-[#888]" style={{ fontFamily: "var(--font-sans)" }}>
                    See more results
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="md:col-span-6 order-1 md:order-2">
            <p className="eyebrow mb-6">The shortlist</p>
            <h2 className="section-opener mb-8">
              Every company on this page is qualified.
              <br />
              <span className="font-display-italic" style={{ color: "var(--color-ember)" }}>
                Every single one.
              </span>
            </h2>
            <p className="body-lg mb-6 max-w-[520px]">
              The person with the collapsed wall isn't comparing. They're not
              reading reviews. They have a yard full of mud and they need someone
              to help them — now.
            </p>
            <p className="body-soft max-w-[520px]">
              You are a potential solution. So is every other company on that
              page. The winner is whoever picks up the phone.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   CALL SEQUENCE
   ============================================================ */

function CallSequence() {
  const rows = [
    { n: "01", label: "All-Star Concrete", phone: "(770) 555-0142", result: "No answer.", fail: true },
    { n: "02", label: "ProWall Solutions", phone: "(770) 555-0188", result: "Voicemail.", fail: true },
    { n: "03", label: "Heritage Landscape", phone: "(770) 555-0207", result: "Answering service. No appointment booked.", fail: true },
    { n: "04", label: "Benchmark Hardscapes", phone: "(770) 555-0233", result: "Someone answers. Books the appointment. Done.", fail: false },
  ];

  return (
    <section className="relative bg-white">
      <div className="relative w-full bg-night">
        <img
          src={manCalling}
          alt="A man at 7 a.m. in bed, face lit by the cold glow of a phone screen"
          loading="lazy"
          width={1920}
          height={1080}
          className="w-full h-[60svh] md:h-[85svh] object-cover"
          style={{ objectPosition: "65% center" }}
        />
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/70 to-transparent pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 px-5 md:px-10 pb-10 md:pb-16">
          <div className="mx-auto max-w-[1180px] text-white">
            <p className="eyebrow mb-4" style={{ color: "var(--color-ember)" }}>Chapter two</p>
            <h2 className="font-display" style={{ fontSize: "clamp(34px, 5vw, 60px)", lineHeight: 1.05, letterSpacing: "-0.02em" }}>
              He starts dialing.
            </h2>
            <p className="body-soft mt-5 max-w-[520px]" style={{ color: "rgba(255,255,255,0.78)" }}>
              7:11 a.m. The top four search results, in order. One call after another.
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-[1180px] px-5 md:px-10 section">
        <div className="rounded-sm overflow-hidden" style={{ border: "1px solid var(--color-border)", background: "var(--color-paper)" }}>
          <div className="flex items-center justify-between px-5 md:px-7 py-3 border-b" style={{ borderColor: "var(--color-border)", background: "var(--color-muted)" }}>
            <p className="text-[11px]" style={{ fontFamily: "var(--font-sans)", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--color-muted-foreground)" }}>
              Call log · Tuesday 7:11 a.m.
            </p>
            <span className="text-[11px]" style={{ fontFamily: "var(--font-sans)", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--color-muted-foreground)" }}>
              4 attempts
            </span>
          </div>

          {rows.map((r) => (
            <div key={r.n} className="grid grid-cols-[36px_1fr] md:grid-cols-[56px_240px_1fr] gap-3 md:gap-8 items-center px-5 md:px-7 py-5 md:py-6 border-b last:border-b-0" style={{ borderColor: "var(--color-border)" }}>
              <p className="text-[14px] tabular-nums" style={{ fontFamily: "var(--font-sans)", fontWeight: 500, color: r.fail ? "var(--color-muted-foreground)" : "var(--color-ember)" }}>
                {r.n}
              </p>
              <div>
                <p className="text-[15px] md:text-[16px]" style={{ fontFamily: "var(--font-sans)", fontWeight: 600 }}>{r.label}</p>
                <p className="text-[12px] md:text-[13px] tabular-nums mt-0.5" style={{ fontFamily: "var(--font-sans)", color: "var(--color-muted-foreground)" }}>
                  {r.phone}
                </p>
              </div>
              <div className="col-start-2 md:col-start-3 flex items-start gap-3">
                <span aria-hidden className="inline-block mt-2 shrink-0" style={{ width: 8, height: 8, borderRadius: 999, background: r.fail ? "var(--color-ash)" : "var(--color-ember)" }} />
                <p className="text-[16px] md:text-[18px]" style={{ fontFamily: "var(--font-sans)", fontWeight: r.fail ? 400 : 600, color: r.fail ? "var(--color-muted-foreground)" : "var(--color-ink)" }}>
                  {r.result}
                </p>
              </div>
            </div>
          ))}

          <div className="px-5 md:px-7 py-8 md:py-10" style={{ background: "var(--color-muted)" }}>
            <p className="text-[11px] mb-3" style={{ fontFamily: "var(--font-sans)", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--color-muted-foreground)" }}>
              Verdict
            </p>
            <p className="font-display" style={{ fontSize: "clamp(24px, 3vw, 36px)", lineHeight: 1.15, letterSpacing: "-0.02em" }}>
              The other three didn't lose on quality.{" "}
              <span style={{ color: "var(--color-ember)" }}>They just weren't there.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   24/7
   ============================================================ */

function TwentyFourSeven() {
  const rows = [
    ['"Call us anytime."', "Forwards to an answering service."],
    ['"We always pick up."', "Message taken. Someone will call you back."],
    ['"24/7 emergency service."', "No appointment. No next step. No help."],
  ];

  return (
    <section className="relative bg-night text-white overflow-hidden">
      <img
        src={emptyOffice}
        alt=""
        loading="lazy"
        width={1920}
        height={1080}
        className="absolute inset-0 h-full w-full object-cover"
        style={{ opacity: 0.45, objectPosition: "60% center" }}
      />
      <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(10,10,10,0.7) 0%, rgba(10,10,10,0.92) 100%)" }} />

      <div className="relative z-10 mx-auto max-w-[1280px] px-5 md:px-10 py-24 md:py-36">
        <div className="max-w-[700px] mb-16 md:mb-24">
          <p className="eyebrow mb-6" style={{ color: "var(--color-ember)" }}>Chapter three</p>
          <h2 className="section-opener" style={{ color: "white" }}>
            The{" "}
            <span className="font-display-italic" style={{ color: "var(--color-ember)" }}>"24/7"</span>{" "}
            problem.
          </h2>
          <p className="body-lg mt-6" style={{ color: "rgba(255,255,255,0.75)" }}>
            Half the companies on that list advertise round-the-clock service. Here's what that actually looks like.
          </p>
        </div>

        <div className="max-w-[920px]">
          {rows.map(([promise, reality], i) => (
            <div key={i} className="grid md:grid-cols-[1fr_auto_1fr] gap-3 md:gap-10 items-center py-8 border-b" style={{ borderColor: "rgba(255,255,255,0.14)" }}>
              <p className="font-display-italic" style={{ fontSize: "clamp(20px, 2.2vw, 28px)", color: "rgba(255,255,255,0.95)" }}>
                {promise}
              </p>
              <span className="hidden md:flex w-10 h-px" style={{ background: "var(--color-ember)" }} />
              <p className="text-[17px] md:text-[19px]" style={{ fontFamily: "var(--font-sans)", fontWeight: 300, color: "rgba(255,255,255,0.6)" }}>
                {reality}
              </p>
            </div>
          ))}
        </div>

        <div className="max-w-[640px] mt-16">
          <p className="body-lg" style={{ color: "rgba(255,255,255,0.78)" }}>
            The person with the collapsed wall doesn't need a message taken. He needs an appointment. The moment he realizes nobody can actually help him,{" "}
            <span style={{ color: "var(--color-ember)" }}>he's already dialing the next number.</span>
          </p>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   PROOF — Act Two. First mention of Emmy (as fact, not product).
   ============================================================ */

function Proof() {
  const stats = [
    { n: "981", label: "calls they missed", note: "Voicemail. Rang out. Answering service. Gone." },
    { n: "105", label: "6 AM moments answered.", note: "The overflow. Caught before they reached the next name on the list." },
    { n: "47", label: "jobs that never left.", note: "Signed contracts. Real revenue. From calls that were going to the next name on the list." },
  ];

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1280px] px-5 md:px-10 py-20 md:py-32">
        <div className="max-w-[760px] mb-16 md:mb-20">
          <p className="eyebrow mb-6">Chapter four</p>
          <h2 className="section-opener mb-6">This isn't a theory.</h2>
          <p className="body-lg mb-5">
            A painting company thought they were answering their phones. They were — during business hours, when the office wasn't slammed.
          </p>
          <p className="body-lg">
            These are the calls they{" "}
            <span style={{ color: "var(--color-ember)" }}>missed</span>{" "}
            in one quarter. The overflow. The ones that never reached a human.
          </p>
        </div>

        <div className="grid md:grid-cols-3 border-t border-b" style={{ borderColor: "var(--color-ink)" }}>
          {stats.map((s, i) => (
            <div
              key={s.n}
              className="py-10 md:py-14 px-5 md:px-8"
              style={{
                borderRight: i < stats.length - 1 ? "1px solid var(--color-border)" : "none",
                borderBottom: i < stats.length - 1 ? "1px solid var(--color-border)" : "none",
              }}
            >
              <p className="stat-num" style={{ color: s.n === "47" ? "var(--color-ember)" : "var(--color-ink)" }}>
                {s.n}
              </p>
              <p className="font-display-italic mt-4" style={{ fontSize: 22, color: "var(--color-ink)" }}>
                {s.label}
              </p>
              <p className="mt-3 body-soft" style={{ marginBottom: 0 }}>
                {s.note}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="relative w-full overflow-hidden">
        <img
          src={coverageMap}
          alt="Map of Woodstock, Georgia with a 30-mile radius and dozens of glowing dots marking job locations"
          loading="lazy"
          width={1920}
          height={1080}
          aria-hidden="true"
          className="absolute inset-y-0 left-0 h-full w-full md:w-[68%] object-cover object-center md:object-left pointer-events-none select-none"
          style={{
            WebkitMaskImage: "linear-gradient(to right, #000 0%, #000 55%, transparent 95%)",
            maskImage: "linear-gradient(to right, #000 0%, #000 55%, transparent 95%)",
            opacity: 0.95,
          }}
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 md:hidden pointer-events-none"
          style={{ background: "linear-gradient(180deg, color-mix(in oklab, #fff 70%, transparent) 0%, #fff 70%)" }}
        />
        <div className="relative mx-auto max-w-[1280px] px-5 md:px-10 py-20 md:py-36">
          <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-center">
            <div className="hidden md:block md:col-span-6" />
            <div className="md:col-span-6">
              <p className="eyebrow mb-6">What 47 looks like</p>
              <p className="font-display mb-8" style={{ fontSize: "clamp(28px, 3.4vw, 44px)", lineHeight: 1.08, letterSpacing: "-0.02em" }}>
                47 homeowners who hired the company{" "}
                <span className="font-display-italic" style={{ color: "var(--color-ember)" }}>
                  instead of the next name on the list.
                </span>
              </p>
              <p className="body-lg mb-5">
                The phone got answered. The right questions got asked. The appointment got booked. The crew showed up, gave the estimate, signed the job. The homeowner has no idea what answered. They don't care.
              </p>
              <p className="body-lg" style={{ marginBottom: 0 }}>
                The question isn't how many calls you're getting. It's{" "}
                <span style={{ color: "var(--color-ember)" }}>
                  how many of the real ones are going to the next name on the list while yours rings out.
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   THE SHIFT — same phone, different hands. Perspective change.
   ============================================================ */

function Shift() {
  return (
    <section className="relative min-h-[100svh] flex flex-col bg-night text-white overflow-hidden">
      <img
        src={heroImg}
        alt=""
        fetchPriority="high"
        width={1920}
        height={1080}
        className="absolute inset-0 h-full w-full object-cover"
        style={{ opacity: 0.55, objectPosition: "35% center" }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(10,10,10,0.55) 0%, rgba(10,10,10,0.6) 40%, rgba(10,10,10,0.95) 100%)",
        }}
      />
      <div className="relative z-10 flex-1 flex items-center px-5 md:px-10 py-24 md:py-32">
        <div className="mx-auto w-full max-w-[1280px]">
          <div className="max-w-[860px]">
            <p className="eyebrow mb-8" style={{ color: "var(--color-ember)" }}>The shift</p>
            <h2 className="hero-type">
              You already knew something was missing.
              <br />
              <span className="font-display-italic" style={{ color: "rgba(255,255,255,0.7)" }}>
                You just couldn't put your finger on it.
              </span>
            </h2>
            <p
              className="font-display-italic mt-10"
              style={{ fontSize: "clamp(22px, 2.2vw, 30px)", color: "var(--color-ember)" }}
            >
              Now you have.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   THE FIND
   ============================================================ */

function TheFind() {
  return (
    <section id="the-find" className="bg-white scroll-mt-0">
      <div className="mx-auto max-w-[1320px] px-5 md:px-10 py-20 md:py-32">
        <div className="grid md:grid-cols-12 gap-12 md:gap-16 items-center">
          <div className="md:col-span-5 md:col-start-8">
            <ChapterMark n="05" label="The find" />
            <h2 className="section-opener mt-8">
              The appointment was already{" "}
              <span className="font-display-italic" style={{ color: "var(--color-ember)" }}>
                leaving.
              </span>
            </h2>
            <div className="mt-10 space-y-6 max-w-[520px]">
              <p className="body-lg">
                Every time the phone rang and nobody picked up, they moved to the next name.
              </p>
              <p className="body-soft">
                Not because your business wasn't good enough. Because we live in moments. And moments don't wait.
              </p>
              <div className="pt-2 flex items-start gap-3">
                <span className="rule-orange mt-3" />
                <p className="font-display-italic" style={{ fontSize: "clamp(22px, 2.2vw, 30px)", lineHeight: 1.2 }}>
                  <span style={{ color: "var(--color-ember)" }}>They stopped calling at 6:39.</span>
                </p>
              </div>
            </div>
          </div>
          <div className="md:col-span-7 md:col-start-1 md:row-start-1 flex justify-center md:justify-start">
            <img
              src={phoneAppointment}
              alt="A phone showing the Recents call list — Tim's Tree and Landscaping answered at 6:39, a 2:19 appointment call"
              loading="eager"
              fetchPriority="high"
              width={900}
              height={1298}
              className="block w-full max-w-[360px] md:max-w-[520px] h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   FIRST A-HA — Is this an emergency?
   ============================================================ */

function FirstAHa() {
  return (
    <section className="bg-white">
      <div className="relative w-full">
        <img
          src={img03}
          alt="Google Maps at 6 AM with four pins, one lit"
          loading="lazy"
          width={1600}
          height={1100}
          className="w-full h-[55svh] md:h-[78svh] object-cover"
          style={{ objectPosition: "center 30%" }}
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(0,0,0,0) 50%, rgba(0,0,0,0.6) 100%)" }} />
        <div className="absolute bottom-0 left-0 right-0 p-5 md:p-12">
          <div className="mx-auto max-w-[1280px]">
            <Eyebrow>7:11 AM</Eyebrow>
            <p className="font-display text-white max-w-[900px] mt-4" style={{ fontSize: "clamp(28px, 4vw, 48px)", lineHeight: 1.06, letterSpacing: "-0.02em" }}>
              Fifteen seconds.{" "}
              <span className="font-display-italic" style={{ color: "var(--color-ember)" }}>
                That's the window.
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-[1280px] px-5 md:px-10 py-20 md:py-32">
        <div className="grid md:grid-cols-12 gap-10 md:gap-20 items-start">
          <div className="md:col-span-5">
            <ChapterMark n="06" label="The First A-Ha" />
            <h2 className="section-opener mt-8">
              Is this an{" "}
              <span className="font-display-italic" style={{ color: "var(--color-ember)" }}>emergency?</span>
            </h2>
          </div>
          <div className="md:col-span-7 space-y-6 md:pt-3">
            <p className="body-lg max-w-[560px]">
              Fifteen seconds. That's how long someone in crisis gives you before they move to the next one.
            </p>
            <p className="body-soft max-w-[560px]">
              Google knows this. It's why prominence exists as a ranking factor. In milliseconds, Google is asking one question. Which business is most likely to pick up right now and get this person to an appointment.
            </p>
            <p className="font-display-italic pt-2" style={{ fontSize: "clamp(22px, 2.2vw, 30px)", color: "var(--color-ember)" }}>
              Someone in crisis doesn't wait.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   THE RECORD — Google ranks presence
   ============================================================ */

function TheRecord() {
  return (
    <section className="relative bg-night text-white">
      <div className="relative min-h-[100svh] flex items-end">
        <img
          src={img06}
          alt="Aerial view of a dark city block at night with a single business glowing warm amber — the only one with the lights on"
          loading="lazy"
          width={1920}
          height={1280}
          className="absolute inset-0 h-full w-full object-cover"
          style={{ objectPosition: "center 40%" }}
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(10,10,10,0.35) 0%, rgba(10,10,10,0.55) 50%, rgba(10,10,10,0.95) 100%)" }} />
        <div className="relative z-10 w-full px-5 md:px-10 pb-20 md:pb-32 pt-24">
          <div className="mx-auto max-w-[1280px] grid md:grid-cols-12 gap-10 md:gap-16 items-end">
            <div className="md:col-span-7">
              <ChapterMark n="07" label="The record" />
              <h2 className="section-opener mt-8 max-w-[760px]">
                Google isn't ranking websites anymore.
                <br />
                <span className="font-display-italic" style={{ color: "var(--color-ember)" }}>
                  It's ranking presence.
                </span>
              </h2>
            </div>
            <div className="md:col-span-5 space-y-5">
              <p className="body-lg" style={{ color: "rgba(255,255,255,0.85)" }}>
                Presence isn't built in a campaign. It's built in moments. Six AM moments. Saturday moments. The moments your competitors let go to voicemail.
              </p>
              <p className="body-soft" style={{ color: "rgba(255,255,255,0.6)" }}>
                Not because you ran a new ad. Not because you asked for another review.
              </p>
              <p className="font-display-italic" style={{ fontSize: "clamp(22px, 2.2vw, 30px)", color: "white" }}>
                Because{" "}
                <span style={{ color: "var(--color-ember)" }}>you were there.</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   PROMINENCE — Can I trust you?
   ============================================================ */

function Prominence() {
  return (
    <section className="bg-white">
      <div className="relative w-full">
        <img
          src={img07}
          alt="A service truck idling at dawn, headlights on, ready before anyone else"
          loading="lazy"
          width={1600}
          height={1100}
          className="w-full h-[55svh] md:h-[78svh] object-cover"
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(0,0,0,0) 50%, rgba(0,0,0,0.65) 100%)" }} />
        <div className="absolute bottom-0 left-0 right-0 p-5 md:p-12">
          <div className="mx-auto max-w-[1280px]">
            <Eyebrow>Answer · Appointment · Review</Eyebrow>
            <p className="font-display text-white max-w-[820px] mt-3" style={{ fontSize: "clamp(28px, 4vw, 48px)", lineHeight: 1.06, letterSpacing: "-0.02em" }}>
              The business that gets the call{" "}
              <span className="font-display-italic" style={{ color: "var(--color-ember)" }}>
                when the moment is on the line.
              </span>
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-[1280px] px-5 md:px-10 py-20 md:py-32">
        <div className="grid md:grid-cols-12 gap-10 md:gap-20 items-start">
          <div className="md:col-span-5">
            <ChapterMark n="08" label="Prominence" />
            <h2 className="section-opener mt-8">
              Can I{" "}
              <span className="font-display-italic" style={{ color: "var(--color-ember)" }}>trust you?</span>
            </h2>
          </div>
          <div className="md:col-span-7 space-y-6 md:pt-3">
            <p className="body-lg max-w-[560px]">
              Angi. Yelp. Google. Every platform with someone in crisis is holding a short list of who they can hand the moment to.
            </p>
            <p className="body-soft max-w-[560px]">
              They're not tracking your reviews. They're tracking your outcomes — the quiet record of what actually happened after the call connected.
            </p>
            <p className="font-display-italic pt-2" style={{ fontSize: "clamp(22px, 2.2vw, 30px)", color: "var(--color-ember)" }}>
              Answer. Appointment. Review.
            </p>
          </div>
        </div>

        <div className="mt-16 md:mt-24 grid grid-cols-1 md:grid-cols-3 gap-px bg-[rgba(20,15,10,0.12)] border-y border-[rgba(20,15,10,0.12)]">
          {[
            { n: "01", k: "Answer", v: "Picked up. Live. Before the next name on the list." },
            { n: "02", k: "Appointment", v: "Booked on the calendar — not promised, not pending." },
            { n: "03", k: "Review", v: "Closed loop. The outcome that earns the next call." },
          ].map((item) => (
            <div key={item.n} className="bg-white px-6 md:px-8 py-10 md:py-12">
              <p className="eyebrow-muted" style={{ letterSpacing: "0.22em", color: "var(--color-ember-deep)" }}>
                {item.n}
              </p>
              <p className="font-display mt-5" style={{ fontSize: "clamp(28px, 3vw, 40px)", lineHeight: 1, letterSpacing: "-0.02em", color: "var(--color-ink)" }}>
                {item.k}
              </p>
              <p className="body-soft mt-4">{item.v}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   THE NAME — the reveal at the peak
   ============================================================ */

function TheName() {
  return (
    <section className="relative bg-night text-white overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(204,85,40,0.5), transparent)" }} />
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 55% 60% at 50% 50%, rgba(204,85,40,0.14) 0%, rgba(12,12,12,0) 70%)" }}
      />
      <div className="relative mx-auto max-w-[880px] px-5 md:px-10 py-28 md:py-44 text-center">
        <Eyebrow>Chapter nine · The name</Eyebrow>
        <p className="font-display mt-10" style={{ fontSize: "clamp(24px, 3.2vw, 40px)", lineHeight: 1.18, letterSpacing: "-0.01em", color: "rgba(255,255,255,0.9)" }}>
          That short list every platform is holding?
        </p>
        <p className="font-display mt-6" style={{ fontSize: "clamp(24px, 3.2vw, 40px)", lineHeight: 1.18, letterSpacing: "-0.01em", color: "rgba(255,255,255,0.9)" }}>
          It has a name.
        </p>
        <h2 className="section-opener mt-14">
          <span className="font-display-italic" style={{ color: "var(--color-ember)" }}>
            The Emergency Whitelist.
          </span>
        </h2>
        <div className="mt-16 mx-auto max-w-[620px] py-10 border-y border-white/10 space-y-6">
          <p className="body-lg" style={{ color: "rgba(255,255,255,0.85)" }}>
            You can't buy your way onto it.
          </p>
          <p className="font-display" style={{ fontSize: "clamp(22px, 2.4vw, 30px)", lineHeight: 1.25, color: "white" }}>
            It accepts one currency —{" "}
            <span className="font-display-italic" style={{ color: "var(--color-ember)" }}>
              crisis response.
            </span>
          </p>
          <p className="body-soft" style={{ color: "rgba(255,255,255,0.7)" }}>
            Answered. Booked. Showed up.
          </p>
        </div>
        <p className="font-display-italic mt-14" style={{ fontSize: "clamp(22px, 2.4vw, 30px)", color: "rgba(255,255,255,0.75)", lineHeight: 1.3 }}>
          It builds the way credit builds. One moment at a time.
        </p>
      </div>
    </section>
  );
}

/* ============================================================
   THE QUESTION — where would Google send them?
   ============================================================ */

function TheQuestion() {
  return (
    <section className="relative bg-night text-white">
      <div className="relative min-h-[100svh] flex items-center justify-center overflow-hidden">
        <img
          src={img09}
          alt="Aerial view of a pre-dawn residential neighborhood"
          loading="lazy"
          width={1920}
          height={1200}
          className="absolute inset-0 h-full w-full object-cover"
          style={{ opacity: 0.7, objectPosition: "center 75%" }}
        />
        <div className="absolute inset-0" style={{ background: "radial-gradient(70% 80% at 50% 55%, rgba(10,10,10,0.2) 0%, rgba(10,10,10,0.85) 80%)" }} />
        <div className="relative z-10 px-5 md:px-10 py-28 max-w-[1080px] text-center">
          <Eyebrow>Chapter ten · The question</Eyebrow>
          <p className="font-display mt-10 text-white" style={{ fontSize: "clamp(28px, 4.2vw, 54px)", lineHeight: 1.12, letterSpacing: "-0.02em" }}>
            If you were Google, and you had fifteen thousand people a year searching for what you do —
          </p>
          <p className="font-display-italic mt-8" style={{ fontSize: "clamp(28px, 4.4vw, 56px)", color: "var(--color-ember)", lineHeight: 1.1 }}>
            where would you send them?
          </p>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   MEET EMMY — full introduction
   ============================================================ */

function MeetEmmy() {
  const items = [
    ["Every call", "answered"],
    ["Every hour", "of the day"],
    ["Appointment", "booked"],
    ["Your staff", "still in control"],
  ];

  return (
    <section className="relative" style={{ background: "var(--color-muted)" }}>
      <div className="mx-auto max-w-[1280px] px-5 md:px-10 py-20 md:py-32">
        <div className="max-w-[760px] mb-16">
          <p className="eyebrow mb-6">Chapter eleven</p>
          <h2 className="section-opener mb-8">Meet Emmy.</h2>
          <p className="body-lg mb-6">
            At 6 AM they aren't looking for information. They're in crisis.
          </p>
          <div className="my-8 flex items-start gap-4 border-l-2 pl-5 md:pl-6" style={{ borderColor: "var(--color-ember)" }}>
            <p className="font-display-italic" style={{ fontSize: "clamp(24px, 3vw, 38px)", lineHeight: 1.15, color: "var(--color-ember)" }}>
              "Is there a tree down on the property?"
            </p>
          </div>
          <p className="body-lg mb-6">
            Emmy was built for that moment. Not for your office. For the fifteen seconds after someone decides they need help — and before they decide who gets the job.
          </p>
          <p className="body-soft mb-6">
            She isn't a call center. She isn't a message service. She is crisis management. Built around the psychology of someone in crisis — what they need to hear, how long they'll wait, what it takes for them to say yes to a time.
          </p>
          <p className="body-soft mb-6">
            Then she books the appointment.
          </p>
          <p className="body-soft">
            She's where the infrastructure starts. The appointment is the foundation. Everything else is built on top of it.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[var(--color-border)] border-y" style={{ borderColor: "var(--color-border)" }}>
          {items.map(([top, bottom]) => (
            <div key={top} className="bg-[var(--color-muted)] p-6 md:p-8">
              <p className="font-display" style={{ fontSize: "clamp(22px, 2.4vw, 30px)", lineHeight: 1.1, color: "var(--color-ink)" }}>
                {top}
              </p>
              <p className="font-display mt-1" style={{ fontSize: "clamp(20px, 2vw, 24px)", color: "var(--color-ember)", lineHeight: 1.2 }}>
                {bottom}.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   THE NET — deployment ready
   ============================================================ */

function TheNet() {
  return (
    <section className="relative bg-night text-white overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(204,85,40,0.5), transparent)" }} />
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `url(${netImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center 65%",
          backgroundRepeat: "no-repeat",
          opacity: 0.55,
          maskImage: "radial-gradient(ellipse 95% 75% at 50% 60%, rgba(0,0,0,1) 0%, rgba(0,0,0,0.7) 45%, rgba(0,0,0,0) 85%)",
          WebkitMaskImage: "radial-gradient(ellipse 95% 75% at 50% 60%, rgba(0,0,0,1) 0%, rgba(0,0,0,0.7) 45%, rgba(0,0,0,0) 85%)",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 60% 55% at 50% 45%, rgba(12,12,12,0.85) 0%, rgba(12,12,12,0.55) 45%, rgba(12,12,12,0) 80%)" }}
      />
      <div className="relative mx-auto max-w-[760px] px-5 md:px-10 py-28 md:py-44 text-center">
        <Eyebrow>Chapter twelve · The net</Eyebrow>
        <h2 className="section-opener mt-8">
          Your staff runs{" "}
          <span className="font-display-italic" style={{ color: "var(--color-ember)" }}>
            your business.
          </span>
        </h2>
        <div className="mt-12 space-y-6">
          <p className="body-lg" style={{ color: "rgba(255,255,255,0.85)" }}>
            Emmy catches what the moment doesn't allow them to.
          </p>
          <p className="body-soft" style={{ color: "rgba(255,255,255,0.65)" }}>
            The call that comes in while your scheduler is on another line.
            <br />
            While your crew is on a job.
            <br />
            While everyone has gone home.
          </p>
        </div>
        <div className="mt-14 mx-auto max-w-[520px] py-10 border-y border-white/10">
          <p className="font-display" style={{ fontSize: "clamp(24px, 2.6vw, 32px)", lineHeight: 1.2, color: "white" }}>
            She doesn't take messages.
            <br />
            She doesn't ask them to hold.
            <br />
            <span className="font-display-italic" style={{ color: "var(--color-ember)" }}>
              She books the appointment.
            </span>
          </p>
        </div>
        <p className="body-soft mt-10" style={{ color: "rgba(255,255,255,0.65)" }}>
          Every time.
        </p>
        <p className="font-display-italic mt-12" style={{ fontSize: "clamp(22px, 2.4vw, 30px)", color: "var(--color-ember)", lineHeight: 1.2 }}>
          Stage one. The net is in place.
        </p>
      </div>
    </section>
  );
}

/* ============================================================
   THE LIST — The Emergency Whitelist
   ============================================================ */

function Rail({ active = 1 }: { active?: 1 | 2 | 3 | 4 }) {
  const stages = [
    { n: "01", label: "The net" },
    { n: "02", label: "Conversion" },
    { n: "03", label: "Footprint" },
    { n: "04", label: "Expansion" },
  ];
  return (
    <div className="w-full">
      <div className="relative grid grid-cols-4 gap-4 md:gap-10">
        <div className="absolute left-0 right-0 top-[11px] h-px bg-white/15" aria-hidden />
        {stages.map((s, i) => {
          const isActive = i + 1 === active;
          const isPast = i + 1 < active;
          return (
            <div key={s.n} className="relative flex flex-col items-start">
              <span
                className="relative z-10 block rounded-full"
                style={{
                  width: 22,
                  height: 22,
                  background: isActive ? "var(--color-ember)" : isPast ? "rgba(255,255,255,0.55)" : "rgba(255,255,255,0.12)",
                  boxShadow: isActive ? "0 0 0 6px rgba(204,85,40,0.18)" : "none",
                  border: isActive ? "none" : "1px solid rgba(255,255,255,0.25)",
                }}
              />
              <p className="mt-5 eyebrow" style={{ color: isActive ? "var(--color-ember)" : "rgba(255,255,255,0.45)" }}>
                Stage {s.n}
              </p>
              <p className="mt-2 font-display" style={{ fontSize: "clamp(18px, 1.6vw, 22px)", color: isActive ? "white" : "rgba(255,255,255,0.55)" }}>
                {s.label}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function TheStages() {
  return (
    <section className="bg-night-soft text-white">
      <div className="relative w-full">
        <img
          src={img07Fleet}
          alt="A small fleet of service work trucks lined up at a shop at dawn, headlights on"
          loading="lazy"
          width={1920}
          height={1100}
          className="w-full h-[50svh] md:h-[72svh] object-cover"
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(0,0,0,0) 40%, rgba(18,18,18,1) 100%)" }} />
      </div>
      <div className="mx-auto max-w-[1280px] px-5 md:px-10 pt-4 pb-24 md:pb-36 -mt-24 md:-mt-32 relative z-10">
        <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-end">
          <div className="md:col-span-6">
            <ChapterMark n="13" label="The stages" />
            <h2 className="section-opener mt-8">
              The whitelist isn't the finish line.
              <br />
              <span className="font-display-italic" style={{ color: "var(--color-ember)" }}>
                It's the beginning.
              </span>
            </h2>
          </div>
          <div className="md:col-span-6 space-y-6">
            <p className="body-lg max-w-[520px]" style={{ color: "rgba(255,255,255,0.85)" }}>
              A whitelist position isn't a status. It's a record — moment by moment, call by call, appointment by appointment.
            </p>
            <p className="body-soft max-w-[520px]" style={{ color: "rgba(255,255,255,0.65)" }}>
              The road has four stages. Each one is earned by the one before it.
            </p>
          </div>
        </div>
        <div className="mt-20 md:mt-28">
          <Rail active={1} />
        </div>
        <div className="mt-20 md:mt-28 grid md:grid-cols-12 gap-10">
          <div className="md:col-span-7 max-w-[640px] space-y-6">
            <p className="body-soft" style={{ color: "rgba(255,255,255,0.65)" }}>
              <span style={{ color: "white" }}>Crisis managed.</span> The net goes in. Every call answered. Every appointment booked.
            </p>
            <p className="body-soft" style={{ color: "rgba(255,255,255,0.65)" }}>
              <span style={{ color: "white" }}>Trust signaled.</span> 6 AM moments accumulate. Your share of the emergency demand grows. You're not on the list anymore. You're the first call.
            </p>
            <p className="body-soft" style={{ color: "rgba(255,255,255,0.65)" }}>
              <span style={{ color: "white" }}>Brand expanded.</span> The record becomes the story, and the story outgrows the location.
            </p>
          </div>
          <div className="md:col-span-5 md:border-l md:pl-10 border-white/10">
            <p className="font-display-italic" style={{ fontSize: "clamp(24px, 2.6vw, 32px)", color: "white", lineHeight: 1.2 }}>
              Nobody starts at stage two.
            </p>
            <p className="body-soft mt-4" style={{ color: "rgba(255,255,255,0.65)" }}>
              Google doesn't count what hasn't happened yet.
            </p>
            <p className="font-display-italic mt-6" style={{ fontSize: "clamp(22px, 2.2vw, 30px)", color: "var(--color-ember)", lineHeight: 1.25 }}>
              The net is the only door in.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}


/* ============================================================
   PRICING — Stage one · the safety net
   ============================================================ */

function Pricing() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1180px] px-5 md:px-10 py-28 md:py-40">
        <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-start">
          <div className="md:col-span-5">
            <ChapterMark n="14" label="Stage one · The safety net" />
            <h2 className="section-opener mt-8" style={{ color: "var(--color-ink)" }}>
              The safety net comes{" "}
              <span className="font-display-italic" style={{ color: "var(--color-ember)" }}>
                first.
              </span>
            </h2>
            <p className="body-lg mt-8 max-w-[440px]" style={{ color: "var(--color-ink)" }}>
              Before the funnel. Before the campaigns. Before any of it.
            </p>
            <p className="body-soft mt-4 max-w-[440px]">
              Stop the calls you already paid for from falling through. Everything else is built on top of that.
            </p>
          </div>

          <div className="md:col-span-7">
            <div className="grid grid-cols-2 gap-0 border" style={{ borderColor: "rgba(20,15,10,0.12)" }}>
              <div className="p-8 md:p-12 text-center" style={{ borderRight: "1px solid rgba(20,15,10,0.12)" }}>
                <p className="eyebrow-muted" style={{ letterSpacing: "0.22em" }}>Per call handled</p>
                <p className="pricing-number mt-6" style={{ color: "var(--color-ink)" }}>$1</p>
                <p className="font-display mt-4" style={{ fontSize: 18, color: "var(--color-ink)" }}>
                  She answers it.
                </p>
              </div>
              <div className="p-8 md:p-12 text-center" style={{ background: "var(--color-ink)", color: "white" }}>
                <p className="eyebrow" style={{ color: "var(--color-ember)", letterSpacing: "0.22em" }}>
                  Per appointment booked
                </p>
                <p className="pricing-number mt-6" style={{ color: "var(--color-ember)" }}>$39</p>
                <p className="font-display mt-4" style={{ fontSize: 18, color: "white" }}>
                  She closes it.
                </p>
              </div>
            </div>
            <div className="mt-10 flex items-start gap-4 max-w-[560px]">
              <span className="rule-orange mt-3" />
              <p className="font-display-italic" style={{ fontSize: "clamp(20px, 2vw, 26px)", color: "var(--color-ink)", lineHeight: 1.3 }}>
                We get paid when the call becomes an appointment.
                <br />
                <span style={{ color: "var(--color-ember-deep)" }}>
                  That's the alignment.
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   DEMO CTA — Experience it as the customer
   ============================================================ */

function DemoCTA() {
  return (
    <section className="relative overflow-hidden bg-night text-white" style={{ minHeight: "100svh" }}>
      <img
        src={phoneIncoming}
        alt=""
        loading="lazy"
        width={1920}
        height={1080}
        className="absolute inset-0 h-full w-full object-cover"
        style={{ opacity: 0.5 }}
      />
      <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(8,8,8,0.7) 0%, rgba(8,8,8,0.92) 100%)" }} />

      <div className="relative z-10 flex flex-col items-center justify-center min-h-[100svh] px-5 md:px-10 py-24 md:py-32">
        <div className="max-w-[760px] text-center">
          <p className="eyebrow mb-10" style={{ color: "var(--color-ember)" }}>
            Try it now
          </p>
          <p className="font-display mb-4" style={{ fontSize: "clamp(28px, 3vw, 38px)", color: "white", lineHeight: 1.25 }}>
            Call this number.
          </p>
          <p className="font-display-italic mb-14 md:mb-20" style={{ fontSize: "clamp(20px, 2vw, 24px)", color: "rgba(255,255,255,0.7)", lineHeight: 1.4 }}>
            Hear what it sounds like as the customer. Book an appointment. Receive a copy of the full call transcript.
          </p>

          <a
            href={`tel:${PHONE.replace(/[^0-9]/g, "")}`}
            className="font-display block transition-opacity hover:opacity-90"
            style={{ fontSize: "clamp(44px, 7.5vw, 88px)", color: "var(--color-ember)", letterSpacing: "-0.025em", lineHeight: 1 }}
          >
            {PHONE}
          </a>
          <p className="mt-6 body-soft" style={{ color: "rgba(255,255,255,0.55)", marginBottom: 0 }}>
            Emmy answers 24 hours a day.
          </p>

          <div className="mt-16 md:mt-24 mx-auto" style={{ width: 48, height: 1, background: "var(--color-ember)" }} />

          <p className="mt-12 body-soft max-w-[520px] mx-auto" style={{ color: "rgba(255,255,255,0.55)" }}>
            No pitch. No demo. No salesperson. Just the experience your customers have every time your phone rings unanswered.
          </p>

          <p className="font-display-italic mt-16 md:mt-20" style={{ fontSize: "clamp(22px, 2.2vw, 28px)", color: "white", lineHeight: 1.35 }}>
            The person with the problem just wants help.
            <br />
            <span style={{ color: "var(--color-ember)" }}>
              Now you know exactly how that feels.
            </span>
          </p>

          <div className="mt-14 md:mt-20">
            <a
              href="#enroll"
              className="inline-flex items-center justify-center font-sans transition-opacity hover:opacity-90"
              style={{
                background: "var(--color-ember)",
                color: "white",
                padding: "22px 56px",
                borderRadius: 999,
                fontSize: 14,
                letterSpacing: "0.22em",
                fontWeight: 500,
                textTransform: "uppercase",
                boxShadow: "0 18px 40px -18px rgba(204,85,40,0.6)",
              }}
            >
              Say yes
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   ENROLLMENT
   ============================================================ */

function Field({
  label,
  name,
  type = "text",
  placeholder,
  value,
  onChange,
  required,
  maxLength,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  value: string;
  onChange: (v: string) => void;
  required?: boolean;
  maxLength?: number;
}) {
  return (
    <label className="block">
      <span className="eyebrow-muted block mb-2" style={{ letterSpacing: "0.18em" }}>
        {label}
      </span>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        maxLength={maxLength}
        className="w-full bg-transparent font-sans"
        style={{
          borderBottom: "1px solid rgba(20,15,10,0.25)",
          padding: "10px 0",
          fontSize: 16,
          color: "var(--color-ink)",
          outline: "none",
        }}
      />
    </label>
  );
}

function EnrollmentForm() {
  const [form, setForm] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    business_name: "",
    website: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  function update<K extends keyof typeof form>(key: K, value: string) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const first_name = form.first_name.trim();
    const last_name = form.last_name.trim();
    const email = form.email.trim();
    const phone = form.phone.trim();
    const business_name = form.business_name.trim();
    const website = form.website.trim();
    if (!first_name || !last_name || !email || !phone || !business_name || !website) {
      setError("All fields are required.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email.");
      return;
    }
    if (phone.replace(/\D/g, "").length < 10) {
      setError("Please enter a valid phone number.");
      return;
    }
    setError(null);
    setLoading(true);
    try {
      const res = await fetch(GHL_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ first_name, last_name, email, phone, business_name, website }),
      });
      if (!res.ok) {
        const t = await res.text();
        throw new Error(t || "Submission failed");
      }
      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Submission failed. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  if (submitted) {
    return (
      <div className="bg-white p-7 md:p-10" style={{ boxShadow: "0 30px 60px -32px rgba(20,15,10,0.25)" }}>
        <p className="eyebrow" style={{ color: "var(--color-ember)" }}>You're in</p>
        <h3 className="font-display mt-4" style={{ fontSize: "clamp(24px, 2.6vw, 32px)", lineHeight: 1.1, color: "var(--color-ink)" }}>
          Emmy is being configured for {form.business_name}.
        </h3>
        <p className="body-soft mt-4">
          We'll reach {form.first_name} at {form.email} within 24 hours to finish setup.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="bg-white p-7 md:p-10" style={{ boxShadow: "0 30px 60px -32px rgba(20,15,10,0.25)" }}>
      <div className="grid sm:grid-cols-2 gap-5">
        <Field label="First name" name="first_name" placeholder="Jordan" required maxLength={50} value={form.first_name} onChange={(v) => update("first_name", v)} />
        <Field label="Last name" name="last_name" placeholder="Reyes" required maxLength={50} value={form.last_name} onChange={(v) => update("last_name", v)} />
        <Field label="Email" name="email" type="email" placeholder="jordan@reyesplumbing.com" required maxLength={255} value={form.email} onChange={(v) => update("email", v)} />
        <Field label="Business phone" name="phone" type="tel" placeholder="(555) 123-4567" required maxLength={25} value={form.phone} onChange={(v) => update("phone", v)} />
        <Field label="Business name" name="business_name" placeholder="Reyes Plumbing" required maxLength={150} value={form.business_name} onChange={(v) => update("business_name", v)} />
        <Field label="Website" name="website" placeholder="reyesplumbing.com" required maxLength={255} value={form.website} onChange={(v) => update("website", v)} />
      </div>
      {error && (
        <p className="mt-5" style={{ fontSize: 12, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--color-ember-deep)" }}>
          {error}
        </p>
      )}
      <button
        type="submit"
        disabled={loading}
        className="mt-8 w-full inline-flex items-center justify-center font-sans disabled:opacity-60"
        style={{
          background: "var(--color-ember)",
          color: "white",
          padding: "20px 32px",
          borderRadius: 999,
          fontSize: 14,
          letterSpacing: "0.22em",
          fontWeight: 500,
          textTransform: "uppercase",
          boxShadow: "0 18px 40px -18px rgba(204,85,40,0.55)",
        }}
      >
        {loading ? "Sending…" : "Say yes — start enrollment"}
      </button>
      <p className="mt-5 text-center" style={{ fontSize: 12, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--color-muted-foreground)" }}>
        No card. No commitment. No contract.
      </p>
    </form>
  );
}

function Enrollment() {
  return (
    <section id="enroll" className="bg-night text-white">
      <div className="grid md:grid-cols-12">
        <div className="md:col-span-6 relative min-h-[50svh] md:min-h-[100svh]">
          <img
            src={img08}
            alt="A phone face-down on a desk, a job site visible through the window behind it"
            loading="lazy"
            width={1600}
            height={1600}
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
        <div className="md:col-span-6 flex items-center px-5 md:px-16 py-20 md:py-28">
          <div className="max-w-[520px] w-full">
            <ChapterMark n="15" label="Enrollment" />
            <h2 className="section-opener mt-8">
              Configured for{" "}
              <span className="font-display-italic" style={{ color: "var(--color-ember)" }}>
                your business.
              </span>{" "}
              By us.
            </h2>
            <div className="mt-10 space-y-5">
              <p className="body-lg" style={{ color: "rgba(255,255,255,0.85)" }}>
                Live within 24 to 48 hours.
              </p>
              <div className="py-6 border-y border-white/10 my-2">
                <p className="font-display" style={{ fontSize: "clamp(22px, 2.2vw, 28px)", lineHeight: 1.3 }}>
                  She answers. She books. She reports.
                  <br />
                  <span className="font-display-italic" style={{ color: "var(--color-ember)" }}>
                    You run your business.
                  </span>
                </p>
              </div>
              <p className="body-soft" style={{ color: "rgba(255,255,255,0.6)" }}>
                Nothing added to your plate. Nothing to manage. Nothing to learn.
              </p>
            </div>
            <div className="mt-12">
              <EnrollmentForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   CLOSE
   ============================================================ */

function Close() {
  return (
    <section className="relative min-h-[80svh] flex flex-col bg-night text-white overflow-hidden">
      <img
        src={img09}
        alt="Pre-dawn aerial view of a quiet residential neighborhood"
        loading="lazy"
        width={1920}
        height={1200}
        className="absolute inset-0 h-full w-full object-cover"
        style={{ opacity: 0.5, objectPosition: "center 75%" }}
      />
      <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(10,10,10,0.8) 0%, rgba(10,10,10,0.55) 45%, rgba(10,10,10,0.98) 100%)" }} />
      <div className="relative z-10 flex-1 flex items-center justify-center px-5 md:px-10 py-24">
        <div className="max-w-[860px] text-center">
          <Eyebrow>The close</Eyebrow>
          <h2 className="font-display mt-8 text-white" style={{ fontSize: "clamp(32px, 5vw, 60px)", lineHeight: 1.1, letterSpacing: "-0.02em" }}>
            The appointment is the only thing that ever mattered.
            <br />
            <span className="font-display-italic" style={{ color: "rgba(255,255,255,0.7)" }}>
              To them. And to you.
            </span>
          </h2>
          <p className="font-display-italic mt-10" style={{ fontSize: "clamp(22px, 2.4vw, 30px)", color: "var(--color-ember)" }}>
            Emmy makes sure you're there.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   FOOTER
   ============================================================ */

function Footer() {
  return (
    <footer className="py-10 px-5 md:px-10 border-t" style={{ background: "#050505", borderColor: "rgba(255,255,255,0.08)" }}>
      <div className="mx-auto max-w-[1280px] flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="font-display" style={{ color: "white", fontSize: 20 }}>
          MeetEmmy
        </p>
        <p className="text-[11px] tracking-widest uppercase" style={{ color: "rgba(255,255,255,0.4)", fontWeight: 500 }}>
          © {new Date().getFullYear()} — Every call answered
        </p>
      </div>
    </footer>
  );
}
