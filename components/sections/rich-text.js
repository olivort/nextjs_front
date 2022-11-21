
import Markdown from "react-markdown"

const RichText = ({ data }) => {
  return (
    <div className="prose prose-lg container py-12">
      <Markdown>{data.content}</Markdown>
    </div>
  )
}


export default RichText
