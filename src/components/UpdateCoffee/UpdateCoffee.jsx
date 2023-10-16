import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
  const coffee = useLoaderData();
  const { _id, name, quantity, details, photo, supplier, category, test } =
    coffee;
  console.log(coffee);
  const navigate = useNavigate();

  const handleUpdateCoffee = (e) => {
    e.preventDefault();
    const form = e.target;

    const name = form.name.value;
    const quantity = form.quantity.value;
    const supplier = form.supplier.value;
    const test = form.test.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;

    const newCoffee = {
      name,
      quantity,
      supplier,
      test,
      category,
      details,
      photo,
    };

    console.log(newCoffee);
    // send data to the server
    fetch(
      `https://coffee-store-server-30tkmc8a4-brcshakil.vercel.app/coffee/${_id}`,
      {
        method: "PUT",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(newCoffee),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Coffee Updated successfully.",
            icon: "success",
            confirmButtonText: "Cool",
          });
          navigate(-1);
        }
      });
  };

  return (
    <div>
      <h2 className="text-6xl font-bold">Update Coffee</h2>

      <form onSubmit={handleUpdateCoffee}>
        {/* form row */}
        <div className="flex gap-5">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Coffee Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="Coffee Name"
                className="input input-bordered w-full"
                name="name"
                defaultValue={name}
              />
            </label>
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Available Quantity</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="Available Quantity"
                className="input input-bordered w-full"
                name="quantity"
                defaultValue={quantity}
              />
            </label>
          </div>
        </div>
        {/* form supplier test */}
        <div className="flex gap-5 mt-3">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Supplier</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="Supplier"
                className="input input-bordered w-full"
                name="supplier"
                defaultValue={supplier}
              />
            </label>
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Test</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="Test"
                className="input input-bordered w-full"
                name="test"
                defaultValue={test}
              />
            </label>
          </div>
        </div>
        {/* category and details */}
        <div className="flex gap-5  mt-3">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Category</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="Category"
                className="input input-bordered w-full"
                name="category"
                defaultValue={category}
              />
            </label>
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Details</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="Details"
                className="input input-bordered w-full"
                name="details"
                defaultValue={details}
              />
            </label>
          </div>
        </div>
        {/* photo url */}
        <div className=" mt-3">
          <div className="form-control md:full">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="Photo URL"
                className="input input-bordered w-full"
                name="photo"
                defaultValue={photo}
              />
            </label>
          </div>
        </div>
        {/* btn */}
        <button className="w-full bg-[#D2B48C] text-xl text-black font-bold py-2  mt-3">
          Update Coffee
        </button>
      </form>
    </div>
  );
};

export default UpdateCoffee;
