const Footer = () => {
  return (
    <div className="bg-white py-20 px-10 mt-10">
      <h1 className="text-center text-3xl font-bold text-[#09080F]">
        Gadget Heaven
      </h1>
      <p className="text-center text-[#09080F99]">
        Leading the way in cutting-edge technology and innovation.
      </p>
      <div className="divider"></div>
      <div className=" flex flex-col md:flex-row text-center justify-between space-y-8 md:space-y-0 mx-16">
        <div className="">
          <h2 className="text-lg font-bold text-[#09080F] mb-3">Services</h2>
          <ul className="space-y-1">
            <li>Product Support</li>
            <li>Order Tracking</li>
            <li>Shipping & Delivery</li>
            <li>Returns</li>
          </ul>
        </div>
        <div className="">
          <h2 className="text-lg font-bold text-[#09080F] mb-3">Company</h2>
          <ul className="space-y-1">
            <li>About Us</li>
            <li>Careers</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="">
          <h2 className="text-lg font-bold text-[#09080F] mb-3">Legal</h2>
          <ul className="space-y-1">
            <li>Terms of Service</li>
            <li>Privacy Policy</li>
            <li>Shipping & Delivery</li>
            <li>Cookie Policy</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
