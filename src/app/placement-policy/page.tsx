import type { Metadata } from "next";
import LegalPage from "@/components/legal/LegalPage";

export const metadata: Metadata = {
  title: "Placement & Internship Support Policy",
  description:
    "Sraventix Technologies LLP provides placement support only — resume preparation, interview readiness, and employer connections. We do not guarantee jobs or internships.",
  alternates: { canonical: "/placement-policy" },
};

export default function PlacementPolicyPage() {
  return (
    <LegalPage
      label="Legal"
      title="Placement & Internship Support Policy"
      effectiveDate="24 July 2026"
      intro={
        <>
          <p>
            At Sraventix Technologies LLP (&quot;Sraventix&quot;), our mission
            is to make learners genuinely job-ready. As part of that mission,
            eligible learners receive placement support alongside their
            training. This policy explains exactly what that support includes
            — and, just as importantly, what it does not.
          </p>
          <p className="font-semibold text-text-heading">
            In short: we provide placement support, not jobs. We do not
            promise, guarantee, or provide employment or internships to any
            learner.
          </p>
        </>
      }
      sections={[
        {
          heading: "What Placement Support Includes",
          body: (
            <>
              <p>
                Depending on the program, placement support may include any of
                the following:
              </p>
              <ul>
                <li>
                  Resume and professional-profile building (including
                  LinkedIn and portfolio guidance).
                </li>
                <li>
                  Mock interviews, technical assessment practice, and
                  interview-readiness feedback.
                </li>
                <li>
                  Soft-skills and communication guidance for interviews and
                  workplaces.
                </li>
                <li>
                  Sharing job and internship openings from our hiring-partner
                  network and referring eligible learners to them.
                </li>
                <li>
                  Organizing or facilitating placement drives, hackathons, and
                  employer interactions where opportunities may arise.
                </li>
              </ul>
            </>
          ),
        },
        {
          heading: "What Placement Support Does NOT Include",
          body: (
            <>
              <ul>
                <li>
                  A guaranteed job, internship, interview, offer letter,
                  salary, stipend, or joining date — none of these are
                  promised, implied, or assured.
                </li>
                <li>
                  Employment with Sraventix itself. Enrolling in a program
                  does not create any employer–employee or internship
                  relationship with us.
                </li>
                <li>
                  Any influence over an employer&apos;s hiring decision.
                  Selection, compensation, role, and location are decided
                  solely by the hiring organization.
                </li>
                <li>
                  Unlimited-duration support. Placement support is available
                  for the period communicated for your program, after which it
                  lapses.
                </li>
              </ul>
              <p>
                If any advertisement, agent, or individual promises you a
                guaranteed job or internship on behalf of Sraventix, that
                promise is unauthorized — please report it to us at
                info@sraventix.in.
              </p>
            </>
          ),
        },
        {
          heading: "Eligibility for Placement Support",
          body: (
            <>
              <p>
                Placement support is a privilege linked to your seriousness as
                a learner. To be eligible, you must:
              </p>
              <ul>
                <li>
                  Complete the enrolled program, including required
                  assignments, projects, and assessments.
                </li>
                <li>
                  Maintain the minimum attendance communicated for Live
                  batches.
                </li>
                <li>
                  Participate professionally in mock interviews and
                  employer-facing interactions.
                </li>
                <li>
                  Provide accurate information in your resume and
                  applications. Misrepresentation ends placement support
                  immediately.
                </li>
              </ul>
            </>
          ),
        },
        {
          heading: "No Fees for Placement",
          body: (
            <p>
              We never charge learners any separate fee, commission, or
              deposit for placement support, referrals, or interviews beyond
              the program fee. If anyone demands such a payment in
              Sraventix&apos;s name, do not pay — report it to
              info@sraventix.in immediately.
            </p>
          ),
        },
        {
          heading: "Internships & Live Projects",
          body: (
            <p>
              Some programs include live projects, capstones, or
              industry-simulated work as part of the curriculum. These are
              learning experiences, not internships or employment, and carry
              no stipend or employment rights unless explicitly offered in
              writing by a hiring organization. Where partner organizations
              offer internships, the terms of that internship — including
              stipend, duration, and conversion — are set entirely by that
              organization.
            </p>
          ),
        },
        {
          heading: "Learner Responsibilities",
          body: (
            <p>
              Placement outcomes depend primarily on your own skill,
              consistency, and performance in interviews. We expect learners
              to apply actively, prepare sincerely for every opportunity
              shared, appear for scheduled interviews on time, and conduct
              themselves professionally with every employer. Repeated
              no-shows to arranged interviews may result in withdrawal of
              placement support.
            </p>
          ),
        },
        {
          heading: "Our Commitment",
          body: (
            <p>
              While we do not guarantee outcomes, we invest genuinely in
              them — our L.E.A.P. framework ends at &quot;Perform&quot;
              because we measure ourselves by learner capability, not
              certificates issued. We continuously grow our hiring-partner
              network and share every relevant opportunity with eligible
              learners.
            </p>
          ),
        },
        {
          heading: "Contact",
          body: (
            <p>
              Questions about placement support? Write to info@sraventix.in —
              Sraventix Technologies LLP, Ongole, Andhra Pradesh, India.
            </p>
          ),
        },
      ]}
    />
  );
}
