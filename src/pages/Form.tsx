import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { MdOutlineArrowDropDown } from 'react-icons/md';
import { BsFacebook } from 'react-icons/bs';
import { FcGoogle } from 'react-icons/fc';

import { Icon } from 'react-icons-kit';
import { eye } from 'react-icons-kit/feather/eye';
import { eyeOff } from 'react-icons-kit/feather/eyeOff';

import Button from '.././components/button/Button';
import Modal, {
  ModalBody,
  ModalFooter,
  ModalHeader,
} from '.././components/modal/Modal';

import './Form.scss';

const INITIAL_STATE = {
  fullName: '',
  email: '',
  password: '',
};

export default function Form() {
  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = React.useState(INITIAL_STATE);
  const [type, setType] = useState('password');
  const [icon, setIcon] = useState(eyeOff);

  const handleToggle = () => {
    if (type === 'password') {
      setIcon(eye);
      setType('text');
    } else {
      setIcon(eyeOff);
      setType('password');
    }
  };

  const handleInputChange = (event: any) => {
    const { name, value } = event.target;
    setForm((prevProps) => ({
      ...prevProps,
      [name]: value,
    }));
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    console.log(form);

    setForm(INITIAL_STATE);
  };
  const handleRouterHomeButton = () => {};
  return (
    <>
      <main>
        <div className="image-container">
          <img src="/image.jpg" alt="3D-Cube-Ilustration" />
        </div>
        <form onSubmit={handleSubmit}>
          <h4>
            English(UK)
            <MdOutlineArrowDropDown style={{ fontSize: '1.5rem' }} />
          </h4>
          <div className="inner-container">
            <h2>Create Account</h2>

            <div className="social-inputs">
              <div>
                <div className="google-icon">
                  <FcGoogle />
                </div>
                <input
                  type="text"
                  className="input-google"
                  placeholder="Sign up with Google"
                />
              </div>

              <div>
                <div className="facebook-icon">
                  <BsFacebook />
                </div>
                <input
                  type="text"
                  className="input-facebook"
                  placeholder="Sign up with Facebook"
                />
              </div>
            </div>

            <h3>-OR-</h3>

            <input
              type="text"
              name="fullName"
              className="user-data-input"
              placeholder="Fullname"
              value={form.fullName}
              onChange={handleInputChange}
            />
            <input
              className="user-data-input"
              placeholder="Email Address"
              type="text"
              name="email"
              value={form.email}
              onChange={handleInputChange}
            />

            <div className="password-field">
              <input
                className="user-data-input"
                placeholder="Password"
                type={type}
                name="password"
                value={form.password}
                onChange={handleInputChange}
              />
              <span onClick={handleToggle}>
                <Icon icon={icon} size={25} />
              </span>
            </div>
            <button
              type="submit"
              onClick={() => setShowModal(true)}
              className="btn-primary"
            >
              Create Account
            </button>
            <div className='modal-container'>
              <Modal show={showModal} setShow={setShowModal}>
                <ModalHeader>
                  <h2>Success Modal</h2>
                </ModalHeader>
                <ModalBody>
                  <p style={{ textAlign: 'justify' }}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Deserunt maxime dolorem asperiores laboriosam ad delectus
                    ea. Tempora tempore repellendus laudantium fugiat saepe
                    mollitia eius illo possimus laborum consequuntur, tenetur
                    neque.
                  </p>
                </ModalBody>
                <ModalFooter>
                  <Button onClick={() => setShowModal(false)}>Close</Button>
                </ModalFooter>
              </Modal>
            </div>

            <h5>Already have na account?Log in</h5>
          </div>
        </form>
        <button></button>
      </main>
      <button className="home-button" onClick={handleRouterHomeButton}>
        <Link
          to="/"
          style={{ textDecoration: 'none', color: 'rgb(174, 255, 0)' }}
        >
          HOME
        </Link>
      </button>
    </>
  );
}
