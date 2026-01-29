import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Aluguel da carruagem dos noivos',
    Svg: require('@site/static/img/passeios.svg').default,
    description: (
      <>
        Por que o shape pra caber nas ropitchas já tava pago, não precisa fazer a noiva andar mais.
      </>
    ),
  },
  {
    title: 'Passeios da lua de mel',
    Svg: require('@site/static/img/noivos-reteteu.svg').default,
    description: (
      <>
        Alguma tradição teria que ter nesse casamento, né.
      </>
    ),
  },
  {
    title: 'Nova smartTV ',
    Svg: require('tv.svg').default,
    description: (
      <>
        Pra ver o hepta do Cabuloso! Ana é tão ocupada que nem sempre dá pra ir ao Gigante...
      </>
    ),
  },
    {
    title: 'Vale adega cheia',
    Svg: require('@site/static/img/cat-adega.svg').default,
    description: (
      <>
        Afinal, somos Brasil e ele nos chama...
      </>
    ),
  },
  {
    title: 'Vale catsitter',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Por que os gatos também amam, mas não viajam.
      </>
    ),
  },
  {
    title: 'Voucher do Espanta ou um Café dos Campeões',
    Svg: require('@site/static/img/espanta.svg').default,
    description: (
      <>
        Quem canta, seus males espanta
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
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
