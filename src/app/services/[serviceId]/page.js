const page = async ({ params }) => {
    return (
        <div>
            Services Id {params?.serviceId}
        </div>
    );
};

export default page;