import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContextProvider";
import { GrUpdate } from "react-icons/gr";
import { MdDelete } from "react-icons/md";
import Loading from "./Loading";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const MyCampaign = () => {

    const { user, loading, setLoading } = useContext(AuthContext);
    const [campaigns, setCampaigns] = useState([]);
    const email = user?.email;
    const navigate = useNavigate();

    const handleUpdate = (id) => {
        navigate(`/updateCampaign/${id}`);
    };

    const handleDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                setLoading(true);

                // delete from the database
                fetch(`http://localhost:5000/campaign/${id}`, {
                    method: 'DELETE',

                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });

                            const remainingCampaigns = campaigns.filter(campaign => campaign._id !== id);
                            setCampaigns(remainingCampaigns);
                        }
                    })
                    .finally(() => {
                        setLoading(false);
                    });
            }
        });
    }

    useEffect(() => {
        if (!email) return;

        setLoading(true);
        fetch(`http://localhost:5000/myCampaigns?email=${email}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        })
            .then(res => res.json())
            .then(data => setCampaigns(data))
            .finally(() => {
                setLoading(false);
            });
    }, [email, setLoading]);

    // console.log(campaigns)

    if (loading) {
        return <Loading />;
    }

    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold mb-4">My Campaigns</h2>
            <div className="overflow-x-auto">
                <table className="table-auto w-full">
                    <thead>
                        <tr>
                            <th className="px-4 py-2">Photo</th>
                            <th className="px-4 py-2">Title</th>
                            <th className="px-4 py-2">Description</th>
                            <th className="px-4 py-2">Minimum Donation</th>
                            <th className="px-4 py-2">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="text-center">
                        {campaigns.map(campaign => (
                            <tr key={campaign._id}>
                                <td className="border px-4 py-2 flex justify-center">
                                    <img src={campaign.image} alt={campaign.title} className="w-20 h-20 object-cover" />
                                </td>
                                <td className="border px-4 py-2">{campaign.title}</td>
                                <td className="border px-4 py-2">{campaign.description}</td>
                                <td className="border px-4 py-2">{campaign.minDonation}</td>
                                <td className="border px-4 py-2">
                                    <div className="flex max-sm:flex-col justify-center gap-8">
                                        <button className="hover:cursor-pointer" onClick={() => handleUpdate(campaign._id)}><GrUpdate /></button>
                                        <button className="hover:cursor-pointer" onClick={() => handleDelete(campaign._id)}><MdDelete /></button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyCampaign;