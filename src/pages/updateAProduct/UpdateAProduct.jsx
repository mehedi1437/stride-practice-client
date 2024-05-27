import Swal from "sweetalert2";

const UpdateAProduct = () => {
  const handleUpdateProduct = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const picture = form.photo.value;
    const category = form.category.value;
    const price = form.price.value;
    const productInfo = {
      name,
      picture,
      category,
      price,
    };

    fetch(`http://localhost:5000/products`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(productInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          Swal.fire({
            title: "Success!",
            text: "Product Updated Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };
  return (
    <div>
      <form onSubmit={handleUpdateProduct}>
        <div className="hero  bg-base-200 ">
          <div className="hero-content  ">
            <div className="card    shadow-2xl bg-base-100">
              <h1 className="text-5xl font-bold text-center mt-5">
                Update Product!
              </h1>
              <div className="card-body w-full grid lg:grid-cols-2 gap-4">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Name yout product"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Product Pic URL</span>
                  </label>
                  <input
                    type="text"
                    name="photo"
                    placeholder="product Pic URL"
                    className="input input-bordered"
                  />
                </div>

                <select
                  className="select select-bordered w-full max-w-xs mt-10"
                  defaultValue="Category"
                  name="category"
                >
                  <option disabled selected>
                    Category
                  </option>
                  <option>Home Appliance</option>
                  <option>Out door appliance</option>
                </select>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Price</span>
                  </label>
                  <input
                    type="number"
                    name="price"
                    placeholder="Price"
                    className="input input-bordered"
                  />
                </div>
              </div>
              <div className="form-control my-10 mx-10">
                <button className="btn btn-primary text-center" value="addproduct">
                  Update Your Product
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default UpdateAProduct;
