import React, { useState, useEffect } from "react";
import CountUp from "react-countup";

const Home = () => {
    const [doctors, setDoctors] = useState([]);

    useEffect(() => {
      // Fetch doctors data from JSON file
      fetch('/doctor.json')
        .then(response => response.json())
        .then(data => setDoctors(data))
        .catch(error => console.error('Error loading doctors:', error));
    }, []);
  return (
    <>
      <div className=" py-16 px-4 bg-gray-100 md:px-14 ">
        <div className="border-2 border-white bg-gradient-to-b from-gray-100 to-white rounded-xl p-8">
          <div className="max-w-4xl mx-auto text-center mb-10 px-4">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Dependable Care, Backed by Trusted Professionals.
            </h1>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
              Our platform connects you with verified, experienced doctors
              across various specialties — all at your convenience. Whether it's
              a routine checkup or urgent consultation, book appointments in
              minutes and receive quality care you can trust.
            </p>
          </div>

          {/* Search Bar */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <input
              type="text"
              placeholder="Search any doctor..."
              className="px-5 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full sm:w-96"
            />
            <button className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition w-full sm:w-auto">
              Search Now
            </button>
          </div>

          {/* Image Section */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 px-4">
            <img
              src="https://i.ibb.co.com/fGBN8rCb/banner-img-1.png"
              className="w-full md:w-1/2 rounded-lg shadow-lg"
              alt="Banner Image 1"
            />
            <img
              src="https://i.ibb.co.com/fGBN8rCb/banner-img-1.png"
              className="w-full md:w-1/2 rounded-lg shadow-lg"
              alt="Banner Image 2"
            />
          </div>
        </div>
      </div>

 





      <div className=" text-center px-4 bg-gray-100">
      
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Dependable Care, Backed by Trusted Professionals.
          </h1>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed">
            Our platform connects you with verified, experienced doctors across
            various specialties — all at your convenience. Whether it's a
            routine checkup or urgent consultation, book appointments in minutes
            and receive quality care you can trust.
          </p>
        

        



{/* <section
  id="cardsection"
  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-6 p-4">
  
  


  <div className="w-full h-full rounded-lg shadow-lg bg-white">
<figure className="px-10 pt-10 flex justify-center items-center">
    <img
      src="https://i.ibb.co/dJBSvBx2/doctor-sample.png"
      alt="Shoes"
      className="rounded-xl" />
  </figure>

    <div className="px-4 pt-3  gap-2.5 flex justify-center items-center">
      <span className="inline-block bg-green-100 text-green-500 text-xs px-2 py-1 rounded-full font-semibold border border-green-300">
        Available
      </span>

      <span className="inline-block bg-[#176AE520] text-[#176AE5] text-xs px-2 py-1 rounded-full font-semibold border border-[#176AE530]">5+ Years Experience</span>
    </div>

    <div className="px-4 py-2">
      <h3 className="text-2xl font-bold text-gray-800">
        Dr. Cameron Williamson
      </h3>
      <p className="text-gray-400 text-[18px] mt-1">
        MBBS, MD-General Medicine, DNB
      </p>
      <p className="text-gray-400 text-[18px] mt-4 border-t-3 border-dashed pt-4 "> RegNo: BD12451254</p>
    </div>

    <div className="px-4 pb-4  pt-2">
      <button className="btn btn-outline btn-primary rounded-3xl w-full">View Details</button>
    </div>
  </div>



</section> */}





<section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-6 p-4">
        {doctors.map((doctor) => (
          <div key={doctor.id} className="w-full h-full rounded-lg shadow-lg bg-white">
            <figure className="px-10 pt-10 flex justify-center items-center">
              <img
                src={doctor.image}
                alt={doctor.name}
                className="rounded-xl w-48 h-48 object-cover"
              />
            </figure>

            <div className="px-4 pt-3 gap-2.5 flex justify-center items-center">
              <span className="inline-block bg-green-100 text-green-500 text-xs px-2 py-1 rounded-full font-semibold border border-green-300">
                Available
              </span>
              <span className="inline-block bg-[#176AE520] text-[#176AE5] text-xs px-2 py-1 rounded-full font-semibold border border-[#176AE530]">
                {doctor.experience} Experience
              </span>
            </div>

            <div className="px-4 py-2">
              <h3 className="text-2xl font-bold text-gray-800">
                {doctor.name}
              </h3>
              <p className="text-gray-400 text-[18px] mt-1">
                {doctor.education}
              </p>
              <p className="text-gray-400 text-[18px] mt-4 border-t-3 border-dashed pt-4">
                Speciality: {doctor.speciality}
              </p>
              <p className="text-gray-400 text-[18px] mt-2">
                RegNo: {doctor.registration}
              </p>
            </div>

            <div className="px-4 pb-4 pt-2">
              <button className="btn btn-outline btn-primary rounded-3xl w-full">
                View Details
              </button>
            </div>
          </div>
        ))}
      </section>


      <section className="px-4 py-16 bg-gray-100">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-20">


        <div className="bg-white rounded-2xl w-80 h-72 flex items-center justify-center flex-col gap-6">
        <img src="https://i.ibb.co/jZw5HRxC/success-doctor.png" alt="" />
        <h2 className="text-6xl text-black">
        <CountUp start={50} end={199} duration={6}></CountUp>+</h2>
        <p className="text-2xl text-[#0f0f0f60]">Total Doctors</p>
        </div>


        <div className="bg-white rounded-2xl w-80 h-72 flex items-center justify-center flex-col gap-6">
        <img src="https://i.ibb.co/kpPVRHv/success-review.png" alt="" />
        <h2 className="text-6xl text-black"><CountUp start={50} end={467} duration={6}></CountUp>+</h2>
        <p className="text-2xl text-[#0f0f0f60]">Total Reviews</p>
        </div>


        <div className="bg-white rounded-2xl w-80 h-72 flex items-center justify-center flex-col gap-6">
        <img src="https://i.ibb.co/PvQYyjM1/success-patients.png" alt="" />
        <h2 className="text-6xl text-black"><CountUp start={50} end={1900} duration={6}></CountUp>+</h2>
        <p className="text-2xl text-[#0f0f0f60]">Patients</p>
        </div>


        <div className="bg-white rounded-2xl w-80 h-72 flex items-center justify-center flex-col gap-6">
        <img src="https://i.ibb.co/m5dRMPks/success-staffs.png" alt="" />
        <h2 className="text-6xl text-black"><CountUp start={50} end={300} duration={6}></CountUp>+</h2>
        <p className="text-2xl text-[#0f0f0f60]">Total Stuffs</p>
        </div>
        </div>



      </section>


      </div>
    </>
  );
};

export default Home;
