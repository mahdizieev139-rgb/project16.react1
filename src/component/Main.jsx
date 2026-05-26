import { Card6, Cards3 } from './shared/Card';

export default function Main() {
  return (
    <>
      <div style={{ borderColor: "#1F1F1F", marginBottom: '100px', marginLeft: '12px' }} className="w-[98.5%] gap-2 border rounded-2xl p-6">
        <div style={{ marginBottom: '20px' }} className="w-[100%] flex justify-between items-center bg-[#141414] rounded-2xl px-10 py-8">
          <h1 className="text-white text-[25px] sm:text-[40px] font-semibold uppercase">
            How to Apply
          </h1>
        </div>
        <div className="flex-wrap sm:flex gap-4">
          <Card6 name="Explore Job Listings" date="Step 01" />
          <Card6 name="Review Job Description" date="Step 02" />
          <Card6 name="Prepare Your Application" date="Step 03" />
          <Card6 name="Complete the Application" date="Step 04" />
          <Card6 name="Upload Your Documents" date="Step 05" />
          <Card6 name="Submit Your Application" date="Step 06" />
          <Card6 name="Application Review" date="Step 07" />
          <Card6 name="Interview Process" date="Step 08" />
        </div>
      </div>

      <div style={{ marginBottom: '20px', marginLeft: "12px" }} className="w-[98.5%] flex items-center justify-between bg-[#141414] rounded-2xl px-10 py-8">
        <h1 className="text-white text-[25px] sm:text-[40px] font-semibold uppercase">
          Join Our Team at NexGen
        </h1>
      </div>

      <div style={{ borderColor: "#1F1F1F", marginBottom: '10px', marginLeft: '12px' }} className="w-[98.5%] gap-2 flex-wrap sm:flex border rounded-2xl p-6">
        <Cards3 name="Web Designer" category="$45,000 - $60,000 per year" category1="1+ year" category2="30/09/2025" />
        <Cards3 name="Mobile App Developer" category="$55,000 - $75,000 per year" category1="2+ year" category2="15/10/2025" />
        <Cards3 name="Digital Marketing Specialist" category="$50,000 - $65,000 per year" category1="3+ year" category2="20/11/2025" />
        <Cards3 name="Project Manager" category="$60,000 - $80,000 per year" category1="5+ year" category2="05/12/2025" />
      </div>

    </>
  )
}
