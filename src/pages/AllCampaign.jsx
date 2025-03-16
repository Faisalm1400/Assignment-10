import { useLoaderData, useNavigate } from "react-router-dom";
import CampaignsCard from "../components/CampaignsCard";

const AllCampaign = () => {

    const campaigns = useLoaderData();
    const navigate = useNavigate();

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-2xl font-bold mb-4 text-center">All Campaigns</h1>
            <div className="overflow-x-auto">
                <table className="table-auto w-full border-collapse border border-gray-300">
                    <thead>
                        <tr>
                            <th className="border border-gray-300 px-4 py-2">Image</th>
                            <th className="border border-gray-300 px-4 py-2">Title</th>
                            <th className="border border-gray-300 px-4 py-2">Type</th>
                            <th className="border border-gray-300 px-4 py-2">Description</th>
                            <th className="border border-gray-300 px-4 py-2">Min Donation</th>
                            <th className="border border-gray-300 px-4 py-2">Deadline</th>
                            <th className="border border-gray-300 px-4 py-2">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {campaigns.map((campaign) => (
                            <tr key={campaign._id}>
                                <td className="border border-gray-300 px-4 py-2">
                                    <img
                                        src={campaign.image}
                                        alt={campaign.title}
                                        className="w-16 h-16 object-cover rounded-md"
                                    />
                                </td>
                                <td className="border border-gray-300 px-4 py-2">{campaign.title}</td>
                                <td className="border border-gray-300 px-4 py-2">{campaign.type}</td>
                                <td className="border border-gray-300 px-4 py-2 truncate max-w-xs">
                                    {campaign.description}
                                </td>
                                <td className="border border-gray-300 px-4 py-2">{campaign.minDonation}</td>
                                <td className="border border-gray-300 px-4 py-2">{campaign.deadline}</td>
                                <td className="border border-gray-300 px-4 py-2">
                                    <button
                                        className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-700"
                                        onClick={() => navigate(`/campaign/${campaign._id}`)}
                                    >
                                        See More
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllCampaign;