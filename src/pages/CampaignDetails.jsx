import { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../context/AuthContextProvider";
import { toast } from "react-toastify";

const CampaignDetails = () => {
    const loadedCampaign = useLoaderData();
    const { user } = useContext(AuthContext);
    const [isDeadlinePassed, setIsDeadlinePassed] = useState(false);

    const { image, title, type, description, minDonation, deadline } = loadedCampaign;

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

    const handleDonate = () => {
        if (!user) {
            toast.warning('Please log in to donate.', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
            return;
        }

        const donationInfo = {
            campaignId: loadedCampaign._id,
            image: image,
            title: title,
            description: description,
            type: type,
            email: user.email,
            displayName: user.displayName || "Anonymous",
            amount: minDonation,
        };

        fetch('https://crowdcube-server-lyart.vercel.app/donated', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(donationInfo)
        })
            .then(res => res.json())
            .then(data => {
                toast.success('Donation successful!', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                });
                // console.log(data)
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
            });
    };


    return (
        <div className="flex justify-center align-middle my-20">
            <div className="card bg-base-100 w-96 shadow-sm">
                <figure className="px-10 pt-10">
                    <img
                        src={image}
                        className="rounded-xl" />
                </figure>
                <div className="flex justify-center">
                    <div className="badge badge-secondary uppercase rounded-none">{type}</div>
                </div>
                <div className="card-body items-center text-center">
                    <h2 className="text-2xl font-bold">{title}</h2>
                    <p className="text-lg font-sans">{description}</p>
                    <div className="card-actions">
                        <div className="badge badge-outline font-semibold">{deadline}</div>
                        <div className="badge badge-outline font-semibold"><span className="">Goal:</span> ${minDonation}</div>
                    </div>
                    <div>
                        <button className="btn btn-primary" onClick={handleDonate} disabled={isDeadlinePassed}>{isDeadlinePassed ? 'Deadline Passed' : 'Donate'}</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CampaignDetails;