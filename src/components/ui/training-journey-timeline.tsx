'use client';
import { ReactLenis } from 'lenis/react';
import { useTransform, motion, useScroll, MotionValue } from 'motion/react';
import { useRef, useState, useEffect } from 'react';

interface StageData {
    title: string;
    label: string;
    description: string;
    tools: { name: string; status: string }[];
    color: string;
    accent?: string;
}

interface CardProps extends StageData {
    i: number;
    progress: MotionValue<number>;
    range: [number, number];
    targetScale: number;
}

const Card = ({
    i,
    title,
    label,
    description,
    tools,
    color,
    accent,
    progress,
    range,
    targetScale,
}: CardProps) => {
    const container = useRef(null);
    const scale = useTransform(progress, range, [1, targetScale]);

    return (
        <div
            ref={container}
            className='h-screen flex items-center justify-center sticky top-0 font-sans'
        >
            <motion.div
                style={{
                    backgroundColor: color,
                    scale,
                    top: `calc(-5vh + ${i * 25}px)`,
                    borderTop: accent ? `4px solid ${accent}` : '1px solid rgba(255,255,255,0.05)',
                }}
                className={`flex flex-col relative -top-[25%] h-[500px] w-[90%] md:w-[70%] rounded-2xl p-8 md:p-12 origin-top shadow-2xl border border-[var(--border-color)]`}
            >
                <div className="flex justify-between items-start mb-8">
                    <span className="text-[var(--coral)] font-mono text-sm tracking-widest uppercase">{label}</span>
                    <span className="text-[var(--text-dim)] text-xs font-mono">Stage 0{i + 1}</span>
                </div>

                <h2 className='text-3xl md:text-4xl font-bold text-[#e8eaf0] mb-6 tracking-tight leading-tight'>
                    {title}
                </h2>
                <p className='text-lg md:text-xl text-[var(--text-secondary)] max-w-2xl leading-relaxed mb-auto'>
                    {description}
                </p>

                <div className="mt-8 border-t border-[rgba(255,255,255,0.05)] pt-6">
                    <p className="text-xs text-[var(--text-dim)] uppercase tracking-wider mb-3">surgic.ai tools at this stage</p>
                    <div className="flex flex-wrap gap-3">
                        {tools.map((t, idx) => (
                            <div key={idx} className="flex items-center gap-2 px-3 py-1.5 rounded bg-[#0a0c10] border border-[var(--border-color)]">
                                <span className="text-sm text-[#e8eaf0] font-medium">{t.name}</span>
                                <span className={`text-[10px] px-1.5 py-0.5 rounded-sm ${t.status === 'Live' ? 'bg-green-900/30 text-green-400' : 'bg-yellow-900/30 text-yellow-500'}`}>
                                    {t.status}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export function TrainingJourneyTimeline() {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end end'],
    });

    const stages: StageData[] = [
        {
            label: "Medical Student",
            title: "Learning the Language",
            description: "Before you can make decisions, you need the vocabulary. Anatomy, pathology, imaging interpretation. Most students learn from static case banks that run out, and textbooks that can't adapt to what they don't yet understand.",
            tools: [
                { name: "Generative Radiology", status: "Planned" },
                { name: "MARCUS", status: "Live" }
            ],
            color: "#12151c",
        },
        {
            label: "Intern",
            title: "Surviving the System",
            description: "Intern year is information overload. Institutional protocols, medication dosing, drain management — none of it is in a textbook. The knowledge that matters most is the knowledge that's hardest to find.",
            tools: [
                { name: "MARCUS", status: "Live" },
                { name: "DrainBow", status: "In Dev" }
            ],
            color: "#151923",
        },
        {
            label: "Junior Resident",
            title: "Building Judgment",
            description: "You start operating. You start making calls. The gap widens between what you know in theory and what you can execute under pressure. Simulation is limited to expensive labs and rare cadaver sessions.",
            tools: [
                { name: "OP REPORT", status: "In Dev" },
                { name: "MARCUS", status: "Live" }
            ],
            color: "#1a1e28",
        },
        {
            label: "Senior Resident",
            title: "Proving Competence",
            description: "Oral boards are coming. You're expected to lead the OR and demonstrate mastery on standardized exams that test how you think out loud. The format matters as much as the content.",
            tools: [
                { name: "Surgical Boards Practice", status: "In Dev" },
                { name: "MARCUS", status: "Live" },
                { name: "OP REPORT", status: "In Dev" }
            ],
            color: "#1e2330",
        },
        {
            label: "Fellow & Attending",
            title: "Leading with Clarity",
            description: "You've passed the technical tests. Now the hardest parts are the conversations — navigating goals of care, mentoring trainees. These skills are taught by osmosis if they're taught at all.",
            tools: [
                { name: "Goals of Care", status: "Planned" },
                { name: "MARCUS", status: "Live" }
            ],
            color: "#232836",
            accent: "#f97066"
        }
    ];

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => {
            window.removeEventListener("resize", checkMobile);
        };
    }, []);

    return (
        <main ref={container} className="relative z-10 w-full overflow-hidden">
            <section className="h-auto md:h-[40vh] w-full flex flex-col items-center justify-center text-center px-4 py-20 md:py-0">
                <h2 className="text-3xl md:text-5xl font-bold text-[#e8eaf0] mb-6">Surgery is a cognitive discipline <br /> as much as a technical one.</h2>
                <p className="text-lg text-[#9ba1b8] max-w-[700px]">Every stage of training demands different knowledge, different skills, and different support. No single tool covers the journey. An ecosystem does.</p>

                <div className="mt-12 py-6 border-y border-[rgba(255,255,255,0.05)] max-w-[650px]">
                    <p className="text-base text-[#9ba1b8] italic">
                        Surgeons today are constrained less by skill than by fragmented knowledge,
                        institutional opacity, and cognitive overload. Every tool in this platform
                        is designed to remove a specific barrier — while keeping clinical judgment
                        and responsibility exactly where they belong: with the surgeon.
                    </p>
                </div>
            </section>

            <section className='text-white w-full px-4 md:px-0 pb-20 md:pb-0'>
                {stages.map((stage, i) => {
                    const targetScale = 1 - (stages.length - i) * 0.05;
                    if (isMobile) {
                        return (
                            <div key={`p_${i}`} className="mb-8 last:mb-0">
                                <div
                                    className="flex flex-col relative w-full rounded-2xl p-6 border border-[var(--border-color)]"
                                    style={{
                                        backgroundColor: stage.color,
                                        borderTop: stage.accent ? `4px solid ${stage.accent}` : '1px solid var(--border-color)',
                                    }}
                                >
                                    <div className="flex justify-between items-start mb-6">
                                        <span className="text-[var(--coral)] font-mono text-sm tracking-widest uppercase">{stage.label}</span>
                                        <span className="text-[var(--text-dim)] text-xs font-mono">Stage 0{i + 1}</span>
                                    </div>

                                    <h2 className='text-2xl font-bold text-[#e8eaf0] mb-4 tracking-tight leading-tight'>
                                        {stage.title}
                                    </h2>
                                    <p className='text-base text-[var(--text-secondary)] leading-relaxed mb-6'>
                                        {stage.description}
                                    </p>

                                    <div className="border-t border-[rgba(255,255,255,0.05)] pt-4">
                                        <div className="flex flex-wrap gap-2">
                                            {stage.tools.map((t, idx) => (
                                                <div key={idx} className="flex items-center gap-2 px-2 py-1 rounded bg-[#0a0c10] border border-[var(--border-color)]">
                                                    <span className="text-xs text-[#e8eaf0] font-medium">{t.name}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    }
                    return (
                        <Card
                            key={`p_${i}`}
                            i={i}
                            {...stage}
                            progress={scrollYProgress}
                            range={[i * 0.25, 1]}
                            targetScale={targetScale}
                        />
                    );
                })}
            </section>
            {!isMobile && <div className="h-[20vh]" />}
        </main>
    );
}
