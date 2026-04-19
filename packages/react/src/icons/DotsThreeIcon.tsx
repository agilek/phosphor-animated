import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><circle cx="128" cy="128" r="8" fill="currentColor"/><circle cx="60" cy="128" r="8" fill="currentColor"/><circle cx="196" cy="128" r="8" fill="currentColor"/></>,
  light: <><circle cx="128" cy="128" r="10" fill="currentColor"/><circle cx="60" cy="128" r="10" fill="currentColor"/><circle cx="196" cy="128" r="10" fill="currentColor"/></>,
  regular: <><circle cx="128" cy="128" r="12" fill="currentColor"/><circle cx="196" cy="128" r="12" fill="currentColor"/><circle cx="60" cy="128" r="12" fill="currentColor"/></>,
  bold: <><circle cx="128" cy="128" r="16" fill="currentColor"/><circle cx="60" cy="128" r="16" fill="currentColor"/><circle cx="196" cy="128" r="16" fill="currentColor"/></>,
  fill: <><path d="M224,80H32A16,16,0,0,0,16,96v64a16,16,0,0,0,16,16H224a16,16,0,0,0,16-16V96A16,16,0,0,0,224,80ZM60,140a12,12,0,1,1,12-12A12,12,0,0,1,60,140Zm68,0a12,12,0,1,1,12-12A12,12,0,0,1,128,140Zm68,0a12,12,0,1,1,12-12A12,12,0,0,1,196,140Z" fill="currentColor"/></>,
  duotone: <><rect x="16" y="80" width="224" height="96" rx="16" opacity="0.2" fill="currentColor"/><circle cx="128" cy="128" r="12" fill="currentColor"/><circle cx="196" cy="128" r="12" fill="currentColor"/><circle cx="60" cy="128" r="12" fill="currentColor"/></>,
};

export const DotsThreeIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
