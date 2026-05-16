import React from 'react';
import { Eyebrow } from '../../atoms/Eyebrow';
import { Button } from '../../atoms/Button';
import styles from './Welcome.module.css';

const Welcome: React.FC = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className={styles.welcome}>
      <div className={`section-container ${styles.container}`}>
        <div className={styles.content}>
          {/* Plan 04+05: Quiet eyebrow — no dot, just text */}
          <Eyebrow variant="subtle" as="p">
            早稲田大学大学院 &nbsp;·&nbsp; 情報理工・情報通信専攻
          </Eyebrow>

          {/* Plan 05: Title — left-aligned, no accent color split */}
          <h1 className={styles.title}>
            <span className={styles.titleLine}>身の回りの違和感を、</span>
            <span className={styles.titleLine}>エンジニアリングで解消する。</span>
          </h1>

          {/* Plan 05: Role — simple, below title */}
          <p className={styles.role}>
            ソフトウェアエンジニア &nbsp;/&nbsp; NLP 研究者
          </p>

          {/* Plan 05: Philosophy — inline paragraph, not a card box */}
          <p className={styles.philosophy}>
            「現場や日々の暮らしで感じた違和感」
            <br />
            を起点に、課題を見極め、形にしてきました。
          </p>

          {/* Plan 06: Single CTA */}
          <div className={styles.actions}>
            <Button variant="primary" onClick={() => scrollTo("projects")}>
              プロジェクトを見る
            </Button>
          </div>

          {/* Plan 06: Scroll indicator — pure line only, no icon */}
          <div className={styles.scroll}>
            <div className={styles.scrollLine} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
