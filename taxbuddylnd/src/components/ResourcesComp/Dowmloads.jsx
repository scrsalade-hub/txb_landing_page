import React from "react";
import { assets } from "../../assets/assets";

const Dowmloads = () => {
  const downloads = [
    {
      icon: assets.downloadbook,
      head: "Nigerian Bussiness Tax Guide 2025",
      text: "Complete guide covering all tax types, rates, and filing requirements.",
      size: "PDF . 2.5MB",
      button: assets.downloadButton,
    },
    {
      icon: assets.downloadCheck,
      head: "VAT Compliance Checklist",
      text: "Monthly checklist to ensure you never miss a VAT filling deadline.",
      size: "PDF . 450KB",
      button: assets.downloadButton,
    },
    {
      icon: assets.downloadCalender,
      head: "Tax Calendar 2025",
      text: "All important tax deadlines and filing dates for Nigerian bussiness.",
      size: "PDF . 1.2MB",
      button: assets.downloadButton,
    },
    {
      icon: assets.downloadStats,
      head: "PAYE Calculation Template",
      text: "Excel template for calculating employee PAYE with automatic formulas.",
      size: "XLSX . 850KB",
      button: assets.downloadButton,
    },
  ];

  return (
    <div>
      <div className="max-width-[392px] flex flex-col gap-4 items-center justify-center text-center">
        {/* Title Section */}
        <h2>Tax Resources & Downloads</h2>
        <div className="px-5">
          <p className="text-[#4a5565] md:text-[18px]">
            Free guides, templates, and links to help you navigate Nigerian
            bussiness taxes
          </p>
        </div>
      </div>

      <section>
        {/* Download Items */}
        <div className="flex gap-2 items-center mt-16">
          <img src={assets.downloadIcon} alt="" />
          <h3 className="text-[16px]">Free Downloads</h3>
        </div>
        {downloads.map((download, index) => (
          <div className="mt-6 grid grid-cols-1 gap-2" key={index}>
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition flex gap-8">
              <img className="w-9 h-10" src={download.icon} />
              <div className="flex flex-col gap-3 w-full">
                <h3 className="text-[18px]">{download.head}</h3>
                <p className="text-[#4a5565] text-[13px] md:text-[15px]">
                  {download.text}
                </p>
                <div className="flex justify-between items-center w-full">
                  <span className="text-[12px] md:text-sm text-gray-500">
                    {download.size}
                  </span>
                  <img
                    className="md:w-[137px]  w-[100px]"
                    src={download.button}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Dowmloads;
