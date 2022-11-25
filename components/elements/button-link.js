import classNames from "classnames"

import CustomLink from "./custom-link"

const ButtonContent = ({ button, appearance, compact, color}) => {

    //this object is only for tailwind generating the possible css class that may be chosen from backend
    //content shall list all the used dynamic style in component once for every possible colors
    const colorsDefinition = {
      primary: ["bg-primary-600", "text-primary-600", "border-primary-600"],
      neutral: ["bg-neutral-600", "text-neutral-600", "border-neutral-600"],
      red:["bg-red-600", "text-red-600", "border-red-600"],
      orange:["bg-orange-600", "text-orange-600", "border-orange-600"],
      amber:["bg-amber-600", "text-amber-600", "border-amber-600"],
      yellow:["bg-yellow-600", "text-yellow-600", "border-yellow-600"],
      lime:["bg-lime-600", "text-lime-600", "border-lime-600"],
      green:["bg-green-600", "text-green-600", "border-green-600"],
      emerald:["bg-emerald-600", "text-emerald-600", "border-emerald-600"],
      teal:["bg-teal-600", "text-teal-600", "border-teal-600"],
      cyan:["bg-cyan-600", "text-cyan-600", "border-cyan-600"],
      sky:["bg-sky-600", "text-sky-600", "border-sky-600"],
      blue:["bg-blue-600", "text-blue-600", "border-blue-600"],
      indigo:["bg-indigo-600", "text-indigo-600", "border-indigo-600"],
      violet:["bg-violet-600", "text-violet-600", "border-violet-600"],
      purple:["bg-purple-600", "text-purple-600", "border-purple-600"],
      fuchsia:["bg-fuchsia-600", "text-fuchsia-600", "border-fuchsia-600"],
      pink:["bg-pink-600", "text-pink-600", "border-pink-600"],
      rose:["bg-rose-600", "text-rose-600", "border-rose-600"],
    }

  return (
    <div
      className={classNames(
        // Common classes
        "block w-full lg:w-auto text-center uppercase tracking-wide font-semibold text-base md:text-sm border-2 rounded-md",
        // Full-size button
        {
          "px-8 py-4": compact === false,
        },
        // Compact button
        {
          "px-6 py-2": compact === true,
        },
        // Specific to when the button is fully dark
        {
          [`bg-${color}-600 text-white border-${color}-600`]: appearance === "dark",
        },
        // Specific to when the button is dark outlines
        {
          [`text-${color}-600 border-${color}-600`]: appearance === "dark-outline",
        },
        // Specific to when the button is fully white
        {
          [`bg-white text-${color}-600 border-white`]: appearance === "white",
        },
        // Specific to when the button is white outlines
        {
          "text-white border-white": appearance === "white-outline",
        }
      )}
    >
      {button.text}
    </div>
  )
}

const ButtonLink = ({ button, appearance, compact = false, color }) => {

  return (
    <CustomLink link={button}>
      <ButtonContent
        button={button}
        appearance={appearance}
        compact={compact}
        color = {color}
      />
    </CustomLink>
  )
}


export default ButtonLink
