import useResults from "@/hooks/useResults"

export default async function ResultsSummary() {
  const { results, average } = await useResults()

  return (
    <article className="md:flex-row flex flex-col">
      <section className="from-results-1 via-results-2 to-results-3 flex flex-col items-center gap-6 bg-gradient-to-b from-0% via-0% to-100% pt-6 pb-10 px-14 text-center rounded-b-[32px]">
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
          <h2 className="text-2xl font-bold leading-[31px] text-white mb-2">
            Great
          </h2>
          <p className="text-light-blue text-base font-medium leading-[21px]  ">
            Your performance exceed 65% of the people conducting the test here!
          </p>
        </section>
      </section>
      <section></section>
    </article>
  )
}
