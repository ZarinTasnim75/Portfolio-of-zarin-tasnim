const projects = [
  {
  id: "studypilot",

  title: "StudyPilot",

  image: "/projects/studypilot.png",

  tech: [
    "Next.js 16",
    "TypeScript",
    "Tailwind CSS",
    "Node.js",
    "Express.js",
    "MongoDB Atlas",
    "TanStack Query",
    "Better Auth",
    "JWT",
    "Google Gemini API",
    "Recharts"
  ],

  description:
    "StudyPilot is a full-stack AI-powered learning platform designed to help students learn more efficiently through intelligent study tools and personalized assistance. It combines Agentic AI workflows with secure authentication, responsive dashboards, and modern web technologies to deliver an interactive and scalable learning experience.",

  live: "https://studypilot-client-orpin.vercel.app",

  github: "https://github.com/ZarinTasnim75/Studypilot-client",

  challenges: [
    "Designing and integrating Agentic AI workflows capable of generating structured study content based on user prompts.",
    "Building a context-aware AI chat assistant with multi-turn conversations, chat history, streaming responses, and intelligent follow-up suggestions.",
    "Implementing secure authentication using Better Auth, JWT, and Google OAuth while protecting both client and server routes.",
    "Managing asynchronous data fetching, caching, and synchronization efficiently using TanStack Query.",
    "Developing a responsive dashboard with filtering, sorting, infinite scrolling, and dynamic course management while maintaining excellent performance."
  ],

  future: [
    "AI-powered study planner with personalized learning schedules.",
    "Flashcard and quiz generation using AI.",
    "Voice-based AI tutor for interactive learning.",
    "Collaborative study groups with real-time chat.",
    "Learning progress analytics and performance tracking.",
    "Support for multiple AI providers beyond Google Gemini."
  ]
},

 {
  id: "arthub",

  title: "ArtHub",

  image: "/projects/arthub.png",

  tech: [
    "Next.js 16",
    "React",
    "Tailwind CSS",
    "DaisyUI",
    "Node.js",
    "Express.js",
    "MongoDB Atlas",
    "JWT",
    "Better Auth",
    "Stripe",
    "ImgBB API"
  ],

  description:
    "ArtHub is a full-stack online artwork marketplace where artists can showcase and manage their artwork while buyers can discover, search, and explore creative collections. The platform features secure authentication, role-based dashboards for users, artists, and administrators, subscription payments with Stripe, image hosting through ImgBB, and a fully responsive modern user interface built with Next.js.",

  live: "https://arthub-client-seven.vercel.app",

  github: "https://github.com/ZarinTasnim75/ArtHub",

  challenges: [
    "Implementing role-based authentication and authorization for Users, Artists, and Administrators using Better Auth and JWT.",
    "Integrating Stripe Checkout for subscription plans and synchronizing payment status with the MongoDB database.",
    "Managing image uploads efficiently using the ImgBB API while ensuring secure file handling.",
    "Building responsive dashboards with protected routes and dynamic data fetching for different user roles.",
    "Implementing advanced artwork search, filtering, sorting, pagination, and maintaining smooth application performance."
  ],

  future: [
    "Add real-time messaging between artists and buyers.",
    "Implement artwork reviews and ratings.",
    "Introduce wishlist and favorite artwork collections.",
    "Develop an artwork auction and bidding system.",
    "Provide sales analytics and performance insights for artists.",
    "Integrate AI-powered artwork recommendations based on user preferences."
  ]
},

  {
  id: "mediflow",

  title: "MediFlow",

  image: "/projects/mediflow.png",

  tech: [
    "Next.js 16",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Framer Motion",
    "Node.js",
    "Express.js",
    "MongoDB Atlas",
    "JWT",
    "Bcrypt"
  ],

  description:
    "MediFlow is a full-stack Hospital Management System designed to simplify doctor discovery, appointment booking, and healthcare management. The application features secure authentication, role-based access control, responsive dashboards for patients and administrators, advanced doctor search and filtering, and an intuitive modern user interface.",

  live: "https://medi-flow-five-mu.vercel.app",

  github: "https://github.com/ZarinTasnim75/MediFlow",

  challenges: [
    "Designing a secure JWT authentication system with role-based authorization for patients and administrators.",
    "Building responsive dashboards while maintaining a consistent user experience across desktop, tablet, and mobile devices.",
    "Implementing efficient doctor search, department filtering, sorting by consultation fee and rating, and appointment booking workflows.",
    "Managing MongoDB relationships between users, doctors, and appointments while keeping API responses optimized.",
    "Handling loading states, protected routes, and API communication to provide a smooth user experience."
  ],

  future: [
    "Doctor availability and schedule management.",
    "Online payment gateway integration.",
    "Video consultation support.",
    "Email and SMS appointment notifications.",
    "Patient medical history and prescription management.",
    "Advanced analytics dashboard for administrators."
  ]
}
];

export default projects;