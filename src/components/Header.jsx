import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom';
import classNames from "classnames";
import ItemsContext from '../context/Items';

const Header = () => {

  const { setCurrentTab, itemsData, filterElements } = useContext(ItemsContext)

  const navStyles = classNames('navlink grow px-8 py-2 w-64 md:mr-4 m-1 text-sm rounded-md', {
    isActive: true,
  });

  const navigation = [
    {id: 1, name: "All", href:"/"},
    {id: 2, name: "Home", href: "/home"},
    {id: 3, name: "Presents", href:"/presents"},
    {id: 4, name: "Food", href:"/food"},
    {id: 5, name: "Fashion", href:"/fashion"}
  ]

  const handleClick = (e) => {
    const target = e.target.innerHTML
    setCurrentTab(target)
    if (target === "All") {
      filterElements(itemsData)
    } else {
      const filter = itemsData.filter(item => item.category === target)
      filterElements(filter)
    }
  }

  const renderNavigation = navigation.map((element) => {
    return <NavLink
      key={element.id}
      to={element.href}
      className={navStyles}
      onClick={handleClick}>
      {element.name}
    </NavLink>
  })
  return (
    <header className="z-10 overflow-x-auto overflow-hidden p-3">
      <div className="w-screen">
        <ul className="p-1 flex justify-start flex-nowrap text-center">
          {renderNavigation}
        </ul>
      </div>
    </header>
  )
}

export default Header
