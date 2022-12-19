
import NextImage from "../elements/image"
import Image from "next/image"

// carousel from tailwind elements https://tailwind-elements.com/docs/standard/components/carousel/
const Carousel = ({ data, pageContext }) => {
    console.log(data.image)
    return (
      <>
    <div class="container mx-auto">
        <div id="carouselExampleControls" class="carousel slide relative" data-bs-ride="carousel">
        <div class="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
        {data.image.data.map((item,index) => {
                  var current = (index === 0) ? "true": "false"
                  var cls = (index === 0) ? 'active' : '';
                  return(
                    <button
                    type="button"
                    data-bs-target="#carouselExampleControls"
                    data-bs-slide-to={String(index)}
                    class={cls}
                    aria-current={current}
                  ></button>
                  )    
        })}
      </div>

      <div class="carousel-inner relative w-full overflow-hidden">
            {data.image.data.map((item,index) => {
              var cls = (index === 0) ? 'carousel-item active relative float-left w-full' : 'carousel-item relative float-left w-full';
              return(
                <div class={ cls }>
                  <NextImage class="block w-full" media={item.attributes} />
                </div>
              )
            })}
      </div>
      <button
        class="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
</div>
      </>
    )
  }
  
  
  export default Carousel