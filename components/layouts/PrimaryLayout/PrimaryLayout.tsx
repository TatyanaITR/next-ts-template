import Head from 'next/head';
import styles from './PrimaryLayout.module.scss';

export interface IPrimaryLayout {
  children?: React.ReactNode;
}

const PrimaryLayout: React.FC<IPrimaryLayout> = ({ children }) => {
  return (
      <>
        <Head>
          <title>Open to work</title>
        </Head>
        <div className={styles.container}>{children}</div>
      </>
  );
};

export default PrimaryLayout;