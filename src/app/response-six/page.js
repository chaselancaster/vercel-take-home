import Link from "next/link";
import Image from "next/image";

export default function ResponseSix() {
  return (
    <div className="flex-row justify-items-center mb-4">
      <h1 className="text-2xl">
        A customer is creating a site and would like their project not to be
        indexed by search engines. Please write a reply to the customer.
      </h1>
      <p className="mt-5">Hey "customerName",</p>
      <p className="mt-5">
        Thanks for reaching out with this question. We’ve seen this come up
        before and it’s great information to pass along, so I’m happy to help
        you prevent search indexing.
      </p>
      <p className="mt-5">
        Typically, the primary way to prevent your project from being indexed is
        using the `noindex` rule in either a meta tag or with an HTTP response
        header. For our purposes with Vercel, we are going to stick with the
        header method since it is easy and quick to configure. This will involve
        the `vercel.json` configuration file and will only take a few lines of
        code.
      </p>
      <p className="mt-5">
        Within the `vercel.json` file, we can use the `headers` setting which is
        an array of objects with a few definitions.
      </p>
      <p className="mt-5">
        To keep things simple, you’ll want to add an object in the parent
        `headers` array with a `source` property and a `headers` array with
        key-value pairs inside of an object. Here is how you would structure it
        in your code:
      </p>
      <Image src="/headers.png" alt="Headers" width={600} height={600}></Image>
      <p className="mt-5">
        The source property takes in a pattern that matches an incoming
        pathname. In this case, we are using "/(.*)", which tells Vercel that we
        want to cover the entire site. The nested header’s object contains the
        key-value pair that you’ll want to use to block search indexing. For
        this case, we’re using the `x-robots-tag` as the key and `noindex` as
        the value.
      </p>
      <p className="mt-5">
        Once that has been configured, re-deploy your site, and you should be
        good to go! As a heads up, when Vercel generates a preview deployment
        before you decide to move changes to your production branch, we
        automatically add this same header so that search engines don’t index
        these preview deployment URLs. This helps keep the SEO for your
        production site accurate.{" "}
      </p>
      <p className="mt-5">
        If you’re looking to dive a little deeper into the `x-robots-tag`, I’d
        recommend you check out{" "}
        <a
          className="underline"
          href="https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag#xrobotstag"
          target="_blank"
        >
          this doc
        </a>{" "}
        from Google’s side. They also include a thorough explanation of the
        `noindex` value{" "}
        <a
          className="underline"
          href="https://developers.google.com/search/docs/crawling-indexing/block-indexing"
          target="_blank"
        >
          here
        </a>
        .
      </p>
      <p className="mt-5">
        Let me know if you have any questions about this or if I can assist with
        anything else. Thank you!
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
