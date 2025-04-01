import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between min-h-screen p-4 circuit-bg screen-overlay">
      {/* Red seizure banner */}
      <div className="w-full bg-red-700 py-4 md:py-6 mb-6 md:mb-8 text-center text-white text-2xl md:text-4xl font-bold tracking-wider border-b-4 border-gray-300 relative z-10">
        THIS WEBSITE HAS BEEN SEIZED
      </div>

      <div className="max-w-4xl w-full mx-auto bg-gradient-to-b from-blue-950 to-gray-900 rounded-lg p-4 md:p-8 border border-blue-800 shadow-2xl relative z-10">
        {/* Main content */}
        <div className="flex flex-col items-center space-y-6 md:space-y-8">
          {/* Scrap Mechanic Chapter 2 text */}
          <div className="text-center mb-4 md:mb-6">
            <h1 className="text-2xl md:text-5xl font-bold text-red-400 mb-2">
              SCRAP MECHANIC
            </h1>
            <h2 className="text-3xl md:text-7xl font-bold text-red-600 mb-2 md:mb-4">
              CHAPTER 2
            </h2>
            <h3 className="text-2xl md:text-5xl font-bold text-red-400">
              HAS BEEN SEIZED
            </h3>
          </div>

          {/* Seals */}
          <div className="flex justify-center items-center flex-wrap gap-x-8 my-4 md:my-8">
            <div className="w-36 h-36 md:w-48 md:h-48 relative">
              <Image
                src="/fbi-seal.png"
                alt="FBI Seal"
                fill
                style={{ objectFit: "contain" }}
              />
            </div>
            <div className="w-36 h-36 md:w-48 md:h-48 relative">
              <Image
                src="/swedish-police.svg"
                alt="Swedish Police"
                fill
                style={{ objectFit: "contain" }}
              />
            </div>
            <div className="h-36 md:h-48 relative w-96">
              <Image
                src="/europol.svg"
                alt="Europol"
                fill
                style={{ objectFit: "contain" }}
              />
            </div>
          </div>

          {/* Case number */}
          <div className="text-center w-full border-y border-blue-700 py-2 mb-4">
            <p className="text-yellow-400 font-mono text-sm md:text-base">
              CASE NUMBER: GLOB-04012025-SM2
            </p>
          </div>

          {/* Seizure text */}
          <div className="text-center max-w-3xl text-gray-200">
            <p className="mb-4 md:mb-6 text-base md:text-lg text-balance">
              The domain <span className="font-mono text-yellow-400">scrapmechanic.net/chapter-2</span> has been seized by the Gaming Law Enforcement Division
              in accordance with a seizure warrant issued pursuant to Title 18 U.S.C. § 1343 (Wire Fraud)
              by the United States District Court for the Northern District of Gaming.
            </p>

            <p className="mb-4 md:mb-6 text-sm md:text-base text-balance">
              This seizure was executed as part of an ongoing investigation into numerous violations of United States law related to the following:
            </p>

            <ul className="list-disc list-inside mb-4 md:mb-6 text-left space-y-1 md:space-y-2 text-sm md:text-base">
              <li>Excessive delayed development (4+ years)</li>
              <li>Failure to publish devblogs (over 2 years since last update)</li>
              <li>False promises of "coming soon" ™</li>
              <li>What happened to the scrapyard??</li>
              <li>YEARS OF PUTTING TWO TOILET PAPER ROLLS ON TOP OF EACH OTHER yet NO REAL-WORLD USE FOUND for PAPER TOWEL ROLLS</li>
              <li>Causing distress to the player community</li>
              <li>Unlawful withholding of game content</li>
              <li>Excessive reuse of "we're working on it" excuses</li>
              <li>Failure to publish .pdb files, holding back mod developers</li>
              <li className="text-yellow-300 font-semibold">UNAUTHORIZED FARMING DETECTED</li>
              <li>Failure to meet self-imposed release deadlines</li>
              <li>Not responding to vulnerability disclosures</li>
            </ul>

            <div className="border border-red-800 bg-red-950/30 p-3 md:p-4 rounded-md mt-3 md:mt-4 mb-4 md:mb-6">
              <h4 className="font-bold text-red-400 mb-2 text-left text-sm md:text-base">COURT RULING</h4>
              <p className="text-xs md:text-sm text-left">
                Following a thorough investigation, the developers have been sentenced to
                <span className="font-bold text-red-400"> 5 YEARS OF CRUNCH</span> with mandatory overtime
                until Chapter 2 is completed. The last recorded official communication was a devblog posted over
                2 years ago (<a href="https://store.steampowered.com/news/app/387990/view/4460348137459942969" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline">view evidence</a>).
              </p>
            </div>

            <div className="border border-yellow-800 bg-yellow-950/30 p-3 md:p-4 rounded-md mt-6 md:mt-8 mb-4 md:mb-6">
              <h4 className="font-bold text-yellow-400 mb-2 text-left text-sm md:text-base">NOTICE TO GAMING COMMUNITY</h4>
                <p className="text-xs md:text-sm text-left">
                The prolonged abuse of early access status is now classified as a <span className="text-yellow-300 font-semibold">LEVEL 5 GAMING FELONY</span>. 
                Scrap Mechanic Chapter 2's development timeline has officially entered the "Valve Time" zone, where deadlines are myths, 
                and updates are as rare as a <span className="text-yellow-300 font-semibold">golden component kit</span>. Authorities warn that such practices 
                may result in severe penalties, including <span className="text-red-400 font-bold">community rage-quits</span>, 
                <span className="text-red-400 font-bold">meme sanctions</span>, and <span className="text-red-400 font-bold">permanent loss of gamer street cred</span>.
                </p>
              <p className="text-xs md:text-sm text-left mt-2">
                Law enforcement received multiple reports of <span className="text-yellow-300 font-semibold">UNAUTHORIZED FARMING</span>,
                triggering large-scale raids by farmbots, haybots, and totebots. This constitutes a severe violation of agricultural regulations.
              </p>
            </div>

            <p className="text-xs md:text-sm mt-6 md:mt-8 text-gray-400">
              This is an <span className="">APRIL FOOLS</span> joke. The real Chapter 2 is
              still under development by Axolot Games :clueless:.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-6 md:mt-8 text-center text-xs md:text-sm text-gray-500 relative z-10">
        <p>© {new Date().getFullYear()} | This is a parody website created for April Fools Day.</p>
        <p>No relation to actual law enforcement agencies.</p>
      </div>
    </main>
  );
}
