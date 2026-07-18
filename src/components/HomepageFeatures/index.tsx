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
    title: '章节结构清晰',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        使用 <code>docs/</code>、侧边栏和 MDX 文档，可以快速搭建从绪论到专题章节的连续阅读路径。
      </>
    ),
  },
  {
    title: '适合教材内容扩展',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        图像资源、实验说明、术语表与习题页都可以按目录演进，而不必先处理复杂站点基础设施。
      </>
    ),
  },
  {
    title: '保留工程化能力',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        首页和主题组件基于 React，可在后续按课程品牌、导航和互动需求继续深度定制。
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
