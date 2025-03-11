import { CartIcon } from "./assets/CartIcon";
import { CupIcon } from "./assets/CupIcon";
import { GiftIcon } from "./assets/GiftIcon";

export const Navbar = () => {
  return (
    <div className="w-full h-[110px] bg-[#FDFDFD] pl-[80px] pr-[80px] flex justify-between items-center">
      <div className="flex">
        <img
          className="h-[62px] w-[62px]"
          src="/images/nav/brandLogo.png "
          alt="logo"
        ></img>
        <div>
          <p className="font-bold">coffee namu</p>
          <p>mongolia</p>
        </div>
      </div>

      <div className="right flex">
        <div className="flex gap-[24px]">
          <div className="flex \">
            <a>Меню</a>
            <CupIcon />
          </div>
          <div>
            <a>Бонус</a>
            <GiftIcon />
          </div>
          <div>
            <a>Захиалга</a>
            <CartIcon />
          </div>
        </div>
        <div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
};
