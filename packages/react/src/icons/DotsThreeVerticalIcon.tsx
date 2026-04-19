import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><circle cx="128" cy="60" r="8" fill="currentColor"/><circle cx="128" cy="128" r="8" fill="currentColor"/><circle cx="128" cy="196" r="8" fill="currentColor"/></>,
  light: <><circle cx="128" cy="60" r="10" fill="currentColor"/><circle cx="128" cy="128" r="10" fill="currentColor"/><circle cx="128" cy="196" r="10" fill="currentColor"/></>,
  regular: <><circle cx="128" cy="128" r="12" fill="currentColor"/><circle cx="128" cy="60" r="12" fill="currentColor"/><circle cx="128" cy="196" r="12" fill="currentColor"/></>,
  bold: <><circle cx="128" cy="60" r="16" fill="currentColor"/><circle cx="128" cy="128" r="16" fill="currentColor"/><circle cx="128" cy="196" r="16" fill="currentColor"/></>,
  fill: <><path d="M160,16H96A16,16,0,0,0,80,32V224a16,16,0,0,0,16,16h64a16,16,0,0,0,16-16V32A16,16,0,0,0,160,16ZM128,208a12,12,0,1,1,12-12A12,12,0,0,1,128,208Zm0-68a12,12,0,1,1,12-12A12,12,0,0,1,128,140Zm0-68a12,12,0,1,1,12-12A12,12,0,0,1,128,72Z" fill="currentColor"/></>,
  duotone: <><rect x="80" y="16" width="96" height="224" rx="16" opacity="0.2" fill="currentColor"/><circle cx="128" cy="128" r="12" fill="currentColor"/><circle cx="128" cy="60" r="12" fill="currentColor"/><circle cx="128" cy="196" r="12" fill="currentColor"/></>,
};

export const DotsThreeVerticalIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
