
const AddNewCampaign = () => {
    const userEmail = "user@example.com"; // Replace with actual user data
    const userName = "John Doe"; // Replace with actual user data

    const handleAddCampaign = (e) => {
        e.preventDefault();

        const form = e.target;
        const image = form.image.value;
        const title = form.title.value;
        const type = form.type.value;
        const description = form.description.value;
        const minDonation = form.minDonation.value;
        const deadline = form.deadline.value;

        const newCampaign = { image, title, type, description, minDonation, deadline };
        console.log(newCampaign);

        // send data to the server
        fetch("http://localhost:5000/campaign", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(newCampaign),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.insertedId) {
              alert("Campaign Added Successfully");
            }
          });
    };


    return (
        <div className='bg-[#F4F3F0] p-24 pt-10'>
            <h1 className='text-3xl font-extrabold mb-6'>Add New Campaign</h1>
            <form onSubmit={handleAddCampaign}>
                <fieldset className='mb-8'>
                    <legend className='text-xl font-bold mb-2'>Campaign Details</legend>
                    <div className='mb-8 md:flex'>
                        <div className="md:w-1/2">
                            <label className='fieldset-label'>Image URL</label>
                            <input type="text" name="image" placeholder="Image URL" className="w-full input input-bordered" required />
                        </div>
                        <div className="w-1/2 ml-4">
                            <label className='fieldset-label'>Campaign Title</label>
                            <input type="text" name="title" placeholder="Campaign Title" className="w-full input input-bordered" required />
                        </div>
                    </div>
                </fieldset>

                <fieldset className='mb-8'>
                    <legend className='text-xl font-bold mb-2'>Donation Details</legend>
                    <div className='mb-8 md:flex'>
                        <div className="md:w-1/2">
                            <label className='fieldset-label'>Campaign Type</label>
                            <select name="type" className="w-full select select-bordered">
                                <option value="personal issue">Personal Issue</option>
                                <option value="startup">Startup</option>
                                <option value="business">Business</option>
                                <option value="creative ideas">Creative Ideas</option>
                            </select>
                        </div>
                        <div className="w-1/2 ml-4">
                            <label className='fieldset-label'>Minimum Donation</label>
                            <input type="number" name="minDonation" placeholder="Minimum Donation Amount" className="w-full input input-bordered" required />
                        </div>
                    </div>
                </fieldset>

                <fieldset className='mb-8'>
                    <legend className='text-xl font-bold mb-2'>Additional Information</legend>
                    <div className='mb-8 md:flex'>
                        <div className="md:w-1/2">
                            <label className='fieldset-label'>Description</label>
                            <textarea name="description" placeholder="Description" className="w-full textarea textarea-bordered"></textarea>
                        </div>
                        <div className="w-1/2 ml-4">
                            <label className='fieldset-label'>Deadline</label>
                            <input type="date" name="deadline" className="w-full input input-bordered" required />
                        </div>
                    </div>

                    <div className='mb-8 md:flex'>
                        <div className="md:w-1/2">
                            <label className='fieldset-label'>User Email</label>
                            <input type="email" value={userEmail} className="w-full input input-bordered bg-gray-200" readOnly />
                        </div>
                        <div className="w-1/2 ml-4">
                            <label className='fieldset-label'>User Name</label>
                            <input type="text" value={userName} className="w-full input input-bordered bg-gray-200" readOnly />
                        </div>
                    </div>
                </fieldset>

                <input type="submit" value="Add Campaign" className="btn btn-block" />
            </form>
        </div>
    );
};

export default AddNewCampaign;