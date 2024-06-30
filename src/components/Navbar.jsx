// eslint-disable-next-line no-unused-vars
import React from "react";

// import logo from "./images/petrol.jpg";
import { Link } from "react-router-dom";

function Navbar() {
  return (
     <div className="sticky top-0 z-20 shadow-lg rounded bg-white p-2">
     <div className="flex flex-wrap justify-around bg-gray-900 text-white p-2 m-2 mt-0 gap-2">
       <div>
         <button className="bg-gray-900 text-white w-24 ml-2 hover:bg-gray-700">
           <Link className="dropdown-item" to="/Day_Start">
             Day Start
           </Link>
         </button>
       </div>
       <div>
         <div className="relative">
           <button className="bg-gray-900 text-white w-24 ml-2 hover:bg-gray-700" type="button">
             Advances
           </button>
           <ul className="absolute hidden text-gray-700 pt-1 group-hover:block">
             <li>
               <Link className="block px-4 py-2 hover:bg-gray-200" to="/Advances">
                 Bank Income
               </Link>
             </li>
             <li>
               <Link className="block px-4 py-2 hover:bg-gray-200" to="/Handloans">
                 Handloans
               </Link>
             </li>
           </ul>
         </div>
       </div>
       <div>
         <div className="relative">
           <button className="bg-gray-900 text-white w-24 ml-2 hover:bg-gray-700" type="button">
             Oil
           </button>
           <ul className="absolute hidden text-gray-700 pt-1 group-hover:block">
             <li>
               <Link className="block px-4 py-2 hover:bg-gray-200" to="/Oil_Purchase">
                 Purchase
               </Link>
             </li>
             <li>
               <Link className="block px-4 py-2 hover:bg-gray-200" to="/Oil_Godown">
                 Godown
               </Link>
             </li>
             <li>
               <Link className="block px-4 py-2 hover:bg-gray-200" to="/Oil_Retail">
                 Retail Sales
               </Link>
             </li>
             <li>
               <Link className="block px-4 py-2 hover:bg-gray-200" to="/Oil_Pouches">
                 Pouches
               </Link>
             </li>
           </ul>
         </div>
       </div>
       <div>
         <div className="relative">
           <button className="bg-gray-900 text-white w-24 ml-2 hover:bg-gray-700" type="button">
             Petrol
           </button>
           <ul className="absolute hidden text-gray-700 pt-1 group-hover:block">
             <li>
               <Link className="block px-4 py-2 hover:bg-gray-200" to="/Petrol_Decantation">
                 Decantation
               </Link>
             </li>
             <li>
               <Link className="block px-4 py-2 hover:bg-gray-200" to="/Petrol_Invoice_Feeding">
                 Invoice Feeding
               </Link>
             </li>
             <li>
               <Link className="block px-4 py-2 hover:bg-gray-200" to="/Fuel_Sales">
                 Fuel Sales
               </Link>
             </li>
             <li>
               <Link className="block px-4 py-2 hover:bg-gray-200" to="/Variation">
                 Variation
               </Link>
             </li>
           </ul>
         </div>
       </div>
       <div>
         <div className="relative">
           <button className="bg-gray-900 text-white w-24 ml-2 hover:bg-gray-700" type="button">
             Credit
           </button>
           <ul className="absolute hidden text-gray-700 pt-1 group-hover:block">
             <li>
               <Link className="block px-4 py-2 hover:bg-gray-200" to="/credit_client">
                 Credit Client
               </Link>
             </li>
             <li>
               <Link className="block px-4 py-2 hover:bg-gray-200" to="/Generate_Bills">
                 Generate Bills
               </Link>
             </li>
             <li>
               <Link className="block px-4 py-2 hover:bg-gray-200" to="/Client_Cheque">
                 Cheque Entry
               </Link>
             </li>
           </ul>
         </div>
       </div>
       <div className="relative">
         <button className="bg-gray-900 text-white w-24 ml-2 hover:bg-gray-700" type="button">
           Cards
         </button>
         <ul className="absolute hidden text-gray-700 pt-1 group-hover:block">
           <li>
             <Link className="block px-4 py-2 hover:bg-gray-200" to="/Petro_Card">
               Petro Card
             </Link>
           </li>
           <li>
             <Link className="block px-4 py-2 hover:bg-gray-200" to="/Wallet_Payment">
               Wallet Payment
             </Link>
           </li>
         </ul>
       </div>
       <div>
         <button className="bg-gray-900 text-white w-32 ml-2 hover:bg-gray-700" type="button">
           <Link className="dropdown-item" to="/Bank_Deposits">
             Bank Deposits
           </Link>
         </button>
       </div>
       <div>
         <div className="relative">
           <button className="bg-gray-900 text-white w-24 ml-2 hover:bg-gray-700" type="button">
             Statement
           </button>
           <ul className="absolute hidden text-gray-700 pt-1 group-hover:block">
             <li>
               <Link className="block px-4 py-2 hover:bg-gray-200" to="/Statement_Entry">
                 Statement Entry
               </Link>
             </li>
             <li>
               <Link className="block px-4 py-2 hover:bg-gray-200" to="/Bank_Statement">
                 Bank Statement
               </Link>
             </li>
             <li>
               <Link className="block px-4 py-2 hover:bg-gray-200" to="/Staff_Salary">
                 Staff Salary
               </Link>
             </li>
           </ul>
         </div>
       </div>
       <div>
         <button className="bg-gray-900 text-white w-28 ml-2 hover:bg-gray-700" type="button">
           <Link className="dropdown-item" to="/Daily_Expenses">
             Expenses
           </Link>
         </button>
       </div>
       <div>
         <button className="bg-gray-900 text-white w-28 ml-2 hover:bg-gray-700" type="button">
           <Link className="dropdown-item" to="/Day_End">
             Day End
           </Link>
         </button>
       </div>
     </div>
   </div>
  );
}

export default Navbar;
