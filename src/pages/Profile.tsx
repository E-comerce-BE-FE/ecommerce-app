import { FaPenSquare } from "react-icons/fa";
import React from "react";

import Layout from "components/Layout";
import Navbar from "components/Navbar";

const Profile = () => {
  return (
    <Layout>
      <Navbar />
      <p className="text-center text-3xl font-bold mb-10">My Profile</p>
      <section className="flex items-center gap-10 mx-40 mb-20 border-2 border-customcyan p-10 rounded-3xl">
        <div className="flex flex-col gap-2">
          <img
            src="src/assets/shirt.png"
            alt="image"
            className="rounded-full pb-3"
          />
          <form className="text-customcyan">
            <label htmlFor="my-modal-6">
              <p className="text-center border-2 border-customcyan rounded-xl p-1 text-customcyan font-medium duration-300 hover:cursor-pointer  active:scale-95">
                Change Photo
              </p>
            </label>
            <input type="checkbox" id="my-modal-6" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
              <div className="modal-box border-2 border-customcyan">
                <p className="mb-5 pb-2 text-xl border-b-2 font-medium">
                  Select Photo
                </p>
                <div className="flex justify-center items-center gap-5">
                  <input
                    type="file"
                    className="file-input file-input-bordered w-full border-2 border-customcyan max-w-xs"
                  />
                </div>
                <div className="modal-action">
                  <button
                    type="submit"
                    className="w-20 text-sm text-center border-2 border-customcyan bg-customcyan rounded-xl py-1 text-gray-50 font-medium duration-300 hover:cursor-pointer  active:scale-90"
                  >
                    Update
                  </button>
                  <label
                    htmlFor="my-modal-6"
                    className="w-20 text-sm text-center border-2 border-customcyan rounded-xl py-1 text-customcyan font-medium duration-300 hover:cursor-pointer  active:scale-90"
                  >
                    Cancel
                  </label>
                </div>
              </div>
            </div>
          </form>
          <form className="text-customcyan">
            <label htmlFor="my-modal-7">
              <p className="text-center border-2 border-customcyan rounded-xl p-1 text-customcyan font-medium duration-300 hover:cursor-pointer  active:scale-95">
                Change Password
              </p>
            </label>
            <input type="checkbox" id="my-modal-7" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
              <div className="modal-box border-2 border-customcyan">
                <p className="mb-5 pb-2 text-xl border-b-2 font-medium">
                  Change Password
                </p>
                <div className="flex flex-col px-20">
                  <p className="text-base font-medium">Current Password :</p>
                  <input
                    type="password"
                    placeholder="Type current password"
                    className="input input-bordered input-sm w-full max-w-xs border-customcyan mb-4"
                  />
                  <p className="text-base font-medium">New Password :</p>
                  <input
                    type="password"
                    placeholder="Type new password"
                    className="input input-bordered input-sm w-full max-w-xs border-customcyan  mb-4"
                  />
                  <p className="text-base font-medium">
                    Confirm New Password :
                  </p>
                  <input
                    type="password"
                    placeholder="Retype new password"
                    className="input input-bordered input-sm w-full max-w-xs border-customcyan"
                  />
                </div>
                <div className="modal-action">
                  <button
                    type="submit"
                    className="w-20 text-sm text-center border-2 border-customcyan bg-customcyan rounded-xl py-1 text-gray-50 font-medium duration-300 hover:cursor-pointer  active:scale-90"
                  >
                    Update
                  </button>
                  <label
                    htmlFor="my-modal-7"
                    className="w-20 text-sm text-center border-2 border-customcyan rounded-xl py-1 text-customcyan font-medium duration-300 hover:cursor-pointer  active:scale-90"
                  >
                    Cancel
                  </label>
                </div>
              </div>
            </div>
          </form>
          <form>
            <label htmlFor="my-modal-8">
              <p className="text-center border-2 border-customcyan bg-customcyan rounded-xl p-1 text-gray-50 font-medium duration-300 hover:cursor-pointer  active:scale-95">
                Delete Account
              </p>
            </label>
            <input type="checkbox" id="my-modal-8" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
              <div className="modal-box border-2 border-customcyan">
                <p className="mb-5 pb-2 text-xl border-b-2 font-medium">
                  Account Deletion
                </p>
                <div className="flex flex-col px-5">
                  <p className="text-base font-medium text-justify mb-2">
                    Deleting your account will permanently remove all your
                    information from our platform. Also, your account cannot be
                    reactivated in the future.
                  </p>
                  <p className="text-base font-medium text-justify">
                    If you're sure you want to delete this account,{" "}
                    <span className="text-red-600">input your password</span>,
                    then click{" "}
                    <span className="text-red-600">Delete Account</span> button.
                    If you have any issues, please let us know before deleting.
                  </p>
                  <input
                    type="password"
                    placeholder="Type password"
                    className="flex justify-center input input-bordered input-sm w-full max-w-xs border-customcyan my-4"
                  />
                </div>
                <div className="modal-action">
                  <button
                    type="submit"
                    className="w-36 text-sm text-center border-2 border-red-600 bg-red-600 rounded-xl py-1 text-gray-50 font-medium duration-300 hover:cursor-pointer  active:scale-90"
                  >
                    Delete Account
                  </button>
                  <label
                    htmlFor="my-modal-8"
                    className="w-20 text-sm text-center border-2 border-customcyan rounded-xl py-1 text-customcyan font-medium duration-300 hover:cursor-pointer active:scale-90"
                  >
                    Cancel
                  </label>
                </div>
              </div>
            </div>
          </form>
        </div>
        <table className="table-fixed">
          <tbody>
            <tr>
              <td className="w-20 pr-20 py-3 text-lg font-medium">Name</td>
              <td className="w-[40rem] text-lg ">Regata Joli</td>
              <td className="text-customcyan text-3xl">
                <form>
                  <label htmlFor="my-modal-1">
                    <p className="duration-300 hover:cursor-pointer active:scale-75">
                      <FaPenSquare />
                    </p>
                  </label>
                  <input
                    type="checkbox"
                    id="my-modal-1"
                    className="modal-toggle"
                  />
                  <div className="modal modal-bottom sm:modal-middle">
                    <div className="modal-box border-2 border-customcyan">
                      <p className="mb-5 pb-2 text-xl border-b-2 font-medium">
                        Edit Profile
                      </p>
                      <div className="flex justify-center items-center gap-5">
                        <p className="text-lg">Name :</p>
                        <input
                          type="text"
                          placeholder="Type new name"
                          className="input input-bordered input-sm w-full max-w-xs border-customcyan"
                        />
                      </div>
                      <div className="modal-action">
                        <button
                          type="submit"
                          className="w-20 text-sm text-center border-2 border-customcyan bg-customcyan rounded-xl py-1 text-gray-50 font-medium duration-300 hover:cursor-pointer  active:scale-90"
                        >
                          Update
                        </button>
                        <label
                          htmlFor="my-modal-1"
                          className="w-20 text-sm text-center border-2 border-customcyan rounded-xl py-1 text-customcyan font-medium duration-300 hover:cursor-pointer  active:scale-90"
                        >
                          Cancel
                        </label>
                      </div>
                    </div>
                  </div>
                </form>
              </td>
            </tr>
            <tr>
              <td className="py-3 text-lg font-medium">Birthdate</td>
              <td className="text-lg">30 November 1998</td>
              <td className="text-customcyan text-3xl">
                <form>
                  <label htmlFor="my-modal-2">
                    <p className="duration-300 hover:cursor-pointer active:scale-75">
                      <FaPenSquare />
                    </p>
                  </label>
                  <input
                    type="checkbox"
                    id="my-modal-2"
                    className="modal-toggle"
                  />
                  <div className="modal modal-bottom sm:modal-middle">
                    <div className="modal-box border-2 border-customcyan">
                      <p className="mb-5 pb-2 text-xl border-b-2 font-medium">
                        Edit Profile
                      </p>
                      <div className="flex justify-center items-center gap-5">
                        <p className="text-lg">Birthdate :</p>
                        <input
                          type="text"
                          placeholder="Type new birthdate"
                          className="input input-bordered input-sm w-full max-w-xs border-customcyan"
                        />
                      </div>
                      <div className="modal-action">
                        <button
                          type="submit"
                          className="w-20 text-sm text-center border-2 border-customcyan bg-customcyan rounded-xl py-1 text-gray-50 font-medium duration-300 hover:cursor-pointer  active:scale-90"
                        >
                          Update
                        </button>
                        <label
                          htmlFor="my-modal-2"
                          className="w-20 text-sm text-center border-2 border-customcyan rounded-xl py-1 text-customcyan font-medium duration-300 hover:cursor-pointer  active:scale-90"
                        >
                          Cancel
                        </label>
                      </div>
                    </div>
                  </div>
                </form>
              </td>
            </tr>
            <tr>
              <td className="py-3 text-lg font-medium">Email</td>
              <td className="text-lg">regatajoli@gmail.com</td>
              <td className="text-customcyan text-3xl">
                <form>
                  <label htmlFor="my-modal-3">
                    <p className="duration-300 hover:cursor-pointer active:scale-75">
                      <FaPenSquare />
                    </p>
                  </label>
                  <input
                    type="checkbox"
                    id="my-modal-3"
                    className="modal-toggle"
                  />
                  <div className="modal modal-bottom sm:modal-middle">
                    <div className="modal-box border-2 border-customcyan">
                      <p className="mb-5 pb-2 text-xl border-b-2 font-medium">
                        Edit Profile
                      </p>
                      <div className="flex justify-center items-center gap-5">
                        <p className="text-lg">Email :</p>
                        <input
                          type="email"
                          placeholder="Type new email"
                          className="input input-bordered input-sm w-full max-w-xs border-customcyan"
                        />
                      </div>
                      <div className="modal-action">
                        <button
                          type="submit"
                          className="w-20 text-sm text-center border-2 border-customcyan bg-customcyan rounded-xl py-1 text-gray-50 font-medium duration-300 hover:cursor-pointer  active:scale-90"
                        >
                          Update
                        </button>
                        <label
                          htmlFor="my-modal-3"
                          className="w-20 text-sm text-center border-2 border-customcyan rounded-xl py-1 text-customcyan font-medium duration-300 hover:cursor-pointer  active:scale-90"
                        >
                          Cancel
                        </label>
                      </div>
                    </div>
                  </div>
                </form>
              </td>
            </tr>
            <tr>
              <td className="py-3 text-lg font-medium">Phone</td>
              <td className="text-lg">+6281289993444</td>
              <td className="text-customcyan text-3xl">
                <form>
                  <label htmlFor="my-modal-4">
                    <p className="duration-300 hover:cursor-pointer active:scale-75">
                      <FaPenSquare />
                    </p>
                  </label>
                  <input
                    type="checkbox"
                    id="my-modal-4"
                    className="modal-toggle"
                  />
                  <div className="modal modal-bottom sm:modal-middle">
                    <div className="modal-box border-2 border-customcyan">
                      <p className="mb-5 pb-2 text-xl border-b-2 font-medium">
                        Edit Profile
                      </p>
                      <div className="flex justify-center items-center gap-5">
                        <p className="text-lg">Phone :</p>
                        <input
                          type="email"
                          placeholder="Type new phone number"
                          className="input input-bordered input-sm w-full max-w-xs border-customcyan"
                        />
                      </div>
                      <div className="modal-action">
                        <button
                          type="submit"
                          className="w-20 text-sm text-center border-2 border-customcyan bg-customcyan rounded-xl py-1 text-gray-50 font-medium duration-300 hover:cursor-pointer  active:scale-90"
                        >
                          Update
                        </button>
                        <label
                          htmlFor="my-modal-4"
                          className="w-20 text-sm text-center border-2 border-customcyan rounded-xl py-1 text-customcyan font-medium duration-300 hover:cursor-pointer  active:scale-90"
                        >
                          Cancel
                        </label>
                      </div>
                    </div>
                  </div>
                </form>
              </td>
            </tr>
            <tr>
              <td className="py-3 text-lg font-medium flex">Address</td>
              <td className="text-lg">
                <td>
                  Jalan jalan di mana mana hatiku senang no. 100 kota hantu
                  asdadasdas asd asdasdasda saadasd asdadasd asdasdasda
                  asdasdasd asdasdasd asdasdasd asdasdasd adasdsa
                </td>
              </td>
              <td className="text-customcyan text-3xl">
                <form>
                  <label htmlFor="my-modal-5">
                    <p className="duration-300 hover:cursor-pointer active:scale-75">
                      <FaPenSquare />
                    </p>
                  </label>
                  <input
                    type="checkbox"
                    id="my-modal-5"
                    className="modal-toggle"
                  />
                  <div className="modal modal-bottom sm:modal-middle">
                    <div className="modal-box border-2 border-customcyan">
                      <p className="mb-5 pb-2 text-xl border-b-2 font-medium">
                        Edit Profile
                      </p>
                      <div className="flex justify-center items-center gap-5">
                        <p className="text-lg">Address :</p>
                        <input
                          type="text"
                          placeholder="Type new address"
                          className="input input-bordered input-md w-full max-w-xs border-customcyan"
                        />
                      </div>
                      <div className="modal-action">
                        <button
                          type="submit"
                          className="w-20 text-sm text-center border-2 border-customcyan bg-customcyan rounded-xl py-1 text-gray-50 font-medium duration-300 hover:cursor-pointer  active:scale-90"
                        >
                          Update
                        </button>
                        <label
                          htmlFor="my-modal-5"
                          className="w-20 text-sm text-center border-2 border-customcyan rounded-xl py-1 text-customcyan font-medium duration-300 hover:cursor-pointer  active:scale-90"
                        >
                          Cancel
                        </label>
                      </div>
                    </div>
                  </div>
                </form>
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    </Layout>
  );
};

export default Profile;