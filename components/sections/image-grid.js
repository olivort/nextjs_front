
import NextImage from "../elements/image"
import Image from "next/image"

const ImageGrid = ({ data, pageContext }) => {
    //console.log(data.image)
    return (
      <>
      <section class="overflow-hidden text-gray-700 ">
        <div class="container mx-auto">
          <div class="flex flex-col text-center w-full mb-20">
            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Gallery Title</h1>
            <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Galery description text.</p>
          </div>
          <div class="flex flex-wrap items-center">
            {data.image.data.map(item => {
              return(
              <div class="w-full lg:w-1/3 p-2 md:w-1/2">
                  <NextImage media={item.attributes} />
              </div>)      
            })}
          </div>
        </div>
      </section>

      </>
    )
  }
  
  
  export default ImageGrid