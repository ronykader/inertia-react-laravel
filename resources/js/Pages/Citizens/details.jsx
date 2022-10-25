import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/inertia-react";

export default function Clients(props) {
    let user = props.user;
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Citizen List
                </h2>
            }
        >
            <Head title="Citizen" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="text-right mb-3">
                        <button className="inline-block text-sm font-semibold py-2.5 px-4 bg-indigo-900 text-white hover:bg-indigo-700 mr-1">
                            Application
                        </button>

                        <Link
                            className="inline-block text-sm font-semibold py-2.5 px-4 bg-red-700 text-white hover:bg-red-500"
                            href="#"
                        >
                            Reset
                        </Link>
                    </div>
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                            <h2>{user.profile?.name || "--"}</h2>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
