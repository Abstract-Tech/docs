import Link from '@docusaurus/Link';
import ThemedImage from '@theme/ThemedImage';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const site = 'https://abstract-technology.de';

const columns = [
  {
    title: 'Documentation',
    links: [
      {label: 'Open edX', to: '/open-edx/overview'},
      {label: 'Learners', to: '/open-edx/learners'},
      {label: 'Course authors', to: '/open-edx/course-authors'},
      {label: 'Administrators', to: '/open-edx/admins'},
      {label: 'FAQ', to: '/open-edx/faq'},
    ],
  },
  {
    title: 'Company',
    links: [
      {label: 'Website', href: site},
      {label: 'Products & Services', href: `${site}/products`},
      {label: 'Pricing', href: `${site}/pricing`},
      {label: 'About Us', href: `${site}/about`},
      {label: 'Get in Touch', href: `${site}/contact`},
    ],
  },
  {
    title: 'Legal',
    links: [
      {label: 'Imprint', href: `${site}/imprint`},
      {label: 'Privacy Policy', href: `${site}/privacy-policy`},
      {label: 'Cookies Policy', href: `${site}/cookies`},
      {label: 'Accessibility Statement', href: `${site}/accessibility-statement`},
    ],
  },
];

const social = [
  {label: 'LinkedIn', href: 'https://www.linkedin.com/company/abstract-technology-gmbh/'},
  {label: 'YouTube', href: 'https://www.youtube.com/@Abstract-Technology'},
  {label: 'Mastodon', href: 'https://mastodon.social/@abstract_technology'},
  {label: 'Bluesky', href: 'https://bsky.app/profile/abstracttechnology.bsky.social'},
];

const phones = ['+49 30 214 611 08', '+49 176 747 25 686'];

function Icon({children}) {
  return (
    <svg
      className={styles.icon}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true">
      {children}
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div>
            <Link href={site} className={styles.logo}>
              <ThemedImage
                alt="Abstract Technology"
                sources={{
                  light: useBaseUrl('/img/abstract-logo-black.png'),
                  dark: useBaseUrl('/img/abstract-logo-white.png'),
                }}
              />
            </Link>
          </div>

          {columns.map((column) => (
            <nav key={column.title} className={styles.column} aria-label={column.title}>
              <h3 className={styles.heading}>{column.title}</h3>
              {column.links.map((link) => (
                <Link key={link.label} className={styles.link} to={link.to} href={link.href}>
                  {link.label}
                </Link>
              ))}
            </nav>
          ))}

          <div className={styles.column}>
            <h3 className={styles.heading}>Contact</h3>
            <a className={styles.contact} href="mailto:info@abstract-technology.de">
              <Icon>
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-10 6L2 7" />
              </Icon>
              info@abstract-technology.de
            </a>
            {phones.map((phone) => (
              <a key={phone} className={styles.contact} href={`tel:${phone.replace(/\s/g, '')}`}>
                <Icon>
                  <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z" />
                </Icon>
                {phone}
              </a>
            ))}
            <span className={styles.contact}>
              <Icon>
                <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0z" />
                <circle cx="12" cy="10" r="3" />
              </Icon>
              <span>
                Manfred-von-Richthofen Straße 4
                <br />
                12101 Berlin, Germany
              </span>
            </span>
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copyright}>
            © {new Date().getFullYear()} Abstract Technology GmbH. All rights reserved.
          </p>
          <div className={styles.social}>
            {social.map((item) => (
              <Link key={item.label} className={styles.link} href={item.href}>
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
