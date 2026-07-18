import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: '内容状态明确',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        当前交付的是经过技术验证的站点骨架与欢迎导览，不代表课程内容已经发布。
      </>
    ),
  },
  {
    title: '读者路径独立',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        正式章节发布前，本站不显示“开始学习”入口，也不把站点工程说明作为教材正文。
      </>
    ),
  },
  {
    title: '编写入口清晰',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        参与编写者可从“教材编写指南”了解本地运行、校验与发布边界，并通过 GitHub 仓库协作。
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="presentation" aria-hidden="true" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
