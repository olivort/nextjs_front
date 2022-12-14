
import Markdown from "react-markdown"

const RichText = ({ data, pageContext }) => {
  const isMarkdown = false
  return (
    <>
    { isMarkdown ? 
    <div className="prose prose-lg container py-12">
      <Markdown>{data.content}</Markdown>
    </div> 
    : <div className="prose prose-lg container py-12" dangerouslySetInnerHTML={{ __html: data.content }}></div>
    }
    </>
  )
}


export default RichText
