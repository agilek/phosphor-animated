import { forwardRef, useContext, useLayoutEffect, useRef, type ReactNode } from 'react';
import { IconContext } from './IconContext';
import { DEFAULT_ICON_PROPS, type IconProps, type IconWeight } from './types';

export type IconWeights = Record<IconWeight, ReactNode>;

interface InternalIconProps extends IconProps {
  weights: IconWeights;
}

export const Icon = forwardRef<SVGSVGElement, InternalIconProps>(function Icon(
  { weights, color, size, weight, mirrored, alt, className, style, ...rest },
  forwardedRef,
) {
  const ctx = useContext(IconContext);
  const resolved = {
    color: color ?? ctx.color ?? DEFAULT_ICON_PROPS.color,
    size: size ?? ctx.size ?? DEFAULT_ICON_PROPS.size,
    weight: weight ?? ctx.weight ?? DEFAULT_ICON_PROPS.weight,
    mirrored: mirrored ?? ctx.mirrored ?? DEFAULT_ICON_PROPS.mirrored,
  };

  const localRef = useRef<SVGSVGElement>(null);
  const setRefs = (node: SVGSVGElement | null) => {
    localRef.current = node;
    if (typeof forwardedRef === 'function') forwardedRef(node);
    else if (forwardedRef) forwardedRef.current = node;
  };

  // After every render, measure each draw-line path's geometric length and set
  // it as a CSS custom property. Animation keyframes interpolate dashoffset
  // from 0 to that length for a smooth, gradual draw animation regardless of
  // path complexity.
  useLayoutEffect(() => {
    const svg = localRef.current;
    if (!svg) return;
    const paths = svg.querySelectorAll<SVGGeometryElement>('.draw-line');
    paths.forEach((path) => {
      try {
        const len = path.getTotalLength();
        if (len > 0) path.style.setProperty('--draw-length', `${len}`);
      } catch {
        // getTotalLength can throw on pathological SVG content; ignore.
      }
    });
  }, [resolved.weight]);

  const mergedClassName = ['phosphor-animated-icon', className].filter(Boolean).join(' ');
  const mergedStyle = {
    color: resolved.color,
    ...(resolved.mirrored ? { transform: 'scaleX(-1)' } : {}),
    ...style,
  };

  return (
    <svg
      ref={setRefs}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      width={resolved.size}
      height={resolved.size}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={mergedClassName}
      style={mergedStyle}
      role={alt ? 'img' : undefined}
      aria-label={alt}
      {...rest}
    >
      {weights[resolved.weight]}
    </svg>
  );
});
