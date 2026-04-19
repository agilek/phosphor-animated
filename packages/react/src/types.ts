import type { SVGAttributes } from 'react';

export type IconWeight = 'thin' | 'light' | 'regular' | 'bold' | 'fill' | 'duotone';

export interface IconProps extends Omit<SVGAttributes<SVGSVGElement>, 'color'> {
  color?: string;
  size?: number | string;
  weight?: IconWeight;
  mirrored?: boolean;
  alt?: string;
}

export interface IconContextValue {
  color?: string;
  size?: number | string;
  weight?: IconWeight;
  mirrored?: boolean;
}

export const DEFAULT_ICON_PROPS: Required<Pick<IconProps, 'color' | 'size' | 'weight' | 'mirrored'>> = {
  color: 'currentColor',
  size: '1em',
  weight: 'regular',
  mirrored: false,
};
