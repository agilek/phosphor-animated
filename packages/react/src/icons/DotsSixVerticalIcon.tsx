import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><circle cx="92" cy="60" r="8" fill="currentColor"/><circle cx="164" cy="60" r="8" fill="currentColor"/><circle cx="92" cy="128" r="8" fill="currentColor"/><circle cx="164" cy="128" r="8" fill="currentColor"/><circle cx="92" cy="196" r="8" fill="currentColor"/><circle cx="164" cy="196" r="8" fill="currentColor"/></>,
  light: <><circle cx="92" cy="60" r="10" fill="currentColor"/><circle cx="164" cy="60" r="10" fill="currentColor"/><circle cx="92" cy="128" r="10" fill="currentColor"/><circle cx="164" cy="128" r="10" fill="currentColor"/><circle cx="92" cy="196" r="10" fill="currentColor"/><circle cx="164" cy="196" r="10" fill="currentColor"/></>,
  regular: <><circle cx="92" cy="60" r="12" fill="currentColor"/><circle cx="164" cy="60" r="12" fill="currentColor"/><circle cx="92" cy="128" r="12" fill="currentColor"/><circle cx="164" cy="128" r="12" fill="currentColor"/><circle cx="92" cy="196" r="12" fill="currentColor"/><circle cx="164" cy="196" r="12" fill="currentColor"/></>,
  bold: <><circle cx="92" cy="60" r="16" fill="currentColor"/><circle cx="164" cy="60" r="16" fill="currentColor"/><circle cx="92" cy="128" r="16" fill="currentColor"/><circle cx="164" cy="128" r="16" fill="currentColor"/><circle cx="92" cy="196" r="16" fill="currentColor"/><circle cx="164" cy="196" r="16" fill="currentColor"/></>,
  fill: <><path d="M192,16H64A16,16,0,0,0,48,32V224a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16V32A16,16,0,0,0,192,16ZM100,200a12,12,0,1,1,12-12A12,12,0,0,1,100,200Zm0-60a12,12,0,1,1,12-12A12,12,0,0,1,100,140Zm0-60a12,12,0,1,1,12-12A12,12,0,0,1,100,80Zm56,120a12,12,0,1,1,12-12A12,12,0,0,1,156,200Zm0-60a12,12,0,1,1,12-12A12,12,0,0,1,156,140Zm0-60a12,12,0,1,1,12-12A12,12,0,0,1,156,80Z" fill="currentColor"/></>,
  duotone: <><rect x="48" y="16" width="160" height="224" rx="16" opacity="0.2" fill="currentColor"/><circle cx="92" cy="60" r="12" fill="currentColor"/><circle cx="164" cy="60" r="12" fill="currentColor"/><circle cx="92" cy="128" r="12" fill="currentColor"/><circle cx="164" cy="128" r="12" fill="currentColor"/><circle cx="92" cy="196" r="12" fill="currentColor"/><circle cx="164" cy="196" r="12" fill="currentColor"/></>,
};

export const DotsSixVerticalIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
