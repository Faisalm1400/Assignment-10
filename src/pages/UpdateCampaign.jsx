import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContextProvider";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import Loading from "./Loading";

const UpdateCampaign = () => {

    const { user } = useContext(AuthContext);
    const { id } = useParams();
    const [campaign, setCampaign] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`http://localhost:5000/campaign/${id}`)
            .then((res) => res.json())
            .then((data) => {
                setCampaign(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching campaign:", error);
                setLoading(false);
            });
    }, [id]);

    const handleUpdate = (e) => {
        e.preventDefault();

        const form = e.target;
        const image = form.image.value;
        const title = form.title.value;
        const type = form.type.value;
        const description = form.description.value;
        const minDonation = form.minDonation.value;
        const deadline = form.deadline.value;

        const updatedCampaign = { image, title, type, description, minDonation, deadline };

        setLoading(true);

        // Update the campaign in the database
        fetch(`http://localhost:5000/updateCampaign/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedCampaign),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.modifiedCount) {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Campaign Updated Successfully",
                        showConfirmButton: false,
                        timer: 1500,
                    });
                }
            })
            .catch((error) => {
                console.error("Error updating campaign:", error);
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Something went wrong while updating the campaign!",
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
        <div className="bg-[#F4F3F0] p-4 md:p-24 pt-10">
            <h1 className="text-2xl md:text-3xl font-extrabold mb-6">Update Campaign</h1>
            <form onSubmit={handleUpdate}>
                <fieldset className="mb-4 md:mb-8">
                    <legend className="text-xl font-bold mb-2">Campaign Details</legend>
                    <div className="mb-4 md:mb-8 md:flex">
                        <div className="w-full md:w-1/2 mb-4 md:mb-0">
                            <label className="fieldset-label">Image URL</label>
                            <input type="text" name="image" defaultValue={campaign.image} className="w-full input input-bordered" required />
                        </div>
                        <div className="w-full md:w-1/2 md:ml-4">
                            <label className="fieldset-label">Campaign Title</label>
                            <input type="text" name="title" defaultValue={campaign.title} className="w-full input input-bordered" required />
                        </div>
                    </div>
                </fieldset>

                <fieldset className="mb-4 md:mb-8">
                    <legend className="text-xl font-bold mb-2">Donation Details</legend>
                    <div className="mb-4 md:mb-8 md:flex">
                        <div className="w-full md:w-1/2 mb-4 md:mb-0">
                            <label className="fieldset-label">Campaign Type</label>
                            <select name="type" defaultValue={campaign.type} className="w-full select select-bordered">
                                <option value="personal issue">Personal Issue</option>
                                <option value="startup">Startup</option>
                                <option value="business">Business</option>
                                <option value="creative ideas">Creative Ideas</option>
                            </select>
                        </div>
                        <div className="w-full md:w-1/2 md:ml-4">
                            <label className="fieldset-label">Minimum Donation</label>
                            <input type="number" name="minDonation" defaultValue={campaign.minDonation} className="w-full input input-bordered" required />
                        </div>
                    </div>
                </fieldset>

                <fieldset className="mb-4 md:mb-8">
                    <legend className="text-xl font-bold mb-2">Additional Information</legend>
                    <div className="mb-4 md:mb-8 md:flex">
                        <div className="w-full md:w-1/2 mb-4 md:mb-0">
                            <label className="fieldset-label">Description</label>
                            <textarea name="description" defaultValue={campaign.description} className="w-full textarea textarea-bordered" required></textarea>
                        </div>
                        <div className="w-full md:w-1/2 md:ml-4">
                            <label className="fieldset-label">Deadline</label>
                            <input type="date" name="deadline" defaultValue={campaign.deadline} className="w-full input input-bordered" required />
                        </div>
                    </div>

                    <div className="mb-4 md:mb-8 md:flex">
                        <div className="w-full md:w-1/2 mb-4 md:mb-0">
                            <label className="fieldset-label">User Email</label>
                            <input type="email" value={user?.email} className="w-full input input-bordered bg-gray-200" name="email" readOnly />
                        </div>
                        <div className="w-full md:w-1/2 md:ml-4">
                            <label className="fieldset-label">User Name</label>
                            <input type="text" value={user?.displayName} className="w-full input input-bordered bg-gray-200" name="name" readOnly />
                        </div>
                    </div>
                </fieldset>

                <input type="submit" value="Update Campaign" className="btn btn-block" />
            </form>
        </div>
    );
};

export default UpdateCampaign;