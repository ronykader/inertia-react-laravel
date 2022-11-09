import { Link } from "@inertiajs/inertia-react";

const Mainmenu = ({ props }) => {
    return (
        <div>
            {props.auth.user ? (
                <Link
                    href={route("dashboard")}
                    className="text-sm text-gray-700 dark:text-gray-500 underline"
                >
                    Dashboard
                </Link>
            ) : (
                <>
                    <Link
                        href={route("login")}
                        className="text-sm text-gray-700 dark:text-gray-500 underline"
                    >
                        Log in
                    </Link>

                    <Link
                        href={route("register")}
                        className="ml-4 text-sm text-gray-700 dark:text-gray-500 underline"
                    >
                        Register
                    </Link>
                </>
            )}
        </div>
    );
};

export default Mainmenu;
