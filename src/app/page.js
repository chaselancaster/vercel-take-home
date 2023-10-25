import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <header className="flex justify-between items-center mb-4">
        <h1 className="text-2xl">Take Home Exercise Questions</h1>
        <h1 className="border border-slate-300 text-slate-300 px-2 py-1 rounded outline-none">
          Chase Lancaster
        </h1>
      </header>
      <ul className="pl-4 flex flex-col">
        <Link className="underline text-xl" href="/response-one">
          - Question One
        </Link>
        <Link className="underline text-xl" href="/response-two">
          - Question Two
        </Link>
        <Link className="underline text-xl" href="/response-three">
          - Question Three
        </Link>
        <Link className="underline text-xl" href="/response-four">
          - Question Four
        </Link>
        <Link className="underline text-xl" href="/response-five">
          - Question Five
        </Link>
        <Link className="underline text-xl" href="/response-six">
          - Question Six
        </Link>
        <Link className="underline text-xl" href="/response-seven">
          - Question Seven
        </Link>
        <Link className="underline text-xl" href="/thank-you">
          - Thank You!
        </Link>
      </ul>
    </>
  );
}
