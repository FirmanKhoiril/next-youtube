import { useGlobalContext } from "@/context/Context";
import { categoriesData } from "@/types/DummyData";
import { TCategory } from "@/types/Types";

const Categories = () => {
  const { categories, setCategories } = useGlobalContext();

  return (
    <div className="gap-3 flex items-center overflow-x-auto py-2 px-4">
      {categoriesData.map((category: TCategory) => (
        <button
          type="button"
          aria-label={category.name}
          name={category.name}
          onClick={() => setCategories(category.name)}
          className={` py-2 px-3 ${
            category.name === categories ? "bg-pink-500 hover:border-transparent text-white" : "bg-white border-pink-500"
          } rounded-sm font-inter hover:text-white my-2 min-w-[150px]  border transition duration-200  hover:bg-pink-500`}
          key={category.name}
        >
          {category.name}
        </button>
      ))}
    </div>
  );
};

export default Categories;
