import React from "react";
import { Eyebrow } from "../../atoms/Eyebrow";
import { ExternalLink } from "../../atoms/ExternalLink";
import { closingContent } from "../../../content/portfolioContent";
import styles from "./Closing.module.css";

const Closing: React.FC = () => {
  return (
    <div className={styles.closing}>
      <div className={`section-container ${styles.container}`}>
        <div className={styles.inner}>
          <Eyebrow>{closingContent.label}</Eyebrow>

          <h2 className={styles.title}>{closingContent.title}</h2>

          <p className={styles.text}>
            {closingContent.textLines[0]}
            <br />
            {closingContent.textLines[1]}
          </p>

          <a
            href={`mailto:${closingContent.email}`}
            className={styles.email}
          >
            {closingContent.email}
          </a>

          <div className={styles.links}>
            {closingContent.links.map(({ href, platform, handle }) => (
              <ExternalLink
                key={href}
                href={href}
                className="closing-text-link"
              >
                <span className={styles.clinkPlatform}>{platform}</span>
                <span className={styles.clinkHandle}>{handle}</span>
              </ExternalLink>
            ))}
          </div>

          <div>
            <div className={styles.footerDivider} />
            <div className={styles.footerRow}>
              <span>{closingContent.footerName}</span>
              <span className={styles.footerCopy}>
                {closingContent.footerCopy}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Closing;
