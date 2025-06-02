import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center bg-background text-foreground font-serif p-6">
      <Image
        src="/profile.png" // Replace with your image in public/
        alt="Profile"
        width={260}
        height={260}
        className="rounded-lg mb-6 object-cover grayscale"
      />
      <h1 className="text-4xl font-bold mb-2 tracking-wide">Hi, I'm Pranay🤠</h1>
      <p className="text-lg text-gray-500 mb-6">Math-CS @ UCSD | Aspiring MLE</p>
      <section className="w-full max-w-4xl mb-8">
        <h2 className="text-2xl font-semibold mb-2">About Me:</h2>
        <p className="text-lg text-gray-700">I'm a Math-CS student at UC San Diego, focused on systems programming, optimization, and applied machine learning. I'm especially interested in building scalable tools and pipelines that solve real-world problems. Recently, I've contributed to projects involving web scraping, data visualization, and statistical modeling. I also worked as an instructional assistant, tutoring students in math, chemistry, and Python.</p>
      </section>
    </div>
  );
}
