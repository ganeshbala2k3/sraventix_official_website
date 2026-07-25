import Reveal from "@/components/ui/Reveal";
import HeroCarousel from "./HeroCarousel";
import type { CarouselSlide } from "./HeroCarousel";

const SLIDES: CarouselSlide[] = [
  {
    src: "/carousel/carousel-06.jpg",
    alt: "Mission Youth 4 — Prakasam Police Hackathon 2026 event backdrop, presented by Orvion, Prakasam Police, and Sraventix Technologies",
    caption: "Mission Youth 4 · Prakasam Police Hackathon 2026",
  },
  {
    src: "/carousel/IMG-20250310-WA0006.jpg",
    alt: "Sraventix-trained students holding placement trophies alongside campus recruiters at a Sri Indu Institutions placement drive",
    caption: "Campus placements, offer letters in hand",
  },
  {
    src: "/carousel/carousel-01.jpg",
    alt: "Student teams collaborating at laptops during a Sraventix-powered hackathon",
    caption: "120+ students, one hall, 24 hours of building",
  },
  {
    src: "/carousel/IMG-20250310-WA0016.jpg",
    alt: "Sraventix-trained students receiving a prize-winner certificate from university officials at the IQ Internz awards",
    caption: "Recognized at the IQ Internz awards",
  },
  {
    src: "/carousel/carousel-05.jpg",
    alt: "A participant presenting an AI-powered Unified Safety, Traffic & Legal Hub dashboard on stage",
    caption: "Real problem statements, real AI systems",
  },
  {
    src: "/carousel/carousel-11.jpg",
    alt: "The Sraventix Technologies team on stage with senior Prakasam Police officials and the full cohort of hackathon participants",
    caption: "On stage with Prakasam Police leadership and the full cohort",
  },
  {
    src: "/carousel/IMG-20250310-WA0001.jpg",
    alt: "A cohort of Sraventix trainees holding their course completion certificates in a training hall",
    caption: "Certified and ready — another cohort completes training",
  },
  {
    src: "/carousel/carousel-07.jpg",
    alt: "A participant pitching a crowd management and riot prevention solution to the audience",
    caption: "Pitching solutions that solve real public-safety problems",
  },
  {
    src: "/carousel/carousel-04.jpg",
    alt: "Audience seated in front of the Mission Youth 4 leaderboard screen, with the Orvion sponsor banner in the foreground",
    caption: "A packed house for the Grand Finale results",
  },
  {
    src: "/carousel/IMG-20250310-WA0015.jpg",
    alt: "Sraventix trainers and students posing together after a classroom training session",
    caption: "Inside the classroom, building skills that stick",
  },
  {
    src: "/carousel/carousel-03.jpg",
    alt: "Participants huddled around a table, mentoring and refining their project",
    caption: "Mentorship at the table, not just in a slide deck",
  },
  {
    src: "/carousel/carousel-09.jpg",
    alt: "The Mission Youth 4 hackathon stage set before the event begins, backed by the Orvion, Prakasam Police, and Sraventix Technologies banner",
    caption: "All set for Mission Youth 4 · Prakasam Police Hackathon 2026",
  },
  {
    src: "/carousel/carousel-08.jpg",
    alt: "A senior Prakasam Police officer reviewing a student team's project on stage",
    caption: "Evaluated by the industry and law-enforcement experts it's built for",
  },
  {
    src: "/carousel/carousel-02.jpg",
    alt: "Live leaderboard screen showing the Mission Youth 4 Grand Finale shortlisted teams, with the judges' seating area in the foreground",
    caption: "10 teams shortlisted for the Grand Finale",
  },
  {
    src: "/carousel/carousel-10.jpg",
    alt: "The Sraventix Technologies team with Prakasam Police officials and hackathon participants on stage",
    caption: "Sraventix Technologies, with Prakasam Police and Orvion",
  },
];

export default function MomentsGallery() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal>
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold tracking-wide text-blue uppercase">
            Sraventix In Action
          </span>
          <h2 className="mt-3 text-[clamp(1.75rem,3vw+1rem,3rem)] leading-[1.15] font-bold text-text-heading">
            Moments worth sharing
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-text-body">
            A look inside our hackathons, mentorship sessions, and industry
            collaborations in action.
          </p>
        </div>
        </Reveal>

        <Reveal delay={120}>
        <div className="mt-10">
          <HeroCarousel slides={SLIDES} />
        </div>
        </Reveal>
      </div>
    </section>
  );
}
