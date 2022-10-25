import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, InertiaLink } from "@inertiajs/inertia-react";
import Citizenlist from "./Citizenlist";

export default function Clients(props) {
    let citizens = props.citizens.data;
    let links = props.citizens.links;
    console.log(links);
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
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                            <table className="table-auto w-full text-center">
                                <thead>
                                    <tr>
                                        <th>SL</th>
                                        <th>Name</th>
                                        <th>Moble</th>
                                        <th>Nid</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {citizens.map((citizen) => (
                                        <Citizenlist
                                            key={citizen.id}
                                            citizen={citizen}
                                        />
                                    ))}
                                </tbody>
                            </table>

                            <nav aria-label="Page navigation example">
                                <ul className="inline-flex -space-x-px mt-6">
                                    <li>
                                        {links.map((link) => (
                                            <InertiaLink
                                                className="py-2 px-3 ml-0 leading-tight text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                                                href={link.url}
                                            >
                                                {link.label ==
                                                "&laquo; Previous" ? (
                                                    <span>&laquo;</span>
                                                ) : link.label ==
                                                  "Next &raquo;" ? (
                                                    <span>&raquo;</span>
                                                ) : (
                                                    link.label
                                                )}
                                            </InertiaLink>
                                        ))}
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
