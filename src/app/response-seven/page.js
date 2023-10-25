import Link from "next/link";

export default function ResponseSeven() {
  return (
    <div className="flex-row justify-items-center mb-4">
      <h1 className="text-2xl">
        How could we improve or alter this familiarization exercise?
      </h1>
      <p className="mt-5">
        I thought these questions did a great job of exposing me more to the ins
        and outs of Vercel itself and gave me a sense of some of the questions
        you all might be seeing. Based on what I experienced, here are some
        suggestion that could differ the familiarization exercise:
      </p>
      <ul className="mt-5">
        <li>
          - Provide more context for the customer questions. For example, what
          is the customer’s level of expertise? What payment plan are they on?
          This has the potential to vary the response a bit and tailor responses
          to different customer types.
        </li>
        <li>
          - Support is often on the front lines of communication for outages or
          downtime. Including an exercise where the interview candidate submits
          a response to a customer’s inquiry about weird behavior with Vercel
          due to an API outage or something similar would be a good way to gauge
          the interviewee's thoughts and behaviors during product outages and
          how it is communicated to customers.
        </li>
        <li>
          - Customer Success Engineers hear feedback from developers and general
          users first, so I think it also could be useful to have a
          cross-functional collaboration question that includes a component to
          gauge how the candidate would work and communicate with Vercel’s
          engineering teams to resolve a customer issue or discuss product
          enhancements.
        </li>
      </ul>
      <p className="mt-5">Thank you!</p>

      <p className="mt-5">
        <Link
          className="border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none"
          href="/"
        >
          Back To Questions
        </Link>
      </p>
    </div>
  );
}
