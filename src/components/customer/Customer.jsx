import "./Customer.css";
import img1 from "../../assets/images/images/Rectangle 23.png";
import img2 from "../../assets/images/icons/g.svg";
const Customer = () => {
  return (
    <>
      <section className="customer--component">
        <div className="customer-header">
          <h2>
            What our <span>Customer Says</span>
          </h2>
          <p>We value our customer's feedback to provide the best service.</p>
        </div>
        <div className="customer-body">
          <div>
            <img src={img1} alt="" />
            <div className="text-container">
              <img src={img2} alt="" />
              <p>
                Ladiesvibe provided me the exact quality product I wanted. I'm
                very much satisfied by their quick delivery process. They
                delivered my dress within a day.
              </p>
              <h4>Jane Bennet</h4>
              <span>Fashion Model</span>
            </div>
          </div>
          <div>
            <button>
              <svg
                width="8"
                height="14"
                viewBox="0 0 8 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 13L1 7L7 1"
                  stroke="#754F23"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
            <button>
              <svg
                width="8"
                height="14"
                viewBox="0 0 8 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 13L7 7L1 1"
                  stroke="#754F23"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};
export default Customer;
