import Image from "next/image";

export default function DashboardPage() {
  return (
    <div className="flex flex-row items-center">
      <div id="left-section" className="justify-start">
        <h2 className="text-3xl font-semibold mb-4">Welcome to the Modern Multi Speciality Hospital</h2>
        <h1 className="text-3xl font-semibold mb-4">Take Care Of Your Health And It Will Be Take Care Of You...</h1>
        <p>Leading Healthcare Provider</p>
        <p>We priotize your health and well-being</p>
        <button className="border-1 rounded-md mx-2 px-4 py-1 bg-transparent text-white">Learn More</button>
        <button className="border-1 rounded-md mx-2 px-4 py-1 bg-blue-500 text-white">Book Appointment</button>
      </div>
      <div id="right-section" className="justify-end">
        <Image
          className=""
          src="/assets/Doctor_Home.png"
          alt="Doctor_Home"
          width={800}
          height={600}
        />
      </div>
    </div>
  );
}
