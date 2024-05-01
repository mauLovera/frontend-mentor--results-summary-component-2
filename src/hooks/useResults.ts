import { promises as fs } from "fs"

interface Result {
  category: "Reaction" | "Memory" | "Verbal" | "Visual"
  score: number
  icon?: null
}

interface Props {
  results: Result[]
}

export default async function useResults() {
  const file = await fs.readFile(process.cwd() + "/data.json", "utf8")
  
  const results: Result[] = JSON.parse(file)
  const average: number = Math.floor(
    results.map((result) => result.score).reduce((prev, curr) => prev + curr) /
      results.length,
  )

  return { results, average }
}
