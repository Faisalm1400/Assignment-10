

const DonatedCard = ({ campaign }) => {

    const { image, title, type, description, minDonation, deadline } = campaign;

    return (
        <div className="card bg-base-100 w-96 shadow-sm">
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
                <p className="text-lg font-sans">{description}</p>
                <div className="card-actions justify-between">
                    <div className="badge badge-outline font-semibold">{deadline}</div>
                    <div className="badge badge-outline font-semibold"><span className="">Goal:</span> ${minDonation}</div>
                </div>
            </div>
        </div>
    );
};

export default DonatedCard;