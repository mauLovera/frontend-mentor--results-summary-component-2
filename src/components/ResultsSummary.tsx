import useResults from "@/hooks/useResults"

export default async function ResultsSummary() {
  const { results, average } = await useResults()

  const colorMap = {
    reaction: "text-reaction bg-reaction-light",
    memory: "text-memory bg-memory-light",
    verbal: "text-verbal bg-verbal-light",
    visual: "text-visual bg-visual-light",
  }

  return (
    <article className="md:flex-row flex flex-col">
      <section className="from-results-1 via-results-2 to-results-3 flex flex-col items-center gap-6 rounded-b-[32px] bg-gradient-to-b from-0% via-0% to-100% px-14 pb-10 pt-6 text-center">
        <h1 className="text-light-blue text-lg font-bold leading-[23px]">
          Your Results
        </h1>
        <div className="from-results-circle-1 to-results-circle-2 flex size-[140px] flex-col items-center justify-center rounded-full bg-gradient-to-b">
          <span className="text-[56px] font-extrabold leading-[72px] text-white">
            {average}
          </span>
          <span className="text-light-blue text-base font-bold leading-[21px] opacity-[51.68%]">
            of 100
          </span>
        </div>
        <section className="max-w-[260px]">
          <h2 className="mb-2 text-2xl font-bold leading-[31px] text-white">
            Great
          </h2>
          <p className="text-light-blue text-base font-medium leading-[21px]  ">
            Your performance exceed 65% of the people conducting the test here!
          </p>
        </section>
      </section>
      <section className="flex flex-col gap-6 bg-white px-[30px] pb-[30px] pt-6">
        <h3 className="text-lg font-bold leading-[24px]">Summary</h3>
        <ul className="felx-col flex flex-col gap-4">
          {results.map((result, index) => (
            <li
              className={
                "flex items-center justify-between rounded-xl px-4 pb-[18px] pt-[17px] " +
                colorMap[
                  result.category.toLocaleLowerCase() as keyof typeof colorMap
                ]
              }
              key={index}
            >
              <div
                className={"flex items-center gap-3 font-medium leading-[21px]"}
              >
                <img
                  src={result.icon}
                  alt={result.category}
                  className={"size-5"}
                />
                {result.category}
              </div>
              <div className="text-dark-navy font-bold leading-[21px]">
                {result.score}{" "}
                <span className="text-dark-navy opacity-50">/ 100</span>
              </div>
            </li>
          ))}
        </ul>
        <button
          type="button"
          className="bg-dark-navy w-full rounded-[128px] pb-4 pt-[17px] font-bold leading-[23px] text-white"
        >
          Continue
        </button>
      </section>
    </article>
  )
}
