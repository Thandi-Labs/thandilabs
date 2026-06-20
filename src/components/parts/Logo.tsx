import { useNavigate } from "react-router-dom";

const Logo = () => {
  const navigate = useNavigate();
  return (
    <span
      onClick={() => navigate("/")}
      className="text-xl hover:cursor-pointer font-semibold tracking-tight text-white"
    >
      Thandi<span className="text-emerald-400">Labs</span>
    </span>
  );
};
export default Logo;
