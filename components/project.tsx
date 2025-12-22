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

    const [isDragging, setIsDragging] = useState(false)
    const [startX, setStartX] = useState(0)
    const [startScrollLeft, setStartScrollLeft] = useState(0)
    const scrollPosRef = useRef(0)

    useEffect(() => {
        if (!scrollRef.current || isDragging) return
        let animationId: number
        
        // Sync ref with current scroll position
        scrollPosRef.current = scrollRef.current.scrollLeft

        const speed = direction === "left" ? 0.4 : -0.4
        const scroll = () => {
            if (!scrollRef.current) return
            const maxScroll = scrollRef.current.scrollWidth / 2

            scrollPosRef.current += speed

            if (direction === "left" && scrollPosRef.current >= maxScroll) {
                scrollPosRef.current = 0
            } else if (direction === "right" && scrollPosRef.current <= 0) {
                scrollPosRef.current = maxScroll
            }

            scrollRef.current.scrollLeft = scrollPosRef.current
            animationId = requestAnimationFrame(scroll)
        }

        animationId = requestAnimationFrame(scroll)

        return () => {
            cancelAnimationFrame(animationId)
        }
    }, [direction, isDragging])

    const handleMouseDown = (e: React.MouseEvent) => {
        if (!scrollRef.current) return
        setIsDragging(true)
        setStartX(e.pageX - scrollRef.current.offsetLeft)
        setStartScrollLeft(scrollRef.current.scrollLeft)
    }

    const handleMouseUp = () => {
        setIsDragging(false)
        if (scrollRef.current) {
            scrollPosRef.current = scrollRef.current.scrollLeft
        }
    }

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!isDragging || !scrollRef.current) return
        e.preventDefault()
        const x = e.pageX - scrollRef.current.offsetLeft
        const walk = (x - startX) * 2 // Scroll speed multiplier
        const newScrollLeft = startScrollLeft - walk
        scrollRef.current.scrollLeft = newScrollLeft
        scrollPosRef.current = newScrollLeft
    }

    return (
        <div className="relative group">
            <div
                ref={scrollRef}
                className={`overflow-x-hidden ${isDragging ? "cursor-grabbing" : "cursor-grab"}`}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => {
                    setIsHovered(false)
                    setIsDragging(false)
                }}
                onMouseDown={handleMouseDown}
                onMouseUp={handleMouseUp}
                onMouseMove={handleMouseMove}
            >
                <div className="flex gap-8 py-6">
                    {displayProjects.map((project, index) => (
                        <motion.div
                            key={`${project.id}-${index}`}
                            className="flex-shrink-0 w-80 cursor-pointer group/card"
                            whileHover={{ y: -10 }}
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                            onClick={() => !isDragging && openProjectModal(project)}
                        >
                            <div className="relative h-52 rounded-2xl overflow-hidden mb-4 shadow-lg border border-slate-200/50 dark:border-slate-700/50 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm transition-all group-hover/card:shadow-2xl group-hover/card:border-blue-500/50">
                                <Image
                                    src={project.image || "/placeholder.svg"}
                                    alt={project.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover/card:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-0 group-hover/card:opacity-100 transition-all duration-300 flex flex-col justify-end p-6">
                                    <p className="text-white font-semibold text-lg transform translate-y-4 group-hover/card:translate-y-0 transition-transform duration-300">
                                        {t("projects.viewDetails")}
                                    </p>
                                    <div className="w-12 h-1 bg-blue-500 rounded-full mt-2 transform scale-x-0 group-hover/card:scale-x-100 transition-transform duration-300 origin-left" />
                                </div>
                            </div>
                            <div className="px-2">
                                <h3 className="font-bold text-slate-900 dark:text-white text-lg group-hover/card:text-blue-600 dark:group-hover/card:text-blue-400 transition-colors truncate">
                                    {project.title}
                                </h3>
                                <div className="flex gap-2 mt-2">
                                    {project.technologies.slice(0, 3).map((tech, idx) => (
                                        <span key={idx} className="text-xs px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    )
}