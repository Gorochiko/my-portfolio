
import CinevieScreen from "../assets/cinevie-home.png" 
import CinevieMobile from "../assets/cinevie-mobile.png"
import CinevieDesk from "../assets/cinevie-desk.png"
import KoreanScreen from "../assets/korean-screen.png"
import KoreanMobile from "../assets/mobile-korean.png"
import KoreanDesk from "../assets/korean-desk.png"
export const projectData = {
    "design-projects": {
        title: "Design projects",
        subtitle: "Subtitle",
        description:
            "Explore my collection of innovative design projects that blend functionality with aesthetic appeal. Each project represents a unique challenge solved through thoughtful design thinking and user-centered approaches.",
        heroGradient: "from-[#01071a] via-[#000588] to-[#b6d2ff]",
        sections: [
            {
                title: "Project title",
                subtitle: "and some additional information",
                content:
                    "Explore what your project is about, what your goals were, and how you achieved them. This section provides context and background for your creative process.",
                details:
                    "This approach allows you to tell a story using a variety of content blocks and layouts to showcase your detailed creative process.",
            },
        ],
    },
    "mobile-projects": {
        title: "Mobile projects",
        subtitle: "Subtitle",
        description:
            "Discover my portfolio of mobile development projects that highlight my skills in creating seamless and engaging mobile experiences. From intuitive user interfaces to robust backend integrations, each project showcases my ability to deliver high-quality mobile applications.",
        heroGradient: "from-green-400 via-blue-500 to-purple-600",
        sections: [
            {
                title: "Project title",
                subtitle: "and some additional information",
                content:
                    "Explore what your project is about, what your goals were, and how you achieved them. This section provides context and background for your development process.",
                details:
                    "This approach allows you to tell a story using a variety of content blocks and layouts to showcase your detailed development process.",
            },
        ],
    },
    "web-projects": {
        title: "Web Development Projects",
        subtitle: "Full-stack applications & interactive experiences",
        description:
            "Explore my collection of web development projects showcasing modern technologies, responsive design, and user-centered development. Each project demonstrates technical expertise and creative problem-solving in the digital space.",
        heroGradient: "from-rose-500 via-pink-500 to-violet-500",
        sections: [
            {
                title: "Korean Learning Admin Dashboard",
                subtitle: "NextJS, NestJS, Real-time Updates, MongoDB, Tailwind CSS, Shadcn UI",
                content:
                    "Develop an admin web for a Korean language learning application. Responsible for managing lesson content, quizzes, and user information.",
                details:
                    "Setup Turborepo manage projects mono-repo. Integrate CKEditor 5 to create a rich text editor, allowing users to easily manage and format their posts. Added multi-language support using i18n with 8 languages. Integrate MyMemory translation API to develop automatic translation features for content. Additional functions such as Voice Input and Text to Speech have been built to improve the user experience. Manage lessons, quizzes, and analyze user data. Use the new features of Next.js such as Server Components and the revalidate option to cache data from the API. This not only helps reduce server load but also ensures that content is always updated and displayed quickly to users.",
                tech: ["NextJS", "NestJS", "MongoDB", "Shadcn/UI", "Tailwind CSS", "CKEditor 5", "i18n", "MyMemory API"],
                liveUrl: "https://korean-learning-app-admin.vercel.app",
                githubUrl: "https://github.com/nttaif/korean-learning-app",
                image_url_screen: KoreanScreen,
                image_url_mobile: KoreanMobile,
                image_url_desktop: KoreanDesk,
            },
            {
                title: "Movie Booking Web App",
                subtitle: "Next.js, TypeScript, Tailwind CSS, NestJS, MongoDB",
                content:
                    "Built a full-stack movie booking platform with authentication, real-time seat selection, payment integration, and admin dashboard for managing movies, showtimes, and revenue. Applied RESTful APIs and Clean Architecture principles.",
                details:
                    "Built a full-stack movie ticket booking platform with secure authentication using Auth.js and JWT. Implemented ticket booking flow including real-time seat selection, payment integration, and checkout process. Built Admin Dashboard to manage: Movies, Cinemas & Rooms, Showtimes, Users, Tickets Revenue reports by movie and cinema. After successful checkout, an email confirmation is sent to the customer with booking details and a QR code for ticket verification. Integrated RESTful APIs with Axios, and applied role-based access control. Applied best practices using SOLID and Clean Architecture.",
                tech: ["Next.js", "TypeScript", "NestJS", "MongoDB", "Tailwind CSS", "Auth.js"],
                liveUrl: "https://cinevie-two.vercel.app",
                githubUrl: "https://github.com/Gorochiko/Cinevie",
                image_url_screen: CinevieScreen,
                image_url_mobile: CinevieMobile,
                image_url_desktop: CinevieDesk,
            },

        ],
    }
}