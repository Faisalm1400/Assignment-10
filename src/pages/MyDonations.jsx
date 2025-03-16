import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../context/AuthContextProvider';
import Loading from './Loading';
import DonatedCard from '../components/DonatedCard';

const MyDonations = () => {
    const { user, setLoading } = useContext(AuthContext);
    const [campaigns, setCampaigns] = useState([]);
    const email = user?.email;

    useEffect(() => {
        if (!email) return;

        setLoading(false);
        fetch(`http://localhost:5000/myDonations?email=${email}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        })
            .then(res => res.json())
            .then(data => setCampaigns(data))
        // .finally(() => {
        //     setLoading(false);
        // });
    }, [email, setLoading]);

    // if (loading) {
    //     return <Loading />;
    // }


    return (
        <div className="p-5">
            <h2 className="text-2xl font-bold mb-4">My Donations</h2>
            <div className="grid gap-5 grid-cols-1 justify-center md:grid-cols-2 lg:grid-cols-3">
                {
                    campaigns.map((campaign) => (
                        <DonatedCard key={campaign._id} campaign={campaign} />
                    ))
                }
            </div>
        </div>
    );
};

export default MyDonations;