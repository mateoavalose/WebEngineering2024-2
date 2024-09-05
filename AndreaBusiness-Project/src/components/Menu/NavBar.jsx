import { Link } from 'react-router-dom';

export const NavBar = () => {
    return (
        <>
            <nav className="bg-gray-50 dark:bg-gray-700">
                <div className="max-w-screen-xl px-4 py-3 mx-auto">
                    <div className="flex items-center">
                        <ul className="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
                            <li>
                                <Link to="/home" className="text-gray-900 dark:text-white hover:underline">Home</Link>
                            </li>
                            <li>
                                <Link to="*" className="text-gray-900 dark:text-white hover:underline">404</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}