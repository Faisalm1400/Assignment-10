import { useLoaderData } from "react-router-dom";
import CampaignsCard from "../components/CampaignsCard";

const AllCampaign = () => {

    const campaigns = useLoaderData();

    return (
        <div className="flex gap-5 p-5">
            {
                campaigns.map(campaign => <CampaignsCard key={campaign._id} campaign={campaign} />)
            }
        </div>
    );
};

export default AllCampaign;