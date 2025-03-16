import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../context/AuthContextProvider';
import Loading from './Loading';
import DonatedCard from '../components/DonatedCard';

const MyDonations = () => {
    const { user, loading, setLoading } = useContext(AuthContext);
    const [campaigns, setCampaigns] = useState([]);
    const email = user?.email;

    useEffect(() => {
        if (!email) return;

        setLoading(true);
        fetch(`http://localhost:5000/myDonations?email=${email}`, {
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

    if (loading) {
        return <Loading />;
    }


    return (
        <div className="flex gap-5 p-5">
            {
                campaigns.map(campaign => <DonatedCard key={campaign._id} campaign={campaign} />)
            }
        </div>
    );
};

export default MyDonations;