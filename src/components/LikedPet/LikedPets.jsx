const LikedPets = ({ likedPet }) => {
  const { image } = likedPet;
  return (
    <div>
      <img className="rounded-lg w-full h-32 object-cover" src={image} alt="" />
    </div>
  );
};

export default LikedPets;
