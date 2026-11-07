// Every app screen on the page, and what each one is for. To add or replace a
// screen, put the file in public/screens/<app>/ and edit the arrays below:
// the hero cycles through them and the chapters lay them out, in this order.
//
// BodyProof's screens are the app's mock build (synthetic data), copied from
// eend.app's public/bodyproof/screens. The Ministry's are below.

const bp = (name, alt) => ({ src: `/screens/bodyproof/${name}.webp`, w: 780, h: 1688, top: "#F3F1EC", alt });

export const BODYPROOF_SCREENS = [
  {
    shot: bp("today", "BodyProof, Today: the day so far in one sentence, small rings for food, HRV, doses and the alcohol free run, then the doses taken"),
    label: "Today",
    line: "The day so far in one sentence, every figure one tap from its page.",
  },
  {
    shot: bp("hrv", "BodyProof, heart rate variability balanced across devices: this month's nights against the usual band, quit day marked"),
    label: "Against your own usual",
    line: "Every watch balanced into one line, your usual drawn as a band.",
  },
  {
    shot: bp("sober", "BodyProof, Alcohol free: day 7, the run, the days in all and the longest run"),
    label: "Alcohol free",
    line: "The run, the days in all and the longest run. A drink never erases them.",
  },
  {
    shot: bp("meds", "BodyProof, Medications: a pill a dose, 14 of 14 doses taken, and the notes kept beside them"),
    label: "Doses against your nights",
    line: "A tap a dose, the notes beside it, then what your nights did.",
  },
];

// The Ministry, captured from demo.html in damo1111/ministry_of_susan
// (commit b868db8) at 390 x 844 and kept at 780 x 1688. That household is
// called Ministry of Margaret; its people, medicines and photos are made up.
// Never capture the real app (index.html).
const PAPER = "#F5F1E8";
const SCRIM = "#9B9B94";
const ms = (name, top, alt) => ({ src: `/screens/susan/${name}.webp`, w: 780, h: 1688, top, alt });

export const SUSAN_SCREENS = [
  {
    shot: ms("home", PAPER, "The Ministry home: Good evening Michael, then Margaret today: out 1 km from home, her tablets and meals ticked by a carer, things to keep an eye on, the last visit, the next one and errands"),
    label: "Margaret today, at a glance",
    line: "Where she is, what she ate, how she was, who came and who is next.",
  },
  {
    shot: ms("where", SCRIM, "Where's Margaret: a map with her tracker, out 1 km from home, the tracker's battery, and her recent trips"),
    label: "Where she is, and her recent trips",
    line: "A map from her tracker, its battery, and her trips out.",
  },
  {
    shot: ms("inbox", PAPER, "Inbox: everything waiting on you, most urgent first, with things to buy, an invoice to approve and pay, and a request being chased"),
    label: "What needs you",
    line: "Everything waiting on you, most urgent first: to buy, to pay, to chase.",
  },
  {
    shot: ms("add", SCRIM, "The Add sheet: photo or video, just say it, care note, expense, request, post, message the team, appointment, bill and rota"),
    label: "Add anything",
    line: "A photo or video, or just say it and we work out where it goes.",
  },
  {
    shot: ms("margaret", PAPER, "Margaret: how she is now, from the last three months of notes, a box to ask about her, and what to keep an eye on"),
    label: "How she is now",
    line: "A summary from the last three months of notes, and a box to ask about her.",
  },
  {
    shot: ms("doses", PAPER, "Last 14 days: doses taken, a square a day for tablets, food and mood, ticked at the end of each visit"),
    label: "The last fortnight in squares",
    line: "Tablets, food and mood, ticked at the end of each visit.",
  },
  {
    shot: ms("medicines", PAPER, "Medicines: a refill tracked from ordered to GP approved, ready to collect and collected, and the days left on each medicine"),
    label: "Prescriptions, tracked",
    line: "Days left on each medicine, and a refill from ordered to collected.",
  },
  {
    shot: ms("people", PAPER, "People: who to call if something is wrong, the admin with call, WhatsApp and email, and filters for carers, health and family"),
    label: "Everyone who helps",
    line: "Her GP, family and carers, one tap to call, WhatsApp or email.",
  },
  {
    shot: ms("schedule", PAPER, "Schedule: open shifts for carers to claim, the week's visits and hours, and what is next up"),
    label: "Visits and open shifts",
    line: "Who is coming, and shifts for carers to claim.",
  },
  {
    shot: ms("month", PAPER, "Margaret's November: the month in brief, then photos, with Print"),
    label: "Her month, on one page",
    line: "The month in brief and its photos, to read or print.",
  },
];

// The hero's Fig. 2 cycles through these.
export const SUSAN_HERO = SUSAN_SCREENS.slice(0, 4);
