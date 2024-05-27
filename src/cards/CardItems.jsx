/* eslint-disable react/prop-types */
const CardItems = ({ product,handleAddTOCart }) => {
  const { id, name, picture, price, category } = product;
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img
            src={picture}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>Price : {price }</p>
          <p>Category  : {category }</p>
          <div className="card-actions ">
            <button onClick={() => handleAddTOCart(id)} className="btn bg-[#37d5f1]">Add to cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardItems;
