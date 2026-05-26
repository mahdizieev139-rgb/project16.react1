import Button from '@mui/material/Button';
import img1 from '../assets/Button (2).png';
import SouthIcon from '@mui/icons-material/South';

export default function Header() {
    return (
        <>
            <div className="bg-[#0F0F0F] p-3 mb-4">
                <nav className="bg-[#1A1A1A] rounded-2xl px-8 py-4 flex items-center justify-between">
                    <h1 className="text-[#E7DED9] text-4xl font-semibold">
                        NexGen
                    </h1>
                    <div className="flex items-center gap-4 hidden sm:flex">
                        <button className="bg-[#0B0B0B] text-[#8A8A8A] px-5 py-3 rounded-xl text-sm">
                            Home
                        </button>
                        <button className="bg-[#0B0B0B] text-[#8A8A8A] px-5 py-3 rounded-xl text-sm">
                            Services
                        </button>
                        <button className="bg-[#0B0B0B] text-[#8A8A8A] px-5 py-3 rounded-xl text-sm">
                            Projects
                        </button>
                        <button className="bg-[#0B0B0B] text-[#8A8A8A] px-5 py-3 rounded-xl text-sm">
                            About
                        </button>
                        <button className="bg-[#0B0B0B] text-[#8A8A8A] px-5 py-3 rounded-xl text-sm">
                            Careers
                        </button>
                        <button className="bg-[#0B0B0B] text-[#8A8A8A] px-5 py-3 rounded-xl text-sm">
                            Blogs
                        </button>
                        <Button variant="contained" color="warning" size='large'>Contact</Button>
                    </div>
                    <div className="sm:hidden cursor-pointer">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="21" y1="10" x2="7" y2="10"></line>
                            <line x1="21" y1="6" x2="3" y2="6"></line>
                            <line x1="21" y1="14" x2="11" y2="14"></line>
                            <line x1="21" y1="18" x2="3" y2="18"></line>
                        </svg>
                    </div>
                </nav>
            </div>

            <div className="flex flex-wrap gap-4 pb-10">
                <div style={{ marginLeft: '12px' }} className='bg-[#1A1A1A] p-5 w-[97%] sm:w-[61%] sm:h-[500px] rounded-2xl'>
                    <h1 className='text-white text-4xl flex gap-4 font-medium sm:text-6xl' style={{ marginTop: '13%' }}>
                        Unlock Your Potential<img className="hidden sm:block" src={img1} alt="" />
                    </h1>
                    <h1 className="text-4xl sm:text-6xl text-white font-medium">in the Digital World</h1><br />
                </div>
                <div className="w-full max-w-[540px] mx-auto p-6 bg-[#1A1A1A] rounded-3xl flex flex-col items-center gap-6">
                    <div className='text-white p-6'>
                        <h1 className='text-4xl'>At NexGen</h1><br />
                        <p className='text-[17px] text-gray-400'>We believe in fostering a dynamic and collaborative work environment that empowers our team members to excel in their respective fields. Join us to be part of a passionate and innovative team dedicated to crafting exceptional digital solutions for clients across the globe. We are committed to nurturing talent, encouraging professional growth, and creating a workplace where creativity thrives.</p>
                    </div>
                    <Button
                        variant="text"
                        startIcon={
                            <span className="flex items-center justify-center w-9 h-9 rounded-full border border-gray-800 text-[#DA9E8B]">
                                <SouthIcon sx={{ fontSize: '16px' }} />
                            </span>
                        }
                        sx={{
                            color: '#ffffff',
                            fontWeight: 'medium',
                            fontSize: '13px',
                            padding: "12px",
                            letterSpacing: '0.05em',
                            textTransform: 'uppercase',
                            '&:hover': {
                                backgroundColor: '#111111',
                                opacity: 0.8
                            },
                        }}
                    >
                        Know More
                    </Button>
                </div>
            </div>

        </>
    )
}