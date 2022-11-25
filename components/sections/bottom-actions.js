import ButtonLink from "../elements/button-link"
import { getButtonAppearance } from "../../lib/button"

const BottomActions = ({ data, pageContext }) => {


    //this object is only for tailwind generating the possible css class that may be chosen from backend
    //content shall list all the used dynamic style in component once for every possible colors
    const colorsDefinition = {
      primary: ["bg-primary-800"],
      neutral: ["bg-neutral-800"],
      red:["bg-red-800"],
      orange:["bg-orange-800"],
      amber:["bg-amber-800"],
      yellow:["bg-yellow-800"],
      lime:["bg-lime-800"],
      green:["bg-green-800"],
      emerald:["bg-emerald-800"],
      teal:["bg-teal-800"],
      cyan:["bg-cyan-800"],
      sky:["bg-sky-800"],
      blue:["bg-blue-800"],
      indigo:["bg-indigo-800"],
      violet:["bg-violet-800"],
      purple:["bg-purple-800"],
      fuchsia:["bg-fuchsia-800"],
      pink:["bg-pink-800"],
      rose:["bg-rose-800"],
    }

  if(pageContext.primaryColor === null){
    var myColor = "primary"
  }else {
    var myColor = pageContext.primaryColor.tailwindColor
  }

  return (
    <section className={`bg-${myColor}-800 py-20 text-center`}>
      <h2 className="title text-white mb-10">{data.title}</h2>
      {/* Buttons row */}
      <div className="container flex flex-row justify-center flex-wrap gap-4">
        {data.buttons.map((button) => (
          <ButtonLink
            button={button}
            appearance={getButtonAppearance(button.type, "dark")}
            key={button.id}
            color={myColor}
          />
        ))}
      </div>
    </section>
  )
}

export default BottomActions
