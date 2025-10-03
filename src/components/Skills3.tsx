// import React from "react";
// import { Layout, Server, Database, MessageSquare } from "lucide-react";
// import type { LucideIcon } from "lucide-react";

// type Category = {
//   title: string;
//   icon: LucideIcon;
//   skills: string[];
// };

// const categories: Category[] = [
//   {
//     title: "Frontend Development",
//     icon: Layout,
//     skills: ["React", "Next.js", "TypeScript", "TailwindCSS"],
//   },
//   {
//     title: "Backend Development",
//     icon: Server,
//     skills: ["Node.js", "NestJS", "Express", "Laravel"],
//   },
//   {
//     title: "Database",
//     icon: Database,
//     skills: ["PostgreSQL", "MongoDB", "MySQL", "Redis"],
//   },
//   {
//     title: "Messaging & Realtime",
//     icon: MessageSquare,
//     skills: ["Socket.io", "Kafka", "RabbitMQ", "Firebase"],
//   },
// ];

// const Skills: React.FC = () => {
//   return (
//     <section className="py-16 bg-gray-900 text-white">
//       <div className="container mx-auto px-6">
//         <h2 className="text-4xl font-bold mb-12 text-center text-brand">
//           My Skills
//         </h2>

//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
//           {categories.map(({ title, icon: Icon, skills }) => (
//             <div
//               key={title}
//               className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-transform hover:scale-105 group 
//                          hover:shadow-[0_0_20px_4px_rgba(40,200,255,0.4)]" // ✅ cyan glow on hover
//             >
//               {/* Icon with hover animation */}
//               <Icon
//                 size={36}
//                 className="text-brand mb-4 transition-colors duration-300 group-hover:text-accent"
//               />

//               <h3 className="text-xl font-semibold mb-3">{title}</h3>
//               <ul className="space-y-2 text-sm text-gray-300">
//                 {skills.map((s) => (
//                   <li key={s} className="flex items-center gap-2">
//                     <span className="w-2 h-2 bg-brand rounded-full group-hover:bg-accent transition-colors duration-300"></span>
//                     {s}
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Skills;





import React from "react";
import { Layout, Server, Database, MessageSquare } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Category = {
  title: string;
  icon: LucideIcon;
  skills: string[];
};

const categories: Category[] = [
  {
    title: "Frontend Development",
    icon: Layout,
    skills: ["React", "Next.js", "TypeScript", "TailwindCSS"],
  },
  {
    title: "Backend Development",
    icon: Server,
    skills: ["Node.js", "NestJS", "Express", "Laravel"],
  },
  {
    title: "Database",
    icon: Database,
    skills: ["PostgreSQL", "MongoDB", "MySQL", "Redis"],
  },
  {
    title: "Messaging & Realtime",
    icon: MessageSquare,
    skills: ["Socket.io", "Kafka", "RabbitMQ", "Firebase"],
  },
];

const Skills: React.FC = () => {
  return (
    <section className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-center text-brand">
          My Skills
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {categories.map(({ title, icon: Icon, skills }) => (
            <div
              key={title}
              className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-transform hover:scale-105 group 
                         hover:shadow-[0_0_20px_4px_rgba(40,200,255,0.4)]" // ✅ cyan glow on hover
            >
              {/* Icon with hover animation */}
              <Icon
                size={36}
                className="text-brand mb-4 transition-colors duration-300 group-hover:text-accent"
              />

              <h3 className="text-xl font-semibold mb-3">{title}</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                {skills.map((s) => (
                  <li key={s} className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-brand rounded-full group-hover:bg-accent transition-colors duration-300"></span>
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
 