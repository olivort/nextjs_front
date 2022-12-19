import NextImage from "../elements/image"

const GridMenu = ({ data, pageContext }) => {
    return (
      <>

      <div className="prose prose-lg container py-12">
        {data.week}
      </div> 
      <div className="container flex flex-col lg:flex-row lg:flex-wrap gap-12 align-top py-12">
      {data.gridMenu.map((dayMenu) => (
        <div className="flex-1 text-lg" key={dayMenu.day}>
          <div className="w-10 h-10">
            <NextImage media={dayMenu.image.data.attributes} />
          </div>
          <h2 className="font-bold mt-4 mb-4">{dayMenu.day}</h2>
          <h3 className="font-bold mt-4 mb-4">{dayMenu.title}</h3>
          <p style={{whiteSpace: 'pre-line'}}>{dayMenu.description}</p>
        </div>
      ))}
    </div>

      </>
    )
  }
  
  
  export default GridMenu
  