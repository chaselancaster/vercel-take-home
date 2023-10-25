import Link from "next/link";

export default function ResponseOne() {
  return (
    <div className="flex-row justify-items-center mb-4">
      <h1 className="text-2xl">Response One</h1>
      <p className="mt-5">
        In a previous role, my team and I faced a challenge when our company was
        on the cusp of releasing a major user management product that expanded
        our market from B2B to include a broader spectrum of B2C features. This
        transition meant that our support team was about to field inquiries
        related to a wide range of user management topics, from traditional
        username and password logins to social logins over OAuth, passkeys, and
        more. Additionally, we were entering a completely different market
        segment, which meant we needed to understand not only our own product
        but also the competition and the broader landscape.
      </p>
      <p className="mt-5">
        To address this challenge, I took the initiative to lead a project aimed
        at conducting a comprehensive competitive analysis. We began by
        identifying and researching around 7-8 key competitors in the user
        management space. The goal was to create an extensive internal knowledge
        base that would empower our support team to answer customer inquiries in
        this new space with confidence and at the same level that we performed
        with our main product.
      </p>
      <p className="mt-5">
        To execute the project, I designed a structured template that allowed
        each team member to contribute information about our competitors'
        products in relation to ours. The template covered various aspects,
        including where we excelled, where we fell short, the primary focus of
        each competitor, and areas where our product outperformed others. The
        collaborative approach ensured that our analysis was well-rounded, and
        thorough, and got done in a timely manner while still providing fast
        support during research.
      </p>
      <p className="mt-5">
        Upon completing our research and documentation, our team presented the
        findings to the entire company. This presentation wasn't limited to just
        the support team; it involved cross-functional teams, with engineering
        playing a critical role. During the presentation, we highlighted key
        discoveries, features that stood out, and potential areas for
        improvement.
      </p>
      <p className="mt-5">
        We gauged the success of our solution through several significant
        markers. The presentation was met with enthusiasm and approval across
        the company. It demonstrated that our support team was forward-thinking
        and dedicated to understanding the competitive landscape and market
        trends. The engineering teams were particularly engaged and appreciative
        of the insights provided. They identified new features and competitive
        advantages they hadn't considered in their previous analysis, which
        greatly informed product development. The competitive analysis gave us a
        valuable roadmap for feature development and innovation. It clearly
        outlined where our product needed to be improved to maintain a
        competitive edge and allowed us to prioritize our efforts effectively.
      </p>
      <p className="mt-5">
        In summary, our proactive approach to conducting a thorough competitive
        analysis and building an internal knowledge base proved highly
        effective. It not only empowered our support team with a deep
        understanding of the competitive landscape but also engaged
        cross-functional teams in a way that directly contributed to the
        eventual launch of our user management product in a new market.
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
