import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

import { useState } from 'react';
import CodeBlock from '@theme/CodeBlock';

function DropdownCode({ label, code, language = 'text' }) {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ margin: '0.75rem 0' }}>
      <button
        onClick={() => setOpen(!open)}
        style={{
          background: 'none',
          border: '1px solid #d0d0d0',
          padding: '0.5rem 0.75rem',
          borderRadius: '6px',
          cursor: 'pointer',
          fontSize: '0.9rem',
          fontWeight: 500,
        }}
      >
        {label}
      </button>

      {open && (
        <div style={{ marginTop: '0.75rem' }}>
          <CodeBlock language={language}>
{code}
          </CodeBlock>
        </div>
      )}
    </div>
  );
}

const FeatureList = [
  {
    title: 'Passeios da lua de mel',
    Svg: require('@site/static/img/noivos-reteteu.svg').default,
    dropdown: (
      <DropdownCode
        label="pix de R$100"
        code={`00020126700014br.gov.bcb.pix01361c6ea963-3462-4807-95e1-44b3fdfe66a10208Presente520400005303986540550.005802BR5925ANDRE LUIZ GUIMARAES AMOR6014BELO HORIZONTE62290525cE4aH3i2ADXIM5GLt8YVqvMjp6304B59A`}
      />
    ),
    description: (
      <>
        Pelo menos alguma tradição teria nesse casamento, né?!
      </>
    ),
  },
  {
    title: 'Aluguel da carruagem dos noivos',
    Svg: require('@site/static/img/passeios.svg').default,
    dropdown: (
      <DropdownCode
        label="pix de R$200"
       code={`00020126650014br.gov.bcb.pix01361c6ea963-3462-4807-95e1-44b3fdfe66a10203Pix5204000053039865406200.005802BR5925ANDRE LUIZ GUIMARAES AMOR6014BELO HORIZONTE62120508Pix200006304CCC6`}
      />
    ),
    description: (
      <>
        O shape pra caber nas ropitchas já tava pago, então não precisa fazer os noivos suarem mais!
      </>
    ),
  },
  {
    title: 'Nova SmartTV ',
    Svg: require('@site/static/img/cabuloso.svg').default,
    dropdown: (
      <DropdownCode
        label="pix de R$300"
       code={`00020126650014br.gov.bcb.pix01361c6ea963-3462-4807-95e1-44b3fdfe66a10203Pix5204000053039865406300.005802BR5925ANDRE LUIZ GUIMARAES AMOR6014BELO HORIZONTE62100506Pix30063048DB2`}
      />
    ),
    description: (
      <>
        Pra ver o hepta do Cabuloso! Ana é tão ocupada que nem sempre dá pra ir ao Gigante da Pampulha...
      </>
    ),
  },
  {
    title: 'Vale catsitter',
    Svg: require('@site/static/img/cats.svg').default,
    dropdown: (
      <DropdownCode
        label="pix de R$60"
       code={`00020126650014br.gov.bcb.pix01361c6ea963-3462-4807-95e1-44b3fdfe66a10203Pix520400005303986540560.005802BR5925ANDRE LUIZ GUIMARAES AMOR6014BELO HORIZONTE62090505Pix6063048497`}
      />
    ),
    description: (
      <>
        Porque os gatos também amam, mas não viajam...
      </>
    ),
  },
    {
    title: 'Vale adega cheia',
    Svg: require('@site/static/img/cat-adega.svg').default,
    dropdown: (
      <DropdownCode
        label="pix de R$80"
       code={`00020126650014br.gov.bcb.pix01361c6ea963-3462-4807-95e1-44b3fdfe66a10203Pix520400005303986540580.005802BR5925ANDRE LUIZ GUIMARAES AMOR6014BELO HORIZONTE62090505Pix806304E7E5`}
      />
    ),
    description: (
      <>
        Afinal, somos Brasil e ele nos chama pro play...
      </>
    ),
  },
  {
    title: 'Voucher do Espanta',
    Svg: require('@site/static/img/espanta.svg').default,
    dropdown: (
      <DropdownCode
        label="pix de R$50"
       code={`00020126650014br.gov.bcb.pix01361c6ea963-3462-4807-95e1-44b3fdfe66a10203Pix520400005303986540550.005802BR5925ANDRE LUIZ GUIMARAES AMOR6014BELO HORIZONTE62090505Pix5063044F14`}
      />
    ),
    description: (
      <>
        Quem canta, seus males espanta! 
      </>
    ),
  },
];

function Feature({ Svg, title, dropdown, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>

      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>

        {dropdown && dropdown}

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
