import Link from "next/link";

export default function ResponseTwo() {
  return (
    <div className="flex-row justify-items-center mb-4">
      <h1 className="text-2xl">
        How would you compare Next.js with another framework? Feel free to
        compare with a framework of your choice.
      </h1>
      <p className="mt-5">
        I’ll be comparing the Next.js framework with Gatsby for this exercise.
        To keep things simple, I’ll divide the comparisons up into categories so
        that anyone reading can get a general comparison and the distinguishing
        factors.
      </p>
      <p className="mt-5">
        These two frameworks have some crossovers, so before I get into the pros
        and cons, let’s talk about the similarities.
      </p>
      <p className="mt-5">Common Ground:</p>
      <ul>
        <li>
          - Both have a large focus on search engine optimization. Features like
          server-side rendering and pre-rendered HTML content make it easy for
          search engines like Google to index sites.
        </li>
        <li>
          - Next and Gatsby have an overlap in a lot of hot features in the
          industry right now including hot reloading, code splitting, cashing,
          and routing. These are all nice-to-have features both from a
          development perspective and a user perspective.
        </li>
        <li>
          - If you know React, you can get started with either framework. Each
          platform has tons of documentation, YouTube tutorials, and technical
          content that with just some React experience, anyone should be able to
          grasp some of the products each framework has to offer.
        </li>
      </ul>
      <p className="mt-5">
        Now we can get into some of the distinguishing factors between the two:
      </p>
      <p className="mt-5">Primary Use Cases:</p>
      <ul>
        <li>
          Next.js: This seems like the obvious choice for anyone wanting to
          build server-side dynamic websites. Any application that wants to take
          advantage of server-side rendering and real-time previews would be
          right at home with Next. Large, multi-user websites catering to users
          across the world would be a great fit for Next.js. An e-commerce site
          would be a perfect use case for Next.js.
        </li>
        <li>
          Gatsby.js: Specializes in static websites and looks ideal for projects
          that are scoped with a pre-determined amount of content. Documentation
          sites, technical blog content, and portfolio sites would be good
          options for the Gatsby framework.
        </li>
      </ul>
      <p className="mt-5">Performance:</p>
      <ul>
        <li>
          Next.js: Next’s bread and butter is server-side rendering. Dynamic
          rendering can be delivered based on client requests, which makes
          performance top-tier for intricate websites that need to vary content
          constantly.
        </li>
        <li>
          Gatsby.js: Static site generation means very fast load times, but
          content-heavy sites that require frequent updates would not perform as
          well on Gatsby as they would on Next.js.
        </li>
      </ul>
      <p className="mt-5">Content Updates:</p>
      <ul>
        <li>
          Next.js: Next has Fast Refresh built into all applications on v9.4 or
          higher meaning that most content changes are visible in seconds while
          keeping the same component state.
        </li>
        <li>
          Gatsby.js: Gatsby might not be the best choice for websites needing
          constant content updates, as changes are not reflected in near
          real-time like they are on Next.
        </li>
      </ul>
      <p className="mt-5">Plugin Ecosystem:</p>
      <ul>
        <li>
          Next.js: Plugins are not a major focus and there is limited
          flexibility in terms of using plugins as the main driver for building
          a site with Next.
        </li>
        <li>
          Gatsby.js: Has an extensive ecosystem of plugins allowing for tons of
          customization and getting websites set up very fast. It’s important to
          note that this has the potential to make development and upkeep a
          little messy as it would take some work to understand how every single
          plugin is made and how it runs under the hood.
        </li>
      </ul>
      <p className="mt-10">
        With that being said, the selection between Next.js and Gatsby.js should
        hinge on specific project needs. Next.js excels in building server-side
        dynamic sites, while Gatsby.js leans in on crafting static websites with
        fast load times. The decision should be made considering the project's
        nature, scalability, the developer’s expertise, and the MVP that is
        trying to be achieved.
      </p>
      <p className="mt-10">
        P.S. - With respect to the 3-hour time frame for this take-home, I
        didn’t go as deep as I could have with Gatsby and it would likely take
        some actual development with Gatsby to really understand the major gaps
        and differences. However, I hope this comparison serves as a general
        framework overview between the two.
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
