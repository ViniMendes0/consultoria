import React from "react"; 

const Company = () => {
    return (
      <div className="mx-auto m-52 bg-[#caa4a7] text-black py-16 px-10 flex flex-col md:flex-row items-center opacity-55">
        <h2 className="text-4xl font-bold md:w-1/2 text-left text-[#344A6F]">
          LS Consultoria
        </h2>

        <p className="md:w-1/2 mt-6 md:mt-0 text-lg leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod
          tempor incidunt ut labore et dolore magna aliqua.{" "}
          <span className="italic">
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod
            tempor incidunt ut labore et dolore magna aliqua
          </span>{" "}
          Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod
          tempor incidunt ut labore et dolore magna aliqua
        </p>
      </div>
    );
}

export default Company;