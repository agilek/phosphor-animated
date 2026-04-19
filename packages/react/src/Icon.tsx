import { forwardRef, useContext, useState, type ReactNode, type MouseEvent } from 'react';
import { IconContext } from './IconContext';
import { DEFAULT_ICON_PROPS, type IconProps, type IconWeight } from './types';

export type IconWeights = Record<IconWeight, ReactNode>;

interface InternalIconProps extends IconProps {
  weights: IconWeights;
}

export const Icon = forwardRef<SVGSVGElement, InternalIconProps>(function Icon(
  { weights, color, size, weight, mirrored, alt, className, style, onMouseEnter, ...rest },
  ref,
) {
  const ctx = useContext(IconContext);
  const resolved = {
    color: color ?? ctx.color ?? DEFAULT_ICON_PROPS.color,
    size: size ?? ctx.size ?? DEFAULT_ICON_PROPS.size,
    weight: weight ?? ctx.weight ?? DEFAULT_ICON_PROPS.weight,
    mirrored: mirrored ?? ctx.mirrored ?? DEFAULT_ICON_PROPS.mirrored,
  };
  const [animKey, setAnimKey] = useState(0);

  const handleMouseEnter = (event: MouseEvent<SVGSVGElement>) => {
    setAnimKey((k) => k + 1);
    onMouseEnter?.(event);
  };

  const mergedClassName = ['phosphor-animated-icon', className].filter(Boolean).join(' ');
  const mergedStyle = {
    ...(resolved.mirrored ? { transform: 'scaleX(-1)' } : {}),
    ...style,
  };

  return (
    <svg
      ref={ref}
      key={animKey}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      width={resolved.size}
      height={resolved.size}
      fill="none"
      stroke={resolved.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={16}
      className={mergedClassName}
      style={mergedStyle}
      role={alt ? 'img' : undefined}
      aria-label={alt}
      onMouseEnter={handleMouseEnter}
      {...rest}
    >
      {weights[resolved.weight]}
    </svg>
  );
});
