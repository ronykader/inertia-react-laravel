import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Inertia } from "@inertiajs/inertia";
import { Head } from "@inertiajs/inertia-react";
import { confirmAlert } from "react-confirm-alert";
// import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

const Details = (props) => {
    let user = props.user;

    let handleReset = (reset, citizen_id) => {
        confirmAlert({
            title: "Confirm to submit",
            message: "Are you sure to do this( reset " + reset + ").",
            buttons: [
                {
                    label: "Yes",
                    onClick: () => {
                        Inertia.visit(route("reset." + reset, citizen_id));
                    },
                },
                {
                    label: "No",
                    onClick: () => {},
                },
            ],
        });
    };

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
                        <button
                            className="inline-block text-sm font-semibold py-2.5 px-4 bg-red-700 text-white hover:bg-red-500 mr-1"
                            onClick={() => handleReset("nid", user.citizen_id)}
                        >
                            Reset NID
                        </button>

                        <button
                            className="inline-block text-sm font-semibold py-2.5 px-4 bg-red-700 text-white hover:bg-red-500 mr-1"
                            onClick={() => handleReset("tin", user.citizen_id)}
                        >
                            Reset TIN
                        </button>
                        <button
                            className="inline-block text-sm font-semibold py-2.5 px-4 bg-red-700 text-white hover:bg-red-500"
                            onClick={() => handleReset("brn", user.citizen_id)}
                        >
                            Reset BRN
                        </button>
                    </div>

                    <div className="grid grid-cols-4 gap-2 mb-3">
                        <div className="bg-white p-6">
                            <div className="profile">
                                <div className="picture text-center mb-3">
                                    <img
                                        className="rounded-circle inline-block rounded-full border-2 border-slate-500 mb-3"
                                        width="150"
                                        height="150"
                                        src={props.photo}
                                        alt="please verify your nid"
                                    />
                                    <h4>{user.profile?.name || "--"}</h4>
                                    <h4>0{user.mobile || "--"}</h4>
                                </div>
                                <hr />
                                <div className="mt-3">
                                    <div className="flex">
                                        <div className="flex-1 h-12">
                                            জাতীয় পরিচয়পত্র
                                        </div>
                                        <svg className="fill-cyan-900 hover:fill-cyan-900 flex-1 h-12 text-right">
                                            <path
                                                fillRule="evenodd"
                                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                clipRule="evenodd"
                                            ></path>
                                        </svg>
                                    </div>

                                    <div className="flex">
                                        <div className="flex-1 h-12">
                                            জন্ম নিবন্ধন নম্বর
                                        </div>
                                        <svg className="fill-cyan-900 hover:fill-cyan-900 flex-1 h-12">
                                            <path
                                                fillRule="evenodd"
                                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                clipRule="evenodd"
                                            ></path>
                                        </svg>
                                    </div>

                                    <div className="flex">
                                        <div className="flex-1 h-12">ইমেইল</div>
                                        <svg className="fill-cyan-900 hover:fill-cyan-900 flex-1 h-12">
                                            <path
                                                fillRule="evenodd"
                                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                                clipRule="evenodd"
                                            ></path>
                                        </svg>
                                    </div>

                                    <div className="flex">
                                        <div className="flex-1 h-12">
                                            টিআইএন
                                        </div>
                                        <svg className="fill-cyan-900 hover:fill-cyan-900 flex-1 h-12 text-right">
                                            <path
                                                fillRule="evenodd"
                                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                clipRule="evenodd"
                                            ></path>
                                        </svg>
                                    </div>

                                    <div className="flex">
                                        <div className="flex-1 h-9">
                                            <button
                                                onClick={() =>
                                                    handleEducationProfile(
                                                        "ssc"
                                                    )
                                                }
                                            >
                                                শিক্ষাগত প্রোফাইল
                                            </button>
                                        </div>
                                    </div>

                                    <div className="flex">
                                        <div className="flex-1 h-16">
                                            <button
                                                onClick={() =>
                                                    handleBusinessProfile(123)
                                                }
                                            >
                                                ব্যবসায়িক প্রোফাইল
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-3 p-6 bg-white">
                            <div className="profile-information">
                                <div className="grid grid-cols-2 gap-4 mb-3">
                                    <div className="...">
                                        <label className="block">
                                            <span className="block text-sm font-medium text-slate-700">
                                                পিতার নাম
                                            </span>
                                            <p>
                                                {user.profile?.father_name ||
                                                    "--"}
                                            </p>
                                        </label>
                                    </div>
                                    <div className="...">
                                        <label className="block">
                                            <span className="block text-sm font-medium text-slate-700">
                                                পিতার নাম (ইংরেজি)
                                            </span>
                                            <p>
                                                {user.profile?.father_name_en ||
                                                    "--"}
                                            </p>
                                        </label>
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-4 mb-3">
                                    <div className="...">
                                        <label className="block">
                                            <span className="block text-sm font-medium text-slate-700">
                                                মাতার নাম
                                            </span>
                                            <p>
                                                {user.profile?.mother_name ||
                                                    "--"}
                                            </p>
                                        </label>
                                    </div>
                                    <div className="...">
                                        <label className="block">
                                            <span className="block text-sm font-medium text-slate-700">
                                                মাতার নাম (ইংরেজি)
                                            </span>
                                            <p>
                                                {user.profile?.mother_name_en ||
                                                    "--"}
                                            </p>
                                        </label>
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 gap-4 mb-3">
                                    <div className="...">
                                        <label className="block">
                                            <span className="block text-sm font-medium text-slate-700">
                                                স্বামী/স্ত্রীর নাম
                                            </span>
                                            <p>
                                                {user.profile?.spouse_name ||
                                                    "--"}
                                            </p>
                                        </label>
                                    </div>
                                    <div className="...">
                                        <label className="block">
                                            <span className="block text-sm font-medium text-slate-700">
                                                স্বামী/স্ত্রীর নাম (ইংরেজি)
                                            </span>
                                            <p>
                                                {user.profile?.spouse_name_en ||
                                                    "--"}
                                            </p>
                                        </label>
                                    </div>
                                </div>
                                <div className="grid grid-cols-3 gap-4 mb-3">
                                    <div className="...">
                                        <label className="block">
                                            <span className="block text-sm font-medium text-slate-700">
                                                জন্ম তারিখ
                                            </span>
                                            <p>
                                                {user.profile?.date_of_birth ||
                                                    "--"}
                                            </p>
                                        </label>
                                    </div>
                                    <div className="...">
                                        <label className="block">
                                            <span className="block text-sm font-medium text-slate-700">
                                                ধর্ম
                                            </span>
                                            <p>
                                                {user.profile?.religion || "--"}
                                            </p>
                                        </label>
                                    </div>
                                    <div className="...">
                                        <label className="block">
                                            <span className="block text-sm font-medium text-slate-700">
                                                লিঙ্গ
                                            </span>
                                            <p>
                                                {user.profile?.gender || "--"}
                                            </p>
                                        </label>
                                    </div>
                                </div>
                                <div className="grid grid-cols-3 gap-4 mb-3">
                                    <div className="...">
                                        <label className="block">
                                            <span className="block text-sm font-medium text-slate-700">
                                                জাতীয় পরিচয়পত্র নম্বর (ইংরেজি)
                                            </span>
                                            <p>{user.nid || "--"}</p>
                                        </label>
                                    </div>
                                    <div className="...">
                                        <label className="block">
                                            <span className="block text-sm font-medium text-slate-700">
                                                পেশা
                                            </span>
                                            <p>
                                                {user.profile?.occupation ||
                                                    "--"}
                                            </p>
                                        </label>
                                    </div>

                                    <div className="...">
                                        <label className="block">
                                            <span className="block text-sm font-medium text-slate-700">
                                                জাতীয়তা
                                            </span>
                                            <p>
                                                {user.profile?.nationality ||
                                                    "--"}
                                            </p>
                                        </label>
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 gap-4 mb-3">
                                    <div className="...">
                                        <label className="block">
                                            <span className="block text-sm font-medium text-slate-700">
                                                টিআইএন
                                            </span>
                                            <p>{user.profile?.tin || "--"}</p>
                                        </label>
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 gap-4 mb-3">
                                    <div className="...">
                                        <label className="block">
                                            <span className="block text-sm font-medium text-slate-700">
                                                বর্তমান ঠিকানা
                                            </span>
                                            <p>
                                                {user.profile?.pre_address ||
                                                    "--"}
                                            </p>
                                        </label>
                                    </div>
                                </div>
                                <div className="grid grid-cols-3 gap-4 mb-3">
                                    <div className="...">
                                        <label className="block">
                                            <span className="block text-sm font-medium text-slate-700">
                                                বিভাগ
                                            </span>
                                            <p>
                                                {user.profile?.pre_division ||
                                                    "--"}
                                            </p>
                                        </label>
                                    </div>
                                    <div className="...">
                                        <label className="block">
                                            <span className="block text-sm font-medium text-slate-700">
                                                জেলা
                                            </span>
                                            <p>
                                                {user.profile?.pre_district ||
                                                    "--"}
                                            </p>
                                        </label>
                                    </div>
                                    <div className="...">
                                        <label className="block">
                                            <span className="block text-sm font-medium text-slate-700">
                                                উপজেলা
                                            </span>
                                            <p>
                                                {user.profile?.pre_upazila ||
                                                    "--"}
                                            </p>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default Details;
