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
          <p className={styles.kicker}>PEBook · 内容建设中</p>
          <Heading as="h1" className={styles.heroTitle}>
            {siteConfig.title}
          </Heading>
          <p className={styles.heroSubtitle}>{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link className="button button--primary button--lg" to="/docs/intro">
              教材编写指南
            </Link>
            <Link
              className="button button--secondary button--lg"
              to="https://github.com/ycz87/PEBook">
              GitHub 仓库
            </Link>
          </div>
        </div>
        <div className={styles.heroPanel}>
          <p className={styles.panelLabel}>读者须知</p>
          <ul className={styles.panelList}>
            <li>当前尚未发布正式课程目录</li>
            <li>当前尚未发布可供学习的章节正文</li>
            <li>正式章节发布前不提供“开始学习”入口</li>
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
            <Heading as="h2">读者</Heading>
            <p>
              欢迎关注 PEBook（电力电子教材）。本站目前提供项目状态与参与编写入口，尚无可供系统学习的正式章节、例题或练习。请以首页实际发布的内容为准。
            </p>
          </article>
          <article className={styles.quickCard}>
            <Heading as="h2">参与编写者</Heading>
            <p>
              如需参与教材建设，请先阅读“教材编写指南”，再前往 GitHub 仓库。章节体例与教学结构不在本页预设，留待首章任务确定。
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  return (
    <Layout
      title="首页"
      description="PEBook（电力电子教材）欢迎页。教材内容建设中，当前提供建设状态与参与编写入口。">
      <HomepageHeader />
      <main>
        <QuickStart />
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
