import BurgerIngredients from "../components/burger-ingredients/BurgerIngredients";
import BurgerConstructor from "../components/burger-constructor/BurgerConstructor";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import styles from "../components/app/App.module.css";

export const HomePage = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <section className={styles.section}>
        <BurgerIngredients />
      </section>
      <section className={styles.section}>
        <BurgerConstructor />
      </section>
    </DndProvider>
  );
};
