import { createFileRoute, Link } from "@tanstack/react-router";
import heroImg from "@/assets/whats-next-hero.jpg";
import img01 from "@/assets/ae-missed-calls.jpg";
import netImg from "@/assets/ae-safety-net.jpg";
import img03 from "@/assets/ae-03-homeowner.jpg";
import img06 from "@/assets/ae-lights-on-map.jpg";
import img07 from "@/assets/ae-07-truck-dawn.jpg";
import img08 from "@/assets/ae-08-phone-down.jpg";
import img09 from "@/assets/ae-09-aerial-dawn.jpg";

export const Route = createFileRoute("/whats-next")({
  head: () => ({
    meta: [
      { title: "Emmy — The Appointment Is The Only Thing That Matters" },
      {
        name: "description",
        content:
          "You already knew something was missing. Emmy answers, books, and reports — so the call you paid to earn becomes the appointment on your calendar.",
      },
      { property: "og:title", content: "Emmy — The Appointment Is The Only Thing That Matters" },
      {
        property: "og:description",
        content:
          "She isn't a chatbot. She isn't a message service. She books the appointment.",
      },
    ],
  }),
  component: WhatsNext,
});

function Eyebrow({ children, muted = false }: { children: React.ReactNode; muted?: boolean }) {
  return <p className={muted ? "eyebrow-muted" : "eyebrow"}>{children}</p>;
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <label className="block">
      <span
        className="eyebrow-muted block mb-2"
        style={{ letterSpacing: "0.18em" }}
      >
        {label}
      </span>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
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

function ChapterMark({ n, label }: { n: string; label: string }) {
  return (
    <div className="flex items-center gap-4">
      <span
        className="font-display-italic"
        style={{ fontSize: 28, color: "var(--color-ember)", lineHeight: 1 }}
      >
        {n}
      </span>
      <span className="rule-orange" />
      <p className="eyebrow" style={{ letterSpacing: "0.22em" }}>
        {label}
      </p>
    </div>
  );
}

function Rail({ active = 1 }: { active?: 1 | 2 | 3 | 4 }) {
  const stages = [
    { n: "01", label: "The net" },
    { n: "02", label: "Conversion" },
    { n: "03", label: "Footprint" },
    { n: "04", label: "The system" },
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
                  background: isActive
                    ? "var(--color-ember)"
                    : isPast
                    ? "rgba(255,255,255,0.55)"
                    : "rgba(255,255,255,0.12)",
                  boxShadow: isActive ? "0 0 0 6px rgba(204,85,40,0.18)" : "none",
                  border: isActive ? "none" : "1px solid rgba(255,255,255,0.25)",
                }}
              />
              <p
                className="mt-5 eyebrow"
                style={{ color: isActive ? "var(--color-ember)" : "rgba(255,255,255,0.45)" }}
              >
                Stage {s.n}
              </p>
              <p
                className="mt-2 font-display"
                style={{
                  fontSize: "clamp(18px, 1.6vw, 22px)",
                  color: isActive ? "white" : "rgba(255,255,255,0.55)",
                }}
              >
                {s.label}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function WhatsNext() {
  return (
    <main className="overflow-x-hidden text-foreground">
      {/* HERO */}
      <section className="relative min-h-[100svh] flex flex-col bg-night text-white overflow-hidden">
        <img
          src={img09}
          alt=""
          aria-hidden
          className="absolute inset-0 h-full w-full object-cover"
          style={{ opacity: 0.12, filter: "saturate(0.6) brightness(0.7)" }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(120% 90% at 50% 50%, rgba(10,10,10,0.55) 0%, rgba(10,10,10,0.92) 100%)",
          }}
        />
        <div className="relative z-10 px-5 md:px-10 pt-6 md:pt-8 flex items-center justify-between">
          <Link to="/" className="font-display tracking-tight text-[20px] md:text-[22px] hover:opacity-80 transition-opacity">MeetEmmy</Link>
          <p className="eyebrow">Page two</p>
        </div>
        <div className="relative z-10 flex-1 flex items-center px-5 md:px-10 pb-12 md:pb-16 pt-10 md:pt-12">
          <div className="mx-auto w-full max-w-[1280px]">
            <div className="max-w-[860px]">
              <h1 className="hero-type">
                You already knew something was missing.
                <br />
                <span className="font-display-italic" style={{ color: "rgba(255,255,255,0.7)" }}>
                  You just couldn't put your finger on it.
                </span>
              </h1>
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

      {/* SECTION ONE — THE FIND */}
      <section className="bg-white">
        <div className="mx-auto max-w-[1320px] px-5 md:px-10 py-20 md:py-32">
          <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-center">
            <div className="md:col-span-7 relative">
              <img
                src={img01}
                alt="A phone face-up on a workbench, screen lit with the word Answered"
                loading="lazy"
                width={1600}
                height={1100}
                className="w-full h-[60svh] md:h-[78svh] object-cover"
              />
              <div
                className="absolute left-5 bottom-5 md:left-8 md:bottom-8"
                style={{
                  background: "rgba(10,10,10,0.78)",
                  color: "white",
                  padding: "10px 14px",
                  letterSpacing: "0.22em",
                  fontSize: 11,
                  textTransform: "uppercase",
                }}
              >
                Answered
              </div>
            </div>
            <div className="md:col-span-5">
              <ChapterMark n="01" label="The find" />
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
                  Not because your business wasn't good enough. Because we live in moments. And
                  moments don't wait.
                </p>
                <div className="pt-2 flex items-start gap-3">
                  <span className="rule-orange mt-3" />
                  <p
                    className="font-display-italic"
                    style={{ fontSize: "clamp(22px, 2.2vw, 30px)", lineHeight: 1.2 }}
                  >
                    That's what was missing.
                    <br />
                    <span style={{ color: "var(--color-ember)" }}>Now it's not.</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION TWO — THE NET */}
      <section className="relative bg-night text-white overflow-hidden">
        <div
          className="absolute inset-x-0 top-0 h-px"
          style={{ background: "linear-gradient(90deg, transparent, rgba(204,85,40,0.5), transparent)" }}
        />
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `url(${netImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center 65%",
            backgroundRepeat: "no-repeat",
            opacity: 0.55,
            maskImage:
              "radial-gradient(ellipse 95% 75% at 50% 60%, rgba(0,0,0,1) 0%, rgba(0,0,0,0.7) 45%, rgba(0,0,0,0) 85%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 95% 75% at 50% 60%, rgba(0,0,0,1) 0%, rgba(0,0,0,0.7) 45%, rgba(0,0,0,0) 85%)",
          }}
        />
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 55% at 50% 45%, rgba(12,12,12,0.85) 0%, rgba(12,12,12,0.55) 45%, rgba(12,12,12,0) 80%)",
          }}
        />
        <div className="relative mx-auto max-w-[760px] px-5 md:px-10 py-28 md:py-44 text-center">
          <Eyebrow>Chapter two · The net</Eyebrow>
          <h2 className="section-opener mt-8">
            Emmy is{" "}
            <span className="font-display-italic" style={{ color: "var(--color-ember)" }}>
              deployment ready.
            </span>
          </h2>
          <div className="mt-12 space-y-6">
            <p className="body-lg" style={{ color: "rgba(255,255,255,0.85)" }}>
              Your staff runs your business. They always have. Emmy catches what the moment doesn't
              allow them to.
            </p>
            <p className="body-soft" style={{ color: "rgba(255,255,255,0.55)" }}>
              The call that comes in while your scheduler is on another line. While your crew is on
              a job. While everyone has gone home.
            </p>
          </div>
          <div className="mt-14 mx-auto max-w-[520px] py-10 border-y border-white/10">
            <p
              className="font-display"
              style={{ fontSize: "clamp(24px, 2.6vw, 32px)", lineHeight: 1.2, color: "white" }}
            >
              She doesn't take messages.
              <br />
              She doesn't ask them to hold.
              <br />
              <span className="font-display-italic" style={{ color: "var(--color-ember)" }}>
                She books the appointment.
              </span>
            </p>
          </div>
          <p className="body-soft mt-10" style={{ color: "rgba(255,255,255,0.55)" }}>
            Every time. Without adding anything to your plate.
          </p>
        </div>
      </section>

      {/* SECTION THREE — THE FIRST A-HA */}
      <section className="bg-white">
        <div className="relative w-full">
          <img
            src={img03}
            alt="Google Maps at 6 AM with four pins, one lit"
            loading="lazy"
            width={1600}
            height={1100}
            className="w-full h-[55svh] md:h-[78svh] object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(0,0,0,0) 50%, rgba(0,0,0,0.6) 100%)",
            }}
          />
          <div className="absolute bottom-0 left-0 right-0 p-5 md:p-12">
            <div className="mx-auto max-w-[1280px]">
              <Eyebrow>6:00 AM · One lit pin</Eyebrow>
              <p
                className="font-display text-white max-w-[760px] mt-3"
                style={{
                  fontSize: "clamp(28px, 4vw, 48px)",
                  lineHeight: 1.06,
                  letterSpacing: "-0.02em",
                }}
              >
                Fifteen seconds.
                <br />
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
              <ChapterMark n="03" label="The first a-ha" />
              <h2 className="section-opener mt-8">
                Emmy wasn't built to{" "}
                <span className="font-display-italic">answer phones.</span>
              </h2>
            </div>
            <div className="md:col-span-7 space-y-6 md:pt-3">
              <p className="body-lg max-w-[560px]">
                She was built around the psychology of someone in crisis. What they need to hear.
                How long they'll wait. What it takes for them to say yes to a time.
              </p>
              <p className="body-soft max-w-[560px]">
                Google knows this. It's why prominence exists as a ranking factor. In milliseconds,
                Google is asking one question. Which business is most likely to pick up right now
                and get this person to an appointment.
              </p>
              <p
                className="font-display-italic pt-2"
                style={{ fontSize: "clamp(22px, 2.2vw, 30px)", color: "var(--color-ember)" }}
              >
                Emmy is the answer to that question. Every single time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION FOUR — THE RECORD */}
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
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(10,10,10,0.35) 0%, rgba(10,10,10,0.55) 50%, rgba(10,10,10,0.95) 100%)",
            }}
          />
          <div className="relative z-10 w-full px-5 md:px-10 pb-20 md:pb-32 pt-24">
            <div className="mx-auto max-w-[1280px] grid md:grid-cols-12 gap-10 md:gap-16 items-end">
              <div className="md:col-span-7">
                <ChapterMark n="04" label="The record" />
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
                  Presence isn't built in a campaign. It's built in moments. Six AM moments.
                  Saturday moments. The moments your competitors let go to voicemail.
                </p>
                <p className="body-soft" style={{ color: "rgba(255,255,255,0.6)" }}>
                  Not because you ran a new ad. Not because you asked for another review.
                </p>
                <p
                  className="font-display-italic"
                  style={{ fontSize: "clamp(22px, 2.2vw, 30px)", color: "white" }}
                >
                  Because{" "}
                  <span style={{ color: "var(--color-ember)" }}>you were there.</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION FIVE — THE WHITELIST */}
      <section className="relative bg-cream">
        <div
          className="absolute inset-x-0 top-0 h-[3px]"
          style={{ background: "var(--color-ember)" }}
        />
        <div className="mx-auto max-w-[1180px] px-5 md:px-10 py-28 md:py-44">
          <div className="grid md:grid-cols-12 gap-10 md:gap-20 items-start">
            <div className="md:col-span-4">
              <ChapterMark n="05" label="The whitelist" />
              <h2
                className="font-display mt-8"
                style={{
                  fontSize: "clamp(34px, 4.6vw, 56px)",
                  lineHeight: 1.05,
                  letterSpacing: "-0.02em",
                  color: "var(--color-ink)",
                }}
              >
                A record.
                <br />
                <span className="font-display-italic" style={{ color: "var(--color-ember-deep)" }}>
                  Not a list.
                </span>
              </h2>
            </div>
            <div className="md:col-span-8">
              <p
                className="eyebrow"
                style={{ color: "var(--color-ember-deep)", letterSpacing: "0.22em" }}
              >
                What it actually is
              </p>
              <p
                className="font-display mt-4"
                style={{
                  fontSize: "clamp(22px, 2vw, 28px)",
                  lineHeight: 1.35,
                  color: "var(--color-ink)",
                }}
              >
                The whitelist is the search engine's approved-vendor list — the businesses
                Google, Angi, and Yelp consider safe to send an appointment-seeker to when the
                moment is on the line.
              </p>

              <div
                className="mt-10 relative"
                style={{
                  background: "white",
                  borderLeft: "4px solid var(--color-ember)",
                  padding: "28px 28px 28px 32px",
                  boxShadow: "0 24px 50px -28px rgba(20,15,10,0.25)",
                }}
              >
                <p
                  className="eyebrow"
                  style={{ color: "var(--color-ember-deep)", letterSpacing: "0.22em" }}
                >
                  The shift
                </p>
                <p
                  className="font-display mt-3"
                  style={{
                    fontSize: "clamp(24px, 2.6vw, 34px)",
                    lineHeight: 1.2,
                    letterSpacing: "-0.015em",
                    color: "var(--color-ink)",
                  }}
                >
                  They're not tracking your reviews.{" "}
                  <mark
                    style={{
                      background: "linear-gradient(180deg, transparent 55%, rgba(204,85,40,0.28) 55%)",
                      color: "var(--color-ink)",
                      padding: "0 4px",
                    }}
                    className="font-display-italic"
                  >
                    They're tracking your outcomes.
                  </mark>
                </p>
              </div>

              <div className="mt-12 grid sm:grid-cols-3 gap-6 max-w-[640px]">
                {["Answers.", "Books.", "Delivers."].map((w, i) => (
                  <div
                    key={w}
                    className="border-t pt-4"
                    style={{ borderColor: "rgba(204,85,40,0.35)" }}
                  >
                    <p
                      className="eyebrow"
                      style={{ color: "var(--color-ember-deep)" }}
                    >
                      0{i + 1}
                    </p>
                    <p
                      className="font-display mt-2"
                      style={{ fontSize: "clamp(22px, 2vw, 28px)", color: "var(--color-ink)" }}
                    >
                      {w}
                    </p>
                  </div>
                ))}
              </div>
              <p className="body-lg mt-12 max-w-[560px]" style={{ color: "var(--color-ink)" }}>
                That's the business that gets the next call. And the one after that.
              </p>
              <p className="body-soft mt-4 max-w-[560px]">
                You don't apply to the whitelist. You build your way onto it. One answered call at
                a time.
              </p>
              <p
                className="font-display-italic mt-10"
                style={{ fontSize: "clamp(22px, 2.2vw, 30px)", color: "var(--color-ember-deep)" }}
              >
                Emmy is how you build it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION SIX — THE QUESTION */}
      <section className="relative bg-night text-white">
        <div className="relative min-h-[100svh] flex items-center justify-center overflow-hidden">
          <img
            src={img09}
            alt="Aerial view of a pre-dawn residential neighborhood"
            loading="lazy"
            width={1920}
            height={1200}
            className="absolute inset-0 h-full w-full object-cover"
            style={{ opacity: 0.7 }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(70% 80% at 50% 55%, rgba(10,10,10,0.2) 0%, rgba(10,10,10,0.85) 80%)",
            }}
          />
          <div className="relative z-10 px-5 md:px-10 py-28 max-w-[1080px] text-center">
            <Eyebrow>Chapter six · The question</Eyebrow>
            <p
              className="font-display mt-10 text-white"
              style={{
                fontSize: "clamp(28px, 4.2vw, 54px)",
                lineHeight: 1.12,
                letterSpacing: "-0.02em",
              }}
            >
              If you were Google, and you had fifteen thousand people a year searching for what you
              do —
            </p>
            <p
              className="font-display-italic mt-8"
              style={{
                fontSize: "clamp(28px, 4.4vw, 56px)",
                color: "var(--color-ember)",
                lineHeight: 1.1,
              }}
            >
              where would you send them?
            </p>
          </div>
        </div>
      </section>

      {/* SECTION SEVEN — THE STAGES */}
      <section className="bg-night-soft text-white">
        <div className="relative w-full">
          <img
            src={img07}
            alt="A crew truck pulling into a residential driveway at dawn"
            loading="lazy"
            width={1920}
            height={1100}
            className="w-full h-[50svh] md:h-[72svh] object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(180deg, rgba(0,0,0,0) 40%, rgba(18,18,18,1) 100%)",
            }}
          />
        </div>
        <div className="mx-auto max-w-[1280px] px-5 md:px-10 pt-4 pb-24 md:pb-36 -mt-24 md:-mt-32 relative z-10">
          <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-end">
            <div className="md:col-span-6">
              <ChapterMark n="07" label="The stages" />
              <h2 className="section-opener mt-8">
                Most businesses aren't ready for what stage one{" "}
                <span className="font-display-italic" style={{ color: "var(--color-ember)" }}>
                  brings.
                </span>
              </h2>
            </div>
            <div className="md:col-span-6">
              <p className="body-lg max-w-[520px]" style={{ color: "rgba(255,255,255,0.85)" }}>
                The volume is real. You'll grow into it. That's the right problem to have.
              </p>
            </div>
          </div>
          <div className="mt-20 md:mt-28">
            <Rail active={1} />
          </div>
          <div className="mt-20 md:mt-28 grid md:grid-cols-12 gap-10">
            <div className="md:col-span-7 max-w-[640px] space-y-6">
              <p className="body-soft" style={{ color: "rgba(255,255,255,0.65)" }}>
                When you do, <span style={{ color: "white" }}>stage two</span> closes the lead
                conversion gap. Every dollar already spent on leads, none of it falling through
                the same cracks Emmy just closed.
              </p>
              <p className="body-soft" style={{ color: "rgba(255,255,255,0.65)" }}>
                <span style={{ color: "white" }}>Stage three</span> builds the footprint. You're
                not on the list. You're the first call.
              </p>
              <p className="body-soft" style={{ color: "rgba(255,255,255,0.65)" }}>
                <span style={{ color: "white" }}>Stage four.</span> The full system. Running.
              </p>
            </div>
            <div className="md:col-span-5 md:border-l md:pl-10 border-white/10">
              <p
                className="font-display-italic"
                style={{ fontSize: "clamp(24px, 2.6vw, 32px)", color: "white", lineHeight: 1.2 }}
              >
                But not today.
              </p>
              <p
                className="font-display-italic mt-4"
                style={{ fontSize: "clamp(22px, 2.2vw, 30px)", color: "var(--color-ember)", lineHeight: 1.25 }}
              >
                Today the appointment is the only thing that matters. It always was.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION EIGHT — STAGE ONE · THE SAFETY NET */}
      <section className="bg-white">
        <div className="mx-auto max-w-[1180px] px-5 md:px-10 py-28 md:py-40">
          <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-start">
            <div className="md:col-span-5">
              <ChapterMark n="08" label="Stage one · The safety net" />
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
                Stop the calls you already paid for from falling through. Everything else is built
                on top of that.
              </p>
            </div>

            <div className="md:col-span-7">
              <div
                className="grid grid-cols-2 gap-0 border"
                style={{ borderColor: "rgba(20,15,10,0.12)" }}
              >
                <div
                  className="p-8 md:p-12 text-center"
                  style={{ borderRight: "1px solid rgba(20,15,10,0.12)" }}
                >
                  <p className="eyebrow-muted" style={{ letterSpacing: "0.22em" }}>
                    Per call handled
                  </p>
                  <p
                    className="pricing-number mt-6"
                    style={{ color: "var(--color-ink)" }}
                  >
                    $1
                  </p>
                  <p
                    className="font-display mt-4"
                    style={{ fontSize: 18, color: "var(--color-ink)" }}
                  >
                    She answers it.
                  </p>
                </div>
                <div
                  className="p-8 md:p-12 text-center"
                  style={{ background: "var(--color-ink)", color: "white" }}
                >
                  <p
                    className="eyebrow"
                    style={{ color: "var(--color-ember)", letterSpacing: "0.22em" }}
                  >
                    Per appointment booked
                  </p>
                  <p
                    className="pricing-number mt-6"
                    style={{ color: "var(--color-ember)" }}
                  >
                    $39
                  </p>
                  <p
                    className="font-display mt-4"
                    style={{ fontSize: 18, color: "white" }}
                  >
                    She closes it.
                  </p>
                </div>
              </div>
              <div className="mt-10 flex items-start gap-4 max-w-[560px]">
                <span className="rule-orange mt-3" />
                <p
                  className="font-display-italic"
                  style={{
                    fontSize: "clamp(20px, 2vw, 26px)",
                    color: "var(--color-ink)",
                    lineHeight: 1.3,
                  }}
                >
                  We get paid when the call becomes an appointment.
                  <br />
                  <span style={{ color: "var(--color-ember-deep)" }}>
                    Same thing Emmy's focused on.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION NINE — ENROLLMENT */}
      <section className="bg-night text-white">
        <div className="grid md:grid-cols-12 min-h-[90svh]">
          <div className="md:col-span-6 relative min-h-[50svh]">
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
            <div className="max-w-[480px]">
              <ChapterMark n="09" label="Enrollment" />
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
                  <p
                    className="font-display"
                    style={{ fontSize: "clamp(22px, 2.2vw, 28px)", lineHeight: 1.3 }}
                  >
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
              <div className="mt-14">
                <a
                  href="#enroll"
                  className="inline-flex items-center justify-center font-sans"
                  style={{
                    background: "var(--color-ember)",
                    color: "white",
                    padding: "22px 56px",
                    borderRadius: 999,
                    fontSize: 15,
                    letterSpacing: "0.18em",
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
        </div>
      </section>

      {/* CLOSE */}
      <section className="relative min-h-[100svh] flex flex-col bg-night text-white overflow-hidden">
        <img
          src={img09}
          alt="Pre-dawn aerial view of a quiet residential neighborhood"
          loading="lazy"
          width={1920}
          height={1200}
          className="absolute inset-0 h-full w-full object-cover"
          style={{ opacity: 0.5 }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(10,10,10,0.8) 0%, rgba(10,10,10,0.55) 45%, rgba(10,10,10,0.98) 100%)",
          }}
        />
        <div className="relative z-10 flex-1 flex items-center justify-center px-5 md:px-10 py-24">
          <div className="max-w-[860px] text-center">
            <Eyebrow>The close</Eyebrow>
            <h2
              className="font-display mt-8 text-white"
              style={{ fontSize: "clamp(32px, 5vw, 60px)", lineHeight: 1.1, letterSpacing: "-0.02em" }}
            >
              The appointment is the only thing that ever mattered.
              <br />
              <span className="font-display-italic" style={{ color: "rgba(255,255,255,0.7)" }}>
                To them. And to you.
              </span>
            </h2>
            <p
              className="font-display-italic mt-10"
              style={{ fontSize: "clamp(22px, 2.4vw, 30px)", color: "var(--color-ember)" }}
            >
              Emmy makes sure you're there.
            </p>
          </div>
        </div>
        <div className="relative z-10 px-5 md:px-10 pb-8 flex items-center justify-between">
          <p className="font-display tracking-tight text-[18px]">MeetEmmy</p>
          <p className="eyebrow-muted" style={{ color: "rgba(255,255,255,0.4)" }}>
            One button. One thing that matters.
          </p>
        </div>
      </section>

      {/* ENROLLMENT FORM */}
      <section
        id="enroll"
        className="relative bg-cream"
        style={{ borderTop: "3px solid var(--color-ember)" }}
      >
        <div className="mx-auto max-w-[980px] px-5 md:px-10 py-24 md:py-36">
          <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-start">
            <div className="md:col-span-5">
              <ChapterMark n="10" label="Say yes" />
              <h2
                className="font-display mt-8"
                style={{
                  fontSize: "clamp(30px, 3.4vw, 44px)",
                  lineHeight: 1.08,
                  letterSpacing: "-0.02em",
                  color: "var(--color-ink)",
                }}
              >
                Tell us where to send{" "}
                <span className="font-display-italic" style={{ color: "var(--color-ember-deep)" }}>
                  Emmy.
                </span>
              </h2>
              <p className="body-soft mt-6 max-w-[380px]">
                We configure her for your business. She's live within 24 to 48 hours.
              </p>
            </div>
            <div className="md:col-span-7">
              <form
                onSubmit={(e) => e.preventDefault()}
                className="bg-white p-7 md:p-10"
                style={{ boxShadow: "0 30px 60px -32px rgba(20,15,10,0.25)" }}
              >
                <div className="grid sm:grid-cols-2 gap-5">
                  <Field label="Your name" name="name" placeholder="Jordan Reyes" />
                  <Field label="Business name" name="business" placeholder="Reyes Plumbing" />
                  <Field
                    label="Business phone"
                    name="phone"
                    type="tel"
                    placeholder="(555) 123-4567"
                  />
                  <Field
                    label="Email"
                    name="email"
                    type="email"
                    placeholder="jordan@reyesplumbing.com"
                  />
                  <div className="sm:col-span-2">
                    <Field
                      label="Service area (zip or city)"
                      name="area"
                      placeholder="Austin, TX"
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="mt-8 w-full inline-flex items-center justify-center font-sans"
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
                  Say yes — start enrollment
                </button>
                <p
                  className="mt-5 text-center"
                  style={{
                    fontSize: 12,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "var(--color-muted-foreground)",
                  }}
                >
                  No card. No commitment until Emmy goes live.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
