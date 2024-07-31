import { Link } from 'react-router-dom';

export const Menu = () => {
    return (
      <>
        <nav className="bg-gray-50 dark:bg-gray-700">
            <div className="max-w-screen-xl px-4 py-3 mx-auto">
                <div className="flex items-center">
                    <ul className="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
                        <li>
                            <Link to="/Component1" className="text-gray-900 dark:text-white hover:underline">Home</Link>
                        </li>
                        <li>
                            <Link to="/Component2" className="text-gray-900 dark:text-white hover:underline">About</Link>
                        </li>
                        <li>
                            <Link to="/Component3" className="text-gray-900 dark:text-white hover:underline">Services</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
      </>
    )
  }