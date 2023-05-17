import { useContext } from 'react'
import Item from "./Item"
import ItemsContext from "../context/Items"

const ItemList = () => {
  const { filter } = useContext(ItemsContext)
  const renderedItems = filter.map((item) => {
    return <Item data={item} key={item.id}/>
  })

  return (
    <div className="p-5 md:grid md:grid-cols-2 lg:gap-4 overflow-auto">
      {renderedItems}
    </div>
  )
}

export default ItemList
