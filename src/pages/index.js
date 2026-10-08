import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Layout from '@theme/Layout';
import styles from './index.module.css';

const icons = {
  search: 'M11 4a7 7 0 105.2 11.7l4.1 4.1 1.4-1.4-4.1-4.1A7 7 0 0011 4zm0 2a5 5 0 110 10 5 5 0 010-10z',
  book: 'M4 4h11a3 3 0 013 3v13H7a3 3 0 01-3-3V4zm2 2v11a1 1 0 001 1h9V7a1 1 0 00-1-1H6z',
  cap: 'M12 3L1 9l11 6 9-4.9V17h2V9L12 3zM5 13.2V17c0 1.7 3.1 3 7 3s7-1.3 7-3v-3.8l-7 3.8-7-3.8z',
  gear: 'M12 8a4 4 0 100 8 4 4 0 000-8zm8.5 5.5v-3l-2.2-.5a6.6 6.6 0 00-.7-1.7l1.2-1.9-2.1-2.1-1.9 1.2a6.6 6.6 0 00-1.7-.7L12.5 3.5h-3l-.5 2.3c-.6.2-1.2.4-1.7.7L5.4 5.3 3.3 7.4l1.2 1.9c-.3.5-.5 1.1-.7 1.7l-2.3.5v3l2.3.5c.2.6.4 1.2.7 1.7l-1.2 1.9 2.1 2.1 1.9-1.2c.5.3 1.1.5 1.7.7l.5 2.3h3l.5-2.3c.6-.2 1.2-.4 1.7-.7l1.9 1.2 2.1-2.1-1.2-1.9c.3-.5.5-1.1.7-1.7l2.2-.5z',
  plus: 'M11 5h2v6h6v2h-6v6h-2v-6H5v-2h6V5z',
};

function Icon({name, className}) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d={icons[name]} />
    </svg>
  );
}

const exampleSearches = ['reset password', 'upload a course', 'enroll learners'];

const roles = [
  {icon: 'cap', title: 'Learners', text: 'Sign in, find your courses and track your progress.', to: '/open-edx/learners'},
  {icon: 'book', title: 'Course authors', text: 'Build courses, add content and publish with Studio.', to: '/open-edx/course-authors'},
  {icon: 'gear', title: 'Administrators', text: 'Manage users, enrolments, reports and settings.', to: '/open-edx/admins'},
];

const questions = [
  ['How do I reset my password?', '/open-edx/faq#how-do-i-reset-my-password'],
  ['How do I enroll in a course?', '/open-edx/faq#how-do-i-enroll-in-a-course'],
  ['How do I create my first course?', '/open-edx/faq#how-do-i-create-my-first-course'],
  ['How do I add users in bulk?', '/open-edx/faq#how-do-i-add-users-in-bulk'],
  ['Where do I find my certificate?', '/open-edx/faq#where-do-i-find-my-certificate'],
  ['Who do I contact for help?', '/open-edx/contact-support'],
];

const blog = 'https://abstract-technology.de/blog';

const updates = [
  {title: 'Open edX Verawood: the 22nd community release', href: `${blog}/openedx-verawood-release`},
  {title: 'Open edX & n8n: build powerful dynamic workflows', href: `${blog}/openedx-n8n`},
  {title: 'European Digital Credentials: what they are and how to issue them', href: `${blog}/european-digital-credentials`},
];

// Opens the search plugin through its own keyboard shortcut (mod+k).
function openSearch() {
  const isMac = /mac|iphone|ipad/i.test(navigator.platform);
  document.dispatchEvent(
    new KeyboardEvent('keydown', {key: 'k', ctrlKey: !isMac, metaKey: isMac, bubbles: true}),
  );
}

export default function Home() {
  const openEdxLogo = useBaseUrl('/img/openedx-logo.png');
  return (
    <Layout
      title="Help Center"
      description="Guides, answers and how-tos for your Abstract Technology services.">
      <header className={styles.hero}>
        <div className={styles.heroInner}>
          <span className={styles.eyebrow}>Abstract Technology Help Center</span>
          <h1 className={styles.title}>How can we help?</h1>
          <p className={styles.subtitle}>
            Guides, answers and how-tos for your Open edX platform.
          </p>
          <button type="button" className={styles.search} onClick={openSearch}>
            <Icon name="search" className={styles.searchIcon} />
            Search the documentation…
          </button>
          <div className={styles.examples}>
            Try:
            {exampleSearches.map((term) => (
              <Link key={term} className={styles.chip} to="/open-edx/faq">
                {term}
              </Link>
            ))}
          </div>
        </div>
      </header>

      <main>
        <section className={styles.section}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Our services</h2>
            <p className={styles.sectionLead}>Pick a service to browse its documentation.</p>
            <div className={styles.grid}>
              <Link className={styles.card} to="/open-edx/overview">
                <span className={styles.logoTile}>
                  <img src={openEdxLogo} alt="" />
                </span>
                <h3 className={styles.cardTitle}>Open edX</h3>
                <p className={styles.cardText}>
                  Your learning platform: courses, learners, Studio, analytics and AI tools.
                </p>
                <span className={styles.cardLink}>Browse docs →</span>
              </Link>
              <div className={styles.cardMuted}>
                <Icon name="plus" className={styles.cardIcon} />
                <span className={styles.badge}>Coming soon</span>
                <h3 className={styles.cardTitle}>More services</h3>
                <p className={styles.cardText}>
                  Documentation for our other services will appear here.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.sectionAlt}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Quick start by role</h2>
            <p className={styles.sectionLead}>Jump straight to the guides written for you.</p>
            <div className={styles.grid}>
              {roles.map((role) => (
                <Link key={role.title} className={styles.card} to={role.to}>
                  <Icon name={role.icon} className={styles.cardIcon} />
                  <h3 className={styles.cardTitle}>{role.title}</h3>
                  <p className={styles.cardText}>{role.text}</p>
                  <span className={styles.cardLink}>Open guides →</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Popular questions</h2>
            <p className={styles.sectionLead}>The answers people look for most.</p>
            <ul className={styles.questions}>
              {questions.map(([label, to]) => (
                <li key={label}>
                  <Link to={to}>{label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className={styles.sectionAlt}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Latest updates</h2>
            <p className={styles.sectionLead}>News from the Abstract Technology blog.</p>
            <div className={styles.grid}>
              {updates.map((post) => (
                <Link key={post.title} className={styles.card} href={post.href}>
                  <span className={styles.updateMeta}>Open edX</span>
                  <h3 className={styles.cardTitle}>{post.title}</h3>
                  <span className={styles.cardLink}>Read on our blog →</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.help}>
          <h2>Still can't find it?</h2>
          <p>
            Email us and include your platform URL, a screenshot and the steps that led to the
            problem. It helps us answer faster.
          </p>
          <div className={styles.helpActions}>
            <a className={styles.btnDark} href="mailto:info@abstract-technology.de">
              Email us
            </a>
            <Link className={styles.btnOutline} href="https://abstract-technology.de/contact">
              Contact page
            </Link>
          </div>
        </section>
      </main>
    </Layout>
  );
}
