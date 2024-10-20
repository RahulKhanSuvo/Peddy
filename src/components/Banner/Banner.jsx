import bannerImage from "../../assets/pet.webp";
const Banner = () => {
  return (
    <div className="font-lato text-center mt-10 space-y-5 mx-4">
      <h3 className="font-bold">Bringing Families Together ❤️‍🔥</h3>
      <h1 className="font-black text-2xl md:text-5xl lg:text-7xl">
        Your Path to Adoption <br /> Starts Here
      </h1>
      <p>
        Adopting a pet is one of the most rewarding experiences, providing a
        loving home to a pet in need. Whether you're looking for a loyal dog, a
        playful cat, or another companion,
        <br /> we are here to guide you on every step of the journey. Start
        today!
      </p>
      <button
        className="bg-[#0E7A81] text-white px-8 py-4 font-bold rounded-xl 
                  focus:ring-2 transition-transform transform hover:scale-105"
      >
        View More
      </button>
      <div className="w-full">
        <img className="mx-auto" src={bannerImage} alt="" />
      </div>
    </div>
  );
};

export default Banner;
