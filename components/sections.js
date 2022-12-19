import { useRouter } from "next/router"
import Hero from "./sections/hero"
import LargeVideo from "./sections/large-video"
import FeatureColumnsGroup from "./sections/feature-columns-group"
import FeatureRowsGroup from "./sections/feature-rows-group"
import BottomActions from "./sections/bottom-actions"
import TestimonialsGroup from "./sections/testimonials-group"
import RichText from "./sections/rich-text"
import Pricing from "./sections/pricing"
import LeadForm from "./sections/lead-form"
import GridMenu from "./sections/grid-menu"
import ImageGrid from "./sections/image-grid"
import Carousel from "./sections/carousel"

// Map Strapi sections to section components
const sectionComponents = {
  ComponentSectionsHero: Hero,
  ComponentSectionsLargeVideo: LargeVideo,
  ComponentSectionsFeatureColumnsGroup: FeatureColumnsGroup,
  ComponentSectionsFeatureRowsGroup: FeatureRowsGroup,
  ComponentSectionsBottomActions: BottomActions,
  ComponentSectionsTestimonialsGroup: TestimonialsGroup,
  ComponentSectionsRichText: RichText,
  ComponentSectionsPricing: Pricing,
  ComponentSectionsLeadForm: LeadForm,
  ComponentSectionsGridMenu: GridMenu,
  ComponentSectionsImageGrid: ImageGrid,
  ComponentSectionsCarousel: Carousel,
}

// Display a section individually
const Section = ({ sectionData, pageContext }) => {
  // Prepare the component
  const SectionComponent = sectionComponents[sectionData.__typename]

  if (!SectionComponent) {
    return null
  }

  // Display the section
  return <SectionComponent data={sectionData} pageContext={pageContext} />
}

// Display the list of sections
const Sections = ({ sections, pageContext }) => {
  //console.log(sections)
  return (
    <div className="flex flex-col">
      {/* Show the actual sections */}
      {sections.map((section) => (
        <Section
          sectionData={section}
          key={`${section.__typename}${section.id}`}
          pageContext={pageContext}
        />
      ))}
    </div>
  )
}

export default Sections
