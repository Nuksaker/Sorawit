"use client"

import { useState, useRef, useEffect } from "react"
import { useLanguage } from "@/components/language-provider"
import { motion } from "framer-motion"
import { projects } from "@/data/projects"
import { ProjectModal } from "@/components/modal/project-modal"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

export function Projects() {
    const { t, language } = useLanguage()
    const [selectedProject, setSelectedProject] = useState<Project | null>(null)
    const [isModalOpen, setIsModalOpen] = useState(false)
    // ดึงข้อมูลโปรเจกต์ตามภาษา
    const localizedProjects = projects[language] || []
    const firstRowProjects = localizedProjects.slice(Math.ceil(localizedProjects.length / 2))
    const secondRowProjects = localizedProjects.slice(0, Math.ceil(localizedProjects.length / 2))

    const openProjectModal = (project: Project) => {
        setSelectedProject(project)
        setIsModalOpen(true)
    }

    const closeProjectModal = () => {
        setIsModalOpen(false)
    }


    return (
        <section id="projects" className="py-16">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
            >
                <h2 className="text-3xl font-bold text-center mb-12 text-slate-900 dark:text-white">
                    <span className="inline-block border-b-4 border-blue-500 pb-2">
                        {t("sections.projects")}
                    </span>
                </h2>

                <div className="space-y-12">
                    <AutoScrollingRow
                        projects={firstRowProjects}
                        direction={firstRowProjects.length <= 3 ? 'left' : 'right'}
                        openProjectModal={openProjectModal}
                    />
                    <AutoScrollingRow
                        projects={secondRowProjects}
                        direction={secondRowProjects.length <= 3 ? 'left' : 'right'}
                        openProjectModal={openProjectModal}
                    />
                </div>
            </motion.div>

            <ProjectModal
                project={selectedProject}
                isOpen={isModalOpen}
                onClose={closeProjectModal}
            />
        </section>
    )
}

function AutoScrollingRow({
    projects,
    direction,
    openProjectModal
}: AutoScrollingRowProps) {
    const scrollRef = useRef<HTMLDivElement>(null)
    const [isHovered, setIsHovered] = useState(false)
    const { t } = useLanguage()
    const displayProjects = [...projects, ...projects]

    // คำนวณความกว้างของ card และ gap เพื่อใช้ในการเลื่อน
    const cardWidth = 288; // w-72 = 18rem = 288px
    const gapWidth = 24;  // gap-6 = 1.5rem = 24px
    const scrollAmount = cardWidth + gapWidth;

    // เพิ่มฟังก์ชันสำหรับเลื่อนไปทางซ้ายและขวา
    const scrollLeft = (e: React.MouseEvent) => {
        e.stopPropagation(); // ป้องกันการเรียก openProjectModal
        if (!scrollRef.current) return;

        // เลื่อนไปทางซ้าย scrollAmount pixels
        scrollRef.current.scrollBy({
            left: -scrollAmount,
            behavior: 'smooth'
        });

        // ตรวจสอบและแก้ไขการเลื่อนเมื่อถึงจุดสิ้นสุด
        setTimeout(() => {
            if (!scrollRef.current) return;
            const currentScroll = scrollRef.current.scrollLeft;
            const maxScroll = scrollRef.current.scrollWidth / 2;

            // ถ้าเลื่อนถึงจุดเริ่มต้น ให้กระโดดไปจุดกลาง
            if (currentScroll < 50) {
                scrollRef.current.scrollLeft = maxScroll;
            }
        }, 500); // รอให้ animation เสร็จสิ้น
    }

    const scrollRight = (e: React.MouseEvent) => {
        e.stopPropagation(); // ป้องกันการเรียก openProjectModal
        if (!scrollRef.current) return;

        // เลื่อนไปทางขวา scrollAmount pixels
        scrollRef.current.scrollBy({
            left: scrollAmount,
            behavior: 'smooth'
        });

        // ตรวจสอบและแก้ไขการเลื่อนเมื่อถึงจุดสิ้นสุด
        setTimeout(() => {
            if (!scrollRef.current) return;
            const currentScroll = scrollRef.current.scrollLeft;
            const maxScroll = scrollRef.current.scrollWidth / 2;

            // ถ้าเลื่อนเกินจุดกลาง ให้กระโดดกลับไปจุดเริ่มต้น
            if (currentScroll >= maxScroll - 50) {
                scrollRef.current.scrollLeft = 0;
            }
        }, 500); // รอให้ animation เสร็จสิ้น
    }

    useEffect(() => {
        if (!scrollRef.current || isHovered) return
        let animationId: number
        let startTime: number
        const speed = direction === "left" ? 1 : -1 // pixels per millisecond
        const scroll = (timestamp: number) => {
            if (!scrollRef.current) return
            if (!startTime) startTime = timestamp
            const currentScroll = scrollRef.current.scrollLeft
            const maxScroll = scrollRef.current.scrollWidth / 2

            // Reset scroll position when we've scrolled through the first set of items
            if ((direction === "left" && currentScroll >= maxScroll) ||
                (direction === "right" && currentScroll <= 0)) {
                scrollRef.current.scrollLeft = direction === "left" ? 0 : maxScroll
            } else {
                scrollRef.current.scrollLeft += speed
            }

            animationId = requestAnimationFrame(scroll)
        }

        animationId = requestAnimationFrame(scroll)

        return () => {
            cancelAnimationFrame(animationId)
        }
    }, [direction, isHovered])

    return (
        <div className="relative group">
            {/* ปุ่มเลื่อนไปทางซ้าย */}
            {/* <button
                onClick={scrollLeft}
                className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white/80 dark:bg-slate-800/80 p-2 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white dark:hover:bg-slate-700"
                aria-label="Scroll left"
            >
                <ChevronLeft className="w-5 h-5 text-slate-900 dark:text-white" />
            </button> */}

            <div
                ref={scrollRef}
                className="overflow-x-hidden"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <div className="flex gap-6 py-2">
                    {displayProjects.map((project, index) => (
                        <div
                            key={`${project.id}-${index}`}
                            className="flex-shrink-0 w-72 cursor-pointer group/card"
                            onClick={() => openProjectModal(project)}
                        >
                            <div className="relative h-48 rounded-lg overflow-hidden mb-2 shadow-md transition-transform group-hover/card:shadow-lg group-hover/card:scale-105">
                                <Image
                                    src={project.image || "/placeholder.svg"}
                                    alt={project.title}
                                    fill
                                    className="object-cover transition-transform group-hover/card:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity flex items-end">
                                    <div className="p-4 text-white">
                                        <p className="font-medium">{t("projects.viewDetails")}</p>
                                    </div>
                                </div>
                            </div>
                            <h3 className="font-medium text-slate-900 dark:text-white truncate">{project.title}</h3>
                        </div>
                    ))}
                </div>
            </div>

            {/* ปุ่มเลื่อนไปทางขวา */}
            {/* <button
                onClick={scrollRight}
                className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white/80 dark:bg-slate-800/80 p-2 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white dark:hover:bg-slate-700"
                aria-label="Scroll right"
            >
                <ChevronRight className="w-5 h-5 text-slate-900 dark:text-white" />
            </button> */}
        </div>
    )
}