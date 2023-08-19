import BurgerIngredients from "../../components/burger-ingredients/BurgerIngredients";
import BurgerConstructor from "../../components/burger-constructor/BurgerConstructor";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

export const HomePage = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <section className="section pt-10">
        <BurgerIngredients />
      </section>
      <section className="section pt-10">
        <BurgerConstructor />
      </section>
    </DndProvider>
  );
};
