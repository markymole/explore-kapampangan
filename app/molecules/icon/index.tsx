import type { FC, SVGProps } from "react";

// Please arrange to alphabetical order
export const iconIds = [
  // header icons
  "restaurant-menu",
  "location-city",
  "calendar-month",
  "travel-explore",
  "app-shortcut",
  "widget",
  // general icons
  "search",
  "chevron-down",
] as const;
export type IconIds = (typeof iconIds)[number];

interface IconProps extends SVGProps<SVGSVGElement> {
  icon: IconIds;
  size?: number;
}

const Icon: FC<IconProps> = ({ icon, size = 24, ...props }) =>
  iconIds.includes(icon) ? (
    <svg width={size} height={size} role="img" aria-label={icon} {...props}>
      <use href={`/icons/sprite.svg#${icon}`} />
    </svg>
  ) : null;

export default Icon;
