// Define TypeScript interfaces
interface Project {
    id: string;
    title: string;
    description: string;
    image: string;
    technologies: string[];
    link?: string;
    github?: string;
    [key: string]: any; // สำหรับ properties อื่นๆ ที่อาจมี
}

interface ProjectCarouselProps {
    projects: Project[];
    openProjectModal: (project: Project) => void;
}

interface ProjectModalProps {
    project: Project | null
    isOpen: boolean
    onClose: () => void
}

interface AutoScrollingRowProps {
    projects: Project[]
    direction: "left" | "right"
    openProjectModal: (project: Project) => void
}
