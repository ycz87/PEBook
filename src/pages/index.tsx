import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx(styles.heroBanner)}>
      <div className={clsx('container', styles.heroInner)}>
        <div className={styles.heroCopy}>
          <p className={styles.kicker}>Docusaurus 教材站点初始化</p>
          <Heading as="h1" className={styles.heroTitle}>
            {siteConfig.title}
          </Heading>
          <p className={styles.heroSubtitle}>{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link className="button button--primary button--lg" to="/docs/intro">
              查看起始页
            </Link>
            <Link
              className="button button--secondary button--lg"
              to="https://github.com/ycz87/PEBook">
              打开仓库
            </Link>
          </div>
        </div>
        <div className={styles.heroPanel}>
          <p className={styles.panelLabel}>建议内容结构</p>
          <ul className={styles.panelList}>
            <li>课程导读与章节总览</li>
            <li>原理说明、波形与公式推导</li>
            <li>实验讲义、习题与参考资料</li>
          </ul>
        </div>
      </div>
    </header>
  );
}

function QuickStart() {
  return (
    <section className={styles.quickStart}>
      <div className="container">
        <div className={styles.quickGrid}>
          <article className={styles.quickCard}>
            <Heading as="h2">从这里开始</Heading>
            <p>站点已经具备欢迎首页、文档入口和生产构建能力，可直接开始编写教材正文。</p>
          </article>
          <article className={styles.quickCard}>
            <Heading as="h2">推荐下一步</Heading>
            <p>先在 <code>docs/</code> 下建立章节目录，再逐步补充公式、图片与实验说明。</p>
          </article>
        </div>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} | 欢迎`}
      description="电力电子教材 Docusaurus 站点欢迎页">
      <HomepageHeader />
      <main>
        <QuickStart />
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
