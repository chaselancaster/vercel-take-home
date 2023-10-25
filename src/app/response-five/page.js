import Link from "next/link";

export default function ResponseFive() {
  return (
    <div className="flex-row justify-items-center mb-4">
      <h1 className="text-2xl">
        Imagine that the customer from Question 4 responds with the following
        email. “I’m so frustrated. I’ve been trying to make this work for hours
        and I just can’t figure it out. It must be a platform issue so why don't
        you just fix it for me instead of asking me questions.” Write a reply to
        the customer addressing the concerns raised.
      </h1>
      <p className="mt-5">Hey "customerName",</p>
      <p className="mt-5">
        I'm sorry to hear that you've been facing difficulties with the redirect
        for your `/blog` path. I understand your frustration, and I can
        definitely work with you to get this working correctly.
      </p>
      <p className="mt-5">
        First, I want to assure you that we're committed to resolving this issue
        for you. Our goal is to assist you in the best way possible, whether
        that means guiding you through the solution or, if needed, making the
        necessary adjustments on our end.
      </p>
      <p className="mt-5">
        To start, we'll need to work together to diagnose the problem, as it
        could be related to the specific configuration or framework you're
        using. The info and questions we have requested will really help us
        troubleshoot the issue faster for you, so if you're comfortable with it,
        please provide more details about your current setup. This would include
        the framework you're using, any relevant configuration files, or any
        error messages you've encountered. This information will help us
        pinpoint the problem more efficiently.
      </p>
      <p className="mt-5">
        In the meantime, I’ll go ahead and test some redirects with my projects
        and look at the necessary details internally to double-check and see if
        anything might be impacting our redirect logic built into Vercel.
      </p>
      <p className="mt-5">
        If it helps, I am more than happy to jump on a call with you so that we
        can tackle this together and eliminate some back-and-forth messaging.
        Let me know what your preference is and I’ll be ready to move forward
        immediately.
      </p>
      <p className="mt-5">
        Thank you for your patience here and I look forward to hearing back from
        you!
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
