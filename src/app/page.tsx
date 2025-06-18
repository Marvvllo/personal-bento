import Image from "next/image";
import Link from "next/link";

export default function Home() {
	return (
		<main className="bg-background text-text main-grid flex flex-col gap-4 p-4 md:grid">
			{/* Intro Section */}
			<section className="hero-area bg-foreground text-accent flex flex-col gap-4 rounded-lg p-4 md:justify-center">
				<h1 className="text-xl md:text-2xl">
					<span className="text-text">Marvello Nyahu</span> is coding...
				</h1>
				<div className="flex flex-col gap-4 md:text-lg">
					<p className="text-accent">I am a web developer. </p>
					<p>I also like designing user interfaces.</p>
					<p>I think design and development go hand-in-hand.</p>
					<p>
						I think focusing on one over the other will make for a worse user
						experience.
					</p>
					<p>
						Some say “function over form” or “form over function” but I think
						both are equally as important.
					</p>
				</div>
			</section>

			{/* Skills Section */}
			<section className="skills-area bg-foreground text-text flex flex-col gap-4 rounded-lg p-4 md:justify-center">
				<h2 className="text-lg md:text-xl">The things I do...</h2>
				<div className="bg-background flex cursor-pointer flex-row items-center justify-center gap-1 rounded-md p-2 text-lg transition hover:bg-gray-300">
					<Image
						src="/react-logo.svg"
						alt="React Logo"
						width={30}
						height={30}
					/>
					<p>React</p>
				</div>
				<div className="flex cursor-pointer flex-row items-center justify-center gap-1 rounded-md bg-cyan-800 p-2 text-lg transition hover:bg-cyan-900">
					<Image
						src="/tailwind-logo.svg"
						alt="React Logo"
						width={30}
						height={30}
					/>
					<p className="text-background">Tailwind</p>
				</div>
				<div className="bg-text flex cursor-pointer flex-row items-center justify-center gap-1 rounded-md p-2 text-lg transition hover:bg-gray-900">
					<Image src="/next-logo.svg" alt="React Logo" width={30} height={30} />
					<p className="text-background">Next</p>
				</div>
				<div className="bg-background flex cursor-pointer flex-row items-center justify-center gap-1 rounded-md p-2 text-lg transition hover:bg-gray-300">
					<p>And learning more!</p>
				</div>
			</section>

			{/* Education Section */}
			<section className="education-area bg-foreground text-accent flex flex-col gap-4 rounded-lg p-4 md:justify-center">
				<h2 className="text-xl md:text-2xl">
					My <span className="text-text">Education</span>...
				</h2>
				<div className="flex flex-col gap-2 md:gap-4">
					<div className="flex flex-col">
						<p>Graduated as the best software engineer</p>
						<p className="text-text">
							@ Telkom Vocational High School Banjarbaru
						</p>
					</div>
					<div className="flex flex-col">
						<p>Obtained a Software Engineering bachelors degree</p>
						<p className="text-text">
							@ Ganesha University of Education
							<span className="text-red-500">*</span>
						</p>
					</div>
					<div className="flex flex-col">
						<p>Obtained a Computer Science master's degree</p>
						<p className="text-text">
							@ University of La Rochelle
							<span className="text-red-500">*</span>
						</p>
					</div>

					<p className="text-sm">
						<span className="text-red-500">*</span> Currently in progress!
					</p>
				</div>
			</section>

			{/* Career Section */}
			<section className="career-area bg-foreground text-accent flex flex-col gap-4 rounded-lg p-4 md:justify-center">
				<h2 className="text-xl md:text-2xl">
					My <span className="text-text">Career</span> so far...
				</h2>
				<div className="flex flex-col gap-2 md:gap-4 md:text-lg">
					<div className="flex flex-col">
						<p>
							Front-end Developer{" "}
							<span className="text-text">@ Telkom Indonesia</span>
						</p>
						<p>January - March 2023</p>
					</div>
					<div className="flex flex-col">
						<p>
							Front-end Engineer{" "}
							<span className="text-text">@ Neumedira Indonesia</span>
						</p>
						<p>July - October 2023</p>
					</div>
				</div>
			</section>

			{/* Instagram Section */}
			<section className="instagram-area bg-foreground text-text flex flex-col gap-4 rounded-lg p-4 md:items-center md:justify-center md:gap-4">
				<div className="flex w-full flex-row items-center gap-2">
					<Image
						className="size-6 rounded-full md:size-10"
						src="/ig-post.png"
						alt="Instagram Profile Picture"
						width={120}
						height={120}
					/>
					<p className="font-semibold md:text-xl">nyaivu</p>
				</div>
				<Link href="https://www.instagram.com/nyaivu/" target="_blank">
					<Image
						className="h-auto w-full md:w-[640px]"
						src="/ig-post.png"
						alt="Instagram Profile Picture"
						width={600}
						height={600}
					/>
				</Link>
				<p className="w-full md:text-lg">
					<span className="font-bold">nyaivu</span> stole your luvv, my bad
					yea... <span className="text-accent">more...</span>
				</p>
			</section>

			{/* Portfolio Section */}
			<section className="portfolio-area relative flex flex-col items-center justify-center overflow-hidden rounded-lg bg-[#1F1F1F]">
				<Image
					src="/portfolio-logo.png"
					alt="Portfolio LogoType"
					width={640}
					height={400}
				/>
				<Link
					className="bg-background absolute bottom-4 left-4 z-10 flex flex-row items-center gap-1 rounded-md px-2 py-1 transition hover:bg-slate-300"
					href="https://nyaivu.com"
					target="_blank">
					Portfolio{" "}
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={1.5}
						stroke="currentColor"
						className="size-5">
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
						/>
					</svg>
				</Link>
			</section>

			{/* Hobby Section */}
			<section className="hobby-area bg-foreground text-accent flex flex-col gap-4 rounded-lg p-4">
				<h2 className="text-xl md:text-2xl">
					In my <span className="text-text">free time</span>, I...
				</h2>
				<div className="flex flex-col gap-1 md:gap-2 md:text-lg">
					<p>play online games...</p>
					<Image
						className="rounded-md"
						src="/valorant.png"
						alt="Portfolio LogoType"
						width={640}
						height={400}
					/>
					<Image
						className="rounded-md"
						src="/rivals.jpeg"
						alt="Portfolio LogoType"
						width={640}
						height={400}
					/>
				</div>
				<p>attend French classes...</p>
				<Image
					className="rounded-md"
					src="/french.png"
					alt="Portfolio LogoType"
					width={640}
					height={400}
				/>
				<p>and anything else that piques my interest!</p>
			</section>

			<footer className="footer-area bg-foreground text-accent flex flex-col gap-4 rounded-lg p-4 md:justify-center">
				<h2 className="text-text text-xl">Footer</h2>
				<p>I guess this is the end...</p>
				<p>Want to work with me? You can find me on...</p>
				<div className="flex flex-row items-center gap-2">
					<svg
						fill="currentColor"
						width="200px"
						height="200px"
						viewBox="0 7 17.8 17.8"
						version="1.1"
						xmlns="http://www.w3.org/2000/svg"
						className="aspect-square h-6 w-6 transition-transform duration-300 group-hover:translate-x-1">
						<title>instagram</title>
						<path d="M14.48 11.28c0 0.48-0.4 0.84-0.84 0.84-0.48 0-0.84-0.4-0.84-0.84 0-0.48 0.4-0.84 0.84-0.84 0.44-0.040 0.84 0.36 0.84 0.84zM17.76 11.64v8.72c0 2.48-2.040 4.52-4.52 4.52h-8.72c-2.48 0-4.52-2.040-4.52-4.52v-8.72c0-2.48 2.040-4.52 4.52-4.52h8.72c2.52 0 4.52 2.040 4.52 4.52zM16.080 11.64c0-1.56-1.28-2.84-2.84-2.84h-8.72c-1.56 0-2.84 1.28-2.84 2.84v8.72c0 1.56 1.28 2.84 2.84 2.84h8.72c1.6 0 2.88-1.28 2.88-2.84l-0.040-8.72zM13.52 16c0-2.56-2.080-4.64-4.64-4.64s-4.64 2.080-4.64 4.64 2.080 4.64 4.64 4.64 4.64-2.080 4.64-4.64zM11.84 16c0 1.64-1.32 2.96-2.96 2.96s-2.96-1.32-2.96-2.96 1.32-2.96 2.96-2.96 2.96 1.32 2.96 2.96z"></path>
					</svg>
					<p>Instagram</p>
					<Link
						className="bg-background flex flex-row items-center gap-1 rounded-md px-2 py-1 transition hover:bg-slate-300"
						href="https://www.instagram.com/nyaivu/"
						target="_blank">
						@nyaivu
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
							stroke="currentColor"
							className="size-4">
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
							/>
						</svg>
					</Link>
				</div>
				<div className="flex flex-row items-center gap-2">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						className="text-text aspect-square h-6 w-6 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-black">
						<path
							fill="currentColor"
							d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
					</svg>
					<p>Github</p>
					<Link
						className="bg-background flex flex-row items-center gap-1 rounded-md px-2 py-1 transition hover:bg-slate-300"
						href="https://github.com/Marvvllo"
						target="_blank">
						marvvllo
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
							stroke="currentColor"
							className="size-4">
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
							/>
						</svg>
					</Link>
				</div>
			</footer>
		</main>
	);
}
