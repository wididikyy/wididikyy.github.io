import Image from "next/image";

export function AboutSection() {
  return (
    <section>
      <div className="mb-8 md:mb-16">
        <div className="sm:mx-0">
          <Image
            src="/bg.webp"
            loading="eager"
            preload
            sizes="100vw"
            className="w-full shadow-sm rounded-lg object-cover max-h-[50vh] min-h-75 hover:shadow-md transition-shadow duration-200"
            width={1200}
            height={600}
            alt="Visually striking abstract composition, characterized by swirling teal and black hues that evoke a sense of dynamic movement. The dominant teal color is accentuated by subtle white highlights, adding depth and dimensionality to the overall design"
          />
        </div>
      </div>
      <div className="md:grid md:grid-cols-2 md:gap-x-16 mb-20 md:mb-28 items-start">
        <h3 className="mb-6 md:mb-0 text-4xl lg:text-6xl leading-tight">About Me</h3>
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <Image
              src="/avatar.webp"
              alt="Widi Diky"
              width={48}
              height={48}
              className="shrink-0 object-cover rounded-full bg-accent"
            />
            <span className="font-semibold text-lg">Widi Diky</span>
          </div>
          <p className="text-lg leading-relaxed">
            Front-End and Mobile Developer with 3+ years of experience building responsive, interactive, and scalable web and mobile applications. Skilled in React.js, Next.js, Laravel, Flutter, and REST API integration. Experienced in Agile development, team collaboration, and project delivery across HRMS systems, IPTV applications, company profile websites, and university data platforms.
          </p>
        </div>
      </div>
    </section>
  );
}
