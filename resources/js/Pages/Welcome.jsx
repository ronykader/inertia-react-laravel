import Mainmenu from "@/Components/Mainmenu";
import { Head } from "@inertiajs/inertia-react";

const Welcome = (props) => {
    return (
        <>
            <Head title="Welcome" />
            <div className="relative flex items-top justify-center min-h-screen bg-gray-100 dark:bg-gray-900 sm:items-center sm:pt-0">
                <div className="fixed top-0 right-0 px-6 py-4 sm:block">
                    <Mainmenu props={props} />
                </div>

                <div className="max-w-6xl mx-auto sm:px-6 lg:px-8">
                    <h1>Welcome to React and Laravel</h1>
                </div>
            </div>
        </>
    );
};

export default Welcome;
