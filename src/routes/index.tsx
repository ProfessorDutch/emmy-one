import { createFileRoute } from "@tanstack/react-router";
import heroAlarm from "@/assets/hero-alarm-607.jpg";
import collapsedWallAsset from "@/assets/collapsed-wall-hero.png.asset.json";
import manCalling from "@/assets/man-calling.jpg";
import emptyOffice from "@/assets/empty-office-ringing.jpg";
import crewFixing from "@/assets/crew-fixing.jpg";
import phoneIncoming from "@/assets/phone-incoming.jpg";

const collapsedWall = collapsedWallAsset.url;

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
          "They weren't choosing between you and a competitor. They were moving down a list until somebody helped them.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

const PHONE = "(888) 555-1212";

function MarkerUnderline({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={`block mt-1 h-2 rounded-full bg-[var(--color-ember)] opacity-90 ${className}`}
    />
  );
}

function Index() {
  return (
    <main className="bg-background text-foreground overflow-x-hidden">
      <Hero />
      <SearchScene />
      <PhoneList />
      <CallSequence />
      <TwentyFourSeven />
      <Proof />
      <Emmy />
      <CTA />
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
        style={{ opacity: 0.55 }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(10,10,10,0.55) 0%, rgba(10,10,10,0.6) 40%, rgba(10,10,10,0.95) 100%)",
        }}
      />

      {/* top bar */}
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
   SEARCH SCENE — full-bleed wall image, big value callout
   ============================================================ */

function SearchScene() {
  return (
    <section className="relative bg-white">
      {/* Full-bleed image */}
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
          <p
            className="eyebrow mb-3"
            style={{ color: "var(--color-ember)" }}
          >
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
            <div className="w-fit">
              <h2 className="section-opener">The search.</h2>
              <MarkerUnderline />
            </div>
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
   PHONE LIST — actual phone-sized device with 770-555 numbers
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
          {/* Phone mockup — real phone size, ~320px */}
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
                {/* dynamic island */}
                <div
                  className="absolute top-2 left-1/2 -translate-x-1/2 z-20"
                  style={{
                    width: 96,
                    height: 26,
                    borderRadius: 14,
                    background: "#0a0a0a",
                  }}
                />
                {/* status bar */}
                <div className="flex justify-between items-center px-6 pt-3 text-[12px] font-semibold text-black">
                  <span>6:11</span>
                  <span className="opacity-0">.</span>
                </div>

                {/* search bar */}
                <div className="px-3 pt-5">
                  <div
                    className="flex items-center gap-2 px-3 py-2.5 rounded-full"
                    style={{ background: "#f2f2f0" }}
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#777"
                      strokeWidth="2.5"
                    >
                      <circle cx="11" cy="11" r="7" />
                      <path d="m20 20-3-3" />
                    </svg>
                    <span
                      className="text-[12px] text-[#333] truncate"
                      style={{ fontFamily: "var(--font-sans)" }}
                    >
                      retaining wall repair near me
                    </span>
                  </div>
                </div>

                {/* sponsored label */}
                <div className="px-4 pt-4 pb-2">
                  <p
                    className="text-[10px] font-medium uppercase tracking-wider text-[#888]"
                    style={{ fontFamily: "var(--font-sans)" }}
                  >
                    Sponsored · 4 results
                  </p>
                </div>

                {/* results */}
                <div className="px-3 space-y-2.5">
                  {companies.map((c, i) => (
                    <div
                      key={c.phone}
                      className="rounded-2xl p-3"
                      style={{
                        background: "#fff",
                        border: "1px solid #ececea",
                      }}
                    >
                      <div className="flex items-start gap-2.5">
                        <div
                          className="flex items-center justify-center text-[10px] font-bold text-white shrink-0"
                          style={{
                            width: 36,
                            height: 36,
                            borderRadius: 8,
                            background: i === 0 ? "var(--color-ember)" : "#1a1a1a",
                          }}
                        >
                          {c.name
                            .split(" ")
                            .filter((w) => /^[A-Z]/.test(w))
                            .slice(0, 2)
                            .map((w) => w[0])
                            .join("")}
                        </div>
                        <div className="min-w-0 flex-1">
                          <p
                            className="text-[11.5px] font-semibold text-[#0a0a0a] leading-tight truncate"
                            style={{ fontFamily: "var(--font-sans)" }}
                          >
                            {c.name}
                          </p>
                          <div className="flex items-center gap-1 mt-0.5">
                            <span className="text-[10px] text-[#FF8c00]">★★★★★</span>
                            <span
                              className="text-[9.5px] text-[#666]"
                              style={{ fontFamily: "var(--font-sans)" }}
                            >
                              {c.rating} ({c.reviews})
                            </span>
                            {c.badge && (
                              <span
                                className="ml-1 text-[8px] uppercase tracking-wider px-1 py-0.5 rounded font-semibold"
                                style={{
                                  background: "#FFF1E8",
                                  color: "#C24A00",
                                  fontFamily: "var(--font-sans)",
                                }}
                              >
                                {c.badge}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                      {/* Call button */}
                      <a
                        href={`tel:${c.phone.replace(/[^0-9]/g, "")}`}
                        className="mt-2.5 w-full flex items-center justify-center gap-1.5 py-1.5 rounded-lg text-[11.5px] font-semibold"
                        style={{
                          background:
                            i === 0
                              ? "var(--color-ember)"
                              : "#0a0a0a",
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
                  <p
                    className="text-[10px] text-[#888]"
                    style={{ fontFamily: "var(--font-sans)" }}
                  >
                    See more results
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Copy */}
          <div className="md:col-span-6 order-1 md:order-2">
            <p className="eyebrow mb-6">The shortlist</p>
            <div className="w-fit mb-8">
              <h2 className="section-opener mb-3">
                Every company on this page is qualified.
                <br />
                <span className="font-display-italic" style={{ color: "var(--color-ember)" }}>
                  Every single one.
                </span>
              </h2>
            </div>
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
   CALL SEQUENCE — Big editorial timeline. The first three lose.
   ============================================================ */

function CallSequence() {
  const rows = [
    {
      n: "01",
      label: "All-Star Concrete",
      phone: "(770) 555-0142",
      result: "No answer.",
      fail: true,
    },
    {
      n: "02",
      label: "ProWall Solutions",
      phone: "(770) 555-0188",
      result: "Voicemail.",
      fail: true,
    },
    {
      n: "03",
      label: "Heritage Landscape",
      phone: "(770) 555-0207",
      result: "Answering service. No appointment booked.",
      fail: true,
    },
    {
      n: "04",
      label: "Benchmark Hardscapes",
      phone: "(770) 555-0233",
      result: "Someone answers. Books the appointment. Done.",
      fail: false,
    },
  ];

  return (
    <section className="relative bg-white overflow-hidden">
      {/* Top image band */}
      <div className="relative w-full">
        <img
          src={manCalling}
          alt="A worried man on the edge of his bed at dawn, phone pressed to his ear, mid-call"
          loading="lazy"
          width={1920}
          height={1080}
          className="w-full h-[50svh] md:h-[72svh] object-cover object-center"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.75) 100%)",
          }}
        />
        <div className="absolute bottom-0 left-0 right-0 p-5 md:p-12">
          <p className="eyebrow mb-3" style={{ color: "var(--color-ember)" }}>
            Chapter two
          </p>
          <p
            className="font-display text-white max-w-[760px]"
            style={{ fontSize: "clamp(26px, 3.2vw, 40px)", lineHeight: 1.15 }}
          >
            He starts dialing.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-[1280px] px-5 md:px-10 py-20 md:py-28">
        <div className="max-w-[840px]">
          {rows.map((r) => (
            <div
              key={r.n}
              className="grid grid-cols-[40px_1fr] md:grid-cols-[60px_220px_1fr] gap-3 md:gap-8 items-baseline py-7 border-b"
              style={{ borderColor: "var(--color-border)" }}
            >
              <p
                className="font-display-italic"
                style={{
                  fontSize: 22,
                  color: r.fail
                    ? "var(--color-muted-foreground)"
                    : "var(--color-ember)",
                }}
              >
                {r.n}
              </p>
              <div>
                <p
                  className="text-[15px] font-semibold"
                  style={{ fontFamily: "var(--font-sans)" }}
                >
                  {r.label}
                </p>
                <p
                  className="text-[13px]"
                  style={{
                    fontFamily: "var(--font-sans)",
                    color: "var(--color-muted-foreground)",
                  }}
                >
                  {r.phone}
                </p>
              </div>
              <p
                className="text-[18px] md:text-[22px] col-start-2 md:col-start-3"
                style={{
                  fontFamily: r.fail ? "var(--font-sans)" : "var(--font-display)",
                  fontStyle: r.fail ? "normal" : "italic",
                  fontWeight: r.fail ? 300 : 400,
                  color: r.fail
                    ? "var(--color-muted-foreground)"
                    : "var(--color-ember)",
                }}
              >
                {r.result}
              </p>
            </div>
          ))}
        </div>

        <div className="max-w-[840px] mt-20 md:mt-24">
          <p className="body-lg mb-10 max-w-[640px]">
            The search is over. Not because the fourth company was better. Not
            because they had more reviews.
          </p>
          <p
            className="font-display"
            style={{
              fontSize: "clamp(36px, 5.4vw, 64px)",
              lineHeight: 1.04,
              letterSpacing: "-0.025em",
            }}
          >
            The other three didn't
            <br className="hidden md:block" />
            {" "}lose on merit.
            <br />
            <span className="font-display" style={{ color: "var(--color-ember)" }}>
              They just weren't there.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   24/7 — Hard side-by-side. Empty office image dominates.
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
        style={{ opacity: 0.45 }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(10,10,10,0.7) 0%, rgba(10,10,10,0.92) 100%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-[1280px] px-5 md:px-10 py-24 md:py-36">
        <div className="max-w-[700px] mb-16 md:mb-24">
          <p className="eyebrow mb-6" style={{ color: "var(--color-ember)" }}>
            Chapter three
          </p>
          <div className="w-fit">
            <h2
              className="section-opener"
              style={{ color: "white" }}
            >
              The{" "}
              <span className="font-display-italic" style={{ color: "var(--color-ember)" }}>
                "24/7"
              </span>{" "}
              problem.
            </h2>
            <MarkerUnderline />
          </div>
          <p
            className="body-lg mt-6"
            style={{ color: "rgba(255,255,255,0.75)" }}
          >
            Half the companies on that list advertise round-the-clock service.
            Here's what that actually looks like.
          </p>
        </div>

        <div className="max-w-[920px]">
          {rows.map(([promise, reality], i) => (
            <div
              key={i}
              className="grid md:grid-cols-[1fr_auto_1fr] gap-3 md:gap-10 items-center py-8 border-b"
              style={{ borderColor: "rgba(255,255,255,0.14)" }}
            >
              <p
                className="font-display-italic"
                style={{
                  fontSize: "clamp(20px, 2.2vw, 28px)",
                  color: "rgba(255,255,255,0.95)",
                }}
              >
                {promise}
              </p>
              <span
                className="hidden md:flex w-10 h-px"
                style={{ background: "var(--color-ember)" }}
              />
              <p
                className="text-[17px] md:text-[19px]"
                style={{
                  fontFamily: "var(--font-sans)",
                  fontWeight: 300,
                  color: "rgba(255,255,255,0.6)",
                }}
              >
                {reality}
              </p>
            </div>
          ))}
        </div>

        <div className="max-w-[640px] mt-16">
          <p
            className="body-lg"
            style={{ color: "rgba(255,255,255,0.78)" }}
          >
            The person with the collapsed wall doesn't need a message taken. He
            needs an appointment. The moment he realizes nobody can actually help
            him,{" "}
            <span style={{ color: "var(--color-ember)" }}>
              he's already dialing the next number.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   PROOF — Huge orange stats. Crew image as proof of resolution.
   ============================================================ */

function Proof() {
  const stats = [
    { n: "409", label: "calls they missed", note: "The overflow. Calls that went to voicemail, rang out, or hit the answering service while the team was busy or off the clock." },
    { n: "105", label: "appointments booked", note: "Emmy picked up the calls the company couldn't, asked the right questions, and put the homeowner on the schedule." },
    { n: "47", label: "closed deals", note: "Signed contracts. Real revenue. From the calls the company was never going to answer in the first place." },
  ];

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1280px] px-5 md:px-10 py-20 md:py-32">
        <div className="max-w-[760px] mb-16 md:mb-20">
          <p className="eyebrow mb-6">Chapter four</p>
          <div className="w-fit mb-6">
            <h2 className="section-opener mb-3">This isn't a theory.</h2>
            <MarkerUnderline />
          </div>
          <p className="body-lg mb-5">
            A painting company thought they were answering their phones. They were —
            during business hours, when the office wasn't slammed.
          </p>
          <p className="body-lg">
            These are the calls they{" "}
            <span style={{ color: "var(--color-ember)" }}>missed</span>
            {" "}in one quarter. The overflow. The ones that never reached a human.
          </p>
        </div>

        <div className="grid md:grid-cols-3 border-t border-b" style={{ borderColor: "var(--color-ink)" }}>
          {stats.map((s, i) => (
            <div
              key={s.n}
              className="py-10 md:py-14 px-5 md:px-8"
              style={{
                borderRight:
                  i < stats.length - 1
                    ? "1px solid var(--color-border)"
                    : "none",
                borderBottom:
                  i < stats.length - 1
                    ? "1px solid var(--color-border)"
                    : "none",
              }}
            >
              <p
                className="stat-num"
                style={{
                  color:
                    s.n === "47" ? "var(--color-ember)" : "var(--color-ink)",
                }}
              >
                {s.n}
              </p>
              <p
                className="font-display-italic mt-4"
                style={{ fontSize: 22, color: "var(--color-ink)" }}
              >
                {s.label}
              </p>
              <p className="mt-3 body-soft" style={{ marginBottom: 0 }}>
                {s.note}
              </p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-12 gap-10 md:gap-16 mt-20 md:mt-28 items-center">
          <div className="md:col-span-6">
            <img
              src={crewFixing}
              alt="A masonry crew rebuilding a residential retaining wall at golden hour"
              loading="lazy"
              width={1920}
              height={1080}
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="md:col-span-6">
            <p className="eyebrow mb-6">What 47 looks like</p>
            <p
              className="font-display mb-8"
              style={{
                fontSize: "clamp(30px, 4vw, 48px)",
                lineHeight: 1.08,
                letterSpacing: "-0.02em",
              }}
            >
              47 homeowners who hired the company
              {" "}
              <span className="font-display-italic" style={{ color: "var(--color-ember)" }}>
                instead of the next name on the list.
              </span>
            </p>
            <p className="body-lg mb-6">
              Emmy answered while the office was on another line. Asked the right
              questions. Booked the appointment. The crew showed up, gave the
              estimate, signed the job. The homeowner has no idea what Emmy is.
              They don't care.
            </p>
            <p className="body-lg">
              The question isn't how many calls you're getting. It's{" "}
              <span style={{ color: "var(--color-ember)" }}>
                how many of the real ones are going to the next company on the
                list while yours rings out.
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   EMMY — Editorial bullet list, no image (visual rest)
   ============================================================ */

function Emmy() {
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
          <p className="eyebrow mb-6">Chapter five</p>
          <div className="w-fit mb-8">
            <h2 className="section-opener mb-3">
              Meet Emmy.
            </h2>
            <MarkerUnderline />
          </div>
          <p className="body-lg mb-6">
            Emmy is not here to replace your staff. Your people run your business.
            Emmy catches what they miss — the call that comes in while your
            scheduler is on another line, while your crew is on a job, while
            everyone has gone home.
          </p>
          <p className="body-soft">
            Not a call center. Not a message service. Emmy asks the right
            questions and books the appointment. The person with the problem
            gets a next step. A scheduled appointment.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[var(--color-border)] border-y" style={{ borderColor: "var(--color-border)" }}>
          {items.map(([top, bottom]) => (
            <div
              key={top}
              className="bg-[var(--color-muted)] p-6 md:p-8"
            >
              <p
                className="font-display"
                style={{
                  fontSize: "clamp(22px, 2.4vw, 30px)",
                  lineHeight: 1.1,
                  color: "var(--color-ink)",
                }}
              >
                {top}
              </p>
              <p
                className="font-display mt-1"
                style={{
                  fontSize: "clamp(20px, 2vw, 24px)",
                  color: "var(--color-ember)",
                  lineHeight: 1.2,
                }}
              >
                {bottom}.
              </p>
            </div>
          ))}
        </div>

        <p
          className="font-display-italic mt-16 max-w-[640px]"
          style={{ fontSize: "clamp(22px, 2.4vw, 30px)", lineHeight: 1.25 }}
        >
          The person with the problem just wants help.
          <br />
          <span style={{ color: "var(--color-ember)" }}>
            Emmy makes sure they get it.
          </span>
        </p>
      </div>
    </section>
  );
}

/* ============================================================
   CTA — Black. Big orange phone. Real call.
   ============================================================ */

function CTA() {
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
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(8,8,8,0.7) 0%, rgba(8,8,8,0.92) 100%)",
        }}
      />

      <div className="relative z-10 flex flex-col items-center justify-center min-h-[100svh] px-5 md:px-10 py-24 md:py-32">
        <div className="max-w-[760px] text-center">
          <p className="eyebrow mb-10" style={{ color: "var(--color-ember)" }}>
            Try it now
          </p>
          <p
            className="font-display mb-4"
            style={{
              fontSize: "clamp(28px, 3vw, 38px)",
              color: "white",
              lineHeight: 1.25,
            }}
          >
            Call this number.
          </p>
          <p
            className="font-display-italic mb-14 md:mb-20"
            style={{
              fontSize: "clamp(20px, 2vw, 24px)",
              color: "rgba(255,255,255,0.7)",
              lineHeight: 1.4,
            }}
          >
            Don't introduce yourself. Just tell Emmy you have a problem.
          </p>

          <a
            href={`tel:${PHONE.replace(/[^0-9]/g, "")}`}
            className="font-display block transition-opacity hover:opacity-90"
            style={{
              fontSize: "clamp(44px, 7.5vw, 88px)",
              color: "var(--color-ember)",
              letterSpacing: "-0.025em",
              lineHeight: 1,
            }}
          >
            {PHONE}
          </a>
          <p
            className="mt-6 body-soft"
            style={{ color: "rgba(255,255,255,0.55)", marginBottom: 0 }}
          >
            Emmy answers 24 hours a day.
          </p>

          <div
            className="mt-16 md:mt-24 mx-auto"
            style={{ width: 48, height: 1, background: "var(--color-ember)" }}
          />

          <p
            className="mt-12 body-soft max-w-[520px] mx-auto"
            style={{ color: "rgba(255,255,255,0.55)" }}
          >
            No pitch. No demo. No salesperson. Just the experience your customers
            have every time your phone rings unanswered.
          </p>

          <p
            className="font-display-italic mt-16 md:mt-20"
            style={{
              fontSize: "clamp(22px, 2.2vw, 28px)",
              color: "white",
              lineHeight: 1.35,
            }}
          >
            The person with the problem just wants help.
            <br />
            <span style={{ color: "var(--color-ember)" }}>
              Now you know exactly how that feels.
            </span>
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
    <footer
      className="py-10 px-5 md:px-10 border-t"
      style={{ background: "#050505", borderColor: "rgba(255,255,255,0.08)" }}
    >
      <div className="mx-auto max-w-[1280px] flex flex-col md:flex-row justify-between items-center gap-4">
        <p
          className="font-display"
          style={{ color: "white", fontSize: 20 }}
        >
          MeetEmmy
        </p>
        <p
          className="text-[11px] tracking-widest uppercase"
          style={{ color: "rgba(255,255,255,0.4)", fontWeight: 500 }}
        >
          © {new Date().getFullYear()} — Every call answered
        </p>
      </div>
    </footer>
  );
}
