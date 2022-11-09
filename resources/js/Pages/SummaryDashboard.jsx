import Spinner from "@/Components/Spinner";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm } from "@inertiajs/inertia-react";
import { useState } from "react";

export default function Dashboard(props) {
    let summary = props.summary;

    console.log(summary);

    const { data, setData, get } = useForm({
        startDate: "",
        endDate: "",
    });

    const [showSpin, setshowSpin] = useState(false);

    // Handle Set value
    const onHandleChange = (event) => {
        setData(event.target.name, event.target.value);
    };

    let submitDateReange = () => {
        // Inertia.visit(route("summary.dashboard.count"));
        setshowSpin(true);
        get(route("summary.dashboard"));

        // console.log(data);
    };

    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Summary Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="text-right mb-3">
                        <input
                            type="date"
                            value={setData.startDate}
                            onChange={onHandleChange}
                            name="startDate"
                            id="startDate"
                        />
                        <input
                            type="date"
                            value={setData.endDate}
                            onChange={onHandleChange}
                            name="endDate"
                            id="endDate"
                        />
                        {showSpin ? (
                            <Spinner />
                        ) : (
                            <button
                                onClick={submitDateReange}
                                className="inline-block text-sm font-semibold py-2.5 px-4 bg-red-700 text-white hover:bg-red-500 mr-1"
                            >
                                Search
                            </button>
                        )}
                    </div>

                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                            <table className="border-separate border-spacing-2 border border-slate-400 w-full text-left border">
                                <thead>
                                    <tr>
                                        <th>SL NO</th>
                                        <th>Variable</th>
                                        <th colSpan={3}></th>
                                        <th>Total</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Number of Ministries</td>
                                        <td colSpan={3}></td>
                                        <td>
                                            <b className="block">
                                                {summary?.number_ministries ??
                                                    ""}
                                            </b>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>2</td>
                                        <td>
                                            Number of Directorate/Institutions/
                                            Department/……
                                        </td>
                                        <td colSpan={3}></td>
                                        <td>
                                            <b className="block">
                                                {summary?.number_department ??
                                                    ""}
                                            </b>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>3</td>
                                        <td>Number of offices (manual)</td>
                                        <td colSpan={3}></td>
                                        <td>
                                            <b className="block">
                                                {summary?.number_offices ?? ""}
                                            </b>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>4</td>
                                        <td>Number of Digitized Services</td>
                                        <td>
                                            <b>G2C</b>
                                            <b className="block">
                                                {summary?.number_digitized_services_g2c ??
                                                    ""}
                                            </b>
                                        </td>
                                        <td>
                                            <b>G2B</b>
                                            <b className="block">
                                                {summary?.number_digitized_services_g2b ??
                                                    ""}
                                            </b>
                                        </td>
                                        <td>
                                            <b>G2E</b>
                                            <b className="block">
                                                {summary?.number_digitized_services_g2e ??
                                                    ""}
                                            </b>
                                        </td>
                                        <td>
                                            <b className="block">
                                                {summary?.number_digitized_services_total ??
                                                    ""}
                                            </b>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>5</td>
                                        <td>Number of Published services</td>
                                        <td>
                                            <b>G2C</b>
                                            <b className="block">
                                                {summary?.number_published_services_g2c ??
                                                    ""}
                                            </b>
                                        </td>
                                        <td>
                                            <b>G2B</b>
                                            <b className="block">
                                                {summary?.number_published_services_g2b ??
                                                    ""}
                                            </b>
                                        </td>
                                        <td>
                                            <b>G2E</b>
                                            <b className="block">
                                                {summary?.number_published_services_g2e ??
                                                    ""}
                                            </b>
                                        </td>
                                        <td>
                                            <b className="block">
                                                {summary?.number_published_services_total ??
                                                    ""}
                                            </b>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>6</td>
                                        <td>Number of unpublished services</td>
                                        <td>
                                            <b>G2C</b>
                                            <b className="block">
                                                {summary?.number_unpublished_services_g2c ??
                                                    ""}
                                            </b>
                                        </td>
                                        <td>
                                            <b>G2B</b>
                                            <b className="block">
                                                {summary?.number_unpublished_services_g2b ??
                                                    ""}
                                            </b>
                                        </td>
                                        <td>
                                            <b>G2E</b>
                                            <b className="block">
                                                {summary?.number_unpublished_services_g2e ??
                                                    ""}
                                            </b>
                                        </td>
                                        <td>
                                            <b className="block">
                                                {summary?.number_unpublished_services_total ??
                                                    ""}
                                            </b>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>7</td>
                                        <td>Page Viewer (manual)</td>
                                        <td colSpan={4}></td>
                                    </tr>
                                    <tr>
                                        <td>8</td>
                                        <td>Number of registered user</td>
                                        <td>
                                            <b>Male (number & %)</b>
                                            <b className="block">
                                                {summary?.number_registered_user_male ??
                                                    ""}
                                            </b>
                                        </td>
                                        <td>
                                            <b>Female (number & %)</b>
                                            <b className="block">
                                                {summary?.number_registered_user_female ??
                                                    ""}
                                            </b>
                                        </td>
                                        <td>
                                            <b>Others (number & %)</b>
                                            <b className="block">
                                                {summary?.number_registered_user_others ??
                                                    ""}
                                            </b>
                                        </td>
                                        <td>
                                            <b className="block">
                                                {summary?.number_registered_user ??
                                                    ""}
                                            </b>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>9</td>
                                        <td>Number of applicants</td>
                                        <td>
                                            <b>Male (number & %)</b>
                                            <b className="block">
                                                {summary?.number_applicants_male ??
                                                    ""}
                                            </b>
                                        </td>
                                        <td>
                                            <b>Female (number & %)</b>
                                            <b className="block">
                                                {summary?.number_applicants_female ??
                                                    ""}
                                            </b>
                                        </td>
                                        <td>
                                            <b>Others (number & %)</b>
                                            <b className="block">
                                                {summary?.number_applicants_others ??
                                                    ""}
                                            </b>
                                        </td>
                                        <td>
                                            <b className="block">
                                                {summary?.number_applicants ??
                                                    ""}
                                            </b>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>10</td>
                                        <td>
                                            Number of Applications Submitted
                                        </td>
                                        <td>
                                            <b className="block"></b>
                                        </td>
                                        <td>
                                            <b className="block"></b>
                                        </td>
                                        <td>
                                            <b className="block"></b>
                                        </td>
                                        <td>
                                            <b className="block">
                                                {summary?.number_application_submitted ??
                                                    ""}
                                            </b>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>11</td>
                                        <td>Number of Applications Resolved</td>
                                        <td>
                                            <b className="block"></b>
                                        </td>
                                        <td>
                                            <b className="block"></b>
                                        </td>
                                        <td>
                                            <b className="block"></b>
                                        </td>
                                        <td>
                                            <b className="block">
                                                {summary?.number_application_resolved ??
                                                    ""}
                                            </b>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>12</td>
                                        <td> Number of apps Downloaded </td>
                                        <td colSpan={3}></td>
                                        <td>
                                            <b className="block">
                                                {summary?.number_apps_downloaded ??
                                                    ""}
                                            </b>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>13</td>
                                        <td> Number of Workshops</td>
                                        <td colSpan={3}></td>
                                        <td>
                                            <b className="block">
                                                {summary?.number_workshops ??
                                                    ""}
                                            </b>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>14</td>
                                        <td>
                                            Number of participants in the
                                            workshops
                                        </td>
                                        <td>
                                            <b>Male (number & %)</b>
                                            <b className="block">
                                                {summary?.number_participants_workshops_male ??
                                                    ""}
                                            </b>
                                        </td>
                                        <td>
                                            <b>Female (number & %)</b>
                                            <b className="block">
                                                {summary?.number_participants_workshops_female ??
                                                    ""}
                                            </b>
                                        </td>
                                        <td>
                                            <b className="block"></b>
                                        </td>
                                        <td>
                                            <b className="block">
                                                {summary?.number_participants_workshops ??
                                                    ""}
                                            </b>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
