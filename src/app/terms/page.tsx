import type { Metadata } from "next";
import LegalPage from "@/components/legal/LegalPage";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "Terms and conditions governing the use of Sraventix Technologies LLP's website, programs, and services.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <LegalPage
      label="Legal"
      title="Terms & Conditions"
      effectiveDate="24 July 2026"
      intro={
        <>
          <p>
            These Terms &amp; Conditions (&quot;Terms&quot;) govern your access
            to and use of the website, programs, and services of Sraventix
            Technologies LLP (&quot;Sraventix&quot;, &quot;we&quot;,
            &quot;us&quot;, or &quot;our&quot;), a limited liability
            partnership registered in India with its principal place of
            business in Ongole, Andhra Pradesh.
          </p>
          <p>
            By accessing our website, enrolling in a program, or using any of
            our services, you agree to be bound by these Terms. If you do not
            agree, please do not use our services.
          </p>
        </>
      }
      sections={[
        {
          heading: "Eligibility",
          body: (
            <p>
              Our programs are open to students, working professionals, and
              organizations. If you are under 18 years of age, you may enroll
              only with the consent and supervision of a parent or legal
              guardian, who agrees to these Terms on your behalf.
            </p>
          ),
        },
        {
          heading: "Enrollment & Account",
          body: (
            <>
              <p>
                Enrollment in a program is confirmed only after we receive the
                applicable fee in full and issue a written confirmation (by
                email or another written channel). You agree to provide
                accurate, complete, and current information at the time of
                registration and to keep it updated.
              </p>
              <p>
                Enrollment is personal to you. Sharing login credentials,
                course access, or learning materials with any other person is
                strictly prohibited and may result in termination of access
                without refund.
              </p>
            </>
          ),
        },
        {
          heading: "Programs, Fees & Payments",
          body: (
            <>
              <p>
                Programs are offered in two modes — Live (instructor-led
                batches) and Self-Paced (recorded content) — at the fees
                displayed on our website at the time of enrollment. All fees
                are quoted in Indian Rupees (INR) and, unless explicitly
                stated otherwise, are inclusive of applicable taxes.
              </p>
              <ul>
                <li>
                  Fees paid are non-refundable, as detailed in our Refund
                  Policy.
                </li>
                <li>
                  We may revise program fees, schedules, curriculum, trainers,
                  or delivery mode at any time. Changes will not affect
                  enrollments already confirmed, except as described in these
                  Terms.
                </li>
                <li>
                  If a Live batch is rescheduled by us, you will be offered a
                  seat in the next available batch.
                </li>
              </ul>
            </>
          ),
        },
        {
          heading: "Course Access & Duration",
          body: (
            <p>
              Access to Self-Paced content is provided for the access period
              communicated at the time of enrollment. Live sessions are
              accessible only during the scheduled batch. We may record Live
              sessions and make recordings available to enrolled learners at
              our discretion. Access may be suspended or terminated for
              violation of these Terms.
            </p>
          ),
        },
        {
          heading: "Certificates",
          body: (
            <p>
              Certificates of completion are issued only to learners who meet
              the program&apos;s completion criteria — including attendance,
              assignments, and assessments, as applicable. Certificates
              confirm participation and completion of training; they are not a
              government-recognized degree, diploma, or professional license.
            </p>
          ),
        },
        {
          heading: "No Job Guarantee",
          body: (
            <p>
              Sraventix is a training and workforce-development company. We do
              not promise, guarantee, or warrant any job, internship, salary,
              or specific career outcome as a result of enrolling in or
              completing any program. Any placement-related services we
              provide are limited to support and facilitation, as described in
              our Placement &amp; Internship Support Policy.
            </p>
          ),
        },
        {
          heading: "Intellectual Property",
          body: (
            <>
              <p>
                All course content — including videos, slides, notes,
                assignments, code samples, brochures, and branding — is the
                intellectual property of Sraventix or its licensors. It is
                provided to you for personal, non-commercial learning use
                only.
              </p>
              <ul>
                <li>
                  You may not copy, record, reproduce, distribute, resell,
                  publish, or create derivative works from our content without
                  prior written permission.
                </li>
                <li>
                  Projects you build during a program belong to you, except
                  for any Sraventix-provided starter material contained in
                  them.
                </li>
              </ul>
            </>
          ),
        },
        {
          heading: "Learner Code of Conduct",
          body: (
            <>
              <p>You agree to:</p>
              <ul>
                <li>
                  Behave respectfully toward trainers, mentors, staff, and
                  fellow learners in all sessions and communication channels.
                </li>
                <li>
                  Not engage in harassment, discrimination, plagiarism,
                  cheating in assessments, or disruption of sessions.
                </li>
                <li>
                  Not use our services for any unlawful purpose or in
                  violation of applicable laws.
                </li>
              </ul>
              <p>
                We reserve the right to suspend or remove any learner who
                violates this code of conduct, without refund.
              </p>
            </>
          ),
        },
        {
          heading: "Events, Hackathons & Partnerships",
          body: (
            <p>
              Sraventix conducts hackathons, workshops, and events, at times
              in collaboration with partner organizations and institutions.
              Each event may carry its own rules, eligibility criteria, and
              prize terms, which will be communicated for that event and apply
              in addition to these Terms. Photographs and recordings taken at
              such events may be used by Sraventix for promotional purposes;
              if you do not wish to appear in such material, please inform us
              in writing at the event or by email.
            </p>
          ),
        },
        {
          heading: "Personal Data",
          body: (
            <p>
              We collect and use personal information you provide (such as
              your name, email address, and enrollment details) to deliver our
              services, communicate with you, issue certificates, and provide
              placement support. We do not sell your personal data. For any
              privacy-related request, contact us at info@sraventix.in.
            </p>
          ),
        },
        {
          heading: "Disclaimers & Limitation of Liability",
          body: (
            <>
              <p>
                Our services are provided on an &quot;as is&quot; and &quot;as
                available&quot; basis. While we work hard to deliver
                high-quality, industry-relevant training, we make no warranty
                that the services will be uninterrupted, error-free, or that
                any specific outcome will be achieved.
              </p>
              <p>
                To the maximum extent permitted by law, Sraventix&apos;s total
                aggregate liability arising out of or relating to any program
                or service shall not exceed the fees actually paid by you for
                that program or service. We shall not be liable for any
                indirect, incidental, or consequential losses, including loss
                of earnings or career opportunities.
              </p>
            </>
          ),
        },
        {
          heading: "Third-Party Tools & Links",
          body: (
            <p>
              Programs may make use of third-party platforms and tools (such
              as cloud providers, video-conferencing services, or code
              repositories). Your use of those tools is governed by their own
              terms, and we are not responsible for their availability or
              conduct.
            </p>
          ),
        },
        {
          heading: "Termination",
          body: (
            <p>
              We may suspend or terminate your access to a program or service
              if you breach these Terms, engage in misconduct, or misuse our
              content or platforms. Termination for breach does not entitle
              you to any refund.
            </p>
          ),
        },
        {
          heading: "Changes to These Terms",
          body: (
            <p>
              We may update these Terms from time to time. The revised version
              will be posted on this page with an updated effective date, and
              continued use of our services after such posting constitutes
              acceptance of the revised Terms.
            </p>
          ),
        },
        {
          heading: "Governing Law & Jurisdiction",
          body: (
            <p>
              These Terms are governed by the laws of India. Any dispute
              arising out of or in connection with these Terms or our services
              shall be subject to the exclusive jurisdiction of the courts at
              Ongole, Andhra Pradesh, India.
            </p>
          ),
        },
        {
          heading: "Contact Us",
          body: (
            <p>
              For any questions about these Terms, write to us at
              info@sraventix.in — Sraventix Technologies LLP, Ongole, Andhra
              Pradesh, India.
            </p>
          ),
        },
      ]}
    />
  );
}
