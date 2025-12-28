import React, { FC } from "react";

export interface CategoryListItem {
  id: string;
  name: string;
}

interface CategoryListProps {
  categories: CategoryListItem[];
  selected: string;
  onSelect: (id: string) => void;
  allLabel?: string;
}

const CategoryList: FC<CategoryListProps> = ({
  categories,
  selected,
  onSelect,
  allLabel = "All",
}) => (
  <nav aria-label="Categories" className="flex flex-col gap-1 mb-4 sticky top-28">
    <div className="bg-(--gray) rounded-md shadow p-4 sticky top-28">
      <ul className="flex flex-col gap-2 lg:gap-3">
        <li>
          <button
            onClick={() => onSelect("all")}
            className={`w-full text-left px-4 py-2 rounded-md font-medium cursor-pointer ${selected === "all"
              ? "bg-(--orange) text-white"
              : "bg-(--light-blue-one) text-(--dark-blue)"
              }`}
          >
            {allLabel}
          </button>
        </li>
        {categories.map((cat) => (
          <li key={cat.id}>
            <button
              onClick={() => onSelect(cat.id)}
              className={`w-full text-left px-4 py-2 rounded-md cursor-pointer font-medium ${selected === cat.id
                ? "bg-(--orange) text-white"
                : "bg-(--light-blue-one) text-(--dark-blue)"
                }`}
            >
              {cat.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  </nav>
);

export default CategoryList;
