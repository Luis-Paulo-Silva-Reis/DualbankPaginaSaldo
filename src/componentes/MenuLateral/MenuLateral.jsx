import React from "react";
import "./MenuLateral.css";

function MenuLateral() {
  return (
    <div className="MenuLateral">
      <button>
        <i class="fas fa-chart-pie"></i>
      </button>

      <button>
        <i class="fas fa-chart-line"></i>
      </button>
      <button>
        <i class="fas fa-money-bill-alt"></i>
      </button>
      <button>
        <i class="far fa-handshake"></i>
      </button>
      <button>
        <svg
          className="pix"
          viewBox="0 0 512 512"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs />
          <g fill="#4BB8A9" fill-rule="evenodd">
            <path d="M112.57 391.19c20.056 0 38.928-7.808 53.12-22l76.693-76.692c5.385-5.404 14.765-5.384 20.15 0l76.989 76.989c14.191 14.172 33.045 21.98 53.12 21.98h15.098l-97.138 97.139c-30.326 30.344-79.505 30.344-109.85 0l-97.415-97.416h9.232zm280.068-271.294c-20.056 0-38.929 7.809-53.12 22l-76.97 76.99c-5.551 5.53-14.6 5.568-20.15-.02l-76.711-76.693c-14.192-14.191-33.046-21.999-53.12-21.999h-9.234l97.416-97.416c30.344-30.344 79.523-30.344 109.867 0l97.138 97.138h-15.116z" />
            <path d="M22.758 200.753l58.024-58.024h31.787c13.84 0 27.384 5.605 37.172 15.394l76.694 76.693c7.178 7.179 16.596 10.768 26.033 10.768 9.417 0 18.854-3.59 26.014-10.75l76.989-76.99c9.787-9.787 23.331-15.393 37.171-15.393h37.654l58.3 58.302c30.343 30.344 30.343 79.523 0 109.867l-58.3 58.303H392.64c-13.84 0-27.384-5.605-37.171-15.394l-76.97-76.99c-13.914-13.894-38.172-13.894-52.066.02l-76.694 76.674c-9.788 9.788-23.332 15.413-37.172 15.413H80.782L22.758 310.62c-30.344-30.345-30.344-79.524 0-109.868" />
          </g>
        </svg>
      </button>
      <button>
        <i class="fas fa-credit-card"></i>
      </button>
      <button>
        <i class="far fa-comment-alt"></i>
      </button>
      <button>
        <i class="fas fa-wrench"></i>
      </button>
      <button>
        <i class="far fa-question-circle"></i>
      </button>
      <button>
        <i class="fas fa-arrow-circle-right"></i>
      </button>
    </div>
  );
}

export default MenuLateral;
