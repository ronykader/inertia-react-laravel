import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { useForm, usePage } from "@inertiajs/inertia-react";
import { useEffect } from "react";

const Clientform = () => {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        project_url: "",
        login_url: "",
        redirect_url: "",
        logout_url: "",
        logo_url: "",
        client_id: "",
        client_secreet: "",
    });

    const { flash } = usePage().props;

    useEffect(() => {
        return () => {
            reset("name", "project_url", "password", "password_confirmation");
        };
    }, []);

    const onHandleChange = (event) => {
        setData(
            event.target.name,
            event.target.type === "checkbox"
                ? event.target.checked
                : event.target.value
        );
    };

    const submit = (e) => {
        e.preventDefault();
        post(route("oidc.store"));
        reset();
    };

    return (
        <div>
            {flash.message && (
                <div className="alert bg-green-300 p-5 mb-5">
                    {flash.message}
                </div>
            )}
            <form onSubmit={submit}>
                <div>
                    <InputLabel forInput="name" value="Application Name" />

                    <TextInput
                        type="text"
                        name="name"
                        value={data.name}
                        className="mt-1 block w-full"
                        autoComplete="name"
                        isFocused={true}
                        handleChange={onHandleChange}
                        required
                    />

                    <InputError message={errors.name} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel
                        forInput="project_url"
                        value="Application URL"
                    />

                    <TextInput
                        type="text"
                        name="project_url"
                        value={data.project_url}
                        className="mt-1 block w-full"
                        autoComplete="project_url"
                        handleChange={onHandleChange}
                        required
                    />

                    <InputError message={errors.project_url} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel
                        forInput="login_url"
                        value="Application Login URL"
                    />

                    <TextInput
                        type="text"
                        name="login_url"
                        value={data.login_url}
                        className="mt-1 block w-full"
                        autoComplete="login_url"
                        handleChange={onHandleChange}
                        required
                    />

                    <InputError message={errors.login_url} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel
                        forInput="redirect_url"
                        value="Application Redirect URI"
                    />

                    <TextInput
                        type="text"
                        name="redirect_url"
                        value={data.redirect_url}
                        className="mt-1 block w-full"
                        handleChange={onHandleChange}
                        required
                    />

                    <InputError
                        message={errors.redirect_url}
                        className="mt-2"
                    />
                </div>

                <div className="mt-4">
                    <InputLabel
                        forInput="logout_url"
                        value="Application Logout URL"
                    />

                    <TextInput
                        type="text"
                        name="logout_url"
                        value={data.logout_url}
                        className="mt-1 block w-full"
                        handleChange={onHandleChange}
                        required
                    />

                    <InputError message={errors.logout_url} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel
                        forInput="logo_url"
                        value="Application Logo URL"
                    />

                    <TextInput
                        type="text"
                        name="logo_url"
                        value={data.logo_url}
                        className="mt-1 block w-full"
                        handleChange={onHandleChange}
                        required
                    />

                    <InputError message={errors.logo_url} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel
                        forInput="client_id"
                        value="Application Client ID"
                    />

                    <TextInput
                        type="text"
                        name="client_id"
                        value={data.client_id}
                        className="mt-1 block w-full"
                        handleChange={onHandleChange}
                        required
                    />

                    <InputError message={errors.client_id} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel
                        forInput="client_secreet"
                        value="Application Client Secreet"
                    />

                    <TextInput
                        type="text"
                        name="client_secreet"
                        value={data.client_secreet}
                        className="mt-1 block w-full"
                        handleChange={onHandleChange}
                        required
                    />

                    <InputError
                        message={errors.client_secreet}
                        className="mt-2"
                    />
                </div>

                <div className="flex items-center justify-end mt-4">
                    <PrimaryButton className="ml-4" processing={processing}>
                        Update
                    </PrimaryButton>
                </div>
            </form>
        </div>
    );
};

export default Clientform;
