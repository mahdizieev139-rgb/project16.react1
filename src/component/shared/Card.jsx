import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import SouthIcon from '@mui/icons-material/South';
import img1 from "../../assets/Button (4).png";
import img2 from "../../assets/Icon Container (2).png";
import img3 from "../../assets/Image (3).png";
import img4 from "../../assets/Icon Container (3).png";
import img5 from "../../assets/Container (2).png";
import img6 from "../../assets/Icon Container (5).png";

export function Cards2({ head, text, price }) {
    return (
        <Card className='w-full sm:w-[716px] h-[450px] sm:h-[350px]' sx={{ padding: '10px', backgroundColor: "#1A1A1A", borderRadius: "20px", color: "white" }}>
            <CardContent>
                <Typography gutterBottom className='flex-wrap sm:flex' component="div" sx={{ fontSize: "30px", alignItems: 'center', justifyContent: 'space-between' }}>
                    <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}><img src={img2} alt="" /> {head} </div>
                    <Button size="small" sx={{ display: 'flex', gap: '10px', color: 'inherit' }}>
                        <img className='w-[52px]' src={img1} alt="" />Lean More
                    </Button>
                </Typography>
                <Typography variant="body1" sx={{ color: '#B3B3B2', fontSize: "16px" }} component="div">
                    {text}
                </Typography>
            </CardContent>
            <CardActions className='ml-2 sm:ml-[30px]' sx={{ fontSize: '30px' }}>
                {price}
            </CardActions>
        </Card>
    );
}

export function Card2({ head }) {
    return (
        <Card className='w-full sm:w-[716px] h-[450px] sm:h-[350px]' sx={{ padding: '10px', backgroundColor: "#1A1A1A", borderRadius: "20px", color: "white" }}>
            <CardContent>
                <Typography gutterBottom className='flex-wrap sm:flex' component="div" sx={{ fontSize: "30px", alignItems: 'center', justifyContent: 'space-between' }}>
                    <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>{head} </div>
                    <Button size="small" sx={{ display: 'flex', gap: '10px', color: 'inherit' }}>
                        <img className='w-[52px]' src={img1} alt="" />Lean More
                    </Button>
                </Typography>
            </CardContent>
            <div className="flex gap-4">
                <img className="w-[330px] h-[200px]" src={img5} alt="" />
                <img className="w-[330px] h-[200px]" src={img5} alt="" />
            </div>
        </Card>
    );
}

export function Cards3({ name, category, category1, category2 }) {
    return (
        <Card className='w-full sm:w-[700px] h-[480px] sm:h-[350px]' sx={{ padding: '10px', backgroundColor: "#1A1A1A", borderRadius: "20px", color: "white" }}>
            <CardContent>
                <Typography gutterBottom className='flex-wrap sm:flex' component="div" sx={{ fontSize: "25px", alignItems: 'center', justifyContent: 'space-between' }}>
                    <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}><img src={img2} alt="" />{name}</div>
                    <Button size="small" sx={{ display: 'flex', gap: '10px', color: 'inherit' }}>
                        <img className='w-[52px]' src={img1} alt="" />View Details
                    </Button>
                </Typography>
                <div className="py-3 rounded-xl flex w-fit gap-3 font-sans">
                    <div className="flex items-center gap-2 bg-[#1F1F1F] px-3 py-2 rounded-full w-fit">
                        <span className="text-gray-400 text-sm font-medium">Salary</span>
                        <span className="text-gray-500 text-xs">•</span>
                        <span className="text-white text-sm font-semibold tracking-wide">
                            {category}
                        </span>
                    </div> <br />
                    <div className="flex items-center gap-2 bg-[#1F1F1F] px-3 py-2 rounded-full w-fit">
                        <span className="text-gray-400 text-sm font-medium">Experience</span>
                        <span className="text-gray-500 text-xs">•</span>
                        <span className="text-white text-sm font-semibold tracking-wide">
                            {category1}
                        </span>
                    </div>
                    <div className="flex items-center gap-2 bg-[#1F1F1F] px-3 py-2 rounded-full w-fit">
                        <span className="text-gray-400 text-sm font-medium">Deadline</span>
                        <span className="text-gray-500 text-xs">•</span>
                        <span className="text-white text-sm font-semibold tracking-wide">
                            {category2}
                        </span>
                    </div>
                </div>
            </CardContent>
            <Typography sx={{ paddingLeft: '18px', marginBottom: '8px', fontSize:'20px' }}>
                SKILLS
            </Typography>
            <Typography sx={{ paddingLeft: '18px' }}>
                An all-in-one health and wellness app that offers personalized <br /> fitness plans, nutrition guidance, and virtual workout classes.
            </Typography><br />
            <Button size="medium" sx={{ display: 'flex', gap: '10px', color: "black", marginLeft: "18px", width: '630px', height: '54px', borderRadius: "15px", backgroundColor: '#CE7D63' }}>
                Apply NoW
            </Button>
        </Card>
    );
}

export function Cards4() {
    return (
        <Card sx={{ width: '350px', height: "350px", padding: '4px', backgroundColor: "#1A1A1A", borderRadius: "20px", color: "white" }}>
            <CardContent>
                <Typography gutterBottom sx={{ fontSize: "30px" }} component="div">
                    NexGen turned our business around!
                </Typography>
                <Typography variant="body1" sx={{ color: '#B3B3B2', fontSize: "15px" }} component="div">
                    Their digital marketing strategies helped us <br />
                    reach new customers and increase our
                    <br />revenue by 30% within just a few months.<br />Highly recommended!
                </Typography>
            </CardContent>
            <CardActions>
                <div className="w-full bg-[#1A1A1A] p-5 rounded-b-2xl flex items-center justify-between border-t border-gray-800/50 font-sans">
                    <div className="flex items-center gap-4">
                        <div className="w-14 h-14 rounded-full overflow-hidden bg-[#E2B4A4] shrink-0">
                            <img src={img3} alt="Sarah Thompson" className="w-full h-full object-cover" />
                        </div>
                        <div className="flex flex-col text-left">
                            <span className="text-white text-base font-semibold tracking-wide">
                                Sarah Thompson
                            </span>
                            <span className="text-gray-500 text-sm mt-0.5">
                                ceo_bluebloom
                            </span>
                        </div>
                    </div>
                    <button className="w-12 h-12 rounded-full border border-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:border-gray-600 transition-colors bg-transparent">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                        </svg>
                    </button>
                </div>
            </CardActions>
        </Card>
    );
}

export function Cards5() {
    return (
        <Card className='w-full sm:w-[360px] h-[320px] sm:h-[320px]' sx={{ padding: '10px', backgroundColor: "#1A1A1A", borderRadius: "20px", color: "white" }}>
            <CardContent>
                <Typography gutterBottom className='flex' component="div" sx={{ fontSize: "30px", alignItems: 'center', justifyContent: 'space-between' }}>
                    <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}><img src={img4} alt="" /></div>
                    <Button size="small" sx={{ display: 'flex', gap: '10px', color: 'inherit' }}>
                        <img className='w-[52px]' src={img1} alt="" />
                    </Button>
                </Typography><br /><br />
                <Typography variant="body1" sx={{ fontSize: "30px" }} component="div">
                    INSTAGRAM
                </Typography>
            </CardContent>
            <CardActions className='ml-2 sm:ml-[30px]' sx={{ color: '#7a7a76ff', fontSize: '20px' }}>
                Share visually appealing snippets of our latest web projects.
            </CardActions>
        </Card>
    );
}

export function Card5({ name, date }) {
    return (
        <Card className='w-full sm:w-[350px] h-[320px] sm:h-[320px]' sx={{ padding: '5px', backgroundColor: "#1A1A1A", borderRadius: "20px", color: "white" }}>
            <CardContent>
                <Typography gutterBottom className='flex' component="div" sx={{ fontSize: "30px", alignItems: 'center', justifyContent: 'space-between' }}>
                    <div className="inline-flex items-center gap-2 bg-[#1A1A1A] border border-[#262626] rounded-full px-4 py-2">
                        <span className="text-gray-400 text-base font-medium">
                            Date
                        </span>
                        <span className="text-[#DA9E8B] text-xs">
                            •
                        </span>
                        <span className="text-gray-200 text-base font-medium">
                            {date}
                        </span>
                    </div>
                    <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}><img src={img6} alt="" /></div>
                </Typography><br />
                <Typography variant="body1" sx={{ fontSize: "28px" }} component="div">
                    {name}
                </Typography>
            </CardContent>
            <CardActions className='ml-2 sm:ml-[30px]' sx={{ color: '#7a7a76ff', fontSize: '16px' }}>
                Every project begins with thorough research
                <br /> and strategic planning to ensure a holistic
                <br /> understanding of our clients' objectives.
            </CardActions>
        </Card>
    );
}

export function Card6({ name, date }) {
    return (
        <Card className='w-full sm:w-[350px] h-[320px] sm:h-[320px]' sx={{ paddingTop: '5px', paddingLeft: '5px', backgroundColor: "#1A1A1A", borderRadius: "20px", color: "white" }}>
            <CardContent>
                <Typography gutterBottom className='flex text-[#808080]' component="div" sx={{ alignItems: 'center', justifyContent: 'space-between' }}>
                    {date}
                </Typography>
                <Typography variant="body1" className="bg-[#262626] px-4 py-4 pr-[10px] w-[111%]" sx={{ marginLeft: '-20px', fontSize: "28px" }} component="div">
                    {name}
                </Typography>
            </CardContent>
            <CardActions className='ml-2 sm:ml-[30px]' sx={{ color: '#7a7a76ff', fontSize: '16px' }}>
                Every project begins with thorough research
                <br /> and strategic planning to ensure a holistic
                <br /> understanding of our clients' objectives.
            </CardActions><br />
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
        </Card>
    );
}