import PropTypes from "prop-types";

const Category = ({ props }) => {
  const { id, category, category_icon } = props;
  return (
    <div className="mt-12 mb-8">
      <button className="flex gap-1 items-center py-2 px-10 border rounded-2xl border-[#0e7a8126]">
        <img className="w-12 h-12" src={category_icon} alt="" />
        <p className="font-inter font-bold">{category}</p>
      </button>
    </div>
  );
};

Category.propTypes = {
  props: PropTypes.object,
};

export default Category;
