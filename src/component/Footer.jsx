import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import { Cards4, Cards5 } from "./shared/Card";
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import Crud from './Crud';


export default function Footer() {
    const id = React.useId();

    return (
        <>
            <div style={{ borderColor: "#1F1F1F", marginBottom: '100px', marginLeft: '12px' }} className="w-[98.5%] gap-2 border rounded-2xl p-6">
                <div style={{ marginBottom: '20px' }} className="w-[100%] flex justify-between items-center bg-[#141414] rounded-2xl px-10 py-8">
                    <h1 className="text-white text-[25px] sm:text-[40px] font-semibold uppercase">
                        Testimonials
                    </h1>
                </div>
                <div className="flex-wrap sm:flex gap-4">
                    <Cards4 />
                    <Cards4 />
                    <Cards4 />
                    <Cards4 />
                </div>
            </div>

            <Crud />

            <div style={{ marginBottom: '20px', marginLeft: "12px" }} className="w-[98.5%] bg-[#141414] rounded-2xl px-10 py-8">
                <h1 className="text-white text-[25px] sm:text-[40px] font-semibold uppercase">
                    Frequently Asked Questions
                </h1>
            </div>

            <div className="flex-wrap sm:flex gap-6" style={{ marginLeft: '12px', marginBottom: '80px' }}>
                <div className="flex-1 min-w-[300px]">
                    <Accordion sx={{ width: '98%', marginBottom: '5px', padding: '15px', backgroundColor: '#1A1A1A', color: 'white' }}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}
                            aria-controls={`${id}-panel1-content`}
                            id={`${id}-panel1-header`}
                        >
                            <Typography sx={{ fontSize: '22px' }} component="h2">What services does NexGen offer?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            NexGen offers a comprehensive suite of digital solutions, including Web Design, Web Development, Mobile App Development, and Digital Marketing.
                        </AccordionDetails>
                    </Accordion>
                    <Accordion sx={{ width: '98%', marginBottom: '5px', padding: '15px', backgroundColor: '#1A1A1A', color: 'white' }}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}
                            aria-controls={`${id}-panel2-content`}
                            id={`${id}-panel2-header`}
                        >
                            <Typography sx={{ fontSize: '22px' }} component="h2">How do I start a project with NexGen?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            You can start by contacting us through our contact form, and our team will get in touch with you to discuss your project requirements.
                        </AccordionDetails>
                    </Accordion>
                    <Accordion sx={{ width: '98%', marginBottom: '5px', padding: '15px', backgroundColor: '#1A1A1A', color: 'white' }}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}
                            aria-controls={`${id}-panel3-content`}
                            id={`${id}-panel3-header`}
                        >
                            <Typography sx={{ fontSize: '22px' }} component="h2">What is the typical timeline for a project?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            The timeline varies depending on the project scope and complexity. Typically, a standard website project takes 4 to 8 weeks.
                        </AccordionDetails>
                    </Accordion>
                    <Accordion sx={{ width: '98%', marginBottom: '5px', padding: '15px', backgroundColor: '#1A1A1A', color: 'white' }}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}
                            aria-controls={`${id}-panel4-content`}
                            id={`${id}-panel4-header`}
                        >
                            <Typography sx={{ fontSize: '22px' }} component="h2">Do you provide post-launch support?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            Yes, we provide ongoing support and maintenance services to ensure your digital solutions run smoothly.
                        </AccordionDetails>
                    </Accordion>

                    <Accordion sx={{ width: '98%', marginBottom: '5px', padding: '15px', backgroundColor: '#1A1A1A', color: 'white' }}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}
                            aria-controls={`${id}-panel5-content`}
                            id={`${id}-panel5-header`}
                        >
                            <Typography sx={{ fontSize: '22px' }} component="h2">How much does a project cost?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            Our pricing depends on the specific services and requirements of your project. We offer customized quotes after the initial consultation.
                        </AccordionDetails>
                    </Accordion>
                </div>

                <div className="w-full max-w-xl bg-[#161616] p-8 rounded-2xl font-sans text-left border border-gray-900 shadow-xl">
                    <h2 className="text-white text-xl font-bold tracking-wide uppercase mb-6">
                        Ask a Question
                    </h2>
                    <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
                        <div className="flex flex-col gap-2">
                            <label className="text-gray-400 text-xs font-bold tracking-widest uppercase">
                                Name
                            </label>
                            <input
                                type="text"
                                placeholder="Enter your name"
                                className="w-full bg-[#0F0F0F] text-gray-200 placeholder-gray-600 text-sm px-4 py-3.5 rounded-xl border border-gray-800/40 focus:border-gray-700 focus:outline-none transition-colors"
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="text-gray-400 text-xs font-bold tracking-widest uppercase">
                                Email
                            </label>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full bg-[#0F0F0F] text-gray-200 placeholder-gray-600 text-sm px-4 py-3.5 rounded-xl border border-gray-800/40 focus:border-gray-700 focus:outline-none transition-colors"
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="text-gray-400 text-xs font-bold tracking-widest uppercase">
                                Your Question
                            </label>
                            <textarea
                                rows="5"
                                placeholder="Enter your question"
                                className="w-full bg-[#0F0F0F] text-gray-200 placeholder-gray-600 text-sm px-4 py-3.5 rounded-xl border border-gray-800/40 focus:border-gray-700 focus:outline-none transition-colors resize-none"
                            ></textarea>
                        </div>

                        <div className="pt-2">
                            <button
                                type="submit"
                                className="w-full bg-[#CD856C] hover:bg-[#BC765D] text-black font-bold text-sm tracking-wide py-4 rounded-xl transition-colors cursor-pointer"
                            >
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>
            </div>

            <div style={{ marginLeft: '1%', marginTop: '80px', marginBottom: '20px' }} className="w-[98.5%] bg-[#CD856C] p-8 sm:p-12 rounded-3xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6 text-left font-sans mx-auto my-6">
                <div className="max-w-2xl space-y-3">
                    <h2 className="text-black text-2xl sm:text-4xl font-bold tracking-tight uppercase leading-tight">
                        Ready to Transform Your Digital Presence?
                    </h2>
                    <p className="text-black/80 text-sm sm:text-base font-medium leading-relaxed">
                        Take the first step towards digital excellence. Contact NexGen today.
                    </p>
                </div>
                <Button
                    variant="contained"
                    endIcon={<ArrowOutwardIcon className="w-4 h-4" />}
                    sx={{
                        backgroundColor: '#111111',
                        color: '#ffffff',
                        fontWeight: 'bold',
                        fontSize: '14px',
                        textTransform: 'uppercase',
                        padding: '14px 28px',
                        borderRadius: '12px',
                        fontFamily: 'inherit',
                        whiteSpace: 'nowrap',
                        boxShadow: 'none',
                        '&:hover': {
                            backgroundColor: '#1A1A1A',
                            boxShadow: 'none',
                        },
                    }}
                >
                    Get in touch
                </Button>
            </div>

            <div style={{ marginLeft: '14px', marginBottom: '20px' }} className='flex flex-col lg:flex-row items-center gap-'>
                <div className='flex-wrap flex sm:w-[50%] gap-3'>
                    <Cards5 />
                    <Cards5 />
                    <Cards5 />
                    <Cards5 />
                </div>

                <div>
                    <div className="w-full sm:w-[99%] bg-[#111111] p-10 rounded-3xl font-sans text-left my-6">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">

                            <div className="flex flex-col gap-4">
                                <h3 className="text-white text-lg font-bold tracking-wide">Home</h3>
                                <ul className="flex flex-col gap-3 text-gray-500 text-sm font-medium">
                                    <li className="hover:text-white transition-colors cursor-pointer">Why Us</li>
                                    <li className="hover:text-white transition-colors cursor-pointer">About Us</li>
                                    <li className="hover:text-white transition-colors cursor-pointer">Testimonials</li>
                                    <li className="hover:text-white transition-colors cursor-pointer">FAQs</li>
                                </ul>
                            </div>

                            <div className="flex flex-col gap-4">
                                <h3 className="text-white text-lg font-bold tracking-wide">Services</h3>
                                <ul className="flex flex-col gap-3 text-gray-500 text-sm font-medium">
                                    <li className="hover:text-white transition-colors cursor-pointer">Web Development</li>
                                    <li className="hover:text-white transition-colors cursor-pointer">App Development</li>
                                    <li className="hover:text-white transition-colors cursor-pointer">Web Design</li>
                                    <li className="hover:text-white transition-colors cursor-pointer">Digital Marketing</li>
                                </ul>
                            </div>

                            <div className="flex flex-col gap-4">
                                <h3 className="text-white text-lg font-bold tracking-wide">Projects</h3>
                                <ul className="flex flex-col gap-3 text-gray-500 text-sm font-medium">
                                    <li className="hover:text-white transition-colors cursor-pointer">Klothink</li>
                                    <li className="hover:text-white transition-colors cursor-pointer">Zenith</li>
                                    <li className="hover:text-white transition-colors cursor-pointer">Novus</li>
                                    <li className="hover:text-white transition-colors cursor-pointer">Apex</li>
                                </ul>
                            </div>

                            <div className="flex flex-col gap-4">
                                <h3 className="text-white text-lg font-bold tracking-wide">Blogs</h3>
                                <ul className="flex flex-col gap-3 text-gray-500 text-sm font-medium">
                                    <li className="hover:text-white transition-colors cursor-pointer">Business</li>
                                    <li className="flex items-center gap-2 group cursor-pointer">
                                        <span className="group-hover:text-white transition-colors">Design</span>
                                        <span className="bg-[#1A1A1A] text-gray-400 text-[11px] font-semibold px-2 py-0.5 rounded-md border border-gray-800">
                                            Soon
                                        </span>
                                    </li>
                                    <li className="flex items-center gap-2 group cursor-pointer">
                                        <span className="group-hover:text-white transition-colors">Development</span>
                                        <span className="bg-[#1A1A1A] text-gray-400 text-[11px] font-semibold px-2 py-0.5 rounded-md border border-gray-800">
                                            Soon
                                        </span>
                                    </li>
                                </ul>
                            </div>

                        </div>
                    </div><br />
                    <div style={{ marginBottom: '25px' }} className="w-[99%] bg-[#141414] p-8 sm:p-8 rounded-3xl flex flex-col md:flex-row items-start md:items-center justify-between gap-8 text-left font-sans mx-auto border border-gray-900 shadow-xl">
                        <div className="flex flex-col gap-2">
                            <span className="text-gray-500 text-xs font-bold  uppercase">
                                Newsletter
                            </span>
                            <h2 className="text-white text-xl sm:text-1xl font-bold tracking-wide uppercase">
                                Subscribe to our Newsletter
                            </h2>
                        </div>
                        <div className="w-full md:w-auto flex items-center gap-4 flex-1 max-w-xl md:justify-end">
                            <TextField
                                variant="standard"
                                placeholder="Enter your email"
                                fullWidth
                                InputProps={{
                                    disableUnderline: false,
                                }}
                                sx={{
                                    input: {
                                        color: '#ffffff',
                                        fontSize: '16px',
                                        fontFamily: 'inherit',
                                        paddingBottom: '12px'
                                    },
                                    '& .MuiInput-underline:before': {
                                        borderBottomColor: '#262626',
                                        borderBottomWidth: '1.5px'
                                    },
                                    '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
                                        borderBottomColor: '#404040'
                                    },
                                    '& .MuiInput-underline:after': {
                                        borderBottomColor: '#CD856C'
                                    },
                                }}
                            />
                            <IconButton
                                sx={{
                                    width: '52px',
                                    height: '52px',
                                    backgroundColor: '#1A1A1A',
                                    border: '1px solid #262626',
                                    color: '#CD856C',
                                    shrink: 0,
                                    '&:hover': {
                                        backgroundColor: '#262626',
                                        color: '#ffffff',
                                        borderColor: '#404040'
                                    },
                                    transition: 'all 0.2s ease-in-out'
                                }}
                            >
                                <ArrowOutwardIcon sx={{ fontSize: '20px' }} />
                            </IconButton>
                        </div>
                    </div>
                    <div style={{ marginBottom: '20px' }} className="w-[98.5%] bg-[#111111] p-6 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-gray-500 border border-gray-900 mx-auto">
                        <div>
                            © 2026 NexGen. All rights reserved.
                        </div>
                        <div className="flex items-center gap-4">
                            <span className="hover:text-gray-300 transition-colors cursor-pointer">Terms of Service</span>
                            <span className="text-gray-800">|</span>
                            <span className="hover:text-gray-300 transition-colors cursor-pointer">Privacy Policy</span>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}