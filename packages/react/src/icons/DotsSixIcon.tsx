import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><circle cx="60" cy="92" r="8" fill="currentColor"/><circle cx="128" cy="92" r="8" fill="currentColor"/><circle cx="196" cy="92" r="8" fill="currentColor"/><circle cx="60" cy="164" r="8" fill="currentColor"/><circle cx="128" cy="164" r="8" fill="currentColor"/><circle cx="196" cy="164" r="8" fill="currentColor"/></>,
  light: <><circle cx="60" cy="92" r="10" fill="currentColor"/><circle cx="128" cy="92" r="10" fill="currentColor"/><circle cx="196" cy="92" r="10" fill="currentColor"/><circle cx="60" cy="164" r="10" fill="currentColor"/><circle cx="128" cy="164" r="10" fill="currentColor"/><circle cx="196" cy="164" r="10" fill="currentColor"/></>,
  regular: <><circle cx="60" cy="92" r="12" fill="currentColor"/><circle cx="128" cy="92" r="12" fill="currentColor"/><circle cx="196" cy="92" r="12" fill="currentColor"/><circle cx="60" cy="164" r="12" fill="currentColor"/><circle cx="128" cy="164" r="12" fill="currentColor"/><circle cx="196" cy="164" r="12" fill="currentColor"/></>,
  bold: <><circle cx="60" cy="92" r="16" fill="currentColor"/><circle cx="128" cy="92" r="16" fill="currentColor"/><circle cx="196" cy="92" r="16" fill="currentColor"/><circle cx="60" cy="164" r="16" fill="currentColor"/><circle cx="128" cy="164" r="16" fill="currentColor"/><circle cx="196" cy="164" r="16" fill="currentColor"/></>,
  fill: <><path d="M224,48H32A16,16,0,0,0,16,64V192a16,16,0,0,0,16,16H224a16,16,0,0,0,16-16V64A16,16,0,0,0,224,48ZM68,168a12,12,0,1,1,12-12A12,12,0,0,1,68,168Zm0-56a12,12,0,1,1,12-12A12,12,0,0,1,68,112Zm60,56a12,12,0,1,1,12-12A12,12,0,0,1,128,168Zm0-56a12,12,0,1,1,12-12A12,12,0,0,1,128,112Zm60,56a12,12,0,1,1,12-12A12,12,0,0,1,188,168Zm0-56a12,12,0,1,1,12-12A12,12,0,0,1,188,112Z" fill="currentColor"/></>,
  duotone: <><rect x="16" y="48" width="224" height="160" rx="16" opacity="0.2" fill="currentColor"/><circle cx="60" cy="92" r="12" fill="currentColor"/><circle cx="128" cy="92" r="12" fill="currentColor"/><circle cx="196" cy="92" r="12" fill="currentColor"/><circle cx="60" cy="164" r="12" fill="currentColor"/><circle cx="128" cy="164" r="12" fill="currentColor"/><circle cx="196" cy="164" r="12" fill="currentColor"/></>,
};

export const DotsSixIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
