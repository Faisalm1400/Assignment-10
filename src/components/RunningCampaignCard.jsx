import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const RunningCampaignCard = ({ campaign }) => {

    const { image, title, type, minDonation, deadline } = campaign;
    const [isDeadlinePassed, setIsDeadlinePassed] = useState(false);

    useEffect(() => {
        const checkDeadline = () => {
            const currentDate = new Date();
            const campaignDeadline = new Date(deadline);
            if (campaignDeadline < currentDate) {
                setIsDeadlinePassed(true);
            }
        };
        checkDeadline();
    }, [deadline]);

    if (isDeadlinePassed) {
        return null; // Don't render the card if the deadline has passed
    }


    return (
        <div className="card bg-emerald-300 w-96 shadow-sm">
            <figure>
                <img
                    src={image}
                    alt="Shoes" />
            </figure>
            <div className="flex justify-center">
                <div className="badge badge-secondary uppercase rounded-none">{type}</div>
            </div>
            <div className="card-body space-y-2">
                <h2 className="text-2xl font-bold">
                    {title}
                </h2>
                <div className="card-actions justify-between">
                    <div className="badge badge-outline font-semibold">{deadline}</div>
                    <div className="badge badge-outline font-semibold"><span className="">Goal:</span> ${minDonation}</div>
                </div>
                    <Link to={`/campaign/${campaign._id}`} className="btn btn-primary">
                        Show More
                    </Link>
            </div>
        </div>
    );
};

export default RunningCampaignCard;