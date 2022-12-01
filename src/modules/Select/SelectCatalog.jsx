import React from "react";
import { SelectItem } from "../../components/SelectItem";

export const SelectCatalog = ({ selects }) => {
    return (
      <div className="catalog-assortment">
        {[...selects.values()].map((select, id) => (
          <SelectItem key={id + new Date()} select={select} />
        ))}
      </div>
    );
}