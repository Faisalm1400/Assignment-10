import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContextProvider";
import CampaignsCard from "../components/CampaignsCard";

const MyCampaign = () => {

    const { user } = useContext(AuthContext);
    const [campaigns, setCampaigns] = useState([]);
    const { email } = user;

    useEffect(() => {
        fetch(`http://localhost:5000/myCampaigns?email=${email}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        })
            .then(res => res.json())
            .then(data => setCampaigns(data))
            .catch(error => {
                console.error('Error fetching campaigns:', error);
            });
    }, [email]);

    console.log(campaigns, email)

    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold mb-4">My Campaigns</h2>
            <table className="table-auto w-full">
                <thead>
                    <tr>
                        <th className="px-4 py-2">Title</th>
                        <th className="px-4 py-2">Description</th>
                        {/* <th className="px-4 py-2">Goal</th>
                        <th className="px-4 py-2">Raised</th> */}
                    </tr>
                </thead>
                <tbody>
                    {campaigns.map(campaign => (
                        <tr key={campaign._id}>
                            <td className="border px-4 py-2">{campaign.title}</td>
                            <td className="border px-4 py-2">{campaign.description}</td>
                            {/* <td className="border px-4 py-2">{campaign.goal}</td>
                            <td className="border px-4 py-2">{campaign.raised}</td> */}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default MyCampaign;