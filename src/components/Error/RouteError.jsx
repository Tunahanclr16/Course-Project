import { NavLink } from "react-router-dom";

export default function RouteError() {
  return (
    <>
     
      <div className="flex  items-center justify-center h-screen text-4xl ">
      Return to the page's default, 
      <NavLink to={'/'}>
          Home page
      </NavLink>
      </div>
    </>
  )
}
