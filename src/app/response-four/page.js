import Link from "next/link";
import Image from "next/image";

export default function ResponseFour() {
  return (
    <div className="flex-row justify-items-center mb-4">
      <h1 className="text-2xl">
        A customer has a project on Vercel and they want to redirect to the
        ‘/blog’ path to another website. Write a reply to the customer.
      </h1>
      <p className="mt-5">Hey "customerName",</p>
      <p className="mt-5">
        Thank you for reaching out with this redirect question. We actually have
        a few approaches to redirects and I’m happy to go over each method to
        see which one works best for your use case. Please do let me know if you
        have already attempted one of these methods and I’m happy to dive deeper
        into getting that /blog path redirect working for you.
      </p>
      <p className="mt-5">
        With Vercel you have the option of performing Dynamic Redirects or using
        Static Redirects. For Dynamics Redirects, this is handled over
        functions, and we typically recommend using your framework’s native
        solution. The approach will look a little different depending on whether
        you are using Serverless or Edge functions, but here is an example of
        what this would look like with Next.js:
      </p>
      <Image
        src="/dynamic-redirects.png"
        alt="Dynamic Redirects"
        width={700}
        height={700}
      ></Image>
      <p className="mt-5">
        For other redirect code examples, I’d recommend checking out our Dynamic
        redirect section in our docs{" "}
        <a
          className="underline"
          href="https://vercel.com/docs/edge-network/redirects#dynamic-redirects"
          target="_blank"
        >
          here
        </a>
        . Let me know if there is a specific framework you are using and I’m
        happy to dig deeper and send over the native solution for dynamic
        redirects for that provider.
      </p>
      <p className="mt-5">
        If you want to use a static redirect approach, we can focus on
        configuration directs for that. With configuration redirects, routing
        rules are generated at build time and it can include temporary,
        permanent, or geolocation-based redirects.
      </p>
      <p className="mt-5">
        This process will involve altering your framework’s config file such as
        the ‘next.config.js’ file for Next.js, or the ‘vercel.json’ file at the
        root of your application for other use cases. The ‘vercel.json’ file
        will let you override the default behavior of your Vercel project, so
        let’s use that as a starting point.
      </p>
      <p className="mt-5">
        The{" "}
        <a
          className="underline"
          href="https://vercel.com/docs/projects/project-configuration#redirects"
          target="_blank"
        >
          redirects setting
        </a>{" "}
        for the vercel.json file will simply be an array of redirect objects and
        the configuration will look like this for your use case with the /blog
        path:
      </p>
      <Image
        src="/redirect-one.png"
        alt="Redirect Example"
        width={700}
        height={700}
      ></Image>
      <p className="mt-5">
        As you can see, when a user hits the source `/blog` path, the
        destination path that they would be redirected to could be an absolute
        URL of your choice.
      </p>
      <p className="mt-5">
        There are other properties you can include here if you want to add
        additional rich information. We can add in the `permanent` property to
        indicate a status code of `308` with a `true` value or a status code of
        `307` with a `false` value.
      </p>
      <Image
        src="/redirect-two.png"
        alt="Redirect Example 2"
        width={700}
        height={700}
      ></Image>
      <p className="mt-5">
        I encourage you to check out the redirect object definition{" "}
        <a
          className="underline"
          href="https://vercel.com/docs/projects/project-configuration#redirect-object-definition"
          target="_blank"
        >
          here
        </a>{" "}
        to check out all of the available field options.{" "}
      </p>
      <p className="mt-5">
        For another quick example, since I mentioned Next.js above, this is what
        the configuration would look like in the `next.config.js` file:
      </p>
      <Image
        src="/redirect-three.png"
        alt="Redirect Example 3"
        width={700}
        height={700}
      ></Image>
      <p className="mt-5">
        I hope this helps you redirect your `/blog` path to your desired
        website! Let me know if there are any specifics you want me to go over
        or if you are having trouble with a specific framework. I am happy to
        dig deeper to get this working for you as soon as possible. Thank you!
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
