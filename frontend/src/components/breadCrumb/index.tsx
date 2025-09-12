import React from "react";
import { NavLink } from "react-router-dom"; 


export type BreadcrumbItem = {
  label: string;
  href?: string;
};

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  separator?: React.ReactNode; 
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items, separator = "/" }) => {
  return (
    <nav aria-label="breadcrumb">
      <ol className="flex items-center space-x-2 text-sm text-gray-600">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={index} className="flex items-center">
              {item.href && !isLast ? (
                <NavLink
                  to={item.href}
                  className="hover:underline "
                >
                  {item.label}
                </NavLink>
              ) : (
                <span className="font-medium ">{item.label}</span>
              )}
              {!isLast && <span className="mx-2">{separator}</span>}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
