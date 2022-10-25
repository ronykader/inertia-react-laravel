import { Link } from "@inertiajs/inertia-react";

const Citizenlist = ({ citizen }) => {
    return (
        <>
            <tr>
                <td>{citizen.id}</td>
                <td>{citizen.profile?.name || "--"}</td>
                <td>{citizen.mobile}</td>
                <td>{citizen.nid}</td>

                <td>
                    <Link
                        href={route("citizen.show", citizen.id)}
                        className="inline-block text-sm font-semibold py-2.5 px-4 bg-sky-900 text-white hover:bg-sky-700 mr-1"
                    >
                        Profile
                    </Link>

                    <button className="inline-block text-sm font-semibold py-2.5 px-4 bg-indigo-900 text-white hover:bg-indigo-700 mr-1">
                        Application
                    </button>

                    <Link
                        className="inline-block text-sm font-semibold py-2.5 px-4 bg-red-700 text-white hover:bg-red-500"
                        href="#"
                    >
                        Reset
                    </Link>
                </td>
            </tr>
        </>
    );
};

export default Citizenlist;
