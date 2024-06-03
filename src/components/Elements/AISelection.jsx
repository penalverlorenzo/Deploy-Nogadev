/**
 * v0 by Vercel.
 * @see https://v0.dev/t/8eSUytrSEP6
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Select, SelectTrigger, SelectValue, SelectContent, SelectGroup, SelectItem } from "@/components/ui/select"

export function IASelect() {
  return (
    <div className="flex justify-center my-8">
      <Select defaultValue="option1">
        <SelectTrigger className="w-[200px]">
          <SelectValue placeholder="Select an option" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="option1">Open AI</SelectItem>
            <SelectItem value="option2">Vertex</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  )
}