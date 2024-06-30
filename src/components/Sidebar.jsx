// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react';
import { Link ,useNavigate} from 'react-router-dom';
import Cookies from 'js-cookie';
import logo from '../Images/petrol.jpg';

export default function Sidebar() {
    const navigate = useNavigate();
    const isUserLoggedIn = Cookies.get('userLoggedIn');

    useEffect(() => {
        if (isUserLoggedIn !== 'true') {
            navigate('/');
        }
    }, [isUserLoggedIn]);

    const onLogout = () => {
        Cookies.set('userLoggedIn', 'false');
        navigate('/');
    };

    return (
        <div className="flex flex-col p-4 bg-gray-800 text-white h-full">
            <div className="mb-4">
                <img className="w-32 h-32 object-cover rounded-full mx-auto" src={logo} alt="Logo" />
            </div>
            <div className="text-center mb-4">
                <h5 className="text-lg font-bold">Marwah Company</h5>
                <p>Current Date : dd-mm-yy</p>
                <p>Last Entry Date : dd-mm-yy</p>
            </div>
            <div className="flex flex-col space-y-2">
                <div className="text-center">
                    <i className="fa-solid fa-house text-2xl"></i>
                </div>
                <div>
                    <button className="btn sideDrop1 btn-secondary w-full text-left px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded">Home</button>
                </div>
                <div className="relative">
                    <button className="w-full text-left px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Reports
                    </button>
                    <ul className="absolute left-0 w-full bg-gray-700 rounded mt-1 z-10">
                        <li><Link className="block px-4 py-2 hover:bg-gray-600" to="/PetrolReport">Petrol/HSD Report</Link></li>
                        <li><Link className="block px-4 py-2 hover:bg-gray-600" to="/CreditClientReport">Credit Report</Link></li>
                        <li><Link className="block px-4 py-2 hover:bg-gray-600" to="/ExpensesReport">Expenses Report</Link></li>
                        <li><Link className="block px-4 py-2 hover:bg-gray-600" to="/BankStatements">Bank Statements Report</Link></li>
                        <li><Link className="block px-4 py-2 hover:bg-gray-600" to="/CardsReport">Cards Report</Link></li>
                        <li><Link className="block px-4 py-2 hover:bg-gray-600" to="/AdvancesHandloanReport">Advances / Handloan Report</Link></li>
                        <li><Link className="block px-4 py-2 hover:bg-gray-600" to="/OilReports">Oil Report</Link></li>
                    </ul>
                </div>
                <div className="relative">
                    <button className="w-full text-left px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Add Menu
                    </button>
                    <ul className="absolute left-0 w-full bg-gray-700 rounded mt-1 z-10">
                        <li><Link className="block px-4 py-2 hover:bg-gray-600" to="/Tanks">Add Tanks</Link></li>
                        <li><Link className="block px-4 py-2 hover:bg-gray-600" to="/Machine">Add Machines</Link></li>
                        <li><Link className="block px-4 py-2 hover:bg-gray-600" to="/Nozzles">Add Nozzles</Link></li>
                        <li><Link className="block px-4 py-2 hover:bg-gray-600" to="/Add_Bank">Add Banks</Link></li>
                        <li><Link className="block px-4 py-2 hover:bg-gray-600" to="/add_client2">Add Client</Link></li>
                        <li><Link className="block px-4 py-2 hover:bg-gray-600" to="/add_client">Add Handloan Client</Link></li>
                        <li><Link className="block px-4 py-2 hover:bg-gray-600" to="/add_staff">Add Staff</Link></li>
                        <li><Link className="block px-4 py-2 hover:bg-gray-600" to="/Oil_Products">Add Oil Product</Link></li>
                        <li><Link className="block px-4 py-2 hover:bg-gray-600" to="/Add_Oil_Pouches">Add Oil Pouches</Link></li>
                        <li><Link className="block px-4 py-2 hover:bg-gray-600" to="/Petrol_Products">Add Petrol Product</Link></li>
                        <li><Link className="block px-4 py-2 hover:bg-gray-600" to="/add_payments_mode">Add Payments Mode</Link></li>
                        <li><Link className="block px-4 py-2 hover:bg-gray-600" to="/Add_Petro_Card">Add Petro Card</Link></li>
                        <li><Link className="block px-4 py-2 hover:bg-gray-600" to="/Add_Wallet">Add Wallet</Link></li>
                        <li><Link className="block px-4 py-2 hover:bg-gray-600" to="/Add_Expenses_Topic">Add Expenses Topic</Link></li>
                    </ul>
                </div>
                <div className="mt-auto">
                    <button className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded" type="button" onClick={onLogout}>
                        Log Out
                    </button>
                </div>
            </div>
        </div>
    );
}
