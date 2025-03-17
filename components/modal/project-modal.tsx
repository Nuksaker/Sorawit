"use client"

import { useLanguage } from "@/components/language-provider"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, X } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"

export function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
    const { t } = useLanguage()

    if (!project) return null

    return (
        <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
            <DialogContent className="sm:max-w-3xl max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                    <div className="flex items-center justify-between">
                        <DialogTitle className="text-2xl font-bold text-blue-600 dark:text-blue-400">{project.title}</DialogTitle>
                        {/* ใช้ปุ่มปิด <X /> ของคุณเอง */}
                        <Button variant="ghost" size="icon" onClick={onClose} className="absolute right-4 top-4">
                            <X className="h-4 w-4" />
                            <span className="sr-only">{t("etc.close")}</span>
                        </Button>
                    </div>
                </DialogHeader>

                <div className="mt-4 space-y-6">
                    <div className="relative w-full h-64 sm:h-80 overflow-hidden rounded-lg border shadow-sm">
                        {
                            project.url !== '-' ? (
                                <a href={project.url} target="_blank">
                                    <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
                                </a>
                            ) : (
                                <div>
                                    <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
                                </div>
                            )
                        }
                    </div>
                    <div>
                        <h3 className="text-lg font-medium text-slate-900 dark:text-white mb-2">{t("projects.description")}</h3>
                        <DialogDescription className="text-base text-slate-700 dark:text-slate-300">
                            {project.description}
                        </DialogDescription>
                    </div>

                    <div>
                        <h3 className="text-lg font-medium text-slate-900 dark:text-white mb-2">{t("projects.technologies")}</h3>
                        <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech, index) => (
                                <motion.span
                                    key={index}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.3, delay: index * 0.05 }}
                                    className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 px-3 py-1 rounded-full text-sm"
                                >
                                    {tech}
                                </motion.span>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 className="text-lg font-medium text-slate-900 dark:text-white mb-2">{t("projects.role")}</h3>
                        <p className="text-slate-700 dark:text-slate-300">{project.role}</p>
                    </div>

                    <div className="flex flex-wrap gap-4 pt-2">
                        {project.url && project.url != '-' && (
                            <Button asChild>
                                <a href={project.url} target="_blank" rel="noopener noreferrer">
                                    <ExternalLink className="mr-2 h-4 w-4" />
                                    {t("projects.visitSite")}
                                </a>
                            </Button>
                        )}
                        {/* {project.github && (
                            <Button variant="outline" asChild>
                                <a href={project.github} target="_blank" rel="noopener noreferrer">
                                    <Github className="mr-2 h-4 w-4" />
                                    {t("projects.viewCode")}
                                </a>
                            </Button>
                        )} */}
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    )
}

