import Link from "next/link";

export default function ThankYou() {
  return (
    <div className="flex-row justify-items-center mb-4">
      <h1 className="text-2xl">Thank You!</h1>

      <p className="mt-5">
        Thank you so much for taking the time to read through my responses and
        for the opportunity to interview with Vercel. The last startup I was at
        used Vercel and the product was very impressive, so I feel thankful for
        the opportunity and time you all are spending with me. It was really
        eye-opening and fun to learn the ins and outs of a portion of Vercel.
        Take care!
      </p>

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
