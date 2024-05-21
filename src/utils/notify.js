import { toast } from "react-toastify";

let toastPosition = window.innerWidth < 641 ? "top-right" : "bottom-right";
export const notify = (message, typeOperation, time) => {
  toast[typeOperation](message, {
    position: toastPosition,
    autoClose: time || 1500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
};

export const loadingNotify = (message) => {
  const idToast = toast.loading(message, {
    position: toastPosition,
    // autoClose: 1500,
    hideProgressBar: false,
    // closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
  return idToast;
};
export const stopNotify = (id) => {
  toast.dismiss(id);
};
