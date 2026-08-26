const Arrow = () => <span aria-hidden="true">↗</span>;

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Charlotte Mangéli, home">CM<span>.</span></a>
        <nav aria-label="Primary navigation"><a href="#about">About</a><a href="#expertise">Expertise</a><a href="#credentials">Credentials</a></nav>
        <a className="header-link" href="https://www.linkedin.com/in/charlotte-mangeli/" target="_blank" rel="noreferrer">LinkedIn <Arrow /></a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Procurement · Supply Chain · Africa</p>
          <h1>Moving complex<br />infrastructure<br /><em>forward.</em></h1>
          <p className="intro">I&apos;m Charlotte Mangéli, a senior procurement and supply chain leader turning complex logistics into resilient infrastructure across Africa.</p>
          <div className="hero-actions"><a className="button button-dark" href="#about">Explore my work <Arrow /></a><a className="text-link" href="https://www.linkedin.com/in/charlotte-mangeli/" target="_blank" rel="noreferrer">Connect on LinkedIn <Arrow /></a></div>
        </div>
        <div className="portrait-wrap">
          <div className="portrait-frame"><img src="/charlotte-mangeli.png" alt="Portrait of Charlotte Mangéli" /></div>
          <div className="location-card"><span className="pulse" /><div><small>Based in</small><strong>Nairobi, Kenya</strong></div></div>
        </div>
      </section>

      <section className="statement" id="about">
        <p className="section-label">01 / Perspective</p>
        <div><h2>Procurement is more than purchasing. It&apos;s how ambitious ideas become <em>real-world progress.</em></h2><p>For over a decade, I&apos;ve worked at the intersection of procurement, logistics, and infrastructure delivery across Africa - from telecom equipment and complex customs environments to submarine cable infrastructure under Lake Tanganyika.</p></div>
      </section>

      <section className="impact-band" aria-label="Career highlights">
        <article><strong>$20M+</strong><span>Portfolio leadership</span></article><article><strong>10+ yrs</strong><span>Cross-border experience</span></article><article><strong>Pan-African</strong><span>Infrastructure delivery</span></article><article><strong>CIPS L6</strong><span>Professional practice</span></article>
      </section>

      <section className="expertise" id="expertise">
        <div className="section-heading"><p className="section-label">02 / Expertise</p><h2>Where strategy meets <em>execution.</em></h2></div>
        <div className="expertise-list">
          <article><span>01</span><h3>Strategic Procurement</h3><p>Building sourcing strategies, supplier partnerships, and governance for high-value, complex portfolios.</p></article>
          <article><span>02</span><h3>Infrastructure Logistics</h3><p>Navigating customs, freight, and last-mile realities to keep critical telecommunications projects moving.</p></article>
          <article><span>03</span><h3>Supply Chain Intelligence</h3><p>Applying analytics and emerging AI tools to make operations clearer, faster, and more resilient.</p></article>
          <article><span>04</span><h3>Cross-border Leadership</h3><p>Aligning teams and partners across markets to translate strategy into accountable delivery.</p></article>
        </div>
      </section>

      <section className="credentials" id="credentials">
        <div className="section-heading light"><p className="section-label">03 / Learning</p><h2>Always building the<br /><em>next capability.</em></h2></div>
        <div className="credential-grid">
          <article><time>2025</time><h3>AI &amp; Gen-AI for Supply Chain Management</h3><p>edX · Certificate</p></article>
          <article><time>2025</time><h3>Analysis &amp; Reporting for Supply Chain Management</h3><p>LinkedIn Learning</p></article>
          <article><time>2025</time><h3>Generative AI in Supply Chains</h3><p>LinkedIn Learning</p></article>
          <article><time>2025</time><h3>International Logistics</h3><p>LinkedIn Learning</p></article>
          <article><time>Degree</time><h3>Information Technology</h3><p>Jomo Kenyatta University of Agriculture and Technology</p></article>
        </div>
      </section>

      <footer><p className="eyebrow">Let&apos;s move good work forward.</p><h2>Connect with<br /><em>Charlotte.</em></h2><a className="button button-light" href="https://www.linkedin.com/in/charlotte-mangeli/" target="_blank" rel="noreferrer">LinkedIn profile <Arrow /></a><div className="footer-bottom"><span>Charlotte Mangéli</span><span>Senior Procurement &amp; Supply Chain Leader</span><span>© 2026</span></div></footer>
    </main>
  );
}
