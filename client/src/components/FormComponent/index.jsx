import React, {useState} from "react";
import {FaArrowLeft} from "react-icons/fa6";
import {IoMdArrowDropdown} from "react-icons/io";
import {useNavigate} from "react-router-dom";
import {Image, Upload} from "antd";
const getBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
const FormComponent = ({mode}) => {
  // State to handle modal visibility and stage
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState("Select Design State");
  const statuses = ["Mood Board", "Basic Design", "Final Design", "Choose Estimation", "Estimation Confirmed"];

  const handleStatusChange = (status) => {
    setSelectedStatus(status);
    setIsModalOpen(false); // Close the modal
  };
  const navigate = useNavigate();

  //UPLOAD
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [fileList, setFileList] = useState([
    {
  
      url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    },
    {

      url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    },
    {

      url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    },
    {

      url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    },

  ]);
  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setPreviewImage(file.url || file.preview);
    setPreviewOpen(true);
  };
  const handleChange = ({fileList: newFileList}) => setFileList(newFileList);
  const uploadButton = (
    <button
      style={{
        border: 0,
        background: "none",
      }}
      type="button"
    >
    +
      <div
        style={{
          marginTop: 8,
        }}
      >
        Upload
      </div>
    </button>
  );
  return (
    <div className="flex flex-col gap-2 px-10">
      <div>
        <button
          onClick={() => navigate(-1)}
          className="inline-flex primary-btn-boarded rounded-2 gap-1 px-2 py-2 items-center"
        >
          <FaArrowLeft className="text-2xl" />
          Go back
        </button>
      </div>
      <div className="bg-[#99683033] min-w-full border flex flex-col gap-6 border-[#996830] rounded-lg p-10 ">
        <div className="flex flex-row">
          <div className="basis-8/12 flex flex-col gap-5">
            <div className="flex flex-row align-middle">
              <div className="basis-1/4 flex items-center ">
                <h2 className="secondary-txt flex align-middle">Name :</h2>
              </div>
              <div className="basis-2/4">
                <input
                  type="text"
                  className="custom-input w-full h-[45px] text-base rounded-xl pl-4 outline-none focus:ring-1 focus:ring-[#996833]"
                />
              </div>
            </div>
            <div className="flex flex-row align-middle">
              <div className="basis-1/4 flex items-center">
                <h2 className="secondary-txt flex align-middle">Email :</h2>
              </div>
              <div className="basis-2/4">
                <input
                  type="text"
                  className="custom-input w-full h-[45px] text-base rounded-xl pl-4 outline-none focus:ring-1 focus:ring-[#996833]"
                />
              </div>
            </div>
            <div className="flex flex-row align-middle">
              <div className="basis-1/4 flex items-center">
                <h2 className="secondary-txt flex align-middle">Phone Number :</h2>
              </div>
              <div className="basis-2/4">
                <input
                  type="text"
                  className="custom-input w-full h-[45px] text-base rounded-xl pl-4 outline-none focus:ring-1 focus:ring-[#996833]"
                />
              </div>
            </div>
            <div className="flex flex-row align-middle">
              <div className="basis-1/4 flex items-center ">
                <h2 className="secondary-txt flex items-center">Assign Architect :</h2>
              </div>
              <div className="basis-2/4">
                <select className="custome-select w-full h-[45px] px-5 py-1.5" name="Status" id="status">
                  <option value="Open">John</option>
                  <option value="No response">Hari</option>
                  <option value="Closed">Joel</option>
                </select>
              </div>
            </div>
          </div>
          <div className="basis-4/12 flex flex-col justify-end items-center">
            <div className="flex flex-col gap-4">
              <button
                className="custome-select px-5 py-2 text-l bg-gray-200 inline-flex gap-2 items-center justify-center"
                onClick={() => setIsModalOpen(true)}
                disabled={selectedStatus === "Estimation Confirmed"}
              >
                {selectedStatus} <IoMdArrowDropdown className="text-xl" />
              </button>
              <button className="primary-btn-active p-2 font-bold">Add Images</button>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="basis-12/12 p-3">
            {/* <textarea className="custom-textarea" rows="5" cols="20" name="blog">
              Share your knowledge by writing your own blog!
            </textarea> */}
            <Upload
              action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
              listType="picture-card"
              fileList={fileList}
              onPreview={handlePreview}
              onChange={handleChange}
            >
              {fileList.length >= 8 ? null : uploadButton}
            </Upload>
            {previewImage && (
              <Image
                wrapperStyle={{
                  display: "none",
                }}
                className="custom-img-wrapper"
                preview={{
                  visible: previewOpen,
                  onVisibleChange: (visible) => setPreviewOpen(visible),
                  afterOpenChange: (visible) => !visible && setPreviewImage(""),
                }}
                src={previewImage}
              />
            )}
          </div>

        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-gray-950 bg-opacity-50 flex items-center justify-center"
          onClick={() => setIsModalOpen(false)}
        >
          <div className="bg-white rounded-2xl shadow-lg w-48 overflow-hidden p-1">
            <ul>
              {statuses.map((status) => (
                <li key={status}>
                  <button
                    className={`w-full text-left bg-white text-[#996830] px-5 py-2  font-medium ${
                      selectedStatus === status ? "cursor-not-allowed bg-gray-100 " : "bg-white hover:bg-gray-100"
                    }`}
                    onClick={() => handleStatusChange(status)}
                    disabled={selectedStatus === status}
                  >
                    {status}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default FormComponent;
