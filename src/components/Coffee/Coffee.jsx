import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import PropTypes from "prop-types";

const Coffee = ({ coffee, coffees, setCoffees }) => {
  const { _id, name, quantity, details, photo } = coffee;

  const handleDelete = (id) => {
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/coffee/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount === 1) {
              Swal.fire("Deleted!", "Your Coffee has been deleted.", "success");
              const remaining = coffees.filter((coffee) => coffee._id !== id);
              setCoffees(remaining);
            }
          });
      }
    });
  };

  return (
    <div className="card card-side bg-base-100 shadow-xl">
      <figure>
        <img src={photo} alt="" />
      </figure>
      <div className="flex justify-between w-full py-4 pr-5">
        <div>
          <h2 className="card-title">{name}</h2>
          <p>{quantity}</p>
          <p>{details}</p>
        </div>
        <div className="card-actions justify-end">
          <div className="btn-group btn-group-vertical">
            <button className="btn btn-active">View</button>
            <Link to={`/updateCoffee/${_id}`}>
              <button className="btn">Edit</button>
            </Link>
            <button
              onClick={() => handleDelete(_id)}
              className="btn bg-red-500"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

Coffee.propTypes = {
  coffee: PropTypes.object,
  coffees: PropTypes.array,
  setCoffees: PropTypes.func,
};

export default Coffee;
