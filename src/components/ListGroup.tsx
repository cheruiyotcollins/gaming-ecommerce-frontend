import { MouseEvent, useState } from "react";
function ListGroup() {
  let items = ["item1", "item2", "item3", "item4"];
  //   items = [];
  const getMessage = () => {
    return items.length === 0 && <p>No Items Found</p>;
  };
  const handleClick = (event: MouseEvent) => console.log(event);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  return (
    <>
      <h1>List</h1>
      {getMessage()}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => setSelectedIndex(index)}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
export default ListGroup;
