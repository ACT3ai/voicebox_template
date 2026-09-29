import type { ReactNode } from "react";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Heading from "@theme/Heading";

const sections = [
  { title: "Laws", to: "/docs/laws/overview", text: "New laws I propose." },
  { title: "Plans", to: "/docs/plans/overview", text: "Plans for things we can do." },
  { title: "Investigations", to: "/docs/investigations/overview", text: "What I am digging into." },
  { title: "Competing Hypotheses", to: "/docs/hypotheses/overview", text: "Explanations, weighed side by side." },
];

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={siteConfig.title} description={siteConfig.tagline}>
      <header className="hero hero--primary">
        <div className="container">
          <Heading as="h1" className="hero__title">
            {siteConfig.title}
          </Heading>
          <p className="hero__subtitle">
            This is a new person's voice. We the Citizens' voice box.
          </p>
          <div className="vb-hero-actions">
            <Link className="button button--secondary button--lg" to="/docs/intro">
              Start here
            </Link>
            <Link className="button button--outline button--secondary button--lg" href="https://wethecitizens.io">
              WeTheCitizens.io
            </Link>
          </div>
        </div>
      </header>
      <main className="container margin-vert--lg">
        <div className="row">
          {sections.map((s) => (
            <div key={s.title} className="col col--3 margin-bottom--md">
              <Link to={s.to} className="card padding--md vb-card">
                <Heading as="h3">{s.title}</Heading>
                <p>{s.text}</p>
              </Link>
            </div>
          ))}
        </div>
      </main>
    </Layout>
  );
}
