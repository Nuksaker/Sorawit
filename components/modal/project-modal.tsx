"use client"

import { useLanguage } from "@/components/language-provider"
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { VisuallyHidden } from "@radix-ui/react-visually-hidden"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, X } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"

export function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
    const { t } = useLanguage()

    if (!project) return null

    return (
        <Dialog open={isOpen} onOpenChange={(open: boolean) => !open && onClose()}>
            <DialogContent className="sm:max-w-3xl p-0 overflow-hidden border-none bg-white dark:bg-slate-900 rounded-3xl shadow-2xl flex flex-col max-h-[90vh]">
                {/* Top side: Image and Links */}
                <div className="relative w-full aspect-video md:h-80 bg-slate-100 dark:bg-slate-800 shrink-0">
                    <div className="relative h-full w-full group overflow-hidden">
                        <Image
                            src={project.image || "/placeholder.svg"}
                            alt={project.title}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                        
                        {/* Floating Action Bar */}
                        <div className="absolute bottom-6 left-6 right-6 flex gap-3">
                            {project.url && project.url !== '-' && (
                                <Button asChild className="rounded-full bg-white text-slate-900 hover:bg-white/90 shadow-lg transition-transform active:scale-95">
                                    <a href={project.url} target="_blank" rel="noopener noreferrer">
                                        <ExternalLink className="mr-2 h-4 w-4" />
                                        {t("projects.visitSite")}
                                    </a>
                                </Button>
                            )}
                        </div>
                    </div>
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={onClose}
                        className="absolute right-4 top-4 z-10 rounded-full bg-black/20 hover:bg-black/40 text-white backdrop-blur-md transition-all active:scale-90"
                    >
                        <X className="h-5 w-5" />
                    </Button>
                </div>

                {/* Bottom side: Content */}
                <div className="flex-1 p-8 md:p-12 overflow-y-auto">
                    <div className="flex justify-between items-start mb-6 md:mb-8">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <DialogTitle className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-2 leading-tight">
                                {project.title}
                            </DialogTitle>
                            <div className="h-1.5 w-20 bg-blue-600 rounded-full" />
                        </motion.div>
                    </div>

                    <div className="space-y-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                        >
                            <h3 className="text-sm font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-3">
                                {t("projects.description")}
                            </h3>
                            <DialogDescription className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-light">
                                {project.description}
                            </DialogDescription>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <h3 className="text-sm font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-3">
                                {t("projects.role")}
                            </h3>
                            <p className="text-slate-700 dark:text-slate-300 font-medium">
                                {project.role}
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                        >
                            <h3 className="text-sm font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-4">
                                {t("projects.technologies")}
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {project.technologies.map((tech, index) => (
                                    <span
                                        key={index}
                                        className="px-4 py-2 bg-blue-50 dark:bg-blue-900/10 text-blue-700 dark:text-blue-300 rounded-xl text-sm font-medium border border-blue-100 dark:border-blue-900/30 transition-transform hover:scale-105"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    )
}

