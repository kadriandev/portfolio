import Image from 'next/image';
import { Card, CardContent, CardDescription, CardTitle } from "./ui/card";
import { Drawer, DrawerTrigger, DrawerContent, DrawerHeader, DrawerTitle, DrawerDescription, DrawerFooter, DrawerClose } from "./ui/drawer";
import { ReactNode } from 'react';
import { Badge } from './ui/badge';

const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];

export interface ExperienceCardProps {
    company: string;
    address: string;
    imageSrc: string;
    jobTitle: string;
    from: Date;
    to: Date;
    skills?: Array<string>;
    children: ReactNode | Array<ReactNode>
}

export function ExperienceCard({
    company,
    address,
    imageSrc,
    jobTitle,
    from,
    to,
    skills = [],
    children
}: ExperienceCardProps) {

    const getDate = (date: Date) => date.setHours(0, 0, 0, 0) != new Date().setHours(0, 0, 0, 0) ?
        `${months[date.getMonth()]} ${date.getFullYear()}` : 'Present';

    return (
        <Drawer>
            <DrawerTrigger className="shadow-2xl odd:shadow-violet-500 even:shadow-teal-500">
                <Card className={`h-80 bg-stone-800 min-w-[350px] max-w-[375px] scale-[1.02] hover:scale-110 transition-transform`}>
                    <CardContent className="p-0">
                        <Image
                            className="rounded-t-2xl h-[175px]"
                            src={imageSrc}
                            alt={`${company} Logo`}
                            width={600}
                            height={300}
                        />
                        <div className="p-4 mt-6">
                            <CardTitle className="mb-2">{jobTitle}</CardTitle>
                            <CardDescription>{`${getDate(from)} - ${getDate(to)}`}</CardDescription>
                        </div>
                    </CardContent>
                </Card>
            </DrawerTrigger>
            <DrawerContent>
                <div className="mx-auto w-full max-w-full">
                    <DrawerHeader>
                        <Image
                            className="rounded-2xl mb-4 w-full"
                            src={imageSrc}
                            alt={`${company} Logo`}
                            width={500}
                            height={300}
                        />
                        <DrawerTitle className="text-center">{`${jobTitle} at ${company}`}</DrawerTitle>
                        <DrawerDescription className="text-center">
                            {`${getDate(from)} - ${getDate(to)}, ${address}`}
                        </DrawerDescription>
                    </DrawerHeader>
                    <div className={"px-3 grid grid-cols-[3fr_1fr] gap-x-8"}>
                        <h2 className="font-semibold mb-4">Description</h2>
                        <h2 className="font-semibold mb-4">Skills</h2>
                        <div className={"[&>*]:mb-4"}>
                            {children}
                        </div>
                        <div>
                            {skills.map(s => (
                                <Badge
                                    key={s}
                                    className="m-1 bg-transparent border-white text-white hover:none"
                                >
                                    {s}
                                </Badge>
                            ))}
                        </div>
                    </div>
                    <DrawerFooter>
                        <DrawerClose>Close</DrawerClose>
                    </DrawerFooter>
                </div>
            </DrawerContent>
        </Drawer>
    );
}