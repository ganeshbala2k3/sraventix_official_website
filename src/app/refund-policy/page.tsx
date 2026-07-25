import type { Metadata } from "next";
import LegalPage from "@/components/legal/LegalPage";

export const metadata: Metadata = {
  title: "Refund Policy",
  description:
    "Refund policy for Sraventix Technologies LLP programs — all enrollments are final and non-refundable.",
  alternates: { canonical: "/refund-policy" },
};

export default function RefundPolicyPage() {
  return (
    <LegalPage
      label="Legal"
      title="Refund Policy"
      effectiveDate="24 July 2026"
      intro={
        <>
          <p>
            This Refund Policy applies to all programs, courses, workshops,
            and services offered by Sraventix Technologies LLP
            (&quot;Sraventix&quot;), whether delivered Live or Self-Paced. By
            making a payment, you acknowledge that you have read, understood,
            and agreed to this policy.
          </p>
          <p className="font-semibold text-text-heading">
            In short: all fees paid to Sraventix are final and
            non-refundable.
          </p>
        </>
      }
      sections={[
        {
          heading: "No Refunds",
          body: (
            <>
              <p>
                All program fees, once paid, are non-refundable and
                non-transferable to any other person. This applies without
                exception to situations including, but not limited to:
              </p>
              <ul>
                <li>Change of mind after enrollment.</li>
                <li>
                  Failure to attend Live sessions or use Self-Paced content.
                </li>
                <li>
                  Dissatisfaction with pace, difficulty level, or teaching
                  style.
                </li>
                <li>
                  Personal circumstances such as schedule conflicts, travel,
                  exams, or change of career plans.
                </li>
                <li>
                  Removal from a program for violation of our Terms &amp;
                  Conditions or Learner Code of Conduct.
                </li>
              </ul>
              <p>
                We encourage you to review the program details, mode (Live or
                Self-Paced), schedule, and fees carefully — and to contact us
                with any questions at info@sraventix.in — before making a
                payment.
              </p>
            </>
          ),
        },
        {
          heading: "Why We Follow a No-Refund Policy",
          body: (
            <p>
              Our batch sizes are limited, seats are reserved on payment, and
              digital content is accessible immediately after enrollment.
              Once a seat is allotted or content access is granted, that
              capacity and material cannot be resold. Keeping the policy
              simple also allows us to keep program fees affordable.
            </p>
          ),
        },
        {
          heading: "Duplicate or Erroneous Payments",
          body: (
            <p>
              The only exception to this policy is a verified duplicate
              payment or an excess amount charged due to a technical error in
              the payment process. In such cases, notify us within 7 days of
              the transaction at info@sraventix.in with proof of payment; the
              duplicate or excess amount will be refunded to the original
              payment method within a reasonable processing period.
            </p>
          ),
        },
        {
          heading: "Batch Transfers, Not Refunds",
          body: (
            <>
              <p>
                While fees are non-refundable, we try to be fair when plans
                change:
              </p>
              <ul>
                <li>
                  If you cannot attend the Live batch you enrolled in, you may
                  request a one-time transfer to the next available batch of
                  the same program, subject to seat availability. Requests
                  must be made in writing before the original batch begins.
                </li>
                <li>
                  If Sraventix cancels a program entirely and no alternative
                  batch is offered, your options will be a transfer to another
                  program of equivalent value or a credit for future use.
                </li>
              </ul>
            </>
          ),
        },
        {
          heading: "Chargebacks",
          body: (
            <p>
              Raising a false or unjustified chargeback or payment dispute for
              services already delivered is treated as a breach of our Terms
              &amp; Conditions. We reserve the right to suspend access, to
              contest such disputes with proof of enrollment and access logs,
              and to decline future enrollment.
            </p>
          ),
        },
        {
          heading: "Contact",
          body: (
            <p>
              For any payment-related query, write to info@sraventix.in with
              your name, program, payment date, and transaction reference. We
              respond to payment queries within 2 business days.
            </p>
          ),
        },
      ]}
    />
  );
}
