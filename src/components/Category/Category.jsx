import PropTypes from "prop-types";

const Category = ({ props, setIsCategories }) => {
  const { category, category_icon } = props;
  return (
    <div className="mt-12 lg:mx-4 mb-8">
      <button
        onClick={() => setIsCategories(category)}
        className="flex gap-1 items-center py-2 md:px-[38px] lg:px-10 border rounded-2xl border-[#0e7a8126]"
      >
        <img className="lg:w-12 h-12" src={category_icon} alt="" />
        <p className="font-inter font-bold">{category}</p>
      </button>
    </div>
  );
};

Category.propTypes = {
  setIsCategories: PropTypes.func,
  props: PropTypes.object,
  category: PropTypes.string,
  category_icon: PropTypes.string,
};

export default Category;
