import { header } from "@/data/header.json";
import MenuItem from "./menu-item";

const Menu = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-4 h-full">
      {header.map((item, index) => {
        return (
          <>
            <MenuItem
              href={item.href}
              imageUrl={item.imageUrl}
              title={item.label}
            />
          </>
        );
      })}
    </div>
  );
};

export default Menu;
