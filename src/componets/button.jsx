import { useNavigate } from "react-router-dom";
import { ArrowLeftIcon } from "lucide-react";
function Button() {
  const navigate = useNavigate();
  return (
    <button
      className="absolute left-0 top-0 bottom-0 text-white cursor-pointer"
      onClick={() => {
        navigate("/");
      }}
    >
      <ArrowLeftIcon />
    </button>
  );
}

export default Button;
