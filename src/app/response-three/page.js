import Link from "next/link";
import Image from "next/image";

export default function ResponseThree() {
  return (
    <div className="flex-row justify-items-center mb-4">
      <h1 className="text-2xl">
        A customer has reached out asking, “When should I choose to use Edge
        Functions, Serverless Functions, or Edge Middleware with Vercel?” Write
        a reply to the customer.
      </h1>
      <p className="mt-5">
        For this specific question, I am going to answer it from the point of
        view that the customer is new to Vercel and is not yet on a Pro or
        Enterprise plan. However, given that Vercel likely has the information
        available for Customer Success teams to check, some of this information
        could be tailored more directly to their scenario if I already knew
        which plan they were on.
      </p>
      <p className="mt-5">Hey "customerName",</p>
      <p className="mt-5">
        Thank you for reaching out with your inquiry about when to use Edge
        Functions, Serverless Functions, or Edge Middleware with Vercel. I can
        definitely provide you with insights into these options to help you make
        an informed decision.
      </p>
      <p className="mt-5">
        To begin, let's explore the differences between Serverless Functions and
        Edge Functions, as understanding these distinctions is crucial in
        choosing the right tool for your needs. Serverless Functions offer full
        support for Node.js, with additional runtime options like Go, Python,
        and Ruby in beta. Node.js, in particular, provides access to the full
        spectrum of Node.js APIs, making it versatile for various applications.
        On the other hand, Edge Functions run on what we call the{" "}
        <a
          className="underline"
          href="https://vercel.com/docs/functions/edge-functions/edge-runtime"
          target="_blank"
        >
          Edge Runtime
        </a>
        , which doesn't grant access to all Node.js APIs but does offer Web
        Standard APIs. If you're interested, we have{" "}
        <a
          className="underline"
          href="https://vercel.com/docs/functions/edge-functions/edge-runtime#supported-apis"
          target="_blank"
        >
          a list of the Supported APIs available for your reference.
        </a>
      </p>
      <p className="mt-5">
        When deciding between Serverless and Edge Functions, consider factors
        like infrastructure, size limits, and specific use cases. Serverless
        Functions are ideal for computationally intensive workloads or functions
        with package sizes up to 250 MB. On the other hand, Edge Functions are
        an excellent choice for scenarios where you don't require large
        functions, extra RAM, or CPU power. They are cost-effective, swift, and
        lightweight.
      </p>
      <p className="mt-5">
        Edge Functions provide faster response times compared to Serverless
        Functions due to their global-first deployment approach. While
        Serverless Functions are{" "}
        <a
          className="underline"
          href="https://vercel.com/docs/functions/serverless-functions/regions#select-a-default-serverless-region"
          target="_blank"
        >
          deployed based on specific regions
        </a>
        (with multi-region support available for Enterprise plans), Edge
        Functions execute closer to your users and databases, reducing network
        costs. Additionally, Edge Functions offer automatic global failover,
        ensuring uninterrupted service during downtime. They also experience
        minimal to no cold starts, as they require fewer resources to initialize
        and are{" "}
        <a
          className="underline"
          href="https://vercel.com/docs/functions/serverless-functions/runtimes#archiving"
          target="_blank"
        >
          never archived
        </a>
        . Notably, Edge Functions have no concurrency limits, while Serverless
        Functions are constrained to 1,000 concurrent executions per region.
      </p>
      <p className="mt-5">
        Serverless Functions and Edge Functions have size limits to consider, so
        here is a chart detailing the size limits for both:
      </p>
      <Image
        src="/size-limits.png"
        alt="Size Limits"
        width={800}
        height={800}
      ></Image>
      <p className="mt-5">
        Now, let's shift our focus to Edge Middleware, which can complement both
        Serverless and Edge Functions. Edge Middleware is an integral part of
        the Edge Runtime infrastructure, executing code before a request is
        fully processed on your website. It acts as an intermediary, allowing
        you to apply custom logic before responding to a request.
      </p>
      <p className="mt-5">
        One practical use case for Edge Middleware is content localization. If
        your user base spans the globe, you may need to tailor your content to
        specific regions. Edge Middleware enables you to identify a user's IP
        address and use it to serve region-specific content. This gives you the
        flexibility to serve multiple versions of your site and direct requests
        to specific static pages based on your middleware configurations. If
        you're looking to enhance content localization, streamline
        authentication, and experiment with different sets of content (e.g., A/B
        testing), I recommend exploring our{" "}
        <a
          className="underline"
          href="https://vercel.com/docs/functions/edge-middleware/quickstart"
          target="_blank"
        >
          Edge Middleware documentation
        </a>{" "}
        to get started.
      </p>
      <p className="mt-5">
        I know there is a lot of information here to consider, so here is a
        brief summary of when you might decide to use these options:
      </p>
      <ul>
        <li>
          - Use Serverless Functions for demanding workloads or functions with
          package sizes up to 250 MB, especially if you need full Node.js API
          support.
        </li>
        <li>
          - Opt for Edge Functions when you want cost-effective, fast, and
          lightweight execution, faster response times, no cold starts, and no
          concurrency limits. They are ideal for global-first deployments and
          automatic global failover.
        </li>
        <li>
          - Consider Edge Middleware when you require custom logic before
          serving responses, such as content localization, improved
          authentication, and experimentation with different sets of content for
          users.
        </li>
      </ul>
      <p className="mt-5">
        I hope this helps clarify your options when choosing between Edge
        Functions, Serverless Functions, and Edge Middleware. If you have more
        specific questions or need further guidance, feel free to reach out.
        Thank you!
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
