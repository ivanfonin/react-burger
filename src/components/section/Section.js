import styles from './Section.module.css';

function Section(props) {
  return (
    <section className={ `${styles.section}` }>
      { props.children }
    </section>
  );
}

export default Section;