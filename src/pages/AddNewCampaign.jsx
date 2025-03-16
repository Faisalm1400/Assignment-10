import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContextProvider";
import Loading from "./Loading";
import { toast } from "react-toastify";

const AddNewCampaign = () => {
    const { user } = useContext(AuthContext);

    const [loading, setLoading] = useState(false);

    const email = user?.email;
    const displayName = user?.displayName;

    const handleAddCampaign = (e) => {
        e.preventDefault();

        const form = e.target;
        const image = form.image.value;
        const title = form.title.value;
        const type = form.type.value;
        const description = form.description.value;
        const minDonation = form.minDonation.value;
        const deadline = form.deadline.value;
        const email = form.email.value;
        // const name = form.name.value;

        const newCampaign = { image, title, type, description, minDonation, deadline,email };
        // console.log(newCampaign);

        setLoading(true);

        // send data to the server
        fetch("http://localhost:5000/campaign", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(newCampaign),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.insertedId) {
                    toast.success('Campaign Added Successfully', {
                        position: "top-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: false,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "dark",
                    });
                }
            })
            .catch((error) => {
                const errorMessage = error.message;

                toast.error(`${errorMessage}`, {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                });
            })
            .finally(() => {
                setLoading(false);
            });
    };

    if (loading) {
        return <Loading />;
    }


    return (
        <div className='bg-[#F4F3F0] p-4 md:p-24 pt-10'>
            <h1 className='text-2xl md:text-3xl font-extrabold mb-6'>Add New Campaign</h1>
            <form onSubmit={handleAddCampaign}>
                <fieldset className='mb-4 md:mb-8'>
                    <legend className='text-xl font-bold mb-2'>Campaign Details</legend>
                    <div className='mb-4 md:mb-8 md:flex'>
                        <div className="w-full md:w-1/2 mb-4 md:mb-0">
                            <label className='fieldset-label'>Image URL</label>
                            <input type="text" name="image" placeholder="Image URL" className="w-full input input-bordered" required />
                        </div>
                        <div className="w-full md:w-1/2 md:ml-4">
                            <label className='fieldset-label'>Campaign Title</label>
                            <input type="text" name="title" placeholder="Campaign Title" className="w-full input input-bordered" required />
                        </div>
                    </div>
                </fieldset>

                <fieldset className='mb-4 md:mb-8'>
                    <legend className='text-xl font-bold mb-2'>Donation Details</legend>
                    <div className='mb-4 md:mb-8 md:flex'>
                        <div className="w-full md:w-1/2 mb-4 md:mb-0">
                            <label className='fieldset-label'>Campaign Type</label>
                            <select name="type" className="w-full select select-bordered">
                                <option value="personal issue">Personal Issue</option>
                                <option value="startup">Startup</option>
                                <option value="business">Business</option>
                                <option value="creative ideas">Creative Ideas</option>
                            </select>
                        </div>
                        <div className="w-full md:w-1/2 md:ml-4">
                            <label className='fieldset-label'>Minimum Donation</label>
                            <input type="number" name="minDonation" placeholder="Minimum Donation Amount" className="w-full input input-bordered" required />
                        </div>
                    </div>
                </fieldset>

                <fieldset className='mb-4 md:mb-8'>
                    <legend className='text-xl font-bold mb-2'>Additional Information</legend>
                    <div className='mb-4 md:mb-8 md:flex'>
                        <div className="w-full md:w-1/2 mb-4 md:mb-0">
                            <label className='fieldset-label'>Description</label>
                            <textarea name="description" placeholder="Description" className="w-full textarea textarea-bordered" required></textarea>
                        </div>
                        <div className="w-full md:w-1/2 md:ml-4">
                            <label className='fieldset-label'>Deadline</label>
                            <input type="date" name="deadline" className="w-full input input-bordered" required />
                        </div>
                    </div>

                    <div className='mb-4 md:mb-8 md:flex'>
                        <div className="w-full md:w-1/2 mb-4 md:mb-0">
                            <label className='fieldset-label'>User Email</label>
                            <input type="email" value={email} className="w-full input input-bordered bg-gray-200" name="email" readOnly />
                        </div>
                        <div className="w-full md:w-1/2 md:ml-4">
                            <label className='fieldset-label'>User Name</label>
                            <input type="text" value={displayName} className="w-full input input-bordered bg-gray-200" name="name" readOnly />
                        </div>
                    </div>
                </fieldset>

                <input type="submit" value="Add Campaign" className="btn btn-block" />
            </form>
        </div>
    );
};

export default AddNewCampaign;