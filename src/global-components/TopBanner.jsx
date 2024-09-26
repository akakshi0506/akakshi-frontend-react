import React from "react";

const TopBanner = ({ header_text, sub_text }) => {
    return (
        <div className="h-[450px] bg-custom-banner bg-cover bg-no-repeat">
        <div className="pt-[180px] pl-[100px] font-semibold font-montserrat text-[60px] text-[#ffffff]">
            {header_text}
        </div>
        <div className="pl-[105px] font-thin font-montserrat text-[20px] text-[#ffffff]">
            {sub_text}
        </div>
        </div>
    );
};

export default TopBanner;
