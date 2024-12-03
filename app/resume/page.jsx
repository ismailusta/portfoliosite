"use client";
import { FaHtml5, FaCss3, FaJs, FaReact, FaAndroid } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiFlutter } from "react-icons/si";

const about = {
    title: "About me",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia consectetur cumque nesciunt assumenda optio?",
    info: [
        {
            fieldName: "Name",
            fieldValue: "Ismail Usta"
        },
        {
            fieldName: "Phone",
            fieldValue: "(+90) 536 565 33 61"
        },
        {
            fieldName: "Experience",
            fieldValue: "2+ Years"
        },
        {
            fieldName: "Email",
            fieldValue: "ismail.usta028@gmail.com"
        },
        {
            fieldName: "Nationality",
            fieldValue: "Turkish"
        },
        {
            fieldName: "Languages",
            fieldValue: "English,Turkish"
        },

    ]
};
// experince data
const experince = {
    icon: "/assets/assets/resume/badge.svg",
    title: "My experience",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia consectetur cumque nesciunt assumenda optio?",
    items: [
        {
            company: "Bistek Software",
            position: "Intern",
            duration: "3 month",
        },
        {
            company: "AGILE Academy",
            position: "Intern",
            duration: "1 month",
        }, {
            company: "Bistek Software",
            position: "Intern",
            duration: "3 month",
        },
        {
            company: "AGILE Academy",
            position: "Intern",
            duration: "1 month",
        }, {
            company: "Bistek Software",
            position: "Intern",
            duration: "3 month",
        },
        {
            company: "AGILE Academy",
            position: "Intern",
            duration: "1 month",
        },

    ]
}
// education data
const education = {
    icon: "/assets/assets/resume/cap.svg",
    title: "My education",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia consectetur cumque nesciunt assumenda optio?",
    items: [
        {
            company: "BTK Academy",
            degree: "Kotlin Android Development",
            duration: "2023",
        },
        {
            company: "Udemy",
            degree: "Flutter App Development",
            duration: "2022",
        },
        {
            company: "Turkcell Academy",
            degree: "Linux education",
            duration: "2024",
        },
        {
            company: "Turkcell Academy",
            degree: "Cyber Security",
            duration: "2022",
        },
    ]
};
// skills data
const skills = {
    title: "My skills",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia consectetur cumque nesciunt assumenda optio?",
    skillList: [
        {
            icon: <FaHtml5></FaHtml5>,
            name: "html 5",
        },
        {
            icon: <FaCss3></FaCss3>,
            name: "css 3",
        }, {
            icon: <FaJs></FaJs>,
            name: "javascript",
        }
        , {
            icon: <FaReact></FaReact>,
            name: "react.js",
        }
        , {
            icon: <SiNextdotjs></SiNextdotjs>,
            name: "next.js",
        }
        , {
            icon: <SiTailwindcss></SiTailwindcss>,
            name: "tailwind.css",
        },
        {
            icon: <FaAndroid></FaAndroid>,
            name: "android",
        },
        {
            icon: <SiFlutter></SiFlutter>,
            name: "flutter",
        },
    ]
};
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const Resume = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: {
                    delay: 2.4, duration: 0.4, ease: "easeIn",
                },
            }}
            className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
        >
            <div className="container mx-auto">
                <Tabs defaultValue="experience"
                    className="flex flex-col xl:flex-row gap-[60px]">
                    <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
                        <TabsTrigger value="experience">Experience
                        </TabsTrigger>
                        <TabsTrigger value="education">Education
                        </TabsTrigger>
                        <TabsTrigger value="skills">Skills
                        </TabsTrigger>
                        <TabsTrigger value="about">About me
                        </TabsTrigger>
                    </TabsList>
                    {/*content*/}
                    <div className="min-h-[70vh] w-full">
                        <TabsContent value
                            ="experience" className="w-full">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-4xl font-bold">{experince.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{experince.description}</p>
                                <ScrollArea className="h-[400px]">
                                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                        {experince.items.map((item, index) => {
                                            return <li key={index}
                                                className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex
                                            flex-col justify-center items-center lg:items-start gap-1">
                                                <span className="text-accent">
                                                    {item.duration}
                                                </span>
                                                <h3 className="text-xl max-w-[260px] min-h-[60px]
                                                text-center lg:text-left">
                                                    {item.position}
                                                </h3>
                                                <div className="flex items-center gap-3">
                                                    <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                    <p className="text-white/60">
                                                        {item.company}
                                                    </p>
                                                </div>
                                            </li>
                                        })}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>
                        <TabsContent value
                            ="education" className="w-full">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-4xl font-bold">{education.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{education.description}</p>
                                <ScrollArea className="h-[400px]">
                                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                        {education.items.map((item, index) => {
                                            return <li key={index}
                                                className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex
                                            flex-col justify-center items-center lg:items-start gap-1">
                                                <span className="text-accent">
                                                    {item.duration}
                                                </span>
                                                <h3 className="text-xl max-w-[260px] min-h-[60px]
                                                text-center lg:text-left">
                                                    {item.degree}
                                                </h3>
                                                <div className="flex items-center gap-3">
                                                    <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                    <p className="text-white/60">
                                                        {item.company}
                                                    </p>
                                                </div>
                                            </li>
                                        })}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent><TabsContent value
                            ="skills" className="w-full h-full">
                            <div className="flex flex-col gap-[30px]">
                                <div>
                                    <h3>{skills.title}</h3>
                                    <p>{skills.description}</p>
                                </div>
                            </div>
                        </TabsContent><TabsContent value
                            ="about" className="w-full">
                            about
                        </TabsContent>
                    </div>
                </Tabs>
            </div>
        </motion.div>
    )
}

export default Resume