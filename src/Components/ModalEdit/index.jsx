import React, { Fragment, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
// import { updateProduct } from '../../redux/action/productAction';
// import { useDispatch } from 'react-redux';

export const Edit = ({id, name, stock, price, description, embedClass, children}) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
//   const dispatch = useDispatch();

//   const [data, setData] = useState({
//     id,
//     name,
//     stock,
//     price,
//     description
//   });

//   const [photo, setPhoto] = useState(null);

//   const handleUpload = (e) => {
//     setPhoto(e.target.files[0]);
//   };
//   console.log(data);

//   const handleChange = (e) => {
//     setData({
//       ...data,
//       [e.target.name]: e.target.value,
//     });
//     console.log(data);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     dispatch(updateProduct(data, photo))
//   };


  return (
    <Fragment>
      <button
        className={embedClass}
        onClick={handleShow}

        // onMouseEnter={onenter}
        // onMouseLeave={onleave}
      >
        {children}
      </button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Portfolio</Modal.Title>
        </Modal.Header>
        {/* <form onSubmit={handleSubmit}> */}
        <Modal.Body>
            <input
              className="form-control mt-3"
              type="text"
              placeholder="name"
              name="name"
            //   value={data.name}
            //   onChange={handleChange}
            />
            <input
              className="form-control mt-3"
              type="text"
              placeholder="stock"
              name="stock"
            //   value={data.stock}
            //   onChange={handleChange}
            />
        </Modal.Body>
        
        <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button type="submit" id="button-addon2">
            Edit
          </Button>
        </Modal.Footer>
        {/* </form> */}
      </Modal>
    </Fragment>
  )
}

export default Edit