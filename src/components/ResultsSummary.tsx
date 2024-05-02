import useResults from "@/hooks/useResults"
import Image from "next/image"

export default async function ResultsSummary() {
  const { results, average } = await useResults()

  const colorMap = {
    reaction: "text-reaction bg-reaction-light",
    memory: "text-memory bg-memory-light",
    verbal: "text-verbal bg-verbal-light",
    visual: "text-visual bg-visual-light",
  }

  return (
    <article className="md:drop-shadow-results flex w-full flex-col overflow-hidden bg-white md:w-fit md:flex-row md:rounded-[32px]">
      <section className="flex flex-col items-center gap-6 rounded-b-[32px] bg-gradient-to-b from-results-1 from-0% via-results-2 via-0% to-results-3 to-100% px-14 pb-10 pt-6 text-center md:gap-[28px] md:rounded-[32px] md:pb-[55px] md:pt-[38px]">
        <h1 className="text-lg font-bold leading-[23px] text-light-blue md:mb-[12px] md:text-2xl md:leading-[31px]">
          Your Results
        </h1>
        <div className="flex size-[140px] flex-col items-center justify-center rounded-full bg-gradient-to-b from-results-circle-1 to-results-circle-2 md:size-[200px] md:gap-1">
          <span className="text-[56px] font-extrabold leading-[72px] text-white md:text-[72px] md:leading-[72px]">
            {average}
          </span>
          <span className="text-base font-bold leading-[21px] text-light-blue opacity-[51.68%] md:text-lg md:leading-[23px]">
            of 100
          </span>
        </div>
        <section className="max-w-[260px]">
          <h2 className="mb-2 text-2xl font-bold leading-[31px] text-white md:text-[32px] md:leading-[42px]">
            Great
          </h2>
          <p className="text-base font-medium leading-[21px] text-light-blue md:text-lg md:leading-[23px]">
            Your performance exceed 65% of the people conducting the test here!
          </p>
        </section>
      </section>
      <section className="flex flex-col gap-6 bg-white px-[30px] pb-[30px] pt-6 md:px-10 md:pt-[38px]">
        <h3 className="text-lg font-bold leading-[24px] text-dark-navy md:mb-1 md:text-2xl md:leading-[31px]">
          Summary
        </h3>
        <ul className="felx-col flex flex-col gap-4 md:mb-[17px]">
          {results.map((result, index) => (
            <li
              className={
                "flex items-center justify-between rounded-xl px-4 pb-[18px] pt-[17px] md:w-[288px] " +
                colorMap[
                  result.category.toLocaleLowerCase() as keyof typeof colorMap
                ]
              }
              key={index}
            >
              <div
                className={
                  "flex items-center gap-3 font-medium leading-[21px] md:text-lg md:leading-[23px]"
                }
              >
                <Image
                  src={result.icon}
                  alt={result.category}
                  height={20}
                  width={20}
                  className={"size-5"}
                />
                {result.category}
              </div>
              <div className="font-bold leading-[21px] text-dark-navy md:text-lg md:leading-[23px]">
                {result.score}{" "}
                <span className="text-dark-navy opacity-50">/ 100</span>
              </div>
            </li>
          ))}
        </ul>
        <button
          type="button"
          className="relative w-full overflow-hidden rounded-[128px] bg-opacity-0 bg-gradient-to-b from-button-hover-1 via-button-hover-2 via-0% to-button-hover-3 pb-4 pt-[17px] font-bold leading-[23px] text-white/0 after:absolute after:left-0 after:top-0 after:flex after:h-full after:w-full after:items-center after:justify-center after:bg-dark-navy after:bg-opacity-100 after:text-white after:transition-all after:content-['Continue'] after:hover:bg-opacity-0 md:text-lg md:leading-[23px]"
        >
          Continue
        </button>
      </section>
    </article>
  )
}
