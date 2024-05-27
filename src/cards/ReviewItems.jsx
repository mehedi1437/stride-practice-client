import { HiOutlineTrash } from "react-icons/hi";

const ReviewItems = ({ product }) => {
  const { id, name, picture, price, category, quantity } = product;

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Name</th>

              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img src={picture} alt="Avatar Tailwind CSS Component" />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{name}</div>
                    <div className="text-sm opacity-50">Price : {price * quantity}</div>
                    <div className="text-sm opacity-50">
                      quantity : {quantity}
                    </div>
                  </div>
                </div>
              </td>
              <td>
                <p>Category : {category}</p>
              </td>

              <th>
                <span className="text-2xl text-red-500">
                  <HiOutlineTrash />
                </span>
              </th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ReviewItems;
